import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "Reverse Index Help"
};

export default async function ReverseHelpPage() {
    const filePath = "HAW/reversehelp.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
