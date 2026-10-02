import type { GuideDocument } from '../../types';

export const guideComoPedirOSeguroDesemprego = {
  kind: 'guide',
  slug: 'como-pedir-o-seguro-desemprego',
  title: 'Como pedir o seguro-desemprego: prazo, parcelas e valor',
  description:
    'Quem tem direito, em quanto tempo pedir, como fazer o requerimento e quanto você recebe, com exemplo de salário de R$ 3.000.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['seguro-desemprego', 'demissao', 'beneficios', 'trabalho'],
  featuredCalculators: ['seguro-desemprego', 'rescisao-clt', 'salario-liquido'],
  highlights: [
    {
      value: '7 a 120 dias',
      label: 'Prazo para pedir',
      note: 'Contados a partir da demissão.',
    },
    {
      value: 'R$ 2.518,65',
      label: 'Parcela máxima',
      note: 'Piso de R$ 1.621,00.',
    },
    {
      value: '3 a 5',
      label: 'Parcelas',
      note: 'Conforme o tempo de trabalho e o número do pedido.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito',
      paragraphs: [
        'Tem direito o trabalhador demitido sem justa causa que cumpra a carência: 12 meses de trabalho nos últimos 18 no primeiro pedido, 9 meses nos últimos 12 no segundo e 6 meses nos últimos 6 nos demais. Não pode ter renda própria suficiente nem receber benefício da Previdência (exceto pensão por morte e auxílio-acidente).',
      ],
    },
    {
      heading: 'Quantas parcelas',
      paragraphs: [
        'O número de parcelas depende do tempo trabalhado e de quantas vezes você já pediu o benefício.',
      ],
      table: {
        caption: 'Parcelas do seguro-desemprego',
        columns: ['Pedido', 'Tempo de trabalho', 'Parcelas'],
        rows: [
          ['1º pedido', '12 a 23 meses', '4'],
          ['1º pedido', '24 meses ou mais', '5'],
          ['2º pedido', '9 a 11 meses', '3'],
          ['2º pedido', '12 a 23 meses', '4'],
          ['2º pedido', '24 meses ou mais', '5'],
          ['3º pedido ou mais', '6 a 11 meses', '3'],
          ['3º pedido ou mais', '12 meses ou mais', '4 ou 5'],
        ],
      },
    },
    {
      heading: 'Quanto você recebe',
      paragraphs: [
        'O valor depende da média dos três últimos salários. Quem ganhava R$ 3.000, por exemplo, recebe parcelas de R$ 2.166,65. O mínimo é um salário mínimo (R$ 1.621,00) e o teto, R$ 2.518,65.',
      ],
    },
    {
      heading: 'Como pedir',
      paragraphs: [
        'O requerimento é feito pelo aplicativo Carteira de Trabalho Digital, pelo portal gov.br ou nas unidades do atendimento do Ministério do Trabalho. Tenha em mãos o termo de rescisão, a guia do seguro-desemprego e documento de identificação. A primeira parcela costuma ser liberada cerca de 30 dias após o pedido.',
      ],
    },
  ],
  faq: [
    {
      question: 'Perdi o prazo de 120 dias. Posso pedir?',
      answer:
        'Em regra, não. O prazo é de até 120 dias a partir da data da demissão, por isso peça logo.',
    },
    {
      question: 'Posso trabalhar e receber?',
      answer:
        'Se você conseguir emprego formal, o benefício é cancelado. Não há acúmulo com renda de carteira assinada.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Lei 7.998/1990 — Programa do Seguro-Desemprego',
    },
  ],
} as const satisfies GuideDocument;
