import Head from "next/head";

import "../styles/globals.css";
import "../styles/scss/style.scss";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>Projuktify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
