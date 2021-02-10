import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Section from "../../src/components/Section/Section";
import styles from "./styles/2020live.module.css";
import copy from "./copy/index.json";
import Footer from "../../src/components/Footer/Footer";
import PatreonAndMailingListSection from "../../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";
import ShopSection from "../../src/components/ShopSection/ShopSection";
import EventBanner from "../../src/components/EventBanner/EventBanner";
import Image from "next/image";
import Head from "next/head";

const event = {
  date: new Date(Date.UTC(2021, 1, 18, 19, 45, 0)).toString(),
  videoLink: "https://www.youtube.com/embed/6GlWMIPTguQ",
  title: "Watch Perseverance land with us!",
  desc:
    "Join Jake, co-host Tanya Harrison and special guests to watch the landing live on YouTube!",
};

export type TwentyTwentyliveProps = {};

export default function index(props: TwentyTwentyliveProps) {
  return (
    <>
      <Head>
        <meta
          name="twitter:title"
          content="Mars2020 Perseverance Landing Live with WeMartians"
        />
        <meta
          name="twitter:description"
          content="Join Jake, co-host Tanya Harrison, and special guests for this live Mars event!"
        />
        <meta
          name="twitter:image"
          content="https://www.wemartians.com/landing_promote_1200x608.png"
        ></meta>
        <meta
          name="description"
          content="Join Jake, co-host Tanya Harrison, and special guests for this live Mars event!"
        ></meta>
        <meta property="og:url" content="https://www.wemartians.com/2020live" />
        <meta
          property="og:title"
          content="Mars2020 Perseverance Landing Live with WeMartians"
        />
        <meta
          property="og:description"
          content="Join Jake, co-host Tanya Harrison, and special guests for this live Mars event!"
        />
        <meta
          property="og:image"
          content="https://www.wemartians.com/landing_promote_1200x628.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <Section component="header" background="map">
        <CommonHeader
          title={copy.header.title}
          breadcrumbs={copy.header.breadcrumbs}
        />
      </Section>
      <main>
        <Section
          component="section"
          background="light"
          className={styles.container}
        >
          <EventBanner
            date={event.date}
            videoLink={event.videoLink}
            title={event.title}
            desc={event.desc}
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
                  Tanya Harrison is the Manager of Science Programs at Planet
                  Labs and a planetary scientist. She's served on a number of
                  Mars missions including the Mars Reconnaissance Orbiter, the
                  Opportunity Rover, and the Curiosity Rover.
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
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}