import styles from "./styles/SubScribeButtonList.module.css";
import SubscribeButton from "./SubscribeButton/SubscribeButton";
import classNames from "classnames";

export enum SubscribeService {
  APPLE = "apple",
  SPOTIFY = "spotify",
  GOOGLE = "google",
  STITCHER = "stitcher",
  RSS = "rss",
}

export type SubscribeButtonListProps = {
  className?: string;
  size: number;
  justifyContent?: "center" | "flex-start";
};

export const subscribeServices: SubscribeService[] = [
  SubscribeService.APPLE,
  SubscribeService.SPOTIFY,
  SubscribeService.GOOGLE,
  SubscribeService.STITCHER,
  SubscribeService.RSS,
];

export default function SubscribeButtonList({
  size = 50,
  className,
  justifyContent = "flex-start",
}: SubscribeButtonListProps) {
  return (
    <ul
      className={classNames(
        className,
        styles.subscriptionList,
        styles[justifyContent]
      )}
    >
      {subscribeServices.map((service) => {
        return (
          <li key={service}>
            <SubscribeButton size={size} service={service} />
          </li>
        );
      })}
    </ul>
  );
}
