import { daysToDate } from './parse';

/** Selic acumulada de cada mês, em %. Fonte: Banco Central, série 4390 do SGS. Atualize todo mês. */
export const monthlySelic: Readonly<Record<string, number>> = {
  '2025-01': 1.01,
  '2025-02': 0.99,
  '2025-03': 0.96,
  '2025-04': 1.06,
  '2025-05': 1.14,
  '2025-06': 1.1,
  '2025-07': 1.28,
  '2025-08': 1.16,
  '2025-09': 1.22,
  '2025-10': 1.28,
  '2025-11': 1.05,
  '2025-12': 1.22,
  '2026-01': 1.16,
  '2026-02': 1.0,
  '2026-03': 1.21,
  '2026-04': 1.09,
  '2026-05': 1.07,
  '2026-06': 1.12,
  '2026-07': 1.22,
  '2026-08': 1.09,
  '2026-09': 1.08,
};

const monthKey = (year: number, month: number) =>
  `${year}-${String(month).padStart(2, '0')}`;

export type LateInterest = Readonly<{
  /** Meses sem dado oficial, estimados com a última Selic conhecida. */
  estimatedMonths: number;
  percent: number;
}>;

/**
 * Juros dos tributos federais e do Simples/MEI em atraso: Selic acumulada dos meses
 * entre o vencimento e o pagamento, mais 1% no mês do pagamento.
 */
export function lateTaxInterest(
  dueDays: number,
  payDays: number,
): LateInterest {
  const due = daysToDate(dueDays);
  const pay = daysToDate(payDays);
  const known = Object.keys(monthlySelic).sort();
  const lastKnown = monthlySelic[known[known.length - 1] ?? ''] ?? 0;
  let year = due.getUTCFullYear();
  let month = due.getUTCMonth() + 2;
  let total = 0;
  let estimatedMonths = 0;

  if (month > 12) {
    month = 1;
    year += 1;
  }

  const payIndex = pay.getUTCFullYear() * 12 + pay.getUTCMonth();

  while (year * 12 + (month - 1) < payIndex) {
    const rate = monthlySelic[monthKey(year, month)];

    if (rate === undefined) {
      estimatedMonths += 1;
      total += lastKnown;
    } else {
      total += rate;
    }

    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }

  const paysInLaterMonth =
    payIndex > due.getUTCFullYear() * 12 + due.getUTCMonth();

  return { estimatedMonths, percent: total + (paysInLaterMonth ? 1 : 0) };
}
