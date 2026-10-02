import { describe, expect, it } from 'vitest';

import { contentRepository } from '@/content';

import { unemploymentInstallments } from './benefits';
import { fixedIncome, prepayment } from './finance';
import {
  bolsaFamiliaParts,
  calculateCalculator,
  calculateEmployerCost,
  calculateNetSalary,
  calculateNightShift,
  calculateOvertime,
  calculateProLabore,
  calculateThirteenth,
  disabilityBenefit,
  formatCalculatorResult,
  lateDas,
  selfEmployedInss,
} from './rules';
import { simplesNacional } from './simples';
import { calculateTermination, noticeDaysFor } from './termination';

describe('calculator rules', () => {
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
    grossSalary: 1000,
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
      calculateCalculator('seguro-desemprego', {
        salary: 4000,
        monthsWorked: 24,
        requestNumber: 1,
      }).value,
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
  it('computes the 13th, pro-labore, autonomous INSS and late DAS', () => {
    expect(
      calculateThirteenth({ salary: 3500, dependents: 0 }).net,
    ).toBeCloseTo(3500 - 308.6, 1);
    expect(calculateProLabore({ amount: 1621, dependents: 0 }).net).toBeCloseTo(
      1621 - 1621 * 0.11,
      2,
    );
    expect(selfEmployedInss(1621, 11).contribution).toBeCloseTo(178.31, 2);
    expect(selfEmployedInss(5000, 20).contribution).toBeCloseTo(1000, 2);
    expect(
      lateDas({ amount: 100, daysLate: 100, interest: 5 }).total,
    ).toBeCloseTo(125, 2);
  });

  it('follows the unemployment installment table and notice days', () => {
    expect(unemploymentInstallments(1, 12)).toBe(4);
    expect(unemploymentInstallments(1, 24)).toBe(5);
    expect(unemploymentInstallments(2, 9)).toBe(3);
    expect(unemploymentInstallments(3, 6)).toBe(3);
    expect(noticeDaysFor(12)).toBe(33);
    expect(noticeDaysFor(36)).toBe(39);
    expect(noticeDaysFor(600)).toBe(90);
  });

  it('applies the regressive tax and compares prepayment strategies', () => {
    const cdb = fixedIncome(1000, 10, 12);

    expect(cdb.taxRate).toBe(20);
    expect(cdb.net).toBeCloseTo(cdb.gross * 0.8, 6);
    expect(fixedIncome(1000, 10, 12, false).tax).toBe(0);

    const result = prepayment(10000, 0.01, 24, 2000);

    expect(result.newMonths).toBeLessThan(24);
    expect(result.interestSavedKeepingPayment).toBeGreaterThan(0);
    expect(result.newPayment).toBeLessThan(result.payment);
  });
  it('pays overtime at 50% and 100% with the DSR reflex', () => {
    const ot = calculateOvertime({
      salary: 2200,
      monthlyHours: 220,
      extraHours50: 10,
      extraHours100: 5,
      workDays: 25,
      restDays: 5,
    });

    expect(ot.hourly).toBe(10);
    expect(ot.pay50).toBe(150);
    expect(ot.pay100).toBe(100);
    expect(ot.dsr).toBeCloseTo(50, 6);
    expect(ot.total).toBeCloseTo(300, 6);
  });

  it('computes IRRF through INSS, dependents and the 2026 reduction', () => {
    expect(calculateCalculator('irrf', { salary: 5000 }).value).toBe(0);
    expect(calculateCalculator('irrf', { salary: 9000 }).value).toBeCloseTo(
      1294.55,
      2,
    );
  });

  it('computes night shift, employer cost and disability benefit', () => {
    expect(
      calculateNightShift({
        salary: 2200,
        monthlyHours: 220,
        nightHours: 100,
        rate: 20,
      }).additional,
    ).toBeCloseTo(200, 6);
    expect(
      calculateEmployerCost({ salary: 1200, rate: 0, benefits: 0 }).total,
    ).toBeCloseTo(1200 * (1 + 1 / 12 + 1 / 9) * 1.08, 6);
    expect(disabilityBenefit(1000, 60)).toBe(1621);
    expect(disabilityBenefit(20000, 100)).toBe(8475.55);
  });

  it('derives the Simples Nacional effective rate from the annex table', () => {
    const result = simplesNacional(20000, 240000, 3);

    expect(result.bracket).toBe(2);
    expect(result.effectiveRate).toBeCloseTo(7.3, 6);
    expect(result.das).toBeCloseTo(1460, 4);
    expect(simplesNacional(1000, 5000000, 1).outOfLimit).toBe(true);
  });
});
