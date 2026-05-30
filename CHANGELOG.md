# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-05-30

### Added

- **Inspirations** at `/inspirations`: migrated quotes, discussions, and WordPress background images (Zappa, Fischer, Stallman, Armstrong, etc.).
- **About (WordPress archive)** at `/about/wordpress-archive`: verbatim self-written about text from ryanjohnson.website.
- **Repository catalog** at `/repositories`: project/org-first hierarchy across GitHub and GitLab; synced via `pnpm sync:repos`.

### Changed

- **Homepage layout**: collapsible Theory, Experience, and Photography (latter three collapsed by default); Photography in main column with fixed left-aligned preview; Connections sidebar removed; **Personal Blog** in header; org-projects note under social icons; Chess.com and Codeberg links added.
- **Theory / About** section: formal reliability-focused lead; informal TI-83+ origin story and &ldquo;unprofessional&rdquo; posture in body copy; links to inspirations and archive.
- **UI/UX hub**: Philosophy overview, philosophy articles index (`/gui-demos/philosophy`), and full-width demo tile grid; prominent **UI/UX** button beside the homepage header.
- Projects section label: **Software Portfolio** (was Structural Portfolio); grid ends with a link card to the full catalog.
- **UI/UX Demos** (prior): Index page for interactive UI/UX demos, linked from the homepage.
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
