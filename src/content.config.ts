import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define the blog post schema
const zBlog = z.object({
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  author: z.string().optional(),
  slug: z.string().optional(),
});

// Define the author schema
const zAuthor = z.object({
  name: z.string(),
  avatar: z.string().optional(),
  occupation: z.string().optional(),
  authorBioLink: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
    schema: zBlog,
  }),
  authors: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/authors" }),
    schema: zAuthor,
  }),
};
