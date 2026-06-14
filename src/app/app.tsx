import { is404 } from '@reatom/core';
import { reatomComponent } from '@reatom/react';

import { NotFoundPage } from 'pages/not-found';

import { rootRoute } from './routing';

export const App = reatomComponent(() => {
  const routeContent = rootRoute.render();
  const hasPageRoute = rootRoute.outlet().length > 0;

  return is404() || !hasPageRoute ? <NotFoundPage /> : routeContent;
}, 'App');
