import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const jstDate = toZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'd MMMM, yyyy');
};
