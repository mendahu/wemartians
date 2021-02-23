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

export type StreamPageProps = {
  title: string;
  ctaTitle: string;
  ctaDesc: string;
  desc: string;
  url: string;
  slug: string;
  date: string;
  imageSquare: string;
  imageTwitter: string;
  imageFacebook: string;
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

  return (
    <>
      <Head>
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.ctaDesc} />
        <meta name="twitter:image" content={props.imageTwitter}></meta>
        <meta name="description" content={props.ctaDesc}></meta>
        <meta
          property="og:url"
          content={`https://www.wemartians.com/streams/${props.slug}`}
        />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.ctaDesc} />
        <meta property="og:image" content={props.imageFacebook} />
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
            <div className={styles.profileContainer}>
              <div className={styles.profileImageContainer}>
                <Image
                  src={"/debarati_400.png"}
                  alt="Debarati Das headshot"
                  height={400}
                  width={400}
                />
              </div>
              <div className={styles.profileTextContainer}>
                <h2>Debarati Das</h2>
                <h3>McGill University</h3>
                <h3>
                  Twitter:{" "}
                  <a href="https://twitter.com/SpaceWicca">@SpaceWicca</a>
                </h3>
                <p>
                  Debarati is a planetary scientist and member of the Curiosity
                  Science Team. Her current research deals with analysis of data
                  from the Laser Induced Breakdown Spectroscopy (LIBS)
                  instrument on the ChemCham suite of the Curiosity Martian
                  rover and study of Martian analogue sites using LIBS.
                </p>
              </div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profileImageContainer}>
                <Image
                  src={"/dave_400.png"}
                  alt="Dave Buecher headshot"
                  height={400}
                  width={400}
                />
              </div>
              <div className={styles.profileTextContainer}>
                <h2>Dave Buecher</h2>
                <h3>Lockheed Martin</h3>
                <p>
                  Dave is the Mars 2020 Aeroshell Program Manager and works at
                  Lockheed Martin which built the aeroshell and heatshield for
                  the Mars 2020 Rover Perseverance.
                </p>
              </div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profileImageContainer}>
                <Image
                  src={"/mike_400.png"}
                  alt="Mike Seibert headshot"
                  height={400}
                  width={400}
                />
              </div>
              <div className={styles.profileTextContainer}>
                <h2>Mike Seibert</h2>
                <h3>Formerly NASA JPL</h3>
                <h3>
                  Twitter:{" "}
                  <a href="https://twitter.com/MikeSeibert">@MikeSeibert</a>
                </h3>
                <p>
                  Mike is an aerospace engineer and expert on planetary surface
                  operations formerly of NASA JPL where he operated the Mars
                  Exploration Rovers Spirit and Opportunity.
                </p>
              </div>
            </div>

            <h1 className={styles.marginTop}>Co-Host</h1>
            <div className={styles.profileContainer}>
              <div className={styles.profileImageContainer}>
                <Image
                  src={"/tanya_400.png"}
                  alt="Tanya Harrison headshot"
                  height={400}
                  width={400}
                />
              </div>
              <div className={styles.profileTextContainer}>
                <h2>Tanya Harrison</h2>
                <h3>Professional Martian</h3>
                <h3>
                  Twitter:{" "}
                  <a href="https://twitter.com/tanyaofmars">@tanyaofmars</a>
                </h3>
                <p>
                  Tanya Harrison is the Director of Science Strategy for the
                  federal arm of Planet Labs and a planetary scientist. She's
                  served on a number of Mars missions including the Mars
                  Reconnaissance Orbiter, the Opportunity Rover, and the
                  Curiosity Rover.
                </p>
              </div>
            </div>
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
  const query = `*[_type == "stream" && slug.current == "${context.params.slug}"] {slug, title, ctaTitle, ctaDesc, desc, url, date}`;
  const params = {};

  const streamData = await client.fetch(query, params);

  const currentStream = streamData[0];

  return {
    props: { ...currentStream, slug: currentStream.slug.current },
  };
}
