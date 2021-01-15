import styles from "./styles/SocialProfile.module.css";
import Image from "next/image";
import { generateEmail } from "../../../helpers/generateEmail";
import classNames from "classnames";

const twitterBaseUrl = "https://www.twitter.com/";

export type SocialProfileProps = {
  name: string;
  handle: string;
  email: {
    handle: string;
    domain: string;
  };
  profileImage: string;
};

export default function SocialProfile(props: SocialProfileProps) {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.imageContainer, styles.containerSection)}
      >
        <a target="_blank" href={`${twitterBaseUrl}${props.handle}`}>
          <Image
            layout={"fixed"}
            src={props.profileImage}
            width={80}
            height={80}
            className={styles.socialProfileImage}
          />
        </a>
      </div>
      <div
        className={classNames(styles.textContainer, styles.containerSection)}
      >
        <h2 className={styles.handle}>{props.name}</h2>
        <div>
          <a target="_blank" href={`${twitterBaseUrl}${props.handle}`}>
            <div className={styles.handleContainer}>
              <Image
                src="/Twitter_Social_Icon_Rounded_Square_Color.png"
                width={20}
                height={20}
                layout="fixed"
              />

              <span className={styles.profileText}>@{props.handle}</span>
            </div>
          </a>
        </div>
        <div>
          <a
            href={`mailto:${generateEmail(
              props.email.handle,
              props.email.domain
            )}`}
          >
            <div className={styles.handleContainer}>
              <Image
                src="/emailIcon.svg"
                width={22}
                height={22}
                layout="fixed"
              />

              <span className={styles.profileText}>
                {generateEmail(props.email.handle, props.email.domain)}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
