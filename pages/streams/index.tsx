import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/PodcastsPage/styles/PodcastsPage.module.css";
import podcastsCopy from "../../copy/Podcasts/index.json";
import PodcastListItem from "../../src/pages/PodcastsPage/PodcastListItem/PodcastListItem";

import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import Button from "../../src/components/Button/Button";
import queryString from "query-string";
import { Episode } from "../../src/types/common";

export type StreamsPageProps = {
  defaultEpisode: Episode;
};

const breadcrumbs = {
  crumbs: [
    {
      label: "Home",
      href: "/",
    },
  ],
  currentLocation: "Streams",
};

export default function StreamsPage(props: StreamsPageProps) {
  const { episodeId, setEpisodeId } = useWebPlayer();

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.defaultEpisode.id);
    }
  }, []);

  return (
    <>
      <Section component="header" background="map">
        <CommonHeader
          title={podcastsCopy.header.title}
          breadcrumbs={podcastsCopy.header.breadcrumbs}
        />
      </Section>
      <main>
        <Section component="section" background="light"></Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  let shows = [];
  try {
    shows = await getShows(1);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      defaultEpisode: shows[0],
    },
  };
}
