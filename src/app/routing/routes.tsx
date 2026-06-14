import { reatomRoute } from '@reatom/core';
import { Fragment } from 'react';

import { HomePage } from 'pages/home';

export const rootRoute = reatomRoute({
  layout: true,
  render: (route) => (
    <>
      {route.outlet().map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </>
  ),
});

export const homeRoute = rootRoute.reatomRoute({
  path: '',
  render: () => <HomePage />,
});
