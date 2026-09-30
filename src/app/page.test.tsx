import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { categories } from '@/features/public-content';

import Home from './page';

describe('Home', () => {
  it('presents the complete public discovery journey', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Entenda. Calcule. Decida melhor.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toHaveAttribute('action', '/pesquisa');
    expect(
      screen.getByRole('list', { name: 'Como usar a plataforma' }),
    ).toBeInTheDocument();

    for (const section of [
      'Comece pelo que importa para você',
      'Ferramentas populares',
      'Notícias e análises',
      'Guias em destaque',
    ]) {
      expect(
        screen.getByRole('heading', { name: section }),
      ).toBeInTheDocument();
    }
  });

  it('renders only categories with a useful public path', () => {
    render(<Home />);

    for (const category of categories.filter(
      (item) => item.slug !== 'politica',
    )) {
      expect(
        screen.getByRole('link', { name: new RegExp(category.label) }),
      ).toBeInTheDocument();
    }

    expect(screen.queryByText('Política')).not.toBeInTheDocument();
    expect(screen.queryByText('Publicidade')).not.toBeInTheDocument();
  });

  it('curates the home instead of rendering the complete calculator catalog', () => {
    render(<Home />);

    expect(screen.getAllByText('Usar calculadora')).toHaveLength(3);
    expect(
      screen.getByRole('link', { name: 'Ver todas as calculadoras →' }),
    ).toHaveAttribute('href', '/calculadoras');
  });

  it('does not render unavailable newsletter controls', () => {
    render(<Home />);

    expect(
      screen.queryByLabelText('Seu melhor e-mail'),
    ).not.toBeInTheDocument();
  });
});
