import type { NewsDocument } from '../../types';

export const newsEnemAbstencao36 = {
  kind: 'news',
  slug: 'enem-2026-abstencao-de-36-no-2o-dia-gabarito-sai-em-18-de-novembro',
  title:
    'Enem 2026: abstenção de 36% no 2º dia, gabarito sai em 18 de novembro e resultado em 18 de janeiro',
  description:
    'Balanço preliminar aponta 36% de ausência no 2º dia do Enem. Veja as datas do gabarito e do resultado e o prazo de reaplicação, de 16 a 20/11.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/enem-2026-abstencao-de-36-no-2o-dia-gabarito-sai-em-18-de-novembro.jpg',
    alt: 'Documento com o balanço do Enem 2026, calendário de novembro com os dias 8, 15 e 18 marcados e medidor de 36%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-15',
  updatedAt: '2026-11-15',
  tags: ['enem', 'inep', 'gabarito', 'abstencao', 'educacao', 'prazos'],
  featuredCalculators: ['porcentagem', 'contador-de-dias'],
  highlights: [
    {
      value: '36%',
      label: 'Ausência no 2º dia',
      note: 'Balanço preliminar de 15/11, entre 5,05 milhões de inscritos.',
    },
    {
      value: '18/11',
      label: 'Divulgação do gabarito',
      note: 'Quarta-feira, no portal do Inep.',
    },
    {
      value: '18/01/2027',
      label: 'Resultado individual',
      note: 'Notas de quem fez as provas.',
    },
    {
      value: '16 a 20/11',
      label: 'Pedido de reaplicação',
      note: 'Pela Página do Participante.',
    },
  ],
  sections: [
    {
      heading: 'Quantos candidatos faltaram ao 2º dia do Enem 2026?',
      image: {
        src: '/images/news/enem-2026-abstencao-de-36-no-2o-dia-gabarito-sai-em-18-de-novembro-detalhe.jpg',
        alt: 'Close do documento com a ausência de 36% no 2º dia, 32% no 1º dia, 5,05 milhões de inscritos e o gabarito em 18/11.',
        caption:
          'A ausência subiu de 32% no 1º dia (8/11) para 36% no 2º dia (15/11), segundo os balanços preliminares.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O segundo dia de provas do Enem 2026, realizado em 15 de novembro, teve 64% de presença e 36% de abstenção, segundo o balanço preliminar divulgado pelo Ministério da Educação e reportado por veículos como Metrópoles e A Tarde. No primeiro dia, em 8 de novembro, a ausência havia sido de 32%.',
        'O número de inscritos confirmados é de cerca de 5,05 milhões. Aplicar o percentual ao total dá uma ideia do tamanho: 36% de 5.053.921 equivale a cerca de 1,82 milhão de ausentes, e os outros 64%, a cerca de 3,23 milhões de presentes. São estimativas feitas a partir do percentual, e não números absolutos informados pelo governo.',
        'Neste segundo dia, a prova teve 90 questões objetivas, 45 de Matemática e 45 de Ciências da Natureza, com portões fechados às 13h e término às 18h30, no horário de Brasília.',
      ],
      table: {
        caption: 'Presença e ausência nos dois dias de prova',
        columns: ['Dia', 'Data', 'Presença', 'Ausência'],
        rows: [
          ['1º dia', '8/11', '68%', '32%'],
          ['2º dia', '15/11', '64%', '36%'],
        ],
      },
    },
    {
      heading: 'Quando sai o gabarito e o resultado?',
      paragraphs: [
        'O gabarito oficial das provas será divulgado na quarta-feira, 18 de novembro. Os resultados individuais saem em 18 de janeiro de 2027.',
        'Quem quer conferir as respostas antes do gabarito pode comparar com a prova levada para casa, mas só o gabarito do Inep vale. A nota final depende da Teoria de Resposta ao Item, que considera a dificuldade e a coerência das respostas de cada questão, e não apenas o número de acertos.',
      ],
    },
    {
      heading: 'Quem pode pedir reaplicação e até quando?',
      paragraphs: [
        'O pedido de reaplicação vai de 16 a 20 de novembro, exclusivamente pela Página do Participante, com login Gov.br. As novas provas estão marcadas para 15 e 16 de dezembro.',
        'Têm direito, com análise do Inep, os participantes com problemas logísticos na aplicação, doenças infectocontagiosas previstas no edital e quem mora em município afetado por desastre natural. Os aprovados refazem apenas as provas do dia que perderam. Quem faltou por outro motivo não tem direito.',
        'Para contar o prazo com segurança, use a calculadora de dias: de 16 a 20 de novembro são cinco dias corridos para enviar o pedido e o documento que comprova a situação.',
      ],
    },
    {
      heading: 'O que a ausência maior muda para o candidato?',
      paragraphs: [
        'A abstenção não altera a nota de quem fez a prova, porque a nota usa o desempenho do próprio participante. Para quem fez as duas provas, o que importa agora é conferir o gabarito em 18 de novembro e acompanhar os prazos dos programas que usam a nota.',
        'Quem perdeu um dos dias por motivo previsto no edital deve pedir a reaplicação até 20 de novembro, antes de o prazo acabar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual foi a abstenção no 2º dia do Enem 2026?',
      answer:
        'De 36%, segundo o balanço preliminar do MEC reportado pela imprensa. No 1º dia, em 8 de novembro, foi de 32%.',
    },
    {
      question: 'Quando sai o gabarito do Enem 2026?',
      answer:
        'Na quarta-feira, 18 de novembro. Os resultados individuais saem em 18 de janeiro de 2027.',
    },
    {
      question: 'Até quando posso pedir a reaplicação do Enem?',
      answer:
        'De 16 a 20 de novembro, pela Página do Participante. As provas da reaplicação são em 15 e 16 de dezembro.',
    },
  ],
  sources: [
    {
      label: 'Inep: segundo dia de prova do Enem 2026 chega ao fim',
      url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-segundo-dia-de-prova-chega-ao-fim-neste-domingo-15-1',
    },
    {
      label:
        'Agência Brasil: gabarito do Enem sai na quarta-feira e resultado em 18 de janeiro',
      url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-11/gabarito-do-enem-sai-na-quarta-feira-e-resultado-em-18-de-janeiro',
    },
    {
      label:
        'Agência Brasil: Enem registra aumento na participação de alunos da rede pública',
      url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-11/enem-registra-aumento-na-participacao-de-alunos-da-rede-publica',
    },
    {
      label:
        'Metrópoles: mais de um terço dos candidatos não compareceu ao 2º dia',
      url: 'https://www.metropoles.com/brasil/enem-2026-mais-de-um-terco-dos-candidatos-nao-compareceu-ao-2o-dia',
    },
  ],
} as const satisfies NewsDocument;
