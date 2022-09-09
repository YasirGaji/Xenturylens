import React from "react";
import SliderContainer from "./slider";
import Image from 'next/image';

const Logos: React.FC = () => {
  return (
    <>
      <SliderContainer initialOffsetX={0} contentWidth={1290}>
        <Image src="/assets/brands/logo.svg" alt="logo" width={150} height={50} objectFit="contain" />
      </SliderContainer>
    </>
  )
}

export default Logos;
