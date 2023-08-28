import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

type Props = {
  date: string;
};

export default function PublishDate({ date }: Props) {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return <span>{format(jstDate, 'yyyy/MM/dd')}</span>;
}
