import type { AstroIntegration } from "astro";
import { execSync } from "child_process";
import { existsSync } from "fs";

interface PagefindOptions {
  site?: string;
  outputSubdir?: string;
}

export default function pagefindIntegration(
  options: PagefindOptions = {}
): AstroIntegration {
  const { site = "dist", outputSubdir = "_pagefind" } = options;

  return {
    name: "pagefind",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const siteDir = site === "dist" ? dir.pathname : site;

        console.log("🔍 Running Pagefind indexing...");
        console.log(`📂 Site directory: ${siteDir}`);

        if (!existsSync(siteDir)) {
          console.warn(
            `⚠️ Site directory ${siteDir} does not exist, skipping Pagefind`
          );
          return;
        }

        try {
          const command = `npx pagefind --site "${siteDir}" --output-subdir "${outputSubdir}"`;
          console.log(`🚀 Executing: ${command}`);

          execSync(command, {
            stdio: "inherit",
            cwd: process.cwd(),
          });

          console.log("✅ Pagefind indexing completed successfully!");
        } catch (error) {
          console.error("❌ Pagefind indexing failed:", error);
          // Don't fail the build, just warn
          console.warn("⚠️ Build will continue without search functionality");
        }
      },
    },
  };
}
