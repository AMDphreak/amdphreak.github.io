export type PhilosophyArticle = {
  id: string;
  title: string;
  tagline: string;
  href: string;
  status: "draft" | "published";
};

/** Registry for UI/UX philosophy essays; add entries as articles are published. */
export const philosophyArticles: PhilosophyArticle[] = [];
