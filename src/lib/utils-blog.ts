import type { CollectionEntry } from "astro:content";

/**
 * Generate a slug from a post ID or use the provided slug
 */
export function getPostSlug(post: CollectionEntry<"blog">): string {
  return post.slug || post.id.split("/").pop() || "unknown";
}

/**
 * Check if a post is published (not a draft)
 */
export function isPostPublished(post: CollectionEntry<"blog">): boolean {
  return !post.data.draft;
}

/**
 * Sort posts by date (newest first)
 */
export function sortPostsByDate(
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] {
  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

/**
 * Filter posts by tag
 */
export function filterPostsByTag(
  posts: CollectionEntry<"blog">[],
  tag: string
): CollectionEntry<"blog">[] {
  const normalizedTag = tag.toLowerCase();
  return posts.filter(
    (post) =>
      post.data.tags &&
      post.data.tags.some((postTag) => postTag.toLowerCase() === normalizedTag)
  );
}

/**
 * Get all unique tags from posts
 */
export function getAllTags(posts: CollectionEntry<"blog">[]): string[] {
  const allTags = posts.flatMap((post) => post.data.tags || []);
  const normalizedTags = allTags.map((tag) => tag.toLowerCase());
  return [...new Set(normalizedTags)];
}

/**
 * Get the original tag case for display purposes
 */
export function getOriginalTagCase(
  posts: CollectionEntry<"blog">[],
  normalizedTag: string
): string {
  for (const post of posts) {
    if (post.data.tags) {
      const originalTag = post.data.tags.find(
        (tag) => tag.toLowerCase() === normalizedTag
      );
      if (originalTag) {
        return originalTag;
      }
    }
  }
  return normalizedTag;
}

/**
 * Resolve image paths for blog posts
 * This function now works with Astro's image imports from content collections
 */
export function resolvePostImages(post: CollectionEntry<"blog">): string[] {
  // If the post has a featured image object with src property
  if (post.data.featuredImage) {
    // Check if it's an ImageMetadata object or a string
    if (
      typeof post.data.featuredImage === "object" &&
      "src" in post.data.featuredImage
    ) {
      return [post.data.featuredImage.src];
    } else if (typeof post.data.featuredImage === "string") {
      return [post.data.featuredImage];
    }
  }

  // If the post has images array with ImageMetadata objects
  if (post.data.images && post.data.images.length > 0) {
    return post.data.images.map((image) => {
      // Check if it's an ImageMetadata object or a string
      if (typeof image === "object" && "src" in image) {
        return image.src;
      } else if (typeof image === "string") {
        return image;
      }
      return image;
    });
  }

  // Default fallback image from public directory
  return ["/stylish-owl.png"];
}

/**
 * Resolve image path for a project
 */
export function resolveProjectImage(
  project: CollectionEntry<"projects">
): string {
  // If the project has an imgSrc as ImageMetadata object
  if (project.data.imgSrc) {
    // Check if it's an ImageMetadata object or a string
    if (
      typeof project.data.imgSrc === "object" &&
      "src" in project.data.imgSrc
    ) {
      return project.data.imgSrc.src;
    } else if (typeof project.data.imgSrc === "string") {
      return project.data.imgSrc;
    }
  }

  // Default fallback image
  return "/stylish-owl.png";
}

/**
 * Get the primary thumbnail image for a post
 */
export function getPostThumbnail(post: CollectionEntry<"blog">): string {
  const images = resolvePostImages(post);
  return images[0] || "/stylish-owl.png";
}
