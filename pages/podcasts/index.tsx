import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/PodcastsPage/styles/PodcastsPage.module.css";
import Image from "next/image";
import podcastsCopy from "../../copy/Podcasts/index.json";
import Breadcrumbs from "../../src/components/Breadcrumbs/Breadcrumbs";
import PodcastListItem from "../../src/pages/PodcastsPage/PodcastListItem/PodcastListItem";
import WebPlayer from "../../src/components/WebPlayer/WebPlayer";
import usePlayerDrawer from "../../src/components/WebPlayer/usePlayerDrawer/usePlayerDrawer";

export default function PodcastsPage(props) {
  const {
    episodeId,
    setEpisodeId,
    displayStatus,
    toggleDrawer,
  } = usePlayerDrawer(props.episodes[0].id);
  return (
    <>
      <Section component="header" background="dark">
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image src={"/2021_logo-dark.png"} width={100} height={100} />
          </div>
          <div className={styles.headerTitleContainer}>
            <h1 className={styles.title}>{podcastsCopy.header.title}</h1>

            <Breadcrumbs
              crumbs={podcastsCopy.header.breadcrumbs.crumbs}
              currentLocation={podcastsCopy.header.breadcrumbs.currentLocation}
            />
          </div>
        </div>
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
  const shows = await getShows(3);

  return {
    props: {
      episodes: shows,
    },
  };
}
