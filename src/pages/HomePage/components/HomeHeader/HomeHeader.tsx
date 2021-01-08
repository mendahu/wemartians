import styles from "./styles/HomeHeader.module.css";
import Image from "next/image";
import { header as headerCopy } from "../../../../../copy/Home/index.json";
import Button from "../../../../components/Button/Button";

export default function Header(props) {
  return (
    <div className={styles.container}>
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
        <h1 className={styles.title}>
          <span className={styles.accentTitle}>{headerCopy.titleA}</span>
          {headerCopy.titleB}
        </h1>
        <h2 className={styles.subtitle}>{headerCopy.subtitle}</h2>
      </div>
      <div className={styles.subscribeContainer}>
        <ul className={styles.subscriptionList}>
          {headerCopy.subscriptions.map((sub, index) => (
            <li key={index} className={styles.button}>
              <Button label={sub.label} color="light" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
