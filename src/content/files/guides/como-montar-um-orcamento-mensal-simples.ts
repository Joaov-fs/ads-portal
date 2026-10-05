import type { GuideDocument } from '../../types';

export const guideComoMontarUmOrcamentoMensalSimples = {
  kind: 'guide',
  slug: 'como-montar-um-orcamento-mensal-simples',
  title: 'Como montar um orçamento mensal simples (regra 50-30-20)',
  description:
    'Organize a renda, separe gastos essenciais e desejos e guarde uma parte todo mês com a regra 50-30-20 e exemplos em reais.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-26',
  updatedAt: '2026-10-02',
  tags: [
    'orcamento',
    'planejamento',
    'organizacao-financeira',
    'economia-domestica',
  ],
  featuredCalculators: ['porcentagem', 'salario-liquido'],
  highlights: [
    {
      value: '50%',
      label: 'Necessidades',
      note: 'Moradia, comida, transporte, saúde.',
    },
    {
      value: '30%',
      label: 'Desejos',
      note: 'Lazer, assinaturas, compras.',
    },
    {
      value: '20%',
      label: 'Poupança e dívidas',
      note: 'Reserva e pagamento de dívidas.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: use a renda líquida, não o salário bruto',
      paragraphs: [
        'O orçamento parte do dinheiro que realmente cai na conta, depois de INSS, Imposto de Renda e outros descontos. Quem ganha um salário mínimo de R$ 1.621,00, por exemplo, recebe cerca de R$ 1.499,43 depois do INSS, e é sobre esse valor que se faz a conta. Some também rendas que se repetem, como pensão ou um bico fixo, mas deixe de fora o que é eventual.',
        'Se a renda varia, não use o melhor mês. Considere seis meses, por exemplo: R$ 2.400,00, R$ 3.900,00, R$ 3.100,00, R$ 2.800,00, R$ 4.500,00 e R$ 3.300,00. A média é R$ 3.333,33, mas o mês mais baixo foi R$ 2.400,00. Planejar sobre a média dos três menores meses (R$ 2.766,67) é uma escolha prudente, e os meses acima disso viram reserva.',
      ],
    },
    {
      heading: 'Passo 2: divida em três grupos',
      paragraphs: [
        'A regra 50-30-20 é um ponto de partida: 50% para necessidades, 30% para desejos e 20% para poupança e pagamento de dívidas. Necessidades são o que você paga mesmo sem renda extra: moradia, alimentação básica, contas de casa, transporte, saúde e parcelas mínimas de dívidas. Desejos são lazer, delivery, assinaturas e compras não essenciais.',
        'Em rendas baixas, a conta não fecha em 50%, e tudo bem. Com os R$ 1.499,43 do exemplo, necessidades de R$ 1.230,00 representam 82% da renda. Sobram R$ 269,43, que podem ser divididos em R$ 150,00 (10%) para reserva ou dívidas e R$ 119,43 (8%) para o que não é essencial. O importante é que a soma feche em 100% e que a parte da poupança exista, mesmo pequena.',
      ],
      table: {
        caption: 'Renda líquida de R$ 1.499,43: uma divisão possível',
        columns: ['Grupo', 'Valor', 'Percentual'],
        rows: [
          ['Necessidades', 'R$ 1.230,00', '82%'],
          ['Poupança e dívidas', 'R$ 150,00', '10%'],
          ['Desejos', 'R$ 119,43', '8%'],
        ],
      },
    },
    {
      heading: 'Passo 3: anote por 30 dias e compare',
      paragraphs: [
        'Registre cada gasto numa planilha, no aplicativo do banco ou até no caderno, e some por grupo no fim do mês. Os pequenos gastos recorrentes são os que mais surpreendem. Use também o extrato e a fatura do cartão para não esquecer nada.',
        'Veja o exemplo de uma renda líquida de R$ 4.200,00. A meta da regra 50-30-20 seria R$ 2.100,00, R$ 1.260,00 e R$ 840,00. Mas o registro de 30 dias mostrou necessidades de R$ 2.650,00 (63%), desejos de R$ 1.050,00 (25%) e poupança de R$ 500,00 (12%). Em vez de forçar os 50%, a pessoa adota uma meta de 60-25-15: necessidades de R$ 2.520,00, desejos de R$ 1.050,00 e poupança de R$ 630,00.',
      ],
      table: {
        caption: 'Renda líquida de R$ 4.200,00: do registro real à nova meta',
        columns: ['Grupo', 'Gasto real', 'Meta ajustada', 'Mudança'],
        rows: [
          [
            'Necessidades',
            'R$ 2.650,00 (63%)',
            'R$ 2.520,00 (60%)',
            '- R$ 130,00',
          ],
          ['Desejos', 'R$ 1.050,00 (25%)', 'R$ 1.050,00 (25%)', 'sem mudança'],
          [
            'Poupança e dívidas',
            'R$ 500,00 (12%)',
            'R$ 630,00 (15%)',
            '+ R$ 130,00',
          ],
        ],
      },
    },
    {
      heading: 'Passo 4: ajuste, automatize e inclua os gastos anuais',
      paragraphs: [
        'Para chegar aos R$ 130,00 de corte do exemplo, o caminho é revisar contratos que pesam todo mês: plano de celular, internet, seguro, mensalidades. Cortar o que não faz falta costuma render mais do que cortar o café do dia.',
        'Programe a transferência da poupança para o dia em que o salário cai, antes de gastar. E não esqueça as despesas anuais: um IPVA de R$ 1.440,00 equivale a R$ 120,00 por mês. Separe esse valor todo mês e a conta de janeiro não vira surpresa.',
      ],
    },
    {
      heading: 'Quando existe dívida cara',
      paragraphs: [
        'Se há dívida com juros altos, como cartão rotativo ou cheque especial, a parte de 20% deve ir primeiro para ela. Pagar uma dívida cara costuma render mais do que qualquer aplicação. Mantenha uma pequena reserva (um mês de despesas essenciais) para não voltar ao crédito diante de um imprevisto.',
        'Se as despesas essenciais já passam da renda mesmo depois dos cortes, o orçamento sozinho não resolve. Nesse caso, busque renegociar as dívidas e, se necessário, procure o Procon, a Defensoria Pública ou programas de educação financeira do Banco Central.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os mais frequentes são esquecer parcelas do cartão que continuam nos meses seguintes, planejar sobre o melhor mês de renda, não prever gastos anuais, tratar a poupança como o que sobra no fim do mês e abandonar o orçamento depois de um mês estourado. Um mês fora do plano é dado para ajustar a meta, e não motivo para desistir.',
      ],
    },
  ],
  faq: [
    {
      question: 'A regra 50-30-20 serve para todo mundo?',
      answer:
        'É uma referência. Com renda apertada, necessidades acima de 50% são comuns. O essencial é guardar alguma coisa todo mês, mesmo 5%, e aumentar a parte aos poucos.',
    },
    {
      question: 'Como entra a parcela do cartão no orçamento?',
      answer:
        'Entra no mês em que é cobrada. Faça uma lista das parcelas futuras, com mês e valor, para saber quanto da renda dos próximos meses já está comprometido.',
    },
    {
      question: 'Quanto devo guardar de reserva?',
      answer:
        'Uma referência comum é de 3 a 6 meses de despesas essenciais, ou mais se a renda é variável. Comece por um mês e vá ampliando, em aplicação com liquidez diária.',
    },
    {
      question: 'Quanto tempo leva para o orçamento funcionar?',
      answer:
        'Em geral, de dois a três meses de registro para conhecer seus gastos reais. Revise a meta ao final de cada mês e depois a cada trimestre.',
    },
    {
      question: 'Devo contar o vale-alimentação como renda?',
      answer:
        'Conte só o que cobre gastos que você teria de qualquer forma, como alimentação. Assim ele entra nas necessidades e diminui o que sai da conta.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Banco Central do Brasil: Cidadania Financeira',
      url: 'https://www.bcb.gov.br/cidadaniafinanceira',
    },
  ],
} as const satisfies GuideDocument;
