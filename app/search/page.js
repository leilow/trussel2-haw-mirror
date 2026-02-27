"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const headword = searchParams.get("headword") || searchParams.get("hw") || searchParams.get("inputbox") || "";
  const query = searchParams.get("zoom_query") || "";

  return (
    <main className="container">
      <h1>Search</h1>
      <p>Query: <strong>{headword || query || "(empty)"}</strong></p>
      <p>
        Search is disabled in the static mirror. The original site uses a server-side search
        engine that is not available here.
      </p>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<main className="container"><h1>Search</h1><p>Loading…</p></main>}>
      <SearchContent />
    </Suspense>
  );
}
