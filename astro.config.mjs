// @ts-check
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import centrmark from "@centrmark/astro";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const winCli = path.resolve(
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
const unixCli = path.resolve(
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
const defaultCli = existsSync(winCli) ? winCli : existsSync(unixCli) ? unixCli : undefined;

// https://astro.build/config
export default defineConfig({
  integrations: [
    solid(),
    centrmark({
      cliPath: process.env.CENTRMARK_CLI || defaultCli,
    }),
  ],
  vite: {
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
