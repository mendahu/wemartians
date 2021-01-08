import styles from "./styles/PlayIcon.module.css";
import classNames from "classnames";

export type PlayIconProps = {
  color: "orange" | "dark" | "light";
  size: number;
};

export default function PlayIcon(props: PlayIconProps) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      height={props.size}
      width={props.size}
    >
      <defs></defs>
      <circle
        className={classNames(styles["cls-1"], styles[`${props.color}Stroke`])}
        cx="250"
        cy="250"
        r="222.45"
      />
      <polygon
        className={classNames(styles["cls-2"], styles[`${props.color}Fill`])}
        points="396.03 250 177.66 123.92 177.66 376.07 396.03 250"
      />
    </svg>
  );
}
