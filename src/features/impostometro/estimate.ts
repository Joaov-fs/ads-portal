/**
 * Estimativa de arrecadação federal em 2026.
 *
 * Base oficial: Receita Federal, "Análise da Arrecadação das Receitas Federais" de agosto/2026,
 * com R$ 2,11 trilhões arrecadados de janeiro a agosto. A taxa por segundo é a média desse período
 * e a conta ignora a sazonalidade do ano. Atualize `baseCollected` e `baseUntil` a cada boletim mensal.
 */
export const baseCollected = 2_110_000_000_000;

/** Início de 2026 e fim de agosto, no horário de Brasília (UTC−3). */
const yearStart = Date.parse('2026-01-01T00:00:00-03:00');
const baseUntil = Date.parse('2026-09-01T00:00:00-03:00');

export const collectedPerSecond =
  baseCollected / ((baseUntil - yearStart) / 1000);

/** População estimada do Brasil (IBGE), arredondada. */
export const population = 213_000_000;

export function estimateCollected(now: number): number {
  return Math.max(0, collectedPerSecond * ((now - yearStart) / 1000));
}

export const estimateFacts = {
  perSecond: collectedPerSecond,
  perDay: collectedPerSecond * 86_400,
  perPersonPerDay: (collectedPerSecond * 86_400) / population,
};

const brl = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  maximumFractionDigits: 0,
  style: 'currency',
});

export const formatBrl = (value: number) => brl.format(value);
