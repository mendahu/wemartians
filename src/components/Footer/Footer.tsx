import { footer as footerCopy } from "../../../copy/index.json";
import Image from "next/image";
import styles from "./styles/Footer.module.css";

const twitterBaseUrl = "https://www.twitter.com/";

const generateEmail = (handle: string, domain: string): string => {
  return handle + "@" + domain;
};

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <div>
      <h1>{footerCopy.title}</h1>
      <div className={styles.socialContainer}>
        {footerCopy.twitterAccounts.map((account, index) => {
          return (
            <div key={index} className={styles.socialCard}>
              <div>
                <a target="_blank" href={`${twitterBaseUrl}${account.handle}`}>
                  <Image
                    layout={"fixed"}
                    src={account.profileImage}
                    width={80}
                    height={80}
                    className={styles.socialProfileImage}
                  />
                </a>
              </div>
              <div className={styles.socialHandleContainer}>
                <a target="_blank" href={`${twitterBaseUrl}${account.handle}`}>
                  <h2>{account.name}</h2>
                  <div className={styles.handleContainer}>
                    <Image
                      src="/Twitter_Social_Icon_Rounded_Square_Color.png"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                    <h3>@{account.handle}</h3>
                  </div>
                </a>
                <a
                  href={`mailto:${generateEmail(
                    account.email.handle,
                    account.email.domain
                  )}`}
                >
                  <div className={styles.handleContainer}>
                    <Image
                      src="/emailIcon.svg"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                    <h3>
                      {generateEmail(
                        account.email.handle,
                        account.email.domain
                      )}
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.copyright}>
        {String.fromCharCode(169)} {footerCopy.copyright.year}{" "}
        {footerCopy.copyright.name}
      </p>
    </div>
  );
}
