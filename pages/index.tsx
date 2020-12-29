import Head from 'next/head';
import { getShows } from '../lib/getShows';
import EpisodeCarousel, {
  Episode,
} from '../src/components/EpisodeCarousel/EpisodeCarousel';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import MailingListCallToAction from '../src/components/MailingListCallToAction/MailingListCallToAction';
import PatreonCallToAction from '../src/components/PatreonCallToAction/PatreonCallToAction';
import Section from '../src/components/Section/Section';
import ShopSection from '../src/components/ShopSection/ShopSection';
import styles from '../styles/Home.module.css';

export default function Home(props) {
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
          <EpisodeCarousel episodes={props.episodes} />
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
