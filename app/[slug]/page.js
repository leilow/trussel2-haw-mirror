import { readFileSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import MirrorShell from "../_mirror/MirrorShell";

function loadManifest() {
  try {
    const raw = readFileSync(join(process.cwd(), "data", "mirror-manifest.json"), "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

const SLUG_RE = /^(haw|eng|index|rev|haw-conc)-[a-z]$/;

export function generateStaticParams() {
  const manifest = new Set(loadManifest());
  const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
  const PREFIXES = ["haw", "eng", "index", "rev", "haw-conc"];
  const params = [];
  for (const prefix of PREFIXES) {
    for (const letter of LETTERS) {
      const slug = `${prefix}-${letter}`;
      if (manifest.has(`${slug}.htm`)) {
        params.push({ slug });
      }
    }
  }
  return params;
}

function resolveMirrorFile(slug) {
  const lower = slug.toLowerCase();
  if (SLUG_RE.test(lower)) {
    return `HAW/${lower}.htm`;
  }
  return null;
}

export default async function DictionaryLetterPage({ params }) {
  const { slug } = await params;
  const filePath = resolveMirrorFile(slug);
  if (!filePath) {
    notFound();
  }

  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
