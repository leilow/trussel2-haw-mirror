import "./globals.css";
import GlobalHeader from "./GlobalHeader";
import ScrollButtons from "./ScrollButtons";

export const metadata = {
  title: "Trussel2 Hawaiian Mirror",
  description: "Static-friendly mirror viewer for the Trussel Hawaiian Dictionary site"
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
