import type { NewsDocument } from '../../types';

export const newsBbGoogleBloqueiamFalsaCentral4004 = {
  kind: 'news',
  slug: 'bb-e-google-bloqueiam-77-mil-chamadas-do-golpe-da-falsa-central-4004-0001',
  title:
    'BB e Google bloqueiam mais de 77 mil chamadas do golpe da falsa central na primeira semana',
  description:
    'Banco do Brasil e Google barram em celulares Android ligações que falsificam o 4004-0001. Veja quais números o banco usa e o que ele nunca pede por telefone.',
  category: 'financas',
  coverImage: {
    src: '/images/news/bb-e-google-bloqueiam-77-mil-chamadas-do-golpe-da-falsa-central-4004-0001.jpg',
    alt: 'Documento sobre o golpe da falsa central, celular com a chamada do número 4004-0001 bloqueada e carimbo de não atenda.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-26',
  updatedAt: '2026-11-26',
  tags: ['golpe', 'banco-do-brasil', 'google', 'android', 'seguranca'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '77 mil',
      label: 'Chamadas bloqueadas',
      note: 'Na primeira semana da iniciativa, segundo o BB.',
    },
    {
      value: '4004-0001',
      label: 'Número que só recebe',
      note: 'Serve para o cliente ligar ao banco, não para o banco ligar.',
    },
    {
      value: '30%',
      label: 'Mais atendimento',
      note: 'Alta aproximada nas chamadas identificadas, nos testes do BB.',
    },
  ],
  sections: [
    {
      heading: 'O que o BB e o Google anunciaram',
      paragraphs: [
        'O Banco do Brasil (BB) e o Google bloquearam mais de 77 mil chamadas fraudulentas na primeira semana de uma iniciativa conjunta contra o chamado golpe da falsa central, informou a Agência Brasil em 26/11. A ação usa recursos de segurança em aparelhos Android para impedir que ligações de criminosos, que falsificam o número 4004-0001, cheguem aos clientes.',
        'O 4004-0001 é o telefone oficial de atendimento do banco e serve para receber ligações dos clientes, não para fazê-las. Por isso, o Google passou a bloquear nos celulares Android as chamadas recebidas que usam esse número como origem. Segundo o BB, o bloqueio preventivo evitou que mais de 77 mil ligações chegassem aos usuários em sete dias.',
      ],
    },
    {
      heading: 'Quais números o banco usa de verdade',
      image: {
        src: '/images/news/bb-e-google-bloqueiam-77-mil-chamadas-do-golpe-da-falsa-central-4004-0001-detalhe.jpg',
        alt: 'Detalhe do documento com o total de chamadas bloqueadas, o prazo, o tipo de golpe e o sistema Android.',
        caption:
          'Dados divulgados pelo BB e pelo Google sobre a primeira semana da iniciativa, conforme a Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Para o cliente ligar ao banco, os números oficiais são o 4004-0001, em capitais e regiões metropolitanas, e o 0800-729-0001, nas demais localidades. Quando é o BB quem liga, o número usado é o 4003-3001, tanto por agências e escritórios de negócios quanto pelo SAC e pelas centrais de relacionamento.',
        'A regra prática, segundo a orientação do banco, é desconfiar e encerrar a chamada se o 4004-0001 aparecer como origem de uma ligação recebida, já que esse número não é usado para ligar aos clientes. Depois, o cliente deve procurar o banco pelos canais oficiais.',
      ],
      table: {
        caption: 'Números de telefone do Banco do Brasil citados na iniciativa',
        columns: ['Número', 'Para que serve'],
        rows: [
          [
            '4004-0001',
            'Cliente liga ao banco (capitais e regiões metropolitanas)',
          ],
          ['0800-729-0001', 'Cliente liga ao banco (demais localidades)'],
          ['4003-3001', 'Número que o banco usa para ligar ao cliente'],
        ],
      },
    },
    {
      heading: 'Origem verificada e o que o banco nunca pede',
      paragraphs: [
        'Desde setembro de 2026, o BB usa a tecnologia de origem verificada nas ligações feitas pelo 4003-3001. Ela aplica uma assinatura digital associada ao telefone do banco, que a operadora confere antes de a chamada chegar. O celular pode exibir que a ligação foi originada pelo BB. A tecnologia é gratuita, não exige aplicativo e, para funcionar por completo, o aparelho deve estar em rede 4G ou 5G. A exibição varia conforme o modelo do celular e a operadora. Nos testes, o banco registrou aumento de cerca de 30% na taxa de atendimento das chamadas identificadas.',
        'O banco afirma que não pede durante ligações senhas ou códigos de autenticação, instalação de aplicativos, acesso a sites externos, dados pessoais nem acesso remoto ao celular. Em caso de dúvida, a recomendação é encerrar a ligação e procurar os canais oficiais. O BB diz ter mais de 80 milhões de clientes e equipes especializadas em monitoramento de ameaças.',
      ],
    },
  ],
  faq: [
    {
      question: 'O bloqueio vale para todos os celulares?',
      answer:
        'A matéria cita o bloqueio em aparelhos Android. Para o iPhone, a notícia não traz informação, então vale a regra de desconfiar de ligação recebida com o 4004-0001.',
    },
    {
      question: 'O Banco do Brasil pode me ligar pedindo senha?',
      answer:
        'Não. O banco afirma que não pede senhas, códigos, instalação de aplicativos, acesso a sites externos, dados pessoais ou acesso remoto ao celular durante chamadas.',
    },
    {
      question:
        'O que fazer se o 4004-0001 aparecer na tela como chamada recebida?',
      answer:
        'Encerrar a ligação, porque esse número serve para receber chamadas, e procurar o banco pelos canais oficiais.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: BB e Google bloqueiam mais de 77 mil chamadas fraudulentas',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/bb-e-google-bloqueiam-mais-de-77-mil-chamadas-fraudulentas',
    },
    { label: 'Banco do Brasil', url: 'https://www.bb.com.br/' },
  ],
} as const satisfies NewsDocument;
