import type {
  CalculatorId,
  CalculatorValues,
  CalculationResult,
} from './types';

const monthDays = 30;
const annualCdiReference = 10.4;
const minimumWage2026 = 1621;

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

function progressiveInss(base: number) {
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

function progressiveIrrf(base: number, taxableIncome = base) {
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
  const reduction =
    taxableIncome <= 5000
      ? total
      : taxableIncome <= 7350
        ? Math.max(0, 978.62 - 0.133145 * taxableIncome)
        : 0;
  return Math.max(0, total - reduction);
}

function plrTax(base: number) {
  if (base <= 8214.4) return 0;
  if (base <= 9922.28) return base * 0.075 - 616.08;
  if (base <= 13167) return base * 0.15 - 1360.25;
  if (base <= 16380.38) return base * 0.225 - 2347.78;
  return base * 0.275 - 3166.8;
}

function pricePayment(principal: number, monthlyRate: number, months: number) {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  return (
    (principal * (monthlyRate * (1 + monthlyRate) ** months)) /
    ((1 + monthlyRate) ** months - 1)
  );
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
    case 'rescisao-clt': {
      const monthsWorked = value(values, 'monthsWorked');
      const noticeDays = value(values, 'noticeDays');
      return result(
        'Estimativa da rescisão bruta',
        salary * (monthsWorked / 12 + noticeDays / monthDays),
        'Soma férias proporcionais simplificadas e aviso prévio informado; não inclui todas as verbas e descontos possíveis.',
      );
    }
    case 'salario-liquido': {
      const otherDiscounts = value(values, 'otherDiscounts');
      const inss = progressiveInss(salary);
      return result(
        'Salário líquido estimado',
        salary -
          inss -
          progressiveIrrf(Math.max(0, salary - inss), salary) -
          otherDiscounts,
        'Estimativa com tabela progressiva de referência e os descontos adicionais informados.',
      );
    }
    case 'ferias':
      return result(
        'Férias brutas estimadas',
        salary * (1 + value(values, 'days') / (monthDays * 3)),
        'Considera remuneração proporcional aos dias e o adicional constitucional de um terço.',
      );
    case 'seguro-desemprego':
      return result(
        'Parcela estimada',
        Math.min(
          Math.max(
            salary <= 2222.17
              ? salary * 0.8
              : 1777.74 + (salary - 2222.17) * 0.5,
            minimumWage2026,
          ),
          2518.65,
        ),
        'Aplica as faixas oficiais de 2026, respeitando o salário mínimo e o teto do benefício.',
      );
    case 'decimo-salario':
      return result(
        '13º salário bruto',
        salary,
        'Corresponde a uma remuneração mensal antes dos descontos aplicáveis.',
      );
    case 'irrf':
      return result(
        'IRRF estimado',
        progressiveIrrf(
          Math.max(0, salary - value(values, 'deductions')),
          salary,
        ),
        'Calculado com a tabela progressiva e a redução mensal vigentes em 2026.',
      );
    case 'horas-extras':
      return result(
        'Valor das horas extras',
        (salary / value(values, 'monthlyHours')) *
          value(values, 'extraHours') *
          (1 + rate / 100),
        'Usa o valor-hora, a quantidade de horas e o adicional informado.',
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
        'Quantidade de dias',
        Math.abs(value(values, 'endDay') - value(values, 'startDay')),
        'Conta a diferença entre os números de dia informados; para datas completas, informe dias consecutivos no período.',
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
        amount *
          ((1 + (annualCdiReference * rate) / 10000) ** (months / 12) - 1),
        'Usa uma taxa CDI anual de referência e o percentual do CDI informado.',
      );
    case 'financiamento-sac-price': {
      const principal = amount;
      const monthlyRate = rate / 100;
      const estimatedPricePayment = pricePayment(
        principal,
        monthlyRate,
        months,
      );
      const sacFirst = principal / months + principal * monthlyRate;
      return result(
        'Diferença na primeira parcela',
        months > 0 ? sacFirst - estimatedPricePayment : 0,
        'Valor positivo indica que a primeira parcela SAC é maior que a parcela Price estimada.',
      );
    }
    case 'reajuste-aluguel':
      return result(
        'Novo aluguel estimado',
        amount * (1 + rate / 100),
        'Aplica o índice percentual informado ao aluguel atual.',
      );
    case 'bolsa-familia':
      return result(
        'Referência mensal estimada',
        600 +
          Math.max(0, value(values, 'childrenUnder7')) * 150 +
          Math.max(0, value(values, 'childrenOver7')) * 50,
        'Modelo educacional baseado na composição familiar informada; a elegibilidade depende do CadÚnico e das regras vigentes.',
      );
    case 'pis':
      return result(
        'Abono salarial estimado',
        (minimumWage2026 * Math.min(12, months)) / 12,
        'Proporcional aos meses trabalhados, sujeito aos requisitos oficiais.',
      );
    case 'das-limite-mei':
      return result(
        'Percentual do limite anual usado',
        percentage(amount, 100 / 81000),
        'Compara o faturamento informado ao limite anual de referência do MEI.',
      );
    case 'custo-funcionario-clt':
      return result(
        'Custo mensal estimado',
        salary * (1 + rate / 100),
        'Acrescenta ao salário o percentual de encargos informado.',
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
        (salary / value(values, 'monthlyHours')) *
          value(values, 'nightHours') *
          (rate / 100),
        'Aplica o adicional percentual informado sobre as horas noturnas.',
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
        (((salary * months) / 12) * 4) / 3,
        'Calcula avos de férias e adiciona um terço constitucional.',
      );
    case 'decimo-proporcional':
      return result(
        '13º proporcional bruto',
        (salary * months) / 12,
        'Calcula os avos trabalhados no ano informado.',
      );
    case 'aviso-previo':
      return result(
        'Aviso prévio estimado',
        (salary * value(values, 'noticeDays')) / monthDays,
        'Converte os dias de aviso informados em valor proporcional ao salário.',
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
        'Custo estimado da demissão',
        salary * (value(values, 'monthsWorked') / 12 + rate / 100),
        'Soma uma provisão proporcional de verbas e multa percentual informada.',
      );
    case 'pro-labore':
      return result(
        'Pró-labore líquido estimado',
        amount - percentage(amount, rate),
        'Desconta a alíquota de contribuição informada do pró-labore bruto.',
      );
    case 'inss-autonomo':
      return result(
        'INSS do autônomo estimado',
        percentage(amount, rate),
        'Aplica a alíquota escolhida sobre a base de contribuição informada.',
      );
    case 'simples-nacional':
      return result(
        'DAS estimado',
        percentage(amount, rate),
        'Aplica a alíquota efetiva informada à receita mensal.',
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
        amount * (1 + rate / 100),
        'Acrescenta o percentual total de multa e juros informado à guia original.',
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
        salary * months,
        'Multiplica a remuneração mensal pelos meses de afastamento informados.',
      );
    case 'auxilio-incapacidade':
      return result(
        'Benefício estimado',
        percentage(amount, rate),
        'Aplica o percentual informado sobre a média de contribuição; a concessão depende de perícia do INSS.',
      );
    case 'ipva':
      return result(
        'IPVA estimado',
        percentage(amount, rate),
        'Aplica a alíquota estadual informada sobre o valor venal do veículo.',
      );
    case 'cdb-liquido':
      return result(
        'CDB líquido estimado',
        amount *
          ((1 + rate / 100) ** (months / 12) - 1) *
          (1 - value(values, 'taxRate') / 100),
        'Calcula o rendimento bruto anualizado e desconta a alíquota de IR informada sobre o lucro.',
      );
    case 'cdb-poupanca':
      return result(
        'Diferença de rendimento',
        amount *
          ((1 + rate / 100) ** (months / 12) -
            (1 + value(values, 'savingsRate') / 100) ** (months / 12)),
        'Compara duas taxas anuais sobre o mesmo valor e prazo.',
      );
    case 'tesouro-selic':
      return result(
        'Tesouro Selic líquido estimado',
        amount *
          ((1 + rate / 100) ** (months / 12) - 1) *
          (1 - value(values, 'taxRate') / 100),
        'Aplica a taxa anual informada e desconta o imposto estimado sobre o rendimento.',
      );
    case 'lci-lca':
      return result(
        'Rendimento líquido estimado',
        amount * ((1 + rate / 100) ** (months / 12) - 1),
        'Projeção com isenção de IR para pessoa física, sujeita às condições do emissor.',
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
        'Economia estimada de juros',
        (amount * (rate / 100) * months) / 2,
        'Estimativa simplificada de juros evitados ao antecipar parcelas.',
      );
  }
}
