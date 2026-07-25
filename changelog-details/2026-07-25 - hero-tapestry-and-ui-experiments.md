# 2026-07-25 - Hero tapestry and UI experiments

## Architectural Context

The homepage first viewport gained a stitched rainbow-crystal tapestry (resting Lanczos WebP tiers) and a long readability / CTA / social / GitHub-menu iteration. This note captures what shipped and what we learned so the next redesign does not repeat the same traps.

Full lesson write-up: [docs/hero-tapestry-lessons.adoc](../docs/hero-tapestry-lessons.adoc). Design critique tracker: [docs/design-suggestions.adoc](../docs/design-suggestions.adoc).

## Key Changes

- **Tapestry delivery**: Stitched `frame_001|002|003` → `rainbow-crystal-tapestry-{1280,1920,2560}.webp` with `srcset` / `sizes="100vw"` (resting-lanczos strategy).
- **Layout rule**: Tall hero zone + full-width, vertically centered image — not fixed-height `object-cover` (crops the panorama).
- **Edge treatment**: Mask feather, dark multiply, corner scrim for near-white photo margins.
- **Readability**: Softened left wipe → mid overlay → frosted blur under content (real win for CTAs/socials).
- **CTAs / socials**: Outline melt → frosted chips → transparent + light borders again once frost exists; stronger social borders on frost; exclusion-blend hairline experiment on secondary CTAs.
- **GitHub menu**: Not empty data — `open() && menuPos()` + fragile Kobalte ref prevented mount; portal to body; flip faces `pointer-events-none`; frost `pointer-events-none`; cursor defaults on trigger / pointer on links.

## Process

- Tag `known-good-2026-07-25` before large redesign experiments.
- Tooling / docs: [resting-lanczos](https://github.com/dev-centr/resting-lanczos) · [devcentr.org/resting-lanczos](https://devcentr.org/resting-lanczos).

## Verification

- Interactive checks during the session: hero crop/readability, CTA contrast, social hit targets, GitHub dropdown open/click through portal.
