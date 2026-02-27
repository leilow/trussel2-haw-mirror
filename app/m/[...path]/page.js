import { readFileSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { fetchMirrorHtml } from "../../_mirror/loader";
import { renderMirrorFragment } from "../../_mirror/MirrorShell";

function loadManifest() {
  try {
    const raw = readFileSync(join(process.cwd(), "data", "mirror-manifest.json"), "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function generateStaticParams() {
  const manifest = loadManifest();
  return manifest.map((relPath) => ({
    path: ["HAW", ...relPath.split("/")],
  }));
}

export default async function MirrorHtmlPage({ params }) {
  const { path: segments = [] } = await params;
  const isIntro = segments.join("/").toLowerCase() === "haw/intro.htm" || segments.join("/").toLowerCase() === "intro.htm";
  const needsHawPrefix =
    segments.length === 1 &&
    !/^haw$/i.test(segments[0]) &&
    segments[0].toLowerCase().endsWith(".htm");

  const segmentVariants = [];
  if (needsHawPrefix) {
    segmentVariants.push(["HAW", ...segments]);
  }
  segmentVariants.push(segments);

  for (const segs of segmentVariants) {
    const relPath = segs.join("/");
    if (!relPath.toLowerCase().endsWith(".htm") && !relPath.toLowerCase().endsWith(".html")) {
      continue;
    }
    try {
      const html = await fetchMirrorHtml(relPath);
      const fragment = renderMirrorFragment(html);

      return (
        <main className={`container mirrorPage${isIntro ? " introPage" : ""}`}>
          {fragment}
        </main>
      );
    } catch (err) {
      // try next variant
    }
  }

  notFound();
}
