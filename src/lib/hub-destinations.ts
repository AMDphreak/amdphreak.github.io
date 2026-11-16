/**
 * Project cards for the catalog page.
 * Omits memphis-cs-projects (legacy coursework) from featured orgs.
 * Easy Installer / Ibex is a Dev-Centr subproject, listed on devcentr.org/apps.
 *
 * Visit comes from the GitHub profile `blog` field in org-websites.json
 * (refreshed by scripts/sync-repository-catalog.mjs). The other link is the
 * organization on GitHub, never one repository. A missing blog means no Visit.
 * Personal projects stays an in-page jump to the AMDphreak group.
 * bigr picture is not a GitHub org, so its site stays on the card.
 */

import orgWebsites from "./org-websites.json";

export type HubPattern = "dots" | "diag" | "grid" | "rings" | "cross" | "chevron" | "waves";

export type HubDestination = {
  id: string;
  name: string;
  tagline: string;
  href: string;
  external?: boolean;
  /** Primary action. Visit, GitHub, or Open. */
  actionLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Optional third action. Does not replace the org link. */
  extraHref?: string;
  extraLabel?: string;
  /** 800w WebP; 400w sibling is `{id}-400.webp` when `screenshot` is set. */
  screenshot?: string;
  /** Used only when `screenshot` is absent. */
  pattern?: HubPattern;
};

type OrgProfile = {
  kind: "org" | "user";
  blog: string | null;
};

type CardSeed = {
  id: string;
  name: string;
  tagline: string;
  /** GitHub org login. Website is that org's `blog` field. */
  org?: string;
  /** Live site for a project that has no GitHub org profile. */
  website?: string;
  /** In-page jump. Not a product site, and not the user's profile website. */
  inPageHref?: string;
  screenshot?: string;
  pattern?: HubPattern;
  extraHref?: string;
  extraLabel?: string;
};

const profiles = orgWebsites.profiles as Record<string, OrgProfile>;

function orgBlog(login: string): string | null {
  const blog = profiles[login]?.blog;
  return typeof blog === "string" && blog.length > 0 ? blog : null;
}

function githubOrg(login: string) {
  return `https://github.com/${login}`;
}

function resolveCard(seed: CardSeed): HubDestination {
  const base = {
    id: seed.id,
    name: seed.name,
    tagline: seed.tagline,
    screenshot: seed.screenshot,
    pattern: seed.screenshot ? undefined : seed.pattern,
    extraHref: seed.extraHref,
    extraLabel: seed.extraLabel,
  };

  if (seed.inPageHref) {
    return { ...base, href: seed.inPageHref, actionLabel: "Open" };
  }

  const live = seed.org ? orgBlog(seed.org) : (seed.website ?? null);
  const orgHref = seed.org ? githubOrg(seed.org) : undefined;

  if (live && orgHref) {
    return {
      ...base,
      href: live,
      external: true,
      actionLabel: "Visit",
      secondaryHref: orgHref,
      secondaryLabel: "GitHub",
    };
  }
  if (live) {
    return { ...base, href: live, external: true, actionLabel: "Visit" };
  }
  if (orgHref) {
    return { ...base, href: orgHref, external: true, actionLabel: "GitHub" };
  }
  throw new Error(`Project card ${seed.id} has neither a live site nor an org`);
}

const seeds: CardSeed[] = [
  {
    id: "dev-centr",
    name: "Dev-Centr",
    tagline: "Environment configuration and developer tooling.",
    org: "dev-centr",
    extraHref: "https://devcentr.org/apps",
    extraLabel: "Apps",
    screenshot: "/products/dev-centr-800.webp",
  },
  {
    id: "linx",
    name: "LinxPhotos",
    tagline: "Photo service and documentation.",
    org: "LinxPhotos",
    screenshot: "/products/linx-800.webp",
  },
  {
    id: "foodtrucknerdz",
    name: "Food Truck Nerdz",
    tagline: "Food truck discovery platform.",
    org: "FoodTruckNerdz",
    screenshot: "/products/foodtrucknerdz-800.webp",
  },
  {
    id: "bigrpic",
    name: "bigr picture",
    tagline: "Photography — urban landscape, events, geometry.",
    website: "https://www.bigrpic.com",
    screenshot: "/products/bigrpic-800.webp",
  },
  {
    id: "org-hci-nerdz",
    name: "HCI Nerdz",
    tagline: "HCI and UI/UX innovation.",
    org: "HCI-Nerdz",
    pattern: "dots",
  },
  {
    id: "org-desktop-tooling",
    name: "Desktop Tooling",
    tagline: "OS-level desktop utilities: Explorer, theming, launchers.",
    org: "Desktop-Tooling",
    pattern: "diag",
  },
  {
    id: "org-antora",
    name: "Antora Supplemental",
    tagline: "Documentation themes and Antora extensions.",
    org: "antora-supplemental",
    pattern: "grid",
  },
  {
    id: "org-dlang",
    name: "Dlang Supplemental",
    tagline: "D language libraries and tooling.",
    org: "dlang-supplemental",
    pattern: "rings",
  },
  {
    id: "org-formatte",
    name: "formatte",
    tagline: "Formatting tooling organization.",
    org: "formatte",
    pattern: "cross",
  },
  {
    id: "org-openshell",
    name: "Open Shell Org",
    tagline: "Open Shell community.",
    org: "openshellorg",
    pattern: "chevron",
  },
  {
    id: "personal",
    name: "Personal projects",
    tagline: "Repositories under AMDphreak. This site is the directory for every project.",
    inPageHref: "#AMDphreak",
    pattern: "waves",
  },
];

export const projects: HubDestination[] = seeds.map(resolveCard);
