import React, { ReactNode, useCallback, useEffect, useState } from 'react';

interface ScrollValue {
  scrollY: number;
}

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  children?: ReactNode;
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

const ScrollObserver: React.FC<Props> = ({ children, ...props }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
