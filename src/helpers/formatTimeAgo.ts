import { formatDistanceToNow, parseISO } from "date-fns";

export const formatTimeAgo = (date: string): string => {
  const formattedDate = parseISO(date);
  return formatDistanceToNow(formattedDate, { addSuffix: true });
};
