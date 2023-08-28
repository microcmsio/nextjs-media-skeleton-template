import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import { LIMIT } from '@/_constants';
import { getArticleList, getCategoryDetail } from '@/_libs/microcms';
import Cards from '@/_components/Cards';
import Ranking from '@/_components/Ranking';
import SearchField from '@/_components/SearchField';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    categoryId: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const data = await getArticleList({
    limit: LIMIT,
    filters: `category[equals]${params.categoryId}`,
  });
  const category = await getCategoryDetail(params.categoryId).catch(() => notFound());
  return (
    <Layout>
      <Main>
        <h1>{category.name}</h1>
        <Cards articles={data.contents} />
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
