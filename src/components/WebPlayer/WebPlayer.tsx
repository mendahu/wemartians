import styles from './styles/WebPlayer.module.css';
import classNames from 'classnames';
import { useState } from 'react';

export type WebPlayerProps = {
  id: string;
};

export default function WebPlayer(props: WebPlayerProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.containerWidth, styles.toggleContainer)}
      >
        <div
          onClick={() => setVisible(!visible)}
          className={styles.toggleButton}
        >
          {visible ? 'Hide' : 'Show'}
        </div>
      </div>
      <div
        className={classNames(
          styles.containerWidth,
          styles.playerContainer,
          visible ? styles.visible : styles.invisible
        )}
      >
        <iframe
          height="200px"
          width="100%"
          frameBorder="no"
          scrolling="no"
          seamless
          src={`https://player.simplecast.com/${props.id}?dark=true`}
        ></iframe>
      </div>
    </div>
  );
}
