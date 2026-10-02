import type { GuideDocument } from '../../types';

export const guidePoupancaOuCdbQualRendeMais = {
  kind: 'guide',
  slug: 'poupanca-ou-cdb-qual-rende-mais',
  title: 'Poupança ou CDB: qual rende mais e como fazer a comparação',
  description:
    'A regra da poupança com a Selic acima de 8,5%, o rendimento líquido do CDB e uma tabela para decidir com números.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-30',
  updatedAt: '2026-10-02',
  tags: ['poupanca', 'cdb', 'investimentos', 'selic'],
  featuredCalculators: ['cdb-x-poupanca', 'cdb-liquido', 'juros-compostos'],
  highlights: [
    {
      value: '0,5% + TR',
      label: 'Rendimento mensal',
      note: 'Regra com a Selic acima de 8,5% ao ano.',
    },
    {
      value: 'Isento',
      label: 'IR da poupança',
      note: 'Para pessoa física.',
    },
    {
      value: 'R$ 888,38',
      label: 'Vantagem do CDB em 12 meses',
      note: 'Sobre R$ 30.000, depois do IR.',
    },
  ],
  sections: [
    {
      heading: 'Como a poupança rende',
      paragraphs: [
        'A regra de remuneração da poupança está na Lei 12.703/2012. Quando a meta da Selic está acima de 8,5% ao ano, a poupança paga 0,5% ao mês mais a TR (Taxa Referencial). Quando a Selic está em 8,5% ou menos, paga 70% da Selic mais a TR. O rendimento é isento de Imposto de Renda para pessoa física e não tem taxa de administração.',
        'O dinheiro rende por aniversário: a cada mês completo contado a partir da data do depósito. Se você sacar antes do aniversário, perde o rendimento daquele período. Em outras palavras, a poupança é líquida, mas sacar no dia errado custa dinheiro.',
      ],
    },
    {
      heading: 'Exemplo 1: R$ 5.000 por 4 meses',
      paragraphs: [
        'Os exemplos abaixo usam uma poupança de 8,3% ao ano e um CDB que paga 100% do CDI, com CDI de 13,65% ao ano. São taxas de referência para a conta, não as de hoje. Os 8,3% ao ano equivalem a 0,5% ao mês mais uma TR de exemplo, mantida constante.',
        'Em 4 meses (122 dias), a poupança rende R$ 134,67, isenta. O CDB rende R$ 217,87 brutos. Como o prazo é menor que 180 dias, o IR é de 22,5%, ou R$ 49,02, e sobram R$ 168,85. A vantagem do CDB é de R$ 34,17. Nesse prazo curto, a diferença é pequena, e o que costuma pesar mais é a facilidade de resgate.',
      ],
    },
    {
      heading: 'Exemplo 2: R$ 30.000 por 12 e por 24 meses',
      paragraphs: [
        'Em 24 meses (730 dias), a alíquota de IR cai para 15%. Em 12 meses (365 dias), é de 17,5%. A tabela mostra por que o tempo favorece o CDB: o imposto diminui enquanto o juro composto se acumula.',
      ],
      table: {
        caption:
          'R$ 30.000, com poupança a 8,3% ao ano e CDB a 100% do CDI (13,65% ao ano)',
        columns: [
          'Prazo',
          'Poupança',
          'CDB bruto',
          'IR do CDB',
          'CDB líquido',
          'Diferença',
        ],
        rows: [
          [
            '12 meses',
            'R$ 2.490,00',
            'R$ 4.095,00',
            'R$ 716,63 (17,5%)',
            'R$ 3.378,38',
            'R$ 888,38',
          ],
          [
            '24 meses',
            'R$ 5.186,67',
            'R$ 8.748,97',
            'R$ 1.312,35 (15%)',
            'R$ 7.436,62',
            'R$ 2.249,95',
          ],
        ],
      },
    },
    {
      heading: 'Quanto o CDB precisa pagar para empatar',
      paragraphs: [
        'Uma forma útil de decidir é descobrir a taxa mínima do CDB que iguala a poupança depois do imposto. Com a poupança a 8,3% ao ano e o CDI de 13,65%, o CDB precisa pagar cerca de 80% do CDI para empatar em 3 meses, 77% em 6 meses, 74% em 12 meses e 70% em 24 meses. Qualquer CDB acima desses percentuais rende mais que a poupança desse exemplo, mesmo pagando IR.',
        'Se a Selic cair para 7,5%, por exemplo, a poupança passa a render 70% disso, ou 5,25% ao ano mais a TR, e o ponto de empate cai junto. O raciocínio de comparar o líquido continua válido, mas os números precisam ser refeitos com as taxas do dia.',
      ],
    },
    {
      heading: 'Quando a poupança ainda faz sentido',
      paragraphs: [
        'A poupança serve para quem precisa de simplicidade: saldo disponível em qualquer dia útil, sem escolher produto, sem declarar rendimento tributável e sem se preocupar com carência. Para valores pequenos, como o fundo para uma despesa do mês que vem, a diferença de rendimento é de poucos reais.',
        'Mas há CDBs com liquidez diária e Tesouro Selic que costumam render mais. O que você precisa conferir é a liquidez real (se o resgate é no mesmo dia), o prazo mínimo, eventuais taxas de custódia e a garantia do FGC.',
      ],
    },
    {
      heading: 'Erros comuns e como decidir',
      paragraphs: [
        'O primeiro erro é comparar o CDB bruto com a poupança. O segundo é esquecer que o IR depende do prazo: 22,5% até 180 dias, 20% até 360, 17,5% até 720 e 15% acima disso. O terceiro é aplicar em CDB de liquidez só no vencimento e depois precisar do dinheiro antes.',
        'Para decidir, anote a taxa, o prazo que você vai realmente manter o dinheiro, a liquidez e se há garantia do FGC. Calcule o líquido e compare com a poupança no mesmo prazo. As taxas mudam, então refaça a conta a cada nova aplicação. Este conteúdo não é recomendação de investimento.',
      ],
    },
  ],
  faq: [
    {
      question: 'A poupança é mais segura que o CDB?',
      answer:
        'As duas têm garantia do FGC até R$ 250 mil por CPF e por instituição. A diferença está no rendimento e nas regras de resgate, não na proteção do FGC.',
    },
    {
      question: 'O que muda quando a Selic cai?',
      answer:
        'Se a Selic ficar em 8,5% ao ano ou menos, a poupança passa a render 70% da Selic mais a TR. O CDB pós-fixado também rende menos, porque acompanha o CDI.',
    },
    {
      question: 'Perco rendimento se sacar da poupança antes do mês completo?',
      answer:
        'Sim. O rendimento é creditado no aniversário do depósito. Quem saca antes disso não recebe o rendimento do período em andamento.',
    },
    {
      question: 'O rendimento da poupança entra no Imposto de Renda?',
      answer:
        'Os rendimentos da poupança de pessoa física são isentos de IR e informados na declaração como rendimentos isentos, junto com o saldo.',
    },
    {
      question: 'Posso deixar a reserva no CDB em vez da poupança?',
      answer:
        'Pode, desde que o CDB tenha liquidez diária e você entenda as regras de resgate. O que importa é conseguir sacar sem perda quando precisar.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Lei 12.703/2012 — regra da poupança',
    },
    {
      label: 'Lei 11.033/2004',
    },
    {
      label: 'Fundo Garantidor de Créditos',
      url: 'https://www.fgc.org.br/',
    },
  ],
} as const satisfies GuideDocument;
