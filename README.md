<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<div align="center">
  <h1>amdphreak.github.io</h1>
  <p>Developer homepage for AMDphreak (Ryan Johnson). Hosted on GitHub Pages.</p>
  <p>
    <a href="https://ryanjohnson.dev">Explore the site</a>
    ·
    <a href="https://github.com/AMDphreak/amdphreak.github.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/AMDphreak/amdphreak.github.io/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<https://ryanjohnson.dev> → <https://amdphreak.github.io>

Developer homepage for AMDphreak (Ryan Johnson). Hosted on GitHub Pages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

* TypeScript
* Astro (static site)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/AMDphreak/amdphreak.github.io.git
cd amdphreak.github.io
pnpm install
pnpm dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Documentation

- [Changelog](CHANGELOG.md)
- [Design suggestions](docs/design-suggestions.adoc) — AI design critique and open items (2026-07-25)
- [Hero tapestry lessons](docs/hero-tapestry-lessons.adoc) — what we learned from the 2026-07-25 hero / CTA / menu experiments

### Continuing blog tags

Hierarchical tags use [`@content-tags`](https://github.com/dev-centr/content-tags) with the site taxonomy in [`src/content/taxonomy.json5`](src/content/taxonomy.json5).

- Tag index: [/tags](https://ryanjohnson.dev/tags)
- Tag posts in frontmatter: `tags: ["microsoft/feedback-hub", "apis"]`
- Browse continuing posts: [/blog/posts](https://ryanjohnson.dev/blog/posts)

### Feedback Hub filings

Microsoft Feedback Hub has no owner API and no clear-web article pages. Filings documented here live in:

- Index: [/feedback](https://ryanjohnson.dev/feedback)
- Catalog: [`src/content/feedback-hub/catalog.json5`](src/content/feedback-hub/catalog.json5)
- How-to (agents/humans): [`docs/how-to/record-feedback-hub.adoc`](docs/how-to/record-feedback-hub.adoc)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are welcome. Open an issue to discuss larger changes before submitting a pull request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Ryan Johnson — [@amdphreak](https://twitter.com/amdphreak)

Project Link: [https://github.com/AMDphreak/amdphreak.github.io](https://github.com/AMDphreak/amdphreak.github.io)

Site: [https://ryanjohnson.dev](https://ryanjohnson.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/AMDphreak/amdphreak.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/AMDphreak/amdphreak.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AMDphreak/amdphreak.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/AMDphreak/amdphreak.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/AMDphreak/amdphreak.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/AMDphreak/amdphreak.github.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/AMDphreak/amdphreak.github.io.svg?style=for-the-badge
[issues-url]: https://github.com/AMDphreak/amdphreak.github.io/issues
