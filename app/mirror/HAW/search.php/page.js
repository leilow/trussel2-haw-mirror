export const metadata = {
  title: "Search"
};

export default function SearchPage({ searchParams }) {
  const headword = (searchParams.headword || searchParams.hw || searchParams.inputbox || "")
    .toString()
    .trim();
  const query = (searchParams.zoom_query || "").toString().trim();

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
