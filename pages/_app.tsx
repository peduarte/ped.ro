import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useAnalytics } from '@lib/analytics';
import { Footer } from '@components/Footer';
import { globalStyles } from '@styles/global';
import { box } from '@styles/box';

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();
  return (
    <>
      <Head>
        <title>Pedro Duarte</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={box({ displayy: 'flex', minHeight: '100vh', flexDirection: 'column' })}>
        <div className={box({ flex: 1 })}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
