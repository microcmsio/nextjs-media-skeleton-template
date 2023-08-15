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
  tags?: Tag[];
  category?: Category;
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

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
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
