import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import { LIMIT } from '@/_constants';
import { getArticleList } from '@/_libs/microcms';
import List from '@/_components/List';
import Pickup from '@/_components/Pickup';
import Ranking from '@/_components/Ranking';
import SearchField from '@/_components/SearchField';

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getArticleList({
    limit: LIMIT,
    q: searchParams.q,
  });
  return (
    <Layout>
      <Main>
        <SearchField />
        <h1>「{searchParams.q}」の検索結果</h1>
        <p>{data.totalCount}件が見つかりました</p>
        <ul>
          {data.contents.map((article) => (
            <li key={article.id}>
              <List article={article} />
            </li>
          ))}
        </ul>
      </Main>
      <Sub>
        <Ad />
        <Pickup />
        <SearchField />
        <Ranking />
      </Sub>
    </Layout>
  );
}
