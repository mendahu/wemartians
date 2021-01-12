import Head from "next/head";
import { getShows } from "../lib/getShows";
import EpisodeCarousel from "../src/pages/HomePage/components/EpisodeCarousel/EpisodeCarousel";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/pages/HomePage/components/HomeHeader/HomeHeader";
import MailingListCallToAction from "../src/components/MailingListCallToAction/MailingListCallToAction";
import PatreonCallToAction from "../src/components/PatreonCallToAction/PatreonCallToAction";
import Section from "../src/components/Section/Section";
import ShopSection from "../src/components/ShopSection/ShopSection";

import styles from "../src/pages/HomePage/styles/Home.module.css";
import { Episode } from "../src/types/common";
import { useWebPlayer } from "../src/contexts/WebPlayerContext";
import { useEffect } from "react";

export type HomeProps = {
  episodes: Episode[];
};

export default function Home(props: HomeProps) {
  const { episodeId, setEpisodeId, handleEpisodeClick } = useWebPlayer();

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.episodes[0].id);
    }
  }, []);

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
          <div className={styles.patreonCtaContainer}>
            <PatreonCallToAction />
          </div>
          <div className={styles.mailingListCtaContainer}>
            <MailingListCallToAction color="dark" />
          </div>
        </Section>
        <Section background="light">
          <ShopSection />
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
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
