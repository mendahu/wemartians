import { format } from "date-fns";
import styles from "./styles/EventBanner.module.css";

export type EventBannerProps = {
  date: string;
  videoLink: string;
  title: string;
  desc: string;
};

export default function EventBanner(props: EventBannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <div className={styles.dateContainer}>
          <p className={styles.date}>
            {format(new Date(props.date), "MMM do, YYY - h:m aa zzzz")}
          </p>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          width="100%"
          src={props.videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
