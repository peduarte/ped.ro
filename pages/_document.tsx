import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from 'stitches.config';
import { renderSnippet, gtagUrl } from '@lib/analytics';

const FONT_INTER = 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap';
const FONT_FIRA_CODE = 'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <script async src={gtagUrl} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={FONT_INTER} rel="preload" as="style" />
          <link href={FONT_INTER} rel="stylesheet" media="all" />
          <link href={FONT_FIRA_CODE} rel="preload" as="style" />
          <link href={FONT_FIRA_CODE} rel="stylesheet" media="all" />
          <noscript>
            <link href={FONT_INTER} rel="stylesheet" />
            <link href={FONT_FIRA_CODE} rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
