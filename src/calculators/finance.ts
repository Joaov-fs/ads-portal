const maxScheduleMonths = 1200;

/** Alíquota regressiva do IR sobre renda fixa (Lei 11.033/2004), pelo prazo em dias. */
export function incomeTaxRateForDays(days: number) {
  if (days <= 180) return 22.5;
  if (days <= 360) return 20;
  if (days <= 720) return 17.5;

  return 15;
}

export type FixedIncomeResult = Readonly<{
  gross: number;
  net: number;
  tax: number;
  taxRate: number;
}>;

/** Rendimento de um título prefixado a taxa anual efetiva, com ou sem IR. */
export function fixedIncome(
  amount: number,
  annualRate: number,
  months: number,
  taxable = true,
): FixedIncomeResult {
  const gross = amount * ((1 + annualRate / 100) ** (months / 12) - 1);
  const taxRate = taxable
    ? incomeTaxRateForDays(Math.round((months * 365) / 12))
    : 0;
  const tax = gross * (taxRate / 100);

  return { gross, net: gross - tax, tax, taxRate };
}

export function pricePayment(
  principal: number,
  monthlyRate: number,
  months: number,
) {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;

  return (
    (principal * (monthlyRate * (1 + monthlyRate) ** months)) /
    ((1 + monthlyRate) ** months - 1)
  );
}

export type ScheduleRow = Readonly<{
  amortization: number;
  balance: number;
  interest: number;
  month: number;
  payment: number;
}>;

function clampMonths(months: number) {
  return Math.min(maxScheduleMonths, Math.max(0, Math.round(months)));
}

/** Tabela Price: parcela fixa, juros decrescentes. `monthlyRate` em decimal (0,01 = 1%). */
export function priceSchedule(
  principal: number,
  monthlyRate: number,
  months: number,
): readonly ScheduleRow[] {
  const total = clampMonths(months);
  const payment = pricePayment(principal, monthlyRate, total);
  const rows: ScheduleRow[] = [];
  let balance = principal;

  for (let month = 1; month <= total; month += 1) {
    const interest = balance * monthlyRate;
    const amortization = payment - interest;
    balance = Math.max(0, balance - amortization);
    rows.push({ amortization, balance, interest, month, payment });
  }

  return rows;
}

/** Tabela SAC: amortização constante, parcela decrescente. */
export function sacSchedule(
  principal: number,
  monthlyRate: number,
  months: number,
): readonly ScheduleRow[] {
  const total = clampMonths(months);
  const amortization = total > 0 ? principal / total : 0;
  const rows: ScheduleRow[] = [];
  let balance = principal;

  for (let month = 1; month <= total; month += 1) {
    const interest = balance * monthlyRate;
    balance = Math.max(0, balance - amortization);
    rows.push({
      amortization,
      balance,
      interest,
      month,
      payment: amortization + interest,
    });
  }

  return rows;
}

export function scheduleTotals(rows: readonly ScheduleRow[]) {
  return rows.reduce(
    (totals, row) => ({
      interest: totals.interest + row.interest,
      paid: totals.paid + row.payment,
    }),
    { interest: 0, paid: 0 },
  );
}

/** Escolhe até `limit` meses distribuídos, sempre incluindo o primeiro e o último. */
export function sampleMonths(total: number, limit = 24) {
  const count = clampMonths(total);

  if (count <= limit) {
    return Array.from({ length: count }, (_, index) => index + 1);
  }

  const step = Math.ceil(count / (limit - 1));
  const months = [1];

  for (let month = step; month < count; month += step) months.push(month);
  months.push(count);

  return months;
}

export type PrepaymentResult = Readonly<{
  interestSavedKeepingPayment: number;
  interestSavedLoweringPayment: number;
  newMonths: number;
  newPayment: number;
  originalTotal: number;
  payment: number;
  prepaid: number;
}>;

/**
 * Antecipação de parte do saldo de um financiamento Price. Compara manter a
 * parcela e encurtar o prazo com reduzir a parcela mantendo o prazo.
 */
export function prepayment(
  balance: number,
  monthlyRate: number,
  months: number,
  prepay: number,
): PrepaymentResult {
  const prepaid = Math.min(Math.max(0, prepay), balance);
  const remaining = balance - prepaid;
  const payment = pricePayment(balance, monthlyRate, months);
  const originalTotal = payment * months;
  let newMonths = 0;

  if (remaining > 0) {
    newMonths =
      monthlyRate === 0
        ? remaining / payment
        : -Math.log(1 - (remaining * monthlyRate) / payment) /
          Math.log(1 + monthlyRate);
  }

  const newPayment = pricePayment(remaining, monthlyRate, months);

  return {
    interestSavedKeepingPayment:
      originalTotal - (prepaid + payment * newMonths),
    interestSavedLoweringPayment:
      originalTotal - (prepaid + newPayment * months),
    newMonths,
    newPayment,
    originalTotal,
    payment,
    prepaid,
  };
}
