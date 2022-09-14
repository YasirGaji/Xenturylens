import React from 'react';
import Logos from './logos';
import Testimonials from './testimonials';
import style from '../styles/trustedby.module.css';

const TrustedBy: React.FC = () => {
  return (
    <section className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${style.bg}`}>
      <div className='flex-1'></div>

      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-xl mb-10 font-bold text-center '>
          <span className='whitespace-nowrap'>Trusted By</span>{' '}
          <span className='whitespace-nowwrap'> the brands & products you trust</span>
        </h3>
        <Logos/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='container mx-auto lg:max-w-[70%] lg:px-10'>
          <h3 className='text-3xl lg:text-4xl text-center tracking-tight px-10 !leading-[3.5rem]'>Great product is built by Great Teams</h3>
        </div>
      </div>

      <div>
        <Testimonials />
      </div>

      <div className='flex-1 bg-black'></div>
    </section>
  )
}

export default TrustedBy;
