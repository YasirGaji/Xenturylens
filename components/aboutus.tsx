import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
      <div className="container mx-auto px-11">
        <p className="leading-light max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help ship better softwares, faster.</strong> Our team
          of professional engineers have created the best user experience in
          some of the most popular softwares in the world
        </p>
      </div>
      <div className="container mx-auto"></div>
    </section>
  );
};

export default AboutUs;
