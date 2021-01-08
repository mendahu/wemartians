import Image from "next/image";
import { getShow, getShows } from "../../lib/getShows";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import { Episode } from "../../src/types/common";
import styles from "./styles/Podcast.module.css";

export type PodcastPageProps = {
  episode: Episode;
};

export default function PodcastPage({ episode }) {
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
        <Image src={episode.image} width={500} height={500} />
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
    shows = await getShows(3);
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
