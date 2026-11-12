import { describe, expect, it } from 'vitest';

import {
  baseCollected,
  collectedPerSecond,
  estimateCollected,
} from './estimate';

describe('impostômetro', () => {
  it('bate com a base oficial no fim de setembro e cresce depois', () => {
    const endOfSeptember = Date.parse('2026-10-01T00:00:00-03:00');

    expect(Math.round(estimateCollected(endOfSeptember))).toBe(baseCollected);
    expect(estimateCollected(endOfSeptember + 1000)).toBeGreaterThan(
      baseCollected,
    );
    expect(collectedPerSecond).toBeGreaterThan(99_000);
    expect(collectedPerSecond).toBeLessThan(100_500);
  });

  it('não é negativo antes do início do ano', () => {
    expect(estimateCollected(Date.parse('2025-12-01T00:00:00-03:00'))).toBe(0);
  });
});
