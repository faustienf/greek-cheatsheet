import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderApp } from './testing/render-app';

describe('application routing', () => {
  it('renders the home page at the root route', () => {
    renderApp('/');

    expect(
      screen.getByRole('heading', { name: 'Greek Cheatsheet' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/the first reference pages are being prepared/i),
    ).toBeInTheDocument();
  });

  it('renders a fallback for an unknown route', () => {
    renderApp('/unknown');

    expect(
      screen.getByRole('heading', { name: 'Page not found' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Greek Cheatsheet' }),
    ).not.toBeInTheDocument();
  });
});
