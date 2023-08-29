import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';

// タグの型定義
export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// 記事の型定義
export type Article = {
  title: string;
  description: string;
  content: (RichEditor | Ad)[];
  thumbnail: MicroCMSImage;
  tags: Tag[];
  category: Category | null;
  relatedArticles: Article[];
} & MicroCMSContentId &
  MicroCMSDate;

// カスタムフィールド > リッチエディタの型定義
export type RichEditor = {
  fieldId: 'richEditor';
  richEditor: string;
};

// カスタムフィールド > 広告の型定義
export type Ad = {
  fieldId: 'ad';
  ad: boolean;
};

// ランキングの型定義
export type Ranking = {
  articles: Article[];
} & MicroCMSContentId &
  MicroCMSDate;

// ピックアップの型定義
export type Pickup = {
  articles: Article[];
} & MicroCMSContentId &
  MicroCMSDate;

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_GET_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_GET_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_GET_API_KEY,
});

// 記事一覧を取得
export const getArticleList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: 'articles',
    queries,
  });
  return listData;
};

// 記事詳細を取得
export const getArticleDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Article>({
    endpoint: 'articles',
    contentId,
    queries,
  });
  return detailData;
};

// ランキングを取得
export const getRanking = async (queries?: MicroCMSQueries) => {
  const detailData = await client.getObject<Ranking>({
    endpoint: 'ranking',
    queries,
  });
  return detailData;
};

// ピックアップを取得
export const getPickup = async (queries?: MicroCMSQueries) => {
  const detailData = await client.getObject<Ranking>({
    endpoint: 'pickup',
    queries,
  });
  return detailData;
};

// カテゴリーを取得
export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });
  return detailData;
};

// タグを取得
export const getTagDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'tags',
    contentId,
    queries,
  });
  return detailData;
};
