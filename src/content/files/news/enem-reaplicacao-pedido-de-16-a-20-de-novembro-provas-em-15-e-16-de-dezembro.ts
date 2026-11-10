import type { NewsDocument } from '../../types';

export const newsEnemReaplicacao2026 = {
  kind: 'news',
  slug: 'enem-reaplicacao-pedido-de-16-a-20-de-novembro-provas-em-15-e-16-de-dezembro',
  title:
    'Enem 2026: pedido de reaplicação vai de 16 a 20 de novembro e novas provas são em 15 e 16 de dezembro',
  description:
    'Quem perdeu o 1º dia do Enem por problema previsto no edital pode pedir reaplicação de 16 a 20/11. Veja quem tem direito, como pedir e a ausência de 32%.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/enem-reaplicacao-pedido-de-16-a-20-de-novembro-provas-em-15-e-16-de-dezembro.jpg',
    alt: 'Documento sobre a reaplicação do Enem, calendário de dezembro com os dias 15 e 16 marcados, etiqueta 15 e 16/12 e carimbo com o prazo do pedido até 20/11.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-10',
  updatedAt: '2026-11-10',
  tags: ['enem', 'inep', 'reaplicacao', 'educacao', 'prazos'],
  featuredCalculators: ['contador-de-dias', 'porcentagem'],
  highlights: [
    {
      value: '16 a 20/11',
      label: 'Pedido de reaplicação',
      note: 'Pela Página do Participante, com login Gov.br.',
    },
    {
      value: '15 e 16/12',
      label: 'Novas provas',
      note: 'Uma única reaplicação por dia de prova.',
    },
    {
      value: '32%',
      label: 'Ausência no 1º dia',
      note: 'Entre mais de 5,05 milhões de inscritos confirmados. Em 2025, foi 27%.',
    },
    {
      value: '39',
      label: 'Locais com falta de energia',
      note: '36 no Rio de Janeiro, 2 no Amapá e 1 em Minas Gerais.',
    },
  ],
  sections: [
    {
      heading: 'Quem pode pedir a reaplicação do Enem 2026?',
      image: {
        src: '/images/news/enem-reaplicacao-pedido-de-16-a-20-de-novembro-provas-em-15-e-16-de-dezembro-detalhe.jpg',
        alt: 'Close do documento com as datas do pedido, da reaplicação e os números do primeiro dia.',
        caption:
          'O pedido tem só cinco dias, de 16 a 20 de novembro, e as provas novas ficam para 15 e 16 de dezembro.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Quem perdeu o primeiro dia do Enem, realizado em 8 de novembro, e se enquadra em uma das situações previstas no edital pode pedir para refazer a prova. O pedido vale somente para o dia em que o participante esteve ausente. Quem faltou no dia 8 faz normalmente as provas de 15 de novembro e solicita reaplicação apenas do primeiro dia.',
        'O Inep analisa cada pedido individualmente. Ter direito não é automático: é preciso estar em uma das categorias do edital e comprovar a condição com documento.',
        'Segundo o ministro da Educação, Leonardo Barchini, as novas provas estão agendadas para 15 e 16 de dezembro, com uma única reaplicação por dia de prova.',
      ],
    },
    {
      heading: 'Quais situações dão direito a refazer a prova?',
      paragraphs: [
        'O edital prevê dois grupos. O primeiro reúne problemas logísticos durante a aplicação: desastres naturais que comprometam a infraestrutura do local, falta de energia que prejudique a visibilidade da prova e erro no procedimento de aplicação que cause prejuízo comprovado ao participante.',
        'O segundo grupo é o de doenças infectocontagiosas contraídas na semana anterior à prova. Entram tuberculose, coqueluche, difteria, doença invasiva por Haemophilus influenzae, doença meningocócica e outras meningites, mpox, influenza humana A e B, poliomielite por poliovírus selvagem, sarampo, rubéola, varicela (catapora) e covid-19.',
        'Não têm direito à reaplicação os participantes que, no dia 8, alegaram indisposição ou problema de saúde e saíram da sala em definitivo sem concluir as provas.',
      ],
      table: {
        caption: 'Quem tem direito e quem não tem',
        columns: ['Situação', 'Reaplicação'],
        rows: [
          [
            'Falta de energia que prejudicou a visibilidade',
            'Sim, com análise',
          ],
          ['Desastre natural que afetou o local de prova', 'Sim, com análise'],
          ['Doença da lista do edital na semana anterior', 'Sim, com laudo'],
          ['Saiu da sala por indisposição sem concluir', 'Não'],
        ],
      },
    },
    {
      heading: 'Como fazer o pedido entre 16 e 20 de novembro?',
      paragraphs: [
        'O pedido é feito apenas na Página do Participante do Enem, com login da conta Gov.br. Pedidos feitos em outro endereço ou fora do período, de 16 a 20 de novembro, não serão aceitos.',
        'É obrigatório anexar um documento legível que comprove a condição alegada, como um laudo médico, no caso de doença. Os formatos aceitos são PDF, PNG ou JPG, com até 2 MB por arquivo.',
        'O MEC registrou falta de energia em 39 locais de prova: 36 no Rio de Janeiro, 2 no Amapá e 1 em Minas Gerais. Os candidatos desses locais têm a reaplicação garantida, segundo a informação divulgada.',
        'Para não perder o prazo, conte os dias com antecedência. O período é curto: começa em 16/11, um dia depois do segundo dia de provas, e termina em 20/11.',
      ],
    },
    {
      heading: 'Quantos faltaram ao 1º dia do Enem?',
      paragraphs: [
        'A taxa de ausência no primeiro dia foi de 32% entre os mais de 5,05 milhões de inscritos confirmados. Em 2025, a taxa foi de 27%.',
        'Uma conta simples mostra o tamanho do número: 32% de 5,05 milhões equivale a cerca de 1,62 milhão de inscritos ausentes, e os outros 68%, cerca de 3,43 milhões, compareceram. Com 27%, como em 2025, a ausência seria de cerca de 1,36 milhão. Os valores são estimativas feitas a partir do percentual e do total de inscritos.',
        'O segundo dia de provas é em 15 de novembro, com Ciências da Natureza e Matemática, 45 questões em cada área. Os portões abrem às 12h e fecham às 13h, e a prova começa às 13h30 e termina às 18h30, no horário de Brasília. Os gabaritos saem no portal do Inep até o 10º dia útil após o segundo dia de aplicação.',
      ],
    },
  ],
  faq: [
    {
      question:
        'Faltei ao primeiro dia por outro motivo. Posso pedir reaplicação?',
      answer:
        'Só se o motivo estiver entre as situações do edital, como problema logístico ou doença da lista na semana anterior, e com documento que comprove. Faltar por outro motivo não dá direito à reaplicação.',
    },
    {
      question: 'Preciso refazer também o segundo dia?',
      answer:
        'Não. Quem faltou ao dia 8 faz as provas de 15 de novembro e pede reaplicação somente do primeiro dia.',
    },
    {
      question: 'Onde faço o pedido?',
      answer:
        'Na Página do Participante do Enem, com login Gov.br, de 16 a 20 de novembro. Pedidos feitos fora desse endereço ou do período não são aceitos.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Enem 2026, saiba quem tem direito à reaplicação do exame',
      url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-11/enem-2026-saiba-quem-tem-direito-a-reaplicacao-do-exame',
    },
    {
      label:
        'Agência Brasil: falta uma semana para o Enem 2026, horários e o que levar',
      url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-11/falta-uma-semana-para-o-enem-2026-veja-horarios-e-o-que-levar',
    },
    {
      label: 'Inep: participantes concluem primeiro dia do Enem 2026',
      url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/participantes-concluem-primeiro-dia-do-enem-2026',
    },
  ],
} as const satisfies NewsDocument;
