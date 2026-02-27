#!/usr/bin/env node

/**
 * Scans the local mirror directory for .htm/.html files and writes
 * a JSON manifest used by generateStaticParams at build time.
 *
 * Usage:
 *   MIRROR_LOCAL_PATH=/path/to/HAW node scripts/enumerate-mirror-pages.mjs
 *
 * If MIRROR_LOCAL_PATH is not set, falls back to the default location.
 */

import { readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const mirrorPath =
  process.env.MIRROR_LOCAL_PATH ||
  "/Users/leimomi/site-mirror/raw/trussel2/trussel2.com/HAW";

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else {
      const lower = entry.toLowerCase();
      if (lower.endsWith(".htm") || lower.endsWith(".html")) {
        const rel = relative(mirrorPath, full);
        // Skip junk files from the scrape
        if (rel.startsWith(".") || rel.includes("/.")) continue;
        results.push(rel);
      }
    }
  }
  return results;
}

const files = walk(mirrorPath).sort();
console.log(`Found ${files.length} HTML files in ${mirrorPath}`);

const outDir = join(projectRoot, "data");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "mirror-manifest.json");
writeFileSync(outPath, JSON.stringify(files, null, 2) + "\n");
console.log(`Wrote manifest to ${outPath}`);
