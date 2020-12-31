import styles from './styles/EpisodeCarousel.module.css';
import { episodes as episodesCopy } from '../../../copy/copy.json';
import Button from '../Button/Button';
import Image from 'next/image';
import { formatDistanceToNow, parseISO } from 'date-fns';
import classes from './styles/EpisodeCarousel.module.css';
import classNames from 'classnames';

export type Episode = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  publishDate: string;
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
      <div className={styles.carouselContainer}>
        {episodes.map((episode, index) => {
          const date = parseISO(episode.publishDate);

          return (
            <div key={index} className={styles.episodeCard}>
              <div
                className={classNames(
                  styles.cardContent,
                  styles.albumArtContainer
                )}
              >
                <Image
                  src={episode.image || '/album_Art_2021-01_400.png'}
                  width={510}
                  height={510}
                />
              </div>
              <div
                className={classNames(
                  styles.cardContent,
                  styles.episodeContent
                )}
              >
                <h2 className={styles.mtop}>{episode.title}</h2>
                <p className={styles.mtop}>
                  {episode.description.slice(0, 100) + '...'}
                </p>
                <p className={styles.date}>
                  {formatDistanceToNow(date, { addSuffix: true })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <Button color="dark" label={episodesCopy.more} href="/podcasts/" />
      </div>
    </>
  );
}
