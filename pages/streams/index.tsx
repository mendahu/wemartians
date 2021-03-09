import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import client from "../../lib/cmsClient";
import { Episode, Stream } from "../../src/types/common";
import { streamsQuery } from "../../src/queries/streams/streams";
import ContentListItem from "../../src/components/ContentListItem/ContentListItem";
import styles from "../../src/pages/StreamsPage/styles/StreamsPage.module.css";

export type StreamsPageProps = {
  defaultEpisode: Episode;
  streams: Stream[];
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

  console.log(props.streams);

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.defaultEpisode.id);
    }
  }, []);

  const today = new Date();

  const upcomingStreams: Stream[] = [];
  const pastStreams: Stream[] = [];

  props.streams.forEach((stream) => {
    const streamDate = new Date(stream.date);
    if (streamDate > today) {
      upcomingStreams.push(stream);
    } else {
      pastStreams.push(stream);
    }
  });

  console.log(upcomingStreams);
  console.log(pastStreams);

  const generateContentListItems = (stream: Stream) => {
    return (
      <ContentListItem
        key={stream.slug}
        path={`/streams/${stream.slug}`}
        title={stream.title}
        cmsImage={stream.socialImages.square}
        description={stream.cta.long}
        date={stream.date}
      />
    );
  };

  return (
    <>
      <Section component="header" background="map">
        <CommonHeader title={"Streams"} breadcrumbs={breadcrumbs} />
      </Section>
      <main>
        <Section component="section" background="light">
          <div className={styles.streamListContainer}>
            <h1>Upcoming Streams</h1>
            {upcomingStreams.length ? (
              upcomingStreams.map(generateContentListItems)
            ) : (
              <p>No upcoming streams.</p>
            )}
          </div>
          <div className={styles.streamListContainer}>
            <h1>Past Streams</h1>
            {pastStreams.length ? (
              pastStreams.map(generateContentListItems)
            ) : (
              <p>No past streams.</p>
            )}
          </div>
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const query = streamsQuery;
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
      streams: streamData.map((stream) => ({
        ...stream,
        slug: stream.slug.current,
      })),
    },
  };
}
