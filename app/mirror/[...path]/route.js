import { mirrorUrl } from "../../_mirror/urls";

export async function GET(request, { params }) {
  const segments = params.path || [];
  const relPath = segments.join("/");
  const url = mirrorUrl(relPath);
  const query = new URL(request.url).search;
  const target = `${url}${query}`;
  return Response.redirect(target, 302);
}
