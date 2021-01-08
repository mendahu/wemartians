import { format, parseISO } from "date-fns";

export const formatPublishDate = (date: string) => {
  const dateObject = parseISO(date);

  return format(dateObject, "MMMM do, Y");
};
