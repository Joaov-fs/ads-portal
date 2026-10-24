import type { NewsDocument } from '../../types';

export const newsAposentadoriaAgentesSaudeEc140 = {
  kind: 'news',
  slug: 'aposentadoria-especial-de-agentes-de-saude-ec-140-idade-minima-de-57-e-60-anos',
  title:
    'Aposentadoria especial de agentes de saúde: EC 140 fixa 57 anos para mulheres e 60 para homens',
  description:
    'Emenda promulgada em 16/10 cria aposentadoria diferenciada para agentes comunitários de saúde e de endemias, com 25 anos de atividade. Veja as regras.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/aposentadoria-especial-de-agentes-de-saude-ec-140-idade-minima-de-57-e-60-anos.jpg',
    alt: 'Documento da Emenda 140/2026 com idades de 57 e 60 anos, calendário de outubro com o dia 16 marcado e celular com a regra.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  tags: [
    'aposentadoria',
    'inss',
    'previdencia',
    'agentes-de-saude',
    'emenda-constitucional',
    'servidores',
  ],
  featuredCalculators: ['inss', 'contador-de-dias'],
  highlights: [
    {
      value: '57 e 60',
      label: 'Idade mínima (mulher e homem)',
      note: 'Regra permanente, com 25 anos de contribuição e de atividade.',
    },
    {
      value: '62 e 65',
      label: 'Idade da regra geral do INSS',
      note: 'Cinco anos a mais do que a regra dos agentes.',
    },
    {
      value: 'R$ 3 bi',
      label: 'Impacto anual no Orçamento',
      note: 'Estimativa dos ministérios da Fazenda e do Planejamento.',
    },
    {
      value: '31/12/2028',
      label: 'Prazo para efetivar agentes',
      note: 'Admissão de quem tem vínculo temporário ou precário.',
    },
  ],
  sections: [
    {
      heading: 'O que o Congresso promulgou em 16/10',
      paragraphs: [
        'O Congresso Nacional promulgou em 16 de outubro de 2026, em sessão solene, a Emenda Constitucional 140. Ela vem da PEC 14/2021, aprovada pela Câmara dos Deputados em 2025 e pelo Senado em 2026, e cria uma aposentadoria diferenciada para os agentes comunitários de saúde (ACS) e os agentes de combate às endemias (ACE). O texto também alcança os agentes indígenas de saúde e de saneamento.',
        'A emenda entra em vigor na data de publicação, que foi o Diário Oficial da União de 16/10/2026. Ela muda os artigos 40, 198 e 201 da Constituição e vale para os dois regimes: o Regime Próprio de Previdência Social (RPPS), dos servidores públicos, e o Regime Geral (RGPS), administrado pelo INSS.',
        'Na prática, a categoria passa a ter regras de idade mais baixas do que as aplicadas aos demais trabalhadores desde a reforma da Previdência de 2019. Além da aposentadoria, a emenda trata da forma de contratação desses profissionais e prevê que a União ajude estados, Distrito Federal e municípios a pagar a conta.',
      ],
    },
    {
      heading: 'Regra permanente: 57 anos para mulheres e 60 para homens',
      image: {
        src: '/images/news/aposentadoria-especial-de-agentes-de-saude-ec-140-idade-minima-de-57-e-60-anos-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com idade mínima de 57 anos para mulheres, 60 para homens, 25 anos de contribuição e a regra geral do INSS de 62 e 65 anos.',
        caption:
          'A idade mínima dos agentes fica cinco anos abaixo da regra geral do INSS.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Para quem entrar na categoria daqui para frente, vale a regra permanente: idade mínima de 57 anos para mulheres e de 60 anos para homens, com no mínimo 25 anos de contribuição e de efetivo exercício como agente.',
        'A comparação mostra o ganho. A regra geral do INSS exige hoje 62 anos para mulheres e 65 para homens. Ou seja, o agente pode se aposentar cinco anos antes, desde que tenha cumprido os 25 anos na função e não apenas o tempo de contribuição.',
        'O tempo de afastamento para mandato classista, como em sindicato, e o tempo como readaptado em outra função também contam, desde que a readaptação tenha vindo de acidente de trabalho, doença profissional ou doença do trabalho.',
      ],
      table: {
        caption: 'Idade mínima: agentes de saúde e regra geral do INSS',
        columns: ['Regra', 'Mulher', 'Homem'],
        rows: [
          ['Agentes de saúde (permanente)', '57 anos', '60 anos'],
          ['Regra geral do INSS', '62 anos', '65 anos'],
          ['Diferença', '5 anos', '5 anos'],
        ],
      },
    },
    {
      heading: 'Transição: quem já é agente tem idades menores até 2041',
      paragraphs: [
        'Quem já era agente até a promulgação tem duas regras de transição. A primeira é por idade mínima escalonada, também com 25 anos de contribuição e de efetivo exercício. A idade sobe por faixas até chegar, em 2041, aos 57 e 60 anos da regra permanente.',
        'Há ainda um benefício para quem passa dos 25 anos na função: o texto prevê redução de 1 ano na idade para cada ano que exceder 25 anos de atividade, com limite de 5 anos.',
        'A segunda transição é por pontos. A mulher precisa de 60 anos de idade e a soma de 83 pontos; o homem, de 63 anos e a soma de 86 pontos. Os pontos são a idade somada ao tempo de contribuição, apurados em dias. Em qualquer caso, são exigidos 15 anos de contribuição, sendo 10 anos de efetivo exercício como agente.',
        'Um exemplo de conta: uma agente de 60 anos com 23 anos de contribuição soma 83 pontos (60 + 23) e atinge a pontuação da mulher. Um agente de 63 anos com 23 anos de contribuição soma 86 pontos (63 + 23) e atinge a do homem. Os dois ainda precisam ter ao menos 10 anos de efetivo exercício na função.',
      ],
      table: {
        caption:
          'Transição por idade mínima escalonada (25 anos de contribuição e atividade)',
        columns: ['Prazo', 'Mulher', 'Homem'],
        rows: [
          ['Até 31/12/2030', '50 anos', '52 anos'],
          ['Até 31/12/2035', '52 anos', '54 anos'],
          ['Até 31/12/2040', '54 anos', '56 anos'],
          ['A partir de 01/01/2041', '57 anos', '60 anos'],
        ],
      },
    },
    {
      heading: 'Valor do benefício, efetivação e quem paga a conta',
      paragraphs: [
        'Para os agentes do regime próprio, o texto prevê proventos com integralidade, isto é, com base na remuneração do cargo efetivo, e reajustes com paridade, para quem ingressou até a promulgação e atende às condições da emenda. Nenhum provento pode ficar abaixo do piso do INSS.',
        'Para os agentes que se aposentam pelo INSS nas regras de transição, a União pagará um benefício extraordinário, que corresponde à diferença entre a remuneração do cargo efetivo e o benefício do Regime Geral. Quem já está aposentado tem direito à revisão da renda ou ao benefício extraordinário, conforme o caso, mas sem pagamento de valores retroativos.',
        'A emenda também proíbe, como regra, a contratação temporária ou terceirizada de agentes, salvo em emergência de saúde pública. Quem tem vínculo temporário, indireto ou precário com o SUS na data da promulgação deve ser admitido pelo ente federativo como servidor efetivo, desde que tenha passado em processo seletivo público posterior a 14/02/2006 ou nos termos da Emenda 51/2006. O prazo para essa efetivação é 31/12/2028.',
        'O impacto no Orçamento federal é estimado em R$ 3 bilhões por ano pelos ministérios da Fazenda e do Planejamento e Orçamento. A União repassará assistência financeira complementar a estados, Distrito Federal e municípios e recursos ao Fundo do Regime Geral de Previdência Social para cobrir as aposentadorias concedidas pelas novas regras.',
      ],
    },
  ],
  faq: [
    {
      question:
        'A nova regra vale para quem trabalha como agente em prefeitura contratada por terceirizada?',
      answer:
        'A emenda proíbe a contratação temporária ou terceirizada, salvo emergência em saúde pública, e manda admitir como servidor efetivo quem tem vínculo temporário, indireto ou precário e passou por processo seletivo público, até 31/12/2028. Cada caso depende da documentação do processo seletivo.',
    },
    {
      question: 'Quantos anos de trabalho como agente são necessários?',
      answer:
        'Na regra permanente, 25 anos de contribuição e de efetivo exercício. Na transição por pontos, 15 anos de contribuição, sendo 10 anos de efetivo exercício como agente.',
    },
    {
      question: 'Quem já está aposentado recebe diferença retroativa?',
      answer:
        'O texto garante a revisão da renda ou o benefício extraordinário, conforme o caso, mas veda o pagamento de valores retroativos.',
    },
  ],
  sources: [
    {
      label: 'Planalto: Emenda Constitucional nº 140, de 16 de outubro de 2026',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc140.htm',
    },
    {
      label:
        'Agência Câmara: Congresso promulga aposentadoria especial para agentes de saúde e de combate a endemias',
      url: 'https://www.camara.leg.br/noticias/1311792-congresso-promulga-aposentadoria-especial-para-agentes-de-saude-e-de-combate-a-endemias',
    },
    {
      label:
        'Agência Brasil: Congresso promulga emenda de aposentadoria especial de agente de saúde',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/congresso-promulga-emenda-de-aposentadoria-especial-de-agente-de-saude',
    },
  ],
} as const satisfies NewsDocument;
