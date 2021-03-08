import styles from "../../src/pages/StreamPage/styles/StreamPage.module.css";
import Head from "next/head";
import Section from "../../src/components/Section/Section";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import ShopSection from "../../src/components/ShopSection/ShopSection";
import Footer from "../../src/components/Footer/Footer";
import PatreonAndMailingListSection from "../../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";
import client from "../../lib/cmsClient";
import Image from "next/image";
import EventBanner from "../../src/components/EventBanner/EventBanner";
import { useNextSanityImage } from "next-sanity-image";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import { Episode, Guest, Stream } from "../../src/types/common";
import { getShows } from "../../lib/getShows";
import { getStreamQuery } from "../../src/queries/streams/streams";

export type StreamPageProps = {
  defaultEpisode: Episode;
  stream: Stream;
};

export default function StreamPage(props: StreamPageProps) {
  const { episodeId, setEpisodeId } = useWebPlayer();

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.defaultEpisode.id);
    }
  }, []);

  const breadcrumbs = {
    crumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Streams",
        href: "/streams/",
      },
    ],
    currentLocation: props.stream.title,
  };

  const createGuestProfile = (guest: Guest, index: number) => {
    const imageProps = useNextSanityImage(client, guest.image);

    return (
      <div className={styles.profileContainer} key={index}>
        <div className={styles.profileImageContainer}>
          <Image {...imageProps} width={400} height={400} alt={guest.name} />
        </div>
        <div className={styles.profileTextContainer}>
          <h2>{guest.name}</h2>
          <h3>{guest.affiliation}</h3>
          {guest.social && (
            <h3>
              {guest.social.platform}:{" "}
              <a href={guest.social.url}>{guest.social.label}</a>
            </h3>
          )}
          <p>{guest.bio}</p>
        </div>
      </div>
    );
  };

  console.log(props.stream);

  return (
    <>
      <Head>
        <meta name="twitter:title" content={props.stream.title} />
        <meta name="twitter:description" content={props.stream.cta.long} />
        <meta
          name="twitter:image"
          content={props.stream.socialImages.twitter.asset.url}
        ></meta>
        <meta name="description" content={props.stream.cta.long}></meta>
        <meta
          property="og:url"
          content={`https://www.wemartians.com/streams/${props.stream.slug}`}
        />
        <meta property="og:title" content={props.stream.title} />
        <meta property="og:description" content={props.stream.cta.long} />
        <meta
          property="og:image"
          content={props.stream.socialImages.facebook.asset.url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/png" />
        <title>{props.stream.title}</title>
      </Head>
      <Section component="header" background="map">
        <CommonHeader title={props.stream.title} breadcrumbs={breadcrumbs} />
      </Section>
      <main>
        <Section component="section" background="light">
          <EventBanner
            date={props.stream.date}
            videoLink={props.stream.url}
            title={props.stream.cta.short}
            desc={props.stream.cta.long}
          />
          <section>
            <h1>Special Guests</h1>
            {props.stream.guests && props.stream.guests.map(createGuestProfile)}

            <h1 className={styles.marginTop}>Co-Hosts</h1>
            {props.stream.hosts && props.stream.hosts.map(createGuestProfile)}
          </section>
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

export async function getStaticPaths() {
  const query = '*[_type == "stream"] {slug}';
  const params = {};

  const streamsData = await client.fetch(query, params);

  return {
    paths: streamsData.map((stream) => {
      return {
        params: {
          slug: stream.slug.current,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const query = getStreamQuery(slug);
  const params = {};

  const streamData = await client.fetch(query, params);
  const stream = streamData[0];

  let shows = [];
  try {
    shows = await getShows(1);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      stream: { ...stream, slug: stream.slug.current },
      defaultEpisode: shows[0],
    },
  };
}
