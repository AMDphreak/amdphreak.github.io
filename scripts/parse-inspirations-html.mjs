import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const html = await fetch("https://www.ryanjohnson.website/inspirations/").then((r) =>
  r.text(),
);

function decode(s) {
  return s
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/<[^>]+>/g, "")
    .trim();
}

const coverBlocks = [
  ...html.matchAll(
    /wp-block-cover__image-background[^>]+src="([^"]+)"[\s\S]*?<blockquote[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>\s*(?:<cite>([\s\S]*?)<\/cite>)?/gi,
  ),
];

const plainQuotes = [
  ...html.matchAll(
    /<blockquote[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>\s*(?:<cite>([\s\S]*?)<\/cite>)?/gi,
  ),
];

const featured = coverBlocks.map((m, i) => ({
  id: `featured-${i}`,
  imageUrl: m[1],
  quote: decode(m[2]),
  attribution: decode(m[3] || ""),
}));

console.log("featured with images:", featured.length);
featured.forEach((f) => console.log("-", f.attribution || f.quote.slice(0, 40), "->", f.imageUrl.split("/").pop()));

writeFileSync(join(__dirname, ".parsed-inspirations.json"), JSON.stringify({ featured, plainCount: plainQuotes.length }, null, 2));
