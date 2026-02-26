import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "References"
};

export default async function ReferencesPage() {
    const filePath = "HAW/refs.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
