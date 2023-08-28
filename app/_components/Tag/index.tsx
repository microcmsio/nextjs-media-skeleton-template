import { Tag } from '@/_libs/microcms';
import Link from 'next/link';

type Props = {
  tag: Tag;
};

export default function Tag({ tag }: Props) {
  return <Link href={`/tag/${tag.id}`}>{tag.name}</Link>;
}
