export const formatDuration = (seconds: number): string => {
  let duration = seconds;

  const secs = duration % 60;

  duration = (duration - secs) / 60;

  const mins = duration % 60;

  duration = (duration - mins) / 60;

  const hrs = duration % 24;

  let returnDuration = "";

  if (hrs) {
    returnDuration = `${hrs}:`;
  }

  if (hrs || mins) {
    returnDuration += `0${mins}:`.slice(-3);
  }

  returnDuration += `0${secs}`.slice(-2);

  return returnDuration;
};
