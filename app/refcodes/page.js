import MirrorShell from "../_mirror/MirrorShell";


export const metadata = {
  title: "Index to Reference Codes"
};

export default async function RefCodesPage() {
    const filePath = "HAW/refcodes.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage" />;
}
