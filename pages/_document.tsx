import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from 'stitches.config';
import { renderSnippet, gtagUrl } from '@lib/analytics';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Inset SSR styles twice, the second one with hydration
          this is a hack to prevent a flash! Will be fixed soon. */}
          <style dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <script async src={gtagUrl} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
