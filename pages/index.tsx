import Head from "next/head";
import { getShows } from "../lib/getShows";
import EpisodeCarousel from "../src/pages/HomePage/components/EpisodeCarousel/EpisodeCarousel";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/pages/HomePage/components/HomeHeader/HomeHeader";
import MailingListCallToAction from "../src/components/MailingListCallToAction/MailingListCallToAction";
import PatreonCallToAction from "../src/components/PatreonCallToAction/PatreonCallToAction";
import Section from "../src/components/Section/Section";
import ShopSection from "../src/components/ShopSection/ShopSection";
import WebPlayer from "../src/components/WebPlayer/WebPlayer";
import styles from "../src/pages/HomePage/styles/Home.module.css";
import usePlayerDrawer, {
  DisplayStatus,
} from "../src/components/WebPlayer/usePlayerDrawer/usePlayerDrawer";
import { Episode } from "../src/types/common";

export type HomeProps = {
  episodes: Episode[];
};

export default function Home(props: HomeProps) {
  const {
    episodeId,
    setEpisodeId,
    displayStatus,
    toggleDrawer,
  } = usePlayerDrawer(props.episodes[0].id);

  const handleEpisodeClick = (epId: string) => {
    setEpisodeId(epId);
    if (displayStatus === DisplayStatus.invisible) {
      toggleDrawer();
    }
  };

  return (
    <>
      <Head>
        <title>WeMartians Podcast</title>
      </Head>
      <Section component="header" background="map">
        <Header />
      </Section>
      <main>
        <Section background="light">
          <EpisodeCarousel
            episodes={props.episodes}
            handleClick={handleEpisodeClick}
          />
        </Section>
        <Section background="dark" className={styles.ctaContainer}>
          <PatreonCallToAction />
          <MailingListCallToAction />
        </Section>
        <Section background="light">
          <ShopSection />
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
      <WebPlayer
        id={episodeId}
        toggleDrawer={toggleDrawer}
        displayStatus={displayStatus}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const shows = await getShows();

  return {
    props: {
      episodes: shows.slice(0, 3),
    },
  };
}
