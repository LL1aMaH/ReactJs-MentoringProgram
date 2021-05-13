import {
  getMovies,
  getSearchMovies,
  deleteMovie,
  addMovie,
  editMovie,
  movieDetails,
} from '../actions';

describe('Actions::', () => {
  const dispatch = jest.fn();

  it('should dispatch correctly', () => {
    getMovies('genre', 'sort', dispatch);
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch correctly', () => {
    getSearchMovies('search', dispatch);
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch correctly', () => {
    deleteMovie(123, 'activeButtonStart', 'sortStart', dispatch);
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch correctly', () => {
    addMovie(
      {
        title: 'string',
        release_date: 'string',
        overview: 'string',
        runtime: 123,
        genres: [],
        poster_path: 'string',
      },
      'activeButtonStart',
      'sortStart',
      dispatch,
    );
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch correctly', () => {
    editMovie(
      {
        title: 'string',
        release_date: 'string',
        overview: 'string',
        runtime: 123,
        genres: [],
        poster_path: 'string',
      },
      'activeButtonStart',
      'sortStart',

      dispatch,
    );
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch correctly', () => {
    movieDetails('id', dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
