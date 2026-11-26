import type { NewsDocument } from '../../types';

export const newsStfValidaValorAcoesTrabalhistas25Novembro2026 = {
  kind: 'news',
  slug: 'stf-valida-valor-no-pedido-de-acoes-trabalhistas-adi-6002',
  title:
    'STF valida valor no pedido de ações trabalhistas, aceita estimativa justificada e permite corrigir a petição',
  description:
    'O STF decidiu em 25/11 que a petição trabalhista deve indicar valor, mas aceita estimativa justificada e proíbe extinguir o processo sem chance de corrigir.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/stf-valida-valor-no-pedido-de-acoes-trabalhistas-adi-6002.jpg',
    alt: 'Documento de ação trabalhista com pedido com valor, estimativa justificada e correção, ao lado de uma etiqueta ADI 6.002.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-25',
  updatedAt: '2026-11-25',
  tags: ['stf', 'reforma-trabalhista', 'acao-trabalhista', 'clt', 'trabalho'],
  featuredCalculators: ['horas-extras', 'rescisao-clt', 'custo-demissao'],
  highlights: [
    {
      value: 'ADI 6.002',
      label: 'Ação da OAB julgada pelo STF',
      note: 'Questiona regra da Reforma Trabalhista de 2017.',
    },
    {
      value: 'Art. 840',
      label: 'Regra da CLT em discussão',
      note: 'Pedido certo, determinado e com valor.',
    },
    {
      value: '25/11',
      label: 'Data do julgamento',
      note: 'Dino e Fachin ficaram parcialmente vencidos.',
    },
  ],
  sections: [
    {
      heading: 'O que o STF decidiu em 25/11',
      paragraphs: [
        'O Supremo Tribunal Federal decidiu em 25/11/2026 que a regra da CLT que exige a indicação de valor nos pedidos de uma reclamação trabalhista é válida. A decisão veio na ADI 6002, ação do Conselho Federal da OAB, protocolada em 2018 contra mudanças feitas pela Reforma Trabalhista de 2017 (Lei 13.467/2017).',
        'O trecho em discussão está no artigo 840 da CLT. O parágrafo 1º diz que o pedido deve ser certo, determinado e com indicação de seu valor, e o parágrafo 3º prevê a extinção do processo quando essa exigência não é cumprida. O relator, ministro Cristiano Zanin, conduziu o voto que prevaleceu, acompanhado por Cármen Lúcia, André Mendonça, Nunes Marques, Alexandre de Moraes, Dias Toffoli e Gilmar Mendes.',
        'Flávio Dino e Edson Fachin ficaram parcialmente vencidos na parte da estimativa: para eles, os valores indicados são apenas estimativas e não limitam a liquidação e a execução. Segundo o STF, a decisão vale somente para as ações apresentadas depois da publicação da ata do julgamento.',
      ],
    },
    {
      heading: 'Estimativa vale, mas precisa de justificativa',
      image: {
        src: '/images/news/stf-valida-valor-no-pedido-de-acoes-trabalhistas-adi-6002-detalhe.jpg',
        alt: 'Detalhe do documento: processo ADI 6.002, pedido com valor, estimativa se justificada e valor errado pode ser corrigido.',
        caption:
          'Os três pontos da decisão do STF de 25/11 sobre o valor do pedido.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O ponto que mais interessa a quem pensa em entrar na Justiça do Trabalho é a estimativa. Segundo o STF, ela é admitida quando não é possível indicar o valor exato e essa dificuldade é justificada com elementos concretos. Nesses casos, a condenação não fica limitada ao número estimado.',
        'Nas demais situações, o valor indicado na petição limita a condenação. Na prática, quem pede um valor baixo demais, sem justificar a impossibilidade de calcular, pode ficar sem receber a diferença se a Justiça reconhecer um direito maior.',
        'Um exemplo de referência: um trabalhador com salário de R$ 3.000 tem hora normal de R$ 13,64 (R$ 3.000 dividido por 220). A hora extra com adicional de 50% sai a R$ 20,45. Se ele pede 20 horas extras por mês durante 12 meses, são 240 horas, ou cerca de R$ 4.909 só nesse item, sem reflexos. É uma conta de ordem de grandeza, não o valor que será devido em cada caso.',
      ],
      table: {
        caption: 'Como fica o valor do pedido, segundo o STF',
        columns: ['Situação', 'Efeito'],
        rows: [
          [
            'Valor exato indicado na petição',
            'O valor indicado limita a condenação',
          ],
          [
            'Estimativa justificada com elementos concretos',
            'A condenação não fica limitada à estimativa',
          ],
          [
            'Petição sem valores',
            'O trabalhador pode corrigir antes de o processo ser extinto',
          ],
        ],
      },
    },
    {
      heading: 'Petição sem valor não pode ser extinta de imediato',
      paragraphs: [
        'O STF também considerou inconstitucional a extinção automática do processo quando a petição inicial não traz os valores. O trabalhador deve ter a oportunidade de corrigir o documento antes de o caso ser encerrado. O parágrafo 3º do artigo 840 previa a extinção sem essa chance.',
        'Para quem já tem ação em andamento, o STF informou que a decisão será aplicada somente às ações apresentadas depois da publicação da ata do julgamento. As páginas consultadas não trazem a data dessa publicação nem detalham o que muda para processos mais antigos.',
        'Antes de ajuizar uma ação, vale juntar contracheques, controles de jornada e o termo de rescisão, que ajudam a justificar a estimativa. As calculadoras de horas extras, rescisão e custo de demissão do portal servem para montar uma ordem de grandeza, mas o cálculo do pedido deve ser conferido com um advogado ou sindicato.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso indicar o valor exato de cada pedido?',
      answer:
        'Não necessariamente. Quando não for possível calcular o valor exato, o STF admite uma estimativa, desde que a dificuldade seja justificada com elementos concretos.',
    },
    {
      question: 'Se eu estimar errado, perco o direito?',
      answer:
        'Com estimativa justificada, a condenação não fica limitada a ela. Sem justificativa, o valor indicado limita a condenação.',
    },
    {
      question: 'A decisão vale para ações antigas?',
      answer:
        'Segundo o STF, vale somente para as ações apresentadas depois da publicação da ata do julgamento.',
    },
  ],
  sources: [
    {
      label:
        'STF: STF valida exigência de indicação de valor em ações trabalhistas',
      url: 'https://noticias.stf.jus.br/postsnoticias/stf-valida-exigencia-de-indicacao-de-valor-em-acoes-trabalhistas/',
    },
    {
      label:
        'Agência Brasil: STF mantém indicação prévia de valor em ações trabalhistas',
      url: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-11/stf-mantem-indicacao-previa-de-valor-em-acoes-trabalhistas',
    },
    {
      label: 'STF: processo ADI 6002',
      url: 'https://portal.stf.jus.br/processos/detalhe.asp?incidente=5537399',
    },
    {
      label: 'Lei 13.467/2017 (Reforma Trabalhista)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13467.htm',
    },
  ],
} as const satisfies NewsDocument;
