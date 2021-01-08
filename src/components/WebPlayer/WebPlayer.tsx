import styles from "./styles/WebPlayer.module.css";
import classNames from "classnames";
import { DisplayStatus } from "./usePlayerDrawer/usePlayerDrawer";

export type WebPlayerProps = {
  id?: string;
  displayStatus: DisplayStatus;
  toggleDrawer: () => void;
};

export default function WebPlayer(props: WebPlayerProps) {
  const generateDrawerCopy = () => {
    if (
      props.displayStatus === DisplayStatus.visible ||
      props.displayStatus === DisplayStatus.slidingDown
    ) {
      return "Hide Player";
    } else {
      return "Show Player";
    }
  };

  const generateClassNameForDrawer = () => {
    switch (props.displayStatus) {
      case DisplayStatus.visible:
        return styles.drawerVisible;
      case DisplayStatus.slidingDown:
        return styles.drawerSlidingDown;
      case DisplayStatus.invisible:
        return styles.drawerInvisible;
      case DisplayStatus.slidingUp:
        return styles.drawerSlidingUp;
    }
  };

  return (
    <div
      className={classNames(styles.container, generateClassNameForDrawer())}
      onAnimationEnd={props.toggleDrawer}
    >
      <div
        className={classNames(styles.containerWidth, styles.toggleContainer)}
      >
        <div
          onClick={props.toggleDrawer}
          className={classNames(styles.toggleButton)}
        >
          {generateDrawerCopy()}
        </div>
      </div>
      <div className={styles.containerWidth}>
        {props.id && (
          <iframe
            height="200px"
            width="100%"
            frameBorder="no"
            scrolling="no"
            seamless
            src={`https://player.simplecast.com/${props.id}?dark=true`}
          ></iframe>
        )}
      </div>
    </div>
  );
}
