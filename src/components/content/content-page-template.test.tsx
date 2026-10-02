import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getContentPageModel } from '@/content';

import { CalculatorTemplate } from './calculator-template';
import { GuideTemplate } from './guide-template';

describe('content templates', () => {
  it('renders shared editorial elements for a guide', () => {
    const model = getContentPageModel(
      'guide',
      'como-montar-reserva-de-emergencia',
    );
    if (!model) throw new Error('Guide fixture not found');

    render(<GuideTemplate model={model} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      model.document.title,
    );
    expect(screen.getAllByText('Redação PortalFina')).not.toHaveLength(0);
    expect(
      screen.getByRole('heading', { name: 'Perguntas frequentes' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Continue explorando' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Ao final deste guia, você vai saber',
      }),
    ).toBeInTheDocument();
  });

  it('validates and calculates through the shared calculator template', () => {
    const model = getContentPageModel('calculator', 'juros-compostos');
    if (!model) throw new Error('Calculator fixture not found');

    render(<CalculatorTemplate model={model} />);

    fireEvent.change(screen.getByLabelText('Valor inicial'), {
      target: { value: '1000' },
    });
    fireEvent.change(screen.getByLabelText('Taxa mensal'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByLabelText('Período em meses'), {
      target: { value: '12' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Calcular resultado' }));

    expect(screen.getByText('Montante projetado')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('R$');
    for (const heading of [
      'Explicação passo a passo',
      'Memória de cálculo',
      'O que este resultado indica para você',
      'Como interpretar',
      'Capital inicial x juros',
      'Evolução projetada',
      'Cuidados importantes',
      'Checklist antes de decidir',
      'Transforme a simulação em ação',
      'Legislação e referências aplicáveis',
      'Perguntas frequentes',
      'Fontes oficiais',
    ]) {
      expect(
        screen.getByRole('heading', { name: heading }),
      ).toBeInTheDocument();
    }
  });
});
