'use client';

import { FC, useState, useCallback } from 'react';
import { getArticleList, Article } from '@/_libs/microcms';
import { LIMIT } from '@/_constants';
import Cards from '@/_components/Cards';

type Props = {
  filters?: string;
  q?: string;
  totalCount: number;
};

export const ReadMore: FC<Props> = ({ filters, q, totalCount }) => {
  const [contents, setContents] = useState<Article[]>([]);
  const [offset, setOffset] = useState<number>(LIMIT);
  const getNextContents = useCallback(async () => {
    const data = await getArticleList({
      limit: LIMIT,
      offset,
      filters,
      q,
    });
    setContents((prev) => [...prev, ...data.contents]);
    setOffset((prev) => prev + LIMIT);
  }, [offset, filters, q]);

  if (totalCount <= LIMIT) {
    return null;
  }

  return (
    <div>
      <Cards articles={contents} />
      {totalCount > offset && <button onClick={getNextContents}>もっと読む</button>}
    </div>
  );
};
