import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/reset.css";
import "../styles/globals.css";
import Head from "next/head";
import WebPlayerProvider from "../src/contexts/webPlayerContext";
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

  return (
    <WebPlayerProvider
      value={{ episodeId, setEpisodeId, toggleDrawer, handleEpisodeClick }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto&display=swap"
          }
          rel="stylesheet"
        />
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
