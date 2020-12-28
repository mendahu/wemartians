import styles from './styles/EpisodeCarousel.module.css';
import { episodes as episodesCopy } from '../../../copy/copy.json';
import Button from '../Button/Button';
import Image from 'next/image';

export type Episode = {
  slug: string;
  title: string;
  description: string;
  image?: string;
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
              <Image
                src={episode.image || '/album_Art_2021-01_400.png'}
                width={250}
                height={250}
              />
              <h2>{episode.title}</h2>
              <p>{episode.description}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <Button color="dark" label={episodesCopy.more} />
      </div>
    </>
  );
}
