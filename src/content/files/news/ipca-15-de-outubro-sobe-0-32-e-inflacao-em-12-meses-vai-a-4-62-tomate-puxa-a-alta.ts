import type { NewsDocument } from '../../types';

export const newsIpca15Outubro2026 = {
  kind: 'news',
  slug: 'ipca-15-de-outubro-sobe-0-32-e-inflacao-em-12-meses-vai-a-4-62-tomate-puxa-a-alta',
  title:
    'IPCA-15 de outubro sobe 0,32% e inflação em 12 meses vai a 4,62%; tomate puxa a alta',
  description:
    'O IBGE divulgou o IPCA-15 de outubro: 0,32% no mês e 4,62% em 12 meses, acima do teto da meta. Veja o que subiu, o que caiu e a conta no seu bolso.',
  category: 'economia',
  coverImage: {
    src: '/images/news/ipca-15-de-outubro-sobe-0-32-e-inflacao-em-12-meses-vai-a-4-62-tomate-puxa-a-alta.jpg',
    alt: 'Relatório do IPCA-15 de outubro com 0,32% no mês e 4,62% em 12 meses, calculadora e etiquetas de tomate com alta de 24,54% e luz com queda de 0,89%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-23',
  updatedAt: '2026-10-23',
  tags: [
    'ipca-15',
    'ipca',
    'inflacao',
    'ibge',
    'alimentos',
    'energia-eletrica',
    'combustiveis',
    'custo-de-vida',
  ],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem'],
  highlights: [
    {
      value: '4,62%',
      label: 'IPCA-15 em 12 meses',
      note: 'Acima do teto de 4,5% da meta. Em setembro eram 4,47%.',
    },
    {
      value: '0,32%',
      label: 'IPCA-15 de outubro',
      note: 'Em setembro, a taxa tinha sido de 0,70%.',
    },
    {
      value: '+24,54%',
      label: 'Tomate no mês',
      note: 'Maior pressão individual sobre o índice.',
    },
    {
      value: '-0,89%',
      label: 'Energia elétrica residencial',
      note: 'Bandeira passou de amarela para verde.',
    },
  ],
  sections: [
    {
      heading: 'O que o IBGE divulgou nesta sexta-feira',
      paragraphs: [
        'O IBGE divulgou em 23 de outubro de 2026 que o IPCA-15, a prévia da inflação oficial, subiu 0,32% em outubro. A taxa é menos da metade da registrada em setembro, de 0,70%, e ficou exatamente no valor que o boletim Focus de 19 de outubro, do Banco Central, projetava. Em outubro de 2025, o índice tinha ficado em 0,18%.',
        'Mesmo com a desaceleração no mês, o acumulado em 12 meses subiu para 4,62%, contra 4,47% na leitura anterior. O número está acima do teto da meta de inflação, de 4,5%. A meta é de 3%, com tolerância de 1,5 ponto percentual para cima ou para baixo.',
        'O IPCA-15 funciona como um ensaio do IPCA cheio: a coleta de preços foi de 16 de setembro a 14 de outubro, e não do mês fechado. O IPCA de outubro será divulgado pelo IBGE em 12 de novembro.',
      ],
    },
    {
      heading: 'Alimentos pesam mais: tomate, cebola, batata e arroz',
      image: {
        src: '/images/news/ipca-15-de-outubro-sobe-0-32-e-inflacao-em-12-meses-vai-a-4-62-tomate-puxa-a-alta-detalhe.jpg',
        alt: 'Detalhe da ilustração: relatório do IPCA-15 com 0,32% no mês, 0,70% em setembro, 4,62% em 12 meses e 0,88% em alimentos.',
        caption:
          'O IPCA-15 de outubro subiu 0,32%, e a inflação em 12 meses chegou a 4,62%.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Alimentação e bebidas subiu 0,88% e foi o grupo que mais pesou no resultado, com 0,19 ponto percentual de impacto. A alimentação no domicílio, ou seja, a compra de supermercado e feira, avançou 1,01%, contra 0,38% em setembro.',
        'O tomate foi o item individual que mais pressionou o índice, com alta de 24,54%. Também subiram a cebola (13,63%), a batata-inglesa (10,96%) e o arroz (5,80%). Do lado das quedas, aparecem a cenoura (-10,67%), as frutas (-1,37%) e o café moído (-1,16%).',
        'Nos combustíveis, o grupo subiu 1,2%. O diesel avançou 3,70%, o etanol 2,73% e a gasolina 0,92%. O gás veicular recuou 0,18%. As passagens aéreas caíram 9,24%, o que deu o maior impacto negativo do índice, de 0,08 ponto percentual.',
      ],
      table: {
        caption: 'IPCA-15 de outubro de 2026 por grupo (IBGE)',
        columns: ['Grupo', 'Variação no mês', 'Impacto (p.p.)'],
        rows: [
          ['Alimentação e bebidas', '0,88%', '0,19'],
          ['Despesas pessoais', '0,55%', '0,06'],
          ['Vestuário', '0,53%', '0,02'],
          ['Comunicação', '0,43%', '0,02'],
          ['Artigos de residência', '0,28%', '0,01'],
          ['Saúde e cuidados pessoais', '0,15%', '0,02'],
          ['Educação', '0,09%', '0,01'],
          ['Transportes', '0,05%', '0,01'],
          ['Habitação', '-0,10%', '-0,02'],
        ],
      },
    },
    {
      heading: 'Por que a conta de luz ficou mais barata',
      paragraphs: [
        'Habitação foi o único grupo em queda, com -0,10%. O motivo foi a energia elétrica residencial, que recuou 0,89% porque a bandeira tarifária passou de amarela para verde, sem cobrança adicional em outubro. Em setembro, a conta de luz tinha subido 7,42% no IPCA-15, com o fim da devolução do bônus de Itaipu.',
        'Para quem paga a conta, o efeito prático depende da distribuidora e do consumo. Em uma fatura de R$ 200, uma queda de 0,89% representa R$ 1,78 a menos, ou R$ 198,22. É pouco diante da alta do mês anterior, mas ajuda a segurar o índice geral.',
        'Vale lembrar que a bandeira é definida mês a mês pela Aneel e pode mudar de novo em novembro. O IPCA-15 de outubro mostra o efeito da bandeira verde, não uma garantia de conta mais baixa nos próximos meses.',
      ],
    },
    {
      heading:
        'Exemplos: o que 4,62% significa no aluguel, no salário e na feira',
      paragraphs: [
        'No aluguel, quem tem contrato corrigido pelo IPCA usa o acumulado de 12 meses do índice indicado no contrato. Como referência, 4,62% sobre um aluguel de R$ 2.000 dá R$ 92,40 de aumento, e o novo valor fica em R$ 2.092,40. Atenção: o reajuste oficial usa o IPCA cheio, e não o IPCA-15, então o número final só sai em 12 de novembro. Use a calculadora de reajuste de aluguel para simular com o seu valor.',
        'No salário, quem ganha R$ 3.000 precisaria de um reajuste de 4,62%, ou R$ 138,60, para chegar a R$ 3.138,60 e manter o poder de compra de 12 meses atrás. É uma régua de comparação, não um direito automático: o reajuste depende de convenção coletiva ou acordo com a empresa.',
        'Na feira, o tomate subiu 24,54% no mês. Se o quilo custava R$ 8,00, passa a R$ 9,96. Em uma compra de 5 quilos, a diferença é de R$ 9,82: de R$ 40,00 para R$ 49,82. Já a alimentação no domicílio, com alta de 1,01%, encarece em R$ 10,10 uma compra mensal de R$ 1.000 em itens de mercado. A calculadora de porcentagem do portal faz essas contas com qualquer valor.',
      ],
    },
    {
      heading: 'O que muda daqui para frente',
      paragraphs: [
        'O IPCA-15 não corrige contratos nem salários, mas sinaliza a direção do IPCA cheio. Com o acumulado acima do teto da meta, o Banco Central tende a acompanhar de perto os próximos dados antes de decidir o rumo da Selic. A decisão oficial sai nas reuniões do Copom, e o portal acompanha o calendário.',
        'Para o consumidor, os pontos de atenção são os alimentos, que subiram mais no domicílio do que fora de casa, e os combustíveis, com o diesel à frente. O diesel influencia o frete e, por isso, pode chegar aos preços do mercado nas próximas semanas.',
        'O próximo dado é o IPCA de outubro, em 12 de novembro. É esse índice, e não o IPCA-15, que entra no cálculo oficial da inflação de 12 meses usada em contratos e comparações de poder de compra.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual foi o IPCA-15 de outubro de 2026?',
      answer:
        'O IBGE divulgou alta de 0,32% em outubro. Em 12 meses, a inflação medida pelo IPCA-15 chegou a 4,62%, acima do teto de 4,5% da meta.',
    },
    {
      question: 'IPCA-15 serve para reajustar o aluguel?',
      answer:
        'Em geral não. Os contratos costumam usar o IPCA cheio ou o IGP-M, conforme está escrito no contrato. O IPCA-15 é uma prévia, com coleta de preços entre 16 de setembro e 14 de outubro.',
    },
    {
      question: 'Por que a conta de luz caiu no IPCA-15?',
      answer:
        'Segundo o IBGE, a energia elétrica residencial recuou 0,89% porque a bandeira tarifária passou de amarela para verde, sem cobrança adicional em outubro.',
    },
  ],
  sources: [
    {
      label: 'IBGE: IPCA-15, divulgação de outubro de 2026',
      url: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9260-indice-nacional-de-precos-ao-consumidor-amplo-15.html',
    },
    {
      label:
        'Agência Brasil: prévia da inflação oficial cai pela metade e fecha outubro em 0,32%',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/previa-da-inflacao-oficial-cai-pela-metade-e-fecha-outubro-em-032',
    },
    {
      label:
        'IBGE: Sistema Nacional de Índices de Preços ao Consumidor, IPCA-15 outubro de 2026',
      url: 'https://biblioteca.ibge.gov.br/visualizacao/periodicos/2376/ipca_15_2026_out.pdf',
    },
    {
      label: 'Banco Central do Brasil: meta para a inflação',
      url: 'https://www.bcb.gov.br/controleinflacao',
    },
  ],
} as const satisfies NewsDocument;
