import { getShows } from "../lib/getShows";
import EpisodeCarousel from "../src/pages/HomePage/components/EpisodeCarousel/EpisodeCarousel";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/pages/HomePage/components/HomeHeader/HomeHeader";
import Section from "../src/components/Section/Section";
import ShopSection from "../src/components/ShopSection/ShopSection";
import { Episode } from "../src/types/common";
import { useWebPlayer } from "../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import EventBanner from "../src/components/EventBanner/EventBanner";
import PatreonAndMailingListSection from "../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";

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

  return {
    props: {
      episodes: shows.slice(0, 3),
    },
  };
}
