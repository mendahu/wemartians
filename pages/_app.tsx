import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/reset.css';
import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {' '}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto&display=swap'
          }
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
