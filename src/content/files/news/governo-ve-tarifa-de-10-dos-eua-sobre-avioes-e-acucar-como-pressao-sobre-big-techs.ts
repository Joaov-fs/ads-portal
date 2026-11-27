import type { NewsDocument } from '../../types';

export const newsTarifaEuaAvioesAcucar = {
  kind: 'news',
  slug: 'governo-ve-tarifa-de-10-dos-eua-sobre-avioes-e-acucar-como-pressao-sobre-big-techs',
  title:
    'Governo vê tarifa de 10% proposta pelos EUA sobre aviões e açúcar como pressão sobre big techs',
  description:
    'Governo diz que a nova tarifa proposta pelos EUA mira aviões e açúcar do Brasil e tenta frear regras para big techs; o PL 4.675/2025 pode ir à votação.',
  category: 'politica',
  coverImage: {
    src: '/images/news/governo-ve-tarifa-de-10-dos-eua-sobre-avioes-e-acucar-como-pressao-sobre-big-techs.jpg',
    alt: 'Documento sobre a tarifa de 10%, calendário de novembro com o dia 27 marcado, caixa de carga e etiqueta de tarifa.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: ['tarifa', 'eua', 'exportacoes', 'big-techs', 'porcentagem'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '10%',
      label: 'Tarifa proposta pelo USTR',
      note: 'Sobre aviões prontos e açúcar do Brasil.',
    },
    {
      value: 'R$ 50,6 bi',
      label: 'Economia anual estimada pela Fazenda',
      note: 'Com o PL 4.675/2025, segundo o governo.',
    },
    {
      value: '+13,3%',
      label: 'Exportações de janeiro a novembro',
      note: 'Dados do MDIC em 2026.',
    },
  ],
  sections: [
    {
      heading: 'O que o governo disse em 27/11',
      paragraphs: [
        'O governo brasileiro avalia que a proposta dos Estados Unidos de aplicar tarifa de 10% sobre a importação de aviões prontos e de açúcar do Brasil tem, entre outros objetivos, o de desencorajar o país a regular as big techs. A avaliação foi divulgada em 27/11. A medida é uma proposta do USTR, órgão de comércio dos EUA, e ainda não foi confirmada.',
        'O governo chama a ação de decisão unilateral. O vice-presidente Geraldo Alckmin considerou a tarifa sobre aviões descabida e disse que o governo vai trabalhar para revertê-la. Em nota, a Secom afirmou que o Brasil não cederá a esse tipo de ameaça. Não há tarifa nova em vigor por causa dessa proposta.',
      ],
    },
    {
      heading: 'Por que big techs entram na conversa',
      image: {
        src: '/images/news/governo-ve-tarifa-de-10-dos-eua-sobre-avioes-e-acucar-como-pressao-sobre-big-techs-detalhe.jpg',
        alt: 'Detalhe do documento com a tarifa de 10%, os produtos citados e o PL 4.675/2025.',
        caption: 'Principais números do tema, segundo o governo brasileiro.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Câmara deve votar ainda neste ano o PL 4.675/2025, conhecido como PL dos Mercados Digitais. A Fazenda estima que o projeto pode reduzir em até R$ 50,6 bilhões por ano os custos das empresas brasileiras. O texto, se aprovado, mudaria regras de concorrência sobre preços e taxas cobradas por grandes plataformas como Google, Meta, Amazon e Microsoft.',
        'Segundo o governo, a pressão americana também envolve o Pix, o comércio digital e acordos preferenciais do Brasil com outros países, além de um possível acordo sobre minerais críticos, as terras raras. O Brasil tem cerca de 11 milhões de toneladas, 14% do total mundial, o segundo maior volume; a China tem cerca de 44 milhões de toneladas, 58%, e os EUA, cerca de 2,5%.',
      ],
      table: {
        caption: 'Números citados pelo governo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Tarifa proposta pelo USTR', '10%'],
          ['Produtos citados', 'Aviões prontos e açúcar'],
          ['Economia anual estimada do PL 4.675/2025', 'Até R$ 50,6 bi'],
          ['Alta das exportações, jan. a nov. de 2026', '13,3%'],
          ['Alta da corrente de comércio em 2026', '10,9%'],
        ],
      },
    },
    {
      heading: 'O que significaria uma tarifa de 10%',
      paragraphs: [
        'Tarifa de importação é um imposto cobrado na entrada do produto no país de destino. Na conta simples, uma carga de açúcar de US$ 100 mil pagaria US$ 10 mil a mais para entrar nos EUA, e o importador americano costuma repassar parte desse custo ao preço, o que pode reduzir a procura pelo produto brasileiro.',
        'Por isso o efeito para o cidadão é indireto e só existiria se a tarifa fosse confirmada: pode afetar empresas exportadoras, empregos nessas cadeias e a entrada de dólares no país. Hoje, o que existe é uma proposta e uma negociação em andamento. As exportações brasileiras cresceram 13,3% de janeiro a novembro de 2026, e a corrente de comércio, 10,9%, segundo o MDIC.',
      ],
    },
    {
      heading: 'O que acompanhar nos próximos dias',
      paragraphs: [
        'Os pontos a observar são a decisão final do USTR sobre a proposta, a resposta do governo brasileiro e a votação do PL 4.675/2025 na Câmara, prevista para este ano. Qualquer mudança em vigor depende de ato formal, e o portal atualiza o assunto quando houver fato novo confirmado.',
      ],
    },
  ],
  faq: [
    {
      question: 'A tarifa de 10% já está valendo?',
      answer:
        'Não. É uma proposta do USTR, ainda não confirmada, segundo o governo brasileiro.',
    },
    {
      question: 'O que é o PL 4.675/2025?',
      answer:
        'É o PL dos Mercados Digitais, que trata de regras de concorrência para grandes plataformas e deve ser votado na Câmara ainda neste ano.',
    },
    {
      question: 'Isso muda o preço do açúcar no mercado brasileiro?',
      answer:
        'A matéria do governo não trata de preço interno. A tarifa, se confirmada, incidiria na importação feita pelos EUA.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Governo avalia que novo tarifaço dos EUA busca proteger big techs',
      url: 'https://agenciabrasil.ebc.com.br/internacional/noticia/2026-11/governo-avalia-que-novo-tarifaco-dos-eua-busca-proteger-big-techs',
    },
    {
      label: 'USTR: Section 301 Action on Brazil',
      url: 'https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ustr-section-301-action-brazils-unreasonable-acts-policies-and-practices',
    },
  ],
} as const satisfies NewsDocument;
