// @ts-check
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import centrmark from "@centrmark/astro";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hiveWinCli = path.resolve(
  __dirname,
  "..",
  "..",
  "dev-centr",
  "centrmark",
  "dlang",
  "centrmark-cli",
  "bin",
  "centrmark-cli.exe"
);
const hiveUnixCli = path.resolve(
  __dirname,
  "..",
  "..",
  "dev-centr",
  "centrmark",
  "dlang",
  "centrmark-cli",
  "bin",
  "centrmark-cli"
);
const vendorUnixCli = path.resolve(
  __dirname,
  "vendor",
  "centrmark",
  "dlang",
  "centrmark-cli",
  "bin",
  "centrmark-cli"
);
const defaultCli = existsSync(hiveWinCli)
  ? hiveWinCli
  : existsSync(hiveUnixCli)
    ? hiveUnixCli
    : existsSync(vendorUnixCli)
      ? vendorUnixCli
      : undefined;

function siteVersionFromBuild() {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs %h"], {
      cwd: __dirname,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const match = /^(\d{4}-\d{2}-\d{2})\s+([0-9a-f]+)$/i.exec(out);
    if (match) return `${match[1].replace(/-/g, ".")}.${match[2]}`;
  } catch {
    // Git is missing or this tree is not a repository.
  }
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}.${month}.${day}`;
}

const siteVersion = siteVersionFromBuild();

// https://astro.build/config
export default defineConfig({
  site: "https://ryanjohnson.dev",
  redirects: {
    "/for-fun/chatgpt-roast": "/blog/posts/the-roast-of-ryan-johnson",
  },
  integrations: [
    solid(),
    sitemap({
      // Unlisted / private pages use noindex; keep them out of the sitemap.
      filter: (page) => !page.includes("/u/"),
    }),
    centrmark({
      cliPath: process.env.CENTRMARK_CLI || defaultCli,
    }),
  ],
  vite: {
    define: {
      "import.meta.env.SITE_VERSION": JSON.stringify(siteVersion),
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    ssr: {
      noExternal: ["@centrmark/cmk-renderer", "@centrmark/parse", "@centrmark/astro"],
    },
  },
});
