import { Article } from '@/_libs/microcms';

type Props = {
  articles: Article[];
};

export default function Ranking({ articles }: Props) {
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}
