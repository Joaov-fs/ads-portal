import type { NewsDocument } from '../../types';

export const newsVotarValeComoProvaDeVidaDoInss = {
  kind: 'news',
  slug: 'votar-vale-como-prova-de-vida-do-inss-veja-quem-nao-precisa-fazer',
  title:
    'Votar vale como prova de vida do INSS: veja quem não precisa fazer o procedimento em 2026',
  description:
    'O comparecimento às urnas é repassado pela Justiça Eleitoral ao INSS e conta como prova de vida. Quem não votou não tem o benefício bloqueado só por isso.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-05',
  updatedAt: '2026-10-05',
  tags: [
    'inss',
    'prova-de-vida',
    'aposentadoria',
    'pensao',
    'bpc',
    'meu-inss',
    'beneficios',
  ],
  featuredCalculators: ['inss', 'bpc'],
  highlights: [
    {
      value: '40 milhões',
      label: 'Beneficiários com prova de vida anual',
      note: 'Número informado pelo INSS para os benefícios ativos.',
    },
    {
      value: '4/10',
      label: 'Primeiro turno das eleições de 2026',
      note: 'O comparecimento às urnas é repassado ao INSS.',
    },
    {
      value: '5 milhões',
      label: 'Provas de vida atualizadas em 2024',
      note: 'Foram feitas por meio dos dados eleitorais, segundo o INSS.',
    },
  ],
  sections: [
    {
      heading: 'O que muda para quem votou no domingo',
      paragraphs: [
        'O INSS informa que o comparecimento às urnas vale como prova de vida automática. A Justiça Eleitoral repassa ao instituto os dados de quem compareceu à votação, e o INSS registra a confirmação sem que o aposentado ou o pensionista precise ir a uma agência, ao banco ou ao aplicativo.',
        'O primeiro turno das eleições de 2026 foi no domingo, 4 de outubro. Se houver segundo turno, ele está marcado para 25 de outubro, e o comparecimento também pode ser usado. Quem votou não precisa levar comprovante nem pedir atualização: o cruzamento de dados é feito entre os órgãos.',
        'A regra vale para aposentadorias, pensões por morte e para o Benefício de Prestação Continuada (BPC), os benefícios que passam pela prova de vida anual. O INSS calcula que cerca de 40 milhões de beneficiários ativos estejam sujeitos a esse tipo de verificação.',
      ],
    },
    {
      heading: 'De onde vem essa regra',
      paragraphs: [
        'A Lei 13.846/2019 passou ao Estado a responsabilidade de verificar de forma ativa se o beneficiário está vivo, em vez de depender só de uma ida do segurado ao banco. A Portaria PRES/INSS nº 1.408/2022 listou o comparecimento à votação entre as bases usadas para essa confirmação.',
        'Do lado da Justiça Eleitoral, a Resolução-TSE nº 23.656/2021 trata do acesso às informações dos sistemas eleitorais. O Tribunal Superior Eleitoral informa que mantém um serviço de consulta que permite ao INSS verificar se o beneficiário compareceu à seção eleitoral.',
        'Não é uma novidade total. O compartilhamento de dados entre a Justiça Eleitoral e o INSS começou em 2024, e naquele ano o INSS registrou 20.957.288 comparecimentos eleitorais cruzados com a sua base. Esses dados serviram para atualizar cerca de 5 milhões de provas de vida.',
      ],
      table: {
        caption: 'Números informados pelo INSS',
        columns: ['Indicador', 'Valor'],
        rows: [
          [
            'Beneficiários ativos sujeitos à prova de vida',
            'Cerca de 40 milhões',
          ],
          ['Comparecimentos eleitorais cruzados em 2024', '20.957.288'],
          [
            'Provas de vida atualizadas por dados eleitorais em 2024',
            'Cerca de 5 milhões',
          ],
        ],
      },
    },
    {
      heading: 'Quanto isso representa na prática',
      paragraphs: [
        'Com os números do próprio INSS, dá para dimensionar o alcance. Cerca de 5 milhões de provas de vida atualizadas em 2024 por dados eleitorais, sobre uma base de aproximadamente 40 milhões de beneficiários, equivalem a 12,5% da base, ou cerca de um em cada oito beneficiários. A conta é: 5 milhões divididos por 40 milhões dão 0,125.',
        'É uma ordem de grandeza, e não uma previsão para 2026. O resultado deste ano depende de quantos beneficiários efetivamente votaram e de quantos dados chegarem ao INSS. O número exato só o instituto pode informar.',
        'Também vale lembrar que a prova de vida não muda o valor do benefício. Ela serve para confirmar que o pagamento continua sendo feito ao titular. Para ver quanto cada benefício paga e como é o desconto de quem ainda contribui, use a calculadora do INSS e a do BPC.',
      ],
    },
    {
      heading: 'E quem não votou ou não é obrigado a votar?',
      paragraphs: [
        'O INSS e o TSE deixam claro que quem não votou não terá o benefício bloqueado apenas por isso. O voto é facultativo para quem tem mais de 70 anos, e muitos beneficiários estão nesse grupo. Para eles, a ausência nas urnas não gera problema no pagamento.',
        'Quando não há o registro de voto, o INSS usa o sistema Siris, que cruza diversas bases públicas à procura de sinais de que o beneficiário está vivo. Entre os registros possíveis estão a emissão de documentos, o atendimento em órgãos do governo e outras movimentações em serviços públicos.',
        'Só quando nenhuma dessas bases traz confirmação o INSS entra em contato com o beneficiário para que ele regularize a situação. Ou seja, a prova de vida presencial ou pelo aplicativo passou a ser exceção e não mais a regra, e o INSS também informa que a confirmação não depende exclusivamente do voto.',
      ],
    },
    {
      heading: 'O que fazer para evitar problemas e golpes',
      paragraphs: [
        'O primeiro cuidado é manter o cadastro atualizado no Meu INSS, com telefone e e-mail corretos, para receber qualquer aviso. O guia sobre como usar o Meu INSS e consultar o CNIS mostra como acessar a conta e conferir o benefício.',
        'O segundo é desconfiar de mensagens que cobram taxa para registrar a prova de vida, pedem senha ou levam a páginas desconhecidas. Se o INSS precisar de alguma providência, o aviso aparece pelos canais oficiais, como o Meu INSS e a Central 135.',
        'Em caso de dúvida sobre a situação do benefício, o melhor caminho é consultar o aplicativo Meu INSS ou ligar para a Central 135. Quem já votou no primeiro turno não precisa fazer mais nada.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem votou em 4 de outubro precisa fazer a prova de vida?',
      answer:
        'Não. O INSS informa que o comparecimento às urnas vale como prova de vida automática, sem necessidade de ir a uma agência ou ao banco.',
    },
    {
      question: 'Quem não votou terá o benefício bloqueado?',
      answer:
        'Não por esse motivo. O INSS usa outras bases públicas para confirmar a prova de vida e só procura o beneficiário se não encontrar nenhum registro.',
    },
    {
      question: 'O voto vale para BPC e pensão por morte?',
      answer:
        'Sim. A regra vale para aposentadorias, pensões por morte e BPC, conforme o INSS.',
    },
  ],
  sources: [
    {
      label:
        'INSS: Comparecimento às urnas vale como Prova de Vida automática no INSS (publicada em 18/9/2026 e atualizada em 1º/10/2026)',
    },
    {
      label:
        'Tribunal Superior Eleitoral: Comparecimento à votação nas Eleições 2026 pode ser utilizado como prova de vida do INSS (22/9/2026)',
    },
    { label: 'Lei 13.846/2019 e Portaria PRES/INSS nº 1.408/2022' },
  ],
} as const satisfies NewsDocument;
