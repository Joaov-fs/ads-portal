import type { NewsDocument } from '../../types';

export const newsFazendaCbsEfetiva85Cae = {
  kind: 'news',
  slug: 'fazenda-cbs-efetiva-8-5-cae-senado-ate-15-de-dezembro',
  title:
    'Fazenda diz que a CBS terá alíquota efetiva de 8,5%; Senado decide até 15/12',
  description:
    'O ministro da Fazenda disse na CAE que a CBS terá alíquota efetiva de 8,5%. O Senado deve fixar a de referência até 15/12, ou valem os 11,3% do TCU.',
  category: 'economia',
  coverImage: {
    src: '/images/news/fazenda-cbs-efetiva-8-5-cae-senado-ate-15-de-dezembro.jpg',
    alt: 'Documento com a alíquota efetiva de 8,5% e a referência de 11,3% da CBS, calendário de dezembro com o dia 15 marcado e calculadora.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-17',
  updatedAt: '2026-11-17',
  tags: [
    'reforma-tributaria',
    'cbs',
    'senado',
    'cae',
    'pis',
    'cofins',
    'impostos',
  ],
  featuredCalculators: ['porcentagem', 'simples-nacional'],
  highlights: [
    {
      value: '8,5%',
      label: 'CBS efetiva, segundo a Fazenda',
      note: 'Peso médio para o consumidor, dito pelo ministro na CAE do Senado.',
    },
    {
      value: '11,3%',
      label: 'Referência calculada pelo TCU',
      note: 'Vale de forma provisória se o Senado não decidir até 15/12.',
    },
    {
      value: '15/12',
      label: 'Prazo do Senado',
      note: 'Data para definir a alíquota de referência por resolução.',
    },
  ],
  sections: [
    {
      heading: 'O que o ministro disse na Comissão de Assuntos Econômicos',
      paragraphs: [
        'Em audiência pública na Comissão de Assuntos Econômicos (CAE) do Senado em 17/11/2026, o ministro da Fazenda, Dario Durigan, defendeu a implementação da reforma tributária do consumo e afirmou que a CBS terá alíquota efetiva de 8,5%, o que, na avaliação dele, beneficia o consumidor médio. Segundo a Agência Senado, ele também disse que o peso médio para o consumidor fica abaixo de 8,5% e que a alíquota será revista todo ano.',
        'A audiência também contou com o presidente do TCU, Vital do Rêgo Filho, e com o secretário especial da Receita Federal, Robinson Sakiyama Barreirinhas. O tema central foi a diferença entre o número que circulou nas últimas semanas, de 11,3%, e os 8,5% citados pelo ministro.',
        'A CBS (Contribuição sobre Bens e Serviços) é o tributo federal criado pela Lei Complementar 214/2025 para substituir o PIS/Pasep e a Cofins. Pelo que consta na matéria da Agência Senado, a substituição começa em janeiro de 2027.',
      ],
    },
    {
      heading: 'Por que aparecem dois números: 8,5% e 11,3%',
      image: {
        src: '/images/news/fazenda-cbs-efetiva-8-5-cae-senado-ate-15-de-dezembro-detalhe.jpg',
        alt: 'Detalhe da ilustração: alíquota efetiva de 8,5%, referência do TCU de 11,3%, prazo do Senado em 15/12 e cashback de R$ 10 bilhões.',
        caption: 'Os números citados na audiência da CAE em 17/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O percentual de 11,3% é a alíquota de referência calculada pelo TCU e aprovada em 28/10. Ela serve de base para o conjunto da reforma e supõe que há setores com redução de alíquota. Como alguns setores pagam menos, a alíquota-base sobe para os demais, de modo a manter a arrecadação neutra, explicou o ministro, segundo a Agência Senado.',
        'Já os 8,5% são a alíquota efetiva: o peso médio que o consumidor sentiria depois de considerados os benefícios, as reduções e as devoluções. Em outras palavras, 11,3% é o número para a conta do sistema, e 8,5% é a estimativa do governo para o que chega, na média, ao preço final.',
        'A Agência Senado também registra reduções de alíquota já previstas: 40% para restaurantes e hotéis, 60% para cultura e arte e 70% para locação de imóveis. Para a construção civil, a página cita 50%, e para educação e saúde, 60%. O comitê gestor do IBS apresentou uma estimativa inicial de 9,21% para o seu tributo, valor citado pelo relator Eduardo Braga na audiência.',
      ],
      table: {
        caption: 'Números da CBS citados na audiência da CAE',
        columns: ['Item', 'Valor'],
        rows: [
          ['Alíquota efetiva (ministro da Fazenda)', '8,5%'],
          ['Alíquota de referência (TCU)', '11,3%'],
          ['Prazo para o Senado decidir', '15/12/2026'],
          ['Redução para restaurantes e hotéis', '40%'],
          ['Redução para locação de imóveis', '70%'],
          ['Cashback previsto para 2027', 'cerca de R$ 10 bi'],
        ],
      },
    },
    {
      heading: 'O que isso significa em reais',
      paragraphs: [
        'Uma conta ilustrativa mostra a diferença entre os dois números. Sobre uma compra de R$ 1.000,00 sem nenhum benefício, a alíquota de 11,3% equivale a R$ 113,00 de CBS. Com a alíquota efetiva de 8,5%, seriam R$ 85,00, ou R$ 28,00 a menos. Sobre R$ 2.500,00, a CBS iria de R$ 282,50 para R$ 212,50.',
        'É uma conta para dar ordem de grandeza. O valor real depende do enquadramento de cada produto, que pode ter alíquota cheia, reduzida ou zero, e a CBS não aparece como uma conta nova: ela entra no preço no lugar do PIS e da Cofins que já estão embutidos hoje.',
        'Para famílias de baixa renda, a Agência Senado registra o cashback previsto para 2027: cerca de R$ 10 bilhões, para inscritos no CadÚnico com renda de até meio salário mínimo por pessoa, com pagamento até 25 dias após a apuração. Tem direito quem cumpre os requisitos definidos em lei, e as regras finais dependem da regulamentação.',
      ],
    },
    {
      heading: 'O que falta: a decisão do Senado e o ajuste fiscal',
      paragraphs: [
        'O Senado tem até 15/12/2026 para definir a alíquota de referência por resolução. Se não houver decisão até lá, passa a valer de forma provisória o percentual de 11,3% calculado pelo TCU. A CAE aprovou ainda um requerimento para receber temporariamente dois servidores envolvidos na proposta do tribunal, e o relator Eduardo Braga pediu acesso aos critérios técnicos, hoje sob sigilo.',
        'Houve debate sobre adiar a reforma. Os senadores Esperidião Amin, Leany Lemos, Renan Filho, Rogério Carvalho e Tereza Cristina se manifestaram contra o adiamento, e Izalci Lucas citou o economista Bernardo Appy a favor. A matéria não informa decisão sobre esse ponto.',
        'No mesmo debate, o ministro tratou do ajuste fiscal e disse que o caminho é um ajuste gradual, que respeite o gasto social. Ele citou meta de superávit primário de 0,5% do PIB em 2027 (R$ 73,2 bilhões), 1% em 2028 e 1,5% em 2029. Durigan se comprometeu a apresentar metas progressivas nas próximas leis de diretrizes orçamentárias.',
      ],
    },
  ],
  faq: [
    {
      question: 'A CBS será de 8,5% ou de 11,3%?',
      answer:
        'Os dois números existem. O TCU calculou 11,3% como alíquota de referência, e o ministro da Fazenda disse que a alíquota efetiva para o consumidor será de 8,5%. A definição da referência cabe ao Senado, por resolução.',
    },
    {
      question: 'O que acontece se o Senado não decidir até 15/12?',
      answer:
        'Segundo a Agência Senado, passa a valer provisoriamente a alíquota de 11,3% calculada pelo TCU.',
    },
    {
      question: 'A CBS vai somar à Cofins e ao PIS?',
      answer:
        'Não. A CBS substitui o PIS/Pasep e a Cofins, conforme a Lei Complementar 214/2025, com início previsto para janeiro de 2027.',
    },
  ],
  sources: [
    {
      label:
        'Agência Senado: No Senado, ministro da Fazenda defende novo tributo sobre o consumo',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/11/17/no-senado-ministro-da-fazenda-defende-novo-tributo-sobre-o-consumo',
    },
    {
      label: 'Lei Complementar 214/2025 (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm',
    },
    {
      label: 'Ministério da Fazenda',
      url: 'https://www.gov.br/fazenda/pt-br',
    },
  ],
} as const satisfies NewsDocument;
