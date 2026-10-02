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
        name: 'Entenda o que muda no seu bolso.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toHaveAttribute('action', '/pesquisa');

    for (const section of [
      'O que mudou e quanto isso pesa no seu bolso',
      'Uma conta que você consegue conferir',
      'Uma calculadora para cada momento da vida',
      'Guias para consultar quando precisar',
    ]) {
      expect(
        screen.getByRole('heading', { name: section }),
      ).toBeInTheDocument();
    }
  });

  it('lets the visitor try the salary calculator without leaving the home', () => {
    render(<HomeView />);

    expect(
      screen.getByLabelText('Quanto você ganha por mês (bruto)?'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Ver o holerite completo, com dependentes e pensão/,
      }),
    ).toHaveAttribute('href', '/calculadoras/salario-liquido');
  });

  it('renders only categories with a useful public path', () => {
    render(<HomeView />);

    for (const category of categories.filter(
      (item) => item.slug !== 'politica',
    )) {
      expect(
        screen
          .getAllByRole('link', { name: new RegExp(category.label) })
          .some(
            (link) =>
              link.getAttribute('href') === `/categorias/${category.slug}`,
          ),
      ).toBe(true);
    }

    expect(screen.queryByText('Política')).not.toBeInTheDocument();
    expect(screen.queryByText('Publicidade')).not.toBeInTheDocument();
  });

  it('curates the home and links news to the calculator of the subject', () => {
    render(<HomeView />);

    expect(
      screen.getByRole('link', { name: 'Ver todas as calculadoras →' }),
    ).toHaveAttribute('href', '/calculadoras');
    expect(
      screen.getByRole('link', { name: 'Ver todas as notícias →' }),
    ).toHaveAttribute('href', '/noticias');
    expect(
      screen
        .getAllByRole('link')
        .some((link) =>
          link.getAttribute('href')?.startsWith('/calculadoras/'),
        ),
    ).toBe(true);
  });

  it('does not render unavailable newsletter controls', () => {
    render(<HomeView />);

    expect(
      screen.queryByLabelText('Seu melhor e-mail'),
    ).not.toBeInTheDocument();
  });
});
