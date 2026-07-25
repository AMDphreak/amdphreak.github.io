/**
 * Load WordPress archive manifest and post records from wordpress-archive/.
 * Data is produced by scripts/sync-wordpress-archive.mjs (JSON5 on disk).
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import JSON5 from "json5";

export type ArchivePageSummary = {
  slug: string;
  title: string;
  sourceUrl: string;
  capturedAt: string;
  path: string;
};

export type ArchivePostSummary = {
  slug: string;
  title: string;
  date: string;
  sourceUrl: string;
  capturedAt: string;
  excerpt?: string;
  path: string;
};

export type WordPressArchiveManifest = {
  sourceOrigin: string;
  generatedAt: string;
  pages: ArchivePageSummary[];
  posts: ArchivePostSummary[];
};

export type ArchivePost = ArchivePostSummary & {
  contentHtml: string;
};

const root = join(process.cwd(), "wordpress-archive");

function readJson5<T>(filePath: string): T {
  return JSON5.parse(readFileSync(filePath, "utf8")) as T;
}

export function loadWordPressArchiveManifest(): WordPressArchiveManifest {
  const manifestPath = join(root, "manifest.json5");
  if (!existsSync(manifestPath)) {
    return {
      sourceOrigin: "https://www.ryanjohnson.website",
      generatedAt: "never",
      pages: [
        {
          slug: "about",
          title: "About",
          sourceUrl: "https://www.ryanjohnson.website/about/",
          capturedAt: "2026-05-30",
          path: "pages/about.json5",
        },
      ],
      posts: [],
    };
  }
  return readJson5<WordPressArchiveManifest>(manifestPath);
}

export function loadArchivePost(slug: string): ArchivePost | null {
  const filePath = join(root, "posts", `${slug}.json5`);
  if (!existsSync(filePath)) return null;
  return readJson5<ArchivePost>(filePath);
}

export function listArchivePostSlugs(): string[] {
  const postsDir = join(root, "posts");
  if (!existsSync(postsDir)) return [];
  return readdirSync(postsDir)
    .filter((f) => f.endsWith(".json5"))
    .map((f) => f.replace(/\.json5$/, ""));
}
