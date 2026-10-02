import type { NewsDocument } from '../../types';

export const newsImpostoDeRendaZeroAteR5MilQuantoVocePagaNoContracheque = {
  kind: 'news',
  slug: 'imposto-de-renda-zero-ate-r-5-mil-quanto-voce-paga-no-contracheque',
  title:
    'IR zero até R$ 5 mil: veja quanto você paga de imposto no contracheque em 2026',
  description:
    'Desde janeiro, quem recebe até R$ 5.000 por mês não paga Imposto de Renda na fonte. Veja a tabela de quem ganha mais, com INSS e líquido calculados.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['salario', 'imposto', 'irrf', 'descontos', 'trabalho'],
  featuredCalculators: ['irrf', 'salario-liquido', 'decimo-salario'],
  highlights: [
    {
      value: 'R$ 5.000',
      label: 'Rendimento mensal isento',
      note: 'Até esse valor o IRRF é zero.',
    },
    {
      value: 'R$ 7.350',
      label: 'Fim da faixa de transição',
      note: 'Acima disso vale a tabela cheia, sem redução.',
    },
    {
      value: 'R$ 200,29',
      label: 'IRRF de quem ganha R$ 5.500',
      note: 'Sem dependentes, depois do INSS.',
    },
    {
      value: 'R$ 189,59',
      label: 'Dedução por dependente',
      note: 'Por mês, na base de cálculo do imposto.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou no Imposto de Renda',
      paragraphs: [
        'A Lei 15.270/2025 passou a valer em janeiro de 2026 e zerou o Imposto de Renda na fonte para quem recebe até R$ 5.000 por mês. Para rendimentos entre R$ 5.000,01 e R$ 7.350, existe uma redução decrescente que suaviza a passagem para a tabela normal. Acima de R$ 7.350, nada muda.',
        'A tabela progressiva continua a mesma de antes: isenta até R$ 2.428,80 e com alíquotas de 7,5%, 15%, 22,5% e 27,5% nas faixas seguintes. O que a nova lei faz é subtrair do imposto uma redução, que cobre todo o imposto até R$ 5.000 e vai diminuindo até R$ 7.350, pela fórmula R$ 978,62 menos 13,3145% do rendimento.',
      ],
    },
    {
      heading: 'Quanto cada salário paga',
      paragraphs: [
        'A tabela abaixo mostra o salário bruto, o INSS, o IRRF e o valor líquido de quem não tem dependentes nem pensão alimentícia. Repare no salto gradual: quem ganha R$ 5.100 paga apenas R$ 56,44 de IR, e não o valor cheio da tabela.',
      ],
      table: {
        caption:
          'Salário bruto, INSS, IRRF e líquido em 2026 (sem dependentes)',
        columns: ['Salário bruto', 'INSS', 'IRRF', 'Líquido'],
        rows: [
          ['R$ 3.000,00', 'R$ 248,60', 'R$ 0,00', 'R$ 2.751,40'],
          ['R$ 5.000,00', 'R$ 501,51', 'R$ 0,00', 'R$ 4.498,49'],
          ['R$ 5.100,00', 'R$ 515,51', 'R$ 56,44', 'R$ 4.528,04'],
          ['R$ 5.500,00', 'R$ 571,51', 'R$ 200,29', 'R$ 4.728,20'],
          ['R$ 6.000,00', 'R$ 641,51', 'R$ 385,11', 'R$ 4.973,37'],
          ['R$ 7.000,00', 'R$ 781,51', 'R$ 754,76', 'R$ 5.463,73'],
          ['R$ 8.000,00', 'R$ 921,51', 'R$ 1.037,86', 'R$ 6.040,62'],
          ['R$ 10.000,00', 'R$ 988,09', 'R$ 1.569,55', 'R$ 7.442,36'],
        ],
      },
    },
    {
      heading: 'Dependentes e pensão alimentícia continuam valendo',
      paragraphs: [
        'Antes de aplicar a tabela, o empregador desconta do rendimento o INSS, R$ 189,59 por dependente e a pensão alimentícia paga por decisão judicial. Essa base menor pode reduzir o imposto de quem ganha acima de R$ 5.000.',
        'Previdência privada do tipo PGBL e outras deduções entram no ajuste da declaração anual, e não no contracheque do mês.',
      ],
    },
    {
      heading: 'E o 13º salário?',
      paragraphs: [
        'O 13º é tributado separadamente do salário do mês, com a mesma tabela. Na prática, quem ganha até R$ 5.000 também não paga IR sobre o 13º. Veja a data de pagamento e os valores na notícia sobre o 13º de 2026.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem ganha R$ 5.001 paga o IR inteiro?',
      answer:
        'Não. A redução diminui aos poucos: com R$ 5.100 de salário, o IR retido é de R$ 56,44 no exemplo sem dependentes.',
    },
    {
      question: 'A regra vale para autônomos e para quem recebe aluguel?',
      answer:
        'A isenção atinge os rendimentos tributáveis mensais de pessoas físicas, com regras próprias na declaração anual. Para o caso de cada um, consulte as orientações da Receita Federal.',
    },
    {
      question: 'O valor do meu holerite está diferente da tabela. Por quê?',
      answer:
        'O holerite considera dependentes, pensão, horas extras, benefícios e outras verbas. Use a calculadora de IRRF com os seus dados.',
    },
  ],
  sources: [
    {
      label:
        'Lei 15.270/2025 — isenção do Imposto de Renda até R$ 5.000 por mês',
    },
    {
      label: 'Receita Federal — tabela do Imposto de Renda de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
    {
      label: 'INSS — tabela de contribuição mensal de 2026',
    },
  ],
} as const satisfies NewsDocument;
