import { urlAtom } from '@reatom/core';
import { render } from '@testing-library/react';

import { App, AppProvider, createAppFrame } from 'app';

export function renderApp(pathname = '/') {
  const frame = createAppFrame();
  frame.run(() => urlAtom.go(pathname, true));

  return render(
    <AppProvider frame={frame}>
      <App />
    </AppProvider>,
  );
}
