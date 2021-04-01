import { DEFAULT_URL, ETypes } from 'Consts/index';

export type TGetURL = {
  searchBy?: string;
  query?: ETypes;
};

export const getURL = (genre: string, sort: string) => {
  const correctGenre = genre !== 'ALL' ? `filter=${genre}&` : '';
  const correctSort =
    sort === 'RELEASE DATE'
      ? 'sortBy=release_date&sortOrder=desc&'
      : 'sortBy=vote_average&sortOrder=desc&';
  const url = `${DEFAULT_URL}${ETypes.movie}?${correctSort}${correctGenre}limit=250`;
  return url;
};
