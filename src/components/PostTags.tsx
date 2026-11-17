import type { ResolvedTag } from "@content-tags/core";
import { TagList } from "@content-tags/solid";

export type PostTagsProps = {
  tags: ResolvedTag[];
};

/** Solid TagList styled for the continuing blog. */
export function PostTags(props: PostTagsProps) {
  return (
    <TagList
      tags={props.tags}
      class="flex flex-wrap gap-3 list-none m-0 p-0"
      linkClass="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-700 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-100 transition-colors"
    />
  );
}
