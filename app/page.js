import Link from "next/link";
import { siteMap } from "../data/siteMap";
import { navGroups } from "../data/nav";

export default function HomePage() {
  return (
    <main className="container">
      <header className="homeHeader">
        <h1 className="homeTitle">He Aniani</h1>
        <p className="homeSubtitle">
          A mirror of the Combined Hawaiian Dictionary
        </p>
      </header>

      <section className="homeIntro">
        <div className="heroCard">
          <h2>Purpose</h2>
          <p>
            This mirrored site exists as a way to preserve Kepano&rsquo;s work,
            keep the interlinking consistent, and hopefully contribute to it in
            a new form.
          </p>
        </div>

        <div className="heroCard">
          <h2>About Kepano</h2>
          <p>
            Stephen &ldquo;Kepano&rdquo; Trussel compiled the{" "}
            <a href="https://www.trussel2.com/HAW/intro.htm" target="_blank" rel="noreferrer">
              Combined Hawaiian Dictionary
            </a>{" "}
            (CHD), merging the works of Pukui &amp; Elbert, M&#257;maka Kaiao,
            Andrews, and Place Names of Hawai&rsquo;i into one searchable
            resource. He was known in the Linguistics Department at UH
            M&#257;noa for this work, and also maintained research on
            Austronesian and Pacific languages at{" "}
            <a href="https://www.trussel2.com/" target="_blank" rel="noreferrer">
              trussel2.com
            </a>.
          </p>
          <p>
            Kepano passed away in June 2020.{" "}
            <a href="/kepano">
              Obituary (Star-Advertiser)
            </a>.
          </p>
        </div>

        <div className="heroCard">
          <h2>Search</h2>
          <p>
            Full-text search is not available on this static mirror.
            You can search the original site directly:
          </p>
          <p>
            <a
              href="https://www.trussel2.com/HAW/search.php"
              target="_blank"
              rel="noreferrer"
              className="searchExtLink"
            >
              Search on trussel2.com &rarr;
            </a>
          </p>
        </div>
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

      <section className="nav">
        {siteMap.map((section) => (
          <div className="navSection" key={section.section}>
            <h3>{section.section}</h3>
            {section.items.map((item) =>
              item.soon ? (
                <span className="navItem navItem--soon" key={item.path}>
                  {item.title}
                </span>
              ) : item.external ? (
                <a className="navItem" href={item.path} key={item.path} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                <Link className="navItem" href={item.path} key={item.path}>
                  {item.title}
                </Link>
              )
            )}
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>
          Based on the work of Stephen &ldquo;Kepano&rdquo; Trussel at{" "}
          <a href="https://www.trussel2.com/HAW/" target="_blank" rel="noreferrer">
            trussel2.com
          </a>
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:olelonoeausearch@gmail.com">olelonoeausearch@gmail.com</a>
        </p>
      </footer>
    </main>
  );
}
