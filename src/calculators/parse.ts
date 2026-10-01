export type NumericFieldKind = 'date' | 'money' | 'number' | 'percentage';

const thousandsPattern = /^\d{1,3}(\.\d{3})+$/;
const isoDatePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
const millisecondsPerDay = 86_400_000;

/**
 * Parses money typed the Brazilian way. A lone dot followed by exactly three
 * digits ("3.500", "1.234.567") is a thousands separator; anything else with a
 * dot ("3.5", "3500.50") is a decimal point. A comma is always the decimal mark.
 */
export function parseLocalizedMoney(raw: string): number {
  const cleaned = raw.replace(/^\s*R\$\s*/i, '').replace(/\s/g, '');

  if (!cleaned || !/^[\d.,]+$/.test(cleaned)) return Number.NaN;

  if (cleaned.includes(',')) {
    return Number(cleaned.replace(/\./g, '').replace(',', '.'));
  }

  if (thousandsPattern.test(cleaned) && !cleaned.startsWith('0.')) {
    return Number(cleaned.replace(/\./g, ''));
  }

  return Number(cleaned);
}

/** Converts an ISO date (YYYY-MM-DD) into whole days since 1970-01-01 (UTC). */
export function parseIsoDateToDays(raw: string): number {
  const match = isoDatePattern.exec(raw.trim());

  if (!match) return Number.NaN;

  const [, year, month, day] = match;
  const timestamp = Date.UTC(Number(year), Number(month) - 1, Number(day));
  const date = new Date(timestamp);

  if (
    date.getUTCFullYear() !== Number(year) ||
    date.getUTCMonth() !== Number(month) - 1 ||
    date.getUTCDate() !== Number(day)
  ) {
    return Number.NaN;
  }

  return timestamp / millisecondsPerDay;
}

export function daysToDate(days: number): Date {
  return new Date(days * millisecondsPerDay);
}

/** Turns what the person typed into a number, or NaN when it is not valid. */
export function parseFieldValue(raw: string, kind: NumericFieldKind): number {
  const trimmed = raw.trim();

  if (!trimmed) return Number.NaN;
  if (kind === 'date') return parseIsoDateToDays(trimmed);
  if (kind === 'money') return parseLocalizedMoney(trimmed);

  const normalized = trimmed.replace('%', '').replace(',', '.').trim();

  return /^\d*\.?\d+$/.test(normalized) ? Number(normalized) : Number.NaN;
}
