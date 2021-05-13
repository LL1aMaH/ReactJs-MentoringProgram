import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import getFormDecorator from '../../../../../utils/decorators/withForm';
import withRouter from '../../../../../utils/decorators/withRouter';
import withStore from '../../../../../utils/decorators/withStore';

import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
  const withForm = getFormDecorator({ initialValues: { test: 'test' } });
  it('should renders correctly', () => {
    const component = render(
      withRouter(() => (
        <MovieCard
          film={{
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
          }}
        />
      )),
    );
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should renders edit modal correctly', () => {
    const component = render(
      withStore(
        () =>
          withForm(() =>
            withRouter(() => (
              <MovieCard
                film={{
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
                }}
              />
            )),
          ),
        {
          genre: 'ALL',
          sort: 'RELEASE DATE',
        },
      ),
    );

    const button = component.getByTestId('Edit');
    fireEvent.click(button);

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should renders delete modal correctly', () => {
    const component = render(
      withStore(
        () =>
          withForm(() =>
            withRouter(() => (
              <MovieCard
                film={{
                  id: 447365,
                  title: 'Guardians of the Galaxy Vol. 3',
                  release_date: '2020-05-01',
                  overview: "The third film based on Marvel's Guardians of the Galaxy.",
                  runtime: 100,
                  genres: [],
                  tagline: '',
                  vote_average: 10,
                  vote_count: 9,
                  poster_path: '',
                  budget: 0,
                  revenue: 0,
                }}
              />
            )),
          ),
        {
          genre: 'ALL',
          sort: 'RELEASE DATE',
        },
      ),
    );

    const button = component.getByTestId('Delete');
    fireEvent.click(button);

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should renders correctly with onError event', () => {
    const { getByAltText } = render(
      withRouter(() => (
        <MovieCard
          film={{
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
          }}
        />
      )),
    );
    const image: any = getByAltText('poster');
    fireEvent.error(image);
    expect(image.src).toBe('http://localhost/src/assets/pictures/Movie_040311_3.jpg');
  });

  it('should redirect correctly', () => {
    const component = render(
      withStore(
        () =>
          withForm(() =>
            withRouter(() => (
              <MovieCard
                film={{
                  id: 447365,
                  title: 'Guardians of the Galaxy Vol. 3',
                  release_date: '2020-05-01',
                  overview: "The third film based on Marvel's Guardians of the Galaxy.",
                  runtime: 100,
                  genres: [],
                  tagline: '',
                  vote_average: 10,
                  vote_count: 9,
                  poster_path: '',
                  budget: 0,
                  revenue: 0,
                }}
              />
            )),
          ),
        {
          genre: 'ALL',
          sort: 'RELEASE DATE',
        },
      ),
    );

    const image = component.getByAltText('poster');
    fireEvent.click(image);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
