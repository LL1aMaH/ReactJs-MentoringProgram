import React from 'react';

import { render } from '@testing-library/react';

import withRouter from '../../../utils/decorators/withRouter';

import { MovieList } from './MovieList';

describe('MovieList', () => {
  it('should renders correctly', () => {
    const component = render(
      withRouter(() => (
        <MovieList
          movies={[
            {
              id: 447365,
              title: 'Guardians of the Galaxy Vol. 3',
              release_date: '2020-05-01',
              overview: "The third film based on Marvel's Guardians of the Galaxy.",
              runtime: 100,
              genres: [],
              tagline: '',
              vote_average: 10,
              vote_count: 9,
              poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
              budget: 0,
              revenue: 0,
            },
          ]}
        />
      )),
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
