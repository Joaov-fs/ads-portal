import type { NewsDocument } from '../../types';

export const newsInssAfastamentoMedidaProtetiva6Meses = {
  kind: 'news',
  slug: 'inss-paga-afastamento-de-ate-6-meses-a-mulheres-com-medida-protetiva',
  title:
    'INSS passa a pagar afastamento de até 6 meses a mulheres com medida protetiva',
  description:
    'Parecer assinado em 1º de outubro define que o INSS paga o salário de trabalhadoras afastadas por violência doméstica. Veja quem paga, sem carência.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/inss-paga-afastamento-de-ate-6-meses-a-mulheres-com-medida-protetiva.jpg',
    alt: 'Documento de medida protetiva, quadro de quem paga o afastamento e celular com a duração de 6 meses.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-09',
  updatedAt: '2026-10-09',
  tags: [
    'inss',
    'beneficios',
    'violencia-domestica',
    'maria-da-penha',
    'salario',
    'previdencia',
  ],
  featuredCalculators: ['salario-liquido', 'auxilio-incapacidade'],
  highlights: [
    {
      value: '6 meses',
      label: 'Afastamento remunerado',
      note: 'Quando a Justiça determina o afastamento.',
    },
    {
      value: '15 dias',
      label: 'Pagos pelo empregador',
      note: 'O INSS paga o restante do período.',
    },
    {
      value: 'Sem carência',
      label: 'Nenhum tempo mínimo de contribuição',
    },
  ],
  sections: [
    {
      heading: 'O que o governo definiu em 1º de outubro',
      paragraphs: [
        'O governo federal assinou em 1º de outubro de 2026 um parecer vinculante que regulamenta o pagamento de salário a trabalhadoras afastadas do emprego por violência doméstica. O afastamento pode durar até seis meses e depende de decisão judicial que o determine.',
        'A base é a Lei Maria da Penha, que já permitia ao juiz afastar a mulher do trabalho por até seis meses, mantendo o contrato de trabalho. O que faltava definir era quem pagaria o salário nesse período. O Supremo Tribunal Federal decidiu a questão em junho deste ano, e o parecer organiza como o INSS passa a aplicar a decisão.',
        'Segundo o INSS, a medida protetiva judicial que determina o afastamento é suficiente para liberar o pagamento. O instituto só precisa confirmar que a mulher é segurada.',
      ],
    },
    {
      heading: 'Quem paga: empregador nos primeiros 15 dias, INSS no resto',
      image: {
        src: '/images/news/inss-paga-afastamento-de-ate-6-meses-a-mulheres-com-medida-protetiva-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com quem paga os primeiros 15 dias, o INSS nos dias seguintes e a duração máxima de 6 meses.',
        caption: 'O empregador paga os 15 primeiros dias e o INSS, o restante.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Para a trabalhadora com carteira assinada, a divisão segue o modelo de outros afastamentos: o empregador é responsável pelos 15 primeiros dias e o INSS paga o restante do período.',
        'Para quem não tem vínculo de emprego, como a contribuinte individual, a facultativa e a segurada especial, o INSS paga o benefício desde o início.',
      ],
      table: {
        caption: 'Quem paga o afastamento, conforme a situação',
        columns: ['Situação', 'Quem paga'],
        rows: [
          [
            'Empregada com carteira assinada',
            'Empregador nos 15 primeiros dias; INSS no restante',
          ],
          [
            'Contribuinte individual, facultativa e segurada especial',
            'INSS, todo o período',
          ],
          [
            'Mulher que não é segurada',
            'Caráter assistencial, custeado por Estado, Distrito Federal ou município indicado pelo juiz',
          ],
        ],
      },
    },
    {
      heading: 'Exemplo: o que o empregador paga em 15 dias',
      paragraphs: [
        'Considere uma trabalhadora com salário de R$ 3.000 por mês. Dividido por 30 dias, são R$ 100 por dia. Nos 15 primeiros dias de afastamento, o valor proporcional a cargo do empregador seria de R$ 1.500 (15 x R$ 100), antes dos descontos legais.',
        'A nota do INSS não detalha a fórmula de cálculo da parte paga pela Previdência, nem o valor do benefício. Por isso, o exemplo vale apenas para dimensionar os 15 dias do empregador. Para simular o salário líquido de um mês de trabalho, use a calculadora de salário líquido do portal.',
        'Quem quer entender os descontos que incidem sobre o salário pode ler o guia sobre como funciona o desconto do INSS.',
      ],
    },
    {
      heading: 'Sem carência e sem desconto de contribuição',
      paragraphs: [
        'O INSS informa que não há carência: a segurada não precisa de tempo mínimo de contribuição para ter acesso. Também não há desconto de contribuição previdenciária sobre o valor recebido.',
        'O período de afastamento conta como tempo de contribuição para a aposentadoria. Ou seja, a trabalhadora não perde o histórico no CNIS enquanto estiver protegida pela medida.',
        'Outro ponto: o INSS não vai exigir nova perícia médica nem reanálise do mérito da decisão judicial para as seguradas do Regime Geral. O atendimento terá prioridade e sigilo para mulheres com medida protetiva.',
      ],
    },
    {
      heading: 'E o agressor?',
      paragraphs: [
        'O INSS informou que buscará ressarcimento do agressor por meio de ação regressiva, ajuizada pela Procuradoria-Geral Federal, órgão da Advocacia-Geral da União. A mulher não precisa ingressar com essa cobrança.',
        'Para acompanhar pedidos e benefícios, o caminho é o Meu INSS. O guia do portal explica como usar o aplicativo e consultar o CNIS.',
        'Em caso de violência ou risco, a Central de Atendimento à Mulher funciona pelo 180 e, em emergência, a Polícia Militar atende pelo 190.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto tempo dura o afastamento?',
      answer:
        'Até seis meses, quando a Justiça determina o afastamento do trabalho. O contrato de trabalho é mantido.',
    },
    {
      question: 'Preciso ter contribuído por um tempo mínimo?',
      answer:
        'Não. O INSS informa que não há carência. É preciso ser segurada, e a medida protetiva judicial que determina o afastamento é suficiente para viabilizar o pagamento.',
    },
    {
      question: 'Quem não é segurada do INSS também tem direito?',
      answer:
        'Conforme a decisão do STF citada pelo INSS, o pagamento tem caráter assistencial e é custeado por Estado, Distrito Federal ou município indicado pelo juiz, com recursos da assistência social.',
    },
  ],
  sources: [
    {
      label:
        'INSS: INSS pagará salário de trabalhadoras afastadas do emprego por violência doméstica (1º/10/2026, atualizada em 6/10/2026)',
    },
    { label: 'Lei 11.340/2006 (Lei Maria da Penha)' },
    {
      label:
        'Supremo Tribunal Federal: decisão de junho de 2026 sobre o pagamento do afastamento',
    },
  ],
} as const satisfies NewsDocument;
