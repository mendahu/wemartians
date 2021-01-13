import styles from "./styles/PodcastListItem.module.css";
import Image from "next/image";
import PlayIcon from "../../../components/PlayIcon/PlayIcon";
import { formatDuration } from "../../../helpers/formatDuration";
import { formatTimeAgo } from "../../../helpers/formatTimeAgo";
import Link from "next/link";

export type PodcastListItemProps = {
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: number;
  publishDate: string;
  handlePlay: () => void;
};

export default function PodcastListItem(props: PodcastListItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`/podcasts/${props.slug}`}>
          <a>
            <Image src={props.imageUrl} width={500} height={500} />
          </a>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.episodeTitle}>
              <Link href={`/podcasts/${props.slug}`}>
                <a>{props.title}</a>
              </Link>
            </h2>
            <p className={styles.timeAgo}>{formatTimeAgo(props.publishDate)}</p>
          </div>
          <div className={styles.playIconContainer}>
            <PlayIcon color="dark" size={40} onClick={props.handlePlay} />
            <p className={styles.duration}>{formatDuration(props.duration)}</p>
          </div>
        </div>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
