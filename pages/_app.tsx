import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
