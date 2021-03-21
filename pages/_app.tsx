import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/reset.css";
import "../styles/globals.css";
import WebPlayerProvider from "../src/contexts/WebPlayerContext";
import WebPlayer from "../src/components/WebPlayer/WebPlayer";
import usePlayerDrawer from "../src/components/WebPlayer/usePlayerDrawer/usePlayerDrawer";
import CommonHead from "../src/components/CommonHead/CommonHead";

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
      <CommonHead />
      <Component {...pageProps} />
      <WebPlayer
        id={episodeId}
        toggleDrawer={toggleDrawer}
        displayStatus={displayStatus}
      />
    </WebPlayerProvider>
  );
}
