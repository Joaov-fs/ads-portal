import type { NewsDocument } from '../../types';

export const newsDinoSuspendeEmendasFlavioBolsonaro = {
  kind: 'news',
  slug: 'dino-suspende-14-emendas-de-flavio-bolsonaro-ao-orcamento-de-2027-r-79-3-milhoes',
  title:
    'Dino suspende 14 emendas individuais de Flávio Bolsonaro ao Orçamento de 2027, que somam R$ 79,3 milhões',
  description:
    'O ministro do STF Flávio Dino suspendeu em liminar a execução de 14 emendas do senador ao PLOA 2027, num total de R$ 79,3 milhões. Veja o que a decisão muda.',
  category: 'politica',
  coverImage: {
    src: '/images/news/dino-suspende-14-emendas-de-flavio-bolsonaro-ao-orcamento-de-2027-r-79-3-milhoes.jpg',
    alt: 'Documento com a decisão liminar sobre 14 emendas no total de R$ 79,3 milhões, etiqueta de decisão do STF, celular, cédula e moedas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-28',
  updatedAt: '2026-11-28',
  tags: ['stf', 'emendas', 'orcamento-2027', 'senado', 'liminar'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 79,3 mi',
      label: 'Total das emendas suspensas',
      note: 'São 14 emendas individuais ao PLOA de 2027.',
    },
    {
      value: '14',
      label: 'Emendas atingidas pela liminar',
      note: 'A decisão ainda pode ser levada ao Plenário do STF.',
    },
  ],
  sections: [
    {
      heading: 'O que o ministro Flávio Dino decidiu',
      paragraphs: [
        'O ministro do Supremo Tribunal Federal Flávio Dino suspendeu a execução de 14 emendas parlamentares individuais do senador Flávio Bolsonaro (PL-RJ) ao Projeto de Lei Orçamentária Anual (PLOA) de 2027. Juntas, as emendas somam R$ 79,3 milhões. A decisão é liminar, ou seja, provisória, e foi noticiada pela Agência Brasil em 27/11.',
        'A suspensão atende a um pedido do deputado Santana Braga (PT-SP). Dino pediu que o senador se manifeste e que o Senado informe se houve autorização de viagem ou se o parlamentar está em missão oficial no exterior. A decisão final depende dessas manifestações, e o caso ainda pode ser levado ao Plenário do STF.',
      ],
    },
    {
      heading: 'O contexto citado na reportagem',
      image: {
        src: '/images/news/dino-suspende-14-emendas-de-flavio-bolsonaro-ao-orcamento-de-2027-r-79-3-milhoes-detalhe.jpg',
        alt: 'Detalhe do documento com a decisão liminar, as 14 emendas e o total de R$ 79,3 milhões no orçamento de 2027.',
        caption:
          'Dados da liminar sobre as emendas ao PLOA 2027, conforme a Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Segundo a Agência Brasil, o senador deixou o país depois que o ministro Alexandre de Moraes determinou a retenção de seu passaporte, em inquérito que investiga lavagem de dinheiro. Moraes também determinou a entrega do passaporte do advogado Willer Tomaz. Os dois negam irregularidades.',
        'A reportagem informa que o senador mora nos Estados Unidos com a família e vota de forma remota nas sessões do Senado. Cita ainda um precedente: a Câmara cassou os mandatos de Eduardo Bolsonaro e Alexandre Ramagem, que foram para os EUA quando eram deputados federais.',
      ],
      table: {
        caption: 'A liminar em resumo',
        columns: ['Item', 'O que consta'],
        rows: [
          ['Relator', 'Ministro Flávio Dino, do STF'],
          ['Alvo', '14 emendas individuais ao PLOA 2027'],
          ['Valor total', 'R$ 79,3 milhões'],
          ['Tipo de decisão', 'Liminar, sujeita a análise posterior'],
          ['Pedido feito por', 'Deputado Santana Braga (PT-SP)'],
        ],
      },
    },
    {
      heading: 'O que isso muda no Orçamento e para o cidadão',
      paragraphs: [
        'Emendas individuais são recursos que cada parlamentar indica no Orçamento para obras, serviços e repasses a estados e municípios. Em média, as 14 emendas suspensas valem cerca de R$ 5,66 milhões cada (R$ 79,3 milhões divididos por 14). É uma conta ilustrativa: os valores de cada emenda podem variar.',
        'Como o PLOA 2027 ainda está em tramitação, a suspensão trata da execução futura desses recursos, e não de dinheiro já pago. Se a liminar for mantida, as indicações não poderão ser executadas enquanto não houver nova decisão. Se for revertida, seguem o rito normal do Orçamento. Até a data desta matéria, não havia decisão final.',
      ],
    },
  ],
  faq: [
    {
      question: 'A decisão de Dino é definitiva?',
      answer:
        'Não. É uma liminar, de caráter provisório. O senador e o Senado ainda devem se manifestar, e o caso pode ir ao Plenário do STF.',
    },
    {
      question: 'Quanto dinheiro está em jogo?',
      answer:
        'São 14 emendas individuais ao PLOA de 2027, que somam R$ 79,3 milhões.',
    },
    {
      question: 'As emendas já tinham sido pagas?',
      answer:
        'Não. Elas constam do projeto de Orçamento de 2027, que ainda tramita. A suspensão vale para a execução futura.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: STF, Dino suspende emendas parlamentares de Flávio Bolsonaro (27/11/2026)',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-11/stf-dino-suspende-emendas-parlamentares-de-flavio-bolsonaro',
    },
    {
      label: 'Supremo Tribunal Federal: notícias',
      url: 'https://portal.stf.jus.br/noticias/',
    },
  ],
} as const satisfies NewsDocument;
