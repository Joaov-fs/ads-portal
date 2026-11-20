import type { NewsDocument } from '../../types';

export const newsEscolasFerias2027CopaFeminina = {
  kind: 'news',
  slug: 'escolas-ferias-2027-copa-feminina-pl-3481-senado-aprova-e-vai-a-sancao',
  title:
    'Senado aprova autonomia das escolas para definir as férias de 2027 e o PL 3.481 vai à sanção',
  description:
    'O Senado aprovou em 18/11 o PL 3.481/2026, que libera estados e municípios a ajustar o calendário escolar de 2027, ano da Copa Feminina. Veja o que muda.',
  category: 'politica',
  coverImage: {
    src: '/images/news/escolas-ferias-2027-copa-feminina-pl-3481-senado-aprova-e-vai-a-sancao.jpg',
    alt: 'Documento do calendário escolar de 2027 ao lado de um calendário de junho com os dias 24 a 30 destacados e a faixa 24/6 a 25/7.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-20',
  updatedAt: '2026-11-20',
  tags: ['escolas', 'calendario-escolar', 'ferias', 'senado', 'copa-feminina'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '24/6 a 25/7',
      label: 'Recesso previsto em lei',
      note: 'Regra sancionada em junho, que o projeto flexibiliza.',
    },
    {
      value: '18/11',
      label: 'Aprovação no Senado',
      note: 'O texto segue para a sanção presidencial.',
    },
    {
      value: '32',
      label: 'Seleções na Copa',
      note: 'Torneio em oito cidades brasileiras em 2027.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado aprovou em 18/11',
      paragraphs: [
        'O Plenário do Senado aprovou na quarta-feira (18/11) o PL 3.481/2026, que dá autonomia aos sistemas de ensino estaduais e municipais para ajustar o calendário escolar de 2027 sem a obrigação de que as férias coincidam com a Copa do Mundo Feminina. A relatora foi a senadora Professora Dorinha Seabra (União-TO). O texto segue para a sanção da Presidência da República.',
        'Pela regra geral da Constituição, o presidente tem 15 dias úteis para sancionar ou vetar o texto, contados do recebimento. Até lá, nada muda: o projeto só vale depois de sancionado e publicado no Diário Oficial da União.',
        'O Senado não detalhou o placar na reportagem consultada pelo PortalFina. O que consta é a aprovação do Plenário e o envio do texto à sanção.',
      ],
    },
    {
      heading: 'Qual regra o projeto flexibiliza',
      image: {
        src: '/images/news/escolas-ferias-2027-copa-feminina-pl-3481-senado-aprova-e-vai-a-sancao-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento do calendário escolar de 2027 com o PL 3.481/2026, a aprovação de 18/11 e o recesso de 24/6 a 25/7.',
        caption: 'Os dados principais do projeto aprovado em 18/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Uma lei sancionada em junho obrigava o recesso escolar de meio de ano a ocorrer entre 24 de junho e 25 de julho de 2027, período do torneio. Contando os dois extremos, são 32 dias corridos: sete dias em junho (de 24 a 30) e 25 dias em julho (de 1º a 25).',
        'O PL 3.481/2026 não cancela as férias, e sim devolve a decisão às redes de ensino. Com a mudança, cada estado e cada município poderá montar o próprio calendário de 2027 e escolher quando fica o recesso, em vez de seguir a janela única definida em lei.',
        'A medida trata de calendário e organização das redes. O projeto não cria benefício nem envolve valores em reais.',
      ],
      table: {
        caption: 'Antes e depois do PL 3.481/2026',
        columns: ['Ponto', 'Situação'],
        rows: [
          ['Regra da lei de junho', 'Recesso de 24/6 a 25/7 de 2027'],
          ['Proposta aprovada em 18/11', 'Autonomia de estados e municípios'],
          ['Quem decide o calendário', 'Cada sistema de ensino'],
          ['Próximo passo', 'Sanção ou veto da Presidência'],
        ],
      },
    },
    {
      heading: 'O que muda para pais, alunos e professores',
      paragraphs: [
        'Se o texto for sancionado, o calendário de 2027 da escola do seu filho continua a depender da rede em que ele estuda. Escolas estaduais seguem a secretaria estadual de educação e as municipais seguem a secretaria do município.',
        'Na prática, famílias que já planejam viagens ou cuidados com os filhos em julho de 2027 devem esperar a divulgação do calendário oficial da rede antes de fechar passagens e reservas. O projeto apenas abre a possibilidade de ajuste, e cada rede pode manter ou alterar o recesso.',
        'Para contar quantos dias letivos ou de recesso restam entre duas datas do calendário da escola, use a calculadora de contador de dias do portal.',
      ],
    },
    {
      heading: 'O contexto: a Copa Feminina de 2027 no Brasil',
      paragraphs: [
        'A Copa do Mundo Feminina de 2027 será disputada no Brasil, a primeira vez que o torneio acontece na América do Sul. São 32 seleções e oito cidades-sede: Fortaleza, Recife, Salvador, Belo Horizonte, Rio de Janeiro, São Paulo, Porto Alegre e Brasília.',
        'A lei de junho previa o recesso escolar no período do torneio. O projeto aprovado em 18/11 retira essa obrigação e deixa a escolha com cada sistema de ensino.',
      ],
    },
  ],
  faq: [
    {
      question: 'O PL 3.481/2026 já virou lei?',
      answer:
        'Ainda não. O Senado aprovou o texto em 18/11 e ele segue para a sanção da Presidência da República. Só vale depois de sancionado e publicado.',
    },
    {
      question: 'As férias de julho de 2027 foram canceladas?',
      answer:
        'Não. O projeto não cancela o recesso escolar. Ele permite que cada rede de ensino defina o calendário de 2027 sem a obrigação de coincidir com o período da Copa.',
    },
    {
      question: 'Quem vai definir o calendário da escola do meu filho?',
      answer:
        'A secretaria estadual de educação, para escolas estaduais, e a secretaria do município, para escolas municipais. Confirme no comunicado oficial da sua rede quando o calendário de 2027 for divulgado.',
    },
  ],
  sources: [
    {
      label:
        'Rádio Senado: Senado aprova autonomia de escolas para definir férias em 2027, ano da Copa Feminina',
      url: 'https://www12.senado.leg.br/radio/1/noticia/2026/11/19/senado-aprova-autonomia-de-escolas-para-definir-ferias-em-2027-ano-da-copa-feminina',
    },
    {
      label: 'Senado Federal: tramitação do PL 3.481/2026',
      url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/175679',
    },
  ],
} as const satisfies NewsDocument;
