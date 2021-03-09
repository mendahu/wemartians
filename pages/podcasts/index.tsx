import { getShows } from "../../lib/getShows";
import Footer from "../../src/components/Footer/Footer";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/PodcastsPage/styles/PodcastsPage.module.css";
import podcastsCopy from "../../copy/Podcasts/index.json";
import ContentListItem from "../../src/components/ContentListItem/ContentListItem";
import useSearch from "../../src/pages/PodcastsPage/useSearch/useSearch";

import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import { useWebPlayer } from "../../src/contexts/WebPlayerContext";
import { useEffect } from "react";
import Button from "../../src/components/Button/Button";
import Router, { useRouter } from "next/router";
import queryString from "query-string";

export default function PodcastsPage(props) {
  const router = useRouter();
  const path = router.asPath;
  const { query } = queryString.parseUrl(path);

  const { episodeId, setEpisodeId, handleEpisodeClick } = useWebPlayer();
  const { results, searchTerm, setSearchTerm } = useSearch(props.episodes);

  useEffect(() => {
    if (!episodeId) {
      setEpisodeId(props.episodes[0].id);
    }
  }, []);

  useEffect(() => {
    if (query && query.q) {
      const queryString = typeof query.q === "string" ? query.q : query.q[0];
      setSearchTerm(queryString);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      Router.replace({
        pathname: "/podcasts",
        query: {
          q: searchTerm,
        },
      });
    }
  }, [searchTerm]);

  return (
    <>
      <Section component="header" background="map">
        <CommonHeader
          title={podcastsCopy.header.title}
          breadcrumbs={podcastsCopy.header.breadcrumbs}
        />
      </Section>
      <main>
        <Section component="section" background="light">
          <div className={styles.inputContainer}>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              name="search"
              placeholder={"Search Episodes"}
              className={styles.formInput}
            />
            <Button
              color="dark"
              label="Clear"
              onClick={() => setSearchTerm("")}
            />
          </div>
          {results.map((episode, index) => {
            return (
              <ContentListItem
                key={index}
                path={`/podcasts/${episode.slug}`}
                title={episode.title}
                imageUrl={episode.image}
                description={episode.description.slice(0, 160) + "..."}
                duration={episode.duration}
                date={episode.publishDate}
                handlePlay={() => handleEpisodeClick(episode.id)}
              />
            );
          })}
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  let shows = [];
  try {
    shows = await getShows();
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      episodes: shows,
    },
  };
}
