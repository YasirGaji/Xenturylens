import React, { useContext, useRef } from 'react';
import style from '../styles/skills.module.css';
import { ScrollContext } from '../utills/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
}; // this is for the opacity scrolling

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={style.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            We know Our Tools Inside Out
          </div>
          <span
            className={`${style.skillText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            We are continiously contributing to the high tech product industry
            in Africa, with the aim of powering thousands of businesses,
            coorporations, and organisations
          </span>
          <span
            className={`${style.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            We&apos;re maintaining some of the most popular e-commerce
            platforms, with over <strong>$5,784</strong> daily sales.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
