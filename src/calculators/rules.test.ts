import { describe, expect, it } from 'vitest';

import { contentRepository } from '@/content';

import { calculateCalculator, formatCalculatorResult } from './rules';

describe('calculator rules', () => {
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
    grossSalary: 1000,
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

  it('keeps every registered calculator connected to a finite pure rule', () => {
    for (const document of contentRepository.list('calculator')) {
      const calculation = calculateCalculator(
        document.calculatorId,
        standardValues,
      );

      expect(Number.isFinite(calculation.value)).toBe(true);
      expect(calculation.label).not.toHaveLength(0);
      expect(calculation.explanation).not.toHaveLength(0);
    }
  });

  it('calculates compound interest and formats Brazilian currency', () => {
    const calculation = calculateCalculator('juros-compostos', {
      amount: 1000,
      rate: 10,
      months: 12,
    });

    expect(calculation.value).toBeCloseTo(3138.43, 2);
    expect(formatCalculatorResult('juros-compostos', calculation.value)).toBe(
      'R$ 3.138,43',
    );
  });

  it('uses the 2026 official contribution and benefit references', () => {
    expect(calculateCalculator('inss', { salary: 1621 }).value).toBeCloseTo(
      121.575,
      3,
    );
    expect(
      calculateCalculator('seguro-desemprego', { salary: 4000 }).value,
    ).toBe(2518.65);
    expect(
      calculateCalculator('irrf', { salary: 5000, deductions: 0 }).value,
    ).toBe(0);
  });

  it('supports zero-interest installments and negative hour balances', () => {
    expect(
      calculateCalculator('emprestimo', {
        amount: 1200,
        months: 12,
        rate: 0,
      }).value,
    ).toBe(100);
    expect(
      calculateCalculator('banco-de-horas', { credits: 2, debits: 5 }).value,
    ).toBe(-3);
  });
});
