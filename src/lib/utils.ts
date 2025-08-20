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
  return posts.filter((post) => post.data.tags && post.data.tags.includes(tag));
}

/**
 * Get all unique tags from posts
 */
export function getAllTags(posts: CollectionEntry<"blog">[]): string[] {
  return [...new Set(posts.flatMap((post) => post.data.tags || []))];
}

/**
 * Resolve image paths for blog posts
 * Images are stored in the content directory, so we need to reference them correctly
 */
export function resolvePostImages(post: CollectionEntry<"blog">): string[] {
  // If the post has a featured image, use that as the primary image
  if (post.data.featuredImage && post.data.featuredImage.src) {
    return [post.data.featuredImage.src as string];
  }

  // If the post has images array, resolve the relative paths
  if (post.data.images && post.data.images.length > 0) {
    return post.data.images.map((imagePath) => {
      // Remove the ./ prefix if present
      const cleanImagePath = imagePath.replace(/^\.\//, "");
      // Construct the path to the image in the content directory
      return `/src/content/blog/${post.id.split("/").slice(0, -1).join("/")}/${cleanImagePath}`;
    });
  }

  // Default fallback image
  return ["/stylish-owl.png"];
}

/**
 * Get the primary thumbnail image for a post
 */
export function getPostThumbnail(post: CollectionEntry<"blog">): string {
  const images = resolvePostImages(post);
  return images[0] || "/stylish-owl.png";
}
