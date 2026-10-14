import { inssCeiling2026, minimumWage2026 } from './constants';
import {
  inssBackPay,
  insalubrityBase,
  ipvaMonths,
  retirementByAge,
} from './rules';
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

const dateLabel = (days: number) =>
  new Date(days * dayInMs).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

export function retroativosInss(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const monthly = input(values, 'monthly');
  const start = input(values, 'startDate');
  const end = input(values, 'endDate');
  const { days } = inssBackPay(monthly, start, end);
  const fullMonths = Math.floor(days / 30);
  const restDays = days - fullMonths * 30;

  return {
    summary:
      days > 0
        ? `Entre ${dateLabel(start)} e ${dateLabel(end)} são ${days} dias, ou ${fullMonths} ${fullMonths === 1 ? 'mês' : 'meses'} e ${restDays} ${restDays === 1 ? 'dia' : 'dias'} pela regra de 30 dias por mês. Os retroativos estimados são de ${money(calculation.value)}.`
        : 'A data do primeiro pagamento precisa ser posterior ao início do direito para existir valor atrasado.',
    table: {
      title: 'Como chegamos ao valor',
      columns: ['Item', 'Valor'],
      rows: [
        ['Mensalidade do benefício', money(monthly)],
        [
          'Valor de cada dia (mensalidade dividida por 30)',
          money(monthly / 30),
        ],
        ['Dias entre as datas', number.format(days)],
        ['Meses completos', money(monthly * fullMonths)],
        ['Dias restantes', money((monthly / 30) * restDays)],
        ['Retroativos estimados', money(calculation.value)],
      ],
    },
    references: [
      'Lei 8.213/1991, arts. 43, 49 e 60 (data de início do benefício)',
      'INSS: Meu INSS, consulta de pagamentos',
    ],
    alerts: [
      'O INSS corrige os atrasados e, em ações judiciais, pode somar juros. A calculadora não inclui correção, por isso o valor real tende a ser um pouco maior.',
      'Quando o valor acumulado é pago de uma só vez, pode haver Imposto de Renda sobre rendimentos acumulados. Confira o extrato de pagamento no Meu INSS.',
      'Se houve parcelas já pagas no período, desconte-as antes de comparar com o que o INSS informa.',
    ],
  };
}

export function prazoAuxilioInss(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const start = input(values, 'startDate');
  const end = input(values, 'endDate');
  const days = calculation.value;
  const windowStart = end - 15;
  const atestmedLimit = days > 0 && days <= 90;

  return {
    summary:
      end >= start
        ? `Com cessação em ${dateLabel(end)}, o pedido de prorrogação deve ser feito de ${dateLabel(windowStart)} até ${dateLabel(end)}. O benefício dura ${days} ${days === 1 ? 'dia' : 'dias'} no total.`
        : 'A data de cessação precisa ser igual ou posterior ao início do benefício.',
    table: {
      title: 'Datas importantes',
      columns: ['Etapa', 'Data'],
      rows: [
        ['Início do benefício', dateLabel(start)],
        ['Primeiro dia para pedir a prorrogação', dateLabel(windowStart)],
        ['Cessação programada (alta)', dateLabel(end)],
        ['Dias de benefício', number.format(days)],
        [
          'Dentro do limite de 90 dias da análise documental',
          atestmedLimit ? 'Sim' : 'Não',
        ],
      ],
    },
    references: [
      'Portaria Conjunta PRES/INSS/SRGPS/MPS nº 49/2024',
      'INSS: Meu INSS, pedido de prorrogação',
    ],
    alerts: [
      'Pedir fora dessa janela pode fazer o sistema não aceitar a prorrogação. Nesse caso, pode ser preciso fazer um novo pedido de benefício, com nova análise.',
      'Em regra, o benefício é mantido enquanto o pedido de prorrogação aguarda a análise. Guarde o protocolo e acompanhe a situação no Meu INSS.',
      'A regra do atestado analisado sem perícia presencial vale para benefícios de até 90 dias somados. Acima disso, o INSS pode marcar perícia.',
    ],
  };
}

export function aposentadoriaIdade(
  values: CalculatorValues,
  calculation: CalculationResult,
): CalculatorDecision {
  const r = retirementByAge(values);
  const age = input(values, 'age');
  const years = Math.floor(input(values, 'years'));
  const average = input(values, 'amount');
  const ready = r.ageOk && r.yearsOk;
  const raw = average * (r.rate / 100);
  const limited =
    raw < minimumWage2026
      ? ' O valor foi elevado ao salário mínimo.'
      : raw > inssCeiling2026
        ? ' O valor foi limitado ao teto do INSS.'
        : '';

  return {
    summary: ready
      ? `Com ${age} anos de idade e ${years} anos de contribuição, a regra permanente indica ${percent(r.rate)} da média, ou ${money(calculation.value)} por mês.${limited}`
      : `Pela regra permanente, ${r.woman ? 'mulheres' : 'homens'} precisam de ${r.minAge} anos de idade e ${r.minYears} anos de contribuição. ${r.ageOk ? '' : `Faltam ${Math.max(0, r.minAge - age)} ano(s) de idade. `}${r.yearsOk ? '' : `Faltam ${Math.max(0, r.minYears - years)} ano(s) de contribuição. `}O valor abaixo é uma projeção para quando os requisitos forem cumpridos.`,
    table: {
      title: 'Requisitos e cálculo',
      columns: ['Item', 'Situação'],
      rows: [
        ['Idade mínima', `${r.minAge} anos (você informou ${age})`],
        ['Contribuição mínima', `${r.minYears} anos (você informou ${years})`],
        ['Percentual', percent(r.rate)],
        ['Média dos salários', money(average)],
        ['Resultado antes de piso e teto', money(raw)],
        ['Aposentadoria estimada', money(calculation.value)],
      ],
    },
    references: [
      'Emenda Constitucional 103/2019, arts. 19 e 26',
      'INSS: aposentadoria por idade',
    ],
    alerts: [
      'Esta é a regra permanente, aplicada a quem começou a contribuir depois de 13/11/2019. Quem já contribuía antes pode ter regras de transição, com idade e tempo diferentes.',
      'A média usa todos os salários de contribuição desde julho de 1994, corrigidos. Consulte o CNIS no Meu INSS para ver o histórico e use a calculadora de INSS para simular a média.',
    ],
  };
}
