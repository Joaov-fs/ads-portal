import { unemploymentBenefit } from './benefits';
import {
  bolsaFamilia2026,
  inssCeiling2026,
  irrfDependentDeduction,
  minimumWage2026,
} from './constants';
import {
  fixedIncome,
  prepayment,
  pricePayment,
  priceSchedule,
  sacSchedule,
  scheduleTotals,
} from './finance';
import { lateTaxInterest } from './selic';
import { resolveSimplesAnnex, simplesNacional } from './simples';
import {
  calculateDismissalCost,
  calculateTermination,
  noticeDaysFor,
} from './termination';
import type {
  CalculatorId,
  CalculatorValues,
  CalculationResult,
} from './types';

const monthDays = 30;

function value(values: CalculatorValues, key: string) {
  return values[key] ?? 0;
}

function percentage(base: number, rate: number) {
  return base * (rate / 100);
}

function result(
  label: string,
  amount: number,
  explanation: string,
): CalculationResult {
  return {
    label,
    value: Number.isFinite(amount) ? amount : 0,
    explanation,
  };
}

const nonCurrencyResultIds = new Set<CalculatorId>([
  'banco-de-horas',
  'contador-dias',
  'conversao-taxa',
  'das-limite-mei',
  'fator-r',
]);

export function formatCalculatorResult(id: CalculatorId, amount: number) {
  if (id === 'conversao-taxa' || id === 'das-limite-mei' || id === 'fator-r') {
    return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(amount)}%`;
  }

  if (nonCurrencyResultIds.has(id)) {
    return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(
      amount,
    );
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}

export function progressiveInss(base: number) {
  const brackets = [
    [1621, 7.5],
    [2902.84, 9],
    [4354.27, 12],
    [8475.55, 14],
  ] as const;
  let previousLimit = 0;
  let total = 0;
  for (const [limit, rate] of brackets) {
    total += percentage(
      Math.max(0, Math.min(base, limit) - previousLimit),
      rate,
    );
    previousLimit = limit;
  }
  return total;
}

export function irrfBracketTax(base: number) {
  const brackets = [
    [2428.8, 0],
    [2826.65, 7.5],
    [3751.05, 15],
    [4664.68, 22.5],
    [Infinity, 27.5],
  ] as const;
  let previousLimit = 0;
  let total = 0;
  for (const [limit, rate] of brackets) {
    total += percentage(
      Math.max(0, Math.min(base, limit) - previousLimit),
      rate,
    );
    previousLimit = limit;
  }
  return total;
}

export function irrfReduction(taxableIncome: number, tableTax: number) {
  return taxableIncome <= 5000
    ? tableTax
    : taxableIncome <= 7350
      ? Math.max(0, 978.62 - 0.133145 * taxableIncome)
      : 0;
}

export function progressiveIrrf(base: number, taxableIncome = base) {
  const total = irrfBracketTax(base);
  const reduction = irrfReduction(taxableIncome, total);
  return Math.max(0, total - reduction);
}

export type BolsaFamiliaParts = Readonly<{
  citizenshipIncome: number;
  complement: number;
  earlyChildhood: number;
  total: number;
  variable: number;
}>;

export function bolsaFamiliaParts(values: CalculatorValues): BolsaFamiliaParts {
  const people = Math.max(0, Math.floor(value(values, 'people')));
  const children = Math.max(0, Math.floor(value(values, 'childrenUnder7')));
  const others = Math.max(0, Math.floor(value(values, 'childrenOver7')));
  const citizenshipIncome =
    people * bolsaFamilia2026.citizenshipIncomePerPerson;
  const earlyChildhood = children * bolsaFamilia2026.earlyChildhoodPerChild;
  const variable = others * bolsaFamilia2026.variablePerMember;
  const subtotal = citizenshipIncome + earlyChildhood + variable;
  const complement =
    people > 0 ? Math.max(0, bolsaFamilia2026.familyMinimum - subtotal) : 0;

  return {
    citizenshipIncome,
    complement,
    earlyChildhood,
    total: subtotal + complement,
    variable,
  };
}

export type NetSalaryBreakdown = Readonly<{
  alimony: number;
  dependents: number;
  gross: number;
  inss: number;
  irrf: number;
  irrfBase: number;
  net: number;
  otherDiscounts: number;
}>;

/** Salário líquido mensal com INSS, IRRF (dependentes e pensão deduzidos) e outros descontos. */
export function calculateNetSalary(
  values: CalculatorValues,
): NetSalaryBreakdown {
  const gross = Math.max(0, value(values, 'salary'));
  const dependents = Math.max(0, Math.floor(value(values, 'dependents')));
  const alimony = Math.max(0, value(values, 'alimony'));
  const otherDiscounts = Math.max(0, value(values, 'otherDiscounts'));
  const inss = progressiveInss(gross);
  const irrfBase = Math.max(
    0,
    gross - inss - dependents * irrfDependentDeduction - alimony,
  );
  const irrf = progressiveIrrf(irrfBase, gross);

  return {
    alimony,
    dependents,
    gross,
    inss,
    irrf,
    irrfBase,
    net: gross - inss - irrf - alimony - otherDiscounts,
    otherDiscounts,
  };
}

export function plrTax(base: number) {
  if (base <= 8214.4) return 0;
  if (base <= 9922.28) return base * 0.075 - 616.08;
  if (base <= 13167) return base * 0.15 - 1360.25;
  if (base <= 16380.38) return base * 0.225 - 2347.78;
  return base * 0.275 - 3166.8;
}

export type ThirteenthBreakdown = Readonly<{
  firstInstallment: number;
  gross: number;
  inss: number;
  irrf: number;
  net: number;
  secondInstallment: number;
}>;

/** 13º salário integral: o INSS e o IRRF são apurados só sobre o 13º e descontados na 2ª parcela. */
export function calculateThirteenth(
  values: CalculatorValues,
): ThirteenthBreakdown {
  const gross = Math.max(0, value(values, 'salary'));
  const dependents = Math.max(0, Math.floor(value(values, 'dependents')));
  const inss = progressiveInss(gross);
  const irrf = progressiveIrrf(
    Math.max(0, gross - inss - dependents * irrfDependentDeduction),
    gross,
  );
  const net = gross - inss - irrf;

  return {
    firstInstallment: gross / 2,
    gross,
    inss,
    irrf,
    net,
    secondInstallment: net - gross / 2,
  };
}

export type ProLaboreBreakdown = Readonly<{
  gross: number;
  inss: number;
  inssBase: number;
  irrf: number;
  net: number;
}>;

/** Pró-labore: INSS de 11% sobre a base limitada ao piso e ao teto, e IRRF pela tabela mensal. */
export function calculateProLabore(
  values: CalculatorValues,
): ProLaboreBreakdown {
  const gross = Math.max(0, value(values, 'amount'));
  const dependents = Math.max(0, Math.floor(value(values, 'dependents')));
  const inssBase = Math.min(Math.max(gross, minimumWage2026), inssCeiling2026);
  const inss = inssBase * 0.11;
  const irrf = progressiveIrrf(
    Math.max(0, gross - inss - dependents * irrfDependentDeduction),
    gross,
  );

  return { gross, inss, inssBase, irrf, net: gross - inss - irrf };
}

/** Contribuinte individual: 5% e 11% incidem sobre o salário mínimo; 20% sobre a base entre o piso e o teto. */
export function selfEmployedInss(amount: number, rate: number) {
  const fixedBase = rate === 5 || rate === 11;
  const base = fixedBase
    ? minimumWage2026
    : Math.min(Math.max(amount, minimumWage2026), inssCeiling2026);

  return { base, contribution: base * (rate / 100) };
}

export type LateDasBreakdown = Readonly<{
  daysLate: number;
  estimatedMonths: number;
  fine: number;
  finePercent: number;
  interest: number;
  interestPercent: number;
  total: number;
}>;

/**
 * DAS em atraso: multa de 0,33% por dia limitada a 20%, mais juros pela Selic acumulada
 * (e 1% no mês do pagamento). Sem as datas, usa os dias e os juros informados.
 */
export function lateDas(values: CalculatorValues): LateDasBreakdown {
  const original = Math.max(0, value(values, 'amount'));
  const dueDate = value(values, 'dueDate');
  const payDate = value(values, 'payDate');
  const hasDates = dueDate > 0 && payDate > 0;
  const daysLate = hasDates
    ? Math.max(0, payDate - dueDate)
    : Math.max(0, value(values, 'daysLate'));
  const late =
    hasDates && daysLate > 0 ? lateTaxInterest(dueDate, payDate) : undefined;
  const interestPercent = late
    ? late.percent
    : hasDates
      ? 0
      : Math.max(0, value(values, 'interest'));
  const finePercent = Math.min(20, daysLate * 0.33);
  const fine = original * (finePercent / 100);
  const interest = original * (interestPercent / 100);

  return {
    daysLate,
    estimatedMonths: late?.estimatedMonths ?? 0,
    fine,
    finePercent,
    interest,
    interestPercent,
    total: original + fine + interest,
  };
}

export type VacationBreakdown = Readonly<{
  allowance: number;
  allowanceThird: number;
  days: number;
  gross: number;
  inss: number;
  irrf: number;
  net: number;
  sellDays: number;
  taken: number;
  takenThird: number;
}>;

/** Férias: dias gozados com 1/3 (tributados) e abono pecuniário com 1/3 (isento de INSS e IR). */
export function calculateVacation(values: CalculatorValues): VacationBreakdown {
  const salary = Math.max(0, value(values, 'salary'));
  const days = Math.min(monthDays, Math.max(0, value(values, 'days')));
  const sellDays = Math.min(
    10,
    monthDays - days >= 0 ? Math.max(0, value(values, 'sellDays')) : 0,
    monthDays - days,
  );
  const dependents = Math.max(0, Math.floor(value(values, 'dependents')));
  const taken = (salary / monthDays) * days;
  const allowance = (salary / monthDays) * sellDays;
  const takenGross = taken + taken / 3;
  const inss = progressiveInss(takenGross);
  const irrf = progressiveIrrf(
    Math.max(0, takenGross - inss - dependents * irrfDependentDeduction),
    takenGross,
  );
  const gross = takenGross + allowance + allowance / 3;

  return {
    allowance,
    allowanceThird: allowance / 3,
    days,
    gross,
    inss,
    irrf,
    net: gross - inss - irrf,
    sellDays,
    taken,
    takenThird: taken / 3,
  };
}

export type OvertimeBreakdown = Readonly<{
  dsr: number;
  hourly: number;
  hours100: number;
  hours50: number;
  pay100: number;
  pay50: number;
  total: number;
}>;

/** Horas extras a 50% e 100%, com o reflexo no descanso semanal remunerado (Súmula 172 do TST). */
export function calculateOvertime(values: CalculatorValues): OvertimeBreakdown {
  const monthlyHours = Math.max(1, value(values, 'monthlyHours'));
  const hourly = Math.max(0, value(values, 'salary')) / monthlyHours;
  const hours50 = Math.max(0, value(values, 'extraHours50'));
  const hours100 = Math.max(0, value(values, 'extraHours100'));
  const pay50 = hourly * hours50 * 1.5;
  const pay100 = hourly * hours100 * 2;
  const workDays = Math.max(0, value(values, 'workDays'));
  const dsr =
    workDays > 0
      ? ((pay50 + pay100) / workDays) * Math.max(0, value(values, 'restDays'))
      : 0;

  return {
    dsr,
    hourly,
    hours100,
    hours50,
    pay100,
    pay50,
    total: pay50 + pay100 + dsr,
  };
}

export type NightShiftBreakdown = Readonly<{
  additional: number;
  hourly: number;
  reducedHourExtra: number;
}>;

/** Adicional noturno sobre o valor-hora. A hora reduzida (52min30s) é calculada à parte. */
export function calculateNightShift(
  values: CalculatorValues,
): NightShiftBreakdown {
  const hourly =
    Math.max(0, value(values, 'salary')) /
    Math.max(1, value(values, 'monthlyHours'));
  const hours = Math.max(0, value(values, 'nightHours'));
  const rate = Math.max(0, value(values, 'rate'));

  return {
    additional: hourly * hours * (rate / 100),
    hourly,
    reducedHourExtra: hourly * hours * (60 / 52.5 - 1) * (1 + rate / 100),
  };
}

export type EmployerCostBreakdown = Readonly<{
  benefits: number;
  charges: number;
  fgts: number;
  provisions: number;
  salary: number;
  total: number;
}>;

/** Custo mensal do empregado CLT: salário, provisões de 13º e férias, FGTS, encargos patronais e benefícios. */
export function calculateEmployerCost(
  values: CalculatorValues,
): EmployerCostBreakdown {
  const salary = Math.max(0, value(values, 'salary'));
  const provisions = salary * (1 / 12 + (1 / 12) * (4 / 3));
  const base = salary + provisions;
  const fgts = base * 0.08;
  const charges = base * (Math.max(0, value(values, 'rate')) / 100);
  const benefits = Math.max(0, value(values, 'benefits'));

  return {
    benefits,
    charges,
    fgts,
    provisions,
    salary,
    total: base + fgts + charges + benefits,
  };
}

/** Auxílio por incapacidade: percentual sobre a média, entre o salário mínimo e o teto do INSS. */
export function disabilityBenefit(average: number, ratePercent: number) {
  const raw = Math.max(0, average) * (Math.max(0, ratePercent) / 100);

  return Math.min(inssCeiling2026, Math.max(minimumWage2026, raw));
}

export function calculateCalculator(
  id: CalculatorId,
  values: CalculatorValues,
): CalculationResult {
  const salary = value(values, 'salary');
  const amount = value(values, 'amount');
  const rate = value(values, 'rate');
  const months = value(values, 'months');

  switch (id) {
    case 'rescisao-clt':
      return result(
        'Total bruto estimado da rescisão',
        calculateTermination(values).total,
        'Considera dispensa sem justa causa com aviso prévio indenizado: soma saldo de salário, aviso, 13º e férias proporcionais com o terço constitucional, férias vencidas e multa de 40% do FGTS. Os valores são brutos, antes de INSS e IRRF.',
      );
    case 'salario-liquido':
      return result(
        'Salário líquido estimado',
        calculateNetSalary(values).net,
        'Desconta do salário bruto o INSS pelas faixas progressivas de 2026, o IRRF sobre a base já reduzida por INSS, dependentes e pensão, e os demais descontos informados.',
      );
    case 'ferias':
      return result(
        'Férias brutas estimadas',
        calculateVacation(values).gross,
        'Paga o salário proporcional aos dias de férias e soma o adicional constitucional de um terço, inclusive sobre os dias vendidos (abono pecuniário). Antes dos descontos de INSS e IRRF.',
      );
    case 'seguro-desemprego':
      return result(
        'Valor de cada parcela',
        unemploymentBenefit(salary, minimumWage2026),
        'Aplica as faixas oficiais de 2026 à média dos três últimos salários, respeitando o piso do salário mínimo e o teto do benefício. O número de parcelas depende dos meses trabalhados e de quantas vezes você já solicitou.',
      );
    case 'decimo-salario':
      return result(
        '13º salário líquido estimado',
        calculateThirteenth(values).net,
        'O 13º integral equivale a um salário. O INSS e o IRRF são calculados só sobre o 13º, separados do salário do mês, e descontados na segunda parcela. A primeira parcela é metade do valor bruto, sem descontos.',
      );
    case 'irrf':
      return result(
        'IRRF estimado',
        calculateNetSalary(values).irrf,
        'Desconta do rendimento o INSS, os dependentes e a pensão alimentícia, aplica a tabela progressiva de 2026 e subtrai a redução da Lei 15.270/2025, que zera o imposto até R$ 5.000.',
      );
    case 'horas-extras':
      return result(
        'Total das horas extras',
        calculateOvertime(values).total,
        'Calcula o valor da hora dividindo o salário pela jornada mensal, paga 50% a mais nas horas extras comuns e 100% a mais nas de domingos e feriados, e soma o reflexo no descanso semanal remunerado.',
      );
    case 'fgts-multa':
      return result(
        'FGTS e multa estimados',
        salary * months * 0.08 * (1 + rate / 100),
        'Aplica 8% mensal ao salário e a multa percentual indicada sobre o saldo estimado.',
      );
    case 'inss':
      return result(
        'INSS estimado',
        progressiveInss(salary),
        'Aplicação progressiva de faixas de referência sobre o salário informado.',
      );
    case 'contador-dias':
      return result(
        'Dias corridos entre as datas',
        Math.abs(value(values, 'endDate') - value(values, 'startDate')),
        'Conta os dias corridos entre as duas datas, sem incluir o dia inicial. Para prazos legais, confirme se a regra aplicável inclui o dia inicial ou o final.',
      );
    case 'juros-compostos':
      return result(
        'Montante projetado',
        amount * (1 + rate / 100) ** months,
        'Capitalização composta usando taxa e período na mesma unidade.',
      );
    case 'porcentagem':
      return result(
        'Resultado da porcentagem',
        percentage(amount, rate),
        'Aplica a porcentagem informada ao valor-base.',
      );
    case 'cdi':
      return result(
        'Rendimento bruto estimado',
        fixedIncome(
          amount,
          (value(values, 'cdiRate') * rate) / 100,
          months,
          false,
        ).gross,
        'Aplica ao valor investido a taxa anual do CDI que você informou, multiplicada pelo percentual contratado, pelo prazo em meses. Rendimento bruto, antes do Imposto de Renda.',
      );
    case 'financiamento-sac-price': {
      const monthlyRate = rate / 100;
      const price = scheduleTotals(priceSchedule(amount, monthlyRate, months));
      const sac = scheduleTotals(sacSchedule(amount, monthlyRate, months));
      return result(
        'Economia de juros do SAC sobre a Price',
        price.interest - sac.interest,
        'Compara o total de juros pago nos dois sistemas, com o mesmo valor, taxa e prazo. O SAC começa com parcelas maiores, mas amortiza mais rápido e paga menos juros no total.',
      );
    }
    case 'reajuste-aluguel':
      return result(
        'Novo aluguel estimado',
        amount * (1 + rate / 100),
        'Aplica o índice percentual informado ao aluguel atual.',
      );
    case 'bolsa-familia': {
      const parts = bolsaFamiliaParts(values);
      return result(
        'Valor mensal estimado do Bolsa Família',
        parts.total,
        'Soma a Renda de Cidadania por pessoa, o Benefício Primeira Infância e o Variável Familiar; quando a soma fica abaixo do piso, o Benefício Complementar garante o mínimo de R$ 691 por família. Valores da folha de outubro de 2026.',
      );
    }
    case 'pis':
      return result(
        'Abono salarial estimado',
        (minimumWage2026 * Math.min(12, months)) / 12,
        'Um salário mínimo dividido por 12, multiplicado pelos meses trabalhados no ano-base. Cada mês com pelo menos 15 dias de trabalho conta como mês inteiro. Só tem direito quem cumpre os requisitos de renda e cadastro.',
      );
    case 'das-limite-mei':
      return result(
        'Percentual do limite anual usado',
        percentage(amount, 100 / 81000),
        'Compara o faturamento informado ao limite anual de referência do MEI.',
      );
    case 'custo-funcionario-clt':
      return result(
        'Custo mensal total estimado',
        calculateEmployerCost(values).total,
        'Soma ao salário as provisões mensais de 13º e férias com 1/3, o FGTS de 8% e os encargos patronais informados sobre essa base, e os benefícios pagos.',
      );
    case 'fator-r':
      return result(
        'Fator R',
        percentage(value(values, 'payroll'), 100 / Math.max(1, amount)),
        'Divide folha de salários pela receita bruta dos últimos 12 meses.',
      );
    case 'salario-por-hora':
      return result(
        'Valor por hora',
        salary / value(values, 'monthlyHours'),
        'Divide o salário mensal pela carga horária mensal informada.',
      );
    case 'adicional-noturno':
      return result(
        'Adicional noturno estimado',
        calculateNightShift(values).additional,
        'Aplica o adicional noturno (mínimo de 20%) sobre o valor da hora trabalhada entre 22h e 5h. A hora noturna reduzida de 52min30s é mostrada à parte, porque depende de como a jornada foi contratada.',
      );
    case 'dsr':
      return result(
        'DSR estimado',
        (amount * value(values, 'restDays')) /
          Math.max(1, value(values, 'workDays')),
        'Rateia o valor variável pelos dias úteis e repousos informados.',
      );
    case 'banco-de-horas':
      return result(
        'Saldo de horas',
        value(values, 'credits') - value(values, 'debits'),
        'Diferença entre créditos e débitos de horas registrados.',
      );
    case 'ferias-proporcionais':
      return result(
        'Férias proporcionais brutas',
        (((salary * Math.min(12, months)) / 12) * 4) / 3,
        'Divide o salário em 12 avos, multiplica pelos meses do período aquisitivo (fração de 15 dias ou mais conta como mês) e soma o terço constitucional. Antes de INSS e IRRF.',
      );
    case 'decimo-proporcional':
      return result(
        '13º proporcional bruto',
        (salary * Math.min(12, months)) / 12,
        'Divide o salário em 12 avos e multiplica pelos meses trabalhados no ano (fração de 15 dias ou mais conta como mês). Valor bruto, antes de INSS e IRRF.',
      );
    case 'aviso-previo':
      return result(
        'Aviso prévio indenizado estimado',
        (salary / monthDays) * noticeDaysFor(value(values, 'monthsWorked')),
        'O aviso prévio é de 30 dias mais 3 dias por ano completo de contrato, até o limite de 90 dias (Lei 12.506/2011). O valor é o salário proporcional a esses dias.',
      );
    case 'plr-ppr-liquido':
      return result(
        'PLR/PPR líquida estimada',
        amount - plrTax(amount),
        'Desconta o IR conforme a tabela exclusiva de PLR vigente, sem confundir com a tabela mensal comum.',
      );
    case 'vale-transporte':
      return result(
        'Desconto estimado de vale-transporte',
        Math.min(percentage(salary, 6), amount),
        'Limita o desconto a 6% do salário-base ou ao custo mensal informado.',
      );
    case 'insalubridade':
      return result(
        'Adicional de insalubridade',
        percentage(value(values, 'baseSalary'), rate),
        'Aplica o grau percentual informado sobre a base definida pelo contrato ou norma aplicável.',
      );
    case 'periculosidade':
      return result(
        'Adicional de periculosidade',
        percentage(salary, 30),
        'Aplica o adicional de 30% sobre o salário-base informado.',
      );
    case 'pensao-alimenticia':
      return result(
        'Pensão estimada',
        percentage(salary, rate),
        'Aplica o percentual definido ao valor-base informado; decisão judicial pode estabelecer outra base.',
      );
    case 'custo-demissao':
      return result(
        'Custo estimado da demissão para a empresa',
        calculateDismissalCost(values).total,
        'Soma as verbas rescisórias de uma dispensa sem justa causa, a multa de 40% do FGTS e o FGTS de 8% sobre saldo de salário, aviso prévio e 13º. Não inclui encargos patronais de INSS, que variam conforme o regime tributário.',
      );
    case 'pro-labore':
      return result(
        'Pró-labore líquido estimado',
        calculateProLabore(values).net,
        'Desconta o INSS de 11% do sócio, sobre uma base entre o salário mínimo e o teto do INSS, e o IRRF pela tabela mensal de 2026, com a dedução de dependentes.',
      );
    case 'inss-autonomo':
      return result(
        'Contribuição mensal ao INSS',
        selfEmployedInss(amount, rate).contribution,
        'Aplica a alíquota escolhida à base de contribuição. A base nunca fica abaixo do salário mínimo nem acima do teto do INSS, e as alíquotas de 5% e 11% incidem sempre sobre o salário mínimo.',
      );
    case 'simples-nacional':
      return result(
        'DAS estimado',
        simplesNacional(
          amount,
          value(values, 'rbt12'),
          resolveSimplesAnnex(
            value(values, 'annex'),
            value(values, 'payroll12'),
            value(values, 'rbt12'),
          ).annex,
        ).das,
        'Encontra a faixa pela receita bruta dos últimos 12 meses, calcula a alíquota efetiva (receita × alíquota nominal − parcela a deduzir, dividido pela receita) e aplica sobre a receita do mês. Em serviços, a folha de salários informada define pelo Fator R se vale o Anexo III ou o V.',
      );
    case 'excesso-limite-mei':
      return result(
        'Excesso sobre limite anual',
        Math.max(0, amount - 81000),
        'Compara o faturamento anual informado ao limite de referência de R$ 81.000.',
      );
    case 'das-mei-atraso':
      return result(
        'DAS atualizado estimado',
        lateDas(values).total,
        'Soma à guia original a multa de mora, de 0,33% por dia de atraso e limitada a 20%, e os juros: a Selic acumulada dos meses entre o vencimento e o pagamento, mais 1% no mês em que você paga.',
      );
    case 'bpc':
      return result(
        'Renda por pessoa',
        amount / Math.max(1, value(values, 'people')),
        'Divide a renda familiar pelo número de pessoas informado; a concessão depende de análise oficial.',
      );
    case 'salario-maternidade':
      return result(
        'Salário-maternidade estimado',
        salary * Math.min(6, Math.max(0, months)),
        'Multiplica a remuneração mensal pelos meses de afastamento: 4 meses (120 dias) em regra, ou 6 meses quando a empresa participa do Empresa Cidadã.',
      );
    case 'auxilio-incapacidade':
      return result(
        'Benefício estimado',
        disabilityBenefit(amount, rate),
        'Aplica o percentual sobre a média das contribuições e respeita o piso (salário mínimo) e o teto do INSS. A concessão depende de perícia do INSS.',
      );
    case 'ipva':
      return result(
        'IPVA estimado',
        percentage(amount, rate),
        'Aplica a alíquota estadual informada sobre o valor venal do veículo.',
      );
    case 'cdb-liquido':
      return result(
        'Rendimento líquido do CDB',
        fixedIncome(amount, rate, months).net,
        'Calcula o rendimento bruto pela taxa anual e pelo prazo e desconta o Imposto de Renda pela tabela regressiva: 22,5% até 180 dias, 20% até 360, 17,5% até 720 e 15% acima disso.',
      );
    case 'cdb-poupanca':
      return result(
        'Vantagem líquida do CDB sobre a poupança',
        fixedIncome(amount, rate, months).net -
          fixedIncome(amount, value(values, 'savingsRate'), months, false)
            .gross,
        'Compara o rendimento do CDB depois do Imposto de Renda com o da poupança, que é isenta. Valor negativo significa que a poupança rende mais no seu cenário.',
      );
    case 'tesouro-selic':
      return result(
        'Rendimento líquido do Tesouro Selic',
        fixedIncome(amount, rate, months).net,
        'Aplica a taxa anual informada pelo prazo e desconta o Imposto de Renda pela tabela regressiva. Não inclui a taxa de custódia da B3 nem a taxa da corretora.',
      );
    case 'lci-lca':
      return result(
        'Rendimento líquido estimado',
        fixedIncome(amount, rate, months, false).net,
        'LCI e LCA são isentas de Imposto de Renda para pessoa física, então o rendimento líquido é igual ao bruto.',
      );
    case 'conversao-taxa':
      return result(
        'Taxa anual equivalente',
        ((1 + rate / 100) ** 12 - 1) * 100,
        'Converte uma taxa mensal em taxa efetiva anual.',
      );
    case 'juros-simples':
      return result(
        'Montante projetado',
        amount * (1 + (rate / 100) * months),
        'Aplica juros sem capitalização sobre o valor inicial.',
      );
    case 'emprestimo': {
      const monthlyRate = rate / 100;
      return result(
        'Parcela estimada',
        pricePayment(amount, monthlyRate, months),
        'Usa o sistema Price com taxa mensal e prazo informados.',
      );
    }
    case 'amortizacao-antecipada':
      return result(
        'Economia de juros ao antecipar',
        prepayment(amount, rate / 100, months, value(values, 'prepayment'))
          .interestSavedKeepingPayment,
        'Considera um financiamento no sistema Price. Ao amortizar parte do saldo e manter a parcela, o prazo encurta e você deixa de pagar os juros dos meses eliminados.',
      );
  }
}
