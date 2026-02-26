import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "Hawaiian Concordance: A"
};

export default async function HawConcAPage() {
    const filePath = "HAW/haw-conc-a.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
