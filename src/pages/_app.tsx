import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { routeLoadingVar } from '../reactiveVars/loading';
import GlobalStyles from '../styles/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      console.log(`App is changing to ${url}`);
      routeLoadingVar(true);
    };
    const handleRouteChangeEnd = (url: string) => {
      console.log(`Finished`);
      routeLoadingVar(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
