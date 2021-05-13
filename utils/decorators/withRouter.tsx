import React from 'react';

import { MemoryRouter } from 'react-router-dom';

export type TComponentFunc = () => JSX.Element;
export type TDecoratorLocation = {
  pathname?: string;
  search?: string;
};

const withRouter = (
  componentFunc: TComponentFunc,
  location: TDecoratorLocation = { pathname: '/' },
): JSX.Element => {
  return <MemoryRouter initialEntries={[location]}>{componentFunc()}</MemoryRouter>;
};

export default withRouter;
