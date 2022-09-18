import { useRouter } from 'next/router';

const useBase64Url = () => {
  const router = useRouter();
  return btoa(router.asPath);
};

export default useBase64Url;
