import type { NewsDocument } from '../../types';

export const newsPgfnSemanaRegularizacaoTributaria = {
  kind: 'news',
  slug: 'pgfn-semana-regularizacao-tributaria-adesao-ate-9-de-outubro-desconto-ate-100-em-juros-e-multas',
  title:
    'Semana de Regularização da PGFN vai até 9/10: desconto de até 100% em juros e multas',
  description:
    'A PGFN recebe adesões até 9 de outubro, às 19h, para negociar dívidas com a União. Veja as quatro modalidades, o desconto e a parcela mínima de R$ 25 para MEI.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-07',
  updatedAt: '2026-10-07',
  tags: ['mei', 'divida', 'impostos', 'pgfn', 'regularizacao', 'negocios'],
  featuredCalculators: ['das-mei-atraso', 'simples-nacional', 'das-limite-mei'],
  highlights: [
    {
      value: '9/10',
      label: 'Último dia para aderir',
      note: 'O prazo termina às 19h, pelo Portal Regularize.',
    },
    {
      value: '100%',
      label: 'Desconto máximo em juros e multas',
      note: 'Vale para três das quatro modalidades, conforme o enquadramento.',
    },
    {
      value: 'R$ 25',
      label: 'Parcela mínima do MEI',
      note: 'Para os demais contribuintes, o mínimo é de R$ 100.',
    },
    {
      value: '50%',
      label: 'Desconto máximo no pequeno valor',
      note: 'Incide sobre o valor total dos débitos da modalidade.',
    },
  ],
  sections: [
    {
      heading: 'O que é a III Semana Nacional de Regularização Tributária',
      paragraphs: [
        'A Procuradoria-Geral da Fazenda Nacional (PGFN) está com a III Semana Nacional de Regularização Tributária aberta desde segunda-feira, 5 de outubro de 2026. A adesão pode ser feita até sexta-feira, 9 de outubro, às 19h. Ou seja, restam dois dias, contando o de hoje.',
        'A semana funciona como um mutirão de negociação para quem tem dívida inscrita na dívida ativa da União. Pessoas físicas, MEIs, microempresas e empresas maiores podem participar, desde que o débito esteja dentro dos limites do edital. O teto de dívida por contribuinte é de R$ 45 milhões.',
        'As condições estão no Edital nº 11/2026 da PGFN. A negociação é feita pelo Portal Regularize, que reúne mais de 40 serviços ligados à regularização de tributos. Não há necessidade de ir a um balcão: o pedido é on-line.',
      ],
    },
    {
      heading: 'As quatro modalidades e o desconto de cada uma',
      paragraphs: [
        'O edital traz quatro modalidades de transação: por capacidade de pagamento, de débitos considerados irrecuperáveis, de inscrições garantidas por seguro garantia ou carta fiança e de pequeno valor. Cada dívida se encaixa em uma delas, e o enquadramento define as condições.',
        'Nas três primeiras, a PGFN prevê descontos maiores para pagamento à vista, entrada facilitada e desconto de até 100% sobre o valor dos juros, das multas e do encargo legal. Note que o abatimento citado pela PGFN incide sobre esses acréscimos, e não sobre o valor do tributo em si.',
        'Na transação de pequeno valor, o desconto pode chegar a 50% do valor total dos débitos. São números de teto: o percentual que cada contribuinte recebe depende do enquadramento, e a decisão final é da PGFN no momento da adesão.',
      ],
      table: {
        caption: 'Edital nº 11/2026 da PGFN em resumo',
        columns: ['Ponto', 'Regra'],
        rows: [
          ['Período da semana', '5 a 9 de outubro de 2026'],
          ['Prazo de adesão', 'Até 9 de outubro, às 19h'],
          ['Limite de dívida', 'Até R$ 45 milhões por contribuinte'],
          [
            'Desconto nas três primeiras modalidades',
            'Até 100% sobre juros, multas e encargo legal',
          ],
          ['Desconto no pequeno valor', 'Até 50% do valor total dos débitos'],
          ['Parcela mínima', 'R$ 25 para MEI e R$ 100 para os demais'],
        ],
      },
    },
    {
      heading: 'Parcela mínima: o que isso muda na conta',
      paragraphs: [
        'O edital fixa uma parcela mínima, e ela limita quantas prestações cabem na dívida. Para o MEI, a parcela não pode ser menor que R$ 25. Para os demais contribuintes, o piso é de R$ 100.',
        'Um exemplo de conta: uma dívida de R$ 1.200, já com o desconto aplicado, não pode ser dividida em mais de 12 parcelas se o contribuinte não for MEI, porque R$ 1.200 divididos por R$ 100 dão 12. Para um MEI, o mesmo valor pode chegar a 48 parcelas, porque R$ 1.200 divididos por R$ 25 dão 48. Esse é o limite que o piso impõe, e o prazo máximo de cada modalidade ainda precisa ser respeitado.',
        'Outro exemplo, agora no pequeno valor: se o total devido for de R$ 4.000 e o contribuinte receber o desconto máximo de 50%, o abatimento seria de R$ 2.000 e sobrariam R$ 2.000 a pagar. Se o desconto concedido for menor, a conta muda na mesma proporção. Use sempre o valor mostrado na simulação do Regularize, que é o que vale.',
        'Quem é MEI e está com o DAS atrasado pode comparar o valor do acordo com o cálculo de multa e juros na calculadora de DAS em atraso do portal. A comparação ajuda a entender o quanto a negociação alivia.',
      ],
    },
    {
      heading: 'Quais dívidas entram e quem precisa agir agora',
      paragraphs: [
        'A data de inscrição em dívida ativa também define o que pode ser negociado. Para a modalidade de pequeno valor, entram os débitos inscritos até 1º de outubro de 2025. Para as demais modalidades, o corte é 3 de julho de 2026. Dívida inscrita depois dessas datas fica de fora desta rodada.',
        'Quem quer saber se tem dívida inscrita pode consultar o Portal Regularize, que reúne os serviços de regularização da PGFN.',
        'Como o prazo vai até sexta-feira, quem pretende aderir deve consultar a situação com antecedência. Separe CPF ou CNPJ, o acesso gov.br e, se for empresa, a conta de acesso do responsável. Um acordo mal avaliado vira prestação mensal por anos, por isso vale ler as condições antes de confirmar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando posso aderir à Semana de Regularização da PGFN?',
      answer:
        'Até sexta-feira, 9 de outubro de 2026, às 19h, pelo Portal Regularize da PGFN.',
    },
    {
      question: 'O desconto de 100% vale para qualquer dívida?',
      answer:
        'Não. O desconto de até 100% vale sobre juros, multas e encargo legal, em três das quatro modalidades, e depende do enquadramento. O abatimento incide sobre os acréscimos, e não sobre o tributo em si.',
    },
    {
      question: 'O MEI tem parcela mínima diferente?',
      answer:
        'Sim. No edital, a parcela mínima é de R$ 25 para o MEI e de R$ 100 para os demais contribuintes.',
    },
  ],
  sources: [
    {
      label:
        'PGFN: III Semana Nacional da Regularização Tributária (notícia de 6 de outubro de 2026)',
    },
    { label: 'PGFN: Edital de Transação nº 11/2026' },
    { label: 'PGFN: Portal Regularize' },
  ],
} as const satisfies NewsDocument;
