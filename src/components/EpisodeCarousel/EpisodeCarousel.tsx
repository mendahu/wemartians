import styles from './styles/EpisodeCarousel.module.css';
import { episodes as episodesCopy } from '../../../copy/copy.json';
import Button from '../Button/Button';
import Image from 'next/image';
import { formatDistanceToNow, parseISO } from 'date-fns';
import classNames from 'classnames';

export type Episode = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  publishDate: string;
  id: string;
};

export type EpisodeCarouselProps = {
  episodes: Episode[];
  handleClick: (epId: string) => void;
};

export default function EpisodeCarousel({
  episodes = [],
  handleClick,
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
                  width={515}
                  height={515}
                />
              </div>
              <div
                className={classNames(
                  styles.cardContent,
                  styles.episodeContent
                )}
              >
                <h2 className={styles.mtop}>{episode.title}</h2>
                <p className={classNames(styles.mtop, styles.description)}>
                  {episode.description.slice(0, 120) + '...'}
                </p>

                <div className={styles.footerContainer}>
                  <Button
                    onClick={() => handleClick(episode.id)}
                    color="dark"
                    label={String.fromCharCode(9658) + ' Play'}
                    size="sm"
                  />
                  <p className={styles.date}>
                    {formatDistanceToNow(date, { addSuffix: true })}
                  </p>
                </div>
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
