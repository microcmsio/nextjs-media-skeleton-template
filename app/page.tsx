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
import Pickup from '@/_components/Pickup';

export const revalidate = 60;

type Props = {
  searchParams: {
    rankingDraftKey?: string;
    pickupDraftKey?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const data = await getArticleList({
    limit: LIMIT,
  });
  return (
    <Layout>
      <Main>
        <h1>新着情報</h1>
        <Cards articles={data.contents} />
        <ReadMore totalCount={data.totalCount} />
      </Main>
      <Sub>
        <Ad />
        <Pickup draftKey={searchParams.pickupDraftKey} />
        <SearchField />
        <Ranking draftKey={searchParams.rankingDraftKey} />
        <Ad />
      </Sub>
    </Layout>
  );
}
