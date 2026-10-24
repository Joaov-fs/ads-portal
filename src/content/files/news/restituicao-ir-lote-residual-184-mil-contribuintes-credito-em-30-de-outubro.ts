import type { NewsDocument } from '../../types';

export const newsRestituicaoLoteResidualOutubro2026 = {
  kind: 'news',
  slug: 'restituicao-ir-lote-residual-184-mil-contribuintes-credito-em-30-de-outubro',
  title:
    'Restituição do IR: lote residual de R$ 531,6 milhões paga 184 mil contribuintes em 30 de outubro',
  description:
    'Consulta ao lote residual do IR 2026 abriu em 23/10. Pagamento em 30/10 para 184.442 contribuintes. Veja quem entra e como consultar.',
  category: 'financas',
  coverImage: {
    src: '/images/news/restituicao-ir-lote-residual-184-mil-contribuintes-credito-em-30-de-outubro.jpg',
    alt: 'Documento do lote residual do IR, calendário de outubro com o dia 30 marcado, celular e moedas sobre fundo roxo.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  tags: ['imposto-de-renda', 'restituicao', 'receita-federal', 'malha-fina'],
  featuredCalculators: ['irrf'],
  highlights: [
    {
      value: '30/10',
      label: 'Crédito do lote residual',
      note: 'Data informada pela Receita Federal.',
    },
    {
      value: 'R$ 531,6 mi',
      label: 'Total do lote',
      note: 'Valor somado de todas as restituições.',
    },
    {
      value: '184.442',
      label: 'Contribuintes no lote',
      note: 'Consulta aberta desde 23/10.',
    },
    {
      value: 'R$ 293,4 mi',
      label: 'Para prioritários',
      note: 'Idosos, pessoas com deficiência ou doença grave e professores.',
    },
  ],
  sections: [
    {
      heading: 'O que a Receita anunciou para o lote residual',
      paragraphs: [
        'A Receita Federal abriu na sexta-feira, 23 de outubro, a consulta ao lote residual de restituição do Imposto de Renda Pessoa Física 2026. O crédito está marcado para 30 de outubro e alcança 184.442 contribuintes, num total de R$ 531,6 milhões.',
        'O lote residual reúne quem ficou de fora dos lotes regulares. Entram contribuintes que entregaram a declaração de 2026 fora do prazo, quem estava retido na malha fiscal e resolveu a pendência, e também restituições residuais de exercícios anteriores.',
        'Fazendo a conta com os números divulgados, o valor médio por contribuinte fica em cerca de R$ 2.882. É uma média calculada pelo PortalFina: cada restituição depende do imposto pago a mais durante o ano e das deduções declaradas, então o seu valor pode ser bem diferente.',
      ],
    },
    {
      heading: 'Quem recebe primeiro e quem está no lote',
      image: {
        src: '/images/news/restituicao-ir-lote-residual-184-mil-contribuintes-credito-em-30-de-outubro-detalhe.jpg',
        alt: 'Detalhe do documento com 184.442 contribuintes, R$ 531,6 mi no total e crédito em 30/10.',
        caption:
          'Os números do lote residual divulgados pela Receita: contribuintes, total e data do crédito.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A lei dá prioridade a alguns grupos, que somam R$ 293,4 milhões do lote. São 5.424 contribuintes com mais de 80 anos, 27.948 com idade entre 60 e 79 anos, 4.047 com deficiência física ou mental ou doença grave e 8.827 cuja principal fonte de renda é o magistério.',
        'Os demais somam 138.196 contribuintes: 121.531 que usaram a declaração pré-preenchida ou escolheram receber por Pix, e outros 16.665. Pelos números oficiais, esse grupo divide o restante do lote, cerca de R$ 238,2 milhões.',
      ],
      table: {
        caption: 'Como se divide o lote residual de 30 de outubro',
        columns: ['Grupo', 'Contribuintes'],
        rows: [
          ['Mais de 80 anos', '5.424'],
          ['60 a 79 anos', '27.948'],
          ['Deficiência ou doença grave', '4.047'],
          ['Renda principal do magistério', '8.827'],
          ['Pré-preenchida ou Pix', '121.531'],
          ['Demais contribuintes', '16.665'],
          ['Total do lote', '184.442'],
        ],
      },
    },
    {
      heading: 'Como consultar a sua restituição',
      paragraphs: [
        'A consulta é feita no site da Receita Federal, na área Meu Imposto de Renda, na opção Consultar Minha Restituição. O mesmo serviço está disponível no aplicativo da Receita para celulares e tablets. Tenha o CPF e a data de nascimento à mão.',
        'O e-CAC, o Centro Virtual de Atendimento, mostra a situação do processamento da declaração. Se a consulta apontar pendências, o contribuinte pode enviar uma declaração retificadora para corrigir os dados informados.',
        'Estar na lista do lote residual indica que a restituição foi liberada para crédito em 30 de outubro, mas o depósito depende de os dados bancários estarem corretos.',
      ],
    },
    {
      heading: 'E se o dinheiro não cair na conta?',
      paragraphs: [
        'A restituição só é paga em conta bancária no nome do próprio contribuinte. Se houver erro nos dados ou algum problema com a conta, o crédito não é feito.',
        'Nesse caso, é possível reagendar o pagamento pelo Banco do Brasil em até um ano após a primeira tentativa de depósito. Passado esse prazo, o pedido precisa ser feito pelo e-CAC. A central do banco atende pelos telefones 4004 0001 (capitais), 0800 729 0001 (demais localidades) e 0800 729 0088 (deficientes auditivos).',
        'Exemplo prático: quem tinha uma restituição de R$ 1.500 retida na malha e regularizou a pendência pode ver o valor no lote. Se a conta cadastrada foi encerrada, o dinheiro volta para reagendamento, e o contribuinte só o recebe depois de informar uma conta válida no seu nome.',
      ],
    },
    {
      heading: 'Restituição não é o desconto mensal do salário',
      paragraphs: [
        'A restituição é a devolução do imposto pago a mais ao longo do ano. Já o desconto mensal de Imposto de Renda no contracheque é outra etapa, calculada sobre o salário de cada mês.',
        'A calculadora de IRRF do PortalFina estima o desconto mensal com base nos dados informados. Ela não consulta a Receita nem confirma datas de restituição: para isso, use o serviço oficial.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando cai o lote residual do IR 2026?',
      answer:
        'O crédito está marcado para 30 de outubro de 2026, para 184.442 contribuintes. A consulta abriu em 23 de outubro.',
    },
    {
      question: 'Quem entra no lote residual?',
      answer:
        'Contribuintes que entregaram a declaração de 2026 fora do prazo, quem estava na malha fiscal e regularizou a situação e restituições residuais de anos anteriores.',
    },
    {
      question: 'O valor cai em qualquer conta?',
      answer:
        'Não. O depósito só é feito em conta no nome do contribuinte. Com dados errados, o pagamento pode ser reagendado pelo Banco do Brasil em até um ano.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Receita abre consulta a lote residual do Imposto de Renda, 23/10/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/receita-abre-consulta-lote-residual-do-imposto-de-renda',
    },
    {
      label:
        'Receita Federal: consulta ao lote residual de restituição do IRPF 2026, 22/10/2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/outubro/receita-federal-abre-consulta-ao-lote-residual-de-restituicao-do-irpf-2026-nesta-sexta-feira-23',
    },
    {
      label: 'Gov.br: consultar restituição de imposto de renda',
      url: 'https://www.gov.br/pt-br/servicos/consultar-restituicao-de-imposto-de-renda',
    },
  ],
} as const satisfies NewsDocument;
