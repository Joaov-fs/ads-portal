import { describe, expect, it } from 'vitest';

import { contentRepository } from '@/content';

import {
  bolsaFamiliaParts,
  calculateCalculator,
  calculateNetSalary,
  formatCalculatorResult,
} from './rules';
import { calculateTermination } from './termination';

describe('calculator rules', () => {
  const standardValues = {
    alimony: 0,
    amount: 1000,
    baseSalary: 1000,
    cdiRate: 10,
    childrenOver7: 1,
    childrenUnder7: 1,
    credits: 10,
    days: 30,
    daysLastMonth: 10,
    debits: 2,
    deductions: 100,
    dependents: 1,
    endDate: 20030,
    expiredVacations: 1,
    extraHours: 10,
    grossSalary: 1000,
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
    rate: 10,
    restDays: 8,
    salary: 3000,
    savingsRate: 6,
    startDate: 20000,
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

  it('pays vacation proportionally to the days taken, plus one third', () => {
    expect(
      calculateCalculator('ferias', { salary: 3000, days: 30 }).value,
    ).toBeCloseTo(4000, 2);
    expect(
      calculateCalculator('ferias', { salary: 3000, days: 15 }).value,
    ).toBeCloseTo(2000, 2);
    expect(
      calculateCalculator('ferias', { salary: 3000, days: 45 }).value,
    ).toBeCloseTo(4000, 2);
  });

  it('computes net salary with progressive INSS and the 2026 IRRF exemption', () => {
    const low = calculateNetSalary({ salary: 3500 });
    expect(low.inss).toBeCloseTo(308.6, 2);
    expect(low.irrf).toBe(0);
    expect(low.net).toBeCloseTo(3191.4, 2);

    const high = calculateNetSalary({ salary: 9000 });
    expect(high.inss).toBeCloseTo(988.09, 2);
    expect(high.irrf).toBeCloseTo(1294.55, 2);

    const withDeductions = calculateNetSalary({
      salary: 6000,
      dependents: 1,
      alimony: 200,
      otherDiscounts: 100,
    });
    expect(withDeductions.irrf).toBeCloseTo(277.97, 2);
    expect(withDeductions.net).toBeCloseTo(4780.51, 2);
  });

  it('builds a complete termination: notice grows 3 days per year up to 90', () => {
    expect(
      calculateTermination({ salary: 1000, monthsWorked: 6 }).noticeDays,
    ).toBe(30);
    expect(
      calculateTermination({ salary: 1000, monthsWorked: 60 }).noticeDays,
    ).toBe(45);
    expect(
      calculateTermination({ salary: 1000, monthsWorked: 600 }).noticeDays,
    ).toBe(90);

    const termination = calculateTermination({
      salary: 3000,
      monthsWorked: 30,
      daysLastMonth: 10,
      monthsInYear: 9,
      monthsSinceVacation: 6,
      expiredVacations: 0,
    });
    expect(termination.total).toBeCloseTo(12313.33, 2);
    expect(
      calculateCalculator('rescisao-clt', {
        salary: 3000,
        monthsWorked: 30,
        daysLastMonth: 10,
        monthsInYear: 9,
        monthsSinceVacation: 6,
        expiredVacations: 0,
      }).value,
    ).toBeCloseTo(termination.total, 6);
  });

  it('applies the October 2026 Bolsa Família values and the R$ 691 floor', () => {
    expect(
      bolsaFamiliaParts({ people: 1, childrenUnder7: 0, childrenOver7: 0 })
        .total,
    ).toBe(691);
    expect(
      bolsaFamiliaParts({ people: 4, childrenUnder7: 2, childrenOver7: 1 })
        .total,
    ).toBe(4 * 164 + 2 * 173 + 58);
    expect(
      bolsaFamiliaParts({ people: 6, childrenUnder7: 0, childrenOver7: 0 })
        .total,
    ).toBe(984);
  });

  it('uses the CDI rate informed by the person and counts real calendar days', () => {
    expect(
      calculateCalculator('cdi', {
        amount: 1000,
        cdiRate: 10,
        rate: 100,
        months: 12,
      }).value,
    ).toBeCloseTo(100, 2);
    expect(
      calculateCalculator('contador-dias', {
        startDate: 20000,
        endDate: 20030,
      }).value,
    ).toBe(30);
  });
});
