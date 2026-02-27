import "./globals.css";
import GlobalHeader from "./GlobalHeader";
import ScrollButtons from "./ScrollButtons";

export const metadata = {
  title: "He Aniani — Combined Hawaiian Dictionary Mirror",
  description: "A mirror preserving Kepano Trussel's Combined Hawaiian Dictionary"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600&family=Literata:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalHeader />
        {children}
        <ScrollButtons />
      </body>
    </html>
  );
}
