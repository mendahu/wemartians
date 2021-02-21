import styles from "./styles/StreamPage.module.css";
import Head from "next/head";
import Section from "../../src/components/Section/Section";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import ShopSection from "../../src/components/ShopSection/ShopSection";
import Footer from "../../src/components/Footer/Footer";
import PatreonAndMailingListSection from "../../src/components/PatreonAndMailingListSection/PatreonAndMailingListSection";
import client from "../../lib/cmsClient";

export type StreamPageProps = {
  title: string;
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
        <title>Streams</title>
      </Head>
      <Section component="header" background="map">
        <CommonHeader title={"Stream"} breadcrumbs={breadcrumbs} />
      </Section>
      <Section component="main" background="light">
        {props.title}
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
  const query = '*[_type == "stream"] {title}';
  const params = {};

  const streamData = await client.fetch(query, params);

  return {
    props: {
      slug: context.params.slug,
      title: streamData[0].title,
    },
  };
}
