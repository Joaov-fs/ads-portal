import type { NewsDocument } from '../../types';

export const news13oSalario2026DatasEQuantoVoceRecebe = {
  kind: 'news',
  slug: '13o-salario-2026-datas-e-quanto-voce-recebe',
  title:
    '13º salário 2026: 2ª parcela cai num domingo e deve sair até 18 de dezembro; veja quanto você recebe',
  description:
    'A 1ª parcela vai até 30 de novembro e a 2ª, que venceria no domingo 20 de dezembro, deve ser paga até sexta, 18. Veja exemplos com INSS e IR.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['salario', 'decimo', '13o', 'descontos', 'trabalho'],
  featuredCalculators: [
    'decimo-salario',
    'decimo-proporcional',
    'salario-liquido',
  ],
  highlights: [
    {
      value: '30/11',
      label: 'Limite da 1ª parcela',
      note: 'Segunda-feira. Equivale a 50% do salário, sem descontos.',
    },
    {
      value: '18/12',
      label: 'Limite prático da 2ª parcela',
      note: 'O prazo legal, 20 de dezembro, cai num domingo.',
    },
    {
      value: 'R$ 3.191,40',
      label: '13º líquido de quem ganha R$ 3.500',
      note: '1ª parcela de R$ 1.750 e 2ª de R$ 1.441,40.',
    },
    {
      value: '1/12 por mês',
      label: '13º proporcional',
      note: 'Cada mês com 15 dias ou mais trabalhados conta.',
    },
  ],
  sections: [
    {
      heading: 'Quando o 13º é pago em 2026',
      paragraphs: [
        'A primeira parcela do 13º deve ser paga entre fevereiro e 30 de novembro. Em 2026, 30 de novembro cai numa segunda-feira. A segunda parcela tem prazo até 20 de dezembro, mas essa data cai num domingo, e por isso o pagamento deve sair até a sexta-feira, 18 de dezembro.',
        'Vale para trabalhadores com carteira assinada, domésticos e quem tem direito ao benefício. Aposentados e pensionistas do INSS têm um calendário próprio, divulgado pelo instituto.',
      ],
    },
    {
      heading: 'Quanto você recebe: exemplos em reais',
      paragraphs: [
        'A primeira parcela é metade do salário bruto, sem desconto algum. Todo o INSS e o Imposto de Renda incidem sobre o 13º inteiro, mas são descontados só na segunda parcela. Por isso a 2ª parcela costuma ser bem menor que a 1ª.',
      ],
      table: {
        caption: '13º integral, para quem trabalhou o ano todo',
        columns: [
          'Salário',
          '1ª parcela',
          'INSS',
          'IRRF',
          '2ª parcela',
          'Total líquido',
        ],
        rows: [
          [
            'R$ 3.500,00',
            'R$ 1.750,00',
            'R$ 308,60',
            'R$ 0,00',
            'R$ 1.441,40',
            'R$ 3.191,40',
          ],
          [
            'R$ 5.000,00',
            'R$ 2.500,00',
            'R$ 501,51',
            'R$ 0,00',
            'R$ 1.998,49',
            'R$ 4.498,49',
          ],
          [
            'R$ 8.000,00',
            'R$ 4.000,00',
            'R$ 921,51',
            'R$ 1.037,86',
            'R$ 2.040,62',
            'R$ 6.040,62',
          ],
        ],
      },
    },
    {
      heading: 'Quem trabalhou menos de 12 meses',
      paragraphs: [
        'O 13º é calculado em 1/12 do salário por mês trabalhado no ano, e o mês conta inteiro quando há 15 dias ou mais de trabalho. Quem começou em 1º de abril, por exemplo, tem direito a 9/12 do 13º.',
        'Quem sai da empresa antes de dezembro recebe o 13º proporcional junto com a rescisão. Horas extras, comissões e adicionais habituais entram pela média do ano.',
      ],
    },
    {
      heading: 'Como se organizar',
      paragraphs: [
        'Vale decidir antes de o dinheiro cair: quitar dívidas caras, reforçar a reserva de emergência e separar o que for para as despesas de início de ano, como IPVA, material escolar e matrícula.',
      ],
    },
  ],
  faq: [
    {
      question: 'A empresa pode pagar o 13º em uma parcela só?',
      answer:
        'Pode pagar tudo até 30 de novembro, com os descontos, se preferir. O que não pode é ultrapassar os prazos legais.',
    },
    {
      question: 'Posso pedir a 1ª parcela junto com as férias?',
      answer:
        'Sim. O empregado pode solicitar o adiantamento em janeiro do ano correspondente, para ser pago junto com as férias.',
    },
    {
      question: 'O 13º tem desconto de pensão alimentícia?',
      answer:
        'Depende da decisão judicial. Muitas determinam que a pensão incida também sobre o 13º. Confira o texto da sua sentença.',
    },
  ],
  sources: [
    {
      label: 'Lei 4.090/1962: Gratificação de Natal (13º salário)',
    },
    {
      label: 'Lei 4.749/1965: prazos de pagamento do 13º',
    },
    {
      label: 'Ministério do Trabalho e Emprego: 13º salário',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
    },
  ],
} as const satisfies NewsDocument;
