import type { NewsDocument } from '../../types';

export const newsTcuCbs113Para2027 = {
  kind: 'news',
  slug: 'tcu-aprova-cbs-de-11-3-para-2027-o-que-muda-para-o-consumidor',
  title:
    'TCU aprova alíquota de 11,3% para a CBS em 2027: o que muda para o consumidor',
  description:
    'O TCU aprovou em 28/10 a alíquota de referência de 11,3% da CBS, que substitui PIS e Cofins. Veja o que a conta significa, o que falta e como fica o seu bolso.',
  category: 'economia',
  coverImage: {
    src: '/images/news/tcu-aprova-cbs-de-11-3-para-2027-o-que-muda-para-o-consumidor.jpg',
    alt: 'Documento com a alíquota de 11,3% da CBS e o redutor de 44,16% para compras públicas, calculadora mostrando 11,3% e celular com CBS em 2027.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-28',
  updatedAt: '2026-10-28',
  tags: [
    'reforma-tributaria',
    'cbs',
    'ibs',
    'pis',
    'cofins',
    'tcu',
    'impostos',
  ],
  featuredCalculators: ['porcentagem', 'simples-nacional'],
  highlights: [
    {
      value: '11,3%',
      label: 'Alíquota de referência da CBS',
      note: 'O número exato calculado pelo TCU é 11,3468%, arredondado para baixo.',
    },
    {
      value: '28/10',
      label: 'Decisão do plenário do TCU',
      note: 'Sessão extraordinária, com o resultado enviado ao Senado.',
    },
    {
      value: '44,16%',
      label: 'Redutor nas compras públicas',
      note: 'Vale para administração direta, autarquias e fundações.',
    },
  ],
  sections: [
    {
      heading: 'O que o TCU decidiu sobre a CBS',
      paragraphs: [
        'O plenário do Tribunal de Contas da União aprovou em 28 de outubro de 2026 o cálculo da alíquota de referência da CBS (Contribuição sobre Bens e Serviços). O percentual calculado foi de 11,3468%, arredondado para 11,3%. A decisão foi tomada em sessão plenária extraordinária.',
        'A CBS é o tributo federal criado pela reforma tributária do consumo para substituir o PIS/Pasep e a Cofins. Hoje esses dois tributos estão embutidos no preço de quase tudo o que o consumidor compra, de alimentos a serviços. A troca é gradual, e a transição do novo modelo vai até 2033, quando ele passa a valer por inteiro.',
        'O mesmo plenário fixou em 44,16% o redutor aplicado às compras da administração pública direta, de autarquias e de fundações públicas. Isso significa que, quando o governo compra bens e serviços, a CBS efetivamente cobrada é menor do que a alíquota cheia.',
        'O resultado do TCU segue agora para o Senado Federal, que fixa a alíquota de referência por meio de resolução. A decisão do tribunal, portanto, ainda não é a palavra final: ela é o cálculo técnico que serve de base para o Senado.',
      ],
    },
    {
      heading: 'Como a alíquota de referência é calculada',
      image: {
        src: '/images/news/tcu-aprova-cbs-de-11-3-para-2027-o-que-muda-para-o-consumidor-detalhe.jpg',
        alt: 'Detalhe da ilustração: alíquota de referência de 11,3%, redutor de 44,16% nas compras públicas, início em 2027 e decisão do TCU em 28/10.',
        caption: 'Os números da decisão do TCU sobre a CBS.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A alíquota de referência não é um valor escolhido ao acaso. Ela busca repor a arrecadação dos tributos que a CBS substitui, sem aumentar nem reduzir a carga total. Na conta entram as alíquotas reduzidas, os regimes específicos, o Simples Nacional, as devoluções de tributos e os créditos.',
        'Isso tem um efeito direto: quanto mais produtos e serviços recebem tratamento favorecido, maior tende a ser a alíquota que precisa ser aplicada sobre o restante para a arrecadação fechar. Por isso o percentual de referência pode ser diferente do que se ouvia nas primeiras estimativas da reforma.',
        'É importante separar dois conceitos. A alíquota de referência é a base de cálculo para o conjunto. A alíquota que cada produto paga na prática depende do enquadramento dele: há itens com alíquota cheia, itens com redução e itens com alíquota zero, conforme a lei da reforma.',
      ],
      table: {
        caption: 'Números da decisão do TCU sobre a CBS',
        columns: ['Item', 'Valor'],
        rows: [
          ['Alíquota calculada pelo TCU', '11,3468%'],
          ['Alíquota de referência (arredondada)', '11,3%'],
          ['Redutor para compras públicas', '44,16%'],
          ['Data da decisão do plenário', '28/10/2026'],
          ['Fim da transição do novo modelo', '2033'],
        ],
      },
    },
    {
      heading: 'O que isso significa na prática para o seu bolso',
      paragraphs: [
        'Para o consumidor, a mudança não aparece como uma conta nova. A CBS entra no preço dos produtos no lugar do PIS e da Cofins. O que a alíquota de referência indica é o peso médio do novo tributo federal quando não há benefício.',
        'Uma conta simples ajuda a enxergar a ordem de grandeza. Sobre uma venda de R$ 1.000,00 sem nenhum benefício, uma alíquota de 11,3% equivale a R$ 113,00 de CBS. Sobre R$ 2.500,00, seriam R$ 282,50. É uma conta ilustrativa: o valor real depende da base de cálculo e do enquadramento do produto, e não é o que o consumidor vai ver separado na nota.',
        'Nas compras públicas, a conta muda. Aplicando o redutor de 44,16% sobre a alíquota de 11,3%, a CBS fica em torno de 6,31% (11,3% multiplicado por 0,5584). Em uma compra de R$ 100.000,00 pelo poder público, isso daria cerca de R$ 6.310,00 de CBS, em vez de R$ 11.300,00. Também é uma conta ilustrativa, feita só para mostrar o efeito do redutor.',
        'Quem vende precisa acompanhar. A CBS é só uma das partes da reforma: o IBS (Imposto sobre Bens e Serviços), de estados e municípios, entra em paralelo, e o Simples Nacional tem regras próprias. Empresas e MEIs devem conferir com o contador como a mudança afeta preço, crédito e emissão de nota.',
      ],
    },
    {
      heading: 'O que falta e quando vale',
      paragraphs: [
        'O próximo passo é a votação do Senado. A Agência Brasil não informa prazo para essa etapa. Enquanto a resolução não for publicada, o número de 11,3% permanece como o cálculo aprovado pelo TCU, e não como alíquota final.',
        'A cobrança da CBS está prevista para começar em 2027, dentro de uma transição que se estende até 2033. Em outubro, o portal já mostrou que as empresas do Simples Nacional têm escolha a fazer sobre IBS e CBS até 30/10, o que mostra que o calendário da reforma está andando em várias frentes ao mesmo tempo.',
        'Para o leitor comum, o recado é de acompanhamento: o preço final de produtos e serviços só vai refletir a mudança de forma gradual, e as alíquotas de cada item dependem da lei, não só desse número de referência.',
      ],
    },
  ],
  faq: [
    {
      question: 'A alíquota da CBS já está definida em 11,3%?',
      answer:
        'Ainda não de forma definitiva. O TCU aprovou o cálculo em 28/10/2026 e enviou ao Senado, que fixa a alíquota de referência por resolução.',
    },
    {
      question: 'A CBS vai aumentar o preço de tudo em 11,3%?',
      answer:
        'Não. A CBS substitui o PIS e a Cofins, que já estão no preço. Além disso, há produtos com alíquota reduzida ou zero, e a conta depende do enquadramento de cada item.',
    },
    {
      question: 'Quando a CBS começa a ser cobrada?',
      answer:
        'A cobrança está prevista para 2027, dentro de uma transição que vai até 2033, quando o novo modelo passa a valer integralmente.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: TCU aprova cálculo da alíquota de referência da CBS em 11,3%',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/tcu-aprova-calculo-da-aliquota-de-referencia-da-cbs-em-113',
    },
    {
      label:
        'Jornal de Brasília: plenário do TCU dá aval à alíquota da CBS em 11,3% para 2027',
      url: 'https://jornaldebrasilia.com.br/noticias/economia/plenario-do-tcu-da-aval-a-aliquota-da-cbs-em-113-para-2027-e-encaminhara-calculo-ao-senado/',
    },
    {
      label: 'Tribunal de Contas da União',
      url: 'https://portal.tcu.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
