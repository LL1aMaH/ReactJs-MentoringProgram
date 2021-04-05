/* eslint-disable no-param-reassign */
import { TMovie } from '../../../../store/types';

export const getCorrectValue = (value: TMovie) => {
  if (value.runtime === null) {
    value.runtime = 0;
  }
  return value;
};
