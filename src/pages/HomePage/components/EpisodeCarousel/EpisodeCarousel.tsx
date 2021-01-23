import styles from "./styles/EpisodeCarousel.module.css";
import { episodes as episodesCopy } from "../../../../../copy/Home/index.json";
import Button from "../../../../components/Button/Button";
import { formatTimeAgo } from "../../../../helpers/formatTimeAgo";
import classNames from "classnames";
import { Episode } from "../../../../types/common";
import Link from "next/link";
import Image from "next/image";
import PlayIcon from "../../../../components/PlayIcon/PlayIcon";

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
          return (
            <div key={index} className={styles.episodeCard}>
              <div
                className={classNames(
                  styles.cardContent,
                  styles.albumArtContainer
                )}
              >
                <Link href={`/podcasts/${episode.slug}`}>
                  <a>
                    <Image
                      src={episode.image || "/album_Art_2021-01_400.png"}
                      width={515}
                      height={515}
                      alt={`${episode.title} Cover Art`}
                    />
                  </a>
                </Link>
              </div>
              <div
                className={classNames(
                  styles.cardContent,
                  styles.episodeContent
                )}
              >
                <Link href={`/podcasts/${episode.slug}`}>
                  <a>
                    <h2 className={styles.mtop}>{episode.title}</h2>
                  </a>
                </Link>
                <p className={classNames(styles.mtop, styles.description)}>
                  {episode.description.slice(0, 120) + "..."}
                </p>

                <div className={styles.footerContainer}>
                  <PlayIcon
                    color="dark"
                    size={60}
                    onClick={() => handleClick(episode.id)}
                  />

                  <p className={styles.date}>
                    {formatTimeAgo(episode.publishDate)}
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
