import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { WallopProvider, Flex, Box, theme } from '@peduarte/wallop-system';
import { prismTheme } from '../prismTheme';
import { useAnalytics } from '@lib/analytics';
import { Footer } from '@components/Footer';

// Create global CSS for syntax highlighting
export const GlobalStyles = createGlobalStyle(
  {
    body: {
      backgroundColor: theme.colors.black,
      color: theme.colors.white,
      fontFamily: theme.fonts.sans,
      margin: 0,
    },

    ul: {
      paddingLeft: theme.space[4],
    },

    figure: { margin: 0 },

    svg: { display: 'inline-block', verticalAlign: 'middle' },

    '&::selection': {
      backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
      color: 'black',
    },
  },
  prismTheme
);

function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  return (
    <WallopProvider>
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

      <GlobalStyles />

      <Flex sx={{ minHeight: '100vh', flexDirection: 'column' }}>
        <Box sx={{ flex: 1 }}>
          <Component {...pageProps} />
        </Box>

        <Footer />
      </Flex>
    </WallopProvider>
  );
}

export default App;
