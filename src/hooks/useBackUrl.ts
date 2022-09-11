import { useRouter } from 'next/router';

const useBackUrl = (): string | undefined => {
  const router = useRouter();
  if (typeof router.query.backUrl === 'string') {
    return atob(router.query.backUrl);
  }

  return undefined;
};

export default useBackUrl;
