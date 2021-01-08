import styles from "./styles/PodcastListItem.module.css";
import Image from "next/image";

export type PodcastListItemProps = {
  slug: string;
  title: string;
  imageUrl: string;
  handlePlay: () => void;
};

export default function PodcastListItem(props: PodcastListItemProps) {
  return (
    <div className={styles.container}>
      <Image src={props.imageUrl} width={250} height={250} />
      <div>
        <a href={`/podcasts/${props.slug}`}>{props.title}</a>
        <p onClick={props.handlePlay}>Play</p>
      </div>
    </div>
  );
}
