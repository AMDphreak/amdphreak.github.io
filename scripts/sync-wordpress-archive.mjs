/**
 * Fetches WordPress posts/pages from ryanjohnson.website via REST API,
 * writes wordpress-archive/ (manifest + post JSON5 + optional media).
 *
 * Run: pnpm sync:wordpress
 */
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import JSON5 from "json5";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const archiveRoot = join(root, "wordpress-archive");
const postsDir = join(archiveRoot, "posts");
const pagesDir = join(archiveRoot, "pages");
const mediaDir = join(archiveRoot, "media");

const ORIGIN = "https://www.ryanjohnson.website";
const API = `${ORIGIN}/wp-json/wp/v2`;

function today() {
  return new Date().toISOString().slice(0, 10);
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function writeJson5(filePath, data) {
  mkdirSync(dirname(filePath), { recursive: true });
  const body = JSON5.stringify(data, null, 2);
  writeFileSync(filePath, `${body}\n`, "utf8");
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": "ryanjohnson.dev-wordpress-archive/1.0" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return { json: await res.json(), headers: res.headers };
}

async function fetchAllPosts() {
  const posts = [];
  let page = 1;
  let totalPages = 1;
  while (page <= totalPages) {
    const url = `${API}/posts?per_page=20&page=${page}&_embed=1`;
    const { json, headers } = await fetchJson(url);
    const tp = Number(headers.get("X-WP-TotalPages") || "1");
    totalPages = Number.isFinite(tp) ? tp : 1;
    posts.push(...json);
    console.log(`Fetched posts page ${page}/${totalPages} (${json.length} items)`);
    page += 1;
  }
  return posts;
}

async function downloadMedia(url, slugHint) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "ryanjohnson.dev-wordpress-archive/1.0" },
    });
    if (!res.ok) return null;
    const pathname = new URL(url).pathname;
    const base = pathname.split("/").filter(Boolean).pop() || `${slugHint}.bin`;
    const safe = base.replace(/[^a-zA-Z0-9._-]/g, "_");
    const out = join(mediaDir, safe);
    if (!existsSync(out)) {
      mkdirSync(mediaDir, { recursive: true });
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(out, buf);
      console.log(`  media → media/${safe}`);
    }
    return `media/${safe}`;
  } catch (err) {
    console.warn(`  media skip ${url}: ${err.message}`);
    return null;
  }
}

function loadExistingAbout() {
  const aboutPath = join(pagesDir, "about.json5");
  if (existsSync(aboutPath)) {
    return JSON5.parse(readFileSync(aboutPath, "utf8"));
  }
  return null;
}

async function main() {
  mkdirSync(postsDir, { recursive: true });
  mkdirSync(pagesDir, { recursive: true });

  const capturedAt = today();
  const about = loadExistingAbout();
  if (!about) {
    console.warn("Missing wordpress-archive/pages/about.json5 — seed it before syncing.");
  }

  let wpPosts = [];
  try {
    wpPosts = await fetchAllPosts();
  } catch (err) {
    console.error("WordPress REST fetch failed:", err.message);
    console.error("Writing manifest with existing on-disk posts only.");
  }

  const postSummaries = [];

  for (const p of wpPosts) {
    const slug = p.slug;
    const title = stripHtml(p.title?.rendered || slug);
    const contentHtml = p.content?.rendered || "";
    const excerpt = stripHtml(p.excerpt?.rendered || "");
    const date = (p.date || "").slice(0, 10);
    const sourceUrl = p.link || `${ORIGIN}/${p.id}/`;

    let featuredMedia = null;
    const mediaUrl =
      p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      p._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url;
    if (mediaUrl) {
      featuredMedia = await downloadMedia(mediaUrl, slug);
    }

    const record = {
      slug,
      title,
      date,
      sourceUrl,
      capturedAt,
      excerpt: excerpt || undefined,
      contentHtml,
      featuredMedia: featuredMedia || undefined,
      wordpressId: p.id,
    };

    writeJson5(join(postsDir, `${slug}.json5`), record);
    postSummaries.push({
      slug,
      title,
      date,
      sourceUrl,
      capturedAt,
      excerpt: excerpt || undefined,
      path: `posts/${slug}.json5`,
    });
    console.log(`Wrote posts/${slug}.json5`);
  }

  // If API failed, still index any existing post files
  if (postSummaries.length === 0 && existsSync(postsDir)) {
    const { readdirSync } = await import("node:fs");
    for (const file of readdirSync(postsDir).filter((f) => f.endsWith(".json5"))) {
      const rec = JSON5.parse(readFileSync(join(postsDir, file), "utf8"));
      postSummaries.push({
        slug: rec.slug,
        title: rec.title,
        date: rec.date,
        sourceUrl: rec.sourceUrl,
        capturedAt: rec.capturedAt,
        excerpt: rec.excerpt,
        path: `posts/${file}`,
      });
    }
  }

  const pages = [];
  if (about) {
    pages.push({
      slug: about.slug || "about",
      title: about.title || "About",
      sourceUrl: about.sourceUrl,
      capturedAt: about.capturedAt,
      path: "pages/about.json5",
    });
  }

  const manifest = {
    sourceOrigin: ORIGIN,
    generatedAt: capturedAt,
    pages,
    posts: postSummaries.sort((a, b) => (a.date < b.date ? 1 : -1)),
  };

  writeJson5(join(archiveRoot, "manifest.json5"), manifest);
  console.log(
    `\nDone. Manifest: ${pages.length} page(s), ${postSummaries.length} post(s) → wordpress-archive/manifest.json5`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
