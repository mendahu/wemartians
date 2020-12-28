import Head from 'next/head';
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

const mockEpisodeData: Episode[] = [
  {
    number: 1,
    title: 'Episode 1',
    description:
      'The first episode. The first episode. The first episode. The first episode. The first episode.',
  },
  {
    number: 2,
    title: 'Episode 2',
    description:
      'The second episode. The second episode. The second episode. The second episode. The second episode.',
  },
  {
    number: 3,
    title: 'Episode 3',
    description:
      'The third episode. The third episode. The third episode. The third episode.The third episode.',
  },
];

export default function Home() {
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
          <EpisodeCarousel episodes={mockEpisodeData} />
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
