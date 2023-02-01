import { useState } from 'react';

export const usePagination = (initPage: number, initLimit: number) => {
  const [page, setPage] = useState(initPage);
  const [limit, setLimit] = useState(initLimit);

  return {
    page,
    setPage,
    limit,
    setLimit,
  };
};
