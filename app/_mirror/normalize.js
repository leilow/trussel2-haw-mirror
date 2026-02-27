export function normalizeHref(href) {
  if (!href) return href;
  const trimmed = href.trim();
  if (trimmed.startsWith("mailto:") || trimmed.startsWith("javascript:")) {
    return trimmed;
  }

  const splitHash = trimmed.split("#");
  const beforeHash = splitHash[0];
  const hash = splitHash[1] ? `#${splitHash[1]}` : "";

  const splitQuery = beforeHash.split("?");
  const beforeQuery = splitQuery[0];

  const isAbsolute = /^https?:\/\//i.test(beforeQuery);
  if (isAbsolute) {
    const m = beforeQuery.match(/trussel2\.com\/(haw)\/(.*)$/i);
    if (m) {
      return normalizeHref(m[2] + hash);
    }
    return trimmed;
  }

  let rel = beforeQuery;
  if (rel.startsWith("/HAW/") || rel.startsWith("/haw/")) {
    rel = rel.slice(5);
  } else if (rel.startsWith("/")) {
    return rel + hash;
  }

  if (!rel || rel === "#") return trimmed;

  if (rel.startsWith("../images/")) {
    return `https://www.heaniani.com/images/${rel.slice("../images/".length)}${hash}`;
  }

  const lower = rel.toLowerCase();
  if (lower.endsWith(".htm") || lower.endsWith(".html")) {
    return `/m/HAW/${rel}${hash}`;
  }

  return `https://www.heaniani.com/${rel}${hash}`;
}

export function rewriteLinks(html) {
  return html
    .replace(/href="([^"]+)"/gi, (m, href) => `href="${normalizeHref(href)}"`)
    .replace(/src="([^"]+)"/gi, (m, src) => `src="${normalizeHref(src)}"`)
    .replace(/action="([^"]+)"/gi, (m, action) => `action="${normalizeHref(action)}"`)
    .replace(/href='([^']+)'/gi, (m, href) => `href='${normalizeHref(href)}'`)
    .replace(/src='([^']+)'/gi, (m, src) => `src='${normalizeHref(src)}'`);
}

function stripLegacyBlocks(html) {
  let updated = html;
  // Remove legacy search block(s) that include Global Search / zoom_query
  updated = updated.replace(
    /<form[^>]*>(?=[\s\S]*zoom_query)[\s\S]*?<\/form>/gi,
    ""
  );
  return updated;
}

function stripTrusselHomeLink(html) {
  return html.replace(/<a\s[^>]*href="[^"]*www\.trussel\.com"[^>]*>[\s\S]*?<\/a>/gi, "");
}

export function augmentNav(html) {
  return stripTrusselHomeLink(stripLegacyBlocks(fixHeadwordForm(html)));
}

export function fixHeadwordForm(html) {
  let updated = html;
  updated = updated.replace(
    /<FORM\s+NAME="myform"[^>]*>/gi,
    '<form method="get" action="/search">'
  );
  updated = updated.replace(/NAME="inputbox"/gi, 'NAME="headword"');
  updated = updated.replace(
    /<INPUT\s+TYPE="button"\s+NAME="button"\s+Value="Go"\s+onClick="testResults\(this\.form\)">/gi,
    '<input type="submit" value="Go">'
  );
  // Remove diacritic helper buttons (modern keyboards handle these).
  updated = updated.replace(
    /<input\s+type="button"[^>]*value="[āēīōūʻ]"[^>]*>\s*/gi,
    ""
  );
  updated = updated.replace(
    /<input\s+type="button"[^>]*value="[āēīōū']"[^>]*>\s*/gi,
    ""
  );
  updated = updated.replace(/<\/FORM>/gi, "</form>");
  return updated;
}
