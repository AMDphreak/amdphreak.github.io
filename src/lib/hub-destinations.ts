/**
 * Destination tiles for the creator hub homepage.
 * Omits memphis-cs-projects (legacy coursework) from featured orgs.
 */

export type HubDestination = {
  id: string;
  name: string;
  tagline: string;
  href: string;
  external?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export type HubSection = {
  id: string;
  title: string;
  tagline: string;
  destinations: HubDestination[];
};

export const hubSections: HubSection[] = [
  {
    id: "products",
    title: "Products & sites",
    tagline: "Live surfaces",
    destinations: [
      {
        id: "linx",
        name: "Linx",
        tagline: "Photo service and documentation.",
        href: "https://linx.photos",
        external: true,
        secondaryHref: "https://github.com/LinxPhotos",
        secondaryLabel: "GitHub",
      },
      {
        id: "dev-centr",
        name: "Dev-Centr",
        tagline: "Environment configuration and developer tooling.",
        href: "https://devcentr.org",
        external: true,
        secondaryHref: "https://docs.devcentr.org",
        secondaryLabel: "Docs",
      },
      {
        id: "foodtrucknerdz",
        name: "FoodTruckNerdz",
        tagline: "Food truck discovery platform.",
        href: "https://foodtrucknerdz.com",
        external: true,
        secondaryHref: "https://docs.foodtrucknerdz.com",
        secondaryLabel: "Docs",
      },
      {
        id: "bigrpic",
        name: "bigr Picture",
        tagline: "Photography — urban landscape, events, geometry.",
        href: "https://www.bigrpic.com",
        external: true,
      },
    ],
  },
  {
    id: "code",
    title: "Code & organizations",
    tagline: "GitHub · GitLab · Codeberg",
    destinations: [
      {
        id: "github-personal",
        name: "AMDphreak",
        tagline: "Personal repositories on GitHub.",
        href: "https://github.com/AMDphreak",
        external: true,
      },
      {
        id: "gitlab",
        name: "GitLab",
        tagline: "Personal repositories on GitLab.",
        href: "https://gitlab.com/AMDphreak",
        external: true,
      },
      {
        id: "codeberg",
        name: "Codeberg",
        tagline: "Forge presence on Codeberg.",
        href: "https://codeberg.org/AMDphreak",
        external: true,
      },
      {
        id: "org-dev-centr",
        name: "dev-centr",
        tagline: "Developer tooling organization.",
        href: "https://github.com/dev-centr",
        external: true,
      },
      {
        id: "org-foodtrucknerdz",
        name: "FoodTruckNerdz",
        tagline: "Food truck platform organization.",
        href: "https://github.com/FoodTruckNerdz",
        external: true,
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
        id: "org-linx",
        name: "LinxPhotos",
        tagline: "Linx photo service on GitHub.",
        href: "https://github.com/LinxPhotos",
        external: true,
      },
      {
        id: "catalog",
        name: "Repository catalog",
        tagline: "Every project across GitHub and GitLab.",
        href: "/repositories",
      },
    ],
  },
];
