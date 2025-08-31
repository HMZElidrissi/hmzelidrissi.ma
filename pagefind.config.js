export default {
  // Source directory (Astro build output)
  source: "dist",

  // Output directory for search index
  bundle_dir: "_pagefind",

  // Root selector - target the main content
  root_selector: "body",

  // Exclude navigation and other non-content elements
  exclude_selectors: [
    "nav",
    "header",
    "footer",
    ".search-button",
    ".theme-switch",
    ".mobile-nav",
    "[data-pagefind-ignore]",
    ".pagination",
    ".tag-list",
    ".author-info",
    ".edit-link",
  ],

  // Force language detection
  force_language: "en",

  // Verbose logging for debugging
  verbose: true,

  // Custom indexing rules
  glob: "**/*.html",

  // Custom data attributes for better search results
  custom_body_selector: "main, article, .prose",

  // Highlighting configuration
  highlight: {
    style: "background-color: yellow;",
    before: "<mark>",
    after: "</mark>",
  },

  // Serve configuration for development
  serve: true,

  // Generate metadata for better search results
  keep_index_url: true,

  // Process all content including dynamic routes
  process_content: true,
};
