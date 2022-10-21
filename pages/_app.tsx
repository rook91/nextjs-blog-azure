import type { AppProps } from 'next/app'
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  console.log("_APP.TSX");
  return <Component {...pageProps} />;
}