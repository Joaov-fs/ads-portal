import type { NewsDocument } from '../../types';

export const newsGasolinaAte9Dezembro2026 = {
  kind: 'news',
  slug: 'gasolina-sem-tributos-ate-9-12-decreto-13-159-corte-de-r-0-89-por-litro',
  title:
    'Gasolina e etanol seguem sem tributos federais até 9/12: Decreto 13.159 mantém corte de R$ 0,89 por litro',
  description:
    'O Decreto 13.159 prorrogou até 9/12 o PIS/Cofins zerado na gasolina e no etanol e a Cide zerada na gasolina. A renúncia estimada é de R$ 2,76 bi.',
  category: 'economia',
  coverImage: {
    src: '/images/news/gasolina-sem-tributos-ate-9-12-decreto-13-159-corte-de-r-0-89-por-litro.jpg',
    alt: 'Documento com o corte de R$ 0,89 por litro na gasolina A, etiqueta de R$ 0,89 por litro, calendário de dezembro com o dia 9 marcado e carimbo PRORROGADO.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-13',
  updatedAt: '2026-11-13',
  tags: ['gasolina', 'combustiveis', 'pis-cofins', 'cide', 'etanol'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '9/12',
      label: 'Novo fim da medida',
      note: 'Prorrogação de 30 dias, a partir de 10/11.',
    },
    {
      value: 'R$ 0,89',
      label: 'Corte por litro de gasolina A',
      note: 'R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide.',
    },
    {
      value: 'R$ 2,76 bi',
      label: 'Renúncia estimada',
      note: 'Gasolina e etanol, de 10/11 a 9/12, segundo a Fazenda.',
    },
  ],
  sections: [
    {
      heading: 'O que o Decreto 13.159 prorrogou',
      paragraphs: [
        'O Decreto 13.159, de 9 de novembro de 2026, prorrogou por 30 dias, até 9 de dezembro, a desoneração de tributos federais sobre a gasolina e o etanol hidratado. Ele dá continuidade ao Decreto 13.134, cujo prazo terminava em 9 de novembro. A medida está em vigor desde 10/11.',
        'Na gasolina, o PIS/Pasep, a Cofins e a Cide continuam zerados. No etanol hidratado, seguem zerados o PIS/Pasep e a Cofins. Segundo a Fazenda, o corte na gasolina A é de R$ 0,89 por litro, sendo R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide, calculado sobre as alíquotas de fevereiro de 2026, antes do conflito no Oriente Médio. No etanol, o equivalente é de R$ 0,19 por litro.',
        'A prorrogação também alcança a subvenção ao etanol hidratado, de R$ 0,428 por litro, paga a produtores e cooperativas. A Fazenda estima R$ 813,41 milhões para esse apoio no período de 30 dias.',
      ],
    },
    {
      heading: 'Quanto custa a medida e como será paga',
      image: {
        src: '/images/news/gasolina-sem-tributos-ate-9-12-decreto-13-159-corte-de-r-0-89-por-litro-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com o corte de R$ 0,89 por litro, sendo R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide.',
        caption:
          'Os valores do corte por litro de gasolina A, segundo a Fazenda.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A renúncia de receita com a gasolina e o etanol, de 10 de novembro a 9 de dezembro, é estimada em R$ 2,76 bilhões. A Fazenda informa que o valor será compensado por receitas extraordinárias da União ligadas ao setor de petróleo, o que, segundo o ministério, mantém a neutralidade fiscal.',
        'O governo justifica a prorrogação pela necessidade de evitar pressão inflacionária por possíveis altas nos preços da gasolina e do etanol, num cenário de petróleo caro no mercado internacional.',
        'A mesma conta pode ser feita por tanque. O corte de R$ 0,89 incide sobre a gasolina A, sem o etanol da mistura, e por isso funciona como teto do efeito, não como o valor exato que o posto repassa. Em 50 litros, o teto é de R$ 44,50 (50 x R$ 0,89). Em 200 litros por mês, é de R$ 178,00 (200 x R$ 0,89). No etanol, um tanque de 40 litros embute até R$ 7,60 de tributos federais zerados (40 x R$ 0,19).',
      ],
      table: {
        caption: 'Teto do corte federal por volume abastecido',
        columns: ['Combustível e volume', 'Corte por litro', 'Teto no total'],
        rows: [
          ['Gasolina A, 50 litros', 'R$ 0,89', 'R$ 44,50'],
          ['Gasolina A, 200 litros', 'R$ 0,89', 'R$ 178,00'],
          ['Etanol, 40 litros', 'R$ 0,19', 'R$ 7,60'],
        ],
      },
    },
    {
      heading: 'O que muda para quem abastece',
      paragraphs: [
        'Para o motorista, a prorrogação evita que a cobrança federal volte de uma vez em 10 de novembro. O preço na bomba, porém, depende também do ICMS, que é estadual e não muda com o decreto, da margem do posto e do custo do combustível na distribuidora.',
        'Segundo a ANP, a média nacional da gasolina caiu de R$ 6,54, na semana de 4 a 10 de outubro, para R$ 6,49, na de 18 a 24 de outubro. A queda de R$ 0,05 por litro, ou R$ 2,50 em um tanque de 50 litros (50 x R$ 0,05), mostra que só parte do corte chega ao consumidor.',
        'A medida é temporária e vale até 9 de dezembro. Quem planeja o orçamento do fim do ano não deve tratá-la como permanente: o governo pode prorrogar de novo ou deixar o prazo vencer, e a decisão só vale quando sai no Diário Oficial da União.',
      ],
    },
    {
      heading: 'Como acompanhar',
      paragraphs: [
        'O preço médio semanal por estado está na síntese de preços da ANP, atualizada às sextas-feiras. Para comparar gasolina e etanol no seu posto, divida o preço do etanol pelo da gasolina: abaixo de 0,70, o etanol tende a compensar.',
        'A calculadora de porcentagem do portal ajuda a fazer essa razão e a medir quanto um desconto de centavos pesa no tanque.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando a gasolina fica sem PIS/Cofins e Cide?',
      answer:
        'Até 9 de dezembro de 2026, conforme o Decreto 13.159, de 9 de novembro. A medida prorrogou por 30 dias o prazo do Decreto 13.134.',
    },
    {
      question: 'O preço da gasolina cai R$ 0,89 por litro?',
      answer:
        'Não necessariamente. R$ 0,89 é o corte tributário por litro de gasolina A. O preço final depende da mistura com etanol, do ICMS, da margem do posto e do custo do combustível.',
    },
    {
      question: 'O etanol também continua com benefício?',
      answer:
        'Sim. O PIS/Pasep e a Cofins do etanol hidratado seguem zerados, o equivalente a R$ 0,19 por litro, e a subvenção de R$ 0,428 por litro também foi prorrogada por 30 dias.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Fazenda: Governo Federal prorroga até 9 de dezembro a desoneração da gasolina e do etanol',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/novembro/governo-federal-prorroga-ate-9-de-dezembro-a-desoneracao-da-gasolina-e-do-etanol',
    },
    {
      label:
        'Agência Gov: governo federal prorroga por mais 30 dias medidas de desoneração de tributos sobre gasolina e etanol',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/governo-federal-prorroga-por-mais-30-dias-medidas-de-desoneracao-de-tributos-sobre-gasolina-e-etanol',
    },
    {
      label:
        'ANP: Síntese Semanal do Comportamento dos Preços dos Combustíveis',
      url: 'https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/sintese-semanal-do-comportamento-dos-precos-dos-combustiveis',
    },
  ],
} as const satisfies NewsDocument;
