import {
  bolsaFamilia2026,
  bolsaFamiliaParts,
  calculateNetSalary,
} from './rules';
import { calculateTermination } from './termination';
import type {
  CalculatorDecision,
  CalculatorId,
  CalculatorValues,
  CalculationResult,
  DecisionBreakdownItem,
  DecisionStatementRow,
} from './types';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const number = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
const percent = (value: number) => `${number.format(value)}%`;
const money = (value: number) => currency.format(value);
const input = (values: CalculatorValues, name: string) => values[name] ?? 0;
const nonCurrencyIds = new Set<CalculatorId>([
  'banco-de-horas',
  'contador-dias',
  'conversao-taxa',
  'das-limite-mei',
  'fator-r',
]);
function displayValue(id: CalculatorId, value: number) {
  return nonCurrencyIds.has(id)
    ? id === 'conversao-taxa' || id === 'das-limite-mei' || id === 'fator-r'
      ? percent(value)
      : number.format(value)
    : money(value);
}

type DecisionProfile = 'benefit' | 'finance' | 'tax' | 'work' | 'utility';

/** Each calculator declares a reusable decision profile instead of owning a page. */
export const outputProfileByCalculator: Readonly<
  Record<CalculatorId, DecisionProfile>
> = {
  'adicional-noturno': 'work',
  'amortizacao-antecipada': 'finance',
  'auxilio-incapacidade': 'benefit',
  'aviso-previo': 'work',
  'banco-de-horas': 'work',
  'bolsa-familia': 'benefit',
  bpc: 'benefit',
  'cdb-liquido': 'finance',
  'cdb-poupanca': 'finance',
  cdi: 'finance',
  'conversao-taxa': 'utility',
  'contador-dias': 'utility',
  'custo-demissao': 'work',
  'custo-funcionario-clt': 'work',
  'das-mei-atraso': 'tax',
  'das-limite-mei': 'tax',
  'decimo-proporcional': 'work',
  'decimo-salario': 'work',
  dsr: 'work',
  emprestimo: 'finance',
  'excesso-limite-mei': 'tax',
  'fator-r': 'tax',
  ferias: 'work',
  'ferias-proporcionais': 'work',
  'fgts-multa': 'work',
  'financiamento-sac-price': 'finance',
  'horas-extras': 'work',
  inss: 'work',
  'inss-autonomo': 'tax',
  insalubridade: 'work',
  ipva: 'tax',
  irrf: 'tax',
  'juros-compostos': 'finance',
  'juros-simples': 'finance',
  'lci-lca': 'finance',
  'pensao-alimenticia': 'work',
  periculosidade: 'work',
  pis: 'benefit',
  'plr-ppr-liquido': 'work',
  porcentagem: 'utility',
  'pro-labore': 'tax',
  'reajuste-aluguel': 'finance',
  'rescisao-clt': 'work',
  'salario-liquido': 'work',
  'salario-maternidade': 'benefit',
  'salario-por-hora': 'work',
  'seguro-desemprego': 'benefit',
  'simples-nacional': 'tax',
  'tesouro-selic': 'finance',
  'vale-transporte': 'work',
};

const profileCaveat: Readonly<Record<DecisionProfile, readonly string[]>> = {
  benefit: [
    'Estimativa com os dados informados. A concessão e o valor final dependem da análise do órgão responsável.',
  ],
  finance: [
    'Projeção para comparar cenários. Impostos, tarifas e as condições do contrato podem mudar o resultado.',
  ],
  tax: [
    'Estimativa para planejamento. A guia ou declaração oficial define o valor devido.',
  ],
  utility: [],
  work: [
    'Estimativa. O holerite ou o termo do empregador é a referência oficial.',
  ],
};

/** Calculators without a specialised statement show only the result and one caveat. */
function genericDecision(id: CalculatorId): CalculatorDecision {
  return {
    summary: '',
    alerts: profileCaveat[outputProfileByCalculator[id]],
  };
}

function discountShare(gross: number, discounts: number) {
  return gross > 0 ? (discounts / gross) * 100 : 0;
}

function salarioLiquido(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const pay = calculateNetSalary(values);
  const totalDiscounts = Math.max(0, pay.gross - calculation.value);
  const rows: DecisionStatementRow[] = [
    { label: 'Salário bruto', earning: pay.gross },
    {
      label: 'INSS',
      reference: `${percent(pay.gross > 0 ? (pay.inss / pay.gross) * 100 : 0)} efetivo`,
      discount: pay.inss,
    },
    {
      label: 'IRRF',
      reference: pay.irrf > 0 ? `Base ${money(pay.irrfBase)}` : 'Isento',
      discount: pay.irrf,
    },
  ];

  if (pay.alimony > 0) {
    rows.push({ label: 'Pensão alimentícia', discount: pay.alimony });
  }

  if (pay.otherDiscounts > 0) {
    rows.push({ label: 'Outros descontos', discount: pay.otherDiscounts });
  }

  const chartItems: DecisionBreakdownItem[] = [
    { label: 'Salário líquido', value: Math.max(0, calculation.value) },
    { label: 'INSS', value: pay.inss },
    { label: 'IRRF', value: pay.irrf },
    { label: 'Pensão alimentícia', value: pay.alimony },
    { label: 'Outros descontos', value: pay.otherDiscounts },
  ].filter((item, index) => index === 0 || item.value > 0);

  const alerts = [
    'Tabelas de INSS e IRRF de 2026. Valores informados em outros descontos não são recalculados.',
  ];

  if (calculation.value < 0) {
    alerts.unshift(
      'Os descontos informados superam o salário bruto. Revise os valores digitados.',
    );
  }

  return {
    summary: `De ${money(pay.gross)} brutos, ${money(Math.max(0, calculation.value))} chegam à sua conta. Os descontos levam ${percent(discountShare(pay.gross, totalDiscounts))} do salário.`,
    statement: {
      title: 'Holerite estimado',
      netLabel: 'Salário líquido',
      rows,
      note: 'Estimativa mensal. O holerite emitido pelo empregador é a referência oficial.',
    },
    chart: { title: 'Para onde vai o salário bruto', items: chartItems },
    references: [
      'INSS — tabela de contribuição mensal de 2026',
      'Receita Federal — tabela do IRRF de 2026',
      'Lei 15.270/2025 (isenção do IR até R$ 5 mil)',
    ],
    alerts,
  };
}

function monthlyGrowthTable(
  initial: number,
  rate: number,
  months: number,
): readonly (readonly string[])[] {
  const total = Math.min(1200, Math.max(0, Math.round(months)));
  const step = Math.max(1, Math.ceil(total / 24));
  const rows: string[][] = [];

  for (let month = step; month < total; month += step) {
    const balance = initial * (1 + rate / 100) ** month;
    rows.push([`Mês ${month}`, money(balance - initial), money(balance)]);
  }

  if (total > 0) {
    const balance = initial * (1 + rate / 100) ** total;
    rows.push([`Mês ${total}`, money(balance - initial), money(balance)]);
  }

  return rows;
}

function jurosCompostos(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const initial = input(values, 'amount');
  const rate = input(values, 'rate');
  const months = Math.max(0, Math.round(input(values, 'months')));
  const interest = Math.max(0, calculation.value - initial);
  const crossover =
    rate > 0 ? Math.ceil(Math.log(2) / Math.log(1 + rate / 100)) : null;
  const items = [
    { label: 'Capital inicial', value: initial },
    { label: 'Juros projetados', value: interest },
  ];

  return {
    summary: `Dos ${money(calculation.value)} projetados, ${money(interest)} vêm dos juros: ${percent(initial ? (interest / initial) * 100 : 0)} sobre o capital em ${months} meses.`,
    interpretation:
      crossover && crossover <= months
        ? `Por volta do mês ${crossover}, os juros acumulados passam a superar o capital inicial. Não há aportes mensais nesta simulação.`
        : 'No prazo informado, os juros ainda não superam o capital inicial. Não há aportes mensais nesta simulação.',
    chart: { title: 'Capital inicial x juros', items },
    table: {
      title: 'Evolução mês a mês',
      columns: ['Período', 'Juros acumulados', 'Saldo'],
      rows: monthlyGrowthTable(initial, rate, months),
    },
    alerts: [
      'Projeção bruta: impostos, inflação e taxas podem reduzir o rendimento real. Taxa e prazo precisam estar na mesma unidade.',
    ],
  };
}

function rescisao(values: CalculatorValues): CalculatorDecision {
  const termination = calculateTermination(values);

  return {
    summary: `Em uma dispensa sem justa causa, você receberia cerca de ${money(termination.total)} brutos, com aviso prévio de ${termination.noticeDays} dias.`,
    statement: {
      title: 'Verbas rescisórias estimadas',
      netLabel: 'Total bruto estimado',
      rows: termination.items.map((item) => ({
        label: item.label,
        reference: item.reference,
        earning: item.amount,
      })),
      note: `Valores antes de INSS e IRRF, que incidem sobre o saldo de salário e o 13º. O saldo do FGTS, estimado em ${money(termination.fgtsBalance)}, é sacado à parte e não entra no total.`,
    },
    chart: {
      title: 'Peso de cada verba',
      items: termination.items.map((item) => ({
        label: item.label,
        value: item.amount,
      })),
    },
    references: [
      'CLT, arts. 477 e 487 (rescisão e aviso prévio)',
      'Lei 12.506/2011 (aviso prévio proporcional)',
      'Lei 8.036/1990, art. 18 (multa de 40% do FGTS)',
    ],
    alerts: [
      'Considera dispensa sem justa causa com aviso prévio indenizado. Pedido de demissão, justa causa e acordo entre as partes alteram as verbas.',
      'Médias de horas extras e adicionais, faltas e descontos não entram no cálculo. Confira tudo no termo de rescisão (TRCT).',
    ],
  };
}

function ferias(values: CalculatorValues): CalculatorDecision {
  const salary = input(values, 'salary');
  const requestedDays = input(values, 'days');
  const days = Math.min(30, requestedDays);
  const base = (salary / 30) * days;
  const alerts = [
    'Valor bruto, antes de INSS e IRRF. Abono pecuniário (venda de dias) e médias de horas extras e adicionais não entram no cálculo.',
  ];

  if (requestedDays > 30) {
    alerts.unshift('As férias têm no máximo 30 dias; o cálculo usou 30.');
  }

  return {
    summary: `${days} dias de férias pagam ${money(base)} de salário mais ${money(base / 3)} de adicional de um terço.`,
    statement: {
      title: 'Demonstrativo das férias',
      netLabel: 'Total bruto das férias',
      rows: [
        {
          label: 'Salário dos dias de férias',
          reference: `${number.format(days)} dias`,
          earning: base,
        },
        {
          label: 'Adicional de 1/3 constitucional',
          reference: '1/3',
          earning: base / 3,
        },
      ],
    },
    references: [
      'Constituição Federal, art. 7º, XVII (terço de férias)',
      'CLT, arts. 129 a 153 (férias)',
    ],
    alerts,
  };
}

function bolsaFamilia(values: CalculatorValues): CalculatorDecision {
  const parts = bolsaFamiliaParts(values);
  const people = Math.floor(input(values, 'people'));
  const children = Math.floor(input(values, 'childrenUnder7'));
  const others = Math.floor(input(values, 'childrenOver7'));
  const rows: DecisionStatementRow[] = [
    {
      label: 'Renda de Cidadania',
      reference: `${people} × ${money(bolsaFamilia2026.citizenshipIncomePerPerson)}`,
      earning: parts.citizenshipIncome,
    },
  ];

  if (children > 0) {
    rows.push({
      label: 'Benefício Primeira Infância',
      reference: `${children} × ${money(bolsaFamilia2026.earlyChildhoodPerChild)}`,
      earning: parts.earlyChildhood,
    });
  }

  if (others > 0) {
    rows.push({
      label: 'Benefício Variável Familiar',
      reference: `${others} × ${money(bolsaFamilia2026.variablePerMember)}`,
      earning: parts.variable,
    });
  }

  if (parts.complement > 0) {
    rows.push({
      label: 'Benefício Complementar',
      reference: `Completa o piso de ${money(bolsaFamilia2026.familyMinimum)}`,
      earning: parts.complement,
    });
  }

  const alerts = [
    'Valores da folha de outubro de 2026. Quem recebe, e quanto, é definido pelo CadÚnico e pelo Ministério. Confira no aplicativo Bolsa Família.',
  ];

  if (children + others > people) {
    alerts.unshift(
      'Você informou mais crianças e adolescentes do que pessoas na família. Revise os números.',
    );
  }

  return {
    summary:
      parts.complement > 0
        ? `A soma dos benefícios fica abaixo do piso, então o Complementar leva o valor ao mínimo de ${money(bolsaFamilia2026.familyMinimum)}.`
        : `A soma dos benefícios já supera o piso de ${money(bolsaFamilia2026.familyMinimum)}.`,
    statement: {
      title: 'Composição do benefício',
      netLabel: 'Valor mensal estimado',
      rows,
    },
    references: [
      'MDS — Bolsa Família: valores a partir de outubro de 2026',
      'Lei 14.601/2023 (Programa Bolsa Família)',
    ],
    alerts,
  };
}

function seguroDesemprego(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const salary = input(values, 'salary');

  return {
    summary: `Com média salarial de ${money(salary)}, cada parcela estimada é de ${money(calculation.value)}.`,
    table: {
      title: 'O que ainda precisa ser confirmado',
      columns: ['Item', 'Como confirmar'],
      rows: [
        ['Quantidade de parcelas', 'Histórico de vínculos no requerimento'],
        ['Prazo para solicitar', 'Data da dispensa no requerimento'],
        ['Requisitos', 'Canal oficial do seguro-desemprego'],
      ],
    },
    references: [
      'Ministério do Trabalho e Emprego e FAT — valores do seguro-desemprego em 2026',
    ],
    alerts: [
      'O cálculo da parcela não confirma o direito ao benefício nem o número de parcelas.',
    ],
  };
}

export function buildCalculatorDecision(
  id: CalculatorId,
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  switch (id) {
    case 'salario-liquido':
      return salarioLiquido(values, calculation);
    case 'juros-compostos':
      return jurosCompostos(values, calculation);
    case 'rescisao-clt':
      return rescisao(values);
    case 'ferias':
      return ferias(values);
    case 'bolsa-familia':
      return bolsaFamilia(values);
    case 'seguro-desemprego':
      return seguroDesemprego(values, calculation);
    default:
      return genericDecision(id);
  }
}
