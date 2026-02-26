import { notFound } from "next/navigation";
import { fetchMirrorHtml } from "../../_mirror/loader";
import { renderMirrorFragment } from "../../_mirror/MirrorShell";

export default async function MirrorHtmlPage({ params }) {
  const segments = params.path || [];
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
