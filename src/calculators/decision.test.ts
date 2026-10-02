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
    expect(vacation.statement?.rows).toHaveLength(2);
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
});
