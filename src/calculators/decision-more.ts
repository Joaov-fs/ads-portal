import { minimumWage2026 } from './constants';
import { insalubrityBase, ipvaMonths } from './rules';
import type {
  CalculationResult,
  CalculatorDecision,
  CalculatorValues,
} from './types';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const number = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
const rateFormat = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 4,
  minimumFractionDigits: 2,
});
const money = (value: number) => currency.format(value);
const percent = (value: number) => `${rateFormat.format(value)}%`;
const input = (values: CalculatorValues, name: string) => values[name] ?? 0;

const hoursLabel = (hours: number) => {
  const sign = hours < 0 ? '−' : '';
  const total = Math.round(Math.abs(hours) * 60);

  return `${sign}${Math.floor(total / 60)}h${String(total % 60).padStart(2, '0')}`;
};

/** Reflexos mensais de um adicional fixo em 13º, férias com 1/3 e FGTS. */
function additionalReflections(additional: number) {
  const thirteenth = additional / 12;
  const vacation = (additional / 12) * (4 / 3);
  const fgts = additional * 0.08;

  return {
    fgts,
    thirteenth,
    total: thirteenth + vacation + fgts,
    vacation,
  };
}

function reflectionsTable(additional: number) {
  const r = additionalReflections(additional);
  const row = (label: string, monthly: number) => [
    label,
    money(monthly),
    money(monthly * 12),
  ];

  return {
    title: 'Reflexos do adicional (média por mês)',
    columns: ['Reflexo', 'Por mês', 'Em 12 meses'],
    rows: [
      row('13º salário (1/12)', r.thirteenth),
      row('Férias + 1/3 (1/12)', r.vacation),
      row('FGTS de 8% sobre o adicional', r.fgts),
      row('Total dos reflexos', r.total),
    ],
  } as const;
}

export function salarioMaternidade(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const salary = input(values, 'salary');
  const months = Math.min(6, Math.max(0, Math.round(input(values, 'months'))));
  const days = months * 30;
  const rows = Array.from({ length: months }, (_, index) => [
    `${index + 1}ª parcela (dias ${index * 30 + 1} a ${(index + 1) * 30})`,
    money(salary),
  ]);

  return {
    summary: `São ${days} dias de afastamento e ${money(calculation.value)} brutos no total, sem perder o salário.`,
    table: {
      title: 'Parcelas do salário-maternidade',
      columns: ['Período', 'Valor bruto'],
      rows: [...rows, ['Total bruto', money(calculation.value)]],
    },
    references: [
      'Lei 8.213/1991, art. 71 (INSS)',
      'CLT, art. 392 (licença de 120 dias)',
      'Lei 11.770/2008 (Empresa Cidadã, mais 60 dias)',
    ],
    alerts: [
      'Empregada CLT: a empresa paga e compensa nas contribuições ao INSS. O valor entra na folha, com desconto de INSS e Imposto de Renda como no salário, e não exige carência.',
      'Contribuinte individual, MEI, facultativa e desempregada com qualidade de segurada: o INSS paga, a base é a média das últimas contribuições, limitada ao teto do INSS, e há carência de 10 contribuições.',
    ],
  };
}

function additionalDecision(
  values: CalculatorValues,
  config: {
    additional: number;
    additionalLabel: string;
    alerts: readonly string[];
    base: number;
    baseLabel: string;
    baseNote: string;
    extraTable?: CalculatorDecision['table'];
    references: readonly string[];
    title: string;
  },
): CalculatorDecision {
  const { additional, base } = config;

  return {
    summary: `O adicional soma ${money(additional)} por mês, o que leva a remuneração a ${money(base + additional)} (${config.baseNote}).`,
    statement: {
      title: config.title,
      netLabel: 'Remuneração com adicional',
      rows: [
        { label: config.baseLabel, earning: base },
        { label: config.additionalLabel, earning: additional },
      ],
      note: 'Valores brutos, antes de INSS e IRRF.',
    },
    table: config.extraTable,
    references: config.references,
    alerts: config.alerts,
  };
}

export function periculosidade(values: CalculatorValues): CalculatorDecision {
  const salary = input(values, 'salary');
  const additional = salary * 0.3;

  return additionalDecision(values, {
    additional,
    additionalLabel: 'Adicional de periculosidade',
    alerts: [
      'O adicional incide sobre o salário-base, sem gratificações, prêmios ou participação nos lucros (CLT, art. 193, §1º).',
      'Periculosidade e insalubridade não se acumulam: o trabalhador escolhe a mais vantajosa (CLT, art. 193, §2º).',
      'A exposição apenas eventual não dá direito ao adicional; a intermitente dá (Súmula 364 do TST). O enquadramento depende de laudo.',
    ],
    base: salary,
    baseLabel: 'Salário-base',
    baseNote: '30% sobre o salário-base',
    extraTable: reflectionsTable(additional),
    references: [
      'CLT, art. 193',
      'Norma Regulamentadora NR-16 (Ministério do Trabalho)',
      'Súmula 132 do TST (integra o cálculo de horas extras)',
    ],
    title: 'Demonstrativo do adicional de periculosidade',
  });
}

export function insalubridade(values: CalculatorValues): CalculatorDecision {
  const base = insalubrityBase(values);
  const rate = input(values, 'rate');
  const additional = (base * rate) / 100;
  const informedBase = input(values, 'baseSalary') > 0;

  return additionalDecision(values, {
    additional,
    additionalLabel: `Adicional de insalubridade (${percent(rate)})`,
    alerts: [
      informedBase
        ? 'Você informou a base. Sem norma coletiva ou contrato que defina outra, a base é o salário mínimo.'
        : `Sem base informada, usamos o salário mínimo de ${money(minimumWage2026)}, que é a regra geral (CLT, art. 192, e Súmula Vinculante 4 do STF).`,
      'O grau (10%, 20% ou 40%) vem do laudo técnico. O adicional deixa de ser devido se o equipamento de proteção neutralizar o agente nocivo (Súmula 80 do TST).',
      'Insalubridade e periculosidade não se acumulam: vale a mais vantajosa (CLT, art. 193, §2º).',
    ],
    base,
    baseLabel: informedBase
      ? 'Base de cálculo informada'
      : 'Salário mínimo (base)',
    baseNote: `${percent(rate)} sobre a base`,
    extraTable: {
      title: 'Valor por grau de insalubridade',
      columns: ['Grau', 'Percentual', 'Adicional mensal'],
      rows: [
        ['Mínimo', '10%', money(base * 0.1)],
        ['Médio', '20%', money(base * 0.2)],
        ['Máximo', '40%', money(base * 0.4)],
      ],
    },
    references: [
      'CLT, arts. 189 a 192',
      'Norma Regulamentadora NR-15 (Ministério do Trabalho)',
      'Súmula Vinculante 4 do STF e Súmula 228 do TST',
    ],
    title: 'Demonstrativo do adicional de insalubridade',
  });
}

export function pensaoAlimenticia(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const income = input(values, 'salary');
  const deductions = Math.min(income, input(values, 'deductions'));
  const rate = input(values, 'rate');

  return {
    summary: `A pensão de ${percent(rate)} sobre a renda líquida é de ${money(calculation.value)} por mês.`,
    statement: {
      title: 'Pensão alimentícia estimada',
      netLabel: 'Fica com quem paga a pensão',
      rows: [
        { label: 'Rendimento informado', earning: income },
        { label: 'Descontos legais (INSS e IRRF)', discount: deductions },
        {
          label: `Pensão alimentícia (${percent(rate)})`,
          reference: `${percent(rate)} × ${money(Math.max(0, income - deductions))}`,
          discount: calculation.value,
        },
      ],
    },
    references: [
      'Código Civil, arts. 1.694 a 1.710',
      'Lei 5.478/1968 (Lei de Alimentos)',
    ],
    alerts: [
      'Só a decisão judicial ou o acordo define base, percentual e verbas incluídas. Muitas decisões estendem o percentual ao 13º salário e ao terço de férias; confira o que está escrito no seu caso.',
      'Quem recebe mais de um rendimento ou tem filhos de outra relação pode ter a base ajustada pelo juiz.',
    ],
  };
}

export function porcentagem(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const base = input(values, 'amount');
  const rate = input(values, 'rate');
  const after = base * (1 + rate / 100) * (1 - rate / 100);

  return {
    summary: `${percent(rate)} de ${money(base)} é ${money(calculation.value)}.`,
    interpretation: `Aumentar ${percent(rate)} e depois descontar os mesmos ${percent(rate)} não devolve o valor original: o resultado é ${money(after)}, porque o segundo cálculo parte de uma base diferente.`,
    table: {
      title: 'Variações com a mesma porcentagem',
      columns: ['Cálculo', 'Resultado'],
      rows: [
        [`${percent(rate)} de ${money(base)}`, money(calculation.value)],
        [
          `${money(base)} com acréscimo de ${percent(rate)}`,
          money(base + calculation.value),
        ],
        [
          `${money(base)} com desconto de ${percent(rate)}`,
          money(base - calculation.value),
        ],
      ],
    },
    alerts: [],
  };
}

export function jurosSimples(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const initial = input(values, 'amount');
  const rate = input(values, 'rate');
  const months = Math.min(
    1200,
    Math.max(0, Math.round(input(values, 'months'))),
  );
  const interest = Math.max(0, calculation.value - initial);
  const compound = initial * (1 + rate / 100) ** months;
  const step = Math.max(1, Math.ceil(months / 24));
  const points: number[] = [];

  for (let month = step; month < months; month += step) points.push(month);
  if (months > 0) points.push(months);

  return {
    summary: `Os juros somam ${money(interest)}, sempre ${money((initial * rate) / 100)} por período, e o montante chega a ${money(calculation.value)}.`,
    interpretation: `Com juros compostos, a mesma taxa e o mesmo prazo dariam ${money(compound)}, uma diferença de ${money(compound - calculation.value)}.`,
    chart: {
      title: 'Capital inicial x juros',
      items: [
        { label: 'Capital inicial', value: initial },
        { label: 'Juros projetados', value: interest },
      ],
    },
    table: {
      title: 'Evolução por período',
      columns: ['Período', 'Juros acumulados', 'Saldo'],
      rows: points.map((month) => {
        const accumulated = (initial * rate * month) / 100;

        return [
          `Período ${month}`,
          money(accumulated),
          money(initial + accumulated),
        ];
      }),
    },
    alerts: [
      'Juros simples valem para prazos curtos ou contratos que dizem expressamente que não capitalizam. Taxa e período precisam estar na mesma unidade.',
    ],
  };
}

export function conversaoTaxa(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const rate = input(values, 'rate');
  const monthly = rate / 100;
  const compound = (periods: number) => ((1 + monthly) ** periods - 1) * 100;
  const fromAnnual = ((1 + rate / 100) ** (1 / 12) - 1) * 100;

  return {
    summary: `Uma taxa de ${percent(rate)} ao mês equivale a ${percent(calculation.value)} ao ano, e não a ${percent(rate * 12)}.`,
    table: {
      title: 'Taxas equivalentes',
      columns: ['Período', 'Taxa efetiva'],
      rows: [
        ['Mensal (informada)', percent(rate)],
        ['Trimestral', percent(compound(3))],
        ['Semestral', percent(compound(6))],
        ['Anual', percent(calculation.value)],
        ['Anual simples (12 × mensal)', percent(rate * 12)],
        [
          `Se ${percent(rate)} fosse a taxa anual, a mensal equivalente seria`,
          percent(fromAnnual),
        ],
      ],
    },
    references: ['Banco Central do Brasil (taxa efetiva e taxa nominal)'],
    alerts: [
      'Multiplicar a taxa mensal por 12 dá a taxa nominal, que ignora os juros sobre juros. Para comparar propostas, use sempre a taxa efetiva e confira o CET do contrato.',
    ],
  };
}

export function ipva(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const value = input(values, 'amount');
  const rate = input(values, 'rate');
  const months = ipvaMonths(values);
  const installments = Math.min(
    12,
    Math.max(1, Math.round(input(values, 'installments')) || 3),
  );
  const full = (value * rate) / 100;

  return {
    summary:
      months === 12
        ? `O IPVA do ano é de ${money(calculation.value)}.`
        : `Como você paga ${months} meses, o IPVA é de ${money(calculation.value)} (o ano inteiro seria ${money(full)}).`,
    table: {
      title: 'Formas de pagamento',
      columns: ['Forma', 'Valor'],
      rows: [
        ['Cota única, sem desconto', money(calculation.value)],
        [
          `Em ${installments} parcelas iguais`,
          `${installments} × ${money(calculation.value / installments)}`,
        ],
      ],
    },
    references: [
      'Secretaria da Fazenda do seu estado (alíquota, calendário e descontos)',
      'Tabela FIPE (valor de referência do veículo)',
    ],
    alerts: [
      'Muitos estados dão desconto para pagamento em cota única até a data do calendário. Confira no site da Secretaria da Fazenda, porque a calculadora não aplica esse desconto.',
      'Alíquota, isenções (como para veículos antigos ou PcD) e número de parcelas mudam de estado para estado.',
    ],
  };
}

export function bancoDeHoras(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const credits = input(values, 'credits');
  const debits = input(values, 'debits');
  const salary = input(values, 'salary');
  const monthlyHours = input(values, 'monthlyHours') || 220;
  const balance = calculation.value;
  const hourly = salary > 0 ? salary / monthlyHours : 0;
  const rows: string[][] = [
    ['Créditos', hoursLabel(credits)],
    ['Débitos', hoursLabel(debits)],
    ['Saldo do banco', hoursLabel(balance)],
  ];

  if (hourly > 0 && balance > 0) {
    rows.push(
      ['Valor da hora normal', money(hourly)],
      ['Saldo pago em dinheiro (hora + 50%)', money(balance * hourly * 1.5)],
    );
  }

  return {
    summary:
      balance > 0
        ? `O saldo é de ${hoursLabel(balance)} a favor do trabalhador.`
        : balance < 0
          ? `O saldo é de ${hoursLabel(balance)}: o trabalhador está devendo horas.`
          : 'O banco de horas está zerado.',
    table: {
      title: 'Resumo do banco de horas',
      columns: ['Item', 'Valor'],
      rows,
    },
    references: [
      'CLT, art. 59, §§ 2º, 5º e 6º',
      'Lei 13.467/2017 (Reforma Trabalhista)',
    ],
    alerts: [
      'Prazo para compensar: no mesmo mês (acordo tácito ou individual), em até 6 meses (acordo individual escrito) ou em até 12 meses (acordo ou convenção coletiva).',
      'Horas a favor do trabalhador que não forem compensadas no prazo devem ser pagas com adicional de, no mínimo, 50%. Informe o salário para ver o valor aproximado.',
    ],
  };
}

const dayInMs = 86_400_000;

export function contadorDeDias(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const start = Math.min(input(values, 'startDate'), input(values, 'endDate'));
  const end = Math.max(input(values, 'startDate'), input(values, 'endDate'));
  const days = calculation.value;
  let businessDays = 0;

  for (let day = start + 1; day <= end && day - start <= 36_500; day += 1) {
    const weekday = (((day + 4) % 7) + 7) % 7;

    if (weekday !== 0 && weekday !== 6) businessDays += 1;
  }

  const a = new Date(start * dayInMs);
  const b = new Date(end * dayInMs);
  let years = b.getUTCFullYear() - a.getUTCFullYear();
  let months = b.getUTCMonth() - a.getUTCMonth();
  let rest = b.getUTCDate() - a.getUTCDate();

  if (rest < 0) {
    months -= 1;
    rest += new Date(
      Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), 0),
    ).getUTCDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const plural = (n: number, one: string, many: string) =>
    `${n} ${n === 1 ? one : many}`;

  return {
    summary: `Entre as duas datas há ${plural(days, 'dia corrido', 'dias corridos')}, sendo ${plural(businessDays, 'dia útil', 'dias úteis')} de segunda a sexta.`,
    table: {
      title: 'A mesma distância de outras formas',
      columns: ['Medida', 'Valor'],
      rows: [
        ['Dias corridos', number.format(days)],
        [
          'Dias úteis (segunda a sexta, sem feriados)',
          number.format(businessDays),
        ],
        [
          'Semanas e dias',
          `${Math.floor(days / 7)} semanas e ${days % 7} dias`,
        ],
        [
          'Anos, meses e dias',
          `${plural(years, 'ano', 'anos')}, ${plural(months, 'mês', 'meses')} e ${plural(rest, 'dia', 'dias')}`,
        ],
      ],
    },
    alerts: [
      'A contagem não inclui o dia inicial e não desconta feriados. Prazos legais têm regras próprias: no processo civil, por exemplo, só contam os dias úteis e o primeiro dia é excluído (CPC, arts. 219 e 224).',
    ],
  };
}

export function valeTransporteDecision(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const salary = input(values, 'salary');
  const cost = input(values, 'amount');
  const limit = salary * 0.06;
  const company = Math.max(0, cost - calculation.value);

  return {
    summary: `O desconto do trabalhador é de ${money(calculation.value)} por mês e a empresa paga ${money(company)}.`,
    table: {
      title: 'Divisão do vale-transporte',
      columns: ['Item', 'Por mês', 'Em 12 meses'],
      rows: [
        ['Custo do transporte', money(cost), money(cost * 12)],
        ['Limite de desconto (6% do salário)', money(limit), money(limit * 12)],
        [
          'Pago pelo trabalhador',
          money(calculation.value),
          money(calculation.value * 12),
        ],
        ['Pago pela empresa', money(company), money(company * 12)],
      ],
    },
    references: ['Lei 7.418/1985 (vale-transporte)', 'Decreto 10.854/2021'],
    alerts: [
      cost < limit
        ? 'O transporte custa menos que 6% do salário, então o desconto é o próprio custo e a empresa não paga nada.'
        : 'O desconto é de no máximo 6% do salário básico, sem horas extras, comissões ou outros adicionais.',
      'O vale-transporte não tem natureza salarial e não entra no cálculo de férias, 13º ou FGTS. O trabalhador pode abrir mão do benefício por declaração escrita.',
    ],
  };
}
