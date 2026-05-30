import { mkdirSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "inspirations");

const assets = [
  ["frank-zappa.jpeg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/Frank_Zappa_1973_2.jpeg"],
  ["bobby-fischer.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/11855-004-A3055FDF.jpg"],
  ["peter-drucker.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/peter-drucker-4.jpg"],
  ["arthur-schopenhauer.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2024/07/Arthur_Schopenhauer_by_J_Schafer_1859b.jpg"],
  ["richard-stallman.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/Richard-Stallman.jpg"],
  ["cal-meineke.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2022/08/C201106-Meineke-Violins-Cal-Meineke.jpg"],
  ["joe-armstrong-header.jpeg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/173936_TSyR_2720166.jpeg"],
  ["joe-armstrong-grey.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/Dr-Joe-Armstrong-GOTO-grey.jpg"],
  ["cpp-hammer.png", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/tumblr_mbqu2agCWo1qdslbvo1_1280-696x1024.png"],
  ["freddie-mercury.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2022/08/Freddie-Mercury.jpg"],
  ["freddie-mercury-queen.webp", "https://www.ryanjohnson.website/wp-content/uploads/2022/08/CS_Freddie_Mercury_Queen-1024x683.webp"],
  ["paul-graham.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/Paul-Graham.jpg"],
  ["eric-raymond.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/Eric_raymond.jpg"],
  ["brian-will.jpeg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/173936_TSyR_2720166.jpeg"],
  ["valve-hardware.jpg", "https://www.ryanjohnson.website/wp-content/uploads/2020/07/IMG_6715-1-1024x435.jpg"],
];

mkdirSync(outDir, { recursive: true });

for (const [file, url] of assets) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  const dest = join(outDir, file);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
  console.log("ok", file);
}
