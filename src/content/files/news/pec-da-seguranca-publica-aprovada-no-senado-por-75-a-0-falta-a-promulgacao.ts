import type { NewsDocument } from '../../types';

export const newsPecSegurancaSenado = {
  kind: 'news',
  slug: 'pec-da-seguranca-publica-aprovada-no-senado-por-75-a-0-falta-a-promulgacao',
  title:
    'PEC da Segurança Pública é aprovada no Senado por 75 a 0 e falta a promulgação: o que muda',
  description:
    'O Senado aprovou em 3/11 a PEC da Segurança Pública, sem reduzir a maioridade penal. Veja o que muda no orçamento, nas polícias e o que falta para valer.',
  category: 'politica',
  coverImage: {
    src: '/images/news/pec-da-seguranca-publica-aprovada-no-senado-por-75-a-0-falta-a-promulgacao.jpg',
    alt: 'Documento com os placares de 73 a 0 e 75 a 0, etiqueta 75 a 0, carimbo de aprovada e celular com a mensagem de PEC aprovada no Senado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-08',
  updatedAt: '2026-11-08',
  tags: ['pec', 'seguranca-publica', 'senado', 'congresso', 'politica'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '75 a 0',
      label: 'Placar no 2º turno do Senado',
      note: 'No 1º turno foram 73 votos a favor e nenhum contra.',
    },
    {
      value: '3/11',
      label: 'Data da votação no Senado',
      note: 'O texto segue para a promulgação pelo Congresso.',
    },
    {
      value: '50%',
      label: 'Fundos repassados a estados e municípios',
      note: 'Vale para o FNSP e o Funpen, com exceções.',
    },
    {
      value: '10%',
      label: 'Superávit do Fundo Social',
      note: 'Destinado aos fundos da segurança pública.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado aprovou e o que falta para valer',
      image: {
        src: '/images/news/pec-da-seguranca-publica-aprovada-no-senado-por-75-a-0-falta-a-promulgacao-detalhe.jpg',
        alt: 'Close do documento com os placares da PEC da Segurança Pública, a etiqueta 75 a 0 e o carimbo de aprovada.',
        caption:
          'Os dois turnos no Senado terminaram sem nenhum voto contrário.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Na noite de 3 de novembro de 2026, o Senado aprovou em dois turnos a Proposta de Emenda à Constituição da Segurança Pública. No primeiro turno foram 73 votos favoráveis e nenhum contrário. No segundo, 75 favoráveis e nenhum contrário. Uma PEC precisa de ao menos 49 votos em cada turno.',
        'A proposta é de autoria do Poder Executivo e teve como relator o senador Rogério Carvalho (PT-SE). O texto aprovado repete o conteúdo que a Câmara dos Deputados já havia votado, por isso não precisa voltar à Câmara. Segundo a Agência Brasil, o próximo passo é a promulgação pelo Congresso Nacional, sem data informada até 8/11. Só depois da promulgação a emenda passa a fazer parte da Constituição.',
      ],
    },
    {
      heading: 'O que a PEC muda na prática',
      paragraphs: [
        'A PEC coloca na Constituição o Sistema Único de Segurança Pública (SUSP), com atuação em regime de cooperação entre União, estados e municípios. Ela também endurece as regras contra o crime organizado: prevê penas mais duras e regimes especiais de prisão para chefes de facções e milícias, com unidades de segurança máxima e restrição à progressão de pena, além de medidas contra o patrimônio obtido com o crime e responsabilização de empresas envolvidas.',
        'Outras mudanças são a proteção a denunciantes e seus familiares, a possibilidade de criar polícias municipais de natureza civil, com controle externo do Ministério Público, e a ampliação das atribuições da Polícia Rodoviária Federal. O texto cria ainda o Sistema de Políticas Penais, responsável pelo sistema prisional.',
      ],
      table: {
        caption: 'Principais pontos da PEC, segundo a Agência Brasil',
        columns: ['Tema', 'O que prevê'],
        rows: [
          ['SUSP', 'Passa a constar da Constituição (art. 144)'],
          ['Facções e milícias', 'Penas mais duras e regimes especiais de prisão'],
          ['Polícias municipais', 'Podem ser criadas, com controle do Ministério Público'],
          ['PRF', 'Atribuições ampliadas'],
          ['Sistema prisional', 'Cria o Sistema de Políticas Penais'],
        ],
      },
    },
    {
      heading: 'Dinheiro: 50% dos fundos e 10% do Fundo Social',
      paragraphs: [
        'A PEC aumenta a vinculação de recursos do orçamento público para a segurança. Metade (50%) dos recursos do Fundo Nacional de Segurança Pública (FNSP) e do Fundo Penitenciário Nacional (Funpen) deve ser repassada pela União a estados e municípios, com exclusão de despesas de custeio e investimento da polícia penitenciária nacional, no caso do Funpen.',
        'Também passam a ser destinados aos fundos da segurança 10% do superávit financeiro anual do Fundo Social, que é abastecido com receitas do pré-sal. Para o cidadão, o efeito esperado está na capacidade de estados e cidades investirem em polícia e prisões, mas o valor em reais dependerá do que cada fundo arrecadar a cada ano. Por exemplo, em um fundo com R$ 1 bilhão disponível, 50% equivalem a R$ 500 milhões, o que pode ser conferido na calculadora de porcentagem. O número é apenas uma ilustração da conta, não uma previsão.',
      ],
    },
    {
      heading: 'Maioridade penal ficou de fora',
      paragraphs: [
        'Emendas de plenário propunham reduzir a maioridade penal de 18 para 16 anos, ou até 14 em crimes graves. O relator não as acolheu no texto da PEC e recomendou que virassem propostas separadas. O requerimento para separá-las foi aprovado por 38 votos a 36, e elas terão tramitação própria.',
        'Na prática, a maioridade penal continua em 18 anos. Qualquer mudança dependeria de uma nova proposta aprovada pelo Congresso. Também foram rejeitadas pelo relator emendas sobre o acesso das Forças Armadas ao FNSP e a inclusão de agentes de trânsito entre os órgãos de segurança pública.',
      ],
    },
  ],
  faq: [
    {
      question: 'A PEC da Segurança Pública já está valendo?',
      answer:
        'Não. Ela foi aprovada pelo Senado em 3/11 e depende da promulgação pelo Congresso Nacional, que não tinha data informada até 8/11.',
    },
    {
      question: 'A PEC reduziu a maioridade penal?',
      answer:
        'Não. As emendas sobre o tema foram separadas do texto e terão tramitação própria. A maioridade penal segue em 18 anos.',
    },
    {
      question: 'A PEC precisa voltar à Câmara dos Deputados?',
      answer:
        'Segundo a Agência Brasil, o texto repete o que a Câmara já aprovou e segue para a promulgação, sem retornar à Câmara.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Senado aprova PEC da Segurança Pública sem redução da maioridade penal',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-11/senado-aprova-pec-da-seguranca-publica-sem-reducao-da-maioridade-penal',
    },
    {
      label: 'Senado Federal: Agência Senado',
      url: 'https://www12.senado.leg.br/noticias',
    },
  ],
} as const satisfies NewsDocument;
