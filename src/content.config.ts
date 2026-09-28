import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { tagsField } from "@content-tags/astro";
import { centrmarkBlogLoader } from "./lib/centrmark-blog-loader";

const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  draft: z.boolean().optional().default(false),
  tags: tagsField(z),
  series: z.string().optional(),
  seriesOrder: z.number().optional(),
  seriesHub: z.boolean().optional().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

const blogCmk = defineCollection({
  loader: centrmarkBlogLoader({ base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    seriesHub: z.boolean().optional().default(false),
    html: z.string(),
    cmkSource: z.string().optional(),
  }),
});

export const collections = { blog, blogCmk };
