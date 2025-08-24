// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://hmzelidrissi.ma",
  trailingSlash: "ignore",
  output: "server",

  experimental: {
    contentIntellisense: true,
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap(),
    robotsTxt(),
    vercel(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
