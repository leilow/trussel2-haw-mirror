import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "ʻŌlelo Noʻeau Concordance – Number Index"
};

export default async function OnNumIndexPage() {
    const filePath = "HAW/ON-numindex.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
