import { notFound } from "next/navigation";
import MirrorShell from "../_mirror/MirrorShell";

function resolveMirrorFile(slug) {
  const lower = slug.toLowerCase();
  if (/^(haw|eng|index|rev|haw-conc)-[a-z]$/.test(lower)) {
    return `HAW/${lower}.htm`;
  }
  return null;
}

export default async function DictionaryLetterPage({ params }) {
  const filePath = resolveMirrorFile(params.slug);
  if (!filePath) {
    notFound();
  }

  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
