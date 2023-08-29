import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { createClient } from 'microcms-js-sdk';
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_PATCH_API_KEY,
});

const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '');
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: serviceAccountKey.client_email,
    private_key: serviceAccountKey.private_key,
  },
});

export const getPopularArticles = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID}`,
    dateRanges: [
      {
        startDate: '8daysAgo',
        endDate: '1daysAgo',
      },
    ],
    dimensions: [
      {
        name: 'pagePath',
      },
    ],
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
    // articles/配下のみを計測する
    dimensionFilter: {
      filter: {
        fieldName: 'pagePath',
        stringFilter: {
          matchType: 'FULL_REGEXP',
          value: '^/articles/[^/]+$',
        },
      },
    },
    limit: '5',
  });
  const data = response.rows?.map((row) => {
    return {
      path: row.dimensionValues?.[0].value,
      views: row.metricValues?.[0].value,
    };
  });
  return data;
};

const popularArticles = (await getPopularArticles()) || [];
console.log('分析結果: ' + JSON.stringify(popularArticles, null, 2));

// /articles/ は除くため10文字削る
const ids = popularArticles.map((article) => article.path.slice(10));
console.log('上位5件: ' + JSON.stringify(ids, null, 2));

await client.update({
  endpoint: 'ranking',
  content: {
    articles: ids,
  },
});
