import Link from "next/link";

export default function GlobalHeader() {
  return (
    <header className="globalHeader">
      <input id="global-nav-toggle" className="globalHeader__toggleInput" type="checkbox" />
      <label className="globalHeader__toggle" htmlFor="global-nav-toggle">
        Menu
      </label>
      <div className="globalHeader__middle">
        <nav id="global-nav" className="ghNav">
          <Link href="/m/HAW/intro.htm">Introduction</Link>
          <Link href="/m/HAW/haw-a.htm">Haw-Eng</Link>
          <Link href="/m/HAW/eng-a.htm">Eng-Haw</Link>
          <Link href="/m/HAW/haw-conc-a.htm">Concordance</Link>
          <Link href="/m/HAW/index-a.htm">Index</Link>
          <Link href="/m/HAW/rev-a.htm">Reverse Index</Link>
          <Link href="/m/HAW/topical.htm">Topical</Link>
          <Link href="/m/HAW/ON-conc-a-full.htm">ʻŌlelo Noʻeau</Link>
          <Link href="/m/HAW/kuk/hsa.htm">Kuaukukalahale</Link>
          <Link href="/m/HAW/refs.htm">References</Link>
          <Link href="/m/HAW/texts.htm">Texts</Link>
          <Link href="/m/HAW/counts.htm">Counts</Link>
        </nav>
      </div>

      <div className="globalHeader__searchRow">
        <form method="get" action="/mirror/HAW/search.php" className="ghSearch ghSearch--inline">
          <label htmlFor="zoom_query" className="ghLabel">Global Search</label>
          <div className="ghRow">
            <input id="zoom_query" name="zoom_query" type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </div>
        </form>
        <form method="get" action="/mirror/HAW/search.php" className="ghSearch ghSearch--inline">
          <label htmlFor="headword" className="ghLabel">Headword (no okina/kahako)</label>
          <div className="ghRow">
            <input id="headword" name="headword" type="text" placeholder="Headword" />
            <button type="submit">Go</button>
          </div>
        </form>
      </div>
    </header>
  );
}
