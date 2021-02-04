import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/reset.css";
import "../styles/globals.css";
import Head from "next/head";
import WebPlayerProvider from "../src/contexts/WebPlayerContext";
import WebPlayer from "../src/components/WebPlayer/WebPlayer";
import usePlayerDrawer from "../src/components/WebPlayer/usePlayerDrawer/usePlayerDrawer";

export default function MyApp({ Component, pageProps }: AppProps) {
  const {
    episodeId,
    displayStatus,
    setEpisodeId,
    toggleDrawer,
    handleEpisodeClick,
  } = usePlayerDrawer("");

  const siteTitle = "WeMartians Podcast";

  return (
    <WebPlayerProvider
      value={{ episodeId, setEpisodeId, toggleDrawer, handleEpisodeClick }}
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#2e2927"
        />
        <meta name="msapplication-TileColor" content="#2e2927" />
        <meta name="theme-color" content="#2e2927" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto&display=swap"
          }
          rel="stylesheet"
        />
        <title>{siteTitle}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@we_martians" />
        <meta name="twitter:creator" content="@JakeOnOrbit" />
        <meta name="twitter:title" content={siteTitle} />
        <meta
          name="twitter:description"
          content="A biweekly podcast about the exploration and science of the Moon, Mars and beyond."
        />
        <meta
          name="twitter:image"
          content="https://www.wemartians.com/twitter_card_image_wemartians.png"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="A biweekly podcast about the exploration and science of the Moon, Mars and beyond."
        ></meta>

        <meta property="og:url" content="https://www.wemartians.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WeMartians Podcast" />
        <meta
          property="og:description"
          content="A biweekly podcast about the exploration and science of the Moon, Mars and beyond."
        />
        <meta
          property="og:image"
          content="https://www.wemartians.com/facebook_card_image_wemartians.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <Component {...pageProps} />
      <WebPlayer
        id={episodeId}
        toggleDrawer={toggleDrawer}
        displayStatus={displayStatus}
      />
    </WebPlayerProvider>
  );
}
