import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import client from "../../lib/cmsClient";
import { Episode, Stream } from "../../src/types/common";
import { getStreamsQuery } from "../../src/queries/streams/streams";

export type StreamsPageProps = {
  defaultEpisode: Episode;
  streams: Stream;
};

const breadcrumbs = {
  crumbs: [
    {
      label: "Home",
      href: "/",
    },
  ],
  currentLocation: "Streams",
};

export default function StreamsPage(props: StreamsPageProps) {
  const { episodeId, setEpisodeId } = useWebPlayer();

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.defaultEpisode.id);
    }
  }, []);

  return (
    <>
      <Section component="header" background="map">
        <CommonHeader title={"Streams"} breadcrumbs={breadcrumbs} />
      </Section>
      <main>
        <Section component="section" background="light">
          What's up
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const query = getStreamsQuery();
  const params = {};

  const streamData = await client.fetch(query, params);

  let shows = [];
  try {
    shows = await getShows(1);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      defaultEpisode: shows[0],
      streams: streamData,
    },
  };
}
