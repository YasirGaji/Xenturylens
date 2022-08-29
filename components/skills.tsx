import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">We know Our Tools Inside Out</div>
        <span>
          We are continiously contributing to the high tech product industry in
          Africa, with the aim of powering thousands of businesses,
          coorporations, and organisations
        </span>
        <span>
          We&apos;re maintaining some of the most popular e-commerce platforms,
          with over <strong>$5,784</strong> daily sales.
        </span>
      </div>
    </div>
  );
};

export default Skills;
