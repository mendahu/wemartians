import styles from "./styles/SocialProfile.module.css";
import Image from "next/image";
import { generateEmail } from "../../../helpers/generateEmail";

const twitterBaseUrl = "https://www.twitter.com/";

export type BadgeType = "twitter" | "email";

export type SocialProfileProps = {
  type: BadgeType;
  handle: string;
  domain: string;
};

const generateImageProps = (type: BadgeType) => {
  switch (type) {
    case "twitter":
      return {
        src: "/Twitter_Social_Icon_Rounded_Square_Color.png",
        alt: "Twitter Logo",
      };
    case "email":
      return {
        src: "/emailIcon.svg",
        alt: "Email Icon",
      };
  }
};

const generateBadgeLink = (props: SocialProfileProps) => {
  switch (props.type) {
    case "twitter":
      return twitterBaseUrl + props.domain;
    case "email":
      return "mailto:" + generateEmail(props.handle, props.domain);
  }
};

export default function SocialProfile({
  type,
  domain,
  handle = "",
}: SocialProfileProps) {
  const { src, alt } = generateImageProps(type);
  const href = generateBadgeLink({ type, domain, handle });

  return (
    <a href={href} rel="noopener" className={styles.container}>
      <Image src={src} width={50} height={50} layout="fixed" alt={alt} />
      <p>{generateEmail(handle, domain)}</p>
    </a>
  );
}
