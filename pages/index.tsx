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
  const url = `https://${process.env.SIMPLECAST_API_URL}/podcasts/${process.env.PODCAST_ID}/episodes?limit=6`;

  const res = await fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.SIMPLECAST_TOKEN}`,
    }),
  });
  const data = await res.json();

  if (!data || !data.collection) {
    return {
      notFound: true,
    };
  } else {
    const episodes = data.collection
      .filter((episode) => episode.status === 'published')
      .map(
        (episode): Episode => {
          return {
            slug: episode.slug,
            title: episode.title,
            description:
              episode.description?.slice(0, 100) + '...' || 'No Description',
            image: episode.image_url,
            publishDate: episode.published_at,
          };
        }
      );

    return {
      props: {
        episodes: episodes.slice(0, 3),
      },
    };
  }
}
