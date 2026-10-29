import type { NewsDocument } from '../../types';

export const newsInssBiometriaFalsoBloqueio = {
  kind: 'news',
  slug: 'inss-biometria-e-golpe-beneficio-nao-sera-bloqueado-para-quem-ja-recebe',
  title:
    'INSS desmente bloqueio por falta de biometria: exigência vale só para pedidos novos desde 21/11/2025',
  description:
    'O INSS diz que é falso o aviso de bloqueio de benefício sem biometria. A regra vale para pedidos novos e ninguém precisa ir à agência. Veja como se proteger.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/inss-biometria-e-golpe-beneficio-nao-sera-bloqueado-para-quem-ja-recebe.jpg',
    alt: 'Documento com as regras da biometria do INSS, cartão de identidade, celular com alerta de golpe e carimbo FALSO sobre fundo mostarda.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-29',
  updatedAt: '2026-10-29',
  tags: [
    'inss',
    'biometria',
    'golpe',
    'aposentadoria',
    'meu-inss',
    'beneficios',
  ],
  featuredCalculators: ['inss'],
  highlights: [
    {
      value: '21/11/2025',
      label: 'Pedidos novos a partir de',
      note: 'Só esses pedidos exigem biometria.',
    },
    {
      value: '80 anos',
      label: 'Idade de isenção',
      note: 'Quem tem mais de 80 anos não precisa.',
    },
    {
      value: '135',
      label: 'Central do INSS',
      note: 'Canal oficial para tirar dúvidas.',
    },
  ],
  sections: [
    {
      heading: 'O que o INSS desmentiu',
      paragraphs: [
        'O INSS publicou em 27/10, e atualizou em 28/10, um esclarecimento sobre uma mensagem que circula na internet e nas redes sociais. O texto diz que o benefício será bloqueado de quem não tiver documento com biometria. Segundo o instituto, a informação é falsa.',
        'A exigência existe, mas tem um alcance bem menor do que o boato sugere: vale somente para pedidos novos, feitos a partir de 21/11/2025. Quem já recebe aposentadoria, pensão ou outro benefício concedido antes dessa data não tem o pagamento suspenso por não ter biometria cadastrada.',
        'Também não é preciso procurar uma agência para fazer o cadastro. O INSS explica que a biometria serve para confirmar a identidade do cidadão com dados de uma base oficial do governo.',
      ],
    },
    {
      heading: 'Quem precisa de biometria e quem está isento',
      image: {
        src: '/images/news/inss-biometria-e-golpe-beneficio-nao-sera-bloqueado-para-quem-ja-recebe-detalhe.jpg',
        alt: 'Detalhe do documento: pedidos novos desde 21/11/2025, quem já recebe sem bloqueio, ir à agência não precisa e mais de 80 anos isento.',
        caption:
          'Resumo das regras divulgadas pelo INSS sobre a biometria nos pedidos de benefício.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A biometria entra no processo de quem faz um pedido novo ao INSS a partir de 21/11/2025. O cadastro não é feito no instituto: ele nasce na emissão de documentos públicos, como a Carteira de Identidade Nacional (CIN), a CNH ou o título de eleitor.',
        'Mesmo para pedidos feitos depois dessa data, há quem fique fora da exigência. A lista divulgada inclui pessoas com mais de 80 anos, migrantes, refugiados e apátridas, e quem está impossibilitado de se deslocar por mais de 30 dias por motivo de saúde. Os pedidos de salário-maternidade, de benefícios por incapacidade e de pensão por morte também não dependem da biometria.',
      ],
      table: {
        caption: 'Biometria no INSS: quem precisa e quem não precisa',
        columns: ['Situação', 'Precisa de biometria?'],
        rows: [
          ['Já recebe benefício concedido antes de 21/11/2025', 'Não'],
          [
            'Pedido novo feito a partir de 21/11/2025',
            'Sim, com as exceções abaixo',
          ],
          ['Mais de 80 anos', 'Não'],
          ['Migrante, refugiado ou apátrida', 'Não'],
          [
            'Impossibilitado de se deslocar por mais de 30 dias por saúde',
            'Não',
          ],
          ['Salário-maternidade, incapacidade e pensão por morte', 'Não'],
        ],
      },
    },
    {
      heading: 'Como o golpe funciona e como se proteger',
      paragraphs: [
        'Golpistas usam o medo de perder o benefício para pressionar a vítima. A mensagem costuma trazer um link para uma página falsa, que pede dados pessoais e bancários. Com essas informações, os criminosos tentam aplicar outras fraudes, como empréstimo consignado em nome do beneficiário.',
        'O INSS lembra três pontos que valem para qualquer contato suspeito. O órgão não envia servidores à casa de cidadãos para fazer comprovação de vida. Não pede senhas, dados bancários nem transferências de dinheiro. E não se deve clicar em links desconhecidos recebidos por mensagem.',
        'Na dúvida, não responda a mensagem. Entre no Meu INSS pelo endereço oficial ou ligue para a Central 135 e confira a situação do benefício. Se o benefício está ativo e o pagamento aparece no extrato, o boato de bloqueio não se aplica ao seu caso.',
      ],
    },
    {
      heading: 'O que fazer se você já clicou no link',
      paragraphs: [
        'Quem informou senha ou dados bancários deve trocar a senha do gov.br e a do aplicativo do banco o quanto antes, e avisar o banco sobre a tentativa de fraude. Vale também conferir no Meu INSS se há empréstimo ou desconto que você não reconhece e contestar o que for indevido.',
        'Exemplo prático: uma aposentada que já recebe o benefício desde antes de 2025 recebe um SMS dizendo que o pagamento será cortado em 48 horas se ela não enviar uma foto do rosto. A mensagem não vem de canal oficial e pede o que o INSS não pede. O caminho certo é ignorar o link e consultar o Meu INSS ou a Central 135.',
        'O guia do PortalFina sobre o Meu INSS mostra como consultar o benefício e o extrato com segurança, e a calculadora de INSS ajuda a conferir o desconto de quem contribui. As duas ferramentas não substituem os canais oficiais para confirmar a situação do seu benefício.',
      ],
    },
  ],
  faq: [
    {
      question: 'Meu benefício será bloqueado se eu não tiver biometria?',
      answer:
        'Não. O INSS afirma que é falsa a informação de bloqueio. A exigência vale apenas para pedidos novos feitos a partir de 21/11/2025.',
    },
    {
      question: 'Preciso ir a uma agência do INSS fazer a biometria?',
      answer:
        'Não. O cadastro biométrico é feito na emissão de documentos públicos, como a CIN, a CNH ou o título de eleitor, e não nas agências do INSS.',
    },
    {
      question: 'Como saber se uma mensagem do INSS é verdadeira?',
      answer:
        'Não clique em links recebidos. Consulte o Meu INSS pelo endereço oficial ou ligue para a Central 135. O INSS não pede senha, dados bancários nem transferência de dinheiro.',
    },
  ],
  sources: [
    {
      label:
        'INSS: esclarece que é falsa a informação de bloqueio de benefício sem documento com biometria, 27/10/2026',
      url: 'https://www.gov.br/inss/pt-br/assuntos/noticias/inss-esclarece-e-falsa-a-informacao-de-que-vai-bloquear-beneficio-de-quem-nao-tiver-documento-com-biometria',
    },
    {
      label:
        'Agência Brasil: INSS alerta para golpes que usam informação falsa sobre biometria, 28/10/2026',
      url: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/inss-alerta-para-golpes-que-usam-informacao-falsa-sobre-biometria',
    },
    {
      label: 'Meu INSS: portal oficial de serviços',
      url: 'https://meu.inss.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
