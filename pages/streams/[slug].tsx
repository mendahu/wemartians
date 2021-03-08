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
import { SanityImageAssetDocument } from "@sanity/client";
import groq from "groq";

export type Guest = {
  name: string;
  affiliation: string;
  social: {
    platform: string;
    label: string;
    url: string;
  };
  bio: string;
  image: SanityImageAssetDocument;
};

export type StreamPageProps = {
  title: string;
  ctaTitle: string;
  ctaDesc: string;
  desc: string;
  url: string;
  slug: string;
  date: string;
  socialImages: {
    square: SanityImageAssetDocument;
    twitter: SanityImageAssetDocument;
    facebook: SanityImageAssetDocument;
  };
  hosts: Guest[];
  guests: Guest[];
};

export default function StreamPage(props: StreamPageProps) {
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
    currentLocation: props.title,
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

  return (
    <>
      <Head>
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.ctaDesc} />
        <meta
          name="twitter:image"
          content={props.socialImages.twitter.asset.url}
        ></meta>
        <meta name="description" content={props.ctaDesc}></meta>
        <meta
          property="og:url"
          content={`https://www.wemartians.com/streams/${props.slug}`}
        />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.ctaDesc} />
        <meta
          property="og:image"
          content={props.socialImages.facebook.asset.url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/png" />
        <title>{props.title}</title>
      </Head>
      <Section component="header" background="map">
        <CommonHeader title={"Stream"} breadcrumbs={breadcrumbs} />
      </Section>
      <main>
        <Section
          component="section"
          background="light"
          className={styles.container}
        >
          <EventBanner
            date={props.date}
            videoLink={props.url}
            title={props.title}
            desc={props.desc}
          />
          <section>
            <h1>Special Guests</h1>
            {props.guests.map(createGuestProfile)}

            <h1 className={styles.marginTop}>Co-Hosts</h1>
            {props.hosts.map(createGuestProfile)}
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
  const query = groq`*[_type == "stream" && slug.current == "${slug}"] {slug, title, ctaTitle, ctaDesc, desc, url, date, "hosts": hosts[]->{name, affiliation, bio, social, image}, "guests": guests[]->{name, affiliation, bio, social, image}, socialImages}`;
  const params = {};

  const streamData = await client.fetch(query, params);

  const currentStream = streamData[0];
  console.log(currentStream);

  return {
    props: { ...currentStream, slug: currentStream.slug.current },
  };
}
