import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    printWidth: 80,
    sortTailwindcss: {},
    sortPackageJson: false,
    ignorePatterns: [
      "node_modules/",
      ".pnpm-store/",
      "dist/",
      ".output/",
      "*.min.js",
      "*.min.css",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      ".env",
      ".env.local",
      ".env.*.local",
      "*.log",
      ".DS_Store",
      "Thumbs.db",
    ],
  },
});
