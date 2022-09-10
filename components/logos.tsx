import React from "react";
import SliderContainer, { SliderItem } from "./slider";
import Image from 'next/image';

const Logos: React.FC = () => {
  return (
    <>
      <SliderContainer initialOffsetX={0} contentWidth={1290} width={0}>
        <SliderItem initialOffsetX={0} contentWidth={0} width={150}>
          <Image src="/assets/brands/bafsta.png" alt="logo" width={150} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={200}>
          <Image src="/assets/brands/hs2.png" alt="logo" width={200} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={250}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={250} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={300}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={300} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={350}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={350} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={400}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={400} height={50} objectFit="contain" />
        </SliderItem>
      </SliderContainer>

      <SliderContainer initialOffsetX={0} contentWidth={1290} width={0}>
        <SliderItem initialOffsetX={0} contentWidth={0} width={150}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={150} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={200}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={200} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={250}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={250} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={300}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={300} height={50} objectFit="contain" />
        </SliderItem>

        <SliderItem initialOffsetX={0} contentWidth={0} width={350}>
          <Image src="/assets/brands/logo.svg" alt="logo" width={350} height={50} objectFit="contain" />
        </SliderItem>
      </SliderContainer>
    </>
  )
}

export default Logos;
