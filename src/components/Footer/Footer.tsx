import { footer as footerCopy } from "../../../copy/index.json";
import SocialProfile, { BadgeType } from "./SocialProfile/SocialProfile";

import styles from "./styles/Footer.module.css";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <>
      <h1 className={styles.title}>{footerCopy.title}</h1>
      <div className={styles.socialContainer}>
        {footerCopy.badges.map((account, index) => {
          return (
            <SocialProfile
              key={index}
              type={account.type as BadgeType}
              handle={account.handle}
              domain={account.domain}
            />
          );
        })}
      </div>
      <p className={styles.copyright}>
        {String.fromCharCode(169)} {footerCopy.copyright.year}{" "}
        {footerCopy.copyright.name}
      </p>
    </>
  );
}
