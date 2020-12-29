import { getShow, getShows } from '../../lib/getShows';
import styles from './styles/Podcast.module.css';

export default function Podcast({ episode }) {
  return (
    <div>
      {episode.id} - {episode.slug}
    </div>
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
  const shows = await getShows(3);

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
