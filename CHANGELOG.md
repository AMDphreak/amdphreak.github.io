# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-08-01

### Added

- **HCI Nerdz**: New GitHub org on the hub destinations, GitHub profile menu, and repository catalog sync (`HCI-Nerdz` — docs, org profile, GitHub Pages site).
- **Repository catalog**: Re-synced from GitHub/GitLab (`2026-08-01`); includes `HCI-Nerdz` and refreshed org membership after recent transfers.

### Changed

- **Home hero frost**: Kept the known-good dual-mask frost panel (`863f2ad` / `7da684c`) but stepped blur down from `backdrop-blur-lg` to `backdrop-blur-md`, with fill at `bg-background/50` (`dark:/45`) — lesser GPU cost while staying frosted.
- **Noise overlay**: Restored the full **8-layer** stack (5 fine + 3 Poisson) from the `ce2e485` baseline; session shuffle key bumped to `noise-overlay-v5`.

### Fixed

- **Home product cards**: Equal height per flex row — content column grows and Visit/More links pin to the bottom so shorter taglines leave space above the links instead of shrinking the card.
- **Theme reveal**: Replaced hexagonal SVG mask with a View Transition circular `clip-path` wipe from the toggle (Web Animations on `::view-transition-new(root)`). VT overlay uses `pointer-events: none` so mid-reveal clicks reach the toggle and skip/restart; `prefers-reduced-motion` stays instant.
- **Home hero frost restored**: Nested mask / split-blur experiments (`4a1d200`, `ef32d93`) made the frost disappear on live. Restored the visible frosted panel from `7da684c` (introduced in `863f2ad`): single `.hero-content-frost` with soft dual-gradient mask, original scrims, `isolate` content wrapper (blur strength later reduced — see Changed above).
- **GitHub Pages**: `cancel-in-progress: false` left a multi-hour queued run blocking the `pages` concurrency group, so frost never reached production. Switched to `cancel-in-progress: true` and redeployed.

### Added

- **Hero tapestry lessons doc**: `docs/hero-tapestry-lessons.adoc` — durable notes from the 2026-07-25 hero/CTA/social/GitHub-menu experiments (what to try first, what not to do); also summarized in `docs/design-suggestions.adoc` and `changelog-details/2026-07-25 - hero-tapestry-and-ui-experiments.md`.
- **Home hero tapestry**: Stitched rainbow-crystal triptych (`frame_001|002|003`) as a full-bleed first-viewport visual with Lanczos WebP tiers (`public/hero/rainbow-crystal-tapestry-{1280,1920,2560}.webp`), `srcset`/`sizes="100vw"`, theme-aware scrims, and a transform-only entrance.
- **Design suggestions doc**: `docs/design-suggestions.adoc` — durable AI design critique (architectural-dossier look), progress notes, and open checklist; linked from README.
- **Home products showcase**: Live product sites (LinxPhotos, Dev-Centr, FoodTruckNerdz, bigr Picture) use prebaked Lanczos WebP tiers (`{id}-400.webp` / `{id}-800.webp`) with `srcset`/`sizes`; hover zoom stays CSS `transform`. Capture/process via `scripts/capture-product-screenshots.mjs` and `scripts/process-product-screenshots.py`.
- **Home hero socials**: Same profile set as the résumé (GitHub menu, Codeberg, GitLab, LinkedIn, X, Chess.com, CodersRank) in a compact right-side grid with larger icons and a horizontal flip to each platform’s brand color on hover.
- **Noise overlay**: Large-scale Poisson grain layers (`poisson-noise-tile.png`, generated via `scripts/generate-noise-textures.py`) stacked under the existing fine static for softer, blotchy atmosphere.
- **Home** at `/`: brand-first homepage linking products (LinxPhotos, Dev-Centr, FoodTruckNerdz, bigr Picture), GitHub/GitLab/Codeberg profiles and orgs (except memphis-cs-projects), and repository catalog; hero CTA group for Browse work, Résumé, Philosophy, UI/UX, Inspirations, and Blog; Photography section on the home page.
- **Philosophy** at `/philosophy`: origins and posture (moved off the résumé page).
- **Blog gateway** at `/blog`: choose archived WordPress copies, continuing static posts on this site (`/blog/posts`), or the live WordPress blog.
- **Continuing blog** content collection under `src/content/blog/` with index and post pages.
- **WordPress archive** at `/wordpress-archive`: index of captured pages and posts; About at `/wordpress-archive/about`; posts at `/wordpress-archive/posts/[slug]`. Synced via `pnpm sync:wordpress` into `wordpress-archive/` (JSON5 + media).
- **Inspirations** at `/inspirations`: migrated quotes, discussions, and WordPress background images (Zappa, Fischer, Stallman, Armstrong, etc.).
- **Repository catalog** at `/repositories`: project/org-first hierarchy across GitHub and GitLab; synced via `pnpm sync:repos`.

### Fixed

- **Home hero tapestry edge**: Near-white photo background no longer shows a hard rect at the top-right — CSS `mask-image` intersect gradients feather top/right edges into `bg-background`, `mix-blend-mode: multiply` in dark mode only, and a supplemental top-right scrim (stronger R→L/top stops); assets unchanged.
- **Home products showcase**: Removed WebGL2 mipmap rendering from product cards — mip filtering softened screenshot text; cards now use plain `<img srcset>` with Lanczos tiers only.

### Changed

- **code-lens**: Portfolio links now point at [`dev-centr/code-lens`](https://github.com/dev-centr/code-lens) and [dev-centr.github.io/code-lens](https://dev-centr.github.io/code-lens/) (repo transferred out of AMDphreak).
- **Home hero tapestry**: Background uses a centered `120rem` width (`sizes="120rem"`, not `vw`) so browser zoom scales it with page content; all four edges are feathered via intersect `mask-image` gradients so off-white photo margins dissolve into `bg-background`.
- **Home hero tagline**: Positioning line now includes RelyOps and DevOps alongside UX, DevX, ITIL, and Architecture.
- **Home hero CTAs**: Secondary buttons (Résumé, Philosophy, UI/UX, Inspirations, Blog) use a frosted chip — `bg-background/80`, `backdrop-blur-sm`, and stone-400/500 borders — so outlines stay legible on the tapestry; primary “Browse work” unchanged. Later frost-under-content work also allows transparent secondary fills with light borders again.
- **Home hero GitHub menu**: Portal to `document.body`, native trigger, always-mounted profile list (not empty data), flip faces / frost `pointer-events-none`, default cursor on trigger and pointer on links.
- **Home products showcase**: Linx product card display name renamed to **LinxPhotos** (matches GitHub org); site URL unchanged (`linx.photos`).
- **Home products showcase**: bigr Picture card tiers regenerated from `public/photography/bigrpic-home.webp` (live capture skipped — site loading animation); capture/process scripts prefer that master for `bigrpic`.
- **Résumé**: Fixed Experience / Selected Projects overlap by stacking both in the main column with explicit flex gap (replacing the split full-width Experience + nested grid layout).
- **Résumé**: Experience leads the page (full-width after profile); Projects moved below as a compact highlights list with links to the homepage showcase and repository catalog.
- **Résumé**: Removed UI/UX, Inspirations, and Blog nav links from the page header; those destinations remain on the homepage hero only.
- **Résumé**: Experience section is always expanded with static headings (no accordion collapse); Projects and Skills were already static.
- **Noise overlay**: Layer config now supports per-layer texture + tile size; session cache keyed `noise-overlay-v3`.
- **Photography**: Body copy rewritten around real practice (events, performances, weddings, portraits, TFP, GSO and DSAM clients); removed generic photographer-speak (“honest frames”, “in the room”).
- **Photography**: Replaced the camera-icon placeholder with a wide (16:9) WebP screenshot of bigrpic.com in an aspect-video structural-border preview.
- **Photography**: Instagram CTA keeps the monochrome structural button chrome; only the SVG icon uses the brand purple–red–orange gradient.
- **Home**: Removed the "This site" destination tile section (Résumé, Philosophy, Blog, UI/UX, Inspirations) as a duplicate of the hero CTAs.
- **Résumé** at `/resume` (formerly Technical Overview / `/about`): profile, projects, experience, and skills; Philosophy and Photography removed from this page. `/about` redirects to `/resume`.
- **WordPress About archive** path: `/about/wordpress-archive` redirects to `/wordpress-archive/about`.
- **UI/UX hub**: Philosophy overview, philosophy articles index (`/gui-demos/philosophy`), and full-width demo tile grid.
- Projects section label: **Software Portfolio** (was Structural Portfolio); grid ends with a link card to the full catalog.
- **code-lens**: Renamed from code-example-lenses; portfolio links to [github.com/AMDphreak/code-lens](https://github.com/AMDphreak/code-lens) and [ryanjohnson.dev/code-lens](https://ryanjohnson.dev/code-lens/).
- **multimux Project Card**: Showcase multimux, an elegant Electron/SolidJS/TypeScript desktop audio mixdown suite, in the projects list.

## [0.4.0] - 2026-04-11

### Added

- **Structural Reveal Transition**: Implemented a performant View Transition reveal with randomized hexagonal tessellation for theme switching.
- **Architectural Dark Mode Sync**: Refactored Tailwind v4 dark mode to use class-based selection via `@custom-variant dark`.

### Fixed

- **Theme Flashing/Sync**: Resolved race conditions in theme initialization and synchronization between custom CSS variables and Tailwind utilities.
- **Hexagon Tessellation**: Corrected mathematics for pointy-topped hexagon grid alignment to ensure zero-gap tiling.

---

### Timeline & Documentation

Detailed records of major architectural changes can be found in the [changelog-details/](changelog-details/) directory.

- [2026-07-25 - Hero tapestry and UI experiments](changelog-details/2026-07-25%20-%20hero-tapestry-and-ui-experiments.md)
- [2026-05-28 - UI/UX Demos and Code Example Lenses](changelog-details/2026-05-28%20-%20ui-ux-demos-and-code-lenses.md)
- [2026-05-27 - Add Multimux Showcase](changelog-details/2026-05-27%20-%20add-multimux-showcase.md)
- [2026-04-11 - Stone and Graphite Structural Reveal](changelog-details/2026-04-11%20-%20stone-and-graphite-reveal.md)
