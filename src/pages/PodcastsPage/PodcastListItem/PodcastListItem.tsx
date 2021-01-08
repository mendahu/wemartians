import styles from "./styles/PodcastListItem.module.css";
import Image from "next/image";
import PlayIcon from "../../../components/PlayIcon/PlayIcon";

export type PodcastListItemProps = {
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  handlePlay: () => void;
};

export default function PodcastListItem(props: PodcastListItemProps) {
  return (
    <div className={styles.container}>
      <Image src={props.imageUrl} width={300} height={300} />
      <div>
        <div className={styles.titleContainer}>
          <PlayIcon color="dark" size={50} />
          <h3 className={styles.episodeTitle}>
            <a href={`/podcasts/${props.slug}`}>{props.title}</a>
          </h3>
        </div>
        <p>{props.description}</p>
        <p onClick={props.handlePlay}>Play</p>
      </div>
    </div>
  );
}
