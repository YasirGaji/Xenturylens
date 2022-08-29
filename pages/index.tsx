import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masthead from '../components/masthead';
import AboutUs from '../components/aboutus';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>XenturyLens</title>
        <meta
          name="description"
          content="Great Software is built by Great Teams | We see Beyond the Product"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Masthead />
      <AboutUs />
    </div>
  );
};

export default Home;
