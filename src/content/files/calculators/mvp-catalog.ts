import type { CalculatorId } from '@/calculators/types';

import type {
  CalculatorDocument,
  CalculatorField,
  ContentCategory,
  ContentSource,
} from '../../types';

type CalculatorSpec = Readonly<{
  calculatorId: CalculatorId;
  category: ContentCategory;
  description: string;
  fields: readonly CalculatorField[];
  howItWorks: string;
  slug: string;
  sources?: readonly ContentSource[];
  tags: readonly string[];
  title: string;
}>;

const money = (
  name: string,
  label: string,
  hint?: string,
): CalculatorField => ({
  name,
  label,
  placeholder: '1.000,00',
  type: 'money',
  ...(hint ? { hint } : {}),
});
const number = (
  name: string,
  label: string,
  hint?: string,
): CalculatorField => ({
  name,
  label,
  placeholder: '12',
  type: 'number',
  ...(hint ? { hint } : {}),
});
const percentage = (
  name: string,
  label: string,
  hint?: string,
): CalculatorField => ({
  name,
  label,
  placeholder: '10',
  type: 'percentage',
  ...(hint ? { hint } : {}),
});
const date = (name: string, label: string, hint?: string): CalculatorField => ({
  name,
  label,
  placeholder: 'dd/mm/aaaa',
  type: 'date',
  ...(hint ? { hint } : {}),
});

const sourcesByCategory = {
  beneficios: {
    label: 'Portal Gov.br — Benefícios',
    url: 'https://www.gov.br/pt-br/servicos/solicitar-beneficios-assistenciais',
  },
  economia: {
    label: 'Banco Central do Brasil',
    url: 'https://www.bcb.gov.br/',
  },
  financas: {
    label: 'Banco Central do Brasil — Cidadania Financeira',
    url: 'https://www.bcb.gov.br/cidadaniafinanceira',
  },
  trabalho: {
    label: 'Ministério do Trabalho e Emprego',
    url: 'https://www.gov.br/trabalho-e-emprego/',
  },
  utilidades: { label: 'Portal Gov.br', url: 'https://www.gov.br/' },
} as const satisfies Record<ContentCategory, { label: string; url: string }>;

const specs = [
  {
    calculatorId: 'rescisao-clt',
    slug: 'rescisao-clt',
    title: 'Calculadora de Rescisão CLT',
    category: 'trabalho',
    description:
      'Simule a rescisão por dispensa sem justa causa: saldo de salário, aviso prévio, 13º, férias com 1/3 e multa de 40% do FGTS.',
    howItWorks:
      'A simulação considera dispensa sem justa causa com aviso prévio indenizado, que cresce 3 dias por ano de contrato até 90 dias. O saldo do FGTS é estimado em 8% do salário por mês trabalhado. Os valores são brutos, antes de INSS e IRRF, e adicionais, médias de horas extras e faltas podem alterar o total.',
    tags: ['trabalho', 'rescisao', 'salario'],
    fields: [
      money('salary', 'Último salário mensal'),
      number(
        'monthsWorked',
        'Meses totais de contrato',
        'Do primeiro dia de trabalho até a saída. Define o aviso prévio e o saldo estimado do FGTS.',
      ),
      number(
        'daysLastMonth',
        'Dias trabalhados no mês da saída',
        'Entre 0 e 30. Gera o saldo de salário.',
      ),
      number(
        'monthsInYear',
        'Meses trabalhados no ano da saída',
        'De janeiro até a saída, de 0 a 12. Fração de 15 dias ou mais conta como mês.',
      ),
      number(
        'monthsSinceVacation',
        'Meses desde o último período de férias',
        'Meses completos desde o aniversário do contrato, de 0 a 11.',
      ),
      number(
        'expiredVacations',
        'Períodos de férias vencidas',
        'Férias já adquiridas e ainda não tiradas. Se não houver, informe 0.',
      ),
    ],
  },
  {
    calculatorId: 'seguro-desemprego',
    slug: 'seguro-desemprego',
    title: 'Calculadora de Seguro-Desemprego',
    category: 'trabalho',
    description:
      'Tenha uma referência da parcela antes de consultar a habilitação oficial.',
    howItWorks:
      'O modelo aplica as faixas, o piso de R$ 1.621,00 e o teto de R$ 2.518,65 vigentes desde 11 de janeiro de 2026. Direito e quantidade de parcelas dependem do histórico do trabalhador.',
    tags: ['trabalho', 'beneficio', 'salario'],
    fields: [money('salary', 'Média salarial dos últimos meses')],
    sources: [
      {
        label: 'Fundo de Amparo ao Trabalhador — tabela 2026',
        url: 'https://portalfat.mte.gov.br/mte-reajusta-valores-do-beneficio-seguro-desemprego/',
      },
    ],
  },
  {
    calculatorId: 'decimo-salario',
    slug: 'decimo-salario',
    title: 'Calculadora de 13º Salário',
    category: 'trabalho',
    description:
      'Veja uma referência do décimo terceiro bruto com base na remuneração mensal.',
    howItWorks:
      'O resultado considera uma remuneração mensal integral. Encargos, médias de variáveis e parcelas já pagas são tratados no holerite.',
    tags: ['trabalho', 'salario', 'decimo'],
    fields: [money('salary', 'Salário mensal')],
  },
  {
    calculatorId: 'irrf',
    slug: 'irrf',
    title: 'Calculadora de IRRF',
    category: 'trabalho',
    description:
      'Estime o imposto de renda retido na fonte após as deduções informadas.',
    howItWorks:
      'A regra percorre faixas progressivas de referência sobre a base tributável. Deduções legais e a tabela vigente precisam ser conferidas antes de usar o resultado para planejamento.',
    tags: ['trabalho', 'imposto', 'salario'],
    fields: [
      money('salary', 'Base de rendimento'),
      money('deductions', 'Deduções mensais'),
    ],
    sources: [
      {
        label: 'Receita Federal — tributação de 2026',
        url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
      },
    ],
  },
  {
    calculatorId: 'horas-extras',
    slug: 'horas-extras',
    title: 'Calculadora de Horas Extras',
    category: 'trabalho',
    description:
      'Converta horas extras e adicional em uma estimativa de remuneração.',
    howItWorks:
      'O valor-hora é obtido pela carga mensal. Depois, o adicional informado é aplicado às horas extras registradas.',
    tags: ['trabalho', 'horas', 'salario'],
    fields: [
      money('salary', 'Salário mensal'),
      number('monthlyHours', 'Horas mensais'),
      number('extraHours', 'Horas extras'),
      percentage('rate', 'Adicional de hora extra'),
    ],
  },
  {
    calculatorId: 'fgts-multa',
    slug: 'fgts-multa',
    title: 'Calculadora de FGTS + Multa',
    category: 'trabalho',
    description:
      'Projete depósitos de FGTS e a multa com base no período e percentual de desligamento.',
    howItWorks:
      'A simulação usa 8% do salário por mês e aplica a multa escolhida sobre esse saldo estimado. Não substitui o extrato da conta vinculada.',
    tags: ['trabalho', 'fgts', 'rescisao'],
    fields: [
      money('salary', 'Salário mensal'),
      number('months', 'Meses de depósito'),
      percentage('rate', 'Multa rescisória'),
    ],
  },
  {
    calculatorId: 'inss',
    slug: 'inss',
    title: 'Calculadora de INSS',
    category: 'trabalho',
    description:
      'Estime a contribuição previdenciária do empregado com cálculo progressivo.',
    howItWorks:
      'A contribuição é calculada por faixas de referência, e não por uma alíquota única sobre todo o salário.',
    tags: ['trabalho', 'inss', 'salario'],
    fields: [money('salary', 'Salário bruto')],
    sources: [
      {
        label: 'INSS — tabela de contribuição mensal de 2026',
        url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
      },
    ],
  },
  {
    calculatorId: 'contador-dias',
    slug: 'contador-de-dias',
    title: 'Contador de Dias',
    category: 'utilidades',
    description: 'Descubra quantos dias existem entre duas datas.',
    howItWorks:
      'Escolha as duas datas no calendário para ver os dias corridos entre elas, sem contar o dia inicial. Para prazos legais, confirme se a regra aplicável inclui o dia inicial ou o final.',
    tags: ['utilidades', 'dias', 'prazo'],
    fields: [date('startDate', 'Data inicial'), date('endDate', 'Data final')],
  },
  {
    calculatorId: 'porcentagem',
    slug: 'porcentagem',
    title: 'Calculadora de Porcentagem',
    category: 'utilidades',
    description:
      'Calcule uma porcentagem de qualquer valor para descontos, aumentos e comparações.',
    howItWorks:
      'A ferramenta multiplica o valor-base pela taxa percentual informada.',
    tags: ['utilidades', 'porcentagem', 'financas'],
    fields: [money('amount', 'Valor-base'), percentage('rate', 'Porcentagem')],
  },
  {
    calculatorId: 'cdi',
    slug: 'cdi',
    title: 'Calculadora de CDI',
    category: 'financas',
    description:
      'Projete o rendimento bruto de um investimento remunerado como percentual do CDI.',
    howItWorks:
      'A projeção aplica a taxa anual do CDI que você informar ao percentual contratado e ao prazo. O CDI muda com a Selic, então consulte o valor atual no site do Banco Central. O resultado é bruto, antes do Imposto de Renda.',
    tags: ['financas', 'cdi', 'investimentos'],
    fields: [
      money('amount', 'Valor investido'),
      percentage(
        'cdiRate',
        'Taxa anual do CDI',
        'Consulte a taxa atual no site do Banco Central ou da B3.',
      ),
      percentage(
        'rate',
        'Percentual do CDI',
        'Quanto o investimento paga do CDI. Em um CDB de 110% do CDI, informe 110.',
      ),
      number('months', 'Prazo em meses'),
    ],
  },
  {
    calculatorId: 'financiamento-sac-price',
    slug: 'financiamento-sac-price',
    title: 'Financiamento SAC x Price',
    category: 'financas',
    description:
      'Compare o comportamento inicial das parcelas nos sistemas SAC e Price.',
    howItWorks:
      'A comparação mostra a diferença entre a primeira parcela SAC e a prestação Price com os mesmos dados. O custo total exige análise do contrato.',
    tags: ['financas', 'financiamento', 'juros'],
    fields: [
      money('amount', 'Valor financiado'),
      percentage('rate', 'Taxa mensal'),
      number('months', 'Prazo em meses'),
    ],
  },
  {
    calculatorId: 'reajuste-aluguel',
    slug: 'reajuste-aluguel',
    title: 'Calculadora de Reajuste de Aluguel',
    category: 'financas',
    description:
      'Atualize um aluguel a partir do índice ou percentual previsto no contrato.',
    howItWorks:
      'A ferramenta aplica o percentual informado ao aluguel atual. Confira índice, período de apuração e cláusula contratual.',
    tags: ['financas', 'aluguel', 'reajuste'],
    fields: [
      money('amount', 'Aluguel atual'),
      percentage('rate', 'Índice de reajuste'),
    ],
  },
  {
    calculatorId: 'bolsa-familia',
    slug: 'bolsa-familia',
    title: 'Calculadora de Bolsa Família',
    category: 'beneficios',
    description:
      'Estime o valor mensal do Bolsa Família com os novos valores de outubro de 2026, a partir da composição da família.',
    howItWorks:
      'A estimativa soma a Renda de Cidadania de R$ 164 por pessoa, o Primeira Infância de R$ 173 por criança de 0 a 6 anos e o Variável Familiar de R$ 58 por integrante elegível. Se a soma não chega a R$ 691, o Benefício Complementar garante o piso. Quem tem direito e o valor pago são definidos pelo CadÚnico e pelo Ministério.',
    tags: ['beneficios', 'bolsa-familia', 'familia'],
    fields: [
      number(
        'people',
        'Pessoas na família',
        'Conte todos os integrantes que moram na casa e constam no CadÚnico.',
      ),
      number('childrenUnder7', 'Crianças de 0 a 6 anos'),
      number(
        'childrenOver7',
        'Adolescentes de 7 a 18 anos, gestantes e nutrizes',
        'Conte cada pessoa que se enquadra nessas situações.',
      ),
    ],
    sources: [
      {
        label:
          'MDS — Bolsa Família terá valor mínimo de R$ 691 a partir de outubro',
        url: 'https://www.gov.br/mds/pt-br/noticias/bolsa-familia-tera-valor-minimo-de-r-691-a-partir-de-outubro',
      },
    ],
  },
  {
    calculatorId: 'pis',
    slug: 'pis',
    title: 'Calculadora de PIS',
    category: 'beneficios',
    description: 'Estime o abono salarial proporcional aos meses trabalhados.',
    howItWorks:
      'A referência é proporcional aos meses considerados e depende de todos os requisitos legais para pagamento.',
    tags: ['beneficios', 'pis', 'trabalho'],
    fields: [number('months', 'Meses trabalhados no ano')],
  },
  {
    calculatorId: 'das-limite-mei',
    slug: 'das-limite-mei',
    title: 'DAS / Limite MEI',
    category: 'financas',
    description:
      'Acompanhe quanto do limite anual do MEI já foi utilizado pelo faturamento.',
    howItWorks:
      'O resultado mostra o percentual do limite anual de referência consumido. A guia DAS é definida pela atividade e regras tributárias.',
    tags: ['mei', 'negocios', 'impostos'],
    fields: [money('amount', 'Faturamento acumulado no ano')],
  },
  {
    calculatorId: 'custo-funcionario-clt',
    slug: 'custo-funcionario-clt',
    title: 'Custo de Funcionário CLT',
    category: 'trabalho',
    description:
      'Projete o custo mensal total ao adicionar encargos e benefícios ao salário.',
    howItWorks:
      'Informe o percentual que representa encargos e benefícios da empresa para chegar a uma referência de custo.',
    tags: ['trabalho', 'empresa', 'encargos'],
    fields: [
      money('salary', 'Salário bruto'),
      percentage('rate', 'Encargos e benefícios'),
    ],
  },
  {
    calculatorId: 'fator-r',
    slug: 'fator-r',
    title: 'Calculadora de Fator R',
    category: 'financas',
    description:
      'Calcule a relação entre folha e receita bruta para análise no Simples Nacional.',
    howItWorks:
      'O Fator R divide a folha acumulada pela receita bruta acumulada em 12 meses. A classificação tributária requer orientação contábil.',
    tags: ['negocios', 'simples', 'fator-r'],
    fields: [
      money('payroll', 'Folha dos últimos 12 meses'),
      money('amount', 'Receita bruta dos últimos 12 meses'),
    ],
  },
  {
    calculatorId: 'salario-por-hora',
    slug: 'salario-por-hora',
    title: 'Calculadora de Salário por Hora',
    category: 'trabalho',
    description:
      'Descubra o valor de uma hora de trabalho usando salário e jornada mensal.',
    howItWorks:
      'O cálculo divide a remuneração mensal pela quantidade de horas contratadas no mês.',
    tags: ['trabalho', 'salario', 'horas'],
    fields: [
      money('salary', 'Salário mensal'),
      number('monthlyHours', 'Horas mensais'),
    ],
  },
  {
    calculatorId: 'adicional-noturno',
    slug: 'adicional-noturno',
    title: 'Calculadora de Adicional Noturno',
    category: 'trabalho',
    description:
      'Estime o adicional devido pelas horas trabalhadas no período noturno.',
    howItWorks:
      'A ferramenta encontra o valor-hora e aplica a quantidade de horas e o adicional informado. Regras de hora noturna reduzida podem alterar o resultado.',
    tags: ['trabalho', 'adicional', 'horas'],
    fields: [
      money('salary', 'Salário mensal'),
      number('monthlyHours', 'Horas mensais'),
      number('nightHours', 'Horas noturnas'),
      percentage('rate', 'Adicional noturno'),
    ],
  },
  {
    calculatorId: 'dsr',
    slug: 'dsr',
    title: 'Calculadora de DSR',
    category: 'trabalho',
    description:
      'Estime o descanso semanal remunerado sobre valores variáveis.',
    howItWorks:
      'O valor variável é rateado pelos dias úteis e multiplicado pelos dias de repouso informados.',
    tags: ['trabalho', 'dsr', 'salario'],
    fields: [
      money('amount', 'Valor variável do mês'),
      number('workDays', 'Dias úteis'),
      number('restDays', 'Dias de repouso'),
    ],
  },
  {
    calculatorId: 'banco-de-horas',
    slug: 'banco-de-horas',
    title: 'Calculadora de Banco de Horas',
    category: 'trabalho',
    description: 'Veja se o saldo de banco de horas está positivo ou negativo.',
    howItWorks:
      'Créditos são somados e débitos subtraídos. A compensação segue acordo individual ou coletivo aplicável.',
    tags: ['trabalho', 'horas', 'banco'],
    fields: [
      number('credits', 'Horas de crédito'),
      number('debits', 'Horas de débito'),
    ],
  },
  {
    calculatorId: 'ferias-proporcionais',
    slug: 'ferias-proporcionais',
    title: 'Calculadora de Férias Proporcionais',
    category: 'trabalho',
    description:
      'Projete férias proporcionais e adicional de um terço pelo número de avos.',
    howItWorks:
      'A estimativa usa salário, meses trabalhados no período aquisitivo e adicional constitucional.',
    tags: ['trabalho', 'ferias', 'rescisao'],
    fields: [
      money('salary', 'Salário mensal'),
      number('months', 'Meses trabalhados'),
    ],
  },
  {
    calculatorId: 'decimo-proporcional',
    slug: 'decimo-proporcional',
    title: 'Calculadora de 13º Proporcional',
    category: 'trabalho',
    description:
      'Calcule uma referência de décimo terceiro pelos meses trabalhados no ano.',
    howItWorks:
      'O salário é dividido em 12 avos e multiplicado pelos meses informados.',
    tags: ['trabalho', 'decimo', 'salario'],
    fields: [
      money('salary', 'Salário mensal'),
      number('months', 'Meses trabalhados'),
    ],
  },
  {
    calculatorId: 'aviso-previo',
    slug: 'aviso-previo',
    title: 'Calculadora de Aviso Prévio',
    category: 'trabalho',
    description:
      'Converta dias de aviso prévio em valor proporcional à remuneração.',
    howItWorks:
      'O cálculo divide o salário por 30 e multiplica pelos dias de aviso considerados.',
    tags: ['trabalho', 'rescisao', 'aviso'],
    fields: [
      money('salary', 'Salário mensal'),
      number('noticeDays', 'Dias de aviso'),
    ],
  },
  {
    calculatorId: 'plr-ppr-liquido',
    slug: 'plr-ppr-liquido',
    title: 'Calculadora de PLR/PPR Líquido',
    category: 'trabalho',
    description:
      'Projete um valor líquido de participação nos lucros com desconto estimado.',
    howItWorks:
      'O modelo aplica uma estimativa de imposto ao valor bruto. A tributação efetiva tem regras próprias e deve ser conferida.',
    tags: ['trabalho', 'plr', 'imposto'],
    fields: [money('amount', 'PLR/PPR bruta')],
    sources: [
      {
        label: 'Receita Federal — tabela exclusiva de PLR',
        url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
      },
    ],
  },
  {
    calculatorId: 'vale-transporte',
    slug: 'vale-transporte',
    title: 'Calculadora de Vale-Transporte',
    category: 'trabalho',
    description:
      'Compare o custo mensal de transporte com o teto de desconto do empregado.',
    howItWorks:
      'A simulação usa o menor valor entre o custo informado e 6% do salário-base.',
    tags: ['trabalho', 'beneficio', 'transporte'],
    fields: [
      money('salary', 'Salário-base'),
      money('amount', 'Custo mensal de transporte'),
    ],
  },
  {
    calculatorId: 'insalubridade',
    slug: 'insalubridade',
    title: 'Calculadora de Insalubridade',
    category: 'trabalho',
    description:
      'Estime adicional de insalubridade a partir da base e grau aplicável.',
    howItWorks:
      'Informe a base definida no caso concreto e o percentual correspondente ao grau reconhecido.',
    tags: ['trabalho', 'adicional', 'insalubridade'],
    fields: [
      money('baseSalary', 'Base de cálculo'),
      percentage('rate', 'Grau percentual'),
    ],
  },
  {
    calculatorId: 'periculosidade',
    slug: 'periculosidade',
    title: 'Calculadora de Periculosidade',
    category: 'trabalho',
    description:
      'Veja a referência do adicional de periculosidade sobre o salário-base.',
    howItWorks:
      'O modelo aplica 30% ao salário informado. Enquadramento e base dependem das condições reconhecidas.',
    tags: ['trabalho', 'adicional', 'periculosidade'],
    fields: [money('salary', 'Salário-base')],
  },
  {
    calculatorId: 'pensao-alimenticia',
    slug: 'pensao-alimenticia',
    title: 'Calculadora de Pensão Alimentícia',
    category: 'trabalho',
    description: 'Estime um percentual de pensão sobre a base determinada.',
    howItWorks:
      'A ferramenta aplica o percentual informado à base. Apenas a decisão judicial ou acordo define o valor devido.',
    tags: ['familia', 'pensao', 'trabalho'],
    fields: [
      money('salary', 'Base de cálculo'),
      percentage('rate', 'Percentual definido'),
    ],
  },
  {
    calculatorId: 'custo-demissao',
    slug: 'custo-demissao',
    title: 'Calculadora de Custo da Demissão',
    category: 'trabalho',
    description:
      'Projete uma provisão inicial de desligamento para planejamento empresarial.',
    howItWorks:
      'O cálculo combina avos trabalhados e a multa percentual informada. Verbas reais dependem do contrato e da modalidade.',
    tags: ['empresa', 'rescisao', 'trabalho'],
    fields: [
      money('salary', 'Salário mensal'),
      number('monthsWorked', 'Meses trabalhados'),
      percentage('rate', 'Multa estimada'),
    ],
  },
  {
    calculatorId: 'pro-labore',
    slug: 'pro-labore',
    title: 'Calculadora de Pró-labore',
    category: 'financas',
    description:
      'Estime o valor líquido do pró-labore após contribuição informada.',
    howItWorks:
      'A ferramenta desconta a alíquota escolhida do valor bruto. Tributação e distribuição de lucros exigem análise contábil.',
    tags: ['negocios', 'pro-labore', 'inss'],
    fields: [
      money('amount', 'Pró-labore bruto'),
      percentage('rate', 'Contribuição'),
    ],
  },
  {
    calculatorId: 'inss-autonomo',
    slug: 'inss-autonomo',
    title: 'Calculadora de INSS Autônomo',
    category: 'trabalho',
    description:
      'Projete a contribuição previdenciária sobre uma base de contribuição.',
    howItWorks:
      'A alíquota é aplicada à base informada. Planos, limites e categorias de contribuinte alteram a regra oficial.',
    tags: ['trabalho', 'inss', 'autonomo'],
    fields: [
      money('amount', 'Base de contribuição'),
      percentage('rate', 'Alíquota'),
    ],
  },
  {
    calculatorId: 'simples-nacional',
    slug: 'simples-nacional',
    title: 'Calculadora de Simples Nacional',
    category: 'financas',
    description: 'Estime o DAS mensal a partir da receita e alíquota efetiva.',
    howItWorks:
      'A receita mensal é multiplicada pela alíquota efetiva informada. Anexo, faixa e deduções são definidos no cálculo contábil.',
    tags: ['negocios', 'simples', 'imposto'],
    fields: [
      money('amount', 'Receita mensal'),
      percentage('rate', 'Alíquota efetiva'),
    ],
  },
  {
    calculatorId: 'excesso-limite-mei',
    slug: 'excesso-limite-mei',
    title: 'Calculadora de Excesso do Limite MEI',
    category: 'financas',
    description:
      'Descubra quanto o faturamento anual supera o limite de referência do MEI.',
    howItWorks:
      'A ferramenta compara o faturamento acumulado ao limite anual de R$ 81 mil. Consequências dependem do percentual excedente e do período.',
    tags: ['mei', 'negocios', 'limite'],
    fields: [money('amount', 'Faturamento acumulado')],
  },
  {
    calculatorId: 'das-mei-atraso',
    slug: 'das-mei-atraso',
    title: 'Calculadora de DAS MEI em Atraso',
    category: 'financas',
    description:
      'Atualize uma guia DAS usando o percentual total de encargos informado.',
    howItWorks:
      'O valor original recebe a soma de multa e juros que você informar. Gere a guia oficial para confirmação.',
    tags: ['mei', 'das', 'imposto'],
    fields: [
      money('amount', 'Valor original do DAS'),
      percentage('rate', 'Multa e juros totais'),
    ],
  },
  {
    calculatorId: 'bpc',
    slug: 'bpc',
    title: 'Calculadora de BPC',
    category: 'beneficios',
    description:
      'Calcule a renda familiar por pessoa para organizar a consulta ao benefício.',
    howItWorks:
      'A renda total é dividida pelo número de pessoas. A análise oficial considera CadÚnico, deficiência ou idade e outros critérios.',
    tags: ['beneficios', 'bpc', 'renda'],
    fields: [
      money('amount', 'Renda familiar mensal'),
      number('people', 'Pessoas da família'),
    ],
  },
  {
    calculatorId: 'salario-maternidade',
    slug: 'salario-maternidade',
    title: 'Calculadora de Salário-Maternidade',
    category: 'beneficios',
    description:
      'Projete uma referência de benefício pelo salário e período de afastamento.',
    howItWorks:
      'O salário mensal é multiplicado pelos meses de afastamento informados. Categoria de segurada e carência podem mudar a análise.',
    tags: ['beneficios', 'maternidade', 'inss'],
    fields: [
      money('salary', 'Remuneração mensal'),
      number('months', 'Meses de afastamento'),
    ],
  },
  {
    calculatorId: 'auxilio-incapacidade',
    slug: 'auxilio-incapacidade',
    title: 'Calculadora de Auxílio por Incapacidade',
    category: 'beneficios',
    description:
      'Estime uma referência de benefício a partir da média contributiva.',
    howItWorks:
      'A ferramenta aplica o percentual informado sobre a média. A perícia e o histórico de contribuições definem o benefício oficial.',
    tags: ['beneficios', 'inss', 'incapacidade'],
    fields: [
      money('amount', 'Média de contribuições'),
      percentage('rate', 'Percentual aplicável'),
    ],
  },
  {
    calculatorId: 'ipva',
    slug: 'ipva',
    title: 'Calculadora de IPVA',
    category: 'financas',
    description:
      'Estime o IPVA a partir do valor venal e alíquota do seu estado.',
    howItWorks:
      'A alíquota estadual é aplicada ao valor venal informado. Descontos, isenções e calendário são definidos localmente.',
    tags: ['financas', 'ipva', 'veiculo'],
    fields: [
      money('amount', 'Valor venal do veículo'),
      percentage('rate', 'Alíquota estadual'),
    ],
  },
  {
    calculatorId: 'cdb-liquido',
    slug: 'cdb-liquido',
    title: 'Calculadora de CDB Líquido',
    category: 'financas',
    description:
      'Projete o rendimento líquido de um CDB com taxa, prazo e imposto.',
    howItWorks:
      'A projeção capitaliza a taxa anual e desconta o IR informado somente sobre o lucro.',
    tags: ['financas', 'cdb', 'investimentos'],
    fields: [
      money('amount', 'Valor investido'),
      percentage('rate', 'Taxa anual'),
      number('months', 'Prazo em meses'),
      percentage('taxRate', 'IR sobre o rendimento'),
    ],
  },
  {
    calculatorId: 'cdb-poupanca',
    slug: 'cdb-x-poupanca',
    title: 'Comparador CDB x Poupança',
    category: 'financas',
    description:
      'Compare a diferença de rendimento entre duas taxas no mesmo período.',
    howItWorks:
      'O cálculo aplica as duas taxas anuais ao mesmo capital e mostra a diferença de ganho estimada.',
    tags: ['financas', 'cdb', 'poupanca'],
    fields: [
      money('amount', 'Valor investido'),
      percentage('rate', 'Taxa anual do CDB'),
      percentage('savingsRate', 'Taxa anual da poupança'),
      number('months', 'Prazo em meses'),
    ],
  },
  {
    calculatorId: 'tesouro-selic',
    slug: 'tesouro-selic',
    title: 'Calculadora de Tesouro Selic',
    category: 'financas',
    description:
      'Projete o rendimento líquido de um investimento pós-fixado com imposto estimado.',
    howItWorks:
      'A taxa anual é capitalizada pelo prazo e o IR informado incide sobre o rendimento estimado.',
    tags: ['financas', 'tesouro', 'selic'],
    fields: [
      money('amount', 'Valor investido'),
      percentage('rate', 'Taxa anual'),
      number('months', 'Prazo em meses'),
      percentage('taxRate', 'IR sobre o rendimento'),
    ],
  },
  {
    calculatorId: 'lci-lca',
    slug: 'lci-lca',
    title: 'Calculadora de LCI/LCA',
    category: 'financas',
    description:
      'Projete o rendimento de LCI ou LCA com uma taxa anual e prazo.',
    howItWorks:
      'A ferramenta capitaliza a taxa no período informado e considera a isenção de IR para pessoa física como premissa.',
    tags: ['financas', 'lci', 'lca'],
    fields: [
      money('amount', 'Valor investido'),
      percentage('rate', 'Taxa anual'),
      number('months', 'Prazo em meses'),
    ],
  },
  {
    calculatorId: 'conversao-taxa',
    slug: 'conversao-taxa-mensal-anual',
    title: 'Conversão de Taxa Mensal ↔ Anual',
    category: 'utilidades',
    description:
      'Converta uma taxa mensal em taxa efetiva anual para comparar propostas.',
    howItWorks:
      'A taxa mensal é capitalizada por 12 períodos. Taxa nominal e taxa efetiva não são equivalentes.',
    tags: ['utilidades', 'taxa', 'juros'],
    fields: [percentage('rate', 'Taxa mensal')],
  },
  {
    calculatorId: 'juros-simples',
    slug: 'juros-simples',
    title: 'Calculadora de Juros Simples',
    category: 'financas',
    description:
      'Calcule o montante sem capitalização para prazos e taxas compatíveis.',
    howItWorks:
      'O juro incide sempre sobre o capital inicial. Mantenha taxa e período na mesma unidade.',
    tags: ['financas', 'juros', 'investimentos'],
    fields: [
      money('amount', 'Valor inicial'),
      percentage('rate', 'Taxa por período'),
      number('months', 'Quantidade de períodos'),
    ],
  },
  {
    calculatorId: 'emprestimo',
    slug: 'simulador-de-emprestimo',
    title: 'Simulador de Empréstimo',
    category: 'financas',
    description:
      'Estime uma parcela pelo sistema Price usando valor, taxa mensal e prazo.',
    howItWorks:
      'A prestação é nivelada pelo sistema Price. CET, seguros e tarifas podem aumentar o custo real.',
    tags: ['financas', 'emprestimo', 'juros'],
    fields: [
      money('amount', 'Valor emprestado'),
      percentage('rate', 'Taxa mensal'),
      number('months', 'Número de parcelas'),
    ],
  },
  {
    calculatorId: 'amortizacao-antecipada',
    slug: 'amortizacao-antecipada',
    title: 'Calculadora de Amortização Antecipada',
    category: 'financas',
    description:
      'Projete a economia aproximada de juros ao antecipar parte de uma dívida.',
    howItWorks:
      'A estimativa usa o saldo, a taxa mensal e os meses restantes. Peça ao credor o demonstrativo oficial de liquidação.',
    tags: ['financas', 'amortizacao', 'emprestimo'],
    fields: [
      money('amount', 'Saldo a amortizar'),
      percentage('rate', 'Taxa mensal'),
      number('months', 'Meses restantes'),
    ],
  },
] as const satisfies readonly CalculatorSpec[];

export const mvpCalculatorCatalog = specs.map(
  (spec): CalculatorDocument => ({
    ...spec,
    kind: 'calculator',
    authorId: 'equipe-editorial',
    publishedAt: '2026-09-25',
    updatedAt: '2026-09-29',
    resultLabel: 'Resultado estimado',
    resultPlaceholder: 'Preencha os campos para calcular.',
    sections: [
      {
        heading: 'Como esta calculadora funciona',
        paragraphs: [
          spec.howItWorks,
          `A conta considera ${spec.fields.map((field) => field.label.toLocaleLowerCase('pt-BR')).join(', ')}. Depois de calcular, você verá a memória com cada dado usado e a regra aplicada.`,
        ],
      },
      {
        heading: 'Antes de começar',
        paragraphs: [
          'Separe documentos, valores e taxas do mesmo período. Informações aproximadas produzem apenas uma ordem de grandeza, não um valor para conferência oficial.',
          'Use a estimativa para organizar o próximo passo e confirme os valores na fonte oficial antes de assinar, pagar ou assumir uma obrigação.',
        ],
      },
    ],
    faq: [
      {
        question: `O resultado de ${spec.title} é oficial?`,
        answer:
          'Não. A ferramenta oferece uma estimativa educativa baseada nos dados informados. Regras vigentes, contratos e condições individuais podem alterar o resultado.',
      },
      {
        question: 'Qual é o próximo passo?',
        answer:
          'Revise os dados de entrada, compare com seus documentos e use a fonte oficial indicada antes de tomar uma decisão.',
      },
    ],
    sources:
      'sources' in spec ? spec.sources : [sourcesByCategory[spec.category]],
  }),
);
