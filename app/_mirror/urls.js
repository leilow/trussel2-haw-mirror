export const MIRROR_BASE_URL = (process.env.MIRROR_BASE_URL || "").replace(/\/$/, "");

export function mirrorUrl(relPath) {
  if (!MIRROR_BASE_URL) {
    throw new Error("MIRROR_BASE_URL is not set");
  }
  const cleaned = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  return `${MIRROR_BASE_URL}/${cleaned}`;
}
