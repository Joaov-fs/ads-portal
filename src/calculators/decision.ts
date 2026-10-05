import { unemploymentInstallments } from './benefits';
import {
  bolsaFamilia2026,
  bpcPerCapitaLimit,
  meiAnnualLimit,
  minimumWage2026,
} from './constants';
import {
  fixedIncome,
  prepayment,
  priceSchedule,
  sacSchedule,
  sampleMonths,
  scheduleTotals,
} from './finance';
import {
  bolsaFamiliaParts,
  calculateEmployerCost,
  calculateNetSalary,
  calculateNightShift,
  calculateOvertime,
  calculateVacation,
  calculateProLabore,
  calculateThirteenth,
  disabilityBenefit,
  irrfBracketTax,
  irrfReduction,
  lateDas,
  plrTax,
  selfEmployedInss,
} from './rules';
import {
  bancoDeHoras,
  contadorDeDias,
  conversaoTaxa,
  insalubridade,
  ipva,
  jurosSimples,
  pensaoAlimenticia,
  periculosidade,
  porcentagem,
  salarioMaternidade,
  valeTransporteDecision,
} from './decision-more';
import { resolveSimplesAnnex, simplesNacional } from './simples';
import {
  calculateDismissalCost,
  calculateTermination,
  noticeDaysFor,
} from './termination';
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
      'INSS: tabela de contribuição mensal de 2026',
      'Receita Federal: tabela do IRRF de 2026',
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
  const vacation = calculateVacation(values);
  const requestedDays = input(values, 'days');
  const rows: DecisionStatementRow[] = [
    {
      label: 'Salário dos dias de férias',
      reference: `${number.format(vacation.days)} dias`,
      earning: vacation.taken,
    },
    {
      label: 'Adicional de 1/3 constitucional',
      reference: '1/3',
      earning: vacation.takenThird,
    },
  ];
  const alerts = [
    'O INSS e o IRRF foram calculados só sobre as férias; no contracheque eles se somam ao salário do mês e podem mudar um pouco. Médias de horas extras e adicionais não entram.',
  ];

  if (vacation.sellDays > 0) {
    rows.push(
      {
        label: 'Abono pecuniário (dias vendidos)',
        reference: `${number.format(vacation.sellDays)} dias`,
        earning: vacation.allowance,
      },
      {
        label: 'Adicional de 1/3 sobre o abono',
        reference: '1/3',
        earning: vacation.allowanceThird,
      },
    );
  }

  rows.push(
    { label: 'INSS', discount: vacation.inss },
    {
      label: 'IRRF',
      reference: vacation.irrf > 0 ? 'Tabela mensal de 2026' : 'Isento',
      discount: vacation.irrf,
    },
  );

  if (requestedDays > 30) {
    alerts.unshift('As férias têm no máximo 30 dias; o cálculo usou 30.');
  }

  if (input(values, 'sellDays') > 10) {
    alerts.unshift('Só é possível vender até 10 dias; o cálculo usou 10.');
  }

  return {
    summary: `As férias somam ${money(vacation.gross)} brutos e ${money(vacation.net)} líquidos${vacation.sellDays > 0 ? ', já com a venda de dias' : ''}.`,
    statement: {
      title: 'Demonstrativo das férias',
      netLabel: 'Férias líquidas',
      rows,
      note: 'O abono pecuniário não sofre desconto de INSS nem de IRRF.',
    },
    references: [
      'Constituição Federal, art. 7º, XVII (terço de férias)',
      'CLT, arts. 129 a 153 (férias e abono pecuniário)',
      ...irrfReferences,
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
      'MDS: Bolsa Família: valores a partir de outubro de 2026',
      'Lei 14.601/2023 (Programa Bolsa Família)',
    ],
    alerts,
  };
}

const irrfReferences = [
  'INSS: tabela de contribuição mensal de 2026',
  'Receita Federal: tabela do IRRF de 2026',
  'Lei 15.270/2025 (isenção do IR até R$ 5 mil)',
] as const;
const fixedIncomeTaxReference =
  'Lei 11.033/2004, art. 1º (tabela regressiva do IR)';

function decimoSalario(values: CalculatorValues): CalculatorDecision {
  const th = calculateThirteenth(values);

  return {
    summary: `Você recebe ${money(th.net)} líquidos: ${money(th.firstInstallment)} em novembro e ${money(th.secondInstallment)} em dezembro.`,
    statement: {
      title: 'Demonstrativo do 13º salário',
      netLabel: '13º líquido',
      rows: [
        { label: '13º salário bruto', earning: th.gross },
        { label: 'INSS', discount: th.inss },
        {
          label: 'IRRF',
          reference: th.irrf > 0 ? 'Tabela mensal de 2026' : 'Isento',
          discount: th.irrf,
        },
      ],
    },
    table: {
      title: 'Como o 13º é pago',
      columns: ['Parcela', 'Prazo', 'Valor'],
      rows: [
        [
          '1ª parcela (50% do bruto)',
          'Até 30 de novembro, sem descontos',
          money(th.firstInstallment),
        ],
        [
          '2ª parcela (restante)',
          'Até 20 de dezembro, com INSS e IRRF',
          money(th.secondInstallment),
        ],
      ],
    },
    references: [
      'Leis 4.090/1962 e 4.749/1965 (13º salário e prazos de pagamento)',
      ...irrfReferences,
    ],
    alerts: [
      'Vale para quem trabalhou o ano inteiro. Quem trabalhou menos meses deve usar o 13º proporcional. Médias de horas extras e adicionais não entram.',
    ],
  };
}

function seguroDesemprego(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const request = Math.min(
    3,
    Math.max(1, Math.floor(input(values, 'requestNumber'))),
  );
  const months = input(values, 'monthsWorked');
  const installments = unemploymentInstallments(request, months);
  const total = calculation.value * installments;

  return {
    summary:
      installments > 0
        ? `Você teria ${installments} parcelas de ${money(calculation.value)}, um total de ${money(total)}.`
        : `Com ${number.format(months)} meses trabalhados, você ainda não atinge o mínimo exigido para a ${request}ª solicitação.`,
    table: {
      title: 'Resumo do benefício',
      columns: ['Item', 'Resultado'],
      rows: [
        ['Valor de cada parcela', money(calculation.value)],
        [
          'Número de parcelas',
          installments > 0
            ? String(installments)
            : 'Sem direito pelo tempo informado',
        ],
        ['Total a receber', installments > 0 ? money(total) : '—'],
      ],
    },
    references: [
      'Ministério do Trabalho e Emprego e FAT: valores do seguro-desemprego em 2026',
      'Lei 7.998/1990 (Programa do Seguro-Desemprego)',
      'Resoluções do CODEFAT (número de parcelas)',
    ],
    alerts: [
      'O pedido deve ser feito entre 7 e 120 dias corridos depois da dispensa sem justa causa. A habilitação final é do Ministério do Trabalho.',
    ],
  };
}

function fgtsMulta(values: CalculatorValues): CalculatorDecision {
  const salary = input(values, 'salary');
  const months = input(values, 'months');
  const rate = input(values, 'rate');
  const balance = salary * months * 0.08;

  return {
    summary: `Com ${number.format(months)} meses de depósito, o saldo estimado é ${money(balance)} e a multa de ${percent(rate)} soma ${money(balance * (rate / 100))}.`,
    statement: {
      title: 'FGTS e multa estimados',
      netLabel: 'Total estimado',
      rows: [
        {
          label: 'Saldo do FGTS',
          reference: `8% × ${number.format(months)} meses`,
          earning: balance,
        },
        {
          label: 'Multa rescisória',
          reference: `${percent(rate)} do saldo`,
          earning: balance * (rate / 100),
        },
      ],
    },
    references: ['Lei 8.036/1990 (FGTS), art. 18', 'Caixa: aplicativo FGTS'],
    alerts: [
      'Estimativa sem a correção do saldo (TR mais 3% ao ano) e sem depósitos sobre o 13º. O extrato do aplicativo FGTS mostra o valor real.',
    ],
  };
}

function avisoPrevio(values: CalculatorValues, calculation: CalculationResult) {
  const days = noticeDaysFor(input(values, 'monthsWorked'));

  return {
    summary: `Seu aviso prévio é de ${days} dias: 30 dias mais 3 por ano completo de empresa, até 90.`,
    statement: {
      title: 'Aviso prévio indenizado',
      netLabel: 'Total bruto',
      rows: [
        {
          label: 'Aviso prévio indenizado',
          reference: `${days} dias`,
          earning: calculation.value,
        },
      ],
    },
    references: [
      'Lei 12.506/2011 (aviso prévio proporcional)',
      'CLT, art. 487 (aviso prévio)',
    ],
    alerts: [
      'Se você cumprir o aviso trabalhando, recebe o salário normal. O valor acima vale quando a empresa indeniza. O aviso indenizado também soma avos de 13º e férias na rescisão.',
    ],
  } satisfies CalculatorDecision;
}

function custoDemissao(values: CalculatorValues): CalculatorDecision {
  const cost = calculateDismissalCost(values);
  const rows: DecisionStatementRow[] = cost.termination.items.map((item) => ({
    label: item.label,
    reference: item.reference,
    earning: item.amount,
  }));

  rows.push({
    label: 'FGTS de 8% sobre saldo, aviso e 13º',
    reference: '8%',
    earning: cost.fgtsOnVerbas,
  });

  return {
    summary: `Demitir sem justa causa custa cerca de ${money(cost.total)} à empresa, sem contar encargos patronais de INSS.`,
    statement: {
      title: 'Custo da demissão para a empresa',
      netLabel: 'Custo total estimado',
      rows,
    },
    references: [
      'CLT, arts. 477 e 487 (rescisão e aviso prévio)',
      'Lei 12.506/2011 (aviso prévio proporcional)',
      'Lei 8.036/1990 (FGTS e multa de 40%)',
    ],
    alerts: [
      'Considera dispensa sem justa causa com aviso indenizado. Convenção coletiva, horas extras e outros adicionais podem aumentar o custo.',
    ],
  };
}

function proLabore(values: CalculatorValues): CalculatorDecision {
  const pay = calculateProLabore(values);

  return {
    summary: `De ${money(pay.gross)} de pró-labore, ${money(pay.net)} chegam ao sócio depois de INSS e IRRF.`,
    statement: {
      title: 'Pró-labore estimado',
      netLabel: 'Pró-labore líquido',
      rows: [
        { label: 'Pró-labore bruto', earning: pay.gross },
        {
          label: 'INSS do sócio',
          reference: `11% sobre ${money(pay.inssBase)}`,
          discount: pay.inss,
        },
        {
          label: 'IRRF',
          reference: pay.irrf > 0 ? 'Tabela mensal de 2026' : 'Isento',
          discount: pay.irrf,
        },
      ],
    },
    references: [
      'Lei 10.666/2003, art. 4º (desconto do INSS do contribuinte individual)',
      ...irrfReferences,
    ],
    alerts: [
      'Dependendo do regime tributário, a empresa também recolhe contribuição patronal sobre o pró-labore. Esse valor não sai do bolso do sócio e não entra aqui.',
    ],
  };
}

function inssAutonomo(values: CalculatorValues): CalculatorDecision {
  const amount = input(values, 'amount');
  const rate = input(values, 'rate');
  const { base, contribution } = selfEmployedInss(amount, rate);
  const alerts: string[] = [];

  if (rate === 5 || rate === 11) {
    alerts.push(
      'As alíquotas de 5% e 11% incidem sempre sobre o salário mínimo e, em regra, não contam tempo para a aposentadoria por tempo de contribuição, só por idade, a menos que você complemente a diferença.',
    );
  } else if (amount < minimumWage2026) {
    alerts.push(
      'Sua base ficou abaixo do salário mínimo, então a contribuição foi calculada sobre o salário mínimo.',
    );
  }

  return {
    summary: `A contribuição mensal é de ${money(contribution)}, calculada sobre uma base de ${money(base)}.`,
    table: {
      title: 'Cálculo da contribuição',
      columns: ['Item', 'Valor'],
      rows: [
        ['Base de contribuição', money(base)],
        ['Alíquota', percent(rate)],
        ['Contribuição mensal', money(contribution)],
      ],
    },
    references: [
      'INSS: tabela de contribuição do contribuinte individual (2026)',
      'Lei 8.212/1991, art. 21 (alíquotas do contribuinte individual)',
    ],
    alerts,
  };
}

function dasMeiAtraso(values: CalculatorValues): CalculatorDecision {
  const late = lateDas(values);
  const original = input(values, 'amount');
  const alerts = [
    'Confirme o valor na guia atualizada do Portal do Simples Nacional ou do aplicativo MEI, que usa a data exata do pagamento.',
  ];

  if (late.estimatedMonths > 0) {
    alerts.unshift(
      `A Selic de ${late.estimatedMonths} mês(es) ainda não foi divulgada; usamos a última conhecida como estimativa.`,
    );
  }

  return {
    summary:
      late.daysLate > 0
        ? `Com ${number.format(late.daysLate)} dias de atraso, a guia de ${money(original)} passa a custar ${money(late.total)}.`
        : `Sem atraso, a guia continua em ${money(original)}.`,
    table: {
      title: 'Atualização da guia',
      columns: ['Item', 'Valor'],
      rows: [
        ['Valor original do DAS', money(original)],
        [`Multa de mora (${percent(late.finePercent)})`, money(late.fine)],
        [`Juros (${percent(late.interestPercent)})`, money(late.interest)],
        ['Total a pagar', money(late.total)],
      ],
    },
    references: [
      'Resolução CGSN 140/2018 (multa e juros do Simples Nacional e do MEI)',
      'Banco Central: Selic acumulada no mês (série 4390 do SGS)',
      'Portal do Simples Nacional: Receita Federal',
    ],
    alerts,
  };
}

function bpc(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const income = input(values, 'amount');
  const within = calculation.value <= bpcPerCapitaLimit;

  return {
    summary: `A renda por pessoa é ${money(calculation.value)}. O limite padrão é ${money(bpcPerCapitaLimit)}, um quarto do salário mínimo.`,
    table: {
      title: 'Critério de renda do BPC',
      columns: ['Item', 'Valor'],
      rows: [
        ['Renda familiar mensal', money(income)],
        ['Pessoas na família', number.format(input(values, 'people'))],
        ['Renda por pessoa', money(calculation.value)],
        ['Limite (1/4 do salário mínimo)', money(bpcPerCapitaLimit)],
        ['Situação', within ? 'Dentro do limite' : 'Acima do limite padrão'],
      ],
    },
    interpretation: within
      ? `Pelo critério de renda, a família está dentro do limite. Falta comprovar 65 anos ou mais, ou deficiência de longo prazo, e a inscrição no CadÚnico. Se concedido, o benefício é de um salário mínimo: ${money(minimumWage2026)}.`
      : 'A renda por pessoa passa do limite padrão. Em alguns casos, o INSS avalia a situação da família com outros critérios, e o limite pode chegar a meio salário mínimo. Procure orientação do INSS ou da Defensoria.',
    references: [
      'Lei 8.742/1993 (LOAS), art. 20',
      'Lei 14.176/2021 (critério de renda do BPC)',
      'INSS: Benefício de Prestação Continuada',
    ],
    alerts: [
      'Nem toda renda entra na conta, e quem mora junto conta como família. A análise oficial é do INSS.',
    ],
  };
}

function pis(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const months = Math.min(12, input(values, 'months'));

  return {
    summary: `Com ${number.format(months)} meses trabalhados, o abono seria de ${months}/12 do salário mínimo.`,
    statement: {
      title: 'Abono salarial estimado',
      netLabel: 'Abono estimado',
      rows: [
        {
          label: 'Abono salarial',
          reference: `${number.format(months)}/12 de ${money(minimumWage2026)}`,
          earning: calculation.value,
        },
      ],
    },
    references: [
      'Ministério do Trabalho e Emprego: Abono Salarial',
      'Lei 7.998/1990, art. 9º (abono salarial)',
    ],
    alerts: [
      'Só recebe quem trabalhou ao menos 30 dias com carteira em 2024, teve remuneração média mensal de até 2 salários mínimos (R$ 2.766, segundo o Ministério do Trabalho) e está inscrito no PIS/Pasep há 5 anos ou mais. No ciclo de 2026, o valor pode ser sacado até 30 de dezembro. Consulte sua situação na Carteira de Trabalho Digital.',
    ],
  };
}

function plrLiquida(values: CalculatorValues): CalculatorDecision {
  const gross = input(values, 'amount');
  const tax = Math.max(0, plrTax(gross));

  return {
    summary: `Da PLR de ${money(gross)}, o Imposto de Renda retido é de ${money(tax)} e o líquido é de ${money(gross - tax)}.`,
    statement: {
      title: 'PLR/PPR estimada',
      netLabel: 'PLR líquida',
      rows: [
        { label: 'PLR/PPR bruta', earning: gross },
        {
          label: 'Imposto de Renda (tabela exclusiva da PLR)',
          reference: tax > 0 ? 'Tabela progressiva' : 'Isento',
          discount: tax,
        },
      ],
    },
    references: [
      'Receita Federal: tabela de tributação da PLR em 2026',
      'Lei 10.101/2000 (participação nos lucros ou resultados)',
    ],
    alerts: [
      'A PLR tem tabela própria, separada do salário mensal. Se a empresa pagar em mais de uma parcela no ano, o cálculo considera o total recebido.',
    ],
  };
}

function fatorR(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const above = calculation.value >= 28;

  return {
    summary: `O Fator R é ${percent(calculation.value)}: a folha de salários representa essa parte da receita dos últimos 12 meses.`,
    interpretation: above
      ? 'Com Fator R de 28% ou mais, as atividades sujeitas a essa regra são tributadas pelo Anexo III do Simples Nacional, com alíquotas menores.'
      : 'Abaixo de 28%, as atividades sujeitas a essa regra são tributadas pelo Anexo V do Simples Nacional, com alíquotas maiores. Aumentar a folha ou o pró-labore pode compensar.',
    references: [
      'Lei Complementar 123/2006 (Simples Nacional)',
      'Resolução CGSN 140/2018',
    ],
    alerts: [
      'A folha inclui salários, pró-labore, encargos e FGTS dos últimos 12 meses. Só vale para as atividades que a lei sujeita ao Fator R.',
    ],
  };
}

function excessoMei(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const revenue = input(values, 'amount');
  const excess = calculation.value;
  const over = excess / meiAnnualLimit;

  return {
    summary:
      excess === 0
        ? `O faturamento de ${money(revenue)} está dentro do limite de ${money(meiAnnualLimit)} do MEI.`
        : `O faturamento passa ${money(excess)} do limite de ${money(meiAnnualLimit)}, ${percent(over * 100)} acima.`,
    table: {
      title: 'Faturamento x limite do MEI',
      columns: ['Item', 'Valor'],
      rows: [
        ['Faturamento no ano', money(revenue)],
        ['Limite anual do MEI', money(meiAnnualLimit)],
        ['Excesso', money(excess)],
      ],
    },
    interpretation:
      excess === 0
        ? 'Você segue dentro do limite. No ano em que abriu a empresa, o limite é proporcional: R$ 6.750 por mês de atividade.'
        : over <= 0.2
          ? 'Excesso de até 20%: você continua como MEI neste ano e paga a DAS complementar sobre o excedente. O desenquadramento vale a partir de 1º de janeiro do ano seguinte.'
          : 'Excesso acima de 20%: o desenquadramento vale desde 1º de janeiro do ano, com tributos recalculados desde então. Procure um contador.',
    references: ['Lei Complementar 123/2006, art. 18-A (MEI)'],
    alerts: [],
  };
}

function dasLimiteMei(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const revenue = input(values, 'amount');
  const remaining = Math.max(0, meiAnnualLimit - revenue);

  return {
    summary: `Você usou ${percent(calculation.value)} do limite anual e ainda pode faturar ${money(remaining)}.`,
    table: {
      title: 'Uso do limite do MEI',
      columns: ['Item', 'Valor'],
      rows: [
        ['Limite anual', money(meiAnnualLimit)],
        ['Faturamento até agora', money(revenue)],
        ['Ainda disponível', money(remaining)],
      ],
    },
    references: ['Lei Complementar 123/2006, art. 18-A (MEI)'],
    alerts:
      revenue > meiAnnualLimit
        ? [
            'Você passou do limite anual. Veja a calculadora de excesso do limite do MEI.',
          ]
        : [],
  };
}

function netIncomeStatement(
  title: string,
  netLabel: string,
  result: ReturnType<typeof fixedIncome>,
) {
  return {
    title,
    netLabel,
    rows: [
      { label: 'Rendimento bruto', earning: result.gross },
      {
        label: 'Imposto de Renda',
        reference: `${percent(result.taxRate)} (tabela regressiva)`,
        discount: result.tax,
      },
    ],
  };
}

/** Taxa anual de uma aplicação isenta que rende o mesmo líquido que um título tributado. */
function exemptEquivalent(annualRate: number, months: number, taxRate: number) {
  if (months <= 0) return annualRate;
  const grossGrowth = (1 + annualRate / 100) ** (months / 12) - 1;

  return (1 + grossGrowth * (1 - taxRate / 100)) ** (12 / months) * 100 - 100;
}

/** Taxa anual de um título tributado que rende o mesmo líquido que uma aplicação isenta. */
function taxedEquivalent(annualRate: number, months: number, taxRate: number) {
  if (months <= 0) return annualRate;
  const growth = (1 + annualRate / 100) ** (months / 12) - 1;

  return (1 + growth / (1 - taxRate / 100)) ** (12 / months) * 100 - 100;
}

function cdi(values: CalculatorValues): CalculatorDecision {
  const amount = input(values, 'amount');
  const months = input(values, 'months');
  const annual = (input(values, 'cdiRate') * input(values, 'rate')) / 100;
  const result = fixedIncome(amount, annual, months);

  return {
    summary: `Com o CDI informado, ${money(amount)} rendem ${money(result.gross)} brutos em ${number.format(months)} meses, ou ${money(result.net)} depois do Imposto de Renda.`,
    statement: netIncomeStatement(
      'Rendimento estimado',
      'Rendimento líquido',
      result,
    ),
    references: ['B3: taxa DI/CDI', fixedIncomeTaxReference],
    alerts: [
      'O CDI muda todos os dias. A projeção supõe a taxa informada constante pelo prazo todo.',
    ],
  };
}

function fixedIncomeDecision(
  kind: 'cdb' | 'tesouro',
  values: CalculatorValues,
): CalculatorDecision {
  const amount = input(values, 'amount');
  const rate = input(values, 'rate');
  const months = input(values, 'months');
  const result = fixedIncome(amount, rate, months);
  const equivalent = exemptEquivalent(rate, months, result.taxRate);

  return {
    summary: `Em ${number.format(months)} meses, ${money(amount)} viram ${money(amount + result.net)} depois do Imposto de Renda de ${percent(result.taxRate)}.`,
    statement: netIncomeStatement(
      kind === 'cdb' ? 'Rendimento do CDB' : 'Rendimento do Tesouro Selic',
      'Rendimento líquido',
      result,
    ),
    chart: {
      title: 'Para onde vai o rendimento bruto',
      items: [
        { label: 'Rendimento líquido', value: result.net },
        { label: 'Imposto de Renda', value: result.tax },
      ],
    },
    interpretation: `Uma LCI ou LCA, que é isenta de Imposto de Renda, precisa pagar pelo menos ${percent(equivalent)} ao ano para render o mesmo líquido que esta aplicação.`,
    references:
      kind === 'cdb'
        ? [
            fixedIncomeTaxReference,
            'Receita Federal: tributação de aplicações financeiras',
          ]
        : [fixedIncomeTaxReference, 'Tesouro Nacional: Tesouro Direto'],
    alerts:
      kind === 'cdb'
        ? [
            'Informe a taxa anual efetiva. Para um CDB de 110% do CDI, converta antes pelo CDI atual.',
          ]
        : ['Não inclui a taxa de custódia da B3 nem a taxa da corretora.'],
  };
}

function lciLca(values: CalculatorValues): CalculatorDecision {
  const amount = input(values, 'amount');
  const rate = input(values, 'rate');
  const months = input(values, 'months');
  const result = fixedIncome(amount, rate, months, false);
  const taxRate = fixedIncome(amount, rate, months).taxRate;
  const cdbEquivalent = taxedEquivalent(rate, months, taxRate);

  return {
    summary: `Em ${number.format(months)} meses, ${money(amount)} rendem ${money(result.net)} sem Imposto de Renda.`,
    interpretation: `Para render o mesmo líquido, um CDB precisaria pagar ${percent(cdbEquivalent)} ao ano brutos, já descontado o Imposto de Renda de ${percent(taxRate)} desse prazo.`,
    references: [
      'Lei 11.033/2004, art. 3º (isenção de IR para LCI e LCA)',
      'Banco Central do Brasil: Cidadania Financeira',
    ],
    alerts: [
      'Confira a carência e a liquidez: LCI e LCA costumam ter prazo mínimo para resgate.',
    ],
  };
}

function cdbPoupanca(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const amount = input(values, 'amount');
  const months = input(values, 'months');
  const cdb = fixedIncome(amount, input(values, 'rate'), months);
  const savings = fixedIncome(
    amount,
    input(values, 'savingsRate'),
    months,
    false,
  );

  return {
    summary:
      calculation.value >= 0
        ? `Depois do Imposto de Renda, o CDB rende ${money(calculation.value)} a mais que a poupança em ${number.format(months)} meses.`
        : `Mesmo sem Imposto de Renda, a poupança fica ${money(-calculation.value)} abaixo do CDB, ou seja, a poupança rende mais neste cenário.`,
    table: {
      title: 'CDB x poupança',
      columns: ['Aplicação', 'Rendimento líquido'],
      rows: [
        [`CDB (após IR de ${percent(cdb.taxRate)})`, money(cdb.net)],
        ['Poupança (isenta de IR)', money(savings.net)],
        ['Diferença a favor do CDB', money(calculation.value)],
      ],
    },
    references: [
      'Lei 12.703/2012 (regra de remuneração da poupança)',
      'Banco Central do Brasil: rendimento da poupança',
      fixedIncomeTaxReference,
    ],
    alerts: [
      'A poupança rende 0,5% ao mês mais a TR quando a Selic está acima de 8,5% ao ano; abaixo disso, 70% da Selic mais a TR. Informe a taxa anual atual.',
    ],
  };
}

function financiamentoSacPrice(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const monthlyRate = input(values, 'rate') / 100;
  const price = priceSchedule(
    input(values, 'amount'),
    monthlyRate,
    input(values, 'months'),
  );
  const sac = sacSchedule(
    input(values, 'amount'),
    monthlyRate,
    input(values, 'months'),
  );
  const priceTotals = scheduleTotals(price);
  const sacTotals = scheduleTotals(sac);
  const priceFirst = price[0]?.payment ?? 0;
  const sacFirst = sac[0]?.payment ?? 0;

  return {
    summary: `No SAC você paga ${money(calculation.value)} a menos de juros, mas a primeira parcela é ${money(sacFirst - priceFirst)} maior que na Price.`,
    table: {
      title: 'Price x SAC',
      columns: ['Comparativo', 'Price', 'SAC'],
      rows: [
        ['Primeira parcela', money(priceFirst), money(sacFirst)],
        [
          'Última parcela',
          money(price.at(-1)?.payment ?? 0),
          money(sac.at(-1)?.payment ?? 0),
        ],
        [
          'Total de juros',
          money(priceTotals.interest),
          money(sacTotals.interest),
        ],
        ['Total pago', money(priceTotals.paid), money(sacTotals.paid)],
      ],
    },
    chart: {
      title: 'Total de juros pago',
      items: [
        { label: 'Price', value: priceTotals.interest },
        { label: 'SAC', value: sacTotals.interest },
      ],
    },
    references: ['Resolução CMN 3.517/2007 (Custo Efetivo Total)'],
    alerts: [
      'Não inclui seguros, tarifas nem correção pela TR. O custo efetivo total (CET) do contrato é maior que a taxa informada.',
    ],
  };
}

function emprestimo(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const principal = input(values, 'amount');
  const months = input(values, 'months');
  const schedule = priceSchedule(
    principal,
    input(values, 'rate') / 100,
    months,
  );
  const totals = scheduleTotals(schedule);
  const rows = sampleMonths(schedule.length, 24).flatMap((month) => {
    const row = schedule[month - 1];

    return row
      ? [
          [
            `Parcela ${row.month}`,
            money(row.payment),
            money(row.interest),
            money(row.amortization),
            money(row.balance),
          ],
        ]
      : [];
  });

  return {
    summary: `Você paga ${number.format(months)} parcelas de ${money(calculation.value)}, um total de ${money(totals.paid)}, dos quais ${money(totals.interest)} são juros.`,
    chart: {
      title: 'O que você devolve ao banco',
      items: [
        { label: 'Valor emprestado', value: principal },
        { label: 'Juros', value: totals.interest },
      ],
    },
    table: {
      title: 'Evolução das parcelas',
      columns: ['Parcela', 'Valor', 'Juros', 'Amortização', 'Saldo devedor'],
      rows,
    },
    references: ['Resolução CMN 3.517/2007 (Custo Efetivo Total)'],
    alerts: [
      'Não inclui tarifas, seguros nem IOF. O custo efetivo total (CET) do contrato é maior que a taxa mensal informada.',
    ],
  };
}

function amortizacaoAntecipada(values: CalculatorValues): CalculatorDecision {
  const result = prepayment(
    input(values, 'amount'),
    input(values, 'rate') / 100,
    input(values, 'months'),
    input(values, 'prepayment'),
  );
  const months = input(values, 'months');
  const monthsSaved = Math.max(0, months - result.newMonths);

  return {
    summary: `Antecipando ${money(result.prepaid)}, você economiza ${money(result.interestSavedKeepingPayment)} em juros se mantiver a parcela, e o financiamento termina cerca de ${number.format(Math.round(monthsSaved * 10) / 10)} meses antes.`,
    table: {
      title: 'Duas formas de usar a antecipação',
      columns: ['Opção', 'Parcela', 'Prazo restante', 'Juros economizados'],
      rows: [
        [
          'Sem antecipar',
          money(result.payment),
          `${number.format(months)} meses`,
          '—',
        ],
        [
          'Manter a parcela e encurtar o prazo',
          money(result.payment),
          `${number.format(Math.round(result.newMonths * 10) / 10)} meses`,
          money(result.interestSavedKeepingPayment),
        ],
        [
          'Reduzir a parcela e manter o prazo',
          money(result.newPayment),
          `${number.format(months)} meses`,
          money(result.interestSavedLoweringPayment),
        ],
      ],
    },
    references: [
      'Código de Defesa do Consumidor, art. 52, § 2º (liquidação antecipada)',
    ],
    alerts: [
      'Considera financiamento na tabela Price com taxa constante. O CDC garante a redução proporcional dos juros ao antecipar, mas o banco pode ter regras próprias de cálculo. Confirme o valor exato com ele.',
    ],
  };
}

const inssBrackets = [
  [1621, 7.5],
  [2902.84, 9],
  [4354.27, 12],
  [8475.55, 14],
] as const;

function inssDecision(values: CalculatorValues): CalculatorDecision {
  const salary = Math.max(0, input(values, 'salary'));
  let previous = 0;
  let total = 0;
  const rows = inssBrackets.map(([limit, rate]) => {
    const base = Math.max(0, Math.min(salary, limit) - previous);
    const contribution = base * (rate / 100);
    const label = `${money(previous + (previous > 0 ? 0.01 : 0))} a ${money(limit)}`;
    previous = limit;
    total += contribution;

    return [label, percent(rate), money(base), money(contribution)];
  });

  return {
    summary: `Você contribui com ${money(total)}, o equivalente a ${percent(salary > 0 ? (total / salary) * 100 : 0)} do salário.`,
    table: {
      title: 'Contribuição por faixa',
      columns: ['Faixa do salário', 'Alíquota', 'Parte do salário', 'INSS'],
      rows: [
        ...rows,
        ['Total', '', money(Math.min(salary, 8475.55)), money(total)],
      ],
    },
    references: [
      'INSS: tabela de contribuição mensal de 2026',
      'Portaria Interministerial MPS/MF de 2026 (reajuste do teto e das faixas)',
    ],
    alerts: [
      salary > 8475.55
        ? `O salário passa do teto de contribuição (R$ 8.475,55). O INSS máximo é ${money(total)}.`
        : 'Cada alíquota incide só sobre a parte do salário dentro da faixa, não sobre o salário inteiro.',
    ],
  };
}

function irrfDecision(values: CalculatorValues): CalculatorDecision {
  const net = calculateNetSalary(values);
  const tableTax = irrfBracketTax(net.irrfBase);
  const reduction = Math.min(tableTax, irrfReduction(net.gross, tableTax));
  const rows: string[][] = [
    ['Rendimento tributável bruto', money(net.gross)],
    ['(−) INSS', money(net.inss)],
  ];

  if (net.dependents > 0) {
    rows.push([
      `(−) ${net.dependents} dependente(s) × ${money(189.59)}`,
      money(net.dependents * 189.59),
    ]);
  }
  if (net.alimony > 0)
    rows.push(['(−) Pensão alimentícia', money(net.alimony)]);
  rows.push(
    ['= Base de cálculo', money(net.irrfBase)],
    ['Imposto pela tabela progressiva', money(tableTax)],
    ['(−) Redução da Lei 15.270/2025', money(reduction)],
    ['= IRRF a pagar', money(net.irrf)],
  );

  return {
    summary:
      net.irrf === 0
        ? 'Neste cenário o imposto retido é zero.'
        : `O IRRF retido é de ${money(net.irrf)}, ${percent(net.gross > 0 ? (net.irrf / net.gross) * 100 : 0)} do rendimento.`,
    table: {
      title: 'Passo a passo do IRRF',
      columns: ['Etapa', 'Valor'],
      rows,
    },
    references: irrfReferences,
    alerts: [
      'Considera o desconto legal de INSS, dependentes e pensão. Previdência privada (PGBL) e outras deduções podem reduzir ainda mais a base.',
    ],
  };
}

function horasExtras(values: CalculatorValues): CalculatorDecision {
  const ot = calculateOvertime(values);
  const rows: DecisionStatementRow[] = [
    {
      label: 'Horas extras a 50%',
      reference: `${number.format(ot.hours50)} h × ${money(ot.hourly * 1.5)}`,
      earning: ot.pay50,
    },
    {
      label: 'Horas extras a 100% (domingos e feriados)',
      reference: `${number.format(ot.hours100)} h × ${money(ot.hourly * 2)}`,
      earning: ot.pay100,
    },
  ];

  if (ot.dsr > 0) {
    rows.push({
      label: 'Reflexo no DSR',
      reference: `${number.format(input(values, 'restDays'))} repousos ÷ ${number.format(input(values, 'workDays'))} dias úteis`,
      earning: ot.dsr,
    });
  }

  return {
    summary: `Sua hora normal vale ${money(ot.hourly)}. As horas extras somam ${money(ot.total)} brutos no mês.`,
    statement: {
      title: 'Demonstrativo das horas extras',
      netLabel: 'Total bruto das horas extras',
      rows,
      note: 'Valores brutos, antes de INSS e IRRF.',
    },
    references: [
      'CLT, art. 59 (adicional mínimo de 50%)',
      'Constituição Federal, art. 7º, XVI',
      'Súmula 172 do TST (reflexo no repouso semanal)',
    ],
    alerts: [
      'Convenção coletiva pode fixar adicional maior que 50%. Informe o salário com adicionais fixos que integram a base, como insalubridade.',
    ],
  };
}

function adicionalNoturno(values: CalculatorValues): CalculatorDecision {
  const night = calculateNightShift(values);

  return {
    summary: `O adicional é de ${money(night.additional)} no mês, sobre uma hora de ${money(night.hourly)}.`,
    table: {
      title: 'Adicional noturno',
      columns: ['Item', 'Valor'],
      rows: [
        ['Valor da hora normal', money(night.hourly)],
        [
          `Adicional de ${percent(input(values, 'rate'))} sobre ${number.format(input(values, 'nightHours'))} h`,
          money(night.additional),
        ],
        [
          'Hora noturna reduzida de 52min30s (se aplicável)',
          money(night.reducedHourExtra),
        ],
      ],
    },
    references: [
      'CLT, art. 73 (trabalho noturno)',
      'Súmula 60 do TST (adicional noturno)',
    ],
    alerts: [
      'No meio urbano, a hora noturna vai das 22h às 5h e conta como 52min30s. Se o salário já paga a jornada com horas reduzidas, não some esse valor de novo. No meio rural o adicional é de 25%.',
    ],
  };
}

function custoFuncionario(values: CalculatorValues): CalculatorDecision {
  const cost = calculateEmployerCost(values);
  const extra = cost.total - cost.salary;

  return {
    summary: `Um salário de ${money(cost.salary)} custa ${money(cost.total)} por mês para a empresa, ${percent(cost.salary > 0 ? (extra / cost.salary) * 100 : 0)} a mais.`,
    statement: {
      title: 'Custo mensal do funcionário',
      netLabel: 'Custo total para a empresa',
      rows: [
        { label: 'Salário', earning: cost.salary },
        {
          label: 'Provisão de 13º e férias com 1/3',
          reference: '8,33% + 11,11%',
          earning: cost.provisions,
        },
        { label: 'FGTS', reference: '8%', earning: cost.fgts },
        {
          label: 'Encargos patronais',
          reference: percent(input(values, 'rate')),
          earning: cost.charges,
        },
        { label: 'Benefícios', earning: cost.benefits },
      ],
    },
    references: [
      'Lei 8.212/1991 (contribuição patronal ao INSS)',
      'Lei 8.036/1990 (FGTS)',
      'Receita Federal: Simples Nacional',
    ],
    alerts: [
      'Empresas do Simples Nacional nos anexos I, II, III e V já pagam a contribuição patronal dentro do DAS; informe 0% nos encargos. Lucro presumido ou real costuma ficar perto de 28,8% (20% INSS, 1% a 3% RAT, 5,8% terceiros).',
    ],
  };
}

function simplesDecision(values: CalculatorValues): CalculatorDecision {
  const resolved = resolveSimplesAnnex(
    input(values, 'annex'),
    input(values, 'payroll12'),
    input(values, 'rbt12'),
  );
  const result = simplesNacional(
    input(values, 'amount'),
    input(values, 'rbt12'),
    resolved.annex,
  );
  const alerts = [
    resolved.factor === undefined &&
    (resolved.annex === 3 || resolved.annex === 5)
      ? 'Em serviços dos anexos III e V, informe a folha de 12 meses para o Fator R escolher o anexo certo. ISS e ICMS têm sublimites estaduais.'
      : 'Estimativa pela tabela geral. ISS e ICMS têm sublimites estaduais.',
  ];

  if (result.outOfLimit) {
    alerts.unshift(
      'A receita dos últimos 12 meses passa de R$ 4,8 milhões. Acima desse limite a empresa não pode permanecer no Simples Nacional; o cálculo usa a última faixa.',
    );
  }

  return {
    summary: `Alíquota efetiva de ${percent(result.effectiveRate)}: o DAS do mês é ${money(result.das)}.`,
    table: {
      title: 'Como a alíquota efetiva foi calculada',
      columns: ['Etapa', 'Valor'],
      rows: [
        ['Anexo', result.annexName],
        ...(resolved.factor !== undefined
          ? [['Fator R', percent(resolved.factor * 100)]]
          : []),
        ['Receita dos últimos 12 meses', money(result.rbt12)],
        ['Faixa', `${result.bracket}ª faixa`],
        ['Alíquota nominal', percent(result.nominalRate)],
        ['Parcela a deduzir', money(result.deduction)],
        ['Alíquota efetiva', percent(result.effectiveRate)],
        ['DAS do mês', money(result.das)],
      ],
    },
    references: [
      'Lei Complementar 123/2006 (anexos I a V)',
      'Resolução CGSN 140/2018',
      'Portal do Simples Nacional',
    ],
    alerts,
  };
}

function auxilioIncapacidade(values: CalculatorValues): CalculatorDecision {
  const benefit = disabilityBenefit(
    input(values, 'amount'),
    input(values, 'rate'),
  );
  const raw = (input(values, 'amount') * input(values, 'rate')) / 100;
  const alerts = [
    'Estimativa. O INSS apura a média de todas as contribuições desde julho de 1994 e define o direito por perícia médica.',
  ];

  if (raw < benefit)
    alerts.unshift(
      'O benefício não pode ser menor que o salário mínimo; o piso foi aplicado.',
    );
  if (raw > benefit)
    alerts.unshift(
      'O benefício não pode passar do teto do INSS; o teto foi aplicado.',
    );

  return {
    summary: `O benefício estimado é de ${money(benefit)} por mês.`,
    table: {
      title: 'Cálculo do benefício',
      columns: ['Item', 'Valor'],
      rows: [
        ['Média das contribuições', money(input(values, 'amount'))],
        ['Percentual aplicado', percent(input(values, 'rate'))],
        ['Resultado antes de piso e teto', money(raw)],
        ['Benefício estimado', money(benefit)],
      ],
    },
    references: [
      'Emenda Constitucional 103/2019 (regra de cálculo)',
      'Lei 8.213/1991, arts. 59 a 63 (auxílio por incapacidade temporária)',
      'INSS: Meu INSS',
    ],
    alerts,
  };
}

function proportionalAvos(
  values: CalculatorValues,
  kind: 'ferias' | 'decimo',
): CalculatorDecision {
  const salary = input(values, 'salary');
  const months = Math.min(12, Math.max(0, input(values, 'months')));
  const base = (salary * months) / 12;
  const rows: DecisionStatementRow[] = [
    {
      label: kind === 'ferias' ? 'Férias proporcionais' : '13º proporcional',
      reference: `${number.format(months)}/12 avos`,
      earning: base,
    },
  ];

  if (kind === 'ferias') {
    rows.push({
      label: 'Adicional de 1/3',
      reference: 'Constituição Federal, art. 7º, XVII',
      earning: base / 3,
    });
  }

  return {
    summary:
      kind === 'ferias'
        ? `Você tem direito a ${money(base * (4 / 3))} brutos de férias proporcionais.`
        : `Seu 13º proporcional bruto é de ${money(base)}.`,
    statement: {
      title:
        kind === 'ferias'
          ? 'Demonstrativo das férias proporcionais'
          : 'Demonstrativo do 13º proporcional',
      netLabel: 'Total bruto',
      rows,
      note: 'Valores brutos, antes de INSS e IRRF.',
    },
    references:
      kind === 'ferias'
        ? [
            'CLT, arts. 130 e 146 (férias proporcionais)',
            'Constituição Federal, art. 7º, XVII',
          ]
        : [
            'Lei 4.090/1962 (13º salário)',
            'Lei 4.749/1965 (prazos de pagamento)',
          ],
    alerts: [
      'Cada mês com 15 dias ou mais trabalhados conta como um avo inteiro. Médias de horas extras e adicionais variáveis aumentam o valor.',
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
    case 'decimo-salario':
      return decimoSalario(values);
    case 'fgts-multa':
      return fgtsMulta(values);
    case 'aviso-previo':
      return avisoPrevio(values, calculation);
    case 'custo-demissao':
      return custoDemissao(values);
    case 'pro-labore':
      return proLabore(values);
    case 'inss-autonomo':
      return inssAutonomo(values);
    case 'das-mei-atraso':
      return dasMeiAtraso(values);
    case 'bpc':
      return bpc(values, calculation);
    case 'pis':
      return pis(values, calculation);
    case 'plr-ppr-liquido':
      return plrLiquida(values);
    case 'fator-r':
      return fatorR(values, calculation);
    case 'excesso-limite-mei':
      return excessoMei(values, calculation);
    case 'das-limite-mei':
      return dasLimiteMei(values, calculation);
    case 'vale-transporte':
      return valeTransporteDecision(values, calculation);
    case 'cdi':
      return cdi(values);
    case 'cdb-liquido':
      return fixedIncomeDecision('cdb', values);
    case 'tesouro-selic':
      return fixedIncomeDecision('tesouro', values);
    case 'lci-lca':
      return lciLca(values);
    case 'cdb-poupanca':
      return cdbPoupanca(values, calculation);
    case 'financiamento-sac-price':
      return financiamentoSacPrice(values, calculation);
    case 'emprestimo':
      return emprestimo(values, calculation);
    case 'amortizacao-antecipada':
      return amortizacaoAntecipada(values);
    case 'inss':
      return inssDecision(values);
    case 'irrf':
      return irrfDecision(values);
    case 'horas-extras':
      return horasExtras(values);
    case 'adicional-noturno':
      return adicionalNoturno(values);
    case 'custo-funcionario-clt':
      return custoFuncionario(values);
    case 'simples-nacional':
      return simplesDecision(values);
    case 'auxilio-incapacidade':
      return auxilioIncapacidade(values);
    case 'ferias-proporcionais':
      return proportionalAvos(values, 'ferias');
    case 'decimo-proporcional':
      return proportionalAvos(values, 'decimo');
    case 'salario-maternidade':
      return salarioMaternidade(values, calculation);
    case 'periculosidade':
      return periculosidade(values);
    case 'insalubridade':
      return insalubridade(values);
    case 'pensao-alimenticia':
      return pensaoAlimenticia(values, calculation);
    case 'porcentagem':
      return porcentagem(values, calculation);
    case 'juros-simples':
      return jurosSimples(values, calculation);
    case 'conversao-taxa':
      return conversaoTaxa(values, calculation);
    case 'ipva':
      return ipva(values, calculation);
    case 'banco-de-horas':
      return bancoDeHoras(values, calculation);
    case 'contador-dias':
      return contadorDeDias(values, calculation);
    default:
      return genericDecision(id);
  }
}
