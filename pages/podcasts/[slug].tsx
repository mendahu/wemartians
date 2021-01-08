import Image from "next/image";
import { getShow, getShows } from "../../lib/getShows";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import { Episode } from "../../src/types/common";
import styles from "../../src/pages/PodcastPage/styles/PodcastPage.module.css";
import PatreonCallToAction from "../../src/components/PatreonCallToAction/PatreonCallToAction";
import MailingListCallToAction from "../../src/components/MailingListCallToAction/MailingListCallToAction";
import ShopSection from "../../src/components/ShopSection/ShopSection";
import { formatPublishDate } from "../../src/helpers/formatPublishDate";
import { formatTimeAgo } from "../../src/helpers/formatTimeAgo";

export type PodcastPageProps = {
  episode: Episode;
};

export default function PodcastPage({ episode }: PodcastPageProps) {
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
      <Section component="header" background="map">
        <CommonHeader title={"Episode"} breadcrumbs={breadcrumbs} />
      </Section>
      <Section component="main" background="light">
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <Image src={episode.image} width={500} height={500} />
            <div className={styles.statBox}>
              <h3>
                {formatPublishDate(episode.publishDate)} (
                {formatTimeAgo(episode.publishDate)})
              </h3>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.episodeTitle}>{episode.title}</h1>
            <p className={styles.showNotes}>{episode.longDescription}</p>
          </div>
        </div>
      </Section>
      <Section background="dark" className={styles.ctaContainer}>
        <PatreonCallToAction />
        <MailingListCallToAction />
      </Section>
      <Section background="light">
        <ShopSection />
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
    shows = await getShows(7);
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
