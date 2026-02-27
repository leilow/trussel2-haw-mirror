import { readFileSync } from "node:fs";
import { join } from "node:path";
import { mirrorUrl } from "./urls";

function countReplacementChars(text) {
  let count = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text.charCodeAt(i) === 0xfffd) count += 1;
  }
  return count;
}

function decodeBuffer(buf) {
  if (buf.length >= 2) {
    const b0 = buf[0];
    const b1 = buf[1];
    if (b0 === 0xff && b1 === 0xfe) {
      return new TextDecoder("utf-16le").decode(buf);
    }
    if (b0 === 0xfe && b1 === 0xff) {
      const swapped = new Uint8Array(buf.length - (buf.length % 2));
      for (let i = 0; i < swapped.length; i += 2) {
        swapped[i] = buf[i + 1];
        swapped[i + 1] = buf[i];
      }
      return new TextDecoder("utf-16le").decode(swapped);
    }
  }

  let text = new TextDecoder("utf-8").decode(buf);
  if (countReplacementChars(text) > 5) {
    text = new TextDecoder("iso-8859-1").decode(buf);
  }
  return text;
}

export async function fetchMirrorHtml(relPath) {
  const localPath = process.env.MIRROR_LOCAL_PATH;
  if (localPath) {
    let cleaned = relPath.startsWith("/") ? relPath.slice(1) : relPath;
    if (cleaned.toLowerCase().startsWith("haw/")) {
      cleaned = cleaned.slice(4);
    }
    const fullPath = join(localPath, cleaned);
    const buf = new Uint8Array(readFileSync(fullPath));
    return decodeBuffer(buf);
  }

  const url = mirrorUrl(relPath);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  const buf = new Uint8Array(await res.arrayBuffer());
  return decodeBuffer(buf);
}
