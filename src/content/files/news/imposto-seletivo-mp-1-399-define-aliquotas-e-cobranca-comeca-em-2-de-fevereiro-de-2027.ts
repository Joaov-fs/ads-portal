import type { NewsDocument } from '../../types';

export const newsImpostoSeletivoMp1399Aliquotas = {
  kind: 'news',
  slug: 'imposto-seletivo-mp-1-399-define-aliquotas-e-cobranca-comeca-em-2-de-fevereiro-de-2027',
  title:
    'Imposto Seletivo: MP 1.399 define alíquotas de cigarro, bebidas e carros, e a cobrança começa em 2/2/2027',
  description:
    'A MP 1.399/2026 fixa as alíquotas do Imposto Seletivo: cerveja 4,2%, bebida açucarada 2,6%, carro 6,3% de base. A cobrança começa em 2 de fevereiro de 2027.',
  category: 'economia',
  coverImage: {
    src: '/images/news/imposto-seletivo-mp-1-399-define-aliquotas-e-cobranca-comeca-em-2-de-fevereiro-de-2027.jpg',
    alt: 'Documento do Imposto Seletivo com alíquotas de cerveja, bebida açucarada e carro, calendário de fevereiro de 2027 com o dia 2 marcado, etiqueta de R$ 41,9 bi e celular com R$ 3,50 por maço de cigarro.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-05',
  updatedAt: '2026-11-05',
  tags: [
    'imposto-seletivo',
    'reforma-tributaria',
    'medida-provisoria',
    'impostos',
    'porcentagem',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '2/2/2027',
      label: 'Início da cobrança',
      note: 'Até lá, o IPI continua valendo para esses produtos.',
    },
    {
      value: 'R$ 41,9 bi',
      label: 'Arrecadação prevista em 2027',
      note: 'Valor da proposta orçamentária, segundo a Agência Brasil.',
    },
    {
      value: '4,2%',
      label: 'Alíquota da cerveja de malte',
      note: 'Bebidas açucaradas pagam 2,6%.',
    },
    {
      value: '6,3%',
      label: 'Base para carros de passeio',
      note: 'Muda conforme poluição, potência e segurança.',
    },
  ],
  sections: [
    {
      heading: 'O que a MP 1.399 estabelece',
      paragraphs: [
        'O governo publicou na quarta-feira, 4 de novembro de 2026, a Medida Provisória 1.399, que define as alíquotas do Imposto Seletivo para 2027. É o texto que faltava para saber quanto esse tributo, conhecido como "imposto do pecado", vai cobrar de cigarros, bebidas, carros, barcos e outros produtos. A MP foi detalhada pela Agência Brasil, pela Agência Câmara e pela TV Senado em 5 de novembro.',
        'A cobrança começa em 2 de fevereiro de 2027, e não em 1º de janeiro. Segundo a Agência Câmara, as alíquotas desse período equivalem às atuais do IPI e valem até o fim de 2027. O aumento do imposto só ocorre a partir de 2028, com alíquotas definitivas que dependem de um projeto de lei a ser enviado ao Congresso até 31 de maio de 2027.',
        'Como é uma medida provisória, ela já vale, mas precisa ser aprovada pela Câmara e pelo Senado para virar lei. O texto pode mudar durante a análise.',
      ],
      table: {
        caption:
          'Calendário do Imposto Seletivo segundo as matérias consultadas',
        columns: ['Etapa', 'Data'],
        rows: [
          ['MP 1.399 publicada', '4/11/2026'],
          ['Início da cobrança', '2/2/2027'],
          [
            'Alíquotas temporárias, equivalentes às do IPI',
            'Fevereiro a dezembro de 2027',
          ],
          [
            'Projeto com as alíquotas definitivas deve ir ao Congresso',
            'Até 31/5/2027',
          ],
          ['Alíquotas definitivas', 'A partir de janeiro de 2028'],
        ],
      },
    },
    {
      heading: 'Quais são as alíquotas de cada produto',
      image: {
        src: '/images/news/imposto-seletivo-mp-1-399-define-aliquotas-e-cobranca-comeca-em-2-de-fevereiro-de-2027-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com início da cobrança em 2/2/2027, cerveja de malte a 4,2%, bebida açucarada a 2,6% e carro com base de 6,3%.',
        caption:
          'As alíquotas da MP 1.399 valem de fevereiro a dezembro de 2027.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A tabela abaixo reúne as alíquotas que as três matérias trazem em comum ou que a Agência Brasil publicou com base no texto da MP. Para cigarros, a regra é mista: 66,7% sobre 15% do preço, mais R$ 3,50 por maço (vintena). Os demais produtos de fumo pagam 37,5%.',
        'Os carros de passeio têm alíquota-base de 6,3%, ajustada por cinco critérios: fonte de energia e tecnologia de propulsão, eficiência energética, potência, desempenho estrutural e tecnologias de assistência à direção, e reciclabilidade. O resultado é multiplicado por um fator de conversão de 1,21. Por isso, a alíquota final de cada modelo pode ficar acima ou abaixo de 6,3%.',
      ],
      table: {
        caption: 'Alíquotas do Imposto Seletivo na MP 1.399/2026',
        columns: ['Produto', 'Alíquota'],
        rows: [
          ['Bebidas açucaradas', '2,6%'],
          ['Cervejas de malte', '4,2%'],
          ['Vinhos', '8%'],
          ['Vermutes', '12%'],
          ['Bebidas alcoólicas acima de 14% de teor', '16%'],
          ['Demais bebidas destiladas', '24%'],
          ['Demais produtos de fumo', '37,5%'],
          ['Aviões e helicópteros', '6,8%'],
          ['Barcos a motor', '12%'],
          ['Carros de passeio (base, antes dos ajustes)', '6,3%'],
          ['Comerciais leves (base, antes dos ajustes)', '3,9%'],
        ],
      },
    },
    {
      heading: 'Como fica a conta: exemplos com números',
      paragraphs: [
        'O imposto é cobrado uma única vez na cadeia, sobre a produção, a extração, a comercialização ou a importação, e não dá direito a crédito de etapas anteriores. A base de cálculo depende do texto completo da MP, então os exemplos abaixo servem para entender a ordem de grandeza e não preveem o preço na prateleira.',
        'Cerveja de malte: com alíquota de 4,2%, uma operação de R$ 1.000,00 gera R$ 42,00 de Imposto Seletivo (1.000 x 0,042). Bebida açucarada: com 2,6%, a mesma base de R$ 1.000,00 gera R$ 26,00.',
        'Cigarro: 66,7% sobre 15% do preço equivale a cerca de 10% do preço. Em um maço com preço de referência de R$ 10,00, seriam cerca de R$ 1,00 mais os R$ 3,50 por maço, ou seja, aproximadamente R$ 4,50. Para conferir percentuais com outras bases, use a calculadora de porcentagem do portal.',
        'Segundo a Agência Câmara, as alíquotas foram calculadas para manter a carga tributária atual. Se o governo quiser arrecadar mais com o Imposto Seletivo no futuro, terá de compensar com redução da CBS, a contribuição que substitui PIS e Cofins. As matérias consultadas não calculam o impacto no preço final de cada produto.',
      ],
    },
    {
      heading: 'Quem fica de fora e o que ainda falta',
      paragraphs: [
        'Têm alíquota zero ou ficam fora do imposto, segundo a Agência Brasil e a Agência Câmara: pessoas com deficiência e com transtorno do espectro autista, taxistas, veículos sustentáveis que cumpram os critérios e tenham o registro exigido, caminhões com peso bruto de 3.500 kg ou mais (exceto picapes) e veículos, aviões e barcos das Forças Armadas e da segurança pública.',
        'Minerais como petróleo, minério de ferro, carvão mineral e gás natural têm alíquota zero em 2027, e a tributação definitiva será definida depois. As três matérias consultadas não tratam de gás de cozinha, gasolina e diesel, e o PortalFina não afirma nada sobre eles.',
        'Outro ponto em aberto: a Agência Câmara informa que o governo vai enviar uma proposta de emenda à Constituição para manter o imposto no início de 2027. As datas podem mudar se o Congresso alterar o texto.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando o Imposto Seletivo começa a ser cobrado?',
      answer:
        'Em 2 de fevereiro de 2027, segundo a Agência Câmara. De fevereiro a dezembro de 2027, as alíquotas equivalem às atuais do IPI. O aumento ocorre a partir de 2028.',
    },
    {
      question: 'Vou pagar mais caro por refrigerante e cerveja em 2027?',
      answer:
        'As alíquotas foram calculadas para manter a carga tributária atual em 2027, segundo a Agência Câmara. As matérias consultadas não estimam o preço final nas prateleiras, que depende também da cadeia de vendas.',
    },
    {
      question: 'A MP já é lei?',
      answer:
        'Ainda não. A MP 1.399 vale desde a publicação, mas precisa ser aprovada pela Câmara e pelo Senado para virar lei, e o Congresso pode alterar o texto.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Imposto do pecado, entenda cobrança sobre cigarros, bebidas e veículos (5/11/2026)',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/imposto-do-pecado-entenda-cobranca-sobre-cigarros-bebidas-e-veiculos',
    },
    {
      label:
        'Agência Câmara: Medida provisória regulamenta o Imposto Seletivo para 2027 (5/11/2026)',
      url: 'https://www.camara.leg.br/noticias/1316363-medida-provisoria-regulamenta-o-imposto-seletivo-para-2027',
    },
    {
      label:
        'TV Senado: Imposto Seletivo, MP define alíquotas para cigarros, bebidas e veículos em 2027 (5/11/2026)',
      url: 'https://www12.senado.leg.br/tv/programas/noticias-1/2026/11/imposto-seletivo-mp-define-aliquotas-para-cigarros-bebidas-e-veiculos-em-2027',
    },
  ],
} as const satisfies NewsDocument;
