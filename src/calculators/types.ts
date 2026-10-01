export type CalculatorId =
  | 'adicional-noturno'
  | 'amortizacao-antecipada'
  | 'auxilio-incapacidade'
  | 'aviso-previo'
  | 'banco-de-horas'
  | 'bolsa-familia'
  | 'bpc'
  | 'cdb-liquido'
  | 'cdb-poupanca'
  | 'cdi'
  | 'conversao-taxa'
  | 'contador-dias'
  | 'custo-demissao'
  | 'custo-funcionario-clt'
  | 'das-mei-atraso'
  | 'das-limite-mei'
  | 'decimo-proporcional'
  | 'decimo-salario'
  | 'dsr'
  | 'emprestimo'
  | 'excesso-limite-mei'
  | 'fator-r'
  | 'ferias'
  | 'ferias-proporcionais'
  | 'fgts-multa'
  | 'financiamento-sac-price'
  | 'horas-extras'
  | 'inss'
  | 'inss-autonomo'
  | 'insalubridade'
  | 'ipva'
  | 'irrf'
  | 'juros-compostos'
  | 'juros-simples'
  | 'lci-lca'
  | 'pensao-alimenticia'
  | 'periculosidade'
  | 'pis'
  | 'plr-ppr-liquido'
  | 'porcentagem'
  | 'pro-labore'
  | 'reajuste-aluguel'
  | 'rescisao-clt'
  | 'salario-liquido'
  | 'salario-maternidade'
  | 'salario-por-hora'
  | 'seguro-desemprego'
  | 'simples-nacional'
  | 'tesouro-selic'
  | 'vale-transporte';

export type CalculatorValues = Readonly<Record<string, number>>;

export type CalculationResult = Readonly<{
  explanation: string;
  label: string;
  value: number;
}>;

export type DecisionTone = 'attention' | 'neutral' | 'positive';

export type DecisionIndicator = Readonly<{
  label: string;
  value: string;
}>;

export type DecisionBreakdownItem = Readonly<{
  label: string;
  value: number;
}>;

export type DecisionChart = Readonly<{
  items: readonly DecisionBreakdownItem[];
  title: string;
}>;

export type DecisionTable = Readonly<{
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  title: string;
}>;

/**
 * A domain-aware, framework-independent presentation contract. Calculator
 * rules produce this after the numerical result so React only renders it.
 */
export type CalculatorDecision = Readonly<{
  alerts: readonly string[];
  breakdown?: Readonly<{
    items: readonly DecisionBreakdownItem[];
    title: string;
  }>;
  chart?: DecisionChart;
  checklist: readonly string[];
  indicators: readonly DecisionIndicator[];
  interpretation: string;
  nextSteps: readonly string[];
  recommendation: Readonly<{
    detail: string;
    title: string;
    tone: DecisionTone;
  }>;
  summary: string;
  table?: DecisionTable;
  timeline?: readonly string[];
}>;
