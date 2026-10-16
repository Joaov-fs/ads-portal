import type { NewsDocument } from '../../types';

export const newsAntecipacaoSaqueAniversarioFgts3Parcelas = {
  kind: 'news',
  slug: 'antecipacao-do-saque-aniversario-do-fgts-cai-para-3-parcelas-e-r-1-500-em-1-de-novembro',
  title:
    'Antecipação do saque-aniversário do FGTS cai para 3 parcelas e R$ 1.500 em 1º de novembro',
  description:
    'A partir de 1º de novembro, a antecipação do saque-aniversário do FGTS cai de 5 para 3 parcelas e de R$ 2.500 para R$ 1.500. Veja a conta e o que fazer.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/antecipacao-do-saque-aniversario-do-fgts-cai-para-3-parcelas-e-r-1-500-em-1-de-novembro.jpg',
    alt: 'Quadro com os limites de 5 e 3 parcelas, calendário de novembro com o dia 1 marcado e celular com o teto de R$ 1.500.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-16',
  tags: ['fgts', 'saque-aniversario', 'antecipacao', 'emprestimo', 'trabalho'],
  featuredCalculators: ['simulador-de-emprestimo', 'fgts-multa'],
  highlights: [
    {
      value: 'R$ 1.500',
      label: 'Teto da antecipação desde 1º/11',
      note: 'Hoje o teto é de R$ 2.500, em até 5 parcelas.',
    },
    {
      value: '3 parcelas',
      label: 'Limite a partir de 1º de novembro',
      note: 'Até 31/10 ainda é possível antecipar 5.',
    },
    {
      value: 'R$ 500',
      label: 'Teto por parcela antecipada',
      note: 'O piso por parcela é de R$ 100.',
    },
  ],
  sections: [
    {
      heading: 'O que muda no saque-aniversário em 1º de novembro',
      paragraphs: [
        'Quem aderiu ao saque-aniversário do FGTS pode pedir a um banco que adiante os saques dos próximos anos, em um empréstimo com esses saques como garantia. Até 31 de outubro de 2026, a antecipação pode alcançar até cinco saques anuais. A partir de 1º de novembro de 2026, o limite cai para três.',
        'O teto por parcela antecipada continua em R$ 500, e o piso, em R$ 100. Por isso o valor máximo de uma operação cai de R$ 2.500 (cinco parcelas de até R$ 500) para R$ 1.500 (três parcelas de até R$ 500). A informação consta na página do saque-aniversário no portal do FGTS.',
        'A mudança é a segunda etapa das regras aprovadas pelo Conselho Curador do FGTS em outubro de 2025. A primeira etapa começou em 1º de novembro de 2025 e criou a carência de 90 dias entre a adesão e o primeiro pedido de antecipação, o limite de uma operação por ano e as faixas de valor por parcela.',
        'Em dados divulgados pelo governo na época, o saque-aniversário reunia 21,5 milhões de trabalhadores, cerca de 51% das contas ativas do FGTS, e aproximadamente 70% deles já tinham feito alguma antecipação. É esse grupo que mais sente a nova regra.',
      ],
    },
    {
      heading: 'Quanto muda na prática: a conta em reais',
      image: {
        src: '/images/news/antecipacao-do-saque-aniversario-do-fgts-cai-para-3-parcelas-e-r-1-500-em-1-de-novembro-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com 5 parcelas e R$ 2.500 até 31/10 e 3 parcelas e R$ 1.500 desde 1º/11.',
        caption:
          'Até 31 de outubro o teto é de R$ 2.500; desde 1º de novembro, R$ 1.500.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O que o banco pode adiantar depende de duas coisas: do número de parcelas permitido e do valor do saque anual de cada trabalhador, que segue a tabela de alíquotas do saque-aniversário. Cada parcela antecipada é limitada a R$ 500.',
        'Um trabalhador com saldo de R$ 3.000 tem saque anual de R$ 1.050 (30% do saldo mais R$ 150). Como cada parcela antecipada é limitada a R$ 500, o teto é de R$ 2.500 com cinco parcelas e de R$ 1.500 com três, uma diferença de R$ 1.000 no valor máximo.',
        'Quem tem saldo menor sente a mudança de outro jeito. Com saldo de R$ 800, o saque anual é de R$ 370 (40% do saldo mais R$ 50). Cinco saques somam R$ 1.850, e três somam R$ 1.110, ou R$ 740 a menos.',
        'Esses valores são brutos, antes dos juros que o banco desconta do que entrega ao trabalhador. O dinheiro que chega à conta é sempre menor que o teto, e a diferença depende da taxa de cada instituição.',
      ],
      table: {
        caption: 'Valor máximo antecipado antes e depois de 1º de novembro',
        columns: [
          'Saque anual',
          'Até 31/10 (5 parcelas)',
          'Desde 1º/11 (3 parcelas)',
          'Diferença',
        ],
        rows: [
          ['R$ 370', 'R$ 1.850', 'R$ 1.110', 'R$ 740'],
          ['R$ 500 ou mais', 'R$ 2.500', 'R$ 1.500', 'R$ 1.000'],
        ],
      },
    },
    {
      heading: 'Quem é afetado e quem não precisa fazer nada',
      paragraphs: [
        'A regra vale para os novos contratos de antecipação. Pelas informações divulgadas, quem já assinou um contrato continua com as condições do que foi contratado. Quem aderiu ao saque-aniversário, mas nunca antecipou, segue recebendo o saque todo ano, sem mudança.',
        'Quem ainda não aderiu enfrenta um prazo apertado. Como existe carência de 90 dias entre a adesão e a antecipação, quem aderir hoje, 16 de outubro, só poderia pedir o empréstimo a partir de meados de janeiro de 2027, já dentro da regra de três parcelas. Para essas pessoas, o prazo de 31 de outubro já não ajuda.',
        'Vale lembrar a regra mais importante do saque-aniversário: quem aderiu e é demitido sem justa causa recebe a multa de 40%, mas não saca o saldo da conta. Se há uma antecipação em curso, os saques que a garantem seguem comprometidos com o banco. Para entender a diferença entre as modalidades, o guia sobre saque-aniversário do portal explica a tabela e o saque-rescisão.',
      ],
    },
    {
      heading: 'O que avaliar antes de contratar até 31 de outubro',
      paragraphs: [
        'A antecipação é um empréstimo, e não um saque. Você recebe hoje um valor menor do que o total dos saques futuros, e perde esses saques nos anos seguintes. Antes de assinar, peça o custo efetivo total, que reúne juros e tarifas, e compare com outras linhas de crédito.',
        'A cobrança de juros faz diferença no bolso. Para estimar quanto custa um empréstimo com parcelas e taxa conhecidas, use o simulador de empréstimo do portal. Se a ideia for trocar uma dívida mais cara, como o rotativo do cartão, a conta precisa mostrar economia real, e não só alívio no mês.',
        'Quem pensa em mudar de emprego ou teme ser demitido deve pesar o risco. Com o saque-aniversário, o saldo fica preso na demissão, e com a antecipação os saques futuros já estão comprometidos. Nessa situação, o saque-rescisão costuma ser mais protetor. Em caso de dúvida, o aplicativo FGTS mostra a modalidade, o saldo e os contratos de antecipação em andamento.',
        'Por fim, desconfie de ofertas que prometem liberar mais do que a regra permite, que pedem pagamento adiantado ou que chegam por mensagem de desconhecidos. A antecipação só é feita por instituição financeira autorizada, com a sua autorização dada no aplicativo FGTS.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quantas parcelas posso antecipar a partir de 1º de novembro?',
      answer:
        'Até três saques-aniversário anuais, com teto de R$ 500 por parcela e valor máximo de R$ 1.500 na operação. Até 31 de outubro de 2026 o limite ainda é de cinco parcelas e R$ 2.500.',
    },
    {
      question: 'Meu contrato de antecipação já assinado muda?',
      answer:
        'Pelas informações divulgadas, a nova regra vale para os contratos feitos depois da data de corte. Confirme as condições do seu contrato com o banco e no aplicativo FGTS.',
    },
    {
      question: 'Posso antecipar logo depois de aderir ao saque-aniversário?',
      answer:
        'Não. Existe carência de 90 dias entre a adesão e o pedido de antecipação, e só é permitida uma operação por ano.',
    },
  ],
  sources: [
    {
      label: 'FGTS: saque-aniversário, regras da antecipação',
      url: 'https://www.fgts.gov.br/Paginas/trabalhador/saque/saque-aniversario.aspx',
    },
    {
      label:
        'Agência Brasil: novas regras do saque-aniversário do FGTS entram em vigor neste sábado, 1/11/2025',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2025-10/novas-regras-do-saque-aniversario-do-fgts-entram-em-vigor-neste-sabado',
    },
    {
      label: 'Caixa: antecipação do saque-aniversário do FGTS',
      url: 'https://www.caixa.gov.br/voce/credito-financiamento/emprestimo/antecipacao-saque-aniversario-FGTS/Paginas/default.aspx',
    },
  ],
} as const satisfies NewsDocument;
