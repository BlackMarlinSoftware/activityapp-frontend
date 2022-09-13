import { useRouter } from 'next/router';

const useBackUrl = (): string | undefined => {
  const router = useRouter();
  if (typeof router.query.backUrl === 'string') {
    try {
      return `/${atob(router.query.backUrl)}`;
    } catch (err) {
      return '/';
    }
  }

  return undefined;
};

export default useBackUrl;
