import MirrorShell from "../_mirror/MirrorShell";

export const metadata = {
  title: "CHD - Combined Hawaiian Dictionary - introduction"
};

export default async function IntroPage() {
  const filePath = "HAW/intro.htm";
  return <MirrorShell filePath={filePath} className="mirrorPage introPage" />;
}
