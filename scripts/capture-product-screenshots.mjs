/**
 * Capture product homepage screenshots, then prebake Lanczos srcset tiers.
 *
 * Output (via process-product-screenshots.py):
 *   public/products/{id}-400.webp  — ~1× card CSS width (4:3)
 *   public/products/{id}-800.webp  — ~2× / retina
 *
 * Homepage hover uses CSS `transform: scale()` only — no live Lanczos/pica.
 *
 * Usage:
 *   pnpm dlx --package=playwright@1.52.0 playwright install chromium
 *   pnpm dlx --package=playwright@1.52.0 node scripts/capture-product-screenshots.mjs
 *
 * Reprocess existing masters without a browser:
 *   python scripts/process-product-screenshots.py
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "products");

/** Live Playwright captures — homepage hero only, not full-page. */
const captureTargets = [
  { id: "linx", url: "https://linx.photos/" },
  { id: "dev-centr", url: "https://devcentr.org/" },
  { id: "foodtrucknerdz", url: "https://foodtrucknerdz.com/" },
];

/**
 * Skip live capture — use a checked-in master instead.
 * bigrpic.com often shows a loading animation; reuse the Photography section shot.
 */
const staticSources = [
  {
    id: "bigrpic",
    input: path.join(root, "public", "photography", "bigrpic-home.webp"),
  },
];

function runProcessor(inputPath, id) {
  const res = spawnSync(
    "python",
    [
      path.join(__dirname, "process-product-screenshots.py"),
      "--input",
      inputPath,
      "--id",
      id,
      "--out-dir",
      outDir,
    ],
    { encoding: "utf8" },
  );
  if (res.status !== 0) {
    console.error(res.stderr || res.stdout);
    throw new Error(`webp convert failed for ${id}`);
  }
  console.log((res.stdout || "").trim());
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const target of captureTargets) {
  const page = await context.newPage();
  console.log(`capturing ${target.id} ← ${target.url}`);
  try {
    await page.goto(target.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1200);
    const pngPath = path.join(outDir, `${target.id}.png`);
    await page.screenshot({ path: pngPath, type: "png", fullPage: false });
    runProcessor(pngPath, target.id);
  } catch (err) {
    console.error(`failed ${target.id}:`, err.message || err);
  } finally {
    await page.close();
  }
}

await browser.close();

for (const { id, input } of staticSources) {
  console.log(`static ${id} ← ${path.relative(root, input)} (skip live capture)`);
  try {
    runProcessor(input, id);
  } catch (err) {
    console.error(`failed ${id}:`, err.message || err);
  }
}
console.log("done");
