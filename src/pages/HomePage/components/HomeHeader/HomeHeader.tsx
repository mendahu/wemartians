import styles from "./styles/HomeHeader.module.css";
import Image from "next/image";
import { header as headerCopy } from "../../../../../copy/Home/index.json";
import Button from "../../../../components/Button/Button";
import SubscribeApple from "../../../../components/SubscribeApple/SubscribeApple";
import SubscribeSpotify from "../../../../components/SubscribeSpotify/SubscribeSpotify";
import SubscribeGoogle from "../../../../components/SubscribeGoogle/SubscribeGoogle";
import SubscribeStitcher from "../../../../components/SubscribeStitcher/SubscribeStitcher";

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
          <SubscribeApple
            size={50}
            url={
              "https://podcasts.apple.com/us/podcast/wemartians-podcast/id1097402685?itsct=podcast_box&itscg=30200"
            }
          />
          <SubscribeSpotify
            size={50}
            url={"https://open.spotify.com/show/31p0wkYFE2pdbaXnfhasoL"}
          />
          <SubscribeGoogle
            size={50}
            url={
              "https://podcasts.google.com/feed/aHR0cHM6Ly93ZW1hcnRpYW5zLmNvbS9mZWVkL3BvZGNhc3Qv"
            }
          />
          <SubscribeStitcher
            size={50}
            url={"https://www.stitcher.com/podcast/wemartians-podcast"}
          />
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
