import type { NewsDocument } from '../../types';

export const newsTarifaZeroPec18 = {
  kind: 'news',
  slug: 'tarifa-zero-pec-18-fins-de-semana-e-feriados-r-12-bilhoes-em-2027',
  title:
    'PEC da tarifa zero: ônibus grátis aos sábados, domingos e feriados custaria R$ 12 bi em 2027',
  description:
    'O governo enviou ao Congresso a PEC 18/26, que usa 26,8% das emendas impositivas para bancar a tarifa zero em fins de semana e feriados. Veja o que muda e o que falta.',
  category: 'economia',
  coverImage: {
    src: '/images/news/tarifa-zero-pec-18-fins-de-semana-e-feriados-r-12-bilhoes-em-2027.jpg',
    alt: 'Documento com os números da PEC da tarifa zero, ônibus com a tarifa R$ 0,00, etiqueta de R$ 12 bi e celular com a passagem zerada.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-26',
  updatedAt: '2026-10-26',
  tags: ['transporte', 'tarifa-zero', 'pec', 'congresso', 'vale-transporte'],
  featuredCalculators: ['vale-transporte'],
  highlights: [
    {
      value: 'R$ 12 bi',
      label: 'Custo previsto para 2027',
      note: 'Sairia de emendas que já estão no Orçamento.',
    },
    {
      value: '26,8%',
      label: 'Parcela das emendas impositivas',
      note: 'Individuais e de bancada, no mínimo.',
    },
    {
      value: '21/10',
      label: 'Envio da PEC ao Congresso',
      note: 'Numerada como PEC 18/26.',
    },
    {
      value: '308 e 49',
      label: 'Votos necessários',
      note: 'Deputados e senadores, em dois turnos.',
    },
  ],
  sections: [
    {
      heading: 'O que o governo propôs ao Congresso em 21 de outubro',
      image: {
        src: '/images/news/tarifa-zero-pec-18-fins-de-semana-e-feriados-r-12-bilhoes-em-2027-detalhe.jpg',
        alt: 'Close do documento com os dados da PEC: sábados, domingos e feriados, custo de R$ 12 bi, fonte de 26,8% das emendas e início em 2027.',
        caption:
          'A proposta prevê tarifa zero aos sábados, domingos e feriados, a partir de 2027, se for aprovada.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Em 21 de outubro de 2026, o governo federal enviou ao Congresso uma Proposta de Emenda à Constituição, a PEC 18/26, que cria um caminho para o transporte coletivo urbano gratuito aos sábados, domingos e feriados. Pela descrição da Rádio Senado, a medida valeria nas cidades que têm sistema de transporte coletivo urbano e começaria em 2027, caso seja aprovada.',
        'O ponto central do texto é de onde sairia o dinheiro. A PEC determina que, no mínimo, 26,8% do valor global anual das emendas parlamentares de execução obrigatória, as individuais e as de bancada, seja destinado a esse fim. Não é uma verba nova: o governo afirma, na justificativa, que a medida não aumenta a despesa primária nem afeta a meta de resultado primário.',
        'A mesma proposta mantém os recursos das ações e serviços públicos de saúde, que hoje também contam com parte dessas emendas. O dinheiro deveria ser repassado aos entes federados responsáveis pelos serviços, ou seja, estados, Distrito Federal e municípios.',
      ],
    },
    {
      heading: 'A conta: de onde vêm os R$ 12 bilhões',
      paragraphs: [
        'O projeto de lei orçamentária de 2027 prevê R$ 44,8 bilhões em emendas parlamentares de execução obrigatória, segundo a Agência Brasil. Aplicando a parcela de 26,8% sobre esse valor, o resultado é de cerca de R$ 12 bilhões. É esse o custo estimado da tarifa zero em fins de semana e feriados.',
        'Com a regra, restariam cerca de R$ 32,8 bilhões para as demais emendas impositivas, o que inclui a parte da saúde. A diferença é a que mais deve pesar na discussão no Congresso, porque as emendas são o instrumento pelo qual deputados e senadores indicam obras e repasses para suas bases.',
      ],
      table: {
        caption: 'Os números da proposta',
        columns: ['Item', 'Valor'],
        rows: [
          [
            'Emendas impositivas no projeto do Orçamento de 2027',
            'R$ 44,8 bilhões',
          ],
          ['Parcela que iria para a tarifa zero', 'no mínimo 26,8%'],
          ['Custo estimado da tarifa zero', 'cerca de R$ 12 bilhões'],
          ['Sobraria para as demais emendas', 'cerca de R$ 32,8 bilhões'],
        ],
      },
    },
    {
      heading:
        'O que muda para quem usa ônibus, e o que ainda não está definido',
      paragraphs: [
        'Nada muda agora. Uma PEC só vale depois de aprovada nas duas Casas do Congresso, em dois turnos em cada uma. São necessários os votos de pelo menos 308 deputados e 49 senadores, três quintos de cada Casa. Até lá, a tarifa continua sendo cobrada normalmente nas cidades.',
        'Para ter uma ideia do efeito no bolso, imagine uma passagem de R$ 5,00 (valor apenas ilustrativo, pois cada cidade define o seu). Quem faz duas viagens no sábado e duas no domingo gasta R$ 20,00 por fim de semana, ou R$ 80,00 em um mês com quatro fins de semana. Com a tarifa zero, esse gasto cairia a zero nesses dias, mas só se a proposta for aprovada e regulamentada.',
        'Segundo a Rádio Senado, ainda precisam ser definidos por lei as regras de repasse do dinheiro a estados, ao Distrito Federal e aos municípios e a forma de pagamento às empresas de ônibus. Também não há data para a votação. Ao anunciar a proposta, o presidente Lula disse que, se a experiência der certo, o governo buscará uma forma de estendê-la.',
        'As informações divulgadas até agora não tratam de mudança no vale-transporte do trabalhador com carteira assinada, que segue com as regras atuais, inclusive o desconto de até 6% do salário básico.',
      ],
    },
    {
      heading: 'Como acompanhar a tramitação',
      paragraphs: [
        'A tramitação pode ser consultada nos portais da Câmara dos Deputados e do Senado Federal, buscando pelo número da proposta, PEC 18/26. Os sites mostram em qual comissão o texto está, os relatores e as datas das votações.',
        'Enquanto a discussão não termina, vale conferir o gasto real com transporte no mês. A calculadora de vale-transporte do PortalFina mostra quanto o empregador cobre e quanto é descontado do salário.',
      ],
    },
  ],
  faq: [
    {
      question: 'A tarifa zero já vale nos fins de semana?',
      answer:
        'Não. A PEC 18/26 foi enviada ao Congresso em 21/10 e ainda precisa ser aprovada em dois turnos na Câmara e no Senado. Até lá, as tarifas seguem como são hoje.',
    },
    {
      question: 'De onde sairia o dinheiro da tarifa zero?',
      answer:
        'De no mínimo 26,8% das emendas parlamentares impositivas, individuais e de bancada. No projeto do Orçamento de 2027 isso equivale a cerca de R$ 12 bilhões de R$ 44,8 bilhões.',
    },
    {
      question: 'Quando a medida começaria, se for aprovada?',
      answer:
        'Em 2027, segundo a descrição da proposta. As regras de repasse às cidades e de pagamento às empresas de ônibus ainda serão definidas em lei.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: governo envia ao Congresso proposta de tarifa zero no transporte',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/governo-envia-ao-congresso-proposta-de-tarifa-zero-no-transporte',
    },
    {
      label:
        'Rádio Senado: Congresso recebe proposta do passe livre em fins de semana e feriados',
      url: 'https://www12.senado.leg.br/radio/1/noticia/2026/10/22/congresso-recebe-proposta-do-passe-livre-em-fins-de-semana-e-feriados',
    },
    {
      label:
        'Agência Gov: sancionada lei para MEIs e PEC da tarifa zero enviada ao Congresso',
      url: 'https://agenciagov.ebc.com.br/noticias/202610/sancionada-lei-que-amplia-novas-medidas-para-meis-e-envia-ao-congresso-pec-sobre-tarifa-zero-ao-transporte-coletivo',
    },
  ],
} as const satisfies NewsDocument;
