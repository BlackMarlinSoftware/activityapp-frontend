import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

const useWindowSize = (): WindowSize => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const setWindowSize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  const debouncedSetWindowSize = debounce(() => {
    setWindowSize();
  }, 200);

  useEffect(() => {
    setWindowSize();

    window.addEventListener('resize', debouncedSetWindowSize);

    return () => {
      window.removeEventListener('resize', debouncedSetWindowSize);
    };
  }, [debouncedSetWindowSize]);

  return { windowWidth, windowHeight };
};

export default useWindowSize;
