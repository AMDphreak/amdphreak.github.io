#!/usr/bin/env python3
"""Generate seamless noise tiles for the site overlay.

Fine grain: soft high-frequency static (existing look).
Large scale: Poisson point-process blobs (photon-arrival style grain at low frequency).
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "textures"


def wrap_stamp_gaussian(
    field: np.ndarray,
    cx: float,
    cy: float,
    sigma: float,
    amplitude: float,
) -> None:
    """Add a toroidal Gaussian so the tile seams seamlessly."""
    n = field.shape[0]
    radius = int(np.ceil(sigma * 3.5))
    yy, xx = np.ogrid[-radius : radius + 1, -radius : radius + 1]
    kernel = amplitude * np.exp(-(xx * xx + yy * yy) / (2.0 * sigma * sigma))

    # Nine periodic stamps so kernels that cross an edge wrap cleanly
    for oy in (-n, 0, n):
        for ox in (-n, 0, n):
            y0 = int(np.floor(cy)) + oy - radius
            x0 = int(np.floor(cx)) + ox - radius
            y1 = y0 + kernel.shape[0]
            x1 = x0 + kernel.shape[1]

            sy0 = max(0, y0)
            sx0 = max(0, x0)
            sy1 = min(n, y1)
            sx1 = min(n, x1)
            if sy0 >= sy1 or sx0 >= sx1:
                continue

            ky0 = sy0 - y0
            kx0 = sx0 - x0
            ky1 = ky0 + (sy1 - sy0)
            kx1 = kx0 + (sx1 - sx0)
            field[sy0:sy1, sx0:sx1] += kernel[ky0:ky1, kx0:kx1]


def generate_poisson_tile(
    size: int = 512,
    expected_events: float = 90,
    sigma_range: tuple[float, float] = (36.0, 96.0),
    seed: int = 20260725,
) -> Image.Image:
    """
    Large-scale grain from a Poisson point process of soft kernels.

    Event count ~ Poisson(λ). Positions are uniform; kernel radii vary so the
    field has organic blotches instead of fine static — close to photon-arrival
    (Poisson) noise viewed at low spatial frequency.
    """
    rng = np.random.default_rng(seed)
    field = np.zeros((size, size), dtype=np.float64)
    count = max(1, int(rng.poisson(expected_events)))

    for _ in range(count):
        cx = float(rng.uniform(0, size))
        cy = float(rng.uniform(0, size))
        sigma = float(rng.uniform(*sigma_range))
        amp = float(rng.choice([-1.0, 1.0]) * rng.uniform(0.55, 1.0))
        wrap_stamp_gaussian(field, cx, cy, sigma, amp)

    # Photon-arrival grit at a medium downsample — signal-dependent Poisson
    # sampling, then soft upsample so it rides on the large blobs.
    lo = 96
    span = float(np.ptp(field)) + 1e-9
    small = np.array(
        Image.fromarray(((field - field.min()) / span * 255).astype(np.uint8)).resize(
            (lo, lo), Image.Resampling.BILINEAR
        ),
        dtype=np.float64,
    )
    lam = 10.0 + small / 255.0 * 28.0
    photon = rng.poisson(lam).astype(np.float64) / lam
    photon = (photon - photon.mean()) / (np.abs(photon - photon.mean()).max() + 1e-9)
    photon_img = ((photon * 40) + 128).clip(0, 255).astype(np.uint8)
    photon = (
        np.array(
            Image.fromarray(photon_img).resize((size, size), Image.Resampling.BICUBIC),
            dtype=np.float64,
        )
        - 128.0
    ) / 128.0

    field = field / (np.abs(field).max() + 1e-9) * 0.72 + photon * 0.28
    field = field - field.mean()
    field = field / (np.abs(field).max() + 1e-9)
    # Low-contrast mid-gray — soft-light overlay stays subtle at site opacities
    gray = (field * 28 + 128).clip(0, 255).astype(np.uint8)
    return Image.fromarray(gray, mode="L")


def generate_fine_tile(size: int = 64, seed: int = 42) -> Image.Image:
    """Soft high-frequency static matching the existing fine grain character."""
    rng = np.random.default_rng(seed)
    base = rng.normal(0.0, 1.0, (size, size))
    soft = np.array(
        Image.fromarray(((base - base.min()) / (float(np.ptp(base)) + 1e-9) * 255).astype(np.uint8))
        .resize((size * 2, size * 2), Image.Resampling.BILINEAR)
        .resize((size, size), Image.Resampling.BILINEAR),
        dtype=np.float64,
    )
    soft = soft - soft.mean()
    soft = soft / (np.abs(soft).max() + 1e-9)
    gray = (soft * 48 + 128).clip(0, 255).astype(np.uint8)
    return Image.fromarray(gray, mode="L")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    poisson = generate_poisson_tile()
    poisson_path = OUT / "poisson-noise-tile.png"
    poisson.save(poisson_path, optimize=True)
    print(f"wrote {poisson_path} ({poisson.size[0]}x{poisson.size[1]})")

    fine_path = OUT / "noise-tile.png"
    if not fine_path.exists():
        fine = generate_fine_tile()
        fine.save(fine_path, optimize=True)
        print(f"wrote {fine_path}")
    else:
        print(f"kept existing {fine_path}")


if __name__ == "__main__":
    main()
