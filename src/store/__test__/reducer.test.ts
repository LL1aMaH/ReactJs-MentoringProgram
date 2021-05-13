import searchReducer, { initialState } from '../reducer';

describe('reducer:', () => {
  it('should return correctly object FETCH_SUCCESS', () => {
    expect(
      searchReducer(initialState, {
        type: 'FETCH_SUCCESS',
        payload: {
          data: 'data',
          total: 'total',
          offset: 'offset',
          limit: 'limit',
        },
      }),
    ).toEqual(
      expect.objectContaining({
        isLoading: false,
        data: 'data',
        total: 'total',
        offset: 'offset',
        limit: 'limit',
      }),
    );
  });

  it('should return correctly object CHANGE_ACTIVE_BUTTON', () => {
    expect(
      searchReducer(initialState, {
        type: 'CHANGE_ACTIVE_BUTTON',
        payload: 'genre',
      }),
    ).toEqual(
      expect.objectContaining({
        genre: 'genre',
      }),
    );
  });

  it('should return correctly object CHANGE_SORT', () => {
    expect(
      searchReducer(initialState, {
        type: 'CHANGE_SORT',
        payload: 'sort',
      }),
    ).toEqual(
      expect.objectContaining({
        sort: 'sort',
      }),
    );
  });

  it('should return correctly object CHANGE_MAIN_FILM', () => {
    expect(
      searchReducer(initialState, {
        type: 'CHANGE_MAIN_FILM',
        payload: 'mainFilm',
      }),
    ).toEqual(
      expect.objectContaining({
        mainFilm: 'mainFilm',
      }),
    );
  });
});
