import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useRouteChange = () => {
  const router = useRouter();
  const [routeLoading, setRouteLoading] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      setRouteLoading(url);
    };
    const handleRouteChangeEnd = () => {
      setRouteLoading(undefined);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return routeLoading;
};

export default useRouteChange;
