import type { Loader } from "astro/loaders";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  astJsonToRenderIR,
  renderIRToHtml,
  type CmkAstDocument,
} from "@centrmark/cmk-renderer";
import { parseCmk } from "@centrmark/parse";

export type CentrmarkLoaderOptions = {
  base?: string;
  cliPath?: string;
};

export type CmkBlogFrontmatter = {
  title?: string;
  description?: string;
  pubDate?: string;
  draft?: boolean;
  series?: string;
  seriesOrder?: number;
  seriesHub?: boolean;
};

/** SDL frontmatter extractor for blog `.cmk` schemas (includes optional series fields). */
export function parseCmkBlogFrontmatter(raw: string): CmkBlogFrontmatter {
  const out: CmkBlogFrontmatter = {};
  const title = /(?:^|\n)title\s+"((?:[^"\\]|\\.)*)"/.exec(raw);
  const description = /(?:^|\n)description\s+"((?:[^"\\]|\\.)*)"/.exec(raw);
  const pubDate = /(?:^|\n)pubDate\s+"((?:[^"\\]|\\.)*)"/.exec(raw);
  const draft = /(?:^|\n)draft\s+(true|false)/.exec(raw);
  const series = /(?:^|\n)series\s+"((?:[^"\\]|\\.)*)"/.exec(raw);
  const seriesOrder = /(?:^|\n)seriesOrder\s+(\d+)/.exec(raw);
  const seriesHub = /(?:^|\n)seriesHub\s+(true|false)/.exec(raw);
  if (title) out.title = title[1];
  if (description) out.description = description[1];
  if (pubDate) out.pubDate = pubDate[1];
  if (draft) out.draft = draft[1] === "true";
  if (series) out.series = series[1];
  if (seriesOrder) out.seriesOrder = Number.parseInt(seriesOrder[1], 10);
  if (seriesHub) out.seriesHub = seriesHub[1] === "true";
  return out;
}

async function listCmkFiles(dir: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(current: string): Promise<void> {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".cmk")) {
        out.push(full);
      }
    }
  }
  await walk(dir);
  return out;
}

function resolveProjectRoot(root: URL | string): string {
  if (typeof root === "string") return root;
  return fileURLToPath(root);
}

/** Astro content collection loader for `.cmk` blog posts (series-aware frontmatter). */
export function centrmarkBlogLoader(options: CentrmarkLoaderOptions = {}): Loader {
  const base = options.base ?? "./src/content/blog";
  const cliPath = options.cliPath;

  return {
    name: "centrmark-blog-loader",
    load: async ({ store, config, logger, parseData, generateDigest }) => {
      const rootPath = resolveProjectRoot(config.root);
      const contentDir = path.resolve(rootPath, base);
      const files = await listCmkFiles(contentDir);
      store.clear();
      logger.info(`CentrMark blog loader: ${files.length} file(s) in ${contentDir}`);

      for (const filePath of files) {
        const source = await readFile(filePath, "utf8");
        const id = path.basename(filePath, ".cmk");
        const ast: CmkAstDocument = await parseCmk(source, cliPath ? { cliPath } : undefined);
        const fm = parseCmkBlogFrontmatter(ast.frontmatter?.raw ?? "");
        const html = renderIRToHtml(astJsonToRenderIR(ast));
        const data = await parseData({
          id,
          data: {
            title: fm.title ?? id,
            description: fm.description,
            pubDate: fm.pubDate
              ? new Date(fm.pubDate)
              : new Date((await stat(filePath)).mtimeMs),
            draft: fm.draft ?? false,
            series: fm.series,
            seriesOrder: fm.seriesOrder,
            seriesHub: fm.seriesHub ?? false,
            html,
            cmkSource: source,
          },
        });
        store.set({
          id,
          data,
          body: source,
          digest: generateDigest(source),
        });
      }
    },
  };
}
