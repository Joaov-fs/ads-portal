import type { NewsDocument } from '../../types';

export const newsAposentadoria2027IdadePontos = {
  kind: 'news',
  slug: 'aposentadoria-2027-mulheres-60-anos-ou-94-pontos-e-homens-65-ou-104-pontos',
  title:
    'Aposentadoria em 2027: idade mínima vai a 60 anos (mulheres) e 65 (homens) e a pontuação sobe para 94 e 104',
  description:
    'INSS e Previdência explicam os ajustes de 1/1/2027 nas regras de transição da reforma de 2019: idade, pontos, pedágios e quem tem direito adquirido.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/aposentadoria-2027-mulheres-60-anos-ou-94-pontos-e-homens-65-ou-104-pontos.jpg',
    alt: 'Documento com as regras de aposentadoria de 2027, calendário de janeiro de 2027 com o dia 1 marcado e celular com o simulador do Meu INSS.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: ['aposentadoria', 'inss', 'previdencia', 'regra-de-transicao', '2027'],
  featuredCalculators: ['inss', 'contador-de-dias', 'inss-autonomo'],
  highlights: [
    {
      value: '60 e 65',
      label: 'Idade mínima em 2027',
      note: 'Mulheres e homens, com 30 e 35 anos de contribuição.',
    },
    {
      value: '94 e 104',
      label: 'Pontos em 2027',
      note: 'Em 2026 eram 93 e 103.',
    },
    {
      value: '31/12/2026',
      label: 'Limite do direito adquirido',
      note: 'Quem cumprir tudo até lá mantém a regra daquele ano.',
    },
  ],
  sections: [
    {
      heading: 'O que muda para quem se aposenta a partir de 1/1/2027',
      image: {
        src: '/images/news/aposentadoria-2027-mulheres-60-anos-ou-94-pontos-e-homens-65-ou-104-pontos-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com as idades de 60 e 65 anos e as pontuações de 94 e 104 para 2027.',
        caption: 'Os números de 2027 conforme o aviso do INSS de 26/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Em 26/11, o INSS e o Ministério da Previdência Social divulgaram as regras de aposentadoria que valem a partir de 1/1/2027. O ministério foi direto: as regras não mudaram. O que acontece é a aplicação automática das regras de transição da Emenda Constitucional 103, de novembro de 2019, que sobem um degrau a cada ano.',
        'Para quem já contribuía antes de 13/11/2019 e usa a regra de idade mínima progressiva, a exigência passa de 59 anos e 6 meses para 60 anos (mulheres) e de 64 anos e 6 meses para 65 anos (homens). O tempo mínimo de contribuição continua em 30 anos para elas e 35 para eles.',
        'Na regra de pontos, que soma a idade com o tempo de contribuição, a exigência vai de 93 para 94 pontos (mulheres) e de 103 para 104 pontos (homens). O mínimo de 30 e 35 anos de contribuição também vale aqui. O INSS considera frações de idade e de contribuição, contadas em dias.',
      ],
      table: {
        caption:
          'Regras de transição do INSS em 2026 e 2027 (aposentadoria geral)',
        columns: [
          'Regra',
          'Mulheres 2026',
          'Mulheres 2027',
          'Homens 2026',
          'Homens 2027',
        ],
        rows: [
          [
            'Idade mínima',
            '59 anos e 6 meses',
            '60 anos',
            '64 anos e 6 meses',
            '65 anos',
          ],
          ['Pontos', '93', '94', '103', '104'],
          ['Contribuição mínima', '30 anos', '30 anos', '35 anos', '35 anos'],
        ],
      },
    },
    {
      heading: 'Exemplos: quem se encaixa e quem fica a um ponto',
      paragraphs: [
        'Uma mulher de 60 anos com 34 anos de contribuição soma 94 pontos e cumpre o mínimo de 30 anos: atinge a regra de pontos de 2027. Um homem de 65 anos com 39 anos de contribuição soma 104 pontos e também se encaixa.',
        'A conta mostra o efeito do degrau. Um homem de 64 anos com 39 anos de contribuição soma 103 pontos: era suficiente em 2026, mas em 2027 falta 1 ponto e ele não atinge os 65 anos da regra de idade. Se completou todos os requisitos até 31/12/2026, o direito adquirido mantém a regra daquele ano e o pedido pode ser feito depois.',
        'Já a segurada de 59 anos com 35 anos de contribuição tem direito pela regra de pontos, porque soma 94 e cumpre o mínimo, mesmo sem ter 60 anos. Quem não completa os requisitos de uma regra pode se enquadrar em outra, e por isso a simulação individual faz diferença.',
      ],
    },
    {
      heading: 'Pedágios, aposentadoria por idade e professores',
      paragraphs: [
        'Os pedágios não têm ajuste anual. No pedágio de 50%, para quem em 13/11/2019 tinha mais de 28 anos de contribuição (mulheres) ou mais de 33 (homens), não há idade mínima: é preciso cumprir 30 ou 35 anos, mais 50% do tempo que faltava naquela data. Se faltavam 2 anos para um homem, ele precisa contribuir 3 anos no total.',
        'No pedágio de 100%, a idade fixa é de 57 anos (mulheres) e 60 (homens), com os mesmos 30 e 35 anos de contribuição, mais 100% do tempo que faltava. Se faltavam 2 anos para uma mulher, ela deve contribuir 4 anos. A aposentadoria por idade na transição pede 62 anos (mulheres) e 65 (homens), com 15 anos de contribuição. Para quem começou a contribuir a partir de 14/11/2019, a regra programada pede 62 anos e 15 de contribuição para elas e 65 anos e 20 para eles.',
        'Para professores do regime geral, o Ministério da Previdência informa que em 2027 a regra de pontos pede 89 (mulheres, com 25 anos de contribuição) e 99 (homens, com 30 anos). Na regra de idade, são 55 anos e 25 de contribuição para elas e 60 anos e 30 para eles. No pedágio de 100%, a idade fixa é de 52 e 55 anos.',
      ],
    },
    {
      heading: 'Como simular e o que fazer antes de pedir',
      paragraphs: [
        'O INSS e o ministério recomendam usar o simulador do Meu INSS, no site meu.inss.gov.br ou no aplicativo, na opção Simular Aposentadoria. É preciso entrar com a conta gov.br, conferir os dados pessoais e os vínculos e consultar as datas estimadas.',
        'A simulação se baseia no Cadastro Nacional de Informações Sociais (CNIS) e não garante a concessão: a análise final cabe ao INSS no pedido. Por isso, vale conferir se todos os vínculos e contribuições aparecem no CNIS antes de dar entrada. O guia do portal sobre o Meu INSS mostra como consultar o extrato.',
        'Quem tem direito depende de cumprir os requisitos de cada regra. Para estimar o desconto sobre o salário e a contribuição, use as calculadoras de INSS do portal.',
      ],
    },
  ],
  faq: [
    {
      question: 'As regras de aposentadoria mudaram em 2027?',
      answer:
        'Segundo o Ministério da Previdência, não. As regras de transição da EC 103/2019 sobem de forma gradual a cada ano, e 2027 traz mais um degrau de idade e de pontos.',
    },
    {
      question: 'Quem completou os requisitos em 2026 perde o direito?',
      answer:
        'Não. Quem cumprir todos os requisitos de uma modalidade até 31/12/2026 mantém o direito, mesmo com os ajustes de 2027, e pode pedir o benefício depois.',
    },
    {
      question: 'O simulador do Meu INSS garante a aposentadoria?',
      answer:
        'Não. Ele estima datas com base no CNIS, mas a concessão depende da análise do INSS no momento do pedido.',
    },
  ],
  sources: [
    {
      label: 'INSS: INSS 2027, conheça as novas regras para se aposentar',
      url: 'https://www.gov.br/inss/pt-br/noticias/inss-2027-conheca-as-novas-regras-para-se-aposentar',
    },
    {
      label:
        'Ministério da Previdência Social: perguntas e respostas sobre aposentadoria em 2027',
      url: 'https://www.gov.br/previdencia/pt-br/noticias/2026/novembro/o-ministerio-da-previdencia-social-preparou-um-perguntas-e-respostas-sobre-as-regras-para-aposentadoria-em-2027',
    },
    {
      label:
        'Agência Gov: reforma de 2019 traz mudanças para se aposentar no ano que vem',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/inss-2027-conheca-as-novas-regras-para-se-aposentar',
    },
  ],
} as const satisfies NewsDocument;
