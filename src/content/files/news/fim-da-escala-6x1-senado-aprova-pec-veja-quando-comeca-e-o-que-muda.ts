import type { NewsDocument } from '../../types';

export const newsFimEscala6x1SenadoAprova = {
  kind: 'news',
  slug: 'fim-da-escala-6x1-senado-aprova-pec-veja-quando-comeca-e-o-que-muda',
  title:
    'Fim da escala 6x1: emenda promulgada prevê 42 horas na primeira etapa; veja o que muda',
  description:
    'EC 141/2026 já foi promulgada. Senado aponta início da jornada de 42 horas em 15 de dezembro, com duas folgas e transição para 40 horas.',
  category: 'trabalho',
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-15',
  updatedAt: '2026-10-20',
  tags: ['escala-6x1', 'jornada-de-trabalho', 'clt', 'trabalho'],
  featuredCalculators: ['salario-por-hora', 'horas-extras'],
  coverImage: {
    src: '/images/news/escala-6x1-emenda-promulgada-2026.jpg',
    alt: 'Documento com a jornada de 42 para 40 horas, calendário de dezembro com o dia 15 marcado e etiqueta de duas folgas.',
    credit: 'Ilustração: PortalFina',
  },
  highlights: [
    {
      value: '42h',
      label: 'Primeira etapa da jornada semanal',
      note: 'Senado informa início em 15 de dezembro.',
    },
    {
      value: '40h',
      label: 'Limite ao fim da transição',
      note: 'Redução gradual, sem corte salarial.',
    },
    {
      value: '2 folgas',
      label: 'Repouso semanal remunerado',
      note: 'Com regras para negociação coletiva.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou desde a aprovação no Senado',
      paragraphs: [
        'A Emenda Constitucional 141 foi promulgada pelo Congresso em 16 de outubro. A publicação no Diário Oficial ocorreu na edição extra da mesma data. A proposta deixou, portanto, de aguardar a promulgação.',
        'Atualização de 20 de outubro: esta matéria substitui o calendário simulado da versão anterior por informações do texto constitucional e da cobertura oficial do Senado. A redução é gradual e não significa que o limite final já passou a valer para todos.',
      ],
    },
    {
      heading: 'Quando a jornada começa a diminuir',
      image: {
        src: '/images/news/escala-6x1-emenda-promulgada-2026-detalhe.jpg',
        alt: 'Detalhe do calendário de dezembro com o dia 15 destacado.',
        caption:
          'A cobertura do Senado informa 15 de dezembro para o início da primeira etapa.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O Senado informa que a carga máxima semanal passa a 42 horas em 15 de dezembro. A orientação foi divulgada pela Rádio Senado e pela Agência Senado em 19 de outubro.',
        'O texto da emenda descreve a primeira redução após dois meses da publicação. A etapa final ocorre um ano depois da primeira. Os prazos de transição precisam ser considerados na organização das escalas.',
      ],
      table: {
        caption: 'Etapas da redução da jornada previstas na EC 141/2026',
        columns: ['Etapa', 'Limite semanal', 'Referência'],
        rows: [
          [
            'Primeira redução',
            '42 horas',
            '15/12/2026, conforme informação do Senado',
          ],
          [
            'Etapa final',
            '40 horas',
            'Um ano após a primeira etapa, segundo a emenda',
          ],
        ],
      },
    },
    {
      heading: 'Salário e folgas: o que acompanhar na empresa',
      paragraphs: [
        'A cobertura oficial explica que a mudança preserva o salário durante a transição. As duas folgas passam a integrar a nova organização semanal.',
        'Segundo a Rádio Senado, a distribuição das horas na fase intermediária pode exigir jornadas diárias diferentes das da etapa final. Por isso, confira como a empresa e a representação sindical organizarão os horários e a compensação.',
        'Guarde a escala e o registro de ponto. As calculadoras de salário por hora e de horas extras do PortalFina ajudam a simular os valores com a carga mensal aplicável ao contrato.',
      ],
    },
    {
      heading: 'Há situações com regras específicas',
      paragraphs: [
        'A emenda prevê regras próprias para empregados vinculados à execução de contratos da administração pública. A aplicação da redução depende de aditamento para preservar o equilíbrio contratual, com prazo máximo de um ano.',
        'Também há tratamento específico para empregados com diploma de nível superior e remuneração igual ou superior a duas vezes e meia o teto do INSS. A regra não elimina o direito ao descanso e não se aplica aos empregados públicos descritos no texto.',
        'Antes de alterar a jornada, confira o enquadramento do contrato, a norma coletiva e as disposições específicas da emenda. A notícia apresenta a regra geral e não substitui essa análise individual.',
      ],
    },
  ],
  faq: [
    {
      question: 'A emenda ainda precisa de sanção presidencial?',
      answer:
        'Não. A emenda já foi promulgada pelo Congresso. A implantação da jornada segue os prazos de transição.',
    },
    {
      question: 'As 40 horas começam imediatamente?',
      answer:
        'Não. A primeira redução é para 42 horas. O limite final de 40 horas vem depois, conforme a transição constitucional.',
    },
    {
      question: 'Onde foi divulgada a data de 15 de dezembro?',
      answer:
        'A data consta da cobertura da Rádio Senado e da Agência Senado publicada em 19 de outubro. O texto da emenda estabelece os prazos contados da publicação.',
    },
  ],
  sources: [
    {
      label: 'Planalto: Emenda Constitucional 141, de 16/10/2026',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc141.htm',
    },
    {
      label: 'Senado: promulgação da emenda sobre a escala 6x1, em 16/10/2026',
      url: 'https://www12.senado.leg.br/noticias/videos/2026/10/fim-da-escala-6x1-e-promulgada-em-sessao-do-congresso-nacional',
    },
    {
      label: 'Agência Senado: carga máxima de 42 horas em 15 de dezembro',
      url: 'https://www12.senado.leg.br/noticias/audios/2026/10/carga-maxima-de-trabalho-passara-a-42-horas-semanais-em-15-de-dezembro',
    },
    {
      label: 'Rádio Senado: jornada 5x2 e transição, comunicado de 19/10/2026',
      url: 'https://www12.senado.leg.br/radio/1/noticia/2026/10/19/jornada-de-trabalho-5x2-deve-entrar-em-vigor-em-15-de-dezembro',
    },
  ],
} as const satisfies NewsDocument;
