# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-11-17

### Changed

- **Home**: the hero, Software, and Photography sit in the chrome column, left-aligned, at the same width as the header. The centered reading measure stays on blog, inspirations, and the other reading pages.
- **Catalog**: project expanders other than Personal Projects are ordered by the newest repository `pushedAt`. Projects with no push date follow the dated ones.
- **Catalog**: collapsed-row Demos controls use the Software section's secondary button. The on-site Personal Projects link has no arrow; external Demos links use the same link-out mark. Search and filter labels line up with the text inside each field, and a half-rem gap sits between each label and its box. Repositories in each project are ordered by latest push, with the date on the existing row line. The project disclosure arrow sits on the left, before the number, and points at the name.
- **Philosophy**: the reliability statement is a body paragraph under its own heading. The UI/UX section is [On UI/UX](/philosophy#on-ui-ux). Origins and core disciplines are on [Background](/background). Small interface labels that were 10px are 11px. Page grain is anchored at the top center of the page and scrolls with the content.
- **Demos**: Personal Projects demos live at [/demos](/demos). [/gui-demos](/gui-demos) redirects there. The interface essay is a section on [Philosophy](/philosophy#on-ui-ux). The Software row no longer has a UI/UX button. Catalog rows that have a verified demos page show a Demos link on the collapsed row: Personal Projects, Dev-Centr ([Apps](https://devcentr.org/apps)), HCI Nerdz, and Desktop Tooling.
- **Catalog**: the title, search, and project list share the full structural-border width and stay left-aligned. bigr picture uses its site mark in the logo slot.
- **Reading column**: pages that capped separate blocks with `max-w-3xl` or `max-w-2xl` now put that measure on one centered column (`mx-auto w-full max-w-3xl`) inside the chrome border. Text in that column stays left-aligned. The page border is `width: 100%` and `max-width: 100%` of `chrome-width`, which is already `width: 100%` and `max-width: 80rem`, so the border shrinks with the viewport until it meets the column.
- **Chrome**: every public page uses one header (breadcrumb and theme switch) and the same `chrome-width` column (`--chrome-max: 80rem`) for the header, the content box, and the footer. The header rule is the only underline (`showHeaderRule`).
- **Home**: LinkedIn, X, and Chess.com sit under the username. GitHub, GitLab, Codeberg, and CodersRank stay in Software.
- **Photography**: the bigrpic shot keeps the page's aspect ratio (`width: 100%`, `height: auto`). At the normal desktop layout the column is `13.5rem`, so the frame meets the buttons; zoom and reflow no longer clip the sides. The preview is a Lanczos resize of a full-page capture. Hover zoom is gone.
- **Catalog**: project preview frames are square and not rounded.
- **Home plates**: Software and Photography use `--section-plate-alpha: 0.68` on the existing base colors. Grain is a scrolling background tile, without a filtered overlay.
- **Fonts**: Instrument Sans, Space Grotesk, and Space Mono ship from Fontsource. First-paint files are preloaded and use `font-display: block`. The Google Fonts import is gone.

## [Unreleased] - 2026-11-16

### Changed

- **Home**: Software and Photography paragraphs sit a small, similar step from their subheadings in both themes. Light paragraphs are a little lighter; dark paragraphs are light enough to read on the plates.
- **Photography**: the bigrpic button uses the camera icon again.
- **Grain**: the tile scrolls with the page in CSS pixels, so zoom does not pin it to the window. Dark mode keeps the same tile at half strength. Light mode inverts that one tile and blends it with the plate, so the grain shows on the light backgrounds. Text stays above the grain.
- **Home**: Software and Photography leads sit in the body paragraph. Photography icons share an 18px square; the bigrpic button uses that site's mark and the label bigrpic.
- **Home**: Software and Photography subheadings are nouns of the work in each topic (Architecture, Systems, UX; Events, Performances, Weddings, Portraits).
- **Home**: Software and Photography use the same subheading style and the same lead-and-body paragraph sizes. Each section plate is one base color, with light and dark calculated from it. The hero username lines up with the name. The footer says the redesign was conducted with AI.
- **Home**: the name sits as far above the Software wash as the Software heading sits below it. Software and Photography meet. GitHub, GitLab, and Codeberg labels are the service names.
- **Home**: the Software title is the word Software in the heading face. Profile links sit under those buttons. The hero tapestry and its frost are gone, the name stays on one line, and Software and Photography have separate color washes.
- **Photography**: the site screenshot uses the normal cursor on hover. It is not a link.
- **Photography**: the frequent-clients line is gone.
- **Catalog**: space above the synced status line.
- **Home**: the two project grids are gone. The hero button opens the [Catalog](/repositories). Profile names sit beside the icons under the hero.
- **Home**: the hero is the name and username. Catalog, the software [résumé](/resume), and the other software links sit in a Software section under the hero so that section is partly in view on a desktop screen.
- **Catalog**: the project card grid is gone. Each index row is a collapsed project expander. Personal Projects is first; the anchor stays `#AMDphreak`. Opening a project shows its screenshot or pattern and the Visit / organization links (Dev-Centr also links to [Apps](https://devcentr.org/apps)). Repositories sit in an inner expander with their own filter. A search above the index keeps matches under that project, and choosing one opens both expanders and marks the matching rows. The organization logo is the GitHub avatar on the right of the row. A group is still one org or person (`identity`). Index numbers sit `2ch` from the names.
- **Photography**: the visible name is bigr picture. The Capture_Engine watermark is gone.
- **Blog**: the landing lists Posts, Feedback Hub filings, and the Old WordPress Blog, with Archive and Live site on the old blog card. Titles are the links. The kicker is “Essays · notes · ideas.”
- **Posts**: the page heading is Posts. [/for-fun](/for-fun) lists posts tagged `for-fun`.
- **For fun**: [The Roast of Ryan Johnson](/blog/posts/the-roast-of-ryan-johnson) is a blog post. [/for-fun/chatgpt-roast](/for-fun/chatgpt-roast) redirects there.
- **Breadcrumbs**: one trail. Home is a link. The current page is not a link. On Home, the Home crumb links to `/`.
- **Footer**: GitHub Pages and the hand-coded line sit above the Software stack heading. The Infrastructure heading and right column are gone.
- **Light theme**: muted labels and secondary chrome text are darker. Dark theme tokens are unchanged.

### Added

- **Post**: [The Roast of Ryan Johnson](/blog/posts/the-roast-of-ryan-johnson).

## [Unreleased] - 2026-10-06

### Changed

- Refreshed deprecated transitive dependencies within existing ranges: `@ungap/structured-clone` 1.4.0 and `tar` 7.5.22.

## [Unreleased] - 2026-09-28

### Added

- **Blog**: St. Francis / Compass Group kitchen work-history series as draft CentrMark posts (`series: st-francis`, hub + six project articles); kitchen SOPs cited via `@cite` / `::: sources`, not republished.
- **Blog layout**: docs-style right-rail table of contents on post pages (sticky `h2`/`h3` on desktop, collapsible on mobile); series navigation block when `series` frontmatter is set.
- **Content pipeline**: `centrmarkBlogLoader` extends CentrMark frontmatter with `series`, `seriesOrder`, and `seriesHub` (same fields optional on Markdown posts).

## [Unreleased] - 2026-09-10

### Added

- **Crawlability**: `site` set to `https://ryanjohnson.dev`, `@astrojs/sitemap` (emits `sitemap-index.xml`), and [`public/robots.txt`](public/robots.txt) with a Sitemap line; unlisted `/u/` routes stay out of the sitemap.

## [Unreleased] - 2026-09-09

### Changed

- **For fun**: roast page title is now [The Roast of Ryan Johnson](/for-fun/chatgpt-roast); hub blurb is “Amusing content for the discerning mind.”

### Added

- **For fun** at [/for-fun](/for-fun): hub for light asides, with [The Roast of Ryan Johnson](/for-fun/chatgpt-roast) (personality assessment, 7 Sep 2026) linked from the home hero CTA row.

## [Unreleased] - 2026-09-01

### Added

- **Inspirations**: Joe Armstrong — *The Mess We're In* (Strange Loop, September 2014): combined medals + billions-of-lines quote, YouTube / timestamp / Drive backup links, Dev-Centr catalog cross-link.

## [Unreleased] - 2026-08-18

### Added

- **Desktop Tooling**: GitHub org on the hub destinations and GitHub profile menu (`Desktop-Tooling` — OS-level desktop utilities, GitHub Pages site).

## [Unreleased] - 2026-08-12

### Added

- **Inspirations**: [cat-v.org](https://cat-v.org/) (Unix/Plan 9 archive + harmful essays) and **Randall Munroe / xkcd** (portrait + Compiling / Duty Calls) on [/inspirations](/inspirations).

## [Unreleased] - 2026-08-10

### Added

- **Unlisted page**: [/u/n7xq4m2k-gift-laptop](/u/n7xq4m2k-gift-laptop/) — private family laptop gift comparison (Win/Lin used options, plain-language + technical trays, `noindex`).

### Fixed

- **GitHub Pages deploy**: CentrMark packages resolve from `vendor/centrmark` (CI checkout) instead of a machine-local `../../dev-centr/centrmark` path; workflow builds `@centrmark/parse`, `cmk-renderer`, and `cmk-astro`. Taxonomy gains `writing` / `editorial` / `news` / `blog` tags so `blog-as-inner-thought` builds. CI skips `.cmk` posts until a Linux CentrMark CLI is available.

## [Unreleased] - 2026-08-08

### Added

- **Post**: [Blog as inner thought](/blog/posts/blog-as-inner-thought) — news faces outward (shared record); blog faces inward (ideas, ideals, philosophy, tutorials); linked from HCI `STYLE.adoc` and Dev-Centr agent-rules.
- **Post**: [Secrets as a matrix, not a scavenger hunt](/blog/posts/secrets-as-a-matrix-not-a-scavenger-hunt) — vendor create / vault store / CLI(+MCP) distribute / ESC hub; illustrated with redacted session art; links to Dev-Centr Diátaxis pages and `agent-rules` `suggestions/`.
- **Post**: [When the inbox is the CI pager](/blog/posts/when-the-inbox-is-the-ci-pager) — Composio as an MCP connector plane for CI-mail triage in Cursor; links to Dev-Centr how-to, stack docs, [studio MCP install strategies](https://docs.devcentr.org/general-knowledge/explanation/infrastructure/studio-mcp-install-strategies.html), and the [AI studio tooling catalog](https://docs.devcentr.org/general-knowledge/reference/ai-studio-tooling-catalog.html).

## [Unreleased] - 2026-08-06

### Added

- **Homepage showcase**: **Easy Installer** (standalone) and **Easy Installer in DevCentr** (extension) product cards with idealized frosted-glass UI art (`public/products/easy-installer-*.webp`).
- **Post**: [Installers as OS-native craft](/blog/posts/installers-as-os-native-craft) — PATH-in-place, Easy Installer plugins, and real MSI bytes (hero + extension images).
- **Taxonomy**: `devtools`, `packaging`, `windows` tags.

## [Unreleased] - 2026-08-04

### Fixed

- **GitHub Pages deploy**: `@content-tags/*` no longer uses machine-local `file:../../dev-centr/...` paths. CI checks out `dev-centr/content-tags` into `vendor/content-tags`, builds packages, then installs — restores deploy after two failed runs that left new routes 404.

### Added

- **CentrMark blog pipeline**: `@centrmark/astro` content loader for `.cmk` posts (alongside Markdown); local file deps on `dev-centr/centrmark` packages (`../../dev-centr/centrmark/...`). See `src/content.config.ts`.
- **Post**: [Gemini, AT&T marketing calls, and what the citations actually support](/blog/posts/gemini-att-marketing-calls-legitimacy-and-opt-out) — restores Gemini chat citations dropped by Markdown export (`changelog-details/2026-08-04 - centrmark-blog-and-gemini-att-case-study.md`).
- **Feedback Hub catalog**: `src/content/feedback-hub/catalog.json5` + `/feedback` index — clear-web source of truth for documented Hub filings (no Microsoft owner API). First entry: Access Feedback from API and clearweb (`aka.ms/AA130yqs`). How-to: `docs/how-to/record-feedback-hub.adoc`. Blog gateway links to filings.
- **Hierarchical tags** via `@content-tags/*` (Dev-Centr): `src/content/taxonomy.json5`, `/tags` index, `/tags/[...tag]` pages, tags on continuing-blog list and post pages.
- **Post**: [Access Feedback from API and clearweb](/blog/posts/access-feedback-from-api-and-clearweb) — mirrors Feedback Hub filing `aka.ms/AA130yqs`.

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
