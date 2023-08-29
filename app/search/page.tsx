import { Metadata } from 'next';
import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import { LIMIT } from '@/_constants';
import { getArticleList } from '@/_libs/microcms';
import Pickup from '@/_components/Pickup';
import Ranking from '@/_components/Ranking';
import SearchField from '@/_components/SearchField';
import Cards from '@/_components/Cards';
import { ReadMore } from '@/_components/ReadMore';

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = 60;

export function generateMetadata({ searchParams }: Props): Metadata {
  return {
    title: `「${searchParams.q}」の検索結果`,
  };
}

export default async function Page({ searchParams }: Props) {
  const q = searchParams.q;
  const data = await getArticleList({
    limit: LIMIT,
    q,
  });
  return (
    <Layout>
      <Main>
        <SearchField />
        <h1>「{searchParams.q}」の検索結果</h1>
        <p>{data.totalCount}件が見つかりました</p>
        <Cards articles={data.contents} />
        <ReadMore totalCount={data.totalCount} q={q} />
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
