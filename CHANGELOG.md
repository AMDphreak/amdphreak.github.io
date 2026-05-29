# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-05-28

### Added

- **UI/UX Demos**: Index page for interactive UI/UX demos, linked from the homepage.
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
