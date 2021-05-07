import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { IdProvider } from '@radix-ui/react-id';
import { useAnalytics } from '@lib/analytics';
import { Footer } from '@components/Footer';
import { globalStyles } from '@styles/global';
import { box } from '@styles/box';

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();

  return (
    <IdProvider>
      <Head>
        <title>Pedro Duarte</title>
      </Head>

      <div className={box({ display: 'flex', minHeight: '100vh', flexDirection: 'column' })}>
        <div className={box({ flex: 1 })}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </IdProvider>
  );
}

export default App;
