import fs from "node:fs";
import path from "node:path";
import JSON5 from "json5";
import { getCollection } from "astro:content";
import {
  buildIndexFromCollection,
  loadTaxonomyFromString,
  type TagIndex,
} from "@content-tags/astro";

/** Project-root path — import.meta.url is unreliable after Astro/Vite bundles this module. */
const taxonomyPath = path.join(process.cwd(), "src/content/taxonomy.json5");

export function loadSiteTaxonomy() {
  const text = fs.readFileSync(taxonomyPath, "utf8");
  return loadTaxonomyFromString(text, { parse: JSON5.parse });
}

export async function buildSiteTagIndex(): Promise<TagIndex> {
  const taxonomy = loadSiteTaxonomy();
  const entries = await getCollection("blog");
  return buildIndexFromCollection(taxonomy, entries, {
    hrefForId: (id) => `/blog/posts/${id}`,
  });
}
