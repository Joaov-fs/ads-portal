import type { NewsDocument } from '../../types';

export const newsPoupancaRende83AoAnoVejaQuantoCdbELciRendemAMais = {
  kind: 'news',
  slug: 'poupanca-rende-8-3-ao-ano-veja-quanto-cdb-e-lci-rendem-a-mais',
  title:
    'Poupança rende 8,3% ao ano com a Selic em 13,75%: veja quanto CDB e LCI rendem a mais',
  description:
    'Simulação de R$ 10.000 em 12 meses: poupança, CDB de 100% do CDI e LCI de 90% do CDI, com o Imposto de Renda descontado.',
  category: 'financas',
  coverImage: {
    src: '/images/news/poupanca-rende-8-3-ao-ano-veja-quanto-cdb-e-lci-rendem-a-mais.jpg',
    alt: 'Cofrinho de porco e dois potes de moedas, um da poupança e outro maior do CDB.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['poupanca', 'cdb', 'lci', 'investimentos', 'selic'],
  featuredCalculators: ['cdb-x-poupanca', 'cdb-liquido', 'lci-lca'],
  highlights: [
    {
      value: '0,67% ao mês',
      label: 'Rendimento da poupança',
      note: '0,5% mais TR, para depósitos com aniversário em meados de setembro.',
    },
    {
      value: '8,3% ao ano',
      label: 'Poupança no ano',
      note: 'Equivalente a 0,67% ao mês composto.',
    },
    {
      value: 'R$ 1.126,13',
      label: 'CDB 100% do CDI',
      note: 'Rendimento líquido de R$ 10.000 em 12 meses.',
    },
    {
      value: 'R$ 1.228,50',
      label: 'LCI de 90% do CDI',
      note: 'Isenta de IR para pessoa física.',
    },
  ],
  sections: [
    {
      heading: 'A conta de R$ 10.000 em 12 meses',
      paragraphs: [
        'Com a Selic em 13,75% ao ano, a poupança continua rendendo 0,5% ao mês mais a TR, e os depósitos com aniversário em meados de setembro renderam 0,6695% no mês, segundo o Banco Central. Em 12 meses, isso dá cerca de 8,3% ao ano.',
        'Já o CDB que paga 100% do CDI, em torno de 13,65% ao ano, rende R$ 1.365,00 brutos em R$ 10.000 por 12 meses. Depois do IR de 17,5%, sobram R$ 1.126,13, ou cerca de R$ 292 a mais que a poupança.',
      ],
      table: {
        caption: 'R$ 10.000 aplicados por 12 meses, com CDI constante',
        columns: ['Aplicação', 'Rendimento bruto', 'IR', 'Rendimento líquido'],
        rows: [
          ['Poupança (≈ 8,3% ao ano)', 'R$ 833,65', 'Isenta', 'R$ 833,65'],
          [
            'CDB 100% do CDI (13,65% ao ano)',
            'R$ 1.365,00',
            'R$ 238,88',
            'R$ 1.126,13',
          ],
          [
            'LCI ou LCA 90% do CDI (12,29% ao ano)',
            'R$ 1.228,50',
            'Isenta',
            'R$ 1.228,50',
          ],
        ],
      },
    },
    {
      heading: 'Por que a LCI pode ganhar do CDB',
      image: {
        src: '/images/news/poupanca-rende-8-3-ao-ano-veja-quanto-cdb-e-lci-rendem-a-mais-detalhe.jpg',
        alt: 'Detalhe da ilustração: cofrinho de porco e dois potes de moedas, um da poupança e outro maior do CDB.',
        caption:
          'Com a mesma quantia, o CDB tende a render mais que a poupança.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'LCI e LCA não pagam Imposto de Renda para pessoa física. Um título de 90% do CDI isento rende mais que um CDB de 100% do CDI tributado a 17,5% no prazo de 1 a 2 anos. Para prazos curtos, de até 6 meses, o IR do CDB é de 20% a 22,5%, o que favorece ainda mais as LCIs e LCAs.',
        'O contrário também acontece: LCIs com prazo de carência longo podem prender o dinheiro por 12 meses ou mais, ao passo que muitos CDBs têm liquidez diária.',
      ],
    },
    {
      heading: 'Segurança e liquidez',
      paragraphs: [
        'Poupança, CDB, LCI e LCA são cobertos pelo Fundo Garantidor de Créditos (FGC) até R$ 250.000 por CPF e por instituição. A poupança tem liquidez imediata, o que a torna útil para valores que você pode precisar a qualquer momento, mas no longo prazo a diferença de rendimento é grande.',
        'Os valores acima supõem CDI constante durante todo o ano. Se a Selic continuar caindo, os rendimentos pós-fixados diminuem, enquanto os prefixados mantêm a taxa contratada.',
      ],
    },
  ],
  faq: [
    {
      question: 'A poupança tem IR?',
      answer:
        'Não. Os rendimentos da poupança são isentos de Imposto de Renda para pessoa física.',
    },
    {
      question: 'Qual é a regra de rendimento da poupança?',
      answer:
        'Com a Selic acima de 8,5% ao ano, ela rende 0,5% ao mês mais a TR. Com a Selic em 8,5% ou menos, rende 70% da Selic mais a TR.',
    },
    {
      question: 'Vale a pena trocar a poupança por CDB?',
      answer:
        'Para valores que ficarão parados, quase sempre sim. Compare o rendimento líquido e a liquidez e use a calculadora com seu valor e prazo.',
    },
  ],
  sources: [
    {
      label:
        'Banco Central do Brasil: Poupança: rendimentos (série 195 do SGS)',
    },
    {
      label: 'Lei 12.703/2012: regra de remuneração da poupança',
    },
    {
      label: 'Lei 11.033/2004: Imposto de Renda sobre renda fixa',
    },
    {
      label: 'Fundo Garantidor de Créditos (FGC): limite de cobertura',
      url: 'https://www.fgc.org.br/',
    },
  ],
} as const satisfies NewsDocument;
