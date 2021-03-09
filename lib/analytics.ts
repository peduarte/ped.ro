import React from 'react';
import { Router } from 'next/router';

type WindowWithAnalytics = Window &
  typeof globalThis & {
    gtag: any;
  };

const trackingID = 'UA-28314827-1';

export const useAnalytics = () => {
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NODE_ENV === 'production') {
        // We need to wrap it in a rAF to ensure the correct data is sent to Segment
        // https://github.com/zeit/next.js/issues/6025
        requestAnimationFrame(() => {
          (window as WindowWithAnalytics).gtag('config', trackingID, {
            page_location: url,
            page_title: document.title,
          });
        });
      }
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => Router.events.off('routeChangeComplete', handleRouteChange);
  }, []);
};

export const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;

export function renderSnippet() {
  if (process.env.NODE_ENV === 'production') {
    return `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${trackingID}');
		`;
  }
}
