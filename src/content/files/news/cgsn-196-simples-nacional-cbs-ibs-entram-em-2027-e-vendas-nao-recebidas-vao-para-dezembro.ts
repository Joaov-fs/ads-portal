import type { NewsDocument } from '../../types';

export const newsCgsn196SimplesIbsCbs = {
  kind: 'news',
  slug: 'cgsn-196-simples-nacional-cbs-ibs-entram-em-2027-e-vendas-nao-recebidas-vao-para-dezembro',
  title:
    'Resolução CGSN 196: CBS e IBS entram no Simples em 2027 e vendas não recebidas em 2026 vão para a apuração de dezembro',
  description:
    'O Comitê Gestor do Simples publicou a Resolução 196, com CBS e IBS a partir de 1/1/2027, regime de caixa encerrado em 2026 e Defis até 31/3/2027.',
  category: 'financas',
  coverImage: {
    src: '/images/news/cgsn-196-simples-nacional-cbs-ibs-entram-em-2027-e-vendas-nao-recebidas-vao-para-dezembro.jpg',
    alt: 'Documento do Simples Nacional com a Resolução CGSN 196 ao lado de um calendário de janeiro de 2027 com o dia 1 marcado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-24',
  updatedAt: '2026-11-24',
  tags: [
    'simples-nacional',
    'mei',
    'reforma-tributaria',
    'cbs',
    'ibs',
    'financas',
  ],
  featuredCalculators: ['simples-nacional', 'das-limite-mei', 'fator-r'],
  highlights: [
    {
      value: '1/1/2027',
      label: 'CBS e IBS passam a valer',
      note: 'Transição gradual de 2027 a 2033.',
    },
    {
      value: '31/12/2026',
      label: 'Fim do regime de caixa',
      note: 'O que não foi recebido entra em dezembro.',
    },
    {
      value: '31/3/2027',
      label: 'Prazo da Defis 2026',
      note: 'Entrega pelo módulo PGDAS-D 2018.',
    },
  ],
  sections: [
    {
      heading: 'O que a Resolução CGSN 196 muda para quem está no Simples',
      paragraphs: [
        'O Comitê Gestor do Simples Nacional (CGSN) publicou a Resolução CGSN nº 196, de 16 de novembro de 2026, e a Receita Federal divulgou o resumo em 24/11. A norma adapta o Simples Nacional à Contribuição sobre Bens e Serviços (CBS) e ao Imposto sobre Bens e Serviços (IBS), os novos tributos da reforma do consumo.',
        'As empresas continuam recolhendo tudo numa guia única, mas o sistema passa a considerar a nova estrutura. As tabelas do Simples são atualizadas para a entrada gradual de CBS e IBS, com mudanças na composição das alíquotas e na divisão do que é arrecadado entre os tributos. As alterações ligadas a CBS e IBS valem a partir de 1º de janeiro de 2027, dentro de uma transição que vai de 2027 a 2033.',
        'Esta notícia traz um ponto novo em relação às publicações anteriores do portal sobre as opções do Simples em 2027: a resolução já está no Diário Oficial e fixa regras práticas de apuração, que valem para qualquer microempresa e empresa de pequeno porte optante.',
      ],
    },
    {
      heading:
        'Regime de caixa acaba em 2026: o que fazer com o que ainda não recebeu',
      image: {
        src: '/images/news/cgsn-196-simples-nacional-cbs-ibs-entram-em-2027-e-vendas-nao-recebidas-vao-para-dezembro-detalhe.jpg',
        alt: 'Detalhe do documento: resolução CGSN 196, novos tributos IBS e CBS, vigência em 1/1/2027 e Defis 2026 em 31/3/2027.',
        caption:
          'Resumo das datas da Resolução CGSN 196, publicada em 16/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A regra geral passa a ser o reconhecimento da receita no momento do faturamento, ou seja, quando o documento fiscal é emitido. Para quem ainda usava o regime de caixa, a resolução traz uma regra de transição: valores relativos a operações feitas até 31/12/2026 e não recebidos até essa data devem entrar na apuração de dezembro de 2026. Recebimentos posteriores não geram nova tributação.',
        'Exemplo: uma empresa emitiu notas de R$ 20.000 em outubro de 2026 e, até 31/12, recebeu só R$ 12.000. Os R$ 8.000 ainda a receber entram na receita de dezembro de 2026. Quando o cliente pagar, em janeiro, esse dinheiro não é tributado de novo. O efeito prático é antecipar o imposto sobre esses R$ 8.000, por isso vale planejar o caixa de dezembro.',
      ],
      table: {
        caption: 'Exemplo de transição do regime de caixa (valores fictícios)',
        columns: ['Item', 'Valor', 'Tratamento'],
        rows: [
          [
            'Notas emitidas em outubro/2026',
            'R$ 20.000',
            'Operação feita até 31/12',
          ],
          [
            'Recebido até 31/12/2026',
            'R$ 12.000',
            'Entra na apuração do mês do recebimento',
          ],
          [
            'A receber em 31/12/2026',
            'R$ 8.000',
            'Entra na apuração de dezembro/2026',
          ],
          ['Recebido em janeiro/2027', 'R$ 8.000', 'Sem nova tributação'],
        ],
      },
    },
    {
      heading: 'Quem vende para órgãos públicos e quando entregar a Defis',
      paragraphs: [
        'Microempresas e empresas de pequeno porte que vendem ou prestam serviços a órgãos públicos deverão identificar essas receitas de forma específica nas declarações. A informação serve para destinar corretamente as parcelas de IBS e CBS aos entes que contrataram.',
        'A Declaração de Informações Socioeconômicas e Fiscais (Defis) do ano-calendário de 2026 deve ser entregue até 31 de março de 2027, pelo módulo PGDAS-D 2018. Quem fechou o ano com vendas a prazo deve levantar agora as notas emitidas e os recebimentos de cada mês para não errar a apuração de dezembro.',
      ],
    },
    {
      heading: 'O que conferir até o fim do ano',
      paragraphs: [
        'Separe as notas fiscais emitidas até 31/12 que ainda não foram pagas e converse com o contador sobre o valor que entrará em dezembro. Verifique se o sistema de emissão de notas e o PGDAS-D estão atualizados para a nova estrutura de 2027. Quem presta serviço a prefeituras, estados ou ao governo federal deve checar como identificar essas receitas.',
        'A Receita orienta empresários, contadores e contribuintes a acompanhar os canais oficiais do Simples Nacional. Para simular o imposto, use as calculadoras do Simples Nacional, do limite do MEI e do Fator R.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando CBS e IBS passam a valer no Simples Nacional?',
      answer:
        'As alterações da Resolução CGSN 196 ligadas a CBS e IBS produzem efeitos a partir de 1º de janeiro de 2027, dentro de uma transição gradual que vai de 2027 a 2033.',
    },
    {
      question: 'O que acontece com as vendas que não recebi até 31/12/2026?',
      answer:
        'Valores de operações feitas até 31/12/2026 e não recebidos até essa data devem ser incluídos na apuração de dezembro de 2026. Recebimentos posteriores não geram nova tributação.',
    },
    {
      question: 'Até quando entregar a Defis de 2026?',
      answer:
        'Até 31 de março de 2027, pelo módulo PGDAS-D 2018, segundo a resolução.',
    },
  ],
  sources: [
    {
      label:
        'Receita Federal: Comitê Gestor do Simples Nacional publica novas regras para o Simples Nacional e para a transição da Reforma Tributária',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/comite-gestor-do-simples-nacional-publica-novas-regras-para-o-simples-nacional-e-para-a-transicao-da-reforma-tributaria',
    },
    {
      label:
        'Agência Gov: Publicadas as novas regras para o Simples Nacional e a transição da Reforma Tributária',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/comite-gestor-do-simples-nacional-publica-novas-regras-para-o-simples-nacional-e-para-a-transicao-da-reforma-tributaria',
    },
    {
      label: 'Portal do Simples Nacional: notícias do CGSN',
      url: 'https://www8.receita.fazenda.gov.br/simplesnacional/',
    },
  ],
} as const satisfies NewsDocument;
