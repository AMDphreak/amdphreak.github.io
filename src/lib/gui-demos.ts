export type GuiDemo = {
  id: string;
  title: string;
  tagline: string;
  status: "prototype" | "concept" | "stable";
  href: string;
  externalDemo?: string;
  repo?: string;
};

export const guiDemos: GuiDemo[] = [
  {
    id: "code-lens",
    title: "code-lens",
    tagline:
      "The real lens for code examples — portable spec and @code-lens packages.",
    status: "prototype",
    href: "/gui-demos/code-lens",
    externalDemo: "https://dev-centr.github.io/code-lens/",
    repo: "https://github.com/dev-centr/code-lens",
  },
];
