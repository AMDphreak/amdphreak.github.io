import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { tagsField } from "@content-tags/astro";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    tags: tagsField(z),
  }),
});

export const collections = { blog };
