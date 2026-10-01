import { describe, expect, it } from 'vitest';

import { contentRepository } from '@/content';

import { buildCalculatorDecision, outputProfileByCalculator } from './decision';
import { calculateCalculator } from './rules';

const standardValues = {
  amount: 1000,
  baseSalary: 1000,
  childrenOver7: 1,
  childrenUnder7: 1,
  credits: 10,
  days: 30,
  debits: 2,
  deductions: 100,
  endDay: 30,
  extraHours: 10,
  monthlyHours: 220,
  months: 12,
  monthsWorked: 12,
  nightHours: 10,
  noticeDays: 30,
  otherDiscounts: 50,
  payroll: 280000,
  people: 4,
  rate: 10,
  restDays: 8,
  salary: 3000,
  savingsRate: 6,
  startDay: 1,
  taxRate: 15,
  workDays: 22,
};

describe('calculator decision output', () => {
  it('gives every registered calculator a declared profile and a usable decision journey', () => {
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
      expect(decision.summary).not.toHaveLength(0);
      expect(decision.recommendation.detail).not.toHaveLength(0);
      expect(decision.alerts.length).toBeGreaterThan(0);
      expect(decision.checklist.length).toBeGreaterThan(0);
      expect(decision.nextSteps.length).toBeGreaterThan(0);
    }
  });

  it('builds a financial breakdown and monthly evolution for compound interest', () => {
    const values = { amount: 1000, rate: 1, months: 12 };
    const decision = buildCalculatorDecision(
      'juros-compostos',
      values,
      calculateCalculator('juros-compostos', values),
    );

    expect(decision.breakdown?.items).toHaveLength(2);
    expect(decision.chart?.items).toHaveLength(2);
    expect(decision.timeline).toContain('Mês 12: R$ 1.126,83');
  });

  it('adds domain-specific worker and benefit guidance', () => {
    const salaryValues = { salary: 3000, otherDiscounts: 50 };
    const salaryDecision = buildCalculatorDecision(
      'salario-liquido',
      salaryValues,
      calculateCalculator('salario-liquido', salaryValues),
    );
    const benefitDecision = buildCalculatorDecision(
      'seguro-desemprego',
      { salary: 3000 },
      calculateCalculator('seguro-desemprego', { salary: 3000 }),
    );

    expect(salaryDecision.breakdown?.title).toBe('Composição do salário');
    expect(benefitDecision.table?.title).toBe('Situação a confirmar');
  });
});
