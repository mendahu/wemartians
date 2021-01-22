import styles from "./styles/SubscribeButton.module.css";
import SubscribeApple from "./SubscribeApple/SubscribeApple";
import SubscribeSpotify from "./SubscribeSpotify/SubscribeSpotify";
import SubscribeGoogle from "./SubscribeGoogle/SubscribeGoogle";
import SubscribeOvercast from "./SubscribeOvercast/SubscribeOvercast";
import SubscribeStitcher from "./SubscribeStitcher/SubscribeStitcher";
import SubscribeRss from "./SubscribeRss/SubscribeRss";
import { SubscribeService } from "../SubscribeButtonList";
import SubscribePocketCasts from "./SubscribePocketCasts/SubscribePocketCasts";
import SubscribePodcastAddict from "./SubscribePodcastAddict/SubscribePodcastAddict";

const generateServiceButton = (service: SubscribeService, size: number) => {
  switch (service) {
    case SubscribeService.APPLE:
      return <SubscribeApple size={size} />;
    case SubscribeService.SPOTIFY:
      return <SubscribeSpotify size={size} />;
    case SubscribeService.GOOGLE:
      return <SubscribeGoogle size={size} />;
    case SubscribeService.OVERCAST:
      return <SubscribeOvercast size={size} />;
    case SubscribeService.ADDICT:
      return <SubscribePodcastAddict size={size} />;
    case SubscribeService.POCKET_CASTS:
      return <SubscribePocketCasts size={size} />;
    case SubscribeService.STITCHER:
      return <SubscribeStitcher size={size} />;
    case SubscribeService.RSS:
      return <SubscribeRss size={size} />;
  }
};

export type SubscribeButtonProps = {
  size: number;
  service: SubscribeService;
  url: string;
};

export default function SubscribeButton(props: SubscribeButtonProps) {
  return (
    <a href={props.url}>{generateServiceButton(props.service, props.size)}</a>
  );
}
