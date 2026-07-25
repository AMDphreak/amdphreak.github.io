/** Shared profile / hero social destinations (excludes GitHub menu). */
export type SocialLinkItem = {
  id: string;
  label: string;
  href: string;
  /** Canonical brand fill for hover flip back-face */
  brand: string;
  /** Icon stroke/fill on brand back-face */
  brandFg?: string;
};

export const socialLinks: SocialLinkItem[] = [
  {
    id: "codeberg",
    label: "Codeberg/AMDphreak",
    href: "https://codeberg.org/AMDphreak",
    brand: "#2185D0",
    brandFg: "#ffffff",
  },
  {
    id: "gitlab",
    label: "GitLab/AMDphreak",
    href: "https://gitlab.com/AMDphreak",
    brand: "#FC6D26",
    brandFg: "#ffffff",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/AMDphreak",
    brand: "#0A66C2",
    brandFg: "#ffffff",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/amdphreak",
    brand: "#000000",
    brandFg: "#ffffff",
  },
  {
    id: "chess",
    label: "Chess.com",
    href: "https://www.chess.com/member/amdphreak",
    brand: "#81B64C",
    brandFg: "#ffffff",
  },
  {
    id: "codersrank",
    label: "CodersRank",
    href: "https://profile.codersrank.io/user/amdphreak",
    brand: "#67A4AC",
    brandFg: "#ffffff",
  },
];

export const githubBrand = {
  brand: "#181717",
  brandFg: "#ffffff",
  label: "GitHub/AMDphreak",
};
