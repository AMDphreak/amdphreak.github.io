# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-07-25

### Added

- **Home** at `/`: brand-first homepage linking products (Linx, Dev-Centr, FoodTruckNerdz, bigr Picture), GitHub/GitLab/Codeberg profiles and orgs (except memphis-cs-projects), and repository catalog; hero CTA group for Browse work, Résumé, Philosophy, UI/UX, Inspirations, and Blog; Photography section on the home page.
- **Philosophy** at `/philosophy`: origins and posture (moved off the résumé page).
- **Blog gateway** at `/blog`: choose archived WordPress copies, continuing static posts on this site (`/blog/posts`), or the live WordPress blog.
- **Continuing blog** content collection under `src/content/blog/` with index and post pages.
- **WordPress archive** at `/wordpress-archive`: index of captured pages and posts; About at `/wordpress-archive/about`; posts at `/wordpress-archive/posts/[slug]`. Synced via `pnpm sync:wordpress` into `wordpress-archive/` (JSON5 + media).
- **Inspirations** at `/inspirations`: migrated quotes, discussions, and WordPress background images (Zappa, Fischer, Stallman, Armstrong, etc.).
- **Repository catalog** at `/repositories`: project/org-first hierarchy across GitHub and GitLab; synced via `pnpm sync:repos`.

### Changed

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

- [2026-05-28 - UI/UX Demos and Code Example Lenses](changelog-details/2026-05-28%20-%20ui-ux-demos-and-code-lenses.md)
- [2026-05-27 - Add Multimux Showcase](changelog-details/2026-05-27%20-%20add-multimux-showcase.md)
- [2026-04-11 - Stone and Graphite Structural Reveal](changelog-details/2026-04-11%20-%20stone-and-graphite-reveal.md)
