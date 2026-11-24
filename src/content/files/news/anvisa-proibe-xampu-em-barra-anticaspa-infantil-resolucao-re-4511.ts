import type { NewsDocument } from '../../types';

export const newsAnvisaXampuBarraInfantil23Novembro = {
  kind: 'news',
  slug: 'anvisa-proibe-xampu-em-barra-anticaspa-infantil-resolucao-re-4511',
  title:
    'Anvisa proíbe xampu em barra anticaspa com rótulo infantil: todos os lotes ficam suspensos',
  description:
    'A Resolução RE 4.511, publicada em 23/11, proíbe fabricar, distribuir, divulgar e usar todos os lotes de um xampu em barra anticaspa indicado para crianças.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/anvisa-proibe-xampu-em-barra-anticaspa-infantil-resolucao-re-4511.jpg',
    alt: 'Ilustração com documento da Anvisa sobre um xampu em barra anticaspa, calendário de novembro com o dia 23 marcado e etiqueta de suspenso.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-24',
  updatedAt: '2026-11-24',
  tags: ['anvisa', 'cosmeticos', 'xampu', 'consumidor', 'saude', 'criancas'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'RE 4.511',
      label: 'Resolução da Anvisa',
      note: 'Assinada em 18/11 e publicada no DOU em 23/11.',
    },
    {
      value: 'Todos',
      label: 'Lotes atingidos',
      note: 'Os que trazem indicação de uso infantil.',
    },
  ],
  sections: [
    {
      heading: 'O que a Anvisa decidiu',
      image: {
        src: '/images/news/anvisa-proibe-xampu-em-barra-anticaspa-infantil-resolucao-re-4511-detalhe.jpg',
        alt: 'Detalhe da ilustração: produto xampu em barra, tipo anticaspa, Resolução RE 4.511 e todos os lotes.',
        caption: 'Resumo da Resolução RE 4.511, de 18/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Agência Nacional de Vigilância Sanitária (Anvisa) publicou no Diário Oficial da União de 23/11 a Resolução RE nº 4.511, de 18/11/2026. Ela proíbe a fabricação, a distribuição, a divulgação e a utilização de todos os lotes de um xampu em barra anticaspa da marca DC Biocosméticos, fabricado pela Argila Indústria e Comércio de Cosméticos, que traz indicação de uso para o público infantil.',
        'Segundo a Agência Brasil, o motivo é o rótulo: o produto aparece com indicação para crianças, o que a Anvisa informa não ser permitido para esse tipo de cosmético. A resolução vale para todos os lotes com essa indicação, e a página lida não lista números de lote nem datas de validade.',
      ],
    },
    {
      heading: 'O que isso significa para quem comprou',
      paragraphs: [
        'A reportagem não traz orientação específica ao consumidor, e a empresa ainda não havia respondido à Agência Brasil quando a matéria foi publicada. Por isso, a regra prática é simples: quem tem em casa um xampu em barra anticaspa dessa marca, com indicação infantil no rótulo, deve conferir o produto e evitar o uso em crianças enquanto a situação não for esclarecida. Em caso de dúvida, o canal oficial é a própria Anvisa ou o Procon da cidade.',
        'Como a proibição inclui a venda e a divulgação, lojas e anúncios online que ainda ofereçam o produto estão sujeitos à determinação. Quem comprou e quer devolver pode registrar a reclamação no Procon ou no consumidor.gov.br; o Código de Defesa do Consumidor trata produtos impróprios como vício do produto.',
      ],
    },
    {
      heading: 'Por que o rótulo infantil importa',
      paragraphs: [
        'Cosméticos para crianças passam por regras mais rígidas de segurança, e a indicação de uso infantil no rótulo precisa estar de acordo com a regulamentação da Anvisa. O produto em questão foi atingido justamente por essa indicação, e não por um problema de contaminação informado nas fontes lidas.',
        'É a segunda notícia recente do tipo na editoria: em novembro a agência também mandou recolher suplementos alimentares, caso tratado em outra matéria do PortalFina. Para acompanhar novas decisões, a lista de resoluções fica no portal da Anvisa.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual produto foi proibido?',
      answer:
        'Um xampu em barra anticaspa da marca DC Biocosméticos, fabricado pela Argila Indústria e Comércio de Cosméticos, nos lotes com indicação de uso para o público infantil.',
    },
    {
      question: 'Vale para só alguns lotes?',
      answer:
        'Não. A Agência Brasil informa que a resolução vale para todos os lotes com a indicação infantil. Números de lote não foram divulgados na matéria.',
    },
    {
      question: 'Por que a Anvisa proibiu?',
      answer:
        'Porque o produto está rotulado com indicação para o público infantil, o que a Anvisa informa não ser permitido. As fontes lidas não citam contaminação.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Anvisa manda recolher xampu anticaspa para crianças',
      url: 'https://agenciabrasil.ebc.com.br/saude/noticia/2026-11/anvisa-manda-recolher-xampu-anticaspa-para-criancas',
    },
    {
      label: 'Anvisa: página oficial da agência',
      url: 'https://www.gov.br/anvisa/pt-br',
    },
  ],
} as const satisfies NewsDocument;
