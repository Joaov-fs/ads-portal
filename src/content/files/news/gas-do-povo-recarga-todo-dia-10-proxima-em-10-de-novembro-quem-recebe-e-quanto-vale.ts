import type { NewsDocument } from '../../types';

export const newsGasDoPovoDia10 = {
  kind: 'news',
  slug: 'gas-do-povo-recarga-todo-dia-10-proxima-em-10-de-novembro-quem-recebe-e-quanto-vale',
  title:
    'Gás do Povo: recarga sai todo dia 10, a próxima é em 10/11; veja quem recebe e quanto vale',
  description:
    'A recarga do Gás do Povo é liberada todo dia 10. Veja quem tem direito, a renda limite de R$ 810,50 por pessoa e quanto o botijão grátis economiza no ano.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/gas-do-povo-recarga-todo-dia-10-proxima-em-10-de-novembro-quem-recebe-e-quanto-vale.jpg',
    alt: 'Documento do Gás do Povo, calendário de novembro com o dia 10 marcado, botijão de 13 kg e etiqueta de R$ 114,88.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-23',
  updatedAt: '2026-10-23',
  tags: [
    'gas-do-povo',
    'gas-de-cozinha',
    'cadunico',
    'beneficios',
    'custo-de-vida',
  ],
  featuredCalculators: ['bolsa-familia', 'porcentagem'],
  highlights: [
    {
      value: '10/11',
      label: 'Próxima liberação da recarga',
      note: 'O vale é liberado todo dia 10 de cada mês.',
    },
    {
      value: 'R$ 810,50',
      label: 'Renda máxima por pessoa',
      note: 'Meio salário mínimo de R$ 1.621.',
    },
    {
      value: 'R$ 114,88',
      label: 'Botijão de 13 kg, média da ANP',
      note: 'Semana de 27/9 a 3/10/2026.',
    },
    {
      value: 'R$ 689',
      label: 'Economia anual de família de 4 ou mais',
      note: 'Seis recargas ao preço médio nacional.',
    },
  ],
  sections: [
    {
      heading: 'Quando sai a recarga e por que o dia 10 importa',
      paragraphs: [
        'O Gás do Povo libera os vales-recarga de botijão de 13 kg todo dia 10 de cada mês, em data fixa para o país inteiro, e não pelo final do NIS como no Bolsa Família. Em outubro de 2026 o dia 10 caiu num sábado. A próxima liberação é em 10/11/2026, uma terça-feira.',
        'A regra de validade é o ponto que mais pega o beneficiário: segundo o governo, a recarga não utilizada dentro do prazo é cancelada quando a nova fica disponível, e os vales não se acumulam. Na prática, quem recebeu o vale de outubro precisa trocar o botijão até 9/11, antes da nova liberação de 10/11.',
        'Atenção: a liberação mensal vale para as famílias que estão na vez do ciclo. Nem toda família recebe um vale a cada mês, como mostra a próxima seção.',
      ],
    },
    {
      heading: 'Quem tem direito e com que frequência recebe',
      image: {
        src: '/images/news/gas-do-povo-recarga-todo-dia-10-proxima-em-10-de-novembro-quem-recebe-e-quanto-vale-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com recarga todo dia 10, próxima em 10/11, renda de até R$ 810,50 por pessoa e botijão médio de R$ 114,88.',
        caption: 'Data da recarga, limite de renda e preço médio do botijão.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Têm direito as famílias inscritas no Cadastro Único com dados atualizados nos últimos 24 meses e renda mensal de até meio salário mínimo por pessoa. Com o salário mínimo de R$ 1.621, o limite é de R$ 810,50 por pessoa. Também é preciso ter o CPF do responsável regularizado na Receita Federal, não estar em averiguação cadastral e não ter indicação de óbito do responsável no Cadastro. Famílias do Bolsa Família com duas ou mais pessoas no mesmo código familiar têm prioridade.',
        'Cumprir os critérios não garante entrada imediata: a inclusão é automática e mensal, pelo Cadastro Único, com prioridade para menor renda e mais integrantes, dentro do orçamento. Não há cadastro específico para o Gás do Povo.',
        'A frequência depende do tamanho da família. Famílias de 2 a 3 pessoas recebem um vale a cada três meses, até quatro por ano. Famílias de 4 ou mais pessoas recebem um vale a cada dois meses, até seis por ano.',
      ],
      table: {
        caption: 'Frequência da recarga por tamanho da família',
        columns: ['Família', 'Intervalo entre vales', 'Máximo por ano'],
        rows: [
          ['2 a 3 pessoas', 'A cada 3 meses', '4 recargas'],
          ['4 ou mais pessoas', 'A cada 2 meses', '6 recargas'],
        ],
      },
    },
    {
      heading: 'Quanto o botijão grátis economiza no ano',
      paragraphs: [
        'O vale cobre 100% do valor do gás. O preço médio nacional do botijão de 13 kg foi de R$ 114,88 na semana de 27/9 a 3/10/2026, segundo a ANP, e varia muito pelo país: a média é de R$ 99,83 no Rio de Janeiro e de R$ 142,04 em Boa Vista.',
        'A conta com o preço médio nacional: uma família de 4 ou mais pessoas, com seis recargas por ano, deixa de gastar R$ 114,88 x 6 = R$ 689,28. Uma família de 2 ou 3 pessoas, com quatro recargas, economiza R$ 114,88 x 4 = R$ 459,52. O valor real depende do preço da sua cidade.',
        'Para checar a renda por pessoa, divida a renda total da família pelo número de moradores. Uma família de 4 pessoas com renda de R$ 3.000 tem R$ 750 por pessoa e está dentro do limite de R$ 810,50. Com R$ 3.400, são R$ 850 por pessoa e a família fica fora.',
      ],
    },
    {
      heading: 'Como consultar e trocar o botijão',
      paragraphs: [
        'A consulta pode ser feita no aplicativo Meu Social, com conta gov.br, no site gasdopovo.mds.gov.br ou no Portal Cidadão da Caixa. Para usar, localize uma revenda credenciada e troque o botijão vazio por um cheio. A revenda não pode cobrar pelo gás, mas pode cobrar taxa de entrega em domicílio ou pelo vasilhame.',
        'Na hora da troca, a identificação pode ser feita com o cartão com chip do Bolsa Família e senha, com o cartão de débito da Caixa vinculado à conta cadastrada e senha, ou com o CPF do responsável mais um código enviado por SMS. Nesse último caso, o celular precisa estar atualizado no aplicativo CAIXA Tem ou nos canais da Caixa.',
        'Quem está perto do prazo de 24 meses sem atualizar os dados deve procurar o CRAS para atualizar o Cadastro Único, para não perder a vez no ciclo.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando sai o próximo Gás do Povo?',
      answer:
        'A recarga é liberada todo dia 10. A próxima liberação é em 10/11/2026, e a recarga de outubro deve ser usada até 9/11, antes de ser substituída pela nova.',
    },
    {
      question: 'Toda família recebe um vale por mês?',
      answer:
        'Não. Famílias de 2 a 3 pessoas recebem um vale a cada três meses, e famílias de 4 ou mais pessoas, a cada dois meses. Tem direito quem cumpre os requisitos, e a inclusão depende do orçamento.',
    },
    {
      question: 'Preciso me cadastrar no Gás do Povo?',
      answer:
        'Não há cadastro específico. A inclusão é automática pelo Cadastro Único, desde que os dados estejam atualizados nos últimos 24 meses e a renda por pessoa seja de até R$ 810,50.',
    },
  ],
  sources: [
    {
      label:
        'Ministério do Desenvolvimento Social: Programa Gás do Povo tem data fixa, será pago sempre no dia 10 de cada mês',
      url: 'https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/programa-gas-do-povo-tem-data-fixa-sera-pago-sempre-no-dia-10-de-cada-mes',
    },
    {
      label:
        'Governo Federal: Gás do Povo, saiba como consultar e usar o vale-recarga de gás de cozinha',
      url: 'https://www.gov.br/mulheres/pt-br/central-de-conteudos/noticias/2026/outubro-defeso-eleitoral/gas-do-povo-saiba-como-consultar-e-usar-o-vale-recarga-de-gas-de-cozinha',
    },
    {
      label: 'Caixa: Programa Gás do Povo',
      url: 'https://www.caixa.gov.br/programas-sociais/programa-gas-do-povo/Paginas/default.aspx',
    },
    {
      label: 'ANP: preços de revenda de gás de cozinha',
      url: 'https://www.gov.br/anp/pt-br',
    },
  ],
} as const satisfies NewsDocument;
