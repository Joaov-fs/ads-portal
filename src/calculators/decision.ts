import type {
  CalculatorDecision,
  CalculatorId,
  CalculatorValues,
  CalculationResult,
  DecisionBreakdownItem,
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

function genericDecision(
  id: CalculatorId,
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const profile = outputProfileByCalculator[id];
  const contextual = {
    benefit: {
      interpretation:
        'A simulação organiza uma referência do seu possível direito; a concessão depende da análise do órgão responsável.',
      recommendation:
        'Organize os comprovantes antes de iniciar a solicitação.',
      nextSteps: [
        'Confira os requisitos oficiais.',
        'Separe documentos e comprovantes.',
        'Consulte o canal oficial para solicitar ou acompanhar.',
      ],
    },
    finance: {
      interpretation:
        'O resultado é uma projeção para comparar escolhas. Custos, impostos, inflação e condições contratadas podem alterar o efeito no seu bolso.',
      recommendation:
        'Compare este cenário com pelo menos uma alternativa antes de decidir.',
      nextSteps: [
        'Revise taxa, prazo e tarifas.',
        'Simule uma alternativa com os mesmos dados.',
        'Só contrate ou invista após conferir o documento da instituição.',
      ],
    },
    tax: {
      interpretation:
        'O número ajuda no planejamento, mas a regra aplicável e a declaração ou guia oficial definem a obrigação final.',
      recommendation:
        'Use a estimativa para se preparar, não como documento fiscal.',
      nextSteps: [
        'Confirme a regra e a competência.',
        'Guarde os dados usados na simulação.',
        'Valide a guia ou declaração no serviço oficial.',
      ],
    },
    utility: {
      interpretation:
        'O resultado transforma os dados informados em uma referência objetiva para a sua decisão.',
      recommendation:
        'Confira as unidades e compare o resultado com o seu objetivo.',
      nextSteps: [
        'Revise os dados informados.',
        'Teste um cenário alternativo.',
        'Use a referência na próxima decisão prática.',
      ],
    },
    work: {
      interpretation:
        'A estimativa ajuda a conferir a composição do valor; o holerite, contrato ou termo aplicável é a referência oficial.',
      recommendation:
        'Compare a estimativa com seu documento de trabalho antes de agir.',
      nextSteps: [
        'Confira o documento da competência.',
        'Verifique verbas e descontos separadamente.',
        'Peça esclarecimento ao empregador ou órgão responsável se houver diferença.',
      ],
    },
  }[profile];

  return {
    summary: `O resultado principal para este cenário é ${displayValue(id, calculation.value)}.`,
    interpretation: contextual.interpretation,
    recommendation: {
      title: 'Recomendação',
      detail: contextual.recommendation,
      tone: 'neutral',
    },
    indicators: [
      { label: calculation.label, value: displayValue(id, calculation.value) },
      {
        label: 'Dados analisados',
        value: `${Object.keys(values).length} campos`,
      },
    ],
    alerts: [
      'Esta é uma estimativa educativa; regras, datas e condições individuais podem alterar o valor final.',
    ],
    checklist: [
      'Dados de entrada conferidos',
      'Documento ou regra oficial consultado',
      'Decisão comparada com ao menos um cenário',
    ],
    nextSteps: contextual.nextSteps,
  };
}

function salarioLiquido(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const gross = input(values, 'salary');
  const other = input(values, 'otherDiscounts');
  const totalDiscounts = Math.max(0, gross - calculation.value);
  const inssAndIrrf = Math.max(0, totalDiscounts - other);
  const items: readonly DecisionBreakdownItem[] = [
    { label: 'Salário líquido', value: calculation.value },
    { label: 'INSS e IRRF estimados', value: inssAndIrrf },
    { label: 'Outros descontos', value: other },
  ];
  return {
    summary: `De ${money(gross)} brutos, a projeção indica ${money(calculation.value)} disponíveis após os descontos informados.`,
    interpretation: `Os descontos representam ${percent(gross ? (totalDiscounts / gross) * 100 : 0)} do salário bruto. A maior parte do seu orçamento mensal deve considerar o valor líquido, não o bruto.`,
    recommendation: {
      title: 'Planeje com o líquido',
      detail:
        'Use o salário líquido estimado como base do orçamento e confira a composição no holerite.',
      tone: 'positive',
    },
    indicators: [
      { label: 'Salário bruto', value: money(gross) },
      { label: 'Descontos estimados', value: money(totalDiscounts) },
      { label: 'Salário líquido', value: money(calculation.value) },
    ],
    breakdown: { title: 'Composição do salário', items },
    chart: { title: 'Participação no salário bruto', items },
    alerts: [
      'Outros descontos podem incluir benefícios, faltas, pensão ou descontos previstos em contrato e não são recalculados pela ferramenta.',
    ],
    checklist: [
      'Confira a competência do holerite',
      'Compare INSS e IRRF com os valores apresentados',
      'Valide outros descontos antes de planejar o mês',
    ],
    nextSteps: [
      'Atualize seu orçamento com o líquido estimado.',
      'Compare com o holerite quando ele estiver disponível.',
      'Questione diferenças relevantes ao RH.',
    ],
  };
}

function jurosCompostos(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const initial = input(values, 'amount');
  const rate = input(values, 'rate');
  const months = Math.max(0, Math.round(input(values, 'months')));
  const interest = Math.max(0, calculation.value - initial);
  const milestones = [
    0,
    Math.ceil(months / 3),
    Math.ceil((months * 2) / 3),
    months,
  ]
    .filter((month, index, list) => list.indexOf(month) === index)
    .map(
      (month) => `Mês ${month}: ${money(initial * (1 + rate / 100) ** month)}`,
    );
  const crossover =
    rate > 0 ? Math.ceil(Math.log(2) / Math.log(1 + rate / 100)) : null;
  const items = [
    { label: 'Capital inicial', value: initial },
    { label: 'Juros projetados', value: interest },
  ];
  return {
    summary: `Seu patrimônio projetado chega a ${money(calculation.value)}; ${money(interest)} vêm do efeito dos juros compostos.`,
    interpretation:
      crossover && crossover <= months
        ? `Por volta do mês ${crossover}, os juros acumulados passam a superar o capital inicial. Não há aportes mensais nesta simulação.`
        : 'No prazo informado, os juros ainda não superam o capital inicial. Não há aportes mensais nesta simulação.',
    recommendation: {
      title: 'Mantenha o prazo a seu favor',
      detail:
        'Em projeções compostas, consistência e prazo aumentam o peso dos juros sobre o patrimônio.',
      tone: 'positive',
    },
    indicators: [
      { label: 'Patrimônio projetado', value: money(calculation.value) },
      { label: 'Juros projetados', value: money(interest) },
      {
        label: 'Rentabilidade no período',
        value: percent(initial ? (interest / initial) * 100 : 0),
      },
    ],
    breakdown: { title: 'De onde vem o patrimônio', items },
    chart: { title: 'Capital inicial x juros', items },
    timeline: milestones,
    alerts: [
      'A projeção é bruta: impostos, inflação, taxas e oscilações podem reduzir o rendimento real.',
    ],
    checklist: [
      'Taxa e prazo estão na mesma unidade',
      'Impostos e custos foram considerados fora da projeção',
      'A taxa informada é compatível com o produto avaliado',
    ],
    nextSteps: [
      'Compare a projeção com uma taxa mais conservadora.',
      'Inclua impostos e inflação para avaliar o ganho real.',
      'Defina aportes periódicos no seu planejamento.',
    ],
  };
}

function rescisao(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const salary = input(values, 'salary');
  const vacation = salary * (input(values, 'monthsWorked') / 12);
  const notice = salary * (input(values, 'noticeDays') / 30);
  const items = [
    { label: 'Férias proporcionais simplificadas', value: vacation },
    { label: 'Aviso prévio informado', value: notice },
  ];
  return {
    summary: `A estimativa bruta de rescisão é ${money(calculation.value)}, antes de descontos e verbas não informadas.`,
    interpretation:
      'O resultado mostra somente as parcelas modeladas. Saldo de salário, 13º proporcional, FGTS, multa, faltas e o tipo de desligamento podem mudar a composição.',
    recommendation: {
      title: 'Confira o termo de rescisão',
      detail:
        'Use a composição como roteiro para conferir cada verba no TRCT, não como valor definitivo.',
      tone: 'attention',
    },
    indicators: [
      { label: 'Total bruto estimado', value: money(calculation.value) },
      {
        label: 'Tempo informado',
        value: `${number.format(input(values, 'monthsWorked'))} meses`,
      },
      {
        label: 'Aviso informado',
        value: `${number.format(input(values, 'noticeDays'))} dias`,
      },
    ],
    breakdown: { title: 'Composição considerada', items },
    chart: { title: 'Parcelas consideradas', items },
    alerts: [
      'A modalidade da rescisão e os descontos legais não foram apurados nesta estimativa.',
    ],
    checklist: [
      'TRCT e aviso prévio recebidos',
      'Extrato do FGTS conferido',
      'Prazo de pagamento confirmado',
      'Documentos para saque ou benefício separados',
    ],
    nextSteps: [
      'Compare as verbas com o TRCT.',
      'Confira o extrato do FGTS.',
      'Busque orientação trabalhista se houver divergência.',
    ],
  };
}

function seguroDesemprego(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const salary = input(values, 'salary');
  return {
    summary: `A parcela estimada é ${money(calculation.value)}, calculada a partir da média salarial informada de ${money(salary)}.`,
    interpretation:
      'A quantidade de parcelas, a data para solicitar e a habilitação dependem do histórico de vínculos, do motivo da dispensa e da análise oficial; esses dados não são inferidos pela renda.',
    recommendation: {
      title: 'Valide a habilitação oficial',
      detail:
        'Use o valor como referência e consulte seus vínculos e a data de requerimento antes de contar com o benefício.',
      tone: 'attention',
    },
    indicators: [
      { label: 'Parcela estimada', value: money(calculation.value) },
      { label: 'Média salarial informada', value: money(salary) },
      { label: 'Quantidade de parcelas', value: 'Confirmar no requerimento' },
    ],
    table: {
      title: 'Situação a confirmar',
      columns: ['Item', 'Como confirmar'],
      rows: [
        ['Parcelas e período', 'Requerimento e histórico de vínculos'],
        ['Quando solicitar', 'Data de dispensa no requerimento'],
        ['Requisitos', 'Canal oficial do seguro-desemprego'],
      ],
    },
    alerts: [
      'O cálculo da parcela não confirma direito ao benefício nem o número de parcelas.',
    ],
    checklist: [
      'Dispensa sem justa causa confirmada',
      'Requerimento fornecido pelo empregador',
      'Histórico de vínculos conferido',
      'Dados bancários ou de recebimento atualizados',
    ],
    nextSteps: [
      'Localize o número do requerimento.',
      'Consulte a habilitação no canal oficial.',
      'Solicite dentro do prazo informado no requerimento.',
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
      return rescisao(values, calculation);
    case 'seguro-desemprego':
      return seguroDesemprego(values, calculation);
    default:
      return genericDecision(id, values, calculation);
  }
}
