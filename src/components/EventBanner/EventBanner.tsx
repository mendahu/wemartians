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
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <div className={styles.dateContainer}>
          <p>
            <span className={styles.timeEmoji}>&#128197;</span>
            <span>{format(new Date(props.date), "MMM do, YYY")}</span>
          </p>
          <p>
            <span className={styles.timeEmoji}>&#x23F0;</span>
            <span>{format(new Date(props.date), "h:m aa ( z )")}</span>
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
