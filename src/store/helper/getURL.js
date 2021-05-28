import { DEFAULT_URL } from '../../consts/const';

export const getURL = (genre, sort) => {
  const correctGenre = genre !== 'ALL' ? `filter=${genre}&` : '';
  const correctSort =
    sort === 'RELEASE DATE'
      ? 'sortBy=release_date&sortOrder=desc&'
      : 'sortBy=vote_average&sortOrder=desc&';
  const url = `${DEFAULT_URL}?${correctSort}${correctGenre}limit=40`;
  return url;
};
