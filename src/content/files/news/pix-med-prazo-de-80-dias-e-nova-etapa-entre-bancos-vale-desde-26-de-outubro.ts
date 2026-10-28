import type { NewsDocument } from '../../types';

export const newsPixMed80DiasEtapa26Outubro = {
  kind: 'news',
  slug: 'pix-med-prazo-de-80-dias-e-nova-etapa-entre-bancos-vale-desde-26-de-outubro',
  title:
    'Pix: prazo de 80 dias para contestar golpe no MED e nova etapa entre bancos desde 26/10',
  description:
    'O prazo do MED do Pix subiu de 30 para 80 dias e a nova etapa de comunicação entre bancos chegou em 26/10. Veja o que fazer se cair em golpe e como se proteger.',
  category: 'financas',
  coverImage: {
    src: '/images/news/pix-med-prazo-de-80-dias-e-nova-etapa-entre-bancos-vale-desde-26-de-outubro.jpg',
    alt: 'Documento com o prazo de 80 dias do MED do Pix, calendário de outubro com o dia 26 marcado e celular mostrando 80 dias.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-28',
  updatedAt: '2026-10-28',
  tags: ['pix', 'golpe', 'med', 'banco-central', 'seguranca', 'banco'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '80 dias',
      label: 'Prazo para contestar no MED',
      note: 'Era de 30 dias até 31 de agosto de 2026.',
    },
    {
      value: '26/10',
      label: 'Nova etapa entre os bancos',
      note: 'Etapa de comunicação adiada de agosto para outubro.',
    },
    {
      value: '7 dias',
      label: 'Análise nos casos de fraude',
      note: 'Prazo que os bancos têm para checar sinais de irregularidade.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou no MED do Pix',
      paragraphs: [
        'O MED (Mecanismo Especial de Devolução) é o caminho que o Banco Central criou para tentar recuperar um Pix feito em golpe ou fraude. Desde 1º de setembro de 2026, o prazo para contestar passou de 30 para 80 dias. A mudança consta da Instrução Normativa BCB 766, que atualizou o Manual Operacional do DICT, o diretório de chaves do Pix.',
        'Para quem foi enganado e fez a transferência, o prazo de 80 dias é contado a partir da data do Pix original. O novo caso é o de quem recebeu um pagamento legítimo e teve o valor devolvido depois de uma contestação considerada fraudulenta: esse recebedor também tem 80 dias, contados da data em que o MED fez a devolução, para contestar.',
        'Além disso, uma etapa adicional de comunicação entre as instituições, que estava prevista para agosto, foi adiada para 26 de outubro. Segundo o Banco Central, o adiamento não muda o funcionamento do rastreamento que já estava disponível. A cobertura da imprensa informa que, a partir de 26/10, os alertas de suspeita de fraude entre bancos passam a indicar em que fase está o rastreamento do dinheiro, o que ajuda a saber se o valor foi direto da vítima para a conta suspeita ou passou antes por outras contas.',
      ],
    },
    {
      heading: 'Como o golpe contra comerciantes funciona',
      image: {
        src: '/images/news/pix-med-prazo-de-80-dias-e-nova-etapa-entre-bancos-vale-desde-26-de-outubro-detalhe.jpg',
        alt: 'Detalhe da ilustração: prazo para pedir o MED de 80 dias, prazo para contestar devolução de 80 dias, análise de até 7 dias e nova etapa em 26/10.',
        caption: 'Os prazos do MED que valem para o dia a dia do Pix.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Agência Brasil descreve um golpe que atinge lojas e prestadores de serviço. O golpista paga por um produto ou serviço, depois pede que o valor seja devolvido por uma nova transferência, em geral para outra chave. Em seguida, aciona o MED no próprio banco alegando que o pagamento original foi fraudado.',
        'Na prática, o comerciante pode perder o dinheiro duas vezes. Exemplo: uma loja recebe R$ 1.200,00 por um pedido, devolve R$ 1.200,00 a pedido do cliente por outra chave e, depois, o MED retira mais R$ 1.200,00 da conta da loja. O prejuízo chega a R$ 2.400,00, além do produto entregue.',
        'A recomendação oficial é usar a função de devolução vinculada à própria transação, disponível no aplicativo do banco, em vez de fazer um novo Pix para outra chave. Quem teve o valor retirado de forma indevida pode contestar em até 80 dias contados da devolução feita pelo MED.',
      ],
      table: {
        caption: 'Prazos do MED citados pelo Banco Central e pela imprensa',
        columns: ['Situação', 'Prazo', 'Contagem'],
        rows: [
          [
            'Vítima pede o MED após o golpe',
            '80 dias',
            'Da data do Pix original',
          ],
          [
            'Recebedor contesta devolução fraudulenta',
            '80 dias',
            'Da data da devolução feita pelo MED',
          ],
          [
            'Bancos analisam sinais de fraude',
            'Até 7 dias',
            'Após o pedido de contestação',
          ],
        ],
      },
    },
    {
      heading: 'O que fazer se cair em um golpe no Pix',
      paragraphs: [
        'O primeiro passo é abrir o aplicativo do banco e pedir o MED o mais rápido possível. O prazo máximo é de 80 dias, mas a chance de achar o dinheiro ainda na conta de destino cai a cada hora. Quando a contestação é aberta, o banco inicia o rastreamento e bloqueia o que ainda estiver disponível.',
        'Guarde as provas: comprovante da transferência, conversas, anúncio ou negociação, dados da conta que recebeu e qualquer documento relacionado. Em muitos casos também vale registrar um boletim de ocorrência, que pode ser feito pela internet em vários estados.',
        'Para saber até que dia ainda dá tempo, use a calculadora de contador de dias do portal. Um Pix feito em 28 de outubro de 2026, por exemplo, tem prazo até 16 de janeiro de 2027 pela contagem de 80 dias. Confirme a contagem exata com o seu banco e não deixe para o último dia.',
        'O MED não garante a devolução integral. Se os criminosos já tiraram o dinheiro, a recuperação pode ser parcial ou nula. Transferências feitas por engano e disputas comerciais comuns também ficam fora do mecanismo.',
      ],
    },
    {
      heading: 'O que muda para o usuário e para o comerciante',
      paragraphs: [
        'Para o cliente comum, a mudança é nos bastidores: não é preciso atualizar o aplicativo nem ativar nada. O que muda de verdade é a folga de tempo para contestar e a expectativa de rastreamento mais eficiente entre os bancos.',
        'Para quem vende, a regra pede cuidado redobrado. Antes de devolver qualquer valor, confira se o Pix original foi mesmo creditado, use o botão de devolução do próprio app e guarde o comprovante da operação. Se a conta sofrer uma devolução indevida pelo MED, o prazo de 80 dias para contestar começa na data dessa devolução.',
        'A norma também faz parte de um conjunto de ajustes do Pix que o Banco Central vem publicando em 2026, como a liberação do Pix Automático em contas-salário a partir de 1º de julho de 2027 e o fim do teto de R$ 500 no Pix por aproximação.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual é o prazo para pedir o MED no Pix?',
      answer:
        'É de 80 dias, contados da data do Pix original, para quem foi vítima de golpe. Até agosto de 2026 o prazo era de 30 dias.',
    },
    {
      question: 'O MED garante que eu receba o dinheiro de volta?',
      answer:
        'Não. A devolução depende de ainda haver saldo nas contas rastreadas. Se o dinheiro já foi retirado, a recuperação pode ser parcial ou não acontecer.',
    },
    {
      question: 'Preciso atualizar o app do banco por causa da nova etapa?',
      answer:
        'Não. A etapa de comunicação entre as instituições acontece nos sistemas dos bancos. O usuário só precisa pedir o MED pelo aplicativo quando cair em um golpe.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: nova regra do Pix amplia prazo para contestar golpe',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-09/nova-regra-do-pix-amplia-prazo-para-contestar-golpe',
    },
    {
      label: 'Banco Central: guia de implementação do MED no Pix',
      url: 'https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Guia_MED.pdf',
    },
    {
      label:
        'Agência Gov: Pix amplia funcionalidades e reforça segurança (Resolução BCB 587)',
      url: 'https://agenciagov.ebc.com.br/noticias/202610/pix-amplia-funcionalidades-e-reforca-seguranca-com-nova-rodada-de-aperfeicoamentos-regulatorios',
    },
    {
      label: 'DOL: nova regra do Pix contra fraudes entra em vigor em 26/10',
      url: 'https://dol.com.br/noticias/brasil/966619/nova-regra-do-pix-contra-fraudes-entra-em-vigor-a-partir-de-hoje-2610',
    },
  ],
} as const satisfies NewsDocument;
