import React from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

export const useAnalytics = () => {
  const router = useRouter();

  React.useEffect(() => {
    Fathom.load('XPCMEQAE', { includedDomains: ['ped.ro'] });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);
};
