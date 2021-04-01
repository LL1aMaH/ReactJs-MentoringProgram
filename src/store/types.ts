export type TInitialState = {
  data: Array<TMovie>;
  total: number | null;
  offset: number | null;
  limit: number | null;
  isLoading: boolean;
  genre: string;
  sort: string;
};

export type TMovie = {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
  id: number;
};

export type TStartButton = {
  activeButtonStart: string;
  sortStart: string;
};
