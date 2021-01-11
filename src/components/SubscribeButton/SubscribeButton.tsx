import styles from "./styles/SubscribeButton.module.css";
import SubscribeApple from "./SubscribeApple/SubscribeApple";
import SubscribeSpotify from "./SubscribeSpotify/SubscribeSpotify";
import SubscribeGoogle from "./SubscribeGoogle/SubscribeGoogle";
import SubscribeStitcher from "./SubscribeStitcher/SubscribeStitcher";
import SubscribeRss from "./SubscribeRss/SubscribeRss";

export enum SubscribeService {
  APPLE = "apple",
  SPOTIFY = "spotify",
  GOOGLE = "google",
  STITCHER = "stitcher",
  RSS = "rss",
}

const urls = {
  [SubscribeService.APPLE]:
    "https://podcasts.apple.com/us/podcast/wemartians-podcast/id1097402685?itsct=podcast_box&itscg=30200",
  [SubscribeService.SPOTIFY]:
    "https://open.spotify.com/show/31p0wkYFE2pdbaXnfhasoL",
  [SubscribeService.GOOGLE]:
    "https://podcasts.google.com/feed/aHR0cHM6Ly93ZW1hcnRpYW5zLmNvbS9mZWVkL3BvZGNhc3Qv",
  [SubscribeService.STITCHER]:
    "https://www.stitcher.com/podcast/wemartians-podcast",
  [SubscribeService.RSS]: "https://www.wemartians.com/feed/podcast",
};

export type SubscribeButtonProps = {
  size: number;
  service: SubscribeService;
};

export default function SubscribeButton(props: SubscribeButtonProps) {
  const generateServiceButton = (service: SubscribeService) => {
    switch (service) {
      case SubscribeService.APPLE:
        return <SubscribeApple size={props.size} />;
      case SubscribeService.SPOTIFY:
        return <SubscribeSpotify size={props.size} />;
      case SubscribeService.GOOGLE:
        return <SubscribeGoogle size={props.size} />;
      case SubscribeService.STITCHER:
        return <SubscribeStitcher size={props.size} />;
      case SubscribeService.RSS:
        return <SubscribeRss size={props.size} />;
    }
  };

  return (
    <a href={urls[props.service]}>{generateServiceButton(props.service)}</a>
  );
}
