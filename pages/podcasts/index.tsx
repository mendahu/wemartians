import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/PodcastsPage/styles/PodcastsPage.module.css";
import podcastsCopy from "../../copy/Podcasts/index.json";
import PodcastListItem from "../../src/pages/PodcastsPage/PodcastListItem/PodcastListItem";
import WebPlayer from "../../src/components/WebPlayer/WebPlayer";
import usePlayerDrawer from "../../src/components/WebPlayer/usePlayerDrawer/usePlayerDrawer";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";

export default function PodcastsPage(props) {
  const {
    episodeId,
    handleEpisodeClick,
    displayStatus,
    toggleDrawer,
  } = usePlayerDrawer(props.episodes[0].id);
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
      <WebPlayer
        id={episodeId}
        displayStatus={displayStatus}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

export async function getStaticProps() {
  let shows = [];
  try {
    shows = await getShows(6);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      episodes: shows,
    },
  };
}
