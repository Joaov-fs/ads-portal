import type { NewsDocument } from '../../types';

export const newsPostesPl32202019Senado = {
  kind: 'news',
  slug: 'postes-pl-3220-2019-senado-aprova-regras-de-uso-compartilhado-e-vai-a-sancao',
  title:
    'Senado aprova regras para postes: cabos sem contrato têm 180 dias para se regularizar e texto vai à sanção',
  description:
    'O Senado aprovou em 18/11 o PL 3.220/2019, que limita o aluguel de postes e dá 180 dias sem multa para regularizar cabos. Veja o que muda e a próxima etapa.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/postes-pl-3220-2019-senado-aprova-regras-de-uso-compartilhado-e-vai-a-sancao.jpg',
    alt: 'Documento com os prazos do PL 3.220/2019 ao lado de um poste de energia com fios cruzados e uma etiqueta de 180 dias.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  tags: ['postes', 'internet', 'aneel', 'anatel', 'senado', 'telecomunicacoes'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '180 dias',
      label: 'Para regularizar cabos',
      note: 'Cabos sem contrato, sem multa, para as operadoras.',
    },
    {
      value: '5 anos',
      label: 'Regularização dos postes',
      note: 'Contados a partir da entrada em vigor da lei.',
    },
    {
      value: '18 meses',
      label: 'Contratos acima do teto',
      note: 'Prazo para se adequar ao valor máximo.',
    },
    {
      value: '50%',
      label: 'Teto na área rural',
      note: 'Metade do valor máximo cobrado na área urbana.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado aprovou e qual é a próxima etapa',
      paragraphs: [
        'O Plenário do Senado aprovou na quarta-feira (18/11) o PL 3.220/2019, que cria regras para o uso compartilhado dos postes de energia por empresas de internet e telefonia. O projeto é do senador Weverton (PDT-MA) e teve como relator o senador Esperidião Amin (PP-SC). O texto aprovado é um substitutivo que veio da Câmara dos Deputados, e o Senado manteve a maior parte das mudanças feitas pelos deputados.',
        'Como o projeto nasceu no Senado e voltou da Câmara com substitutivo, a palavra final foi do Senado e o texto segue para a sanção da Presidência da República. A regra geral da Constituição dá 15 dias úteis para o presidente sancionar ou vetar, contados do recebimento do texto. Só depois da sanção e da publicação a lei passa a valer, e é a partir daí que os prazos começam a correr.',
        'O objetivo declarado é acabar com o emaranhado de fios nos postes, reduzir acidentes e baratear o acesso das operadoras à infraestrutura das distribuidoras de energia. Pela Lei Geral de Telecomunicações, as operadoras já têm direito de usar postes de outras empresas, mas, segundo o autor, as distribuidoras não cumprem essa obrigação.',
      ],
    },
    {
      heading: 'Quanto pode ser cobrado pelo aluguel do poste',
      image: {
        src: '/images/news/postes-pl-3220-2019-senado-aprova-regras-de-uso-compartilhado-e-vai-a-sancao-detalhe.jpg',
        alt: 'Detalhe da ilustração: prazos de 180 dias, até 5 anos e 18 meses do PL 3.220/2019.',
        caption: 'Os três prazos principais do projeto aprovado em 18/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O valor cobrado das operadoras pelo uso do poste passará a ter um limite máximo. Enquanto a Aneel (energia) e a Anatel (telecomunicações) não definirem a metodologia definitiva, vale o preço de referência atual, corrigido pela inflação até o fim de 2025. Nas áreas rurais, o teto é a metade do valor das áreas urbanas.',
        'A Agência Senado não informa valores em reais para esse teto, e por isso nenhuma conta de quanto cada operadora vai pagar pode ser feita agora. O que o texto define é a regra: o teto provisório vale até que a Aneel e a Anatel, ou o governo federal, se elas não cumprirem o prazo, fixem o chamado valor máximo estrutural.',
        'Contratos que hoje cobram acima do teto terão 18 meses para se adequar. Esse prazo começa na entrada em vigor da lei, no caso do teto provisório, e na publicação do valor estrutural, quando ele for definido.',
      ],
      table: {
        caption: 'Principais prazos do PL 3.220/2019',
        columns: ['Regra', 'Prazo'],
        rows: [
          ['Regularizar cabos sem contrato, sem multa', '180 dias'],
          ['Regularização geral dos postes', 'até 5 anos'],
          ['Adequar contratos acima do teto', '18 meses'],
          ['Retirar cabos que oferecem risco', 'imediatamente'],
        ],
      },
    },
    {
      heading: 'Cabos clandestinos, punições e quem fiscaliza',
      paragraphs: [
        'As operadoras terão 180 dias para regularizar, sem multa, os cabos instalados sem contrato. Os que oferecem risco devem ser retirados imediatamente. A regularização completa da rede deve ser concluída em até cinco anos, e a Aneel pode prorrogar esse prazo por mais cinco anos em casos complexos.',
        'Ocupar poste sem contrato passa a ser infração grave. Se a irregularidade não for corrigida depois de notificação, a empresa pode perder a concessão ou a autorização. O texto não informa valor de multa.',
        'A distribuidora só poderá negar o uso do poste por razões técnicas, operacionais ou de segurança, com decisão fundamentada. Se administrar mal a infraestrutura, a Aneel poderá transferir a exploração comercial a outra empresa, por chamada pública. As prefeituras poderão firmar convênios com a Aneel e a Anatel para fiscalizar os postes e indicar áreas prioritárias para a retirada de fios.',
        'O relator fez dois ajustes: deixou mais claro como contar os prazos de adaptação dos contratos em vigor e retomou a versão do Senado que permite à distribuidora dona dos postes explorar diretamente o espaço, o que a Câmara havia proibido.',
      ],
    },
    {
      heading: 'O que muda para o morador e o que ainda não está definido',
      paragraphs: [
        'A lei mexe com empresas, e os consumidores não são citados diretamente no texto. O efeito esperado para quem mora na cidade é indireto: menos fios soltos nas ruas, menos risco de acidente e uma conta de infraestrutura mais previsível para as operadoras. Se isso vai se refletir no preço da internet ou do telefone depende de decisões de cada empresa, e nada garante redução de tarifa.',
        'Ainda faltam pontos importantes: a sanção, o prazo em que a lei entra em vigor e os valores definitivos do teto. Para contar quando vencem os 180 dias ou os 18 meses depois que a data de início for conhecida, use a calculadora de contador de dias do portal.',
        'Quem vê fios soltos ou postes com risco de queda pode acionar a distribuidora de energia da região e, se não for atendido, registrar reclamação na Aneel. O projeto aprovado não muda esses canais de atendimento.',
      ],
    },
  ],
  faq: [
    {
      question: 'O projeto já virou lei?',
      answer:
        'Ainda não. O PL 3.220/2019 foi aprovado pelo Senado em 18/11 e segue para a sanção da Presidência da República. Só vale depois de sancionado e publicado.',
    },
    {
      question: 'As operadoras serão multadas pelos cabos sem contrato?',
      answer:
        'Elas têm 180 dias para regularizar sem multa. Depois, ocupar poste sem contrato passa a ser infração grave, e a empresa pode perder a concessão ou a autorização se não corrigir após notificação.',
    },
    {
      question: 'A internet vai ficar mais barata?',
      answer:
        'O texto não garante isso. A lei limita o aluguel que as operadoras pagam pelos postes, mas o preço ao consumidor continua sendo decisão de cada empresa.',
    },
  ],
  sources: [
    {
      label:
        'Agência Senado: Aprovadas regras de uso compartilhado de postes; texto vai à sanção',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/11/18/aprovadas-regras-de-uso-compartilhado-de-postes-texto-vai-a-sancao',
    },
    {
      label: 'Senado Federal: tramitação do PL 3.220/2019',
      url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/176345',
    },
  ],
} as const satisfies NewsDocument;
