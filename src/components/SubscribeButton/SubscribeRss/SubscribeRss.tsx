import styles from "./styles/SubscribeRss.module.css";

export type SubscribeRssProps = {
  size: number;
};

export default function SubscribeRss(props: SubscribeRssProps) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 245 100"
      height={props.size}
    >
      <rect
        className={styles["cls-1"]}
        width="243.53"
        height="100"
        rx="19.21"
      />
      <path
        className={styles["cls-2"]}
        d="M88.94,81.67H80.05A54.44,54.44,0,0,0,25.6,27.23v-8.9A63.34,63.34,0,0,1,88.94,81.67Z"
      />
      <path
        className={styles["cls-2"]}
        d="M71.57,81.67H61.88A36.28,36.28,0,0,0,25.6,45.39V35.7A46,46,0,0,1,71.57,81.67Z"
      />
      <circle
        className={styles["cls-2"]}
        cx="37.34"
        cy="69.94"
        r="11.73"
        transform="translate(-38.52 46.89) rotate(-45)"
      />
      <text className={styles["cls-3"]} transform="translate(116.69 69.28)">
        RSS
      </text>
    </svg>
  );
}
