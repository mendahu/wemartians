import { getShows } from "../lib/getShows";
import EpisodeCarousel from "../src/pages/HomePage/components/EpisodeCarousel/EpisodeCarousel";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/pages/HomePage/components/HomeHeader/HomeHeader";
import Section from "../src/components/Section/Section";
import ShopSection from "../src/components/ShopSection/ShopSection";
import styles from "../src/pages/HomePage/styles/Home.module.css";
import { Episode } from "../src/types/common";
import { useWebPlayer } from "../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import EventBanner from "../src/components/EventBanner/EventBanner";
import PatreonAndMailingListSection from "../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";

export type HomeProps = {
  episodes: Episode[];
  event: {
    date: string;
    videoLink: string;
    title: string;
    desc: string;
  };
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
      <Section component="header" background="map">
        <Header />
      </Section>
      <main>
        <Section background="light">
          <EpisodeCarousel
            episodes={props.episodes}
            handleClick={handleEpisodeClick}
          />
          <EventBanner
            date={props.event.date}
            videoLink={props.event.videoLink}
            title={props.event.title}
            desc={props.event.desc}
          />
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
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticProps(context) {
  const shows = await getShows();

  const event = {
    date: new Date(Date.UTC(2021, 1, 18, 19, 45, 0)).toString(),
    videoLink: "https://www.youtube.com/embed/gXKNtv1Upzw",
    title: "Watch Perseverance land with us!",
    desc:
      "Join Jake, co-host Tanya Harrison and special guests from NASA, Lockheed Martin and more to watch the landing live on YouTube!",
  };

  return {
    props: {
      episodes: shows.slice(0, 3),
      event,
    },
  };
}
