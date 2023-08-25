import { Metadata } from 'next';
import Image from 'next/image';
import { getArticleDetail } from '@/_libs/microcms';
import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import Sub from '@/_components/Sub';
import Ad from '@/_components/Ad';
import Ranking from '@/_components/Ranking';
import PublishDate from '@/_components/PublishDate';
import RichEditor from '@/_components/RichEditor';
import Pickup from '@/_components/Pickup';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return (
    <Layout>
      <Main>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div>
          <PublishDate date={data.publishedAt || data.createdAt} />
        </div>
        <Image
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
        {data.content.map((item, i) => {
          if (item.fieldId === 'richEditor') {
            return <RichEditor key={i} content={item.richEditor} />;
          }
          return null;
        })}
      </Main>
      <Sub>
        <Ad />
        <Pickup />
        <Ranking />
      </Sub>
    </Layout>
  );
}
