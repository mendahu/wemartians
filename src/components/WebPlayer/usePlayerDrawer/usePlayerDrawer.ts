import { useState } from 'react';

export enum DisplayStatus {
  visible = 'visible',
  invisible = 'invisible',
  slidingUp = 'slidingUp',
  slidingDown = 'slidingDown',
}

export default function usePlayerDrawer(epId: string) {
  const [episodeId, setEpisodeId] = useState<string>(epId);
  const [displayStatus, setDisplayStatus] = useState<DisplayStatus>(
    DisplayStatus.invisible
  );

  const toggleDrawer = () => {
    switch (displayStatus) {
      case DisplayStatus.visible:
        setDisplayStatus((prev) => DisplayStatus.slidingDown);
        break;
      case DisplayStatus.slidingDown:
        setDisplayStatus((prev) => DisplayStatus.invisible);
        break;
      case DisplayStatus.invisible:
        setDisplayStatus((prev) => DisplayStatus.slidingUp);
        break;
      case DisplayStatus.slidingUp:
        setDisplayStatus((prev) => DisplayStatus.visible);
        break;
    }
  };

  return {
    episodeId,
    setEpisodeId,
    displayStatus,
    toggleDrawer,
  };
}
