import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
        />
        <link
          rel="icon"
          href="https://ik.imagekit.io/kuromaru/kintamani_logo_2_-1Gx-GqJ0.png"
        />
        {/* <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
