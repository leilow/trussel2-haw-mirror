import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "Topical"
};

export default async function TopicalPage() {
    const filePath = "HAW/topical.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
