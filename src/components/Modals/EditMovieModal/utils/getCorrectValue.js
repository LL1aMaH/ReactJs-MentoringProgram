/* eslint-disable no-param-reassign */

export const getCorrectValue = (value) => {
  if (value.runtime === null) {
    value.runtime = 0;
  }
  return value;
};
