'use client';

import { FC, useState, useCallback } from 'react';
import { getArticleList, Article } from '@/_libs/microcms';
import { LIMIT } from '@/_constants';
import { set } from 'date-fns';

export const ReadMore: FC = () => {
  const [contents, setContents] = useState<Article[]>([]);
  const [offset, setOffset] = useState<number>(LIMIT);
  const getNextContents = useCallback(async () => {
    const data = await getArticleList({
      limit: LIMIT,
      offset,
    });
    setContents((prev) => [...prev, ...data.contents]);
    setOffset((prev) => prev + LIMIT);
  }, [offset]);

  return (
    <div>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>{content.title}</li>
        ))}
      </ul>
      <button onClick={getNextContents}>もっと読む</button>
    </div>
  );
};
