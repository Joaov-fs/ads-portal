import type { NewsDocument } from '../../types';

export const newsOpenFinanceIniciadorActions24Novembro2026 = {
  kind: 'news',
  slug: 'open-finance-iniciador-actions-automatiza-transferencias-entre-contas-proprias-via-pix',
  title:
    'Open Finance ganha ferramenta para automatizar transferências entre contas próprias via Pix',
  description:
    'A Iniciador lançou em 24/11 uma ferramenta para bancos e fintechs criarem automações no Open Finance. Veja o que o cliente precisa autorizar e como cancelar.',
  category: 'financas',
  coverImage: {
    src: '/images/news/open-finance-iniciador-actions-automatiza-transferencias-entre-contas-proprias-via-pix.jpg',
    alt: 'Documento com regras de automação entre duas contas, celular pedindo autorização, cofrinho e etiqueta de Open Finance.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-25',
  updatedAt: '2026-11-25',
  tags: ['open-finance', 'pix', 'banco', 'fintech', 'seguranca'],
  featuredCalculators: ['juros-compostos', 'cdb-liquido'],
  highlights: [
    {
      value: '290 milhões',
      label: 'Contas no Open Finance',
      note: 'Número citado pela empresa; em 2022 eram 22 milhões.',
    },
    {
      value: '24/11',
      label: 'Data do lançamento',
      note: 'Ferramenta é para bancos e fintechs, não para o cliente final.',
    },
    {
      value: '6 a 12 meses',
      label: 'Prazo de um banco para criar um serviço',
      note: 'Segundo a empresa, a ferramenta faz isso em uma tarde.',
    },
  ],
  sections: [
    {
      heading: 'O que a Iniciador lançou no Open Finance',
      paragraphs: [
        'A Iniciador, empresa autorizada pelo Banco Central como Iniciador de Transação de Pagamento (ITP), lançou na terça-feira, 24/11/2026, o Iniciador Actions. Trata-se de uma solução para bancos e fintechs criarem, de forma mais rápida, serviços que usam o Open Finance. A informação foi divulgada pela Agência Brasil.',
        'A ferramenta permite movimentar dinheiro entre contas de mesma titularidade, conforme regras que o próprio cliente autoriza. As operações são feitas por Pix, direto entre as instituições. A empresa não fica com o dinheiro: segundo a reportagem, o iniciador não tem custódia dos recursos.',
        'É importante separar o que é anúncio do que já está na sua conta. A ferramenta é voltada às instituições, e a reportagem não informa uma data para que os clientes tenham esses serviços nos aplicativos. Diz apenas que a possibilidade começa a ser oferecida e que a novidade chegará em breve.',
      ],
    },
    {
      heading: 'Que automações a ferramenta permite',
      image: {
        src: '/images/news/open-finance-iniciador-actions-automatiza-transferencias-entre-contas-proprias-via-pix-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com regras de automação entre contas próprias.',
        caption:
          'Exemplos de regras citadas na reportagem de 24/11/2026; a oferta final depende de cada banco.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A reportagem cita cinco usos: transferências recorrentes entre contas próprias, reposição automática de saldo quando ele cai abaixo de um limite, proteção contra o uso do cheque especial com dinheiro de outra instituição, concentração de valores em uma conta e arredondamento de compras para formar uma reserva.',
        'Um exemplo hipotético, só para entender a conta: você define que o arredondamento de cada compra vai para uma reserva. Uma compra de R$ 17,40 é arredondada para R$ 18,00, e R$ 0,60 vai para a reserva. Em 30 compras assim no mês, a reserva soma R$ 18,00 (30 vezes R$ 0,60). É pouco por mês, mas mostra como a regra funciona sem você precisar lembrar de transferir.',
        'Outro exemplo hipotético: uma regra de reposição que mantém R$ 500 na conta corrente. Se o saldo cai para R$ 320, a automação transfere R$ 180 de outra conta sua. Sem a regra, o saldo abaixo do necessário poderia levar ao uso do cheque especial, que costuma ter juros altos.',
      ],
      table: {
        caption: 'Automações citadas pela Agência Brasil',
        columns: ['Automação', 'Para que serve'],
        rows: [
          [
            'Transferência recorrente',
            'Move valores entre contas próprias em datas definidas',
          ],
          [
            'Reposição de saldo',
            'Completa a conta quando o saldo cai abaixo de um limite',
          ],
          [
            'Proteção contra cheque especial',
            'Evita entrar no limite usando dinheiro de outra instituição',
          ],
          [
            'Concentração de valores',
            'Reúne o dinheiro de várias contas em uma só',
          ],
          [
            'Arredondamento de compras',
            'Envia a diferença do arredondamento para uma reserva',
          ],
        ],
      },
    },
    {
      heading: 'Autorização, limites e como cancelar',
      paragraphs: [
        'Segundo a reportagem, as automações dependem de autorização prévia do cliente, dada no aplicativo do banco onde o dinheiro está. As movimentações automáticas ficam restritas a contas de mesma titularidade, e o cliente pode cancelar a autorização quando quiser.',
        'Transferência para terceiros exige validação específica por biometria no dispositivo, de acordo com a mesma reportagem. O dinheiro sai direto da conta de origem, sem passar por uma carteira intermediária.',
        'Os números de contas conectadas (quase 290 milhões, contra 22 milhões em 2022) e o prazo de seis meses a um ano que um banco tradicional levaria para criar um serviço foram apresentados por um dos fundadores da empresa. São afirmações da própria empresa, e a reportagem não traz verificação independente.',
        'Na prática, vale a regra de sempre no Open Finance: leia o que está sendo autorizado, confira o prazo de validade do consentimento e use apenas aplicativos do seu banco ou de instituições autorizadas pelo Banco Central. Nenhum banco ou fintech de verdade pede senha por mensagem ou link recebido por WhatsApp.',
      ],
    },
  ],
  faq: [
    {
      question: 'O Iniciador Actions já está disponível no meu banco?',
      answer:
        'Não há essa informação. A reportagem diz que a ferramenta, voltada a bancos e fintechs, começa a ser oferecida e que a novidade chegará em breve ao cliente, sem data.',
    },
    {
      question: 'As automações podem mandar dinheiro para outra pessoa?',
      answer:
        'As movimentações automáticas ficam restritas a contas de mesma titularidade. Transferência para terceiros exige validação específica por biometria no dispositivo.',
    },
    {
      question: 'Posso cancelar uma automação depois de autorizar?',
      answer:
        'Sim. Segundo a reportagem, o cliente pode cancelar a autorização quando quiser, no aplicativo do banco onde o dinheiro está.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Nova ferramenta do Open Finance automatizará repasses entre bancos',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/nova-ferramenta-do-open-finance-automatizara-repasses-entre-bancos',
    },
    {
      label: 'Banco Central: Open Finance',
      url: 'https://www.bcb.gov.br/en/financialstability/open_finance',
    },
  ],
} as const satisfies NewsDocument;
