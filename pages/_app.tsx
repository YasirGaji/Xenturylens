import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utills/scroll-observer';
import SizeObserver from '../utills/size-observer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver innerWidth={0}>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
