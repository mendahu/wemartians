import styles from "./styles/HomeHeader.module.css";
import Image from "next/image";
import { header as headerCopy } from "../../../../../copy/Home/index.json";
import SubScribeButtonList from "../../../../components/SubscribeButtonList/SubscribeButtonList";

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
        <p className={styles.subtitle}>{headerCopy.subtitle}</p>
      </div>

      <SubScribeButtonList size={50} className={styles.subscriptionList} />
    </div>
  );
}
