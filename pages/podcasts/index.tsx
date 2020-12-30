import { getShows } from '../../lib/getShows';
import Footer from '../../src/components/Footer/Footer';
import Section from '../../src/components/Section/Section';
import styles from './styles/PodcastsPage.module.css';

export default function PodcastsPage(props) {
  return (
    <>
      <Section component="header" background="dark">
        Header
      </Section>
      <main>
        <Section component="section" background="light">
          <ul>
            {props.episodes.map((episode, index) => {
              return (
                <li key={index}>
                  <a href={`/podcasts/${episode.slug}`}>{episode.title}</a>
                </li>
              );
            })}
          </ul>
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
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
