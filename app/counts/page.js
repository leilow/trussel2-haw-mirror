import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "CHD - Counts"
};

export default async function CountsPage() {
    const filePath = "HAW/counts.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
