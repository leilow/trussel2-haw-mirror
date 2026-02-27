import Link from "next/link";

export const metadata = {
  title: "About Kepano — He Aniani"
};

export default function KepanoPage() {
  return (
    <main className="container">
      <header className="homeHeader">
        <h1 className="homeTitle">Stephen &ldquo;Kepano&rdquo; Trussel</h1>
      </header>

      <article className="kepanoArticle">
        <p>
          Kepano compiled the{" "}
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

        <p>Kepano passed away in June 2020.</p>

        <hr className="kepanoDivider" />

        <p className="kepanoSource">
          The following obituary was published in the{" "}
          <em>Honolulu Star-Advertiser</em> on July 4, 2020, in the
          weekly <em>Kauak&#363;kalahale</em> Hawaiian-language column:
        </p>

        <blockquote className="kepanoQuote">
          <p className="kepanoQuoteTitle">
            <strong>He aloha no ku&rsquo;u hoa &rsquo;aki mau i ka palu &rsquo;o Kepano</strong>
          </p>
          <p>
            Source:{" "}
            <a
              href="https://www.staradvertiser.com/2020/07/04/editorial/kauakukalahale/column-he-aloha-no-kuaeu-hoa-aeaki-mau-i-ka-palu-aeo-kepano/"
              target="_blank"
              rel="noreferrer"
            >
              Honolulu Star-Advertiser
            </a>{" "}
            (may require subscription)
          </p>
        </blockquote>

        <p>
          <Link href="/">&larr; Back to He Aniani</Link>
        </p>
      </article>
    </main>
  );
}
