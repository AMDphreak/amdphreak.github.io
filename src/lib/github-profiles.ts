export type GitHubProfile = {
  slug: string;
  label: string;
  tagline?: string;
  url: string;
};

/** GitHub user and org profiles — keep in sync with repository catalog groups. */
export const githubProfiles: GitHubProfile[] = [
  {
    slug: "AMDphreak",
    label: "GitHub/AMDphreak",
    tagline: "Personal",
    url: "https://github.com/AMDphreak",
  },
  {
    slug: "dev-centr",
    label: "Dev-Centr",
    tagline: "Developer tooling",
    url: "https://github.com/dev-centr",
  },
  {
    slug: "FoodTruckNerdz",
    label: "FoodTruckNerdz",
    tagline: "Food truck platform",
    url: "https://github.com/FoodTruckNerdz",
  },
  {
    slug: "antora-supplemental",
    label: "Antora Supplemental",
    tagline: "Documentation themes",
    url: "https://github.com/antora-supplemental",
  },
  {
    slug: "dlang-supplemental",
    label: "Dlang Supplemental",
    tagline: "D language libraries",
    url: "https://github.com/dlang-supplemental",
  },
  {
    slug: "formatte",
    label: "formatte",
    url: "https://github.com/formatte",
  },
  {
    slug: "openshellorg",
    label: "Open Shell Org",
    url: "https://github.com/openshellorg",
  },
  {
    slug: "LinxPhotos",
    label: "LinxPhotos",
    url: "https://github.com/LinxPhotos",
  },
  {
    slug: "memphis-cs-projects",
    label: "Memphis CS Projects",
    tagline: "University coursework",
    url: "https://github.com/memphis-cs-projects",
  },
];
