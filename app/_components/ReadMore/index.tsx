'use client';

import { FC, useState, useCallback } from 'react';
import { getArticleList, Article } from '@/_libs/microcms';
import { LIMIT } from '@/_constants';
import Cards from '@/_components/Cards';

type Props = {
  filters?: string;
};

export const ReadMore: FC<Props> = ({ filters }) => {
  const [contents, setContents] = useState<Article[]>([]);
  const [offset, setOffset] = useState<number>(LIMIT);
  const getNextContents = useCallback(async () => {
    const data = await getArticleList({
      limit: LIMIT,
      offset,
      filters,
    });
    setContents((prev) => [...prev, ...data.contents]);
    setOffset((prev) => prev + LIMIT);
  }, [offset, filters]);

  return (
    <div>
      <Cards articles={contents} />
      <button onClick={getNextContents}>もっと読む</button>
    </div>
  );
};