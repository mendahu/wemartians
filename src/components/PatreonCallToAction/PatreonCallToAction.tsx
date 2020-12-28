import styles from './styles/PatreonCallToAction.module.css';
import Image from 'next/image';
import { patreon as patreonCopy } from '../../../copy/copy.json';

export type PatreonCallToActionTypes = {};

export default function PatreonCallToAction(props: PatreonCallToActionTypes) {
  return (
    <div>
      <h1 className={styles.title}>{patreonCopy.title}</h1>
      <p className={styles.mtop}>{patreonCopy.description}</p>
      <ul className={styles.mtop}>
        {patreonCopy.benefits.map((benefit, index) => {
          return (
            <li key={index} className={styles.bullet}>
              {benefit}
            </li>
          );
        })}
      </ul>
      <div className={styles.patreonCTAContainer}>
        <a
          href={patreonCopy.cta.href}
          target="_blank"
          className={styles.patreonCTAButton}
        >
          <Image
            src="/Digital-Patreon-Logo_White.png"
            width={26}
            height={26}
            layout="fixed"
          />
          <h2 className={styles.patreonCTA}>{patreonCopy.cta.label}</h2>
        </a>
      </div>
    </div>
  );
}
