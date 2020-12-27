import styles from './styles/EpisodeCarousel.module.css';
import { episodes as episodesCopy } from '../../../copy/copy.json';

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
    <>
      <h1 className={styles.title}>{episodesCopy.title}</h1>
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
      <div className={styles.buttonContainer}>
        <button className={styles.button}>{episodesCopy.more}</button>
      </div>
    </>
  );
}
