/**
 * Project cards for the catalog page.
 * Omits memphis-cs-projects (legacy coursework) from featured orgs.
 * Easy Installer / Ibex is a Dev-Centr subproject, listed on devcentr.org/apps.
 */

export type HubDestination = {
  id: string;
  name: string;
  tagline: string;
  href: string;
  external?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** 800w WebP; 400w sibling is `{id}-400.webp` when `screenshot` is set. */
  screenshot?: string;
};

export const projects: HubDestination[] = [
  {
    id: "dev-centr",
    name: "Dev-Centr",
    tagline: "Environment configuration and developer tooling.",
    href: "https://devcentr.org",
    external: true,
    secondaryHref: "https://devcentr.org/apps",
    secondaryLabel: "Apps",
    screenshot: "/products/dev-centr-800.webp",
  },
  {
    id: "linx",
    name: "LinxPhotos",
    tagline: "Photo service and documentation.",
    href: "https://linx.photos",
    external: true,
    secondaryHref: "https://github.com/LinxPhotos",
    secondaryLabel: "GitHub",
    screenshot: "/products/linx-800.webp",
  },
  {
    id: "foodtrucknerdz",
    name: "Food Truck Nerdz",
    tagline: "Food truck discovery platform.",
    href: "https://foodtrucknerdz.com",
    external: true,
    secondaryHref: "https://docs.foodtrucknerdz.com",
    secondaryLabel: "Docs",
    screenshot: "/products/foodtrucknerdz-800.webp",
  },
  {
    id: "bigrpic",
    name: "bigr picture",
    tagline: "Photography — urban landscape, events, geometry.",
    href: "https://www.bigrpic.com",
    external: true,
    screenshot: "/products/bigrpic-800.webp",
  },
  {
    id: "org-hci-nerdz",
    name: "HCI Nerdz",
    tagline: "HCI and UI/UX innovation.",
    href: "https://github.com/HCI-Nerdz",
    external: true,
    secondaryHref: "https://hci-nerdz.github.io",
    secondaryLabel: "Site",
  },
  {
    id: "org-desktop-tooling",
    name: "Desktop Tooling",
    tagline: "OS-level desktop utilities: Explorer, theming, launchers.",
    href: "https://github.com/Desktop-Tooling",
    external: true,
    secondaryHref: "https://desktop-tooling.github.io",
    secondaryLabel: "Site",
  },
  {
    id: "org-antora",
    name: "Antora Supplemental",
    tagline: "Documentation themes and Antora extensions.",
    href: "https://github.com/antora-supplemental",
    external: true,
  },
  {
    id: "org-dlang",
    name: "Dlang Supplemental",
    tagline: "D language libraries and tooling.",
    href: "https://github.com/dlang-supplemental",
    external: true,
  },
  {
    id: "org-formatte",
    name: "formatte",
    tagline: "Formatting tooling organization.",
    href: "https://github.com/formatte",
    external: true,
  },
  {
    id: "org-openshell",
    name: "Open Shell Org",
    tagline: "Open Shell community.",
    href: "https://github.com/openshellorg",
    external: true,
  },
  {
    id: "personal",
    name: "Personal projects",
    tagline: "Repositories under AMDphreak. This site is the directory for every project.",
    href: "#AMDphreak",
  },
];
