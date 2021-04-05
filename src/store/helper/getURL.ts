import { DEFAULT_URL } from 'Consts/index';

export type TGetURL = {
  searchBy?: string;
};

export const getURL = (genre: string, sort: string): string => {
  const correctGenre = genre !== 'ALL' ? `filter=${genre}&` : '';
  const correctSort =
    sort === 'RELEASE DATE'
      ? 'sortBy=release_date&sortOrder=desc&'
      : 'sortBy=vote_average&sortOrder=desc&';
  const url = `${DEFAULT_URL}?${correctSort}${correctGenre}limit=250`;
  return url;
};
