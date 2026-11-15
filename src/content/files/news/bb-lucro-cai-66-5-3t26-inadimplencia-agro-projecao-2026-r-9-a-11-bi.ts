import type { NewsDocument } from '../../types';

export const newsBbLucro3T2026 = {
  kind: 'news',
  slug: 'bb-lucro-cai-66-5-3t26-inadimplencia-agro-projecao-2026-r-9-a-11-bi',
  title:
    'Lucro do Banco do Brasil cai 66,5% no 3º trimestre e projeção de 2026 vai para R$ 9 bi a R$ 11 bi',
  description:
    'BB lucrou R$ 1,27 bilhão no 3º trimestre, com inadimplência do agro em 6,92%. Veja o que muda para acionistas, produtores e para o crédito.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/bb-lucro-cai-66-5-3t26-inadimplencia-agro-projecao-2026-r-9-a-11-bi.jpg',
    alt: 'Documento com o resultado do 3º trimestre do Banco do Brasil, medidor, etiqueta de queda de 66,5% e celular com lucro de R$ 1,27 bilhão.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-15',
  updatedAt: '2026-11-15',
  tags: ['banco-do-brasil', 'bancos', 'agronegocio', 'inadimplencia', 'dividendos'],
  featuredCalculators: ['porcentagem', 'juros-compostos'],
  highlights: [
    {
      value: 'R$ 1,27 bi',
      label: 'Lucro líquido ajustado no 3T26',
      note: 'Queda de 66,5% sobre o 3T25.',
    },
    {
      value: '6,92%',
      label: 'Inadimplência do agro',
      note: 'Atrasos acima de 90 dias; era 4,84%.',
    },
    {
      value: 'R$ 9 a 11 bi',
      label: 'Nova projeção de lucro em 2026',
      note: 'Antes: R$ 18 bi a R$ 22 bi.',
    },
  ],
  sections: [
    {
      heading: 'O que o Banco do Brasil informou sobre o 3º trimestre',
      paragraphs: [
        'O Banco do Brasil (BB) divulgou em 11/11/2026 o resultado do 3º trimestre: lucro líquido ajustado de R$ 1,27 bilhão, queda de 66,5% em relação ao mesmo período de 2025. Segundo o banco, o principal fator foi o custo do crédito, que somou R$ 21,2 bilhões, alta de 18,4% em 12 meses. Esse custo reúne provisões para calotes, descontos em renegociações e recuperações de dívidas antigas.',
        'A rentabilidade também caiu: o retorno sobre o patrimônio (ROE) ficou em 2,8%, contra 8,4% um ano antes. A margem financeira bruta, que é a diferença entre o que o banco ganha com crédito e o que paga para captar, foi de R$ 26 bilhões, recuo de 1,5% em 12 meses.',
      ],
      table: {
        caption: 'Números do 3º trimestre de 2026 do BB',
        columns: ['Indicador', 'Resultado'],
        rows: [
          ['Lucro líquido ajustado', 'R$ 1,27 bilhão'],
          ['Variação em 12 meses', 'Queda de 66,5%'],
          ['Custo do crédito', 'R$ 21,2 bilhões (alta de 18,4%)'],
          ['ROE', '2,8% (era 8,4%)'],
          ['Margem financeira bruta', 'R$ 26 bilhões (queda de 1,5%)'],
        ],
      },
    },
    {
      heading: 'Inadimplência: agro em 6,92% e pessoa física em 9,14%',
      image: {
        src: '/images/news/bb-lucro-cai-66-5-3t26-inadimplencia-agro-projecao-2026-r-9-a-11-bi-detalhe.jpg',
        alt: 'Detalhe da ilustração: lucro ajustado de R$ 1,27 bi, queda de 66,5%, inadimplência do agro de 6,92% e projeção de R$ 9 a 11 bi.',
        caption:
          'Os quatro números centrais do balanço do BB no 3º trimestre de 2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A inadimplência acima de 90 dias da carteira total chegou a 6,08% em setembro de 2026, contra 4,51% um ano antes. No agronegócio, o índice foi de 6,92% (era 4,84%) e, na pessoa física, de 9,14% (era 6,01%). Na pessoa jurídica, ficou em 3,44%.',
        'O banco diz que o problema no agro está concentrado em parte da carteira, sobretudo produtores médios e grandes de soja, milho e pecuária, principalmente no Centro-Oeste. A carteira de crédito expandida somou R$ 1,3 trilhão, alta de 2,2% em 12 meses e queda de 0,5% frente a junho.',
        'O balanço não traz medida nova para clientes, como mudança de juros ou regra de renegociação. O efeito para o tomador de crédito, portanto, não está definido no documento.',
      ],
    },
    {
      heading: 'Projeções de 2026 foram cortadas',
      paragraphs: [
        'O BB revisou as metas do ano. O lucro líquido ajustado esperado passou de R$ 18 bilhões a R$ 22 bilhões para R$ 9 bilhões a R$ 11 bilhões. O custo do crédito projetado subiu de R$ 65 bilhões a R$ 70 bilhões para R$ 80 bilhões a R$ 83 bilhões.',
        'A carteira de crédito, que a empresa previa crescer de 0,5% a 4,5%, agora deve variar entre estabilidade e queda de até 2%. Na prática, o banco projeta emprestar menos do que antes.',
      ],
      table: {
        caption: 'Projeções de 2026: antes e depois',
        columns: ['Item', 'Antes', 'Agora'],
        rows: [
          ['Lucro líquido ajustado', 'R$ 18 bi a R$ 22 bi', 'R$ 9 bi a R$ 11 bi'],
          ['Custo do crédito', 'R$ 65 bi a R$ 70 bi', 'R$ 80 bi a R$ 83 bi'],
          ['Carteira de crédito', 'Alta de 0,5% a 4,5%', 'Estável a queda de até 2%'],
        ],
      },
    },
    {
      heading: 'Dividendos e JCP: o que o acionista recebe',
      paragraphs: [
        'O banco vai distribuir em 2026 o mínimo obrigatório de 25% do lucro. Os juros sobre capital próprio (JCP) do 3º trimestre somam R$ 197 milhões, ou R$ 0,04 por ação, queda de cerca de 52% sobre o 3T25. Não haverá anúncios intermediários de proventos em 11 e 19 de novembro.',
        'Um exemplo: quem tem 1.000 ações recebe R$ 40,00 brutos de JCP neste trimestre (1.000 × R$ 0,04). Sobre o JCP incide Imposto de Renda retido na fonte de 15%, o que deixa R$ 34,00 líquidos para pessoa física. O complemento de 2026 será anunciado em 17/02/2027, com pagamento previsto para 10/03/2027.',
        'Para 2027, o BB não prevê declarar nem pagar dividendos intermediários, e o pagamento do mínimo obrigatório dependerá das projeções de capital. Os índices de capital caíram: Basileia em 13,45% (era 14,81%) e capital principal em 10,80% (era 11,16%). Isto não é recomendação de compra ou venda de ações.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto o Banco do Brasil lucrou no 3º trimestre de 2026?',
      answer:
        'O lucro líquido ajustado foi de R$ 1,27 bilhão, queda de 66,5% em relação ao 3º trimestre de 2025, segundo o banco.',
    },
    {
      question: 'Minha conta ou meu crédito no BB muda por causa do balanço?',
      answer:
        'O balanço divulgado não anuncia mudança em juros, tarifas ou regras de renegociação para clientes. A projeção indica menor crescimento da carteira de crédito em 2026.',
    },
    {
      question: 'Quando o BB paga o complemento de dividendos de 2026?',
      answer:
        'O complemento será anunciado em 17/02/2027, com pagamento previsto para 10/03/2027, segundo o banco.',
    },
  ],
  sources: [
    {
      label: 'Agência Brasil: lucro do BB cai 66,5% no 3º trimestre com inadimplência do agro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/lucro-do-bb-cai-665-no-3o-trimestre-com-inadimplencia-do-agro',
    },
    {
      label: 'Banco do Brasil: relações com investidores',
      url: 'https://ri.bb.com.br/',
    },
  ],
} as const satisfies NewsDocument;
