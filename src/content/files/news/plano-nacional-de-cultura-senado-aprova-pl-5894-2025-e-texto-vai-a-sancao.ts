import type { NewsDocument } from '../../types';

export const newsPlanoNacionalCulturaSenado = {
  kind: 'news',
  slug: 'plano-nacional-de-cultura-senado-aprova-pl-5894-2025-e-texto-vai-a-sancao',
  title:
    'Senado aprova o novo Plano Nacional de Cultura (PL 5.894/2025) e o texto vai à sanção',
  description:
    'O Plenário do Senado aprovou em 24/11 o plano de cultura para dez anos. A partir de 2028, estados e municípios precisam aderir ao SNC para receber a Aldir Blanc.',
  category: 'politica',
  coverImage: {
    src: '/images/news/plano-nacional-de-cultura-senado-aprova-pl-5894-2025-e-texto-vai-a-sancao.jpg',
    alt: 'Documento com os dados do Plano Nacional de Cultura ao lado de um calendário de novembro de 2026 com o dia 24 marcado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-25',
  updatedAt: '2026-11-25',
  tags: ['plano-nacional-de-cultura', 'senado', 'aldir-blanc', 'cultura'],
  featuredCalculators: ['porcentagem', 'contador-de-dias'],
  highlights: [
    {
      value: '10 anos',
      label: 'Vigência do novo plano',
      note: 'Metas, ações e indicadores para a política cultural.',
    },
    {
      value: '2028',
      label: 'Adesão ao SNC',
      note: 'Condição para receber recursos da Aldir Blanc.',
    },
    {
      value: '6 de 53',
      label: 'Metas do plano anterior',
      note: 'Atingiram 100% ou mais, segundo o MinC.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado aprovou em 24/11',
      paragraphs: [
        'O Plenário do Senado aprovou na terça-feira, 24/11/2026, o PL 5.894/2025, que institui o novo Plano Nacional de Cultura (PNC) para os próximos dez anos. A proposta foi enviada pela Presidência da República e já havia passado pela Câmara dos Deputados no início de setembro. Como o Senado não alterou o conteúdo a ponto de devolvê-lo, o texto segue agora para sanção presidencial.',
        'A Agência Senado não informou o placar da votação. O registro oficial lembra que o senador Jorge Seif (PL-SC) anunciou voto contrário. O relator foi o senador Humberto Costa (PT-PE). Antes da votação, houve um acordo com os senadores Magno Malta (PL-ES) e Carlos Portinho (PL-RJ), que retiraram três destaques. Em troca, o texto passou a mencionar as culturas cristãs ao lado das indígenas e afro-brasileiras e a citar o ECA no eixo de formação.',
        'Aprovação no Senado não é lei ainda: o presidente da República tem de sancionar o texto, e só depois ele é publicado no Diário Oficial da União. A Agência Senado não informa uma data para isso.',
      ],
    },
    {
      heading: 'O que o plano prevê',
      image: {
        src: '/images/news/plano-nacional-de-cultura-senado-aprova-pl-5894-2025-e-texto-vai-a-sancao-detalhe.jpg',
        alt: 'Detalhe do documento: projeto PL 5.894/2025, vigência de 10 anos, 8 eixos e próximo passo, a sanção.',
        caption:
          'Resumo dos pontos do projeto citados pela Agência Senado após a votação de 24/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O plano orienta as políticas públicas de cultura do país por uma década, com metas, ações, indicadores e mecanismos de participação social. Ele se organiza em oito eixos: gestão e participação social; fomento; patrimônio e memória; formação; infraestrutura e espaços culturais; economia criativa, trabalho e proteção social; cultura, bem viver e ação climática; e cultura digital e direitos digitais.',
        'O texto cria o Comitê de Governança do PNC e prevê pelo menos duas conferências nacionais de cultura, com intervalo máximo de quatro anos entre elas. Estados, Distrito Federal e municípios devem elaborar ou revisar seus planos de cultura tomando o PNC como referência.',
        'O balanço do Ministério da Cultura citado pela Agência Senado mostra o tamanho do desafio: do plano anterior (Lei 12.343/2010, vigente até 2024), apenas 6 das 53 metas alcançaram 100% ou mais do previsto. Em termos simples, isso equivale a cerca de 11% das metas cumpridas ou superadas (6 dividido por 53).',
      ],
      table: {
        caption: 'Principais pontos do PL 5.894/2025',
        columns: ['Item', 'O que o texto traz'],
        rows: [
          ['Vigência', 'Dez anos'],
          ['Estrutura', 'Oito eixos estratégicos'],
          ['Governança', 'Comitê de Governança do PNC'],
          ['Conferências', 'Ao menos duas, com intervalo máximo de 4 anos'],
          ['Próximo passo', 'Sanção presidencial'],
        ],
      },
    },
    {
      heading: 'O que muda para estados, municípios e o cidadão',
      paragraphs: [
        'O ponto de efeito mais direto é financeiro. A partir de 2028, estados e municípios só recebem recursos da Política Nacional Aldir Blanc de Fomento à Cultura se aderirem ao Sistema Nacional de Cultura (SNC). Quem ainda não tem estrutura de cultura montada precisará se organizar até lá para não perder o repasse.',
        'Para entes com problemas na execução da Aldir Blanc, um regulamento do Ministério da Cultura vai disciplinar a adesão parcial ou total ao SNC. Depois da publicação da lei, o ministério deve divulgar as metas do plano em até 90 dias, segundo a Agência Senado.',
        'Para o cidadão, não há efeito imediato em renda, benefício ou imposto. A mudança é indireta: editais, espaços culturais e projetos locais tendem a seguir as metas e os indicadores do plano, e a participação social passa a ter mecanismos previstos em lei. Para saber como a sua cidade vai se enquadrar, vale acompanhar o plano municipal de cultura depois da sanção.',
      ],
    },
  ],
  faq: [
    {
      question: 'O Plano Nacional de Cultura já é lei?',
      answer:
        'Ainda não. O Senado aprovou o PL 5.894/2025 em 24/11 e o texto segue para sanção presidencial. Só depois da sanção e da publicação no Diário Oficial da União ele passa a valer.',
    },
    {
      question: 'O que acontece com a Aldir Blanc em 2028?',
      answer:
        'Segundo a Agência Senado, a partir de 2028 estados e municípios só recebem recursos da Política Nacional Aldir Blanc se aderirem ao Sistema Nacional de Cultura.',
    },
    {
      question: 'Quanto tempo vale o plano?',
      answer:
        'O novo Plano Nacional de Cultura vale por dez anos, com metas, ações, indicadores e mecanismos de participação social.',
    },
  ],
  sources: [
    {
      label:
        'Agência Senado: Senado aprova Plano Nacional de Cultura para os próximos 10 anos',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/11/24/senado-aprova-plano-nacional-de-cultura-para-os-proximos-10-anos',
    },
    {
      label: 'Ministério da Cultura',
      url: 'https://www.gov.br/cultura/pt-br',
    },
  ],
} as const satisfies NewsDocument;
