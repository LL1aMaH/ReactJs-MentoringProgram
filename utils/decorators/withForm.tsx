import React, { ReactElement } from 'react';

import { Formik } from 'formik';

export type TComponentFunc = () => ReactElement;
export type TFormDecoratorParams = {
  initialValues: any;
};

const getFormDecorator = ({ initialValues }: TFormDecoratorParams) => (
  componentFunc: TComponentFunc,
): JSX.Element => (
  <Formik initialValues={initialValues} onSubmit={() => {}}>
    {componentFunc()}
  </Formik>
);

export default getFormDecorator;
