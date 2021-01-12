import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/PodcastsPage/styles/PodcastsPage.module.css";
import podcastsCopy from "../../copy/Podcasts/index.json";
import PodcastListItem from "../../src/pages/PodcastsPage/PodcastListItem/PodcastListItem";

import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import { useEffect } from "react";

export default function PodcastsPage(props) {
  const { episodeId, setEpisodeId, handleEpisodeClick } = useWebPlayer();

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.episodes[0].id);
    }
  }, []);

  return (
    <>
      <Section component="header" background="dark">
        <CommonHeader
          title={podcastsCopy.header.title}
          breadcrumbs={podcastsCopy.header.breadcrumbs}
        />
      </Section>
      <main>
        <Section component="section" background="light">
          {props.episodes.map((episode, index) => {
            return (
              <PodcastListItem
                key={index}
                slug={episode.slug}
                title={episode.title}
                imageUrl={episode.image}
                description={episode.description.slice(0, 160) + "..."}
                duration={episode.duration}
                publishDate={episode.publishDate}
                handlePlay={() => handleEpisodeClick(episode.id)}
              />
            );
          })}
        </Section>
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
    shows = await getShows();
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      episodes: shows,
    },
  };
}
