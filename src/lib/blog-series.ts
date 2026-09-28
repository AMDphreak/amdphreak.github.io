import type { CollectionEntry } from "astro:content";
import { parseCmkBlogFrontmatter } from "./centrmark-blog-loader";

export type SeriesPostRef = {
  slug: string;
  title: string;
  description?: string;
  seriesOrder?: number;
  seriesHub?: boolean;
  draft: boolean;
};

type MdEntry = CollectionEntry<"blog">;
type CmkEntry = CollectionEntry<"blogCmk">;

function mdSeriesMeta(post: MdEntry): Omit<SeriesPostRef, "slug" | "title"> & { series?: string } {
  const d = post.data as MdEntry["data"] & {
    series?: string;
    seriesOrder?: number;
    seriesHub?: boolean;
  };
  return {
    series: d.series,
    description: d.description,
    seriesOrder: d.seriesOrder,
    seriesHub: d.seriesHub ?? false,
    draft: d.draft ?? false,
  };
}

function cmkSeriesMeta(post: CmkEntry): Omit<SeriesPostRef, "slug" | "title"> & { series?: string } {
  const fm = parseCmkBlogFrontmatter(post.data.cmkSource ?? "");
  return {
    series: post.data.series ?? fm.series,
    description: post.data.description ?? fm.description,
    seriesOrder: post.data.seriesOrder ?? fm.seriesOrder,
    seriesHub: post.data.seriesHub ?? fm.seriesHub ?? false,
    draft: post.data.draft ?? false,
  };
}

export function collectSeriesPosts(
  seriesKey: string,
  mdPosts: MdEntry[],
  cmkPosts: CmkEntry[],
  options?: { includeDrafts?: boolean },
): SeriesPostRef[] {
  const includeDrafts = options?.includeDrafts ?? false;
  const refs: SeriesPostRef[] = [];

  for (const post of mdPosts) {
    const meta = mdSeriesMeta(post);
    if (meta.series !== seriesKey) continue;
    if (!includeDrafts && meta.draft) continue;
    refs.push({
      slug: post.id,
      title: post.data.title,
      description: meta.description,
      seriesOrder: meta.seriesOrder,
      seriesHub: meta.seriesHub,
      draft: meta.draft,
    });
  }

  for (const post of cmkPosts) {
    const meta = cmkSeriesMeta(post);
    if (meta.series !== seriesKey) continue;
    if (!includeDrafts && meta.draft) continue;
    refs.push({
      slug: post.id,
      title: post.data.title,
      description: meta.description,
      seriesOrder: meta.seriesOrder,
      seriesHub: meta.seriesHub,
      draft: meta.draft,
    });
  }

  return refs.sort((a, b) => {
    const ao = a.seriesOrder ?? (a.seriesHub ? 0 : 999);
    const bo = b.seriesOrder ?? (b.seriesHub ? 0 : 999);
    if (ao !== bo) return ao - bo;
    return a.title.localeCompare(b.title);
  });
}
