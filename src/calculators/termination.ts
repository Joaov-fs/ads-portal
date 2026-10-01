import type { CalculatorValues } from './types';

const monthDays = 30;

export type TerminationItem = Readonly<{
  amount: number;
  /** Incide FGTS de 8% a cargo da empresa sobre a verba. */
  fgtsBase?: boolean;
  label: string;
  reference: string;
}>;

export type TerminationBreakdown = Readonly<{
  fgtsBalance: number;
  items: readonly TerminationItem[];
  noticeDays: number;
  total: number;
}>;

function input(values: CalculatorValues, name: string) {
  return Math.max(0, values[name] ?? 0);
}

/** Lei 12.506/2011: 30 dias, mais 3 por ano completo, até 90 dias. */
export function noticeDaysFor(monthsWorked: number) {
  const completedYears = Math.floor(Math.max(0, monthsWorked) / 12);

  return Math.min(90, 30 + 3 * completedYears);
}

/** O aviso indenizado projeta avos de 13º e férias; fração de 15 dias ou mais conta como mês. */
function noticeAvos(noticeDays: number) {
  return (
    Math.floor(noticeDays / monthDays) + (noticeDays % monthDays >= 15 ? 1 : 0)
  );
}

/**
 * Dispensa sem justa causa com aviso prévio indenizado. Valores brutos, antes
 * de INSS e IRRF, e com saldo do FGTS estimado em 8% do salário por mês.
 */
export function calculateTermination(
  values: CalculatorValues,
): TerminationBreakdown {
  const salary = input(values, 'salary');
  const monthsWorked = input(values, 'monthsWorked');
  const daysLastMonth = Math.min(monthDays, input(values, 'daysLastMonth'));
  const monthsInYear = Math.min(12, input(values, 'monthsInYear'));
  const monthsSinceVacation = Math.min(
    11,
    input(values, 'monthsSinceVacation'),
  );
  const expiredVacations = Math.floor(input(values, 'expiredVacations'));

  const noticeDays = noticeDaysFor(monthsWorked);
  const avos = noticeAvos(noticeDays);
  const thirteenthMonths = Math.min(12, monthsInYear + avos);
  const vacationMonths = Math.min(12, monthsSinceVacation + avos);
  const fgtsBalance = salary * 0.08 * monthsWorked;
  const proportionalVacation = (salary * vacationMonths) / 12;
  const expiredVacationAmount = salary * expiredVacations;

  const items: TerminationItem[] = [
    {
      label: 'Saldo de salário',
      fgtsBase: true,
      reference: `${daysLastMonth} dias`,
      amount: (salary / monthDays) * daysLastMonth,
    },
    {
      label: 'Aviso prévio indenizado',
      fgtsBase: true,
      reference: `${noticeDays} dias`,
      amount: (salary / monthDays) * noticeDays,
    },
    {
      label: '13º salário proporcional',
      fgtsBase: true,
      reference: `${thirteenthMonths}/12 avos`,
      amount: (salary * thirteenthMonths) / 12,
    },
    {
      label: 'Férias proporcionais',
      reference: `${vacationMonths}/12 avos`,
      amount: proportionalVacation,
    },
    {
      label: '1/3 constitucional sobre férias proporcionais',
      reference: '1/3',
      amount: proportionalVacation / 3,
    },
  ];

  if (expiredVacations > 0) {
    items.push(
      {
        label: 'Férias vencidas',
        reference: `${expiredVacations} período(s)`,
        amount: expiredVacationAmount,
      },
      {
        label: '1/3 constitucional sobre férias vencidas',
        reference: '1/3',
        amount: expiredVacationAmount / 3,
      },
    );
  }

  items.push({
    label: 'Multa de 40% do FGTS',
    reference: '40% do saldo estimado',
    amount: fgtsBalance * 0.4,
  });

  return {
    fgtsBalance,
    items,
    noticeDays,
    total: items.reduce((sum, item) => sum + item.amount, 0),
  };
}

export type DismissalCost = Readonly<{
  fgtsOnVerbas: number;
  termination: TerminationBreakdown;
  total: number;
}>;

/** Custo da demissão sem justa causa para a empresa: verbas, multa e FGTS de 8% sobre as verbas. */
export function calculateDismissalCost(
  values: CalculatorValues,
): DismissalCost {
  const termination = calculateTermination(values);
  const fgtsBase = termination.items
    .filter((item) => item.fgtsBase)
    .reduce((sum, item) => sum + item.amount, 0);
  const fgtsOnVerbas = fgtsBase * 0.08;

  return {
    fgtsOnVerbas,
    termination,
    total: termination.total + fgtsOnVerbas,
  };
}
