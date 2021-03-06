import styles from "./styles/PatreonCallToAction.module.css";
import Image from "next/image";
import { patreon as patreonCopy } from "../../../copy/Home/index.json";

export type PatreonCallToActionProps = {};

export default function PatreonCallToAction(props: PatreonCallToActionProps) {
  return (
    <>
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
          rel="noopener"
        >
          <Image
            src="/Digital-Patreon-Logo_White.png"
            width={26}
            height={26}
            layout="fixed"
            alt="Patreon Logo"
          />
          <h2 className={styles.patreonCTA}>{patreonCopy.cta.label}</h2>
        </a>
      </div>
    </>
  );
}
