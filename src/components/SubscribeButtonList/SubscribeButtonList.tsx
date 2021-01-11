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
};

export const subscribeServices: SubscribeService[] = [
  SubscribeService.APPLE,
  SubscribeService.SPOTIFY,
  SubscribeService.GOOGLE,
  SubscribeService.STITCHER,
  SubscribeService.RSS,
];

export default function SubScribeButtonList({
  size = 50,
  className,
}: SubscribeButtonListProps) {
  return (
    <ul className={classNames(className, styles.subscriptionList)}>
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
