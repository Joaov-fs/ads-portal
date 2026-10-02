import type { GuideDocument } from '../../types';

export const guideSaqueAniversarioDoFgtsComoFunciona = {
  kind: 'guide',
  slug: 'saque-aniversario-do-fgts-como-funciona',
  title: 'Saque-aniversário do FGTS: como funciona, quanto sai e como cancelar',
  description:
    'O que muda ao aderir, a tabela de alíquotas, como pedir a retirada e os cuidados com a antecipação.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['fgts', 'saque-aniversario', 'trabalho'],
  featuredCalculators: ['fgts-multa', 'rescisao-clt'],
  highlights: [
    {
      value: '1x por ano',
      label: 'Saque',
      note: 'No mês do seu aniversário.',
    },
    {
      value: '5% a 50%',
      label: 'Percentual do saldo',
      note: 'Quanto menor o saldo, maior o percentual.',
    },
    {
      value: '25 meses',
      label: 'Carência para voltar ao saque-rescisão',
      note: 'Consulte as regras atuais no aplicativo.',
    },
  ],
  sections: [
    {
      heading: 'Como funciona',
      paragraphs: [
        'Quem adere ao saque-aniversário pode retirar uma parte do saldo do FGTS todo ano, no mês do aniversário. Em troca, na demissão sem justa causa, só recebe a multa de 40% e não pode sacar o saldo das contas ligadas àquele período. É preciso optar pelo aplicativo FGTS.',
      ],
    },
    {
      heading: 'Quanto você saca',
      paragraphs: [
        'O valor é um percentual do saldo mais uma parcela adicional, e o percentual diminui conforme o saldo aumenta.',
      ],
      table: {
        caption: 'Saque-aniversário por faixa de saldo',
        columns: ['Saldo', 'Alíquota', 'Parcela adicional'],
        rows: [
          ['Até R$ 500', '50%', '—'],
          ['R$ 500,01 a R$ 1.000', '40%', 'R$ 50'],
          ['R$ 1.000,01 a R$ 5.000', '30%', 'R$ 150'],
          ['R$ 5.000,01 a R$ 10.000', '20%', 'R$ 650'],
          ['R$ 10.000,01 a R$ 15.000', '15%', 'R$ 1.150'],
          ['R$ 15.000,01 a R$ 20.000', '10%', 'R$ 1.900'],
          ['Acima de R$ 20.000', '5%', 'R$ 2.900'],
        ],
      },
    },
    {
      heading: 'Como aderir ou sair',
      paragraphs: [
        'No aplicativo FGTS, vá em "Saque-aniversário" e escolha aderir ou cancelar. O retorno ao saque-rescisão tem carência, por isso decida com calma e confira no aplicativo o prazo vigente.',
      ],
    },
    {
      heading: 'Cuidado com a antecipação',
      paragraphs: [
        'Bancos oferecem empréstimo com garantia dos saques futuros. Compare a taxa de juros e o custo total antes de contratar, porque o valor liberado hoje é descontado dos próximos anos, e você pode ficar sem a retirada do aniversário. Para quem tem emprego estável e não pretende ser demitido, a adesão pode fazer sentido; quem precisa do saldo na demissão deve pensar duas vezes.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso aderir se estou desempregado?',
      answer:
        'Sim, mas o efeito de bloqueio do saldo na demissão vale para as contas existentes. Confira as regras no aplicativo.',
    },
    {
      question: 'O saque-aniversário tem Imposto de Renda?',
      answer: 'Não. Os saques do FGTS são isentos de IR.',
    },
  ],
  sources: [
    {
      label: 'Caixa Econômica Federal — FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/',
    },
    {
      label: 'Lei 8.036/1990 — FGTS',
    },
  ],
} as const satisfies GuideDocument;
