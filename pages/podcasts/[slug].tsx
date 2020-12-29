import styles from './styles/Podcast.module.css';

export type Episode = {
  slug: string;
  id: string;
};

export type PodcastProps = {
  episodes: Episode[];
};

export default function Podcast(props: PodcastProps) {
  return (
    <div>
      <ul>
        {props.episodes.map((episode) => {
          return (
            <li>
              {episode.id} - {episode.slug}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      episodes: [{ slug: params.slug, id: '1' }],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'slug' } }],
    fallback: false,
  };
}
