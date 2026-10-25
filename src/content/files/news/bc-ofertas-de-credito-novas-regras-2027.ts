import type { NewsDocument } from '../../types';

export const newsBcOfertasCreditoNovasRegras2027 = {
  kind: 'news',
  slug: 'bc-ofertas-de-credito-novas-regras-2027',
  title:
    'BC muda ofertas de crédito: bloqueio de propaganda em 31/03/2027 e regras para o Pix em 01/07/2027',
  description:
    'Três resoluções do Banco Central criam bloqueio de ofertas de crédito, painel de dívidas e intervalo de 24 horas para propostas no Pix. Veja as datas.',
  category: 'financas',
  coverImage: {
    src: '/images/news/bc-ofertas-de-credito-novas-regras-2027.jpg',
    alt: 'Documento com as datas das novas regras, celular com aviso de 24 horas antes da primeira oferta de crédito, cartão e etiquetas de 31/03/2027 e 01/07/2027.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-25',
  updatedAt: '2026-10-25',
  tags: ['banco-central', 'credito', 'pix', 'endividamento', 'bancos'],
  featuredCalculators: [
    'simulador-de-emprestimo',
    'juros-compostos',
    'conversao-taxa-mensal-anual',
  ],
  highlights: [
    {
      value: '31/03/2027',
      label: 'Regras de ofertas ativas',
      note: 'Resolução BCB 602.',
    },
    {
      value: '01/07/2027',
      label: 'Painel de dívidas e Pix',
      note: 'Resoluções BCB 601 e 603.',
    },
    {
      value: '24 horas',
      label: 'Intervalo mínimo no Pix',
      note: 'Entre habilitar e receber a 1ª oferta.',
    },
  ],
  sections: [
    {
      heading: 'O que o Banco Central aprovou na sexta-feira',
      paragraphs: [
        'Em 23 de outubro, o Banco Central aprovou três resoluções para reforçar a proteção do consumidor na contratação de crédito. O objetivo declarado é evitar ofertas inadequadas, dar mais clareza sobre os custos, ajudar o cliente a avaliar se consegue assumir uma nova dívida e reduzir o risco de superendividamento.',
        'As regras não valem de imediato. Bancos e demais instituições financeiras têm prazo para se adaptar, e cada resolução começa em uma data diferente. Até lá, nada muda no seu aplicativo.',
      ],
      table: {
        caption: 'Resoluções do Banco Central e datas de início',
        columns: ['Resolução', 'Tema', 'Passa a valer'],
        rows: [
          ['BCB 602', 'Ofertas ativas de crédito', '31/03/2027'],
          [
            'BCB 601',
            'Painel de Dívidas Consolidadas e simulações',
            '01/07/2027',
          ],
          ['BCB 603', 'Ofertas de crédito em transações via Pix', '01/07/2027'],
        ],
      },
    },
    {
      heading: 'Propaganda de crédito: você poderá bloquear',
      image: {
        src: '/images/news/bc-ofertas-de-credito-novas-regras-2027-detalhe.jpg',
        alt: 'Detalhe do documento com as datas das resoluções e do celular com o intervalo de 24 horas.',
        caption:
          'As datas de início variam: ofertas ativas em março de 2027, painel e Pix em julho.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Resolução BCB 602 trata das ofertas ativas, ou seja, propagandas e mensagens em que a instituição procura o cliente para vender crédito. A partir de 31 de março de 2027, os bancos deverão oferecer um mecanismo claro para o consumidor bloquear esse tipo de publicidade.',
        'Para clientes em maior vulnerabilidade financeira ou com risco de endividamento excessivo, a oferta dependerá de autorização prévia, específica e inequívoca. E, mesmo autorizada, ela deve melhorar as condições do cliente sem liberar novos recursos para contratar dívida. São exemplos permitidos a renegociação, a portabilidade e a migração de produto.',
        'A norma não impede você de procurar um banco por conta própria, pesquisar opções e contratar. A regra vale para quando a instituição toma a iniciativa.',
      ],
    },
    {
      heading: 'Painel de Dívidas: quanto da renda já está comprometido',
      paragraphs: [
        'A Resolução BCB 601 cria o Painel de Dívidas Consolidadas, que reúne informações sobre as operações de crédito do cliente e o quanto elas comprometem a renda. Antes de uma nova contratação, a instituição deverá mostrar simulações de custos e de efeitos financeiros, com alertas nos casos de maior risco. A regra vale a partir de 1º de julho de 2027.',
        'Na fase inicial, o painel cobre apenas as operações mantidas na própria instituição. Em uma fase posterior, a integração com o Sistema de Informações de Créditos (SCR) do Banco Central e com o Open Finance deve trazer o quadro completo das dívidas.',
        'Veja como esse tipo de alerta ajuda, com um exemplo ilustrativo: quem ganha R$ 3.000 por mês e já paga R$ 900 em parcelas compromete 30% da renda (900 dividido por 3.000). Uma nova parcela de R$ 450 elevaria o total para R$ 1.350, ou 45%. Antes de assinar, vale conferir o custo real na calculadora de empréstimo do PortalFina.',
      ],
    },
    {
      heading: 'Crédito pelo Pix: consentimento e 24 horas de espera',
      paragraphs: [
        'A Resolução BCB 603 disciplina as ofertas de crédito feitas durante transações via Pix. Também a partir de 1º de julho de 2027, a oferta dependerá de consentimento específico e prévio do usuário. Deverá haver um intervalo mínimo de 24 horas entre a habilitação da oferta e a primeira proposta de crédito.',
        'As instituições terão de oferecer simulador das condições do crédito e um ambiente para consultar as operações já contratadas. A norma também prevê restrições para determinadas modalidades do Pix e regras para devoluções ligadas a operações de crédito.',
        'Quem recebe dinheiro por Pix não é afetado: o beneficiário continua recebendo o valor de forma instantânea e integral.',
      ],
    },
    {
      heading: 'O que fazer até lá',
      paragraphs: [
        'Enquanto as regras não entram em vigor, o cuidado é o de sempre: compare o custo efetivo total, converta a taxa mensal em anual e simule o impacto da parcela no orçamento antes de aceitar qualquer proposta, venha ela por mensagem, ligação ou aplicativo.',
        'Se você já está com dívidas em atraso, o guia de saída do endividamento do PortalFina reúne um passo a passo para organizar o pagamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'As novas regras já estão valendo?',
      answer:
        'Não. A Resolução BCB 602 passa a valer em 31 de março de 2027, e as resoluções BCB 601 e 603 em 1º de julho de 2027.',
    },
    {
      question: 'Vou deixar de receber ofertas de crédito?',
      answer:
        'Você poderá bloquear as ofertas ativas por um mecanismo que os bancos deverão disponibilizar. Para clientes em maior vulnerabilidade, a oferta exigirá autorização prévia e específica.',
    },
    {
      question: 'Receber um Pix muda alguma coisa?',
      answer:
        'Não. Segundo o Banco Central, o beneficiário continua recebendo o valor de forma instantânea e integral.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: BC reforça regras de proteção ao consumidor nas ofertas de crédito (23/10/2026)',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/bc-reforca-regras-de-protecao-ao-consumidor-nas-ofertas-de-credito',
    },
    {
      label:
        'Ministério da Fazenda: resoluções do CMN sobre a lei de direitos do consumidor financeiro',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/maio/entenda-as-resolucoes-do-cmn-que-regulamentam-a-lei-de-direitos-do-consumidor-financeiro',
    },
    {
      label: 'Lei 14.181/2021: prevenção e tratamento do superendividamento',
      url: 'https://planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14181.htm',
    },
    { label: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br/' },
  ],
} as const satisfies NewsDocument;
