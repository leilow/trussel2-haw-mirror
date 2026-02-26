import Link from "next/link";
import { fetchMirrorHtml } from "../_mirror/loader";
import { renderMirrorFragment } from "../_mirror/MirrorShell";


export const metadata = {
  title: "Hawaiian-English Dictionary: A"
};

export default async function HawAPage() {
    const filePath = "HAW/haw-a.htm";
  const html = await fetchMirrorHtml(filePath);
  const fragment = renderMirrorFragment(html);
  return (
    <main className="container mirrorPage">
      <header className="header">
        <div>
          <div className="title">Trussel Hawaiian Prototype</div>
          <div className="subtitle">Dictionary: Hawaiian-English (A)</div>
        </div>
        <div className="subtitle">
          <Link href="/">Back to prototype</Link>
        </div>
      </header>
      {fragment}
    </main>
  );
}
