import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

type Props = {
  date: string;
};

export default function PublishDate({ date }: Props) {
  const utcDate = new Date(date);
  const jstDate = toZonedTime(utcDate, 'Asia/Tokyo');
  return <span>{format(jstDate, 'yyyy/MM/dd')}</span>;
}
