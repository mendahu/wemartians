import Footer from '../../src/components/Footer/Footer';
import Section from '../../src/components/Section/Section';
import styles from './styles/PodcastsPage.module.css';

export type PodcastsPageProps = {};

export default function PodcastsPage(props: PodcastsPageProps) {
  return (
    <>
      <Section component="header" background="dark">
        Header
      </Section>
      <main>
        <Section component="section" background="light">
          Podcasts
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}
