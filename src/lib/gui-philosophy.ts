export type PhilosophyArticle = {
  id: string;
  title: string;
  tagline: string;
  href: string;
  status: "draft" | "published";
};

/** Longer philosophy articles. The overview lives on the philosophy page. */
export const philosophyArticles: PhilosophyArticle[] = [];
