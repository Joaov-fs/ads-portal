import { describe, expect, it } from 'vitest';

import {
  baseCollected,
  collectedPerSecond,
  estimateCollected,
} from './estimate';

describe('impostômetro', () => {
  it('bate com a base oficial no fim de agosto e cresce depois', () => {
    const endOfAugust = Date.parse('2026-09-01T00:00:00-03:00');

    expect(Math.round(estimateCollected(endOfAugust))).toBe(baseCollected);
    expect(estimateCollected(endOfAugust + 1000)).toBeGreaterThan(
      baseCollected,
    );
    expect(collectedPerSecond).toBeGreaterThan(100_000);
    expect(collectedPerSecond).toBeLessThan(101_000);
  });

  it('não é negativo antes do início do ano', () => {
    expect(estimateCollected(Date.parse('2025-12-01T00:00:00-03:00'))).toBe(0);
  });
});
