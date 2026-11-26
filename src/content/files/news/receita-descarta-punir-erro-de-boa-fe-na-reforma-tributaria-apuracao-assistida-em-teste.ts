import type { NewsDocument } from '../../types';

export const newsReceitaBoaFeReformaTributaria = {
  kind: 'news',
  slug: 'receita-descarta-punir-erro-de-boa-fe-na-reforma-tributaria-apuracao-assistida-em-teste',
  title:
    'Receita diz que não vai punir erro de boa-fé na reforma tributária e testa apuração assistida',
  description:
    'Em 17/11, o secretário da Receita disse à CAE do Senado que erros de boa-fé na adaptação à CBS e ao IBS serão corrigidos, e não punidos.',
  category: 'economia',
  coverImage: {
    src: '/images/news/receita-boa-fe-reforma-tributaria-17-11.jpg',
    alt: 'Ilustração com uma nota fiscal em números, uma folha de apuração assistida, um carimbo de boa-fé e uma caneta sobre fundo azul.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-17',
  updatedAt: '2026-11-17',
  tags: [
    'reforma-tributaria',
    'cbs',
    'ibs',
    'receita-federal',
    'apuracao-assistida',
    'nota-fiscal',
  ],
  featuredCalculators: ['porcentagem', 'simples-nacional'],
  highlights: [
    {
      value: '35 bi',
      label: 'Documentos fiscais testados',
      note: 'Cerca de 5 bilhões só nos últimos 30 dias de testes.',
    },
    {
      value: '+70%',
      label: 'Notas com destaque de CBS/IBS',
      note: 'Parcela dos documentos emitidos no ambiente de testes.',
    },
    {
      value: '1,1 milhão',
      label: 'Pequenas empresas mapeadas',
      note: 'Possível dificuldade com o novo documento fiscal.',
    },
  ],
  sections: [
    {
      heading: 'O que a Receita disse ao Senado em 17/11',
      image: {
        src: '/images/news/receita-boa-fe-reforma-tributaria-17-11-detalhe.jpg',
        alt: 'Detalhe da ilustração: nota fiscal com 35 bilhões de documentos testados, mais de 70% com CBS e IBS, 500 empresas no piloto e 1,1 milhão de pequenas mapeadas.',
        caption: 'Os números do teste da reforma tributária citados em 17/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O secretário da Receita Federal, Robinson Barreirinhas, participou em 17 de novembro de 2026 de uma audiência pública na Comissão de Assuntos Econômicos (CAE) do Senado sobre a implantação da reforma tributária. Ele afirmou que os riscos da transição já foram mapeados e que o governo vai orientar os contribuintes durante a adaptação.',
        'O ponto de maior interesse para quem emite nota fiscal é a posição da Receita sobre penalidades. Segundo o secretário, o contribuinte de boa-fé não deve ser punido por falhas no período de adaptação, desde que não esconda informações nem tente fraudar o sistema. Quando houver ajuste por mudança de entendimento da administração tributária, a orientação é privilegiar a correção dos procedimentos em vez de aplicar multa.',
        'Isso vale para a transição à Contribuição sobre Bens e Serviços (CBS), tributo federal que substitui o PIS/Pasep e a Cofins a partir de 2027, e ao Imposto sobre Bens e Serviços (IBS), cobrado por estados e municípios. Os dois formam o chamado IVA dual.',
      ],
    },
    {
      heading: 'Como será a apuração assistida',
      paragraphs: [
        'A Receita apresentou a chamada apuração assistida, um mecanismo parecido com a declaração pré-preenchida do Imposto de Renda. O fisco organiza antes as informações dos documentos fiscais, e o contribuinte confere e corrige o que for preciso, em vez de montar tudo do zero.',
        'Barreirinhas disse que o modelo deve acabar com muita declaração. O sistema é testado por 500 empresas e, segundo o secretário, será disponibilizado a todas nos próximos dias. Um módulo simplificado para correção de informações está em desenvolvimento, com piloto previsto para dezembro.',
      ],
      table: {
        caption: 'Teste da reforma tributária em números',
        columns: ['Item', 'Informação'],
        rows: [
          ['Documentos fiscais processados nos testes', 'mais de 35 bilhões'],
          ['Documentos nos últimos 30 dias', 'cerca de 5 bilhões'],
          ['Notas com destaque de CBS e IBS', 'mais de 70%'],
          ['Empresas no teste da apuração assistida', '500'],
          ['Pequenas empresas com possível dificuldade', '1,1 milhão'],
          ['Piloto do módulo simplificado de correção', 'dezembro'],
        ],
      },
    },
    {
      heading: 'Quem tem mais tempo: pequenas empresas',
      paragraphs: [
        'A Receita mapeou 1,1 milhão de pequenos e microempresários com possível dificuldade para se adaptar. Para parte deles, a exigência do novo modelo de documento fiscal foi adiada para março do próximo ano, ou seja, março de 2027.',
        'Quem é do Simples Nacional ou MEI deve conferir com o contador se a empresa está na lista de adiamento e se o sistema de emissão de notas já mostra o destaque dos novos tributos. A calculadora de Simples Nacional do portal ajuda a simular o imposto atual enquanto as regras novas não chegam.',
      ],
    },
    {
      heading: 'O que a alíquota de 11,3% significa na prática',
      paragraphs: [
        'O Tribunal de Contas da União aprovou em outubro o cálculo de 11,3468% para a alíquota de referência da CBS, arredondada para 11,3%. A alíquota de referência não é o valor que será cobrado de todo produto: as reduções, isenções, alíquotas zero, regimes específicos e o aproveitamento de créditos mudam a cobrança efetiva.',
        'Como conta de referência, 11,3% sobre um produto de R$ 1.000,00 sem nenhum benefício daria R$ 113,00 de CBS. Se a empresa tiver R$ 40,00 de CBS em créditos das etapas anteriores, o valor a recolher seria R$ 73,00. É um exemplo simples para entender a mecânica, não uma previsão de preço.',
        'Cabe ao Senado fixar a alíquota da CBS por resolução, e a CAE discute os critérios. Deputados admitiram rever benefícios se a soma de CBS e IBS passar de 26,5%, valor de referência usado na tramitação.',
      ],
    },
  ],
  faq: [
    {
      question:
        'A Receita vai multar empresa que errar na transição da CBS e do IBS?',
      answer:
        'Em 17/11, o secretário da Receita disse que contribuinte de boa-fé não deve ser punido por falhas no período de adaptação, desde que não oculte informações nem tente fraudar o sistema. A orientação é corrigir os procedimentos.',
    },
    {
      question: 'O que é a apuração assistida?',
      answer:
        'É um mecanismo parecido com a declaração pré-preenchida do Imposto de Renda: a Receita organiza as informações dos documentos fiscais e o contribuinte confere e corrige. Está em teste com 500 empresas.',
    },
    {
      question: 'A alíquota de 11,3% da CBS vai subir 11,3% nos preços?',
      answer:
        'Não necessariamente. É a alíquota de referência. A cobrança efetiva varia com reduções, isenções, alíquota zero, regimes específicos e créditos das etapas anteriores.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Reforma tributária, Receita descarta punição a erros de boa-fé',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/reforma-tributaria-receita-descarta-punicao-erros-de-boa-fe',
    },
    {
      label:
        'Ministério da Fazenda: Receita Federal e órgãos parceiros detalham próximos passos da Reforma Tributária',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/novembro/receita-federal-e-orgaos-parceiros-detalham-proximos-passos-da-reforma-tributaria',
    },
    {
      label:
        'Agência Brasil: TCU aprova cálculo da alíquota de referência da CBS em 11,3%',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/tcu-aprova-calculo-da-aliquota-de-referencia-da-cbs-em-113',
    },
  ],
} as const satisfies NewsDocument;
