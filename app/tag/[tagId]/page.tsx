import { Metadata } from 'next';
import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import { LIMIT } from '@/_constants';
import { getArticleList, getTagDetail } from '@/_libs/microcms';
import Cards from '@/_components/Cards';
import Ranking from '@/_components/Ranking';
import SearchField from '@/_components/SearchField';
import { notFound } from 'next/navigation';
import { ReadMore } from '@/_components/ReadMore';

type Props = {
  params: {
    tagId: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = await getTagDetail(params.tagId);
  return {
    title: tag.name,
  };
}

export default async function Page({ params }: Props) {
  const filters = `tags[contains]${params.tagId}`;
  const data = await getArticleList({
    limit: LIMIT,
    filters,
  });
  const tag = await getTagDetail(params.tagId).catch(() => notFound());
  return (
    <Layout>
      <Main>
        <h1>{tag.name}</h1>
        <Cards articles={data.contents} />
        <ReadMore filters={filters} totalCount={data.totalCount} />
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
