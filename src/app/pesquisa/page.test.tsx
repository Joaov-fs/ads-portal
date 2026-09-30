import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SearchPage from './page';

describe('SearchPage', () => {
  it('renders results from the query string', async () => {
    render(await SearchPage({ searchParams: Promise.resolve({ q: 'selic' }) }));

    expect(
      screen.getByRole('heading', { name: '2 resultados para “selic”' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Taxa Selic: como as decisões do Copom afetam seu bolso',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toHaveFormValues({ q: 'selic' });
  });

  it('guides users before a query is informed', async () => {
    render(await SearchPage({ searchParams: Promise.resolve({}) }));

    expect(
      screen.getByRole('heading', { name: 'Digite um termo para começar' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Uma busca, vários caminhos')).toBeInTheDocument();
  });
});
