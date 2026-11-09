import type { NewsDocument } from '../../types';

export const newsSuperavitComercialOutubro2026 = {
  kind: 'news',
  slug: 'superavit-comercial-de-outubro-e-recorde-us-9-32-bi',
  title:
    'Superávit comercial de outubro chega a US$ 9,32 bi, o maior para o mês desde 1989',
  description:
    'O Brasil exportou US$ 37,81 bi e importou US$ 28,49 bi em outubro. Veja o que o superávit significa e o que ele muda (e não muda) para o seu bolso.',
  category: 'economia',
  coverImage: {
    src: '/images/news/superavit-comercial-de-outubro-e-recorde-us-9-32-bi.jpg',
    alt: 'Documento com a balança comercial de outubro de 2026, gráfico de exportação contra importação, etiqueta de US$ 9,32 bi, caixa de carga e carimbo SUPERÁVIT.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-09',
  updatedAt: '2026-11-09',
  tags: [
    'balanca-comercial',
    'exportacoes',
    'importacoes',
    'superavit',
    'dolar',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'US$ 9,32 bi',
      label: 'Superávit de outubro',
      note: 'Exportações menos importações no mês.',
    },
    {
      value: 'US$ 37,81 bi',
      label: 'Exportações em outubro',
      note: 'Alta de 20,0% sobre outubro de 2025.',
    },
    {
      value: 'US$ 71,04 bi',
      label: 'Superávit de jan. a out.',
      note: 'Exportações de US$ 321,88 bi e importações de US$ 250,84 bi.',
    },
  ],
  sections: [
    {
      heading: 'O que a balança comercial mostrou em outubro',
      paragraphs: [
        'Os dados da Secretaria de Comércio Exterior (Secex), do Ministério do Desenvolvimento, Indústria, Comércio e Serviços (MDIC), foram apresentados na sexta-feira, 6 de novembro. Em outubro de 2026, o Brasil exportou US$ 37,81 bilhões e importou US$ 28,49 bilhões. A diferença entre os dois valores é o superávit: US$ 9,32 bilhões (37,81 menos 28,49).',
        'Segundo a Agência Brasil, é o maior superávit para um mês de outubro desde 1989, início da série histórica. A soma de exportações e importações, chamada de corrente de comércio, foi de US$ 66,3 bilhões, a maior já registrada para o mês, segundo a Agência Gov.',
        'Na comparação com outubro de 2025, as exportações subiram 20,0% (de US$ 31,51 bilhões para US$ 37,81 bilhões) e as importações, 14,8% (de US$ 24,82 bilhões para US$ 28,49 bilhões). Como as vendas ao exterior cresceram mais do que as compras, o saldo aumentou.',
      ],
    },
    {
      heading: 'Quais setores puxaram as exportações',
      image: {
        src: '/images/news/superavit-comercial-de-outubro-e-recorde-us-9-32-bi-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com exportações de US$ 37,81 bi, importações de US$ 28,49 bi, saldo de US$ 9,32 bi e corrente de comércio de US$ 66,3 bi.',
        caption:
          'Os números de outubro de 2026 divulgados pelo governo federal.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A indústria extrativa, que reúne atividades como petróleo e minérios, teve o maior avanço: as exportações do setor subiram US$ 4,01 bilhões, alta de 53,5% sobre outubro de 2025. A indústria de transformação exportou US$ 1,31 bilhão a mais (alta de 7,7%) e a agropecuária, US$ 0,86 bilhão a mais (alta de 12,8%).',
        'Do lado das importações, a indústria de transformação foi a que mais cresceu em dólares: US$ 3,04 bilhões a mais, alta de 13,1%. A indústria extrativa importou 51,4% a mais (US$ 0,55 bilhão) e a agropecuária, 10,1% a mais (US$ 0,05 bilhão).',
      ],
      table: {
        caption: 'Variação de outubro de 2026 sobre outubro de 2025',
        columns: ['Setor', 'Exportações', 'Importações'],
        rows: [
          ['Agropecuária', '+US$ 0,86 bi (+12,8%)', '+US$ 0,05 bi (+10,1%)'],
          [
            'Indústria extrativa',
            '+US$ 4,01 bi (+53,5%)',
            '+US$ 0,55 bi (+51,4%)',
          ],
          [
            'Indústria de transformação',
            '+US$ 1,31 bi (+7,7%)',
            '+US$ 3,04 bi (+13,1%)',
          ],
        ],
      },
    },
    {
      heading: 'O acumulado do ano e a projeção do governo',
      paragraphs: [
        'De janeiro a outubro de 2026, as exportações somaram US$ 321,88 bilhões, alta de 11,2%, e as importações, US$ 250,84 bilhões, alta de 6,1%. O superávit do período é de US$ 71,04 bilhões (321,88 menos 250,84).',
        'Em outubro, o MDIC revisou a projeção de superávit para o ano inteiro de US$ 90 bilhões para US$ 84,4 bilhões, segundo a Agência Brasil. Com US$ 71,04 bilhões já acumulados, o resultado de novembro e dezembro precisaria somar US$ 13,36 bilhões (84,4 menos 71,04) para a projeção se confirmar. Isso equivale a 84,2% da meta já cumprida em dez meses (71,04 dividido por 84,4).',
      ],
    },
    {
      heading: 'O que muda para o seu bolso',
      paragraphs: [
        'Um superávit alto significa que entrou mais dinheiro em dólar no país com vendas do que saiu com compras. Isso é um dos fatores que ajudam o equilíbrio das contas externas, mas não define sozinho o preço do dólar, que também depende de juros, fluxo de capital e cenário internacional.',
        'Para o consumidor, o efeito direto e imediato é pequeno: não há reajuste de preço, imposto ou benefício que nasça desse número. O dado serve de termômetro da economia e entra nas projeções de analistas para câmbio e crescimento. Para acompanhar variações como as desta matéria, a calculadora de porcentagem do portal ajuda a refazer as contas.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é superávit na balança comercial?',
      answer:
        'É quando as exportações superam as importações no período. Em outubro de 2026, foram US$ 37,81 bilhões vendidos contra US$ 28,49 bilhões comprados, saldo de US$ 9,32 bilhões.',
    },
    {
      question: 'O superávit faz o dólar cair?',
      answer:
        'Ele ajuda a trazer dólares ao país, mas o câmbio também depende de juros, entrada e saída de capital e cenário externo. Não é possível prever o dólar só por esse dado.',
    },
    {
      question: 'Quanto o Brasil acumulou de superávit em 2026?',
      answer:
        'De janeiro a outubro, o superávit é de US$ 71,04 bilhões, segundo os dados divulgados pelo governo federal.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Corrente de comércio do Brasil bate recorde em outubro, com US$ 66,3 bilhões',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/corrente-de-comercio-do-brasil-bate-recorde-em-outubro-com-us-66-3-bilhoes',
    },
    {
      label:
        'Agência Brasil: Balança comercial tem maior superávit para outubro desde 1989',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/balanca-comercial-tem-maior-superavit-para-outubro-desde-1989',
    },
    {
      label: 'MDIC: Balança Comercial Mensal, dados consolidados',
      url: 'https://balanca.mdic.gov.br/balanca/pg_principal_bc/principais_resultados.html',
    },
  ],
} as const satisfies NewsDocument;
