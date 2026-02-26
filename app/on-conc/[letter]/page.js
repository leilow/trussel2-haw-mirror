import { notFound } from "next/navigation";
import MirrorShell from "../../_mirror/MirrorShell";

const VALID = new Set(["a","e","h","i","k","l","m","n","o","p","r","s","t","u","v","w","z"]);

export default async function OnConcPage({ params }) {
  const letter = String(params.letter || "").toLowerCase();
  if (!VALID.has(letter)) {
    notFound();
  }

  const filePath = `HAW/ON-conc-${letter}-full.htm`;
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
