import { reatomRoute } from '@reatom/core';
import { Fragment } from 'react';

import { HomePage } from 'pages/home';
import { PronounsPage } from 'pages/pronouns';
import { VerbsPage } from 'pages/verbs';

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
  render: () => (
    <HomePage
      pronounsHref={pronounsRoute.path()}
      verbsHref={verbsRoute.path()}
    />
  ),
});

export const pronounsRoute = rootRoute.reatomRoute({
  path: 'pronouns',
  render: () => <PronounsPage homeHref={homeRoute.path()} />,
});

export const verbsRoute = rootRoute.reatomRoute({
  path: 'verbs',
  render: () => <VerbsPage homeHref={homeRoute.path()} />,
});
