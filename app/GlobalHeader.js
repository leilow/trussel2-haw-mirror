import Link from "next/link";

function LogoMark() {
  return (
    <svg className="logoMark" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <circle cx="16" cy="8" r="2.5" fill="#b33a3a" />
      <circle cx="10" cy="12" r="2.5" fill="#b33a3a" />
      <circle cx="22" cy="12" r="2.5" fill="#b33a3a" />
      <circle cx="8" cy="18" r="2.5" fill="#b33a3a" />
      <circle cx="16" cy="16" r="2.5" fill="#b33a3a" />
      <circle cx="24" cy="18" r="2.5" fill="#b33a3a" />
      <circle cx="12" cy="23" r="2.5" fill="#b33a3a" />
      <circle cx="20" cy="23" r="2.5" fill="#b33a3a" />
      <circle cx="16" cy="28" r="2.5" fill="#b33a3a" />
    </svg>
  );
}

export default function GlobalHeader() {
  return (
    <header className="globalHeader">
      <input id="global-nav-toggle" className="globalHeader__toggleInput" type="checkbox" />
      <Link href="/" className="globalHeader__logo" aria-label="Home">
        <LogoMark />
      </Link>
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
      <form method="get" action="https://www.trussel2.com/HAW/search.php" target="_blank" rel="noreferrer" className="globalHeader__search">
        <input name="zoom_query" type="text" placeholder="Search" className="ghSearchInput" />
        <button type="submit" className="ghSearchBtn" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>
      <label className="globalHeader__toggle" htmlFor="global-nav-toggle">
        Menu
      </label>
    </header>
  );
}
