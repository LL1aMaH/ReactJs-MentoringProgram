export type TInitialState = {
  data: Array<TMovie>;
  total: number | null;
  offset: number | null;
  limit: number | null;
  isLoading: boolean;
  genre: string;
  sort: string;
  mainFilm: TMovie | null;
};

export type TMovie = {
  title: string;
  release_date: string;
  overview: string;
  runtime: number;
  genres: string[];
  poster_path: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  budget?: number;
  revenue?: number;
  id: number;
};

export type TStartButton = {
  activeButtonStart: string;
  sortStart: string;
};

export type TAddMovie = {
  title: string;
  release_date: string;
  overview: string;
  runtime: number;
  genres: string[];
  poster_path: string;
};
