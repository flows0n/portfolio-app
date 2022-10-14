import { useState, useEffect } from 'react';

const BREAKPOINT = 720;

const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT ? true : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < BREAKPOINT ? true : false);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useMobileView;
