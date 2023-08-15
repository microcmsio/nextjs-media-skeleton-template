import { Article } from '@/_libs/microcms';
import Card from '@/_components/Card';
import styles from './index.module.css';

type Props = {
  articles: Article[];
};

export default function Cards({ articles }: Props) {
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={styles.cards}>
      {articles.map((article) => (
        <li key={article.id}>
          <Card article={article} />
        </li>
      ))}
    </ul>
  );
}
