import React, { ReactNode, useCallback, useEffect, useState } from 'react';

interface ScrollValue {
  innnerWidth: number;
  children?: ReactNode;
} 

export const SizeContext = React.createContext<ScrollValue>({   
  innnerWidth: 0 
});

const SizeObserver: React.FC<ScrollValue> = ({ children }) => {
  const [innnerWidth, setInnnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnnerWidth(window.innerWidth);
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true});
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize])

  return (
    <SizeContext.Provider value={{ innnerWidth }}>
      {children}
    </SizeContext.Provider>
  )
    
}

export default SizeObserver;
