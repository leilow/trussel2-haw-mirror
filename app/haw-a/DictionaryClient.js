"use client";

import { useMemo, useState } from "react";

export default function DictionaryClient({ entries }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => {
      return (
        e.headword.toLowerCase().includes(q) ||
        e.text.toLowerCase().includes(q)
      );
    });
  }, [entries, query]);

  return (
    <div className="dict">
      <div className="dictHeader">
        <div>
          <h1>Hawaiian-English Dictionary: A</h1>
          <div className="dictMeta">
            {entries.length} entries total • {filtered.length} shown
          </div>
        </div>
        <input
          className="dictSearch"
          type="search"
          placeholder="Filter by headword or definition"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="dictGrid">
        {filtered.map((e) => (
          <article
            className="dictEntry"
            key={e.id}
            id={e.id}
            dangerouslySetInnerHTML={{ __html: e.html }}
          />
        ))}
      </div>
    </div>
  );
}
