import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "Texts"
};

export default async function TextsPage() {
    const filePath = "HAW/texts.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
