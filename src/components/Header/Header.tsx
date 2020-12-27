import styles from './styles/Header.module.css';
import classNames from 'classnames';
import Image from 'next/image';

export default function Header(props) {
  return (
    <div className={classNames(styles.container, styles.lightText)}>
      <div className={styles.logoContainer}>
        <Image
          src="/2021_logo-dark.png"
          width={300}
          height={300}
          alt="WeMartians Podcast Logo"
          priority={true}
        />
      </div>
      <div className={styles.headerTextContainer}>
        <h1 className={styles.title}>WeMartians Podcast</h1>
        <h2 className={styles.subtitle}>Exploring the Solar System together</h2>
      </div>
      <div className={styles.subscribeContainer}>
        <ul className={styles.subscriptionList}>
          <li className={styles.subscriptionListItem}>iTunes</li>
          <li className={styles.subscriptionListItem}>Spotify</li>
          <li className={styles.subscriptionListItem}>Google</li>
          <li className={styles.subscriptionListItem}>Stitcher</li>
          <li className={styles.subscriptionListItem}>RSS</li>
        </ul>
      </div>
    </div>
  );
}
