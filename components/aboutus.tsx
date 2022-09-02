import React from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
  return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
      <div className="container mx-auto px-11">
        <p className="leading-light max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help ship better products, faster.</strong> Our team
          of professional engineers and product managers, have created the best
          user experience in some of the most popular softwares worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;sabi-boyz&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="Yasir"
            name="Yasir"
            link="https://yasirgaji.com"
            socialId="@yasirgaji"
          />

          <Member
            id="tunji"
            name="Yokao"
            link="https://www.linkedin.com/in/olatunji-yusuf-0b659b193"
            socialId="@sonoflatus"
          />

          <Member
            id="moji"
            name="NaNa"
            link="https://www.linkedin.com/in/mojisola-anthony-bb7412247/"
            socialId="@Esinana_moji"
          />

          <Member
            id="zaki"
            name="ZaKi"
            link="https://razakdev.netlify.app"
            socialId="@razak2free"
          />

          <Member
            id="mophar"
            name="Mophar"
            link="https://salawudeenportfolio.netlify.app"
            socialId="@Mophar2"
          />

          <Member
            id="super"
            name="Super"
            link="https://www.linkedin.com/in/akosile-abdulquadri/"
            socialId="@AkosileQuadri"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
