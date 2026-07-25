#!/usr/bin/env python3
"""Prebake Lanczos screenshot tiers for the homepage product showcase.

Naming: `{id}-400.webp` (1× ≈ card CSS) and `{id}-800.webp` (2× / retina).
Aspect is always 4:3 to match `aspect-[4/3]` cards.

Hover zoom stays on CSS `transform: scale()` — these tiers are for resting
srcset selection only (no live Lanczos/pica).

Usage:
  python scripts/process-product-screenshots.py
  python scripts/process-product-screenshots.py --input public/products/linx.png --id linx
  python scripts/process-product-screenshots.py --input public/photography/bigrpic-home.webp --id bigrpic
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUT = ROOT / "public" / "products"

# Card CSS: max-w-[22–24rem] (~352–384px). Tiers = 1× and 2× at 4:3.
TIERS: list[tuple[int, int]] = [
    (400, 300),
    (800, 600),
]
WEBP_QUALITY = 90
PRODUCT_IDS = ["linx", "dev-centr", "foodtrucknerdz", "bigrpic"]

# Prefer these masters over `public/products/{id}.png` (e.g. live capture hits loading UI).
ALT_SOURCES: dict[str, Path] = {
    "bigrpic": ROOT / "public" / "photography" / "bigrpic-home.webp",
}


def crop_cover_top_aspect(im: Image.Image, aspect: float) -> Image.Image:
    """object-cover object-top crop to aspect ratio (no resize yet)."""
    sw, sh = im.size
    src_aspect = sw / sh

    if src_aspect > aspect:
        new_w = int(round(sh * aspect))
        left = (sw - new_w) // 2
        box = (left, 0, left + new_w, sh)
    else:
        new_h = int(round(sw / aspect))
        box = (0, 0, sw, new_h)

    return im.crop(box)


def process_one(src: Path, product_id: str, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        rgb = im.convert("RGB")
        cropped = crop_cover_top_aspect(rgb, 4 / 3)

        for width, height in TIERS:
            # Always Lanczos from the full-res crop (never cascade 800→400 via prior save)
            if cropped.size == (width, height):
                out = cropped
            else:
                out = cropped.resize((width, height), Image.Resampling.LANCZOS)
            dest = out_dir / f"{product_id}-{width}.webp"
            out.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
            print(f"wrote {dest} ({width}x{height}, q={WEBP_QUALITY}, LANCZOS)")


def resolve_source(out_dir: Path, product_id: str) -> Path | None:
    """Prefer ALT_SOURCES, then PNG master, then widest existing webp, then legacy `{id}.webp`."""
    alt = ALT_SOURCES.get(product_id)
    if alt is not None and alt.exists():
        return alt

    png = out_dir / f"{product_id}.png"
    if png.exists():
        return png

    candidates: list[Path] = []
    for p in out_dir.glob(f"{product_id}-*.webp"):
        candidates.append(p)
    legacy = out_dir / f"{product_id}.webp"
    if legacy.exists():
        candidates.append(legacy)

    if not candidates:
        return None

    def sort_key(p: Path) -> tuple[int, int]:
        try:
            with Image.open(p) as im:
                return (im.size[0] * im.size[1], im.size[0])
        except OSError:
            return (0, 0)

    return max(candidates, key=sort_key)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, help="Single PNG/WebP master to process")
    parser.add_argument("--id", type=str, help="Product id basename (with --input)")
    parser.add_argument("--out-dir", type=Path, default=DEFAULT_OUT)
    args = parser.parse_args()

    if args.input:
        if not args.id:
            raise SystemExit("--id is required with --input")
        process_one(args.input, args.id, args.out_dir)
        return

    for pid in PRODUCT_IDS:
        src = resolve_source(args.out_dir, pid)
        if src is None:
            print(f"skip {pid}: no source")
            continue
        print(f"source {pid} <- {src.name}")
        process_one(src, pid, args.out_dir)


if __name__ == "__main__":
    main()
