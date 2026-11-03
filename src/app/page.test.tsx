import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { categories } from '@/features/public-content';

import { HomeView } from './home-view';

describe('Home', () => {
  it('presents the complete public discovery journey', () => {
    render(<HomeView />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Notícias que mexem no seu bolso',
      }),
    ).toBeInTheDocument();

    for (const section of [
      'Notícias que mexem no seu bolso',
      'Últimas notícias',
      'Política',
      'Economia',
      'Mercado',
      'Brasil',
      'Calcule agora',
      'Guias para consultar quando precisar',
    ]) {
      expect(
        screen.getByRole('heading', { name: section }),
      ).toBeInTheDocument();
    }
  });

  it('renders only categories with a useful public path', () => {
    render(<HomeView />);

    for (const category of categories) {
      expect(
        screen
          .getAllByRole('link', { name: new RegExp(category.label) })
          .some(
            (link) =>
              link.getAttribute('href') === `/categorias/${category.slug}`,
          ),
      ).toBe(true);
    }

    expect(screen.queryByText('Publicidade')).not.toBeInTheDocument();
  });

  it('curates the home and links news to the calculator of the subject', () => {
    render(<HomeView />);

    expect(
      screen.getByRole('link', { name: /^Ver as \d+ calculadoras →$/ }),
    ).toHaveAttribute('href', '/calculadoras');
    expect(
      screen.getByRole('link', { name: 'Todas as notícias →' }),
    ).toHaveAttribute('href', '/noticias');
    expect(
      screen
        .getAllByRole('link')
        .some((link) =>
          link.getAttribute('href')?.startsWith('/calculadoras/'),
        ),
    ).toBe(true);
  });

  it('shows a cover for every news card and a product card for each featured calculator', () => {
    const { container } = render(<HomeView />);

    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(6);
    for (const slug of [
      'salario-liquido',
      'rescisao-clt',
      'ferias',
      'decimo-salario',
      'seguro-desemprego',
      'fgts-multa',
      'juros-compostos',
    ]) {
      expect(
        screen
          .getAllByRole('link')
          .some(
            (link) => link.getAttribute('href') === `/calculadoras/${slug}`,
          ),
      ).toBe(true);
    }
  });

  it('does not render unavailable newsletter controls', () => {
    render(<HomeView />);

    expect(
      screen.queryByLabelText('Seu melhor e-mail'),
    ).not.toBeInTheDocument();
  });
});
