import { useEffect, useState } from 'react';

const SIZES = {
  laptopL: '(max-width: 1024px)',
  tablet: '(max-width: 838px)',
  tabletS: '(max-width: 824px)',
  tabletM: '(max-width: 768px)',
  tabletL: '(max-width: 700px)',
  tabletSM: '(max-width: 602px)',
  mobileL: '(max-width: 475px)',
  mobileM: '(max-width: 700px)',
};

export const useMediaQuery = (mediaQuery: keyof typeof SIZES): boolean => {
  const [isMediaMatch, setIsMediaMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(SIZES[mediaQuery]);
    const mqlHandler = () => setIsMediaMatch(mediaQueryList.matches);

    mqlHandler();

    mediaQueryList.addEventListener('change', mqlHandler);

    return () => mediaQueryList.removeEventListener('change', mqlHandler);
  }, [mediaQuery]);

  return isMediaMatch;
};
