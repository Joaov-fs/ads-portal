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
  });

  it('shows the quick answer right after the title', () => {
    const model = getContentPageModel(
      'guide',
      'abono-salarial-pis-pasep-quem-tem-direito',
    );
    if (!model) throw new Error('Guide fixture not found');

    const { container } = render(<GuideTemplate model={model} />);
    const headings = [...container.querySelectorAll('h1, h2')].map(
      (node) => node.textContent,
    );

    expect(headings[0]).toBe(model.document.title);
    expect(headings[1]).toBe('Quem tem direito ao saque do PIS/Pasep em 2026?');
    expect(
      screen.getByRole('link', { name: /Calcular o valor do meu abono/ }),
    ).toHaveAttribute('href', '/calculadoras/pis');
  });

  it('places the calculator before highlights and explanations', () => {
    const model = getContentPageModel('calculator', 'ferias-proporcionais');
    if (!model) throw new Error('Calculator fixture not found');

    const { container } = render(<CalculatorTemplate model={model} />);
    const headings = [...container.querySelectorAll('h1, h2')].map(
      (node) => node.textContent,
    );

    expect(headings[1]).toBe('Faça sua simulação');
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
      'Capital inicial x juros',
      'Evolução mês a mês',
      'Como calculamos',
      'Perguntas frequentes',
      'Fontes e referências',
    ]) {
      expect(
        screen.getByRole('heading', { name: heading }),
      ).toBeInTheDocument();
    }
  });
});
