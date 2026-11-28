import type { NewsDocument } from '../../types';

export const newsIbgeExpectativaDeVida2025 = {
  kind: 'news',
  slug: 'ibge-expectativa-de-vida-2025-mulheres-80-1-anos-e-homens-73-5',
  title:
    'Expectativa de vida no Brasil sobe para 76,9 anos em 2025: mulheres chegam a 80,1 e homens a 73,5, diz o IBGE',
  description:
    'O IBGE estima que quem nasceu no Brasil em 2025 viverá 76,9 anos em média, alta de pouco mais de 3 meses. Mulheres passam dos 80 anos pela primeira vez.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/ibge-expectativa-de-vida-2025-mulheres-80-1-anos-e-homens-73-5.jpg',
    alt: 'Documento com a expectativa de vida de mulheres, homens e do total, calendário de 2025 e celular com o tema saúde.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-28',
  updatedAt: '2026-11-28',
  tags: ['ibge', 'expectativa-de-vida', 'populacao', 'saude', 'brasil'],
  featuredCalculators: ['porcentagem', 'contador-de-dias'],
  highlights: [
    {
      value: '76,9 anos',
      label: 'Expectativa de vida ao nascer em 2025',
      note: 'Era 76,6 anos na estimativa anterior, segundo o IBGE.',
    },
    {
      value: '80,1 anos',
      label: 'Mulheres, pela primeira vez acima de 80',
      note: 'A estimativa anterior era de 79,9 anos.',
    },
    {
      value: '73,5 anos',
      label: 'Homens',
      note: 'Contra 73,3 anos na estimativa anterior.',
    },
  ],
  sections: [
    {
      heading: 'O que o IBGE divulgou sobre a expectativa de vida em 2025',
      paragraphs: [
        'A expectativa de vida ao nascer da população brasileira chegou a 76,9 anos em 2025, segundo o IBGE. A estimativa anterior era de 76,6 anos, o que representa um ganho de pouco mais de três meses. Os dados foram divulgados em 27/11 e noticiados pela Agência Brasil.',
        'Para as mulheres, a expectativa passou de 79,9 para 80,1 anos, alta de pouco mais de dois meses. Para os homens, subiu de 73,3 para 73,5 anos, avanço de quase três meses. A diferença entre os sexos ficou em 6,6 anos, a mesma da estimativa anterior.',
      ],
    },
    {
      heading: 'Quanto os brasileiros ganharam de vida desde 1940',
      image: {
        src: '/images/news/ibge-expectativa-de-vida-2025-mulheres-80-1-anos-e-homens-73-5-detalhe.jpg',
        alt: 'Detalhe do documento com a expectativa de vida de 80,1 anos para mulheres, 73,5 para homens e 76,9 no total.',
        caption:
          'Números da expectativa de vida ao nascer em 2025, conforme o IBGE.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'De 1940 a 2025, o brasileiro passou a viver, em média, 31,4 anos a mais. Há 85 anos, a expectativa de vida ao nascer era de 45,5 anos. No mesmo período, a mortalidade infantil caiu 91,8%.',
        'O IBGE atribui a evolução à retomada, depois da pandemia de covid-19, da trajetória histórica de ganhos de sobrevivência. Entre os fatores citados estão avanços na saúde e no saneamento, a redução de doenças infecciosas e a incorporação de avanços da medicina, como os antibióticos.',
      ],
      table: {
        caption: 'Expectativa de vida ao nascer no Brasil',
        columns: ['Grupo', 'Estimativa anterior', 'Em 2025'],
        rows: [
          ['População total', '76,6 anos', '76,9 anos'],
          ['Mulheres', '79,9 anos', '80,1 anos'],
          ['Homens', '73,3 anos', '73,5 anos'],
        ],
      },
    },
    {
      heading: 'O que o número quer dizer e o que ele não quer dizer',
      paragraphs: [
        'A expectativa de vida ao nascer é uma média calculada com as taxas de mortalidade de cada idade em um determinado ano. Não é a idade em que cada pessoa vai morrer, e não significa que quem já tem 60 ou 70 anos viverá apenas mais alguns anos até chegar a 76,9. Quem sobrevive à infância e a outras fases de risco tende a viver mais que a média do nascimento.',
        'Na conta simples, 0,3 ano de ganho equivale a cerca de 3,6 meses (0,3 x 12). Já a diferença de 6,6 anos entre mulheres e homens é de 79 meses. O IBGE cita um dos motivos: entre os jovens de 20 a 24 anos, um homem tinha 4,1 vezes mais chance de morrer antes dos 25 anos do que uma mulher da mesma idade, por causa de violência e acidentes de trânsito.',
        'O indicador costuma ser usado em discussões sobre Previdência, saúde e políticas para idosos. O dado em si não altera nenhuma regra nem benefício. Qualquer mudança em idade mínima ou em tempo de contribuição depende de lei.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual é a expectativa de vida do brasileiro em 2025?',
      answer:
        'Segundo o IBGE, 76,9 anos ao nascer: 80,1 anos para as mulheres e 73,5 anos para os homens.',
    },
    {
      question: 'Isso quer dizer que a pessoa vai morrer aos 76,9 anos?',
      answer:
        'Não. É uma média da população calculada com as taxas de mortalidade de cada idade. Quem chega a idades mais altas tende a viver além dela.',
    },
    {
      question: 'O dado muda a idade de aposentadoria?',
      answer:
        'Não. O número é um indicador demográfico. Regras de aposentadoria só mudam por lei.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Expectativa de vida das mulheres no Brasil supera os 80 anos (27/11/2026)',
      url: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-11/expectativa-de-vida-das-mulheres-no-brasil-supera-os-80-anos',
    },
    {
      label:
        'Agência Brasil: Expectativa de vida no Brasil sobe para 76,9 anos, diz IBGE',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/expectativa-de-vida-no-brasil-sobe-para-769-anos-diz-ibge',
    },
    {
      label: 'IBGE: Tábuas completas de mortalidade',
      url: 'https://www.ibge.gov.br/estatisticas/sociais/populacao/9126-tabuas-completas-de-mortalidade.html',
    },
  ],
} as const satisfies NewsDocument;
