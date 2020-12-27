import styles from './styles/Header.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import { header as headerCopy } from '../../../copy/copy.json';
import Button from '../Button/Button';

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
        <h1 className={styles.title}>{headerCopy.title}</h1>
        <h2 className={styles.subtitle}>{headerCopy.subtitle}</h2>
      </div>
      <div className={styles.subscribeContainer}>
        <ul className={styles.subscriptionList}>
          {headerCopy.subscriptions.map((sub, index) => (
            <li key={index}>
              <Button label={sub.label} color="light" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
