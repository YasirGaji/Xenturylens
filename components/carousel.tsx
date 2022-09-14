import React, { ReactNode, useCallback, useState } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import ClassNames from 'embla-carousel-class-names';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '../styles/carousel.module.css';
import useAsyncEffect from "use-async-effect";

interface ContextValue {
  children?: ReactNode;
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: string;
  children?: ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
})

const Carousel: React.FC<Props> = ({ className, children }) => {
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const [ viewportRef, emblaApi ] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  }, [ClassNames(), Autoplay()]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useAsyncEffect( () => {
    if (!emblaApi)
      return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex}}>
      <div ref={viewportRef} className={`${styles.viewport} w-full overflow-hidden ${className}`}>
        <div className={`${styles.container} flex`}>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel;
