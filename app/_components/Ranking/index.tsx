import { getRanking } from '@/_libs/microcms';
import { RANKING_LIMIT } from '@/_constants';
import List from '@/_components/List';

type Props = {
  draftKey?: string;
};

export default async function Ranking({ draftKey }: Props) {
  const data = await getRanking({
    limit: RANKING_LIMIT,
    draftKey,
  }).catch(() => ({ articles: [] }));
  const articles = data.articles;
  return (
    <div>
      <h2>週間ランキング</h2>
      {articles.length === 0 ? (
        <p>記事がありません。</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <List article={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
