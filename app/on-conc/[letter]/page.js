import { notFound } from "next/navigation";
import MirrorShell from "../../_mirror/MirrorShell";

const VALID = ["a","e","h","i","k","l","m","n","o","p","r","s","t","u","v","w","z"];

export function generateStaticParams() {
  return VALID.map((letter) => ({ letter }));
}

export default async function OnConcPage({ params }) {
  const { letter: rawLetter } = await params;
  const letter = String(rawLetter || "").toLowerCase();
  if (!VALID.includes(letter)) {
    notFound();
  }

  const filePath = `HAW/ON-conc-${letter}-full.htm`;
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
