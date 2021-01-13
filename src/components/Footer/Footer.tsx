import { footer as footerCopy } from "../../../copy/index.json";
import SocialProfile from "./SocialProfile/SocialProfile";

import styles from "./styles/Footer.module.css";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <>
      <h1 className={styles.title}>{footerCopy.title}</h1>
      <div className={styles.socialContainer}>
        {footerCopy.twitterAccounts.map((account, index) => {
          return (
            <SocialProfile
              key={index}
              name={account.name}
              handle={account.handle}
              email={account.email}
              profileImage={account.profileImage}
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
