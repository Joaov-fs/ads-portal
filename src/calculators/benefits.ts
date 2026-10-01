/**
 * Parcelas do seguro-desemprego (Resolução CODEFAT): dependem da solicitação
 * (1ª, 2ª, 3ª ou mais) e dos meses trabalhados. Retorna 0 quando o tempo não
 * atinge o mínimo exigido.
 */
export function unemploymentInstallments(
  requestNumber: number,
  monthsWorked: number,
) {
  const request = Math.min(3, Math.max(1, Math.floor(requestNumber)));
  const months = Math.max(0, monthsWorked);

  if (months >= 24) return 5;
  if (months >= 12) return 4;
  if (request === 2 && months >= 9) return 3;
  if (request === 3 && months >= 6) return 3;

  return 0;
}

/** Valor da parcela do seguro-desemprego a partir da média dos três últimos salários (2026). */
export function unemploymentBenefit(
  averageSalary: number,
  minimumWage: number,
) {
  const raw =
    averageSalary <= 2222.17
      ? averageSalary * 0.8
      : 1777.74 + (averageSalary - 2222.17) * 0.5;

  return Math.min(Math.max(raw, minimumWage), 2518.65);
}
