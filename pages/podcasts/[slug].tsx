import Image from "next/image";
import { getShow, getShows } from "../../lib/getShows";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import { Episode } from "../../src/types/common";
import styles from "../../src/pages/PodcastPage/styles/PodcastPage.module.css";
import ShopSection from "../../src/components/ShopSection/ShopSection";
import { formatPublishDate } from "../../src/helpers/formatPublishDate";
import { formatTimeAgo } from "../../src/helpers/formatTimeAgo";
import { useEffect } from "react";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import parse from "html-react-parser";
import SubscribeButtonList from "../../src/components/SubscribeButtonList/SubscribeButtonList";
import Head from "next/head";
import PlayIcon from "../../src/components/PlayIcon/PlayIcon";
import { formatDuration } from "../../src/helpers/formatDuration";
import PatreonAndMailingListSection from "../../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";
import CommonHead from "../../src/components/CommonHead/CommonHead";

export type PodcastPageProps = {
  episode: Episode;
};

export default function PodcastPage({ episode }: PodcastPageProps) {
  const { episodeId, setEpisodeId, handleEpisodeClick } = useWebPlayer();

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(episode.id);
    }
  }, []);

  const breadcrumbs = {
    crumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Episodes",
        href: "/podcasts/",
      },
    ],
    currentLocation: episode.title,
  };
  return (
    <>
      <CommonHead
        title={episode.title}
        description={episode.description}
        url={`https://www.wemartians.com/podcasts/${episode.slug}`}
        twitterCard={{
          type: "player",
          url: episode.image,
          audioUrl: `https://player.simplecast.com/${episode.id}?dark=true`,
          height: "200",
          width: "480",
        }}
        ogImage={{
          url: episode.image,
          height: "1080",
          width: "1080",
          contentType: "image/png",
        }}
      />
      <Section component="header" background="map">
        <CommonHeader title={"Episode"} breadcrumbs={breadcrumbs} />
      </Section>
      <Section component="main" background="light">
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <Image
              src={episode.image}
              width={500}
              height={500}
              alt={`${episode.title} Cover Art`}
            />
            <div className={styles.statBox}>
              <p>
                {formatPublishDate(episode.publishDate)} (
                {formatTimeAgo(episode.publishDate)})
              </p>
            </div>
            <div className={styles.subscribeListContainer}>
              <SubscribeButtonList size={50} className={styles.leftAlign} />
            </div>
          </div>
          <div className={styles.textContainer}>
            <h1>{episode.title}</h1>
            <h2 onClick={() => handleEpisodeClick(episode.id)}>
              <PlayIcon color="dark" size={24} />
              <span className={styles.playSpan}>
                Play Episode ({formatDuration(episode.duration)})
              </span>
            </h2>
            {parse(episode.longDescription)}
          </div>
        </div>
      </Section>
      <PatreonAndMailingListSection />
      <Section background="light">
        <ShopSection
          image={{
            url: "/wheels_down_ad.png",
            altText:
              "WHEELS DOWN NASA Perseverance Rover Shirt Design with Three Rover Wheels",
          }}
          title={"Wheels Down"}
          description={
            "Pick up the new WHEELS DOWN shirt celebrating NASA's Perseverance Rover landing on February 18th. Order now to get it in time for touchdown!"
          }
        />
      </Section>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const show = await getShow(params.slug);

  return {
    props: {
      episode: show,
    },
  };
}

export async function getStaticPaths() {
  let shows = [];

  try {
    shows = await getShows();
  } catch (err) {
    console.error(err);
  }

  const paths = shows.map((show) => {
    return {
      params: {
        slug: show.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
