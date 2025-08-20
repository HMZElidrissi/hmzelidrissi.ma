import { defineCollection, z, type SchemaContext } from "astro:content";

// Define the blog post schema with proper image handling
const zBlog = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    date: z.string(), // Keep as string for compatibility
    lastmod: z.string().optional(),
    summary: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(), // Relative paths like "./image.jpg"
    featuredImage: image().optional(), // For high-quality featured images
    draft: z.boolean().default(false),
    author: z.string().optional(),
    slug: z.string().optional(),
    state: z.enum(["draft", "published"]).default("published"),
  });

// Define the author schema with proper image handling
const zAuthor = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    avatar: image().optional(), // Use Astro's image type for avatars
    occupation: z.string().optional(),
    authorBioLink: z.string().optional(),
    updatedAt: z.string().optional(),
    bio: z.string().optional(),
    socials: z
      .object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
  });

export const collections = {
  blog: defineCollection({
    schema: zBlog,
  }),
  authors: defineCollection({
    schema: zAuthor,
  }),
};
