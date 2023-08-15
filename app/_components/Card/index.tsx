import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/_libs/microcms';
import PublishDate from '@/_components/PublishDate';

type Props = {
  article: Article;
};

export default function Card({ article }: Props) {
  return (
    <Link href={`/articles/${article.id}`}>
      <Image
        src={article.thumbnail.url}
        alt=""
        width={article.thumbnail.width}
        height={article.thumbnail.height}
      />
      <dl>
        <dt>{article.title}</dt>
        <dd>
          <PublishDate date={article.publishedAt || article.createdAt} />
        </dd>
        <dd>{article.description}</dd>
      </dl>
    </Link>
  );
}
