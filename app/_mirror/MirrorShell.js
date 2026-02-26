import { fetchMirrorHtml } from "./loader";
import { augmentNav, rewriteLinks } from "./normalize";

function extractBody(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

export function renderMirrorFragment(html) {
  const body = extractBody(html);
  const content = rewriteLinks(augmentNav(body));

  return (
    <>
      <link rel="stylesheet" href="/mirror/HAW/haw.css" />
      <link rel="icon" href="/mirror/HAW/favicon.ico" />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default async function MirrorShell({ filePath, className }) {
  const html = await fetchMirrorHtml(filePath);
  const fragment = renderMirrorFragment(html);
  return <main className={`container ${className || "mirrorPage"}`}>{fragment}</main>;
}
