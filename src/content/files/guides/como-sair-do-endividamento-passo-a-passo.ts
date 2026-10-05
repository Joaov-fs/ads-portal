import type { GuideDocument } from '../../types';

export const guideComoSairDoEndividamentoPassoAPasso = {
  kind: 'guide',
  slug: 'como-sair-do-endividamento-passo-a-passo',
  title: 'Como sair do endividamento: ordem de pagamento e como negociar',
  description:
    'Um passo a passo para listar as dívidas, escolher o que pagar primeiro e negociar, com exemplos de como os juros pesam.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-29',
  updatedAt: '2026-10-02',
  tags: ['dividas', 'cartao', 'negociacao', 'orcamento'],
  featuredCalculators: [
    'juros-compostos',
    'simulador-de-emprestimo',
    'porcentagem',
  ],
  highlights: [
    {
      value: '100%',
      label: 'Limite de juros e encargos no cartão',
      note: 'Do valor original da dívida (Lei 14.690/2023).',
    },
    {
      value: 'R$ 3.529,20',
      label: 'Juros pagos no exemplo',
      note: 'Quitando primeiro a dívida mais cara.',
    },
    {
      value: 'R$ 2.266,35',
      label: 'R$ 900 no cheque especial em 12 meses',
      note: 'A 8% ao mês, sem nenhum pagamento.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: liste tudo e descubra quanto sobra',
      paragraphs: [
        'Anote cada dívida com credor, saldo, taxa de juros, parcela e vencimento. Inclua cartão, cheque especial, empréstimos, financiamentos, carnês e contas atrasadas. Peça ao credor o saldo atualizado e a taxa de juros por escrito, se não souber.',
        'Depois calcule quanto da renda pode ir para dívidas. Exemplo: renda líquida de R$ 3.200,00 e despesas essenciais (moradia, comida, contas, transporte, saúde) de R$ 2.300,00 deixam R$ 900,00 por mês. Esse é o limite, e nenhuma negociação deve passar dele.',
      ],
      table: {
        caption: 'Exemplo hipotético de dívidas (taxas ao mês)',
        columns: ['Dívida', 'Saldo', 'Juros', 'Observação'],
        rows: [
          [
            'Cartão (fatura parcelada)',
            'R$ 2.400,00',
            '10%',
            'Taxa hipotética',
          ],
          [
            'Cheque especial',
            'R$ 900,00',
            '8%',
            'Teto regulamentar de 8% ao mês',
          ],
          [
            'Empréstimo pessoal',
            'R$ 6.000,00',
            '3%',
            '24 parcelas de R$ 354,28',
          ],
        ],
      },
    },
    {
      heading: 'Passo 2: defina a ordem de pagamento',
      paragraphs: [
        'Pague a parcela obrigatória (no exemplo, a do empréstimo) e concentre todo o excedente na dívida de juros mais altos. Com R$ 900,00 por mês no total, sem novos gastos e com juros compostos mensais, a ordem cartão, cheque especial e empréstimo quita tudo em 15 meses e custa R$ 3.529,20 de juros. Trocar para o menor saldo primeiro (cheque, cartão, empréstimo) também quita em 15 meses, mas custa R$ 3.830,89 de juros, R$ 301,69 a mais.',
        'Deixar a dívida cara sem pagamento é o pior caminho. O cheque especial de R$ 900,00 a 8% ao mês vira R$ 2.266,35 em 12 meses sem nenhum pagamento. Já para quem prefere ver vitórias rápidas, quitar primeiro a menor dívida é um método legítimo: custa um pouco mais, mas ajuda a manter o plano.',
      ],
    },
    {
      heading: 'Passo 3: negocie e compare o custo real',
      paragraphs: [
        'Procure o credor para renegociar. Exemplo: uma dívida de R$ 4.800,00 em atraso recebe três propostas. A: R$ 2.640,00 à vista (45% de desconto). B: 12 parcelas de R$ 330,00 (total de R$ 3.960,00). C: 24 parcelas de R$ 250,00 (total de R$ 6.000,00).',
        'Compare tomando a opção à vista como preço base. A proposta B embute juros de cerca de 6,9% ao mês sobre os R$ 2.640,00. A proposta C embute cerca de 8,0% ao mês e custa R$ 3.360,00 a mais que o pagamento à vista. A parcela menor de C parece mais leve, mas o custo total é bem maior. A opção B cabe nos R$ 900,00 do exemplo; a A depende de ter ou conseguir os R$ 2.640,00 sem usar crédito caro.',
        'Antes de aceitar, peça por escrito: valor total, número de parcelas, taxa, data da primeira parcela, e a confirmação de que o nome será retirado dos cadastros de inadimplentes após o pagamento. Não aceite parcelas que consumam toda a renda.',
      ],
    },
    {
      heading: 'Seus direitos e prazos',
      paragraphs: [
        'A Lei 14.690/2023 limita os juros e encargos da dívida de cartão de crédito a 100% do valor original. A Lei 14.181/2021 criou um processo para o consumidor superendividado: conciliação com os credores, conduzida pelo Procon, pela Defensoria Pública ou pelo Judiciário, com a preservação de um mínimo existencial.',
        'Em regra, o nome pode ficar em cadastros de inadimplentes por até cinco anos (CDC, art. 43, § 1º), e a cobrança judicial de dívida de contrato prescreve em cinco anos (Código Civil, art. 206, § 5º, I). O prazo começa em data específica e há exceções, então confirme no Procon ou na Defensoria antes de pagar uma dívida muito antiga.',
      ],
    },
    {
      heading: 'Passo 4: evite recaídas',
      paragraphs: [
        'Monte o orçamento mensal, corte contratos que pesam e comece uma reserva de emergência, mesmo de um mês de despesas. Sem ela, o primeiro imprevisto volta para o cartão. Evite pagar uma dívida usando crédito mais caro.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Pagar só o valor mínimo da fatura de forma contínua, aceitar a primeira proposta sem comparar com o pagamento à vista, trocar dívida cara por empréstimo com parcela longa e juros ainda altos, e pagar boletos de cobrança sem conferir se vieram do credor oficial. Em caso de dúvida sobre um boleto, confirme pelo canal oficial do credor.',
        'Se o credor se recusa a negociar, cobra valor sem explicar ou o consumidor não consegue pagar nem a parcela mínima, procure o Procon, a Defensoria ou a plataforma consumidor.gov.br.',
      ],
    },
  ],
  faq: [
    {
      question: 'Pagar à vista é sempre melhor?',
      answer:
        'Muitas vezes o desconto é grande, mas só vale se o valor não comprometer as despesas essenciais nem levar a outro crédito caro. Compare o custo total das propostas, como no exemplo.',
    },
    {
      question: 'Posso ser cobrado por uma dívida muito antiga?',
      answer:
        'Dívidas têm prazos legais de cobrança e de permanência em cadastros de inadimplentes, em regra de cinco anos, com exceções. Consulte o Procon ou a Defensoria para o seu caso.',
    },
    {
      question: 'Qual dívida pagar primeiro?',
      answer:
        'Em geral, a de juros mais altos, depois de manter em dia as contas essenciais, como aluguel, luz e água. Se manter a motivação for o desafio, quitar a menor primeiro é uma alternativa aceitável, e custa um pouco mais.',
    },
    {
      question: 'Tomar um empréstimo para quitar o cartão vale a pena?',
      answer:
        'Só se a taxa total, com CET, for bem menor que a da dívida atual e se você não voltar a usar o cartão. Compare o custo total e o prazo antes de fechar.',
    },
    {
      question: 'Nome sujo impede de negociar?',
      answer:
        'Não. O credor pode negociar com o cliente negativado, e muitas ofertas são pensadas para esse caso. Após o pagamento, peça a baixa da restrição e confirme.',
    },
  ],
  sources: [
    {
      label: 'Lei 14.690/2023: Desenrola e limite de encargos no cartão',
    },
    {
      label: 'Lei 14.181/2021: tratamento do superendividamento',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'consumidor.gov.br: Senacon',
      url: 'https://www.consumidor.gov.br/',
    },
    {
      label: 'Procon e Defensoria Pública',
    },
  ],
} as const satisfies GuideDocument;
