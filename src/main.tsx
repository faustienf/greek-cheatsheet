import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App, AppProvider, appFrame } from 'app';
import 'app/styles/index.css';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element was not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider frame={appFrame}>
      <App />
    </AppProvider>
  </StrictMode>,
);
