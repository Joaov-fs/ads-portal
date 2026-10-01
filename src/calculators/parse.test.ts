import { describe, expect, it } from 'vitest';

import { parseFieldValue, parseLocalizedMoney } from './parse';

describe('parseLocalizedMoney', () => {
  it('reads a lone dot followed by three digits as a thousands separator', () => {
    expect(parseLocalizedMoney('3.500')).toBe(3500);
    expect(parseLocalizedMoney('1.234.567')).toBe(1234567);
  });

  it('reads the comma as the decimal mark', () => {
    expect(parseLocalizedMoney('3.500,50')).toBe(3500.5);
    expect(parseLocalizedMoney('3,5')).toBe(3.5);
    expect(parseLocalizedMoney('R$ 1.000,00')).toBe(1000);
  });

  it('keeps other dotted values as decimals', () => {
    expect(parseLocalizedMoney('3500.50')).toBe(3500.5);
    expect(parseLocalizedMoney('0.500')).toBe(0.5);
    expect(parseLocalizedMoney('3500')).toBe(3500);
  });

  it('rejects text, negatives and malformed numbers', () => {
    expect(parseLocalizedMoney('abc')).toBeNaN();
    expect(parseLocalizedMoney('-5')).toBeNaN();
    expect(parseLocalizedMoney('1.2.3')).toBeNaN();
  });
});

describe('parseFieldValue', () => {
  it('accepts a comma or a dot in percentage and number fields', () => {
    expect(parseFieldValue('10,5', 'percentage')).toBe(10.5);
    expect(parseFieldValue('12', 'number')).toBe(12);
    expect(parseFieldValue('', 'number')).toBeNaN();
  });

  it('turns ISO dates into whole days and rejects impossible dates', () => {
    const start = parseFieldValue('2026-10-01', 'date');
    const end = parseFieldValue('2026-10-31', 'date');

    expect(end - start).toBe(30);
    expect(parseFieldValue('2026-02-30', 'date')).toBeNaN();
  });
});
