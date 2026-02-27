const FALLBACK_MIRROR_BASE_URL = "https://www.heaniani.com";

export const MIRROR_BASE_URL = (
  process.env.MIRROR_BASE_URL ||
  process.env.NEXT_PUBLIC_MIRROR_BASE_URL ||
  FALLBACK_MIRROR_BASE_URL
).replace(/\/$/, "");

export function mirrorUrl(relPath) {
  let cleaned = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  if (cleaned.toLowerCase().startsWith("haw/")) {
    cleaned = cleaned.slice(4);
  }
  return `${MIRROR_BASE_URL}/${cleaned}`;
}
