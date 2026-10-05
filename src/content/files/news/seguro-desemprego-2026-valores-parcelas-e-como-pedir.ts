import type { NewsDocument } from '../../types';

export const newsSeguroDesemprego2026ValoresParcelasEComoPedir = {
  kind: 'news',
  slug: 'seguro-desemprego-2026-valores-parcelas-e-como-pedir',
  title:
    'Seguro-desemprego 2026: parcela vai de R$ 1.621 a R$ 2.518,65; veja quantas parcelas você recebe',
  description:
    'Piso, teto, faixas de cálculo e a tabela de parcelas do seguro-desemprego em 2026, com exemplos e o prazo de 7 a 120 dias para pedir.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['trabalho', 'seguro-desemprego', 'beneficios', 'salario', 'rescisao'],
  featuredCalculators: ['seguro-desemprego', 'rescisao-clt', 'fgts-multa'],
  highlights: [
    {
      value: 'R$ 1.621,00',
      label: 'Parcela mínima',
      note: 'Equivale a um salário mínimo.',
    },
    {
      value: 'R$ 2.518,65',
      label: 'Parcela máxima',
      note: 'Para médias acima de R$ 3.703,99.',
    },
    {
      value: '3 a 5',
      label: 'Parcelas',
      note: 'Conforme meses trabalhados e nº do pedido.',
    },
    {
      value: '7 a 120 dias',
      label: 'Prazo para pedir',
      note: 'Contados da data da dispensa.',
    },
  ],
  sections: [
    {
      heading: 'Como o valor da parcela é calculado',
      paragraphs: [
        'O valor depende da média dos três últimos salários antes da dispensa. Até R$ 2.222,17, a parcela é de 80% da média. Entre R$ 2.222,18 e R$ 3.703,99, soma-se R$ 1.777,74 a 50% do que passar de R$ 2.222,17. Acima disso, vale o teto de R$ 2.518,65. Nenhuma parcela pode ser menor do que um salário mínimo (R$ 1.621).',
      ],
      table: {
        caption: 'Valor da parcela por média salarial',
        columns: ['Média dos 3 últimos salários', 'Parcela'],
        rows: [
          ['R$ 1.500,00', 'R$ 1.621,00 (piso)'],
          ['R$ 2.000,00', 'R$ 1.621,00 (piso)'],
          ['R$ 2.500,00', 'R$ 1.916,66'],
          ['R$ 3.000,00', 'R$ 2.166,65'],
          ['R$ 4.000,00', 'R$ 2.518,65 (teto)'],
        ],
      },
    },
    {
      heading: 'Quantas parcelas você recebe',
      paragraphs: [
        'O número de parcelas depende de quantas vezes você já pediu o benefício e de quantos meses trabalhou com carteira assinada nos últimos 36 meses.',
      ],
      table: {
        caption: 'Parcelas do seguro-desemprego',
        columns: [
          'Solicitação',
          '6 a 11 meses',
          '12 a 23 meses',
          '24 meses ou mais',
        ],
        rows: [
          ['1ª vez', 'Sem direito', '4 parcelas', '5 parcelas'],
          ['2ª vez', '3 parcelas (9 a 11 meses)', '4 parcelas', '5 parcelas'],
          ['3ª vez ou mais', '3 parcelas', '4 parcelas', '5 parcelas'],
        ],
      },
    },
    {
      heading: 'Quem tem direito e como pedir',
      paragraphs: [
        'Tem direito quem foi dispensado sem justa causa, não tem renda própria suficiente e cumpre a carência: 12 meses de trabalho nos últimos 18 no primeiro pedido, 9 meses nos últimos 12 no segundo e 6 meses seguidos nos pedidos seguintes. Pedido de demissão e justa causa não dão direito.',
        'O pedido pode ser feito pelo aplicativo Carteira de Trabalho Digital ou pelo portal gov.br, entre o 7º e o 120º dia depois da dispensa. Perder o prazo significa perder o benefício.',
      ],
    },
    {
      heading: 'Cuidado: nem tudo vem na conta do benefício',
      paragraphs: [
        'O seguro-desemprego não substitui o que a empresa deve na rescisão, nem o saque do FGTS com a multa de 40%. Veja o exemplo completo de uma rescisão sem justa causa na notícia sobre demissão.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso trabalhar e receber o seguro?',
      answer:
        'Não. Se você for contratado com carteira assinada, o benefício é suspenso. Trabalhos informais também podem levar ao cancelamento se descobertos.',
    },
    {
      question: 'Quem pediu demissão tem direito?',
      answer:
        'Não. O benefício é para dispensa sem justa causa. Acordo entre empresa e empregado (art. 484-A da CLT) também não dá direito ao seguro-desemprego.',
    },
    {
      question: 'Onde recebo?',
      answer:
        'Pelo aplicativo CAIXA Tem, em conta digital, ou na rede de atendimento da Caixa, com o cartão cidadão.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego: Seguro-Desemprego',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/seguro-desemprego',
    },
    {
      label: 'Fundo de Amparo ao Trabalhador (FAT): tabela de valores de 2026',
      url: 'https://portalfat.mte.gov.br/mte-reajusta-valores-do-beneficio-seguro-desemprego/',
    },
    {
      label: 'Lei 7.998/1990: Programa do Seguro-Desemprego',
    },
    {
      label: 'Resolução do CODEFAT: tabela de parcelas',
    },
  ],
} as const satisfies NewsDocument;
