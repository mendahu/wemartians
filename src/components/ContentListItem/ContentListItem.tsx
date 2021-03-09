import styles from "./styles/PodcastListItem.module.css";
import Image from "next/image";
import PlayIcon from "../PlayIcon/PlayIcon";
import { formatDuration } from "../../helpers/formatDuration";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Link from "next/link";
import { SanityImageAssetDocument } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../../lib/cmsClient";

export type ContentListItemProps = {
  path: string;
  title: string;
  imageUrl?: string;
  cmsImage?: SanityImageAssetDocument;
  description: string;
  date: string;
  duration?: number;
  handlePlay?: () => void;
};

export default function ContentListItem(props: ContentListItemProps) {
  const getContentListItemThumbnail = (
    cmsImage?: SanityImageAssetDocument,
    imageUrl?: string
  ) => {
    let imageProps;

    if (cmsImage) {
      imageProps = useNextSanityImage(client, cmsImage);
    } else if (imageUrl) {
      imageProps = {
        src: imageUrl,
      };
    } else {
      return;
    }

    return (
      <Image
        {...imageProps}
        width={500}
        height={500}
        alt={`${props.title} Cover Art`}
      />
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={props.path}>
          <a>{getContentListItemThumbnail(props.cmsImage, props.imageUrl)}</a>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.episodeTitle}>
              <Link href={props.path}>
                <a>{props.title}</a>
              </Link>
            </h2>
            <p className={styles.timeAgo}>{formatTimeAgo(props.date)}</p>
          </div>
          {props.handlePlay && props.duration && (
            <div className={styles.playIconContainer}>
              <PlayIcon color="dark" size={40} onClick={props.handlePlay} />
              <p className={styles.duration}>
                {formatDuration(props.duration)}
              </p>
            </div>
          )}
        </div>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
