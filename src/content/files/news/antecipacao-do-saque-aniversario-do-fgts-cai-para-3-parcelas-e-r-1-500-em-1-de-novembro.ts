import type { NewsDocument } from '../../types';

export const newsAntecipacaoSaqueAniversarioFgts3Parcelas = {
  kind: 'news',
  slug: 'antecipacao-do-saque-aniversario-do-fgts-cai-para-3-parcelas-e-r-1-500-em-1-de-novembro',
  title: 'FGTS: antecipação cai para 3 saques anuais amanhã, 1º de novembro',
  description:
    'A transição da antecipação do FGTS termina em 31/10. Desde 1º/11, o limite é de três saques anuais. Entenda o teto e o valor líquido do empréstimo.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/fgts-antecipacao-transicao-novembro-2026.jpg',
    alt: 'Documento com três saques anuais e teto de R$ 1.500, calendário marcando 1º de novembro e celular indicando consulta ao contrato.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-31',
  tags: ['fgts', 'saque-aniversario', 'antecipacao', 'emprestimo', 'trabalho'],
  featuredCalculators: ['simulador-de-emprestimo', 'fgts-multa'],
  highlights: [
    {
      value: '1º/11',
      label: 'Começa o limite de três saques',
      note: 'Fim da transição prevista na Resolução 1.130/2025.',
    },
    {
      value: 'R$ 1.500',
      label: 'Teto de direitos cedidos',
      note: 'Não corresponde a um crédito líquido garantido.',
    },
    {
      value: '90 dias',
      label: 'Espera após a adesão',
      note: 'Prazo para autorizar consulta e bloqueio para antecipação.',
    },
  ],
  sections: [
    {
      heading: 'Transição termina neste sábado, 31 de outubro',
      paragraphs: [
        'A partir de domingo, 1º de novembro de 2026, novas antecipações do saque-aniversário ficam limitadas aos direitos dos próximos três saques anuais. A Resolução CCFGTS 1.130/2025 permitiu antecipar até cinco durante o período de transição que termina neste sábado.',
        'A data foi confirmada na página operacional da Caixa no portal do FGTS. É uma etapa de uma regra aprovada no ano passado, não um benefício novo. Esta matéria foi atualizada em 31 de outubro para destacar o encerramento da transição e esclarecer as condições de contratação.',
      ],
    },
    {
      heading: 'R$ 1.500 é o teto cedido, não dinheiro líquido garantido',
      image: {
        src: '/images/news/fgts-antecipacao-transicao-novembro-2026-detalhe.jpg',
        alt: 'Detalhe do documento com a data de início e os limites da antecipação.',
        caption:
          'Os valores indicam direitos cedidos ao banco; confira juros e valor líquido na proposta.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Cada saque anual cedido deve respeitar o mínimo de R$ 100. O máximo por competência é de R$ 500. Com a redução do número de saques, a Caixa informa teto agregado de R$ 1.500 após a transição.',
        'O valor efetivamente depositado depende do saldo disponível, das condições de elegibilidade e dos encargos da instituição. Não confunda a soma dos direitos futuros com o dinheiro que o banco oferece hoje. Confira o custo efetivo total e a proposta antes de contratar.',
      ],
      table: {
        caption: 'Limites informados pela Caixa para a antecipação',
        columns: [
          'Período',
          'Máximo de saques anuais',
          'Teto dos direitos cedidos',
        ],
        rows: [
          ['Até 31/10/2026', '5', 'R$ 2.500'],
          ['A partir de 1º/11/2026', '3', 'R$ 1.500'],
        ],
      },
    },
    {
      heading: 'Uma contratação por competência e espera após a adesão',
      paragraphs: [
        'A norma limita a uma contratação cada competência anual do saque-aniversário. Isso não significa que basta virar o ano civil para contratar novamente. Uma nova operação depende da quitação da antecipação vigente referente ao próximo saque-aniversário.',
        'A Caixa também informa que a autorização de consulta e bloqueio só pode ocorrer depois de decorridos 90 dias da adesão à modalidade. Portanto, aderir agora não dá acesso imediato ao empréstimo nem garante aproveitar a regra de cinco saques.',
        'Depósitos novos no FGTS não permitem complementar uma competência anual já comprometida com outra operação. Consulte o contrato e a disponibilidade no aplicativo FGTS, sem presumir que o teto máximo está livre.',
      ],
    },
    {
      heading: 'O que permanece no saque anual e na demissão',
      paragraphs: [
        'A mudança trata do empréstimo garantido por saques futuros. Quem usa o saque-aniversário sem antecipação continua sujeito à tabela do saque anual. A regra de três competências não limita esse saque comum a R$ 500.',
        'Na demissão sem justa causa durante a vigência do saque-aniversário, a regra geral permite retirar a multa rescisória quando devida, mas não o saldo integral por esse motivo. Outras hipóteses legais de saque permanecem aplicáveis.',
        'O retorno ao saque-rescisão exige que não exista antecipação contratada e só produz efeito no primeiro dia do 25º mês após o pedido. A calculadora de multa do FGTS ajuda a distinguir a multa do saldo; o simulador de empréstimo serve para comparar crédito com parcelas e taxa conhecidas, sem substituir a proposta específica da antecipação.',
      ],
    },
  ],
  faq: [
    {
      question: 'O teto de R$ 1.500 é depositado automaticamente?',
      answer:
        'Não. Trata-se do limite agregado dos direitos cedidos em até três saques anuais. O crédito líquido depende do saldo, dos encargos e da aprovação da instituição.',
    },
    {
      question: 'O saque-aniversário comum também fica limitado a R$ 500?',
      answer:
        'Não. Esse limite por competência pertence à antecipação. O saque anual sem empréstimo segue a tabela própria da modalidade.',
    },
    {
      question: 'Posso antecipar imediatamente depois de aderir?',
      answer:
        'Não. A autorização de consulta e bloqueio para antecipação depende de 90 dias decorridos da adesão, além das demais condições.',
    },
  ],
  sources: [
    {
      label:
        'Caixa no portal FGTS: regras operacionais do saque-aniversário e da antecipação',
      url: 'https://www.fgts.gov.br/Paginas/trabalhador/saque/saque-aniversario.aspx',
    },
    {
      label:
        'Resolução CCFGTS 1.130/2025: texto reproduzido na base oficial da ANTT',
      url: 'https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&cod_menu=7145&cod_modulo=420&desItem=&desItemFim=&nomeTitulo=codigos&numeroAto=00001130&orgao=CCFGTS%2FMTE&seqAto=000&tipo=RES&valorAno=2025',
    },
    {
      label: 'Secom: regras aprovadas pelo Conselho Curador em outubro de 2025',
      url: 'https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2025/10/saque-aniversario-do-fgts-tera-novas-regras-a-partir-de-novembro',
    },
  ],
} as const satisfies NewsDocument;
