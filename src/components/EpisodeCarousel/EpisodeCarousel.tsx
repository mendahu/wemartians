import styles from './styles/EpisodeCarousel.module.css';

export type Episode = {
  number: number;
  title: string;
  description: string;
};

export type EpisodeCarouselProps = {
  episodes: Episode[];
};

export default function EpisodeCarousel({
  episodes = [],
}: EpisodeCarouselProps) {
  return (
    <div className={styles.episodeCardContainer}>
      {episodes.map((episode, index) => {
        return (
          <div key={index} className={styles.episodeCard}>
            <h2>{episode.title}</h2>
            <p>{episode.description}</p>
          </div>
        );
      })}
    </div>
  );
}
