import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      summary: z.string(),
      date: z.string(),
      lastmod: z.string().optional(),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string()).default([]),
      canonicalURL: z.string().optional(),
      featuredImage: image().optional(),
      images: z.array(image()).optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      index: z.number(),
      link: z.string().optional(),
      github: z.string().optional(),
      gitlab: z.string().optional(),
      blog: z.string().optional(),
      technologies: z.array(z.string()).optional(),
      imgSrc: image().optional(),
    }),
});

const authors = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image().optional(),
      occupation: z.string().optional(),
      company: z.string().optional(),
      email: z.string().email().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      layout: z.string().optional(),
    }),
});

export const collections = { blog, projects, authors };
