import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import { LIMIT } from '@/_constants';
import { getArticleList } from '@/_libs/microcms';
import Cards from './_components/Cards';
import Ranking from './_components/Ranking';

export default async function Page() {
  const data = await getArticleList({
    limit: LIMIT,
  });
  return (
    <Layout>
      <Main>
        <h1>新着情報</h1>
        <Cards articles={data.contents} />
      </Main>
      <Sub>
        <Ad />
        <Ranking articles={data.contents} />
      </Sub>
    </Layout>
  );
}
