import { useEffect, useState } from 'react';

export const GetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, []);
  return windowSize;
};
