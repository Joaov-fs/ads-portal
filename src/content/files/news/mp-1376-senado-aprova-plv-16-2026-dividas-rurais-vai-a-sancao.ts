import type { NewsDocument } from '../../types';

export const newsMp1376SenadoSancao2026 = {
  kind: 'news',
  slug: 'mp-1376-senado-aprova-plv-16-2026-dividas-rurais-vai-a-sancao',
  title:
    'Senado aprova MP 1.376 das dívidas rurais, com juros de 5% a 12%, e texto vai à sanção',
  description:
    'O Senado aprovou em 11/11 o PLV 16/2026 da MP 1.376 e retirou o trecho sobre cigarros eletrônicos. Juros ficam entre 5% e 12% ao ano, com 2 anos de carência.',
  category: 'economia',
  coverImage: {
    src: '/images/news/mp-1376-senado-aprova-plv-16-2026-dividas-rurais-vai-a-sancao.jpg',
    alt: 'Documento com MP 1.376/2026, aprovação em 11/11, juros de 5% a 12% ao ano e carência de 2 anos, com etiqueta vai à sanção, moedas, planta e carimbo PLV 16/2026.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-12',
  updatedAt: '2026-11-12',
  tags: ['mp-1376', 'dividas-rurais', 'senado', 'plv-16-2026', 'pronaf'],
  featuredCalculators: ['juros-simples', 'porcentagem'],
  highlights: [
    {
      value: '5% a 12%',
      label: 'Juros ao ano na renegociação',
      note: 'Conforme o perfil do produtor e a perda sofrida.',
    },
    {
      value: '2 anos',
      label: 'Carência, só com juros',
      note: 'Depois entra o principal.',
    },
    {
      value: 'R$ 400 mil',
      label: 'Limite Pronaf, perda padrão',
      note: 'Juros de 6% ao ano nessa faixa.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado aprovou em 11 de novembro',
      paragraphs: [
        'O Plenário do Senado aprovou em 11 de novembro de 2026 a Medida Provisória 1.376/2026, na forma do Projeto de Lei de Conversão (PLV) 16/2026. A MP trata da renegociação de dívidas de produtores rurais e cooperativas atingidos por eventos climáticos extremos. O texto segue agora para a sanção presidencial. Segundo a Agência Senado, sem essa votação a medida perderia a validade na própria quarta-feira.',
        'Desde a notícia anterior do PortalFina, que tratava da aprovação na comissão mista em 10 de novembro, o texto passou pela Câmara e pelo Senado. A principal mudança no Plenário foi a retirada de três temas que a Câmara havia incluído e que o presidente do Senado, Davi Alcolumbre, classificou como matérias estranhas ao objeto original da MP.',
        'Saíram do texto a submissão de cigarros eletrônicos e outros produtos de tabaco à regulação sanitária da Anvisa, a dispensa de exigências de importação para produtos de lojas francas em portos, aeroportos e fronteiras, e a prorrogação do prazo de pagamento de dívidas do antigo Sistema Financeiro da Habitação (SFH), que passaria de janeiro de 2027 para janeiro de 2030.',
      ],
    },
    {
      heading: 'Quem pode renegociar e quais são os limites',
      image: {
        src: '/images/news/mp-1376-senado-aprova-plv-16-2026-dividas-rurais-vai-a-sancao-detalhe.jpg',
        alt: 'Detalhe do documento da MP 1.376/2026 com aprovação no Senado em 11/11, juros de 5% a 12% ao ano, carência de 2 anos e sanção como próximo passo.',
        caption:
          'A renegociação prevê juros de 5% a 12% ao ano e 2 anos de carência.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Podem pedir a renegociação produtores e cooperativas que tiveram perdas por enxurradas, alagamentos, chuvas intensas, tornados, geadas ou estiagens em duas ou mais quebras de safra. A perda mínima é de 30% da renda bruta agropecuária esperada para a safra ou a atividade financiada, percentual que cai para 25% nas áreas da Sudam, Sudene e Sudeco. Também é possível refinanciar perdas causadas por queda nos preços de comercialização.',
        'Produtores do Pronaf e do Pronamp podem comprovar as perdas com laudo técnico coletivo, por região e atividade, em vez de laudo individual. A data de referência das dívidas passou de maio para outubro de 2026. Os limites valem por mutuário e somam todas as operações, em uma ou mais instituições financeiras.',
        'Nos casos de perdas mais severas, com três ou mais quebras de safra e redução de pelo menos 40% da renda esperada (35% nas áreas da Sudam, Sudene e Sudeco), os limites sobem, os juros caem e o prazo de quitação chega a 10 anos. Dívidas acima dos limites podem ser refinanciadas em outra operação, com juros maiores.',
      ],
      table: {
        caption: 'Limites e juros por perfil, segundo a Agência Senado',
        columns: ['Perfil', 'Perda padrão', 'Perda mais severa'],
        rows: [
          [
            'Agricultura familiar (Pronaf)',
            'Até R$ 400 mil, 6% ao ano',
            'Até R$ 500 mil, 5% ao ano',
          ],
          [
            'Pequenos e médios (Pronamp)',
            'Até R$ 2 milhões, 9% ao ano',
            'Até R$ 2,5 milhões, 8% ao ano',
          ],
          [
            'Demais produtores',
            'Até R$ 4 milhões, 12% ao ano',
            'Até R$ 8 milhões, 11% ao ano',
          ],
        ],
      },
    },
    {
      heading: 'Quanto custa na prática: exemplo com juros e carência',
      paragraphs: [
        'Imagine um produtor do Pronaf com dívida de R$ 400.000, o limite da faixa padrão, renegociada a 6% ao ano. Nos dois anos de carência, ele paga apenas os juros: R$ 24.000 por ano, ou R$ 2.000 por mês, numa conta simples que não considera tarifas, seguros ou correção específica do contrato. Só depois da carência começa a amortização do principal.',
        'Já um produtor que não se enquadra no Pronaf nem no Pronamp, com dívida de R$ 1.000.000 a 12% ao ano, teria juros de R$ 120.000 por ano na carência. Se a perda for enquadrada como severa e a taxa cair para 11%, os juros anuais seriam de R$ 110.000. A diferença de R$ 10.000 por ano mostra por que o enquadramento importa. As condições reais dependem do contrato, do banco e da regulamentação.',
        'Quem paga a conta do juro subsidiado são recursos obrigatórios que os bancos direcionam ao crédito rural, como parte da Poupança Rural e de Letras de Crédito do Agronegócio (LCA), além da equalização de juros dentro dos limites do Ministério da Fazenda e do orçamento. Nos empréstimos de fundos constitucionais, como FNO, FNE e FCO, os encargos seguem os fundos, e o risco de calote nas demais operações fica com as instituições financeiras.',
      ],
    },
    {
      heading: 'O que falta para valer e o debate no Congresso',
      paragraphs: [
        'O texto ainda não é lei. Depois da chegada à Presidência, a regra constitucional dá ao presidente da República 15 dias úteis para sancionar ou vetar. O prazo de contratação, que acabaria em 12 de novembro (120 dias da publicação da MP), passa a contar 120 dias após a regulamentação da lei. Ou seja, o produtor deve aguardar a sanção e as regras dos bancos antes de procurar a renegociação.',
        'Durante a votação, senadores chamaram a MP de paliativo e defenderam uma solução estrutural, com securitização das dívidas do setor em 2027. A discussão também envolve o PL 5.122/2023, aprovado com alterações pelo Senado em junho de 2026 e que voltou à Câmara. Este texto relata apenas os fatos votados e não toma posição sobre o mérito.',
        'Para quem tem dívida rural, o caminho prático é reunir os laudos que comprovem as perdas, conferir em qual faixa a operação se enquadra e consultar o banco ou a cooperativa quando a lei for sancionada e regulamentada.',
      ],
    },
  ],
  faq: [
    {
      question: 'A MP 1.376/2026 já virou lei?',
      answer:
        'Ainda não. O Senado aprovou o PLV 16/2026 em 11/11 e o texto segue para a sanção presidencial.',
    },
    {
      question: 'O que foi retirado do texto pelo Senado?',
      answer:
        'Três temas incluídos pela Câmara: regulação de cigarros eletrônicos pela Anvisa, regras de importação de lojas francas e a prorrogação de dívidas do antigo SFH até 2030.',
    },
    {
      question: 'Qual é a carência e quais são os juros?',
      answer:
        'A carência é de 2 anos, pagando apenas juros. As taxas ficam entre 5% e 12% ao ano, conforme o perfil do produtor e a gravidade da perda.',
    },
  ],
  sources: [
    {
      label:
        'Agência Senado: Renegociação de dívidas rurais é aprovada pelo Senado e vai à sanção presidencial',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/11/11/renegociacao-de-dividas-rurais-e-aprovada-pelo-senado-e-vai-a-sancao-presidencial',
    },
    {
      label:
        'TV Senado: Senado aprova MP das dívidas rurais e retira trecho sobre cigarros eletrônicos',
      url: 'https://www12.senado.leg.br/tv/programas/noticias-1/2026/11/senado-aprova-mp-das-dividas-rurais-e-retira-trecho-sobre-cigarros-eletronicos',
    },
  ],
} as const satisfies NewsDocument;
