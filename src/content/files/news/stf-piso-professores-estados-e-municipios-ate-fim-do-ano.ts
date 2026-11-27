import type { NewsDocument } from '../../types';

export const newsStfPisoProfessoresEstadosMunicipios26Novembro2026 = {
  kind: 'news',
  slug: 'stf-piso-professores-estados-e-municipios-ate-fim-do-ano',
  title:
    'STF decide que estados e municípios devem pagar o piso dos professores, mas sem efeito automático na carreira',
  description:
    'O STF decidiu em 26/11 que estados e municípios devem observar o piso do magistério, hoje de R$ 5.130,63, e que o reajuste não sobe sozinho toda a carreira.',
  category: 'politica',
  coverImage: {
    src: '/images/news/stf-piso-professores-estados-e-municipios-ate-fim-do-ano.jpg',
    alt: 'Documento sobre o piso do magistério ao lado de uma etiqueta com R$ 5.130,63 e de outro documento sobre o recurso extraordinário.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: ['stf', 'piso-professores', 'magisterio', 'educacao', 'municipios'],
  featuredCalculators: ['salario-liquido', 'inss'],
  highlights: [
    {
      value: 'R$ 5.130,63',
      label: 'Piso do magistério (Lei 15.437)',
      note: 'Formação de nível médio, modalidade normal.',
    },
    {
      value: '26/11',
      label: 'Data do julgamento no STF',
      note: 'Dois recursos com repercussão geral.',
    },
    {
      value: 'Temas 1.324 e 1.218',
      label: 'Teses fixadas por maioria',
      note: 'Piso inicial vale; carreira depende de lei.',
    },
  ],
  sections: [
    {
      heading: 'O que o STF decidiu em 26/11',
      paragraphs: [
        'O Supremo Tribunal Federal decidiu em 26/11/2026, por maioria, que estados, Distrito Federal e municípios devem observar o piso salarial nacional do magistério da educação básica, mesmo quando não existe lei local sobre o tema. O julgamento reuniu dois recursos com repercussão geral: o ARE 1502069 (Tema 1.324), relatado pelo ministro Dias Toffoli, e o RE 1326541 (Tema 1.218), relatado pelo ministro Cristiano Zanin.',
        'No Tema 1.324, a tese é que os entes federativos devem adequar o piso inicial da carreira até o fim do exercício financeiro em que a norma federal foi publicada. Se isso não ocorrer, o Judiciário poderá determinar a aplicação do reajuste. O ministro Flávio Dino registrou que a tese vale para os salários iniciais. Gilmar Mendes acompanhou a tese sobre o piso, mas divergiu quanto à intervenção judicial imediata.',
        'Como são recursos com repercussão geral, a decisão orienta os tribunais de todo o país em casos parecidos. O caso concreto do ARE 1502069 envolve uma professora do Município de Riolândia (SP).',
      ],
    },
    {
      heading: 'O piso hoje é de R$ 5.130,63',
      image: {
        src: '/images/news/stf-piso-professores-estados-e-municipios-ate-fim-do-ano-detalhe.jpg',
        alt: 'Detalhe do documento com piso inicial de R$ 5.130,63, estados e municípios como pagadores, prazo e carreira sem efeito automático.',
        caption:
          'Os pontos centrais da decisão do STF de 26/11 sobre o piso do magistério.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O valor vigente está na Lei 15.437, de 18/06/2026, publicada no Diário Oficial da União em 19/06/2026: R$ 5.130,63 por mês para profissionais com formação de nível médio na modalidade normal. A lei também mudou a regra de atualização anual. O Ministério da Educação publica o ato de reajuste até o último dia útil de janeiro, e o índice soma a variação do INPC do ano anterior a 50% da média, nos cinco anos anteriores, da variação real da receita do Fundeb.',
        'A lei também fixa limites: o reajuste não pode ficar abaixo do INPC acumulado do ano anterior nem acima da variação nominal da receita do Fundeb nos dois anos anteriores.',
        'Um exemplo de ordem de grandeza: se uma rede paga salário inicial de R$ 4.800 e precisa chegar ao piso de R$ 5.130,63, a diferença é de R$ 330,63 por mês, ou R$ 3.967,56 em 12 meses. É um exemplo hipotético, não o valor devido em nenhuma rede específica.',
      ],
      table: {
        caption: 'As duas teses do STF em 26/11',
        columns: ['Tema', 'O que ficou decidido'],
        rows: [
          [
            '1.324 (ARE 1502069)',
            'Entes devem observar o piso inicial, mesmo sem lei local, e o Judiciário pode determinar o reajuste se não houver adequação',
          ],
          [
            '1.218 (RE 1326541)',
            'O piso não repercute automaticamente nas demais faixas da carreira, e o Judiciário não pode determinar isso sem previsão legal',
          ],
        ],
      },
    },
    {
      heading: 'Carreira: sem efeito automático nas demais faixas',
      paragraphs: [
        'No Tema 1.218, a maioria seguiu a divergência de Toffoli, e Zanin e Gilmar Mendes ficaram vencidos. A decisão é que o aumento do piso não se estende sozinho aos demais níveis, faixas e classes da carreira, o chamado escalonamento. Também não cabe ao Judiciário determinar esse escalonamento sem previsão legal específica.',
        'Na prática, o professor que está no início da carreira tem base mais forte para cobrar o piso. Quem está em faixas mais altas depende do que dispuser o plano de carreira local. A proposta de Gilmar Mendes de conceder 24 meses para adequar os planos de carreira ficou vencida.',
        'O ministro Gilmar Mendes também lembrou que a nova sistemática da Lei 15.437 e o fim do aumento da participação da União no Fundeb em 2026 podem afetar o equilíbrio federativo a partir de 2027. Para o professor, o ponto prático é consultar a prefeitura ou a secretaria estadual, o sindicato e o contracheque para saber se o piso inicial já é respeitado.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual é o valor do piso dos professores?',
      answer:
        'A Lei 15.437/2026 fixa R$ 5.130,63 por mês para formação de nível médio, modalidade normal.',
    },
    {
      question: 'Meu município precisa pagar o piso mesmo sem lei local?',
      answer:
        'Segundo a tese do Tema 1.324, sim: estados, DF e municípios devem observar o piso inicial e, se não o fizerem, o Judiciário poderá determinar o reajuste.',
    },
    {
      question: 'O reajuste do piso sobe todas as faixas da carreira?',
      answer:
        'Não automaticamente. Pelo Tema 1.218, isso depende de previsão legal específica, como o plano de carreira local.',
    },
  ],
  sources: [
    {
      label:
        'STF: Estados e municípios devem observar piso salarial nacional de professores da educação básica',
      url: 'https://noticias.stf.jus.br/postsnoticias/estados-e-municipios-devem-observar-piso-salarial-nacional-de-professores-da-educacao-basica-decide-stf/',
    },
    {
      label: 'Planalto: Lei 15.437, de 18 de junho de 2026',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15437.htm',
    },
    {
      label:
        'Agência Senado: Medida provisória reajusta piso do magistério para R$ 5,1 mil em 2026',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/01/22/medida-provisoria-reajusta-piso-do-magisterio-para-r-5-1-mil-em-2026',
    },
  ],
} as const satisfies NewsDocument;
