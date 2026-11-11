import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="NextLevel Play" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="NextLevel Play, digital agency, web design, web development, SEO, software solutions" />
        <meta name="description" content="NextLevel Play – Modern Digital Agency crafting digital excellence with bespoke web solutions, interactive designs, and software development." />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
