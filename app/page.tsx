import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import { LIMIT } from '@/_constants';
import { getArticleList } from '@/_libs/microcms';
import Cards from '@/_components/Cards';
import Ranking from '@/_components/Ranking';
import SearchField from '@/_components/SearchField';
import { ReadMore } from '@/_components/ReadMore';

export const revalidate = 60;

export default async function Page() {
  const data = await getArticleList({
    limit: LIMIT,
  });
  return (
    <Layout>
      <Main>
        <h1>新着情報</h1>
        <Cards articles={data.contents} />
        <ReadMore />
      </Main>
      <Sub>
        <Ad />
        <SearchField />
        <Ranking />
        <Ad />
      </Sub>
    </Layout>
  );
}
