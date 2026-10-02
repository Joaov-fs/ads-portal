import type { GuideDocument } from '../../types';

export const guideComoCalcularARescisaoSemJustaCausa = {
  kind: 'guide',
  slug: 'como-calcular-a-rescisao-sem-justa-causa',
  title:
    'Como calcular a rescisão sem justa causa e conferir o que a empresa deve pagar',
  description:
    'Todas as verbas da demissão sem justa causa, com um exemplo completo em reais, os prazos de pagamento e o que muda em outros tipos de saída.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['rescisao', 'demissao', 'fgts', 'aviso-previo', 'trabalho'],
  featuredCalculators: [
    'rescisao-clt',
    'aviso-previo',
    'fgts-multa',
    'seguro-desemprego',
  ],
  highlights: [
    {
      value: 'R$ 12.063,33',
      label: 'Rescisão do exemplo',
      note: 'Salário de R$ 3.000 e 2 anos e 6 meses de casa.',
    },
    {
      value: '36 dias',
      label: 'Aviso prévio do exemplo',
      note: '30 dias mais 3 por ano trabalhado, até 90.',
    },
    {
      value: '40%',
      label: 'Multa sobre o FGTS',
      note: 'Paga pela empresa e depositada na conta do trabalhador.',
    },
  ],
  sections: [
    {
      heading: 'O que entra na conta',
      paragraphs: [
        'Na demissão sem justa causa o trabalhador recebe saldo de salário, aviso prévio (trabalhado ou indenizado), 13º proporcional, férias vencidas e proporcionais com o terço, e a multa de 40% sobre o saldo do FGTS. Também pode sacar o FGTS e pedir o seguro-desemprego.',
        'O aviso prévio tem 30 dias mais 3 dias por ano completo de trabalho, até 90 dias (Lei 12.506/2011).',
      ],
    },
    {
      heading: 'Exemplo completo',
      paragraphs: [
        'Considere salário de R$ 3.000, 2 anos e 6 meses de empresa, saída no dia 15 do mês, 7/12 avos de 13º e de férias e saldo de FGTS de R$ 7.200. Os valores abaixo são brutos, antes de INSS e IR.',
      ],
      table: {
        caption: 'Verbas rescisórias do exemplo',
        columns: ['Verba', 'Como se calcula', 'Valor bruto'],
        rows: [
          ['Saldo de salário', '15 dias do mês', 'R$ 1.500,00'],
          ['Aviso prévio indenizado', '36 dias de salário', 'R$ 3.600,00'],
          ['13º proporcional', '7/12 do salário', 'R$ 1.750,00'],
          ['Férias proporcionais', '7/12 do salário', 'R$ 1.750,00'],
          ['1/3 sobre as férias', 'Terço das férias', 'R$ 583,33'],
          ['Multa de 40% do FGTS', '40% de R$ 7.200', 'R$ 2.880,00'],
          ['Total', '', 'R$ 12.063,33'],
        ],
      },
    },
    {
      heading: 'Prazo e documentos',
      paragraphs: [
        'A empresa deve pagar as verbas em até 10 dias corridos após o fim do contrato. Confira o termo de rescisão, a guia do seguro-desemprego e a chave para saque do FGTS. A multa e o pagamento atrasados podem gerar penalidade para o empregador.',
      ],
    },
    {
      heading: 'Outras formas de saída',
      paragraphs: [
        'No pedido de demissão não há multa do FGTS nem saque, e o aviso é trabalhado pelo empregado. Na demissão por acordo, a multa cai para 20%, o aviso indenizado é de 50% e o saque do FGTS é de até 80%, sem seguro-desemprego. Na justa causa, o trabalhador perde aviso, multa e 13º proporcional.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso trabalhar o aviso prévio?',
      answer:
        'Quando a empresa dispensa, pode pedir que você trabalhe o aviso (com redução de jornada) ou indenizá-lo. Quando você pede demissão, a empresa pode exigir o cumprimento do aviso.',
    },
    {
      question: 'As verbas têm Imposto de Renda?',
      answer:
        'Sim, algumas, como saldo de salário, 13º e férias. O aviso indenizado e a multa do FGTS têm tratamento próprio. Use a calculadora para uma estimativa e confira o termo oficial.',
    },
  ],
  sources: [
    {
      label: 'CLT — Consolidação das Leis do Trabalho',
    },
    {
      label: 'Lei 12.506/2011 — aviso prévio proporcional',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
