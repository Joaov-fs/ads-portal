import type { GuideDocument } from '../../types';

export const guideFinanciamentoSacOuPriceQualEscolher = {
  kind: 'guide',
  slug: 'financiamento-sac-ou-price-qual-escolher',
  title:
    'Financiamento SAC ou Price: qual escolher e quanto você paga de juros',
  description:
    'A diferença entre as duas tabelas de amortização, com uma simulação de R$ 200 mil em 30 anos e o que pesa mais na sua decisão.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-25',
  updatedAt: '2026-10-02',
  tags: ['financiamento', 'sac', 'price', 'imovel', 'juros'],
  featuredCalculators: [
    'financiamento-sac-price',
    'amortizacao-antecipada',
    'simulador-de-emprestimo',
  ],
  highlights: [
    {
      value: 'R$ 306.850',
      label: 'Juros no SAC',
      note: 'Financiamento de R$ 200 mil em 360 meses a 0,85% ao mês.',
    },
    {
      value: 'R$ 442.518',
      label: 'Juros na Price',
      note: 'O mesmo financiamento com parcela fixa.',
    },
    {
      value: 'R$ 135.668',
      label: 'Diferença nos juros',
      note: 'A favor do SAC.',
    },
  ],
  sections: [
    {
      heading: 'Como cada sistema funciona',
      paragraphs: [
        'Toda parcela de financiamento tem duas partes: os juros do mês, calculados sobre o saldo devedor, e a amortização, que é a parte que realmente reduz a dívida. O que muda entre SAC e Price é como essas duas partes se combinam.',
        'No SAC (Sistema de Amortização Constante) a amortização é igual todo mês. Como o saldo cai rápido, os juros caem junto e a parcela diminui com o tempo. Na tabela Price a parcela é fixa do início ao fim: no começo ela é quase toda juros, e a amortização só ganha peso nos últimos anos.',
      ],
    },
    {
      heading: 'Exemplo 1: R$ 200.000 em 360 meses',
      paragraphs: [
        'Taxa de exemplo de 0,85% ao mês (nominal de 10,2% ao ano, cerca de 10,69% ao ano efetivos), sem seguros, tarifas e correção pela TR. No SAC, a amortização mensal é R$ 200.000 ÷ 360 = R$ 555,56. Na primeira parcela, os juros são R$ 200.000 x 0,85% = R$ 1.700,00, e a parcela é R$ 555,56 + R$ 1.700,00 = R$ 2.255,56. A última parcela, com saldo de apenas R$ 555,56, é de R$ 560,28.',
        'Na Price, a parcela fixa é R$ 1.784,77. No primeiro mês, os mesmos R$ 1.700,00 vão para juros e só R$ 84,77 amortizam a dívida. Depois de 5 anos (60 parcelas), o saldo da Price ainda é de R$ 193.400,60, contra R$ 166.666,67 no SAC.',
      ],
      table: {
        caption: 'R$ 200.000 em 360 meses a 0,85% ao mês',
        columns: ['Item', 'SAC', 'Price'],
        rows: [
          ['Primeira parcela', 'R$ 2.255,56', 'R$ 1.784,77'],
          ['Parcela no mês 60', 'R$ 1.976,94', 'R$ 1.784,77'],
          ['Parcela no mês 180', 'R$ 1.410,28', 'R$ 1.784,77'],
          ['Última parcela', 'R$ 560,28', 'R$ 1.784,77'],
          ['Saldo devedor após 60 meses', 'R$ 166.666,67', 'R$ 193.400,60'],
          ['Juros totais', 'R$ 306.850,00', 'R$ 442.518,32'],
          ['Total pago', 'R$ 506.850,00', 'R$ 642.518,32'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: o mesmo valor em 240 meses',
      paragraphs: [
        'Reduzir o prazo mexe mais no custo do que escolher a tabela. Com R$ 200.000 em 240 meses à mesma taxa, o SAC começa em R$ 2.533,33 e termina em R$ 840,42, com R$ 204.850,00 de juros. A Price fica em R$ 1.956,62 por mês, com R$ 269.588,70 de juros. A diferença entre os sistemas cai para R$ 64.738,70, e o SAC em 240 meses custa menos de juros do que a Price em 360.',
        'Note também que, no prazo de 360 meses, o SAC fica mais barato por mês do que a Price a partir da parcela 101. Antes disso, a parcela do SAC é maior. Se você pretende quitar ou vender o imóvel em poucos anos, o aperto inicial do SAC conta mais do que a economia total.',
      ],
    },
    {
      heading: 'A renda decide o que é possível',
      paragraphs: [
        'Muitos bancos usam como referência que a primeira parcela não passe de cerca de 30% da renda bruta familiar (confirme a regra da instituição). Com essa referência, a primeira parcela do SAC de R$ 2.255,56 exige renda de R$ 7.518,53; a da Price, de R$ 1.784,77, exige R$ 5.949,23.',
        'Quem tem renda entre os dois valores pode ser aprovado na Price e reprovado no SAC. Nesse caso, a Price não é um erro, mas um custo maior em troca de caber no orçamento. Uma alternativa é aumentar a entrada ou escolher um imóvel mais barato antes de esticar o prazo.',
      ],
    },
    {
      heading: 'Como pagar menos juros',
      paragraphs: [
        'Amortizar parte do saldo reduz os juros dos meses futuros, e o direito de quitar a dívida antecipadamente, total ou parcialmente, com redução proporcional dos juros, está no Código de Defesa do Consumidor (art. 52, § 2º). No financiamento imobiliário, o banco pode ter regras próprias para o formato, então peça por escrito se a amortização reduz o prazo ou a parcela.',
        'Exemplo na Price: após 60 parcelas, o saldo é R$ 193.400,60 com 300 meses restantes. Um pagamento extra de R$ 20.000 mantendo a parcela de R$ 1.784,77 encurta o prazo para cerca de 206 meses e economiza cerca de R$ 146.908,74 em juros. Se em vez disso você reduzir a parcela mantendo o prazo, ela cai para cerca de R$ 1.600,21 e a economia é de cerca de R$ 35.370,24. Manter a parcela e encurtar o prazo costuma economizar mais.',
      ],
    },
    {
      heading: 'Erros comuns e quando procurar ajuda',
      paragraphs: [
        'Comparar bancos só pela taxa de juros é o erro mais frequente. O CET (Custo Efetivo Total) inclui juros, seguros obrigatórios, tarifas e demais encargos, e é ele que deve ser comparado. Peça a simulação por escrito com CET, valor total pago e a data-base da taxa. Outro erro é esquecer que a TR e o reajuste do seguro mudam a parcela real.',
        'Se achar que uma cobrança foi indevida, procure primeiro o SAC e a ouvidoria do banco e, se não resolver, registre reclamação no Banco Central ou no Procon. Para dúvidas sobre o contrato, uma advogada ou advogado de sua confiança, ou a Defensoria Pública, podem analisar. A tabela e os números aqui são simulações e não substituem a proposta do banco.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso mudar de SAC para Price depois?',
      answer:
        'Em geral, não. O sistema é definido no contrato, mas é possível portar o financiamento para outro banco e renegociar as condições, inclusive a tabela.',
    },
    {
      question: 'Qual é melhor para quem tem renda justa?',
      answer:
        'Se a renda aperta no começo, a Price pode ser a opção viável, ao custo de mais juros. Se há folga, o SAC reduz o custo total. A decisão depende do orçamento e do prazo que você pretende ficar com o imóvel.',
    },
    {
      question: 'Por que o saldo da Price cai tão devagar no início?',
      answer:
        'Porque a parcela é fixa e os juros do primeiro mês consomem quase tudo. No exemplo de R$ 200.000, só R$ 84,77 da primeira parcela amortizam a dívida.',
    },
    {
      question: 'O CET é a mesma coisa que a taxa de juros?',
      answer:
        'Não. O CET soma os juros e os custos obrigatórios da operação, como seguros e tarifas, e permite comparar propostas de bancos diferentes. A taxa de juros sozinha mostra só uma parte.',
    },
    {
      question: 'Amortizar reduz a parcela ou o prazo?',
      answer:
        'Depende do que você escolher na solicitação. Em geral, manter a parcela e reduzir o prazo economiza mais juros; reduzir a parcela alivia o orçamento mensal.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990), art. 52',
    },
    {
      label: 'Caixa Econômica Federal — financiamento habitacional',
    },
    {
      label: 'Resolução CMN sobre o CET',
    },
  ],
} as const satisfies GuideDocument;
