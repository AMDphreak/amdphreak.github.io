import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { tagsField } from "@content-tags/astro";
import { centrmarkLoader } from "@centrmark/astro";

const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  draft: z.boolean().optional().default(false),
  tags: tagsField(z),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

const blogCmk = defineCollection({
  loader: centrmarkLoader({ base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    html: z.string(),
    cmkSource: z.string().optional(),
  }),
});

export const collections = { blog, blogCmk };
