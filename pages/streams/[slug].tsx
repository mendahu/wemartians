import styles from "./styles/StreamPage.module.css";
import Head from "next/head";
import Section from "../../src/components/Section/Section";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import PatreonCallToAction from "../../src/components/PatreonCallToAction/PatreonCallToAction";
import MailingListCallToAction from "../../src/components/MailingListCallToAction/MailingListCallToAction";
import ShopSection from "../../src/components/ShopSection/ShopSection";
import Footer from "../../src/components/Footer/Footer";
import PatreonAndMailingListSection from "../../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";

export type StreamPageProps = {};

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
    currentLocation: "Stream",
  };

  return (
    <>
      <Head>
        <title>Streams</title>
      </Head>
      <Section component="header" background="map">
        <CommonHeader title={"Stream"} breadcrumbs={breadcrumbs} />
      </Section>
      <Section component="main" background="light">
        Hi
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
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
