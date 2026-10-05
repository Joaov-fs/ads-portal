import type { CalculatorId } from '@/calculators/types';

import { calculatorEditorial } from './editorial';
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
    label: 'Portal Gov.br: Benefícios',
    url: 'https://www.gov.br/pt-br/servicos/solicitar-beneficios-assistenciais',
  },
  economia: {
    label: 'Banco Central do Brasil',
    url: 'https://www.bcb.gov.br/',
  },
  financas: {
    label: 'Banco Central do Brasil: Cidadania Financeira',
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
      'Calcule o valor e o número de parcelas do seguro-desemprego com a tabela de 2026, a partir dos últimos salários.',
    howItWorks:
      'O modelo aplica as faixas, o piso de R$ 1.621,00 e o teto de R$ 2.518,65 vigentes desde 11 de janeiro de 2026 à média dos três últimos salários. O número de parcelas segue a tabela do CODEFAT, pelos meses trabalhados nos últimos 36 meses e pela quantidade de solicitações anteriores. O direito depende da habilitação oficial.',
    tags: ['trabalho', 'beneficio', 'salario'],
    fields: [
      money(
        'salary',
        'Média dos 3 últimos salários',
        'Média dos salários dos três meses antes da dispensa, com horas extras e comissões.',
      ),
      number(
        'monthsWorked',
        'Meses trabalhados nos últimos 36 meses',
        'Soma dos meses com carteira assinada nesse período.',
      ),
      number(
        'requestNumber',
        'Número da solicitação',
        '1 para a primeira vez, 2 para a segunda, 3 ou mais para as demais.',
      ),
    ],
    sources: [
      {
        label: 'Fundo de Amparo ao Trabalhador: tabela 2026',
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
      'Calcule o 13º salário líquido com as duas parcelas, o desconto de INSS e o Imposto de Renda de 2026.',
    howItWorks:
      'O resultado considera o 13º integral. O INSS e o IRRF incidem só sobre o 13º, separados do salário do mês, e são descontados na segunda parcela. A primeira parcela, paga até 30 de novembro, é metade do bruto sem descontos.',
    tags: ['trabalho', 'salario', 'decimo'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'dependents',
        'Dependentes para o IRRF',
        'Cada dependente reduz a base do imposto em R$ 189,59. Se não houver, informe 0.',
      ),
    ],
  },
  {
    calculatorId: 'irrf',
    slug: 'irrf',
    title: 'Calculadora de IRRF',
    category: 'trabalho',
    description:
      'Calcule o Imposto de Renda retido na fonte em 2026, com INSS, dependentes e a nova isenção até R$ 5.000.',
    howItWorks:
      'O INSS é descontado do rendimento, junto com dependentes e pensão. Sobre a base resultante aplica-se a tabela progressiva de 2026 e a redução da Lei 15.270/2025, que zera o imposto até R$ 5.000 por mês.',
    tags: ['trabalho', 'imposto', 'salario'],
    fields: [
      money('salary', 'Rendimento bruto mensal'),
      number(
        'dependents',
        'Dependentes',
        'Cada dependente reduz a base em R$ 189,59. Se não houver, informe 0.',
      ),
      money(
        'alimony',
        'Pensão alimentícia paga',
        'Valor mensal fixado em decisão judicial. Se não houver, informe 0.',
      ),
    ],
    sources: [
      {
        label: 'Receita Federal: tributação de 2026',
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
      'Calcule o valor das horas extras de 50% e 100% e o reflexo no descanso semanal remunerado (DSR).',
    howItWorks:
      'O valor da hora é o salário dividido pela jornada mensal. As horas extras comuns pagam 50% a mais e as de domingos e feriados, 100%. O descanso semanal remunerado também reflete sobre as horas extras.',
    tags: ['trabalho', 'horas', 'salario'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'monthlyHours',
        'Jornada mensal em horas',
        '220 para 44 horas semanais, 200 para 40 horas, 180 para 36 horas.',
      ),
      number('extraHours50', 'Horas extras a 50%', 'Dias úteis e sábados.'),
      number(
        'extraHours100',
        'Horas extras a 100%',
        'Domingos e feriados trabalhados sem folga compensatória.',
      ),
      number(
        'workDays',
        'Dias úteis do mês',
        'Opcional, para o reflexo no DSR. Conte segunda a sábado, sem feriados. Deixe 0 para ignorar.',
      ),
      number(
        'restDays',
        'Domingos e feriados do mês',
        'Opcional, para o reflexo no DSR.',
      ),
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
      'Calcule o desconto de INSS do seu salário em 2026, faixa por faixa, até o teto de R$ 8.475,55.',
    howItWorks:
      'A contribuição é calculada por faixas de referência, e não por uma alíquota única sobre todo o salário.',
    tags: ['trabalho', 'inss', 'salario'],
    fields: [
      money(
        'salary',
        'Salário bruto',
        'Acima de R$ 8.475,55 o desconto não aumenta, porque esse é o teto de contribuição.',
      ),
    ],
    sources: [
      {
        label: 'INSS: tabela de contribuição mensal de 2026',
        url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
      },
    ],
  },
  {
    calculatorId: 'contador-dias',
    slug: 'contador-de-dias',
    title: 'Contador de Dias',
    category: 'utilidades',
    description:
      'Conte os dias corridos e úteis entre duas datas, em semanas, meses e anos, para prazos e planejamentos.',
    howItWorks:
      'Escolha as duas datas para ver os dias corridos, os dias úteis e a diferença em semanas, meses e anos. O dia inicial não é contado e feriados não são descontados.',
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
      'Compare as parcelas e o total de juros de um financiamento nos sistemas SAC e Price com o mesmo valor, taxa e prazo.',
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
      'Calcule o novo valor do aluguel aplicando o IGP-M, o IPCA ou outro percentual previsto no contrato.',
    howItWorks:
      'A ferramenta aplica o percentual informado ao aluguel atual. Confira índice, período de apuração e cláusula contratual.',
    tags: ['financas', 'aluguel', 'reajuste'],
    fields: [
      money('amount', 'Aluguel atual'),
      percentage(
        'rate',
        'Índice de reajuste (%)',
        'Variação acumulada em 12 meses do índice do contrato. Referência de outubro de 2026: IGP-M 3,35% (set/2026, FGV) e IPCA 4,22% (ago/2026, IBGE).',
      ),
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
          'MDS: Bolsa Família terá valor mínimo de R$ 691 a partir de outubro',
        url: 'https://www.gov.br/mds/pt-br/noticias/bolsa-familia-tera-valor-minimo-de-r-691-a-partir-de-outubro',
      },
    ],
  },
  {
    calculatorId: 'pis',
    slug: 'pis',
    title: 'Calculadora de PIS',
    category: 'beneficios',
    description:
      'Calcule o abono salarial do PIS/Pasep proporcional aos meses trabalhados no ano-base, com base no salário mínimo.',
    howItWorks:
      'A referência é proporcional aos meses considerados e depende de todos os requisitos legais para pagamento.',
    tags: ['beneficios', 'pis', 'trabalho'],
    fields: [
      number(
        'months',
        'Meses trabalhados no ano-base',
        'De 1 a 12. Mês com 15 dias ou mais de trabalho conta como inteiro.',
      ),
    ],
  },
  {
    calculatorId: 'das-limite-mei',
    slug: 'das-limite-mei',
    title: 'DAS / Limite MEI',
    category: 'financas',
    description:
      'Veja quanto do limite anual de R$ 81.000 do MEI você já usou e quanto ainda pode faturar neste ano.',
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
      'Calcule quanto um funcionário CLT custa por mês à empresa, com FGTS, férias, 13º, encargos e benefícios.',
    howItWorks:
      'Soma ao salário as provisões mensais de 13º e férias com 1/3, o FGTS de 8% e os encargos patronais sobre essa base, além dos benefícios pagos.',
    tags: ['trabalho', 'empresa', 'encargos'],
    fields: [
      money('salary', 'Salário bruto'),
      percentage(
        'rate',
        'Encargos patronais sobre a folha (%)',
        '0% no Simples Nacional (anexos I, II, III e V). Cerca de 28,8% no lucro presumido ou real (20% INSS, RAT e terceiros).',
      ),
      money(
        'benefits',
        'Benefícios mensais',
        'Vale-transporte pago pela empresa, vale-refeição, plano de saúde. Se não houver, informe 0.',
      ),
    ],
  },
  {
    calculatorId: 'fator-r',
    slug: 'fator-r',
    title: 'Calculadora de Fator R',
    category: 'financas',
    description:
      'Calcule o Fator R (folha de salários dividida pela receita) e descubra se a empresa cai no Anexo III ou no V do Simples.',
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
      'Descubra quanto vale a sua hora de trabalho a partir do salário mensal e da jornada, base para horas extras.',
    howItWorks:
      'O cálculo divide a remuneração mensal pela quantidade de horas contratadas no mês.',
    tags: ['trabalho', 'salario', 'horas'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'monthlyHours',
        'Jornada mensal em horas',
        '220 para 44 horas semanais, 200 para 40 horas, 180 para 36 horas.',
      ),
    ],
  },
  {
    calculatorId: 'adicional-noturno',
    slug: 'adicional-noturno',
    title: 'Calculadora de Adicional Noturno',
    category: 'trabalho',
    description:
      'Calcule o adicional noturno de 20% sobre as horas trabalhadas entre 22h e 5h e veja a hora reduzida de 52min30s.',
    howItWorks:
      'Encontra o valor da hora e aplica o adicional noturno sobre as horas trabalhadas das 22h às 5h. O efeito da hora noturna reduzida de 52min30s aparece separado.',
    tags: ['trabalho', 'adicional', 'horas'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'monthlyHours',
        'Jornada mensal em horas',
        '220 para 44 horas semanais, 200 para 40 horas, 180 para 36 horas.',
      ),
      number('nightHours', 'Horas noturnas no mês', 'Das 22h às 5h.'),
      percentage(
        'rate',
        'Adicional noturno (%)',
        'Mínimo legal de 20% no meio urbano. Convenção coletiva pode prever mais.',
      ),
    ],
  },
  {
    calculatorId: 'dsr',
    slug: 'dsr',
    title: 'Calculadora de DSR',
    category: 'trabalho',
    description:
      'Calcule o descanso semanal remunerado (DSR) sobre comissões, horas extras e outros valores variáveis.',
    howItWorks:
      'O valor variável é rateado pelos dias úteis e multiplicado pelos dias de repouso informados.',
    tags: ['trabalho', 'dsr', 'salario'],
    fields: [
      money('amount', 'Valor variável do mês'),
      number(
        'workDays',
        'Dias úteis do mês',
        'Segunda a sábado, sem contar feriados.',
      ),
      number(
        'restDays',
        'Domingos e feriados do mês',
        'Dias de repouso semanal remunerado.',
      ),
    ],
  },
  {
    calculatorId: 'banco-de-horas',
    slug: 'banco-de-horas',
    title: 'Calculadora de Banco de Horas',
    category: 'trabalho',
    description:
      'Some créditos e débitos do banco de horas, veja o saldo e quanto vale em dinheiro se não for compensado.',
    howItWorks:
      'Créditos menos débitos dão o saldo. Informando o salário, mostramos quanto valeria o saldo positivo pago em dinheiro com 50%. Os prazos de compensação dependem do tipo de acordo.',
    tags: ['trabalho', 'horas', 'banco'],
    fields: [
      number('credits', 'Horas de crédito', 'Use horas decimais: 1h30 = 1,5.'),
      number('debits', 'Horas de débito', 'Use horas decimais: 1h30 = 1,5.'),
      money(
        'salary',
        'Salário mensal (opcional)',
        'Se informado, mostramos quanto vale o saldo positivo se for pago em dinheiro com 50% de adicional.',
      ),
      number(
        'monthlyHours',
        'Horas mensais de trabalho (opcional)',
        'Em jornada de 44 horas semanais são 220 horas por mês.',
      ),
    ],
  },
  {
    calculatorId: 'ferias-proporcionais',
    slug: 'ferias-proporcionais',
    title: 'Calculadora de Férias Proporcionais',
    category: 'trabalho',
    description:
      'Calcule as férias proporcionais com o terço constitucional, a partir do salário e dos meses trabalhados (avos).',
    howItWorks:
      'A estimativa usa salário, meses trabalhados no período aquisitivo e adicional constitucional.',
    tags: ['trabalho', 'ferias', 'rescisao'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'months',
        'Meses do período aquisitivo',
        'De 0 a 12. Fração de 15 dias ou mais conta como mês.',
      ),
    ],
  },
  {
    calculatorId: 'decimo-proporcional',
    slug: 'decimo-proporcional',
    title: 'Calculadora de 13º Proporcional',
    category: 'trabalho',
    description:
      'Calcule o 13º salário proporcional pelos meses trabalhados no ano, em avos, antes de INSS e Imposto de Renda.',
    howItWorks:
      'O salário é dividido em 12 avos e multiplicado pelos meses informados.',
    tags: ['trabalho', 'decimo', 'salario'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'months',
        'Meses trabalhados no ano',
        'De janeiro até a saída, de 0 a 12. Fração de 15 dias ou mais conta como mês.',
      ),
    ],
  },
  {
    calculatorId: 'aviso-previo',
    slug: 'aviso-previo',
    title: 'Calculadora de Aviso Prévio',
    category: 'trabalho',
    description:
      'Descubra quantos dias de aviso prévio você tem (30 dias mais 3 por ano) e quanto vale em dinheiro.',
    howItWorks:
      'O aviso prévio é de 30 dias mais 3 dias por ano completo de contrato, até 90 dias (Lei 12.506/2011). O valor é o salário dividido por 30 e multiplicado pelos dias.',
    tags: ['trabalho', 'rescisao', 'aviso'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'monthsWorked',
        'Meses de contrato',
        'Do primeiro dia de trabalho até a comunicação. Cada 12 meses completos somam 3 dias.',
      ),
    ],
  },
  {
    calculatorId: 'plr-ppr-liquido',
    slug: 'plr-ppr-liquido',
    title: 'Calculadora de PLR/PPR Líquido',
    category: 'trabalho',
    description:
      'Calcule o valor líquido da PLR ou PPR depois do Imposto de Renda, que usa uma tabela própria e exclusiva.',
    howItWorks:
      'O modelo aplica uma estimativa de imposto ao valor bruto. A tributação efetiva tem regras próprias e deve ser conferida.',
    tags: ['trabalho', 'plr', 'imposto'],
    fields: [money('amount', 'PLR/PPR bruta')],
    sources: [
      {
        label: 'Receita Federal: tabela exclusiva de PLR',
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
      'Veja quanto é descontado do seu salário pelo vale-transporte (até 6%) e quanto a empresa paga.',
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
      'Calcule o adicional de insalubridade de 10%, 20% ou 40% conforme o grau do laudo e a base de cálculo.',
    howItWorks:
      'Informe o grau do laudo (10%, 20% ou 40%). Sem outra base, usamos o salário mínimo, e mostramos os reflexos médios em 13º, férias e FGTS.',
    tags: ['trabalho', 'adicional', 'insalubridade'],
    fields: [
      money(
        'baseSalary',
        'Base de cálculo',
        'Em geral o salário mínimo (R$ 1.621,00), salvo norma coletiva ou contrato que defina outra base.',
      ),
      percentage(
        'rate',
        'Grau de insalubridade (%)',
        '10% grau mínimo, 20% médio, 40% máximo, conforme o laudo.',
      ),
    ],
  },
  {
    calculatorId: 'periculosidade',
    slug: 'periculosidade',
    title: 'Calculadora de Periculosidade',
    category: 'trabalho',
    description:
      'Calcule o adicional de periculosidade de 30% sobre o salário-base e os reflexos em 13º, férias e FGTS.',
    howItWorks:
      'Aplica 30% ao salário-base e mostra os reflexos médios em 13º, férias e FGTS. O enquadramento depende de laudo e das condições de trabalho.',
    tags: ['trabalho', 'adicional', 'periculosidade'],
    fields: [money('salary', 'Salário-base')],
  },
  {
    calculatorId: 'pensao-alimenticia',
    slug: 'pensao-alimenticia',
    title: 'Calculadora de Pensão Alimentícia',
    category: 'trabalho',
    description:
      'Calcule a pensão alimentícia em percentual sobre a renda líquida, depois dos descontos legais de INSS e IRRF.',
    howItWorks:
      'A ferramenta aplica o percentual à renda líquida (rendimento menos INSS e IRRF) e mostra quanto sobra para quem paga. Apenas a decisão judicial ou o acordo define o valor devido.',
    tags: ['familia', 'pensao', 'trabalho'],
    fields: [
      money(
        'salary',
        'Base de cálculo',
        'Valor sobre o qual incide a pensão: em geral a renda líquida (salário menos INSS e IRRF) ou o salário mínimo, conforme a decisão.',
      ),
      percentage(
        'rate',
        'Percentual definido (%)',
        'O percentual fixado na decisão judicial ou no acordo. Não existe percentual padrão em lei.',
      ),
      money(
        'deductions',
        'Descontos legais (INSS e IRRF)',
        'Se a pensão incide sobre a renda líquida, informe quanto sai de INSS e IRRF. Deixe em branco se a base já é líquida.',
      ),
    ],
  },
  {
    calculatorId: 'custo-demissao',
    slug: 'custo-demissao',
    title: 'Calculadora de Custo da Demissão',
    category: 'trabalho',
    description:
      'Calcule quanto custa para a empresa demitir sem justa causa: verbas rescisórias, aviso prévio e multa de 40% do FGTS.',
    howItWorks:
      'Soma as verbas de uma dispensa sem justa causa com aviso indenizado, a multa de 40% do FGTS e o FGTS de 8% sobre saldo de salário, aviso e 13º. Não inclui encargos patronais de INSS.',
    tags: ['empresa', 'rescisao', 'trabalho'],
    fields: [
      money('salary', 'Salário mensal'),
      number(
        'monthsWorked',
        'Meses totais de contrato',
        'Define o aviso prévio e o saldo estimado do FGTS.',
      ),
      number(
        'daysLastMonth',
        'Dias trabalhados no mês da saída',
        'Entre 0 e 30.',
      ),
      number(
        'monthsInYear',
        'Meses trabalhados no ano da saída',
        'De 0 a 12. Fração de 15 dias ou mais conta como mês.',
      ),
      number(
        'monthsSinceVacation',
        'Meses desde o último período de férias',
        'De 0 a 11.',
      ),
      number(
        'expiredVacations',
        'Períodos de férias vencidas',
        'Se não houver, informe 0.',
      ),
    ],
  },
  {
    calculatorId: 'pro-labore',
    slug: 'pro-labore',
    title: 'Calculadora de Pró-labore',
    category: 'financas',
    description:
      'Calcule o pró-labore líquido do sócio depois do INSS de 11% e do Imposto de Renda de 2026.',
    howItWorks:
      'Desconta o INSS de 11% do sócio, sobre uma base entre o salário mínimo e o teto do INSS, e o IRRF pela tabela de 2026. A distribuição de lucros é tratada à parte pela contabilidade.',
    tags: ['negocios', 'pro-labore', 'inss'],
    fields: [
      money('amount', 'Pró-labore bruto'),
      number(
        'dependents',
        'Dependentes para o IRRF',
        'Se não houver, informe 0.',
      ),
    ],
  },
  {
    calculatorId: 'inss-autonomo',
    slug: 'inss-autonomo',
    title: 'Calculadora de INSS Autônomo',
    category: 'trabalho',
    description:
      'Calcule a contribuição mensal do autônomo e do contribuinte individual ao INSS nos planos de 20%, 11% e 5%.',
    howItWorks:
      'A alíquota é aplicada à base, que fica entre o salário mínimo e o teto do INSS. Os planos de 5% e 11% incidem sempre sobre o salário mínimo.',
    tags: ['trabalho', 'inss', 'autonomo'],
    fields: [
      money(
        'amount',
        'Base de contribuição',
        'Sua renda mensal como autônomo, entre R$ 1.621,00 e R$ 8.475,55.',
      ),
      percentage(
        'rate',
        'Alíquota',
        '20% plano normal, 11% plano simplificado, 5% MEI e facultativo de baixa renda.',
      ),
    ],
  },
  {
    calculatorId: 'simples-nacional',
    slug: 'simples-nacional',
    title: 'Calculadora de Simples Nacional',
    category: 'financas',
    description:
      'Calcule o DAS mensal do Simples Nacional com a alíquota efetiva, a faixa da receita e o Fator R.',
    howItWorks:
      'A faixa vem da receita dos últimos 12 meses. A alíquota efetiva é (receita × alíquota nominal − parcela a deduzir) ÷ receita, aplicada sobre a receita do mês.',
    tags: ['negocios', 'simples', 'imposto'],
    fields: [
      money('amount', 'Receita bruta do mês'),
      money(
        'rbt12',
        'Receita bruta dos últimos 12 meses',
        'Soma dos 12 meses anteriores ao da apuração, sem incluir o mês atual.',
      ),
      number(
        'annex',
        'Anexo do Simples Nacional',
        '1 comércio, 2 indústria, 3 serviços, 4 construção, vigilância, limpeza e advocacia, 5 serviços intelectuais.',
      ),
      money(
        'payroll12',
        'Folha de salários dos últimos 12 meses',
        'Opcional, só para serviços (anexos 3 e 5). Inclui salários, pró-labore, FGTS e INSS patronal. Com ela, o Fator R escolhe entre o Anexo III e o V.',
      ),
    ],
  },
  {
    calculatorId: 'excesso-limite-mei',
    slug: 'excesso-limite-mei',
    title: 'Calculadora de Excesso do Limite MEI',
    category: 'financas',
    description:
      'Veja quanto o faturamento passou do limite de R$ 81.000 do MEI e o que acontece até e acima de 20% de excesso.',
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
      'Calcule o valor atualizado de um DAS do MEI pago em atraso, com multa de 0,33% ao dia e juros pela Selic.',
    howItWorks:
      'A multa é de 0,33% por dia de atraso, limitada a 20%. Os juros são a Selic acumulada dos meses entre o vencimento e o pagamento, mais 1% no mês em que você paga, e a calculadora já traz a Selic oficial até setembro de 2026.',
    tags: ['mei', 'das', 'imposto'],
    fields: [
      money('amount', 'Valor original do DAS'),
      date(
        'dueDate',
        'Data de vencimento',
        'Dia 20 do mês seguinte ao da apuração.',
      ),
      date(
        'payDate',
        'Data do pagamento',
        'Quando pretende pagar. Os juros usam a Selic acumulada até o mês anterior mais 1% no mês do pagamento.',
      ),
    ],
  },
  {
    calculatorId: 'bpc',
    slug: 'bpc',
    title: 'Calculadora de BPC',
    category: 'beneficios',
    description:
      'Calcule a renda por pessoa da família e compare com o limite de R$ 405,25 para pedir o BPC/LOAS.',
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
      'Calcule o salário-maternidade pelos 120 dias de afastamento, com a regra para CLT, autônoma e MEI.',
    howItWorks:
      'O salário mensal é multiplicado pelos meses de afastamento e o resultado mostra cada parcela. Categoria de segurada e carência podem mudar a análise.',
    tags: ['beneficios', 'maternidade', 'inss'],
    fields: [
      money('salary', 'Remuneração mensal'),
      number(
        'months',
        'Meses de afastamento',
        '4 meses (120 dias) em regra; 6 meses se a empresa participa do Empresa Cidadã.',
      ),
    ],
  },
  {
    calculatorId: 'auxilio-incapacidade',
    slug: 'auxilio-incapacidade',
    title: 'Calculadora de Auxílio por Incapacidade',
    category: 'beneficios',
    description:
      'Estime o valor do auxílio por incapacidade temporária ou permanente a partir da média das contribuições.',
    howItWorks:
      'A ferramenta aplica o percentual informado sobre a média. A perícia e o histórico de contribuições definem o benefício oficial.',
    tags: ['beneficios', 'inss', 'incapacidade'],
    fields: [
      money(
        'amount',
        'Média de todos os salários de contribuição',
        'Média de 100% das contribuições desde julho de 1994, ou desde o início, se posterior.',
      ),
      percentage(
        'rate',
        'Percentual do benefício (%)',
        '60% mais 2% por ano de contribuição acima de 20 anos (homens) ou 15 (mulheres). 100% em acidente de trabalho.',
      ),
    ],
  },
  {
    calculatorId: 'ipva',
    slug: 'ipva',
    title: 'Calculadora de IPVA',
    category: 'financas',
    description:
      'Calcule o IPVA pelo valor venal e pela alíquota do seu estado, na cota única ou parcelado.',
    howItWorks:
      'A alíquota estadual é aplicada ao valor venal, com opção de proporcional aos meses do ano e de ver as parcelas. Descontos, isenções e calendário são definidos por cada estado.',
    tags: ['financas', 'ipva', 'veiculo'],
    fields: [
      money(
        'amount',
        'Valor venal do veículo',
        'Valor de referência da tabela FIPE usado pelo seu estado.',
      ),
      percentage(
        'rate',
        'Alíquota estadual (%)',
        'Varia por estado e tipo de veículo (em geral 1% a 4%). Consulte a Secretaria da Fazenda do seu estado.',
      ),
      number(
        'monthsInYear',
        'Meses a pagar no ano (opcional)',
        'Deixe em branco para o ano inteiro (12). Para veículo novo, alguns estados cobram só os meses restantes.',
      ),
      number(
        'installments',
        'Número de parcelas (opcional)',
        'Para ver o valor de cada parcela. Se vazio, mostramos 3.',
      ),
    ],
  },
  {
    calculatorId: 'cdb-liquido',
    slug: 'cdb-liquido',
    title: 'Calculadora de CDB Líquido',
    category: 'financas',
    description:
      'Calcule o rendimento líquido de um CDB depois do Imposto de Renda regressivo, com taxa e prazo à sua escolha.',
    howItWorks:
      'A projeção capitaliza a taxa anual e desconta o IR pela tabela regressiva (22,5% até 180 dias, 20% até 360, 17,5% até 720 e 15% acima), somente sobre o rendimento.',
    tags: ['financas', 'cdb', 'investimentos'],
    fields: [
      money('amount', 'Valor investido'),
      percentage(
        'rate',
        'Taxa anual (% ao ano)',
        'Taxa efetiva anual. Para CDB a % do CDI, converta antes pelo CDI vigente.',
      ),
      number('months', 'Prazo em meses'),
    ],
  },
  {
    calculatorId: 'cdb-poupanca',
    slug: 'cdb-x-poupanca',
    title: 'Comparador CDB x Poupança',
    category: 'financas',
    description:
      'Compare quanto rende um CDB, depois do Imposto de Renda, e quanto rende a poupança no mesmo valor e prazo.',
    howItWorks:
      'O CDB é tributado pela tabela regressiva do IR; a poupança é isenta. O cálculo aplica as duas taxas anuais ao mesmo capital e mostra a diferença líquida.',
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
      'A taxa anual é capitalizada pelo prazo e o IR pela tabela regressiva incide sobre o rendimento. Não inclui a taxa de custódia da B3 nem a da corretora.',
    tags: ['financas', 'tesouro', 'selic'],
    fields: [
      money('amount', 'Valor investido'),
      percentage(
        'rate',
        'Taxa anual (% ao ano)',
        'Use a Selic projetada ou a taxa do título no Tesouro Direto.',
      ),
      number('months', 'Prazo em meses'),
    ],
  },
  {
    calculatorId: 'lci-lca',
    slug: 'lci-lca',
    title: 'Calculadora de LCI/LCA',
    category: 'financas',
    description:
      'Calcule o rendimento de uma LCI ou LCA, isenta de Imposto de Renda, e compare com o CDB equivalente.',
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
      'Converta taxa mensal em anual (e o contrário) pela fórmula dos juros compostos, para comparar propostas.',
    howItWorks:
      'A taxa mensal é capitalizada por 12 períodos e a tabela traz também as taxas trimestral e semestral. O mesmo número pode ser lido como taxa anual, para achar a mensal equivalente.',
    tags: ['utilidades', 'taxa', 'juros'],
    fields: [percentage('rate', 'Taxa mensal')],
  },
  {
    calculatorId: 'juros-simples',
    slug: 'juros-simples',
    title: 'Calculadora de Juros Simples',
    category: 'financas',
    description:
      'Calcule juros simples período a período e compare com o resultado em juros compostos.',
    howItWorks:
      'O juro incide sempre sobre o capital inicial. A tabela mostra cada período e compara com o resultado em juros compostos. Mantenha taxa e período na mesma unidade.',
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
      'Simule as parcelas de um empréstimo pelo sistema Price e veja o total de juros pago no prazo.',
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
      'Veja quanto você economiza de juros ao antecipar parte de um financiamento, encurtando prazo ou parcela.',
    howItWorks:
      'Considera financiamento no sistema Price. Compara manter a parcela e encurtar o prazo com reduzir a parcela mantendo o prazo. Peça ao credor o demonstrativo oficial de liquidação.',
    tags: ['financas', 'amortizacao', 'emprestimo'],
    fields: [
      money('amount', 'Saldo devedor atual'),
      percentage('rate', 'Taxa de juros mensal'),
      number('months', 'Parcelas restantes'),
      money('prepayment', 'Valor a antecipar'),
    ],
  },
] as const satisfies readonly CalculatorSpec[];

/** Datas de publicação espalhadas pelo período de criação; a revisão é a mais recente. */
const publicationDates = [
  '2026-09-08',
  '2026-09-09',
  '2026-09-11',
  '2026-09-12',
  '2026-09-14',
  '2026-09-15',
  '2026-09-16',
  '2026-09-18',
  '2026-09-19',
  '2026-09-21',
  '2026-09-22',
  '2026-09-24',
  '2026-09-25',
] as const;
const reviewDates = ['2026-10-01', '2026-10-02'] as const;

export const mvpCalculatorCatalog = specs.map(
  (spec, index): CalculatorDocument => {
    const editorial = calculatorEditorial[spec.slug];

    if (!editorial) {
      throw new Error(`Calculadora sem texto editorial: ${spec.slug}`);
    }

    return {
      ...spec,
      kind: 'calculator',
      authorId: 'equipe-editorial',
      publishedAt: publicationDates[
        (index * 5) % publicationDates.length
      ] as string,
      updatedAt: reviewDates[index % reviewDates.length] as string,
      resultLabel: 'Resultado estimado',
      resultPlaceholder: 'Preencha os campos para calcular.',
      sections: [
        { heading: 'Como o cálculo é feito', paragraphs: [spec.howItWorks] },
        {
          heading: 'Exemplo prático',
          paragraphs: editorial.example.paragraphs,
          ...(editorial.example.table
            ? { table: editorial.example.table }
            : {}),
        },
        { heading: 'O que muda o resultado', paragraphs: editorial.factors },
        {
          heading: 'Erros comuns ao preencher',
          paragraphs: editorial.mistakes,
        },
      ],
      faq: editorial.faq,
      sources:
        'sources' in spec ? spec.sources : [sourcesByCategory[spec.category]],
    };
  },
);
