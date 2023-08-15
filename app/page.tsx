import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import { LIMIT } from '@/_constants';
import { getArticleList } from '@/_libs/microcms';
import Card from './_components/Card';
import Cards from './_components/Cards';

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
      <Sub>リスト</Sub>
    </Layout>
  );
}
