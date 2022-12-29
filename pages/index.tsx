import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from '../components/masthead';
import AboutUs from '../components/aboutus';
import Skills from '../components/skills';
import Projects from '../components/projects';
import TrustedBy from '../components/trustedby';
import ContactUs from '../components/contactus';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>XenturyLens</title>
        <meta
          name="description"
          content="Great Product is built by Great Teams | We see Beyond the Product"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
      <Projects />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
