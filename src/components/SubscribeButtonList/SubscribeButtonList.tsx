import styles from "./styles/SubscribeButtonList.module.css";
import SubscribeButton from "./SubscribeButton/SubscribeButton";
import classNames from "classnames";

export enum SubscribeService {
  APPLE = "apple",
  SPOTIFY = "spotify",
  GOOGLE = "google",
  OVERCAST = "overcast",
  ADDICT = "addict",
  POCKET_CASTS = "pocketCasts",
  CASTBOX = "castbox",
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
  SubscribeService.OVERCAST,
  SubscribeService.ADDICT,
  SubscribeService.POCKET_CASTS,
  SubscribeService.CASTBOX,
  SubscribeService.STITCHER,
  SubscribeService.RSS,
];

const urls = {
  [SubscribeService.APPLE]:
    "https://podcasts.apple.com/us/podcast/wemartians-podcast/id1097402685?itsct=podcast_box&itscg=30200",
  [SubscribeService.SPOTIFY]:
    "https://open.spotify.com/show/31p0wkYFE2pdbaXnfhasoL",
  [SubscribeService.GOOGLE]:
    "https://podcasts.google.com/feed/aHR0cHM6Ly93ZW1hcnRpYW5zLmNvbS9mZWVkL3BvZGNhc3Qv",
  [SubscribeService.OVERCAST]: "https://overcast.fm/itunes1097402685",
  [SubscribeService.ADDICT]:
    "https://podcastaddict.page.link/?link=https://podcastaddict.com/podcast/2079412&apn=com.bambuna.podcastaddict&amv=20210",
  [SubscribeService.POCKET_CASTS]: "https://pca.st/CFvR",
  [SubscribeService.CASTBOX]:
    "https://castbox.fm/channel/WeMartians-Podcast-id2839890",
  [SubscribeService.STITCHER]:
    "https://www.stitcher.com/podcast/wemartians-podcast",
  [SubscribeService.RSS]: "https://www.wemartians.com/feed/podcast",
};

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
            <SubscribeButton
              size={size}
              service={service}
              url={urls[service]}
            />
          </li>
        );
      })}
    </ul>
  );
}
