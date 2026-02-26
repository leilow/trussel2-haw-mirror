import Link from "next/link";
import { siteMap } from "../data/siteMap";
import { navGroups } from "../data/nav";

function LinkDiagnostics({ siteMap }) {
  const allLinks = siteMap.flatMap((section) =>
    section.items.map((item) => item.path)
  );

  return (
    <div className="heroCard">
      <h2>Link Map Diagnostics</h2>
      <p>
        This panel checks the routes you intend to support. For now, it lists
        them so we can verify the information architecture before building pages.
      </p>
      <div className="heroMeta">{allLinks.length} routes in map</div>
      <ul>
        {allLinks.map((path) => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="container">
      <header className="header">
        <div>
          <div className="title">Trussel Hawaiian Prototype</div>
          <div className="subtitle">
            Modern rebuild test UI. Focus: structure, links, and layout.
          </div>
        </div>
        <div className="subtitle">Single-page pilot</div>
      </header>

      <section className="nav">
        {siteMap.map((section) => (
          <div className="navSection" key={section.section}>
            <h3>{section.section}</h3>
            {section.items.map((item) => (
              <Link className="navItem" href={item.path} key={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section className="nav">
        {navGroups.map((group) => (
          <div className="navSection" key={group.title}>
            <h3>{group.title}</h3>
            {group.items.map((item) => (
              <Link
                className="navItem"
                href={item.path}
                key={item.path}
                target={item.newTab ? "_blank" : undefined}
                rel={item.newTab ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section className="hero">
        <div className="heroCard">
          <h2>Purpose</h2>
          <p>
            We are creating a modern, readable interface with a data-driven
            navigation system so interlinking stays consistent as content grows.
          </p>
          <p>
            Next step: add routes for each entry in the map, then wire in content
            page by page.
          </p>
          <div className="heroMeta">Prototype status: navigation only</div>
        </div>

        <LinkDiagnostics siteMap={siteMap} />
      </section>

      <footer className="footer">
        This is a test UI. Content and links will be refined as we ingest data.
      </footer>
    </main>
  );
}
