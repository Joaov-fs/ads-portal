import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DesignSystemPage from './page';

describe('DesignSystemPage', () => {
  it('presents the visual library sections', () => {
    render(<DesignSystemPage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Clareza para decisões importantes.',
      }),
    ).toBeInTheDocument();

    for (const name of [
      'Design tokens',
      'Typography',
      'Containers & grid',
      'Buttons',
      'Inputs',
      'Search',
      'Cards',
      'Navigation',
      'Breadcrumb',
      'AdSlot',
    ]) {
      expect(
        screen.getByRole('heading', { level: 2, name }),
      ).toBeInTheDocument();
    }
  });

  it('renders all requested button states and field types', () => {
    render(<DesignSystemPage />);

    expect(screen.getByRole('button', { name: 'Primary' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Processando' })).toBeDisabled();
    expect(screen.getByLabelText('Valor')).toHaveAttribute(
      'inputmode',
      'decimal',
    );
    expect(screen.getByLabelText('Data')).toHaveAttribute('type', 'date');
    expect(screen.getByLabelText('E-mail')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Valor')).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('-description'),
    );
    expect(screen.getByLabelText('Campo com erro')).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('-description'),
    );
    expect(screen.getByRole('switch')).toBeChecked();
  });
});
