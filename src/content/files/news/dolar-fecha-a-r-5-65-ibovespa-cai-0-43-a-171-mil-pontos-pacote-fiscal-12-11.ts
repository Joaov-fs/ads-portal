import type { NewsDocument } from '../../types';

export const newsDolarIbovespa12Novembro2026 = {
  kind: 'news',
  slug: 'dolar-fecha-a-r-5-65-ibovespa-cai-0-43-a-171-mil-pontos-pacote-fiscal-12-11',
  title:
    'Dólar sobe 1,6% e fecha a R$ 5,65, maior valor desde jun/2025; Ibovespa cai 0,43%, a 171 mil pontos',
  description:
    'Na quinta (12), o dólar subiu a R$ 5,65 e o Ibovespa caiu 0,43%, a 171.324 pontos, com dúvida sobre o pacote fiscal. Veja a conta em reais.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/dolar-fecha-a-r-5-65-ibovespa-cai-0-43-a-171-mil-pontos-pacote-fiscal-12-11.jpg',
    alt: 'Documento com dólar a R$ 5,65, alta de 1,6%, Ibovespa em 171.324 pontos e queda de 0,43%, ao lado de gráfico em alta, etiqueta e moeda.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-12',
  updatedAt: '2026-11-12',
  tags: ['dolar', 'ibovespa', 'cambio', 'ajuste-fiscal', 'ipca', 'mercado'],
  featuredCalculators: ['porcentagem', 'cdb-liquido'],
  highlights: [
    {
      value: 'R$ 5,65',
      label: 'Dólar na quinta (12)',
      note: 'Alta de 1,6% e maior valor de fechamento desde junho de 2025.',
    },
    {
      value: '171.324',
      label: 'Pontos do Ibovespa',
      note: 'Queda de 0,43%, com máxima de 172.060 e mínima de 169.942.',
    },
    {
      value: '0,14%',
      label: 'IPCA de outubro',
      note: 'Abaixo dos 0,25% esperados; em 12 meses, 4,63%.',
    },
    {
      value: 'R$ 50 a 60 bi',
      label: 'Impacto fiscal em 2027',
      note: 'Estimativa do governo para o projeto de ajuste, ainda em tramitação.',
    },
  ],
  sections: [
    {
      heading: 'Como fecharam o dólar e o Ibovespa na quinta-feira',
      paragraphs: [
        'O dólar à vista fechou a quinta-feira, 12 de novembro de 2026, em alta de 1,6%, a R$ 5,65. É o maior valor de fechamento desde junho de 2025, segundo o Bora Investir, da B3. Na quarta-feira (11), a moeda havia recuado a R$ 5,5628.',
        'O Ibovespa caiu 0,43% e terminou o pregão em 171.324,31 pontos, com máxima de 172.060,43 e mínima de 169.942,37. O índice vinha de alta de 0,42% na quarta e de sequência positiva na semana, e interrompeu o movimento num dia de maior aversão a risco em relação ao Brasil.',
      ],
    },
    {
      heading: 'O que pesou: dúvida sobre o pacote fiscal e a inflação',
      image: {
        src: '/images/news/dolar-fecha-a-r-5-65-ibovespa-cai-0-43-a-171-mil-pontos-pacote-fiscal-12-11-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com dólar a R$ 5,65, alta de 1,6%, Ibovespa a 171.324 pontos e queda de 0,43%.',
        caption:
          'Os números do fechamento de quinta-feira, 12 de novembro, como informados pelo Bora Investir (B3).',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O projeto de ajuste fiscal foi apresentado pelo governo na noite de quarta-feira (11), com estimativa de impacto de R$ 50 bilhões a R$ 60 bilhões em 2027. Na quarta, a proposta foi recebida com otimismo. Na quinta, segundo o Bora Investir, os agentes passaram a avaliar que as medidas podem ser insuficientes para a sustentabilidade da dívida pública. O texto está em tramitação no Senado e não vale como regra até ser votado e sancionado.',
        'Pela manhã, o IBGE divulgou o IPCA de outubro: alta de 0,14%, abaixo dos 0,25% esperados pelo mercado na pesquisa da Reuters. Em 12 meses, a inflação ficou em 4,63%, também abaixo dos 4,73% projetados, mas acima do teto da meta. Em setembro, o índice havia sido de 0,82%.',
        'Segundo a Reuters, citada pelo InfoMoney, o dólar também subiu no exterior depois de dados fortes de inflação nos Estados Unidos, que levaram o mercado a rever as apostas para os juros americanos.',
      ],
    },
    {
      heading: 'Quanto a alta do dólar muda em reais',
      paragraphs: [
        'A conta do consumidor é o preço em dólar multiplicado pela cotação. Uma compra de US$ 1.000 custava R$ 5.562,80 com o dólar a R$ 5,5628 e passa a custar cerca de R$ 5.650,00 com o dólar a R$ 5,65: uma diferença de aproximadamente R$ 87,20. Em US$ 500, a diferença é de cerca de R$ 43,60.',
        'Esses valores usam só o câmbio comercial. No cartão de crédito ou na casa de câmbio entram o spread de quem faz a operação e o IOF, então o total costuma ficar acima da cotação. Quem tem compra internacional ou viagem para pagar deve conferir o valor final no momento da operação. A variação percentual entre duas cotações pode ser conferida na calculadora de porcentagem do portal.',
        'Para quem tem ações, a queda de 0,43% do Ibovespa significa que R$ 10.000 aplicados em um fundo que copiasse o índice, sem contar taxas e dividendos, passariam a valer cerca de R$ 9.957 ao fim do pregão, uma perda de aproximadamente R$ 43 no dia. A renda fixa em reais, como CDB e Tesouro Selic, segue a Selic e o CDI, não o Ibovespa.',
      ],
      table: {
        caption: 'Compra em dólar, câmbio comercial, sem spread nem IOF',
        columns: [
          'Valor',
          'Dólar a R$ 5,5628 (11/11)',
          'Dólar a R$ 5,65 (12/11)',
        ],
        rows: [
          ['US$ 100', 'R$ 556,28', 'R$ 565,00'],
          ['US$ 500', 'R$ 2.781,40', 'R$ 2.825,00'],
          ['US$ 1.000', 'R$ 5.562,80', 'R$ 5.650,00'],
        ],
      },
    },
    {
      heading: 'O que olhar nos próximos dias',
      paragraphs: [
        'O ponto central é a votação do projeto de ajuste fiscal no Senado, que estava prevista para quinta-feira (12) e, segundo a Agência Brasil, poderia ficar para a semana seguinte se os líderes pedissem mais tempo. O desfecho pode mexer de novo com câmbio e juros.',
        'O boletim Focus, divulgado às segundas-feiras pelo Banco Central, mostra as projeções do mercado para câmbio, inflação e juros. São estimativas, não decisões oficiais. Em dias de forte oscilação, decidir no impulso costuma sair caro: vale conferir o objetivo e o prazo de cada aplicação antes de mudar a carteira.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto fechou o dólar em 12 de novembro de 2026?',
      answer:
        'O dólar à vista fechou a R$ 5,65, alta de 1,6% no dia e maior valor de fechamento desde junho de 2025, segundo o Bora Investir (B3). Na quarta-feira (11), tinha fechado a R$ 5,5628.',
    },
    {
      question: 'Quanto fechou o Ibovespa na quinta-feira?',
      answer:
        'O Ibovespa caiu 0,43% e fechou em 171.324,31 pontos, com máxima de 172.060,43 e mínima de 169.942,37.',
    },
    {
      question: 'O projeto de ajuste fiscal já vale?',
      answer:
        'Não. O projeto foi apresentado em 11/11 e está em tramitação no Senado. Só vale como regra depois de aprovado e sancionado.',
    },
  ],
  sources: [
    {
      label:
        'Bora Investir (B3): Ibovespa B3 cai 0,43%, pressionado por incerteza fiscal; dólar sobe a R$ 5,65, 12/11/2026',
      url: 'https://borainvestir.b3.com.br/noticias/mercado/ibovespa-b3-cai-043-pressionado-por-incerteza-fiscal-dolar-sobe-a-r-565/',
    },
    {
      label:
        'InfoMoney: Ibovespa hoje, cobertura de 12/11/2026 (IPCA de outubro e dólar)',
      url: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-12112026/',
    },
    {
      label:
        'Agência Brasil: Senado deve votar ajuste fiscal com previsão de economia de R$ 60 bi',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-11/senado-deve-votar-ajuste-fiscal-com-previsao-de-economia-de-r-60-bi',
    },
    {
      label: 'Banco Central: histórico de cotações',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes',
    },
  ],
} as const satisfies NewsDocument;
