import styles from "./styles/HomeHeader.module.css";
import Image from "next/image";
import { header as headerCopy } from "../../../../../copy/Home/index.json";
import SubscribeButtonList from "../../../../components/SubscribeButtonList/SubscribeButtonList";
import Nav from "../../../../components/Nav/Nav";
import { useState } from "react";

export default function Header(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container}>
      <Nav className={styles.nav} />
      <div className={styles.logoContainer}>
        <Image
          src="/2021_logo-dark_280.png"
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
      <div className={styles.subscriptionList}>
        <div
          className={styles.subscribeDropDownTextContainer}
          onClick={() => setIsVisible(!isVisible)}
        >
          <h2>Subscribe</h2>
          <p>
            {isVisible ? String.fromCharCode(9650) : String.fromCharCode(9660)}
          </p>
        </div>
        <div className={isVisible ? styles.visible : styles.invisible}>
          <SubscribeButtonList
            size={40}
            justifyContent="center"
            className={styles.buttonList}
          />
        </div>
      </div>
    </div>
  );
}
