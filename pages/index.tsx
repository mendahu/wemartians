import Head from 'next/head';
import EpisodeCarousel, {
  Episode,
} from '../src/components/EpisodeCarousel/EpisodeCarousel';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Section from '../src/components/Section/Section';

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
        <Section background="dark">Patreon</Section>
        <Section background="dark">Mailing List</Section>
        <Section background="light">Shop</Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}
