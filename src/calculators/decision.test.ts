import { describe, expect, it } from 'vitest';

import { contentRepository } from '@/content';

import { buildCalculatorDecision, outputProfileByCalculator } from './decision';
import { calculateCalculator } from './rules';

const standardValues = {
  alimony: 0,
  annex: 3,
  amount: 1000,
  baseSalary: 1000,
  benefits: 300,
  cdiRate: 10,
  childrenOver7: 1,
  childrenUnder7: 1,
  credits: 10,
  days: 30,
  daysLastMonth: 10,
  daysLate: 10,
  debits: 2,
  deductions: 100,
  dueDate: 20685,
  payDate: 20731,
  payroll12: 80000,
  sellDays: 5,
  dependents: 1,
  endDate: 20030,
  expiredVacations: 1,
  extraHours: 10,
  extraHours100: 4,
  extraHours50: 10,
  interest: 2,
  monthlyHours: 220,
  months: 12,
  monthsInYear: 6,
  monthsSinceVacation: 4,
  monthsWorked: 12,
  nightHours: 10,
  noticeDays: 30,
  otherDiscounts: 50,
  payroll: 280000,
  people: 4,
  prepayment: 200,
  rate: 10,
  requestNumber: 1,
  rbt12: 240000,
  restDays: 8,
  salary: 3000,
  savingsRate: 6,
  startDate: 20000,
  taxRate: 15,
  workDays: 22,
};

describe('calculator decision output', () => {
  it('gives every registered calculator a declared profile and a decision', () => {
    for (const document of contentRepository.list('calculator')) {
      const calculation = calculateCalculator(
        document.calculatorId,
        standardValues,
      );
      const decision = buildCalculatorDecision(
        document.calculatorId,
        standardValues,
        calculation,
      );

      expect(outputProfileByCalculator[document.calculatorId]).toBeDefined();
      expect(typeof decision.summary).toBe('string');
      expect(Array.isArray(decision.alerts)).toBe(true);
    }
  });

  it('shows a month-by-month table for compound interest', () => {
    const values = { amount: 1000, rate: 1, months: 12 };
    const decision = buildCalculatorDecision(
      'juros-compostos',
      values,
      calculateCalculator('juros-compostos', values),
    );

    expect(decision.chart?.items).toHaveLength(2);
    expect(decision.table?.title).toBe('Evolução mês a mês');
    expect(decision.table?.rows.at(-1)).toEqual([
      'Mês 12',
      'R$\u00a0126,83',
      'R$\u00a01.126,83',
    ]);
  });

  it('builds a payslip-style statement for net salary', () => {
    const values = {
      salary: 3500,
      dependents: 0,
      alimony: 0,
      otherDiscounts: 50,
    };
    const decision = buildCalculatorDecision(
      'salario-liquido',
      values,
      calculateCalculator('salario-liquido', values),
    );
    const labels = decision.statement?.rows.map((row) => row.label);

    expect(decision.statement?.title).toBe('Holerite estimado');
    expect(labels).toEqual([
      'Salário bruto',
      'INSS',
      'IRRF',
      'Outros descontos',
    ]);
    expect(decision.references?.length).toBeGreaterThan(0);
  });

  it('itemizes termination and vacation pay, and names the official sources', () => {
    const termination = buildCalculatorDecision(
      'rescisao-clt',
      standardValues,
      calculateCalculator('rescisao-clt', standardValues),
    );
    const vacation = buildCalculatorDecision(
      'ferias',
      { salary: 3000, days: 30 },
      calculateCalculator('ferias', { salary: 3000, days: 30 }),
    );

    expect(termination.statement?.rows.length).toBeGreaterThan(5);
    expect(termination.references?.length).toBeGreaterThan(0);
    expect(vacation.statement?.rows.map((row) => row.label)).toEqual([
      'Salário dos dias de férias',
      'Adicional de 1/3 constitucional',
      'INSS',
      'IRRF',
    ]);
  });

  it('explains how the Bolsa Família total reaches the floor', () => {
    const values = { people: 1, childrenUnder7: 0, childrenOver7: 0 };
    const decision = buildCalculatorDecision(
      'bolsa-familia',
      values,
      calculateCalculator('bolsa-familia', values),
    );

    expect(decision.statement?.rows.map((row) => row.label)).toContain(
      'Benefício Complementar',
    );
  });

  it('keeps benefit guidance for unemployment insurance', () => {
    const decision = buildCalculatorDecision(
      'seguro-desemprego',
      { salary: 3000, monthsWorked: 24, requestNumber: 1 },
      calculateCalculator('seguro-desemprego', {
        salary: 3000,
        monthsWorked: 24,
        requestNumber: 1,
      }),
    );

    expect(decision.table?.title).toBe('Resumo do benefício');
  });

  it('detalha os adicionais, a pensão e as utilidades que faltavam', () => {
    const build = (
      id: Parameters<typeof buildCalculatorDecision>[0],
      values: Record<string, number>,
    ) => buildCalculatorDecision(id, values, calculateCalculator(id, values));

    const danger = build('periculosidade', { salary: 3000 });
    expect(danger.statement?.rows.map((row) => row.earning)).toEqual([
      3000, 900,
    ]);
    expect(danger.table?.rows.at(-1)?.[1]).toBe('R$\u00a0247,00');

    const unhealthy = build('insalubridade', { rate: 20 });
    expect(unhealthy.statement?.rows[0]?.earning).toBe(1621);
    expect(unhealthy.statement?.rows[1]?.earning).toBeCloseTo(324.2, 2);

    const alimony = build('pensao-alimenticia', {
      salary: 5000,
      deductions: 1000,
      rate: 30,
    });
    expect(alimony.statement?.rows[2]?.discount).toBe(1200);

    const days = build('contador-dias', { startDate: 20000, endDate: 20030 });
    expect(days.table?.rows[0]).toEqual(['Dias corridos', '30']);
    expect(days.table?.rows[2]?.[1]).toBe('4 semanas e 2 dias');

    const conversion = build('conversao-taxa', { rate: 1 });
    expect(conversion.table?.rows[3]?.[1]).toBe('12,6825%');

    const bank = build('banco-de-horas', {
      credits: 10.5,
      debits: 2,
      salary: 2200,
      monthlyHours: 220,
    });
    expect(bank.table?.rows[2]).toEqual(['Saldo do banco', '8h30']);
    expect(bank.table?.rows.at(-1)?.[1]).toBe('R$\u00a0127,50');

    const tax = build('ipva', {
      amount: 50000,
      rate: 4,
      monthsInYear: 6,
      installments: 3,
    });
    expect(tax.table?.rows[0]?.[1]).toBe('R$\u00a01.000,00');

    const maternity = build('salario-maternidade', { salary: 3000, months: 4 });
    expect(maternity.table?.rows).toHaveLength(5);

    const simple = build('juros-simples', {
      amount: 1000,
      rate: 1,
      months: 12,
    });
    expect(simple.table?.rows.at(-1)).toEqual([
      'Período 12',
      'R$\u00a0120,00',
      'R$\u00a01.120,00',
    ]);

    const percentage = build('porcentagem', { amount: 200, rate: 10 });
    expect(percentage.table?.rows[1]?.[1]).toBe('R$\u00a0220,00');
  });
});
