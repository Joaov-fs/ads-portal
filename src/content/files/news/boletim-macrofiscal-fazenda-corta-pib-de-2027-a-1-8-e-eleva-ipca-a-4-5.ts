import type { NewsDocument } from '../../types';

export const newsBoletimMacrofiscalNovembro2026 = {
  kind: 'news',
  slug: 'boletim-macrofiscal-fazenda-corta-pib-de-2027-a-1-8-e-eleva-ipca-a-4-5',
  title:
    'Fazenda corta o PIB de 2027 para 1,8% e eleva o IPCA de 2026 para 5,3% no Boletim Macrofiscal',
  description:
    'O Boletim Macrofiscal de novembro reduziu o PIB de 2027 de 2,3% para 1,8% e subiu o IPCA de 2026 para 5,3%. Veja o efeito no seu bolso.',
  category: 'economia',
  coverImage: {
    src: '/images/news/boletim-macrofiscal-fazenda-corta-pib-de-2027-a-1-8-e-eleva-ipca-a-4-5.jpg',
    alt: 'Ficha do Boletim Macrofiscal com PIB de 2027 em 1,8%, IPCA de 2026 em 5,3%, IPCA de 2027 em 4,5% e petróleo a US$ 95,20, ao lado de calendário de novembro.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-23',
  updatedAt: '2026-11-23',
  tags: ['pib', 'ipca', 'inflacao', 'fazenda', 'boletim-macrofiscal', 'juros'],
  featuredCalculators: ['porcentagem', 'reajuste-aluguel', 'juros-compostos'],
  highlights: [
    {
      value: '1,8%',
      label: 'PIB de 2027 na projeção',
      note: 'Era 2,3% na estimativa anterior.',
    },
    {
      value: '5,3%',
      label: 'IPCA de 2026',
      note: 'Acima do teto da meta. Era 4,9%.',
    },
    {
      value: '4,5%',
      label: 'IPCA de 2027',
      note: 'No teto da meta. Era 3,8%.',
    },
    {
      value: 'US$ 95,20',
      label: 'Brent em 2027',
      note: 'Era US$ 79,50 por barril.',
    },
  ],
  sections: [
    {
      heading: 'O que a Fazenda mudou nas projeções',
      paragraphs: [
        'A Secretaria de Política Econômica do Ministério da Fazenda divulgou na segunda-feira, 23 de novembro, o Boletim Macrofiscal de novembro. O documento reduziu o crescimento esperado da economia e elevou a inflação projetada para os próximos dois anos.',
        'O PIB de 2026 passou de 2,0% para 1,9%, e o de 2027, de 2,3% para 1,8%. Para 2028 e 2029, a projeção caiu de 2,6% para 2,5%, e para 2030 ficou em 2,6%. No IPCA, a estimativa de 2026 subiu de 4,9% para 5,3%, acima do teto da meta, e a de 2027 foi de 3,8% para 4,5%, exatamente o teto.',
        'Para o petróleo Brent em 2027, a Fazenda passou a considerar US$ 95,20 por barril, contra US$ 79,50 na projeção anterior, uma alta de cerca de 19,7%.',
      ],
      table: {
        caption: 'Projeções do Boletim Macrofiscal de novembro',
        columns: ['Indicador', 'Projeção anterior', 'Nova projeção'],
        rows: [
          ['PIB de 2026', '2,0%', '1,9%'],
          ['PIB de 2027', '2,3%', '1,8%'],
          ['IPCA de 2026', '4,9%', '5,3%'],
          ['IPCA de 2027', '3,8%', '4,5%'],
          ['Brent em 2027', 'US$ 79,50', 'US$ 95,20'],
        ],
      },
    },
    {
      heading: 'Por que a Fazenda revisou os números',
      image: {
        src: '/images/news/boletim-macrofiscal-fazenda-corta-pib-de-2027-a-1-8-e-eleva-ipca-a-4-5-detalhe.jpg',
        alt: 'Detalhe da ficha do Boletim Macrofiscal com PIB de 2027 em 1,8%, IPCA de 2026 em 5,3% e IPCA de 2027 em 4,5%.',
        caption: 'Os números centrais do Boletim Macrofiscal divulgado em 23 de novembro de 2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Segundo o boletim, o crescimento de 2027 perde força porque juros e custo do crédito devem ficar elevados por mais tempo, a agropecuária contribui menos e o chamado carrego estatístico, a herança de crescimento do ano anterior, é menor. A Fazenda espera uma Selic elevada por mais tempo, com redução gradual em 2027.',
        'Na inflação, o documento cita dólar mais alto, aumento do ICMS sobre gasolina, diesel e gás de cozinha, tensões no Oriente Médio, o fenômeno El Niño e possíveis efeitos da reforma tributária e de mudanças na jornada de trabalho.',
        'Para o PIB do terceiro trimestre, a projeção é de estabilidade frente ao segundo, que cresceu 0,4%, com risco de leve queda. Por setor, a indústria deve crescer 1,4% em 2026 (antes, 1,7%), os serviços 1,7% (antes, 1,8%) e a agropecuária 3,1% (antes, 2,8%).',
        'Como fatores que sustentam a atividade, o texto lista a isenção do Imposto de Renda para faixas de menor renda, a expansão do consignado privado, a renegociação de dívidas e o reajuste do Bolsa Família no fim do ano.',
      ],
    },
    {
      heading: 'Quanto isso pesa no seu bolso',
      paragraphs: [
        'Na inflação, uma despesa mensal de R$ 1.000 custaria R$ 1.053 após 12 meses com IPCA de 5,3%, contra R$ 1.049 com IPCA de 4,9%. Para 2027, com 4,5%, o mesmo valor iria a R$ 1.045, e não a R$ 1.038 como na projeção anterior: R$ 7 a mais a cada R$ 1.000.',
        'Quem tem salário de R$ 3.000 precisaria de reajuste de 5,3% para manter o poder de compra de 2026, ou seja, R$ 3.159. Com 4,9%, bastariam R$ 3.147, uma diferença de R$ 12 por mês.',
        'No crescimento, a revisão de 2,3% para 1,8% significa 0,5 ponto percentual a menos de expansão da economia em 2027. Em geral, menor crescimento reduz a criação de vagas e a arrecadação, mas o boletim é uma projeção, não um resultado.',
        'Para comparar com o mercado, o boletim Focus de 23/11, do Banco Central, mostra IPCA de 5,15% em 2026 e de 5,12% em 2027, e PIB de 1,70% e 1,00%. As projeções do governo e do mercado diferem e mudam a cada divulgação.',
      ],
      table: {
        caption: 'Despesa de R$ 1.000 corrigida pelo IPCA projetado',
        columns: ['Cenário', 'IPCA', 'Valor após 12 meses'],
        rows: [
          ['2026, projeção nova', '5,3%', 'R$ 1.053'],
          ['2026, projeção anterior', '4,9%', 'R$ 1.049'],
          ['2027, projeção nova', '4,5%', 'R$ 1.045'],
          ['2027, projeção anterior', '3,8%', 'R$ 1.038'],
        ],
      },
    },
  ],
  faq: [
    {
      question: 'O que é o Boletim Macrofiscal?',
      answer:
        'É a publicação da Secretaria de Política Econômica da Fazenda com as projeções do governo para PIB, inflação e outros indicadores. É uma estimativa, não uma garantia.',
    },
    {
      question: 'A projeção de inflação muda o reajuste do meu salário?',
      answer:
        'Não diretamente. Reajustes seguem acordos, convenções coletivas e índices próprios. A projeção ajuda a estimar quanto o custo de vida pode subir.',
    },
    {
      question: 'Quem decide a Selic?',
      answer:
        'O Copom, do Banco Central. O boletim da Fazenda apenas projeta o cenário e não define a taxa.',
    },
  ],
  sources: [
    {
      label: 'Agência Brasil: Fazenda reduz previsão do PIB e eleva inflação para 2027',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/fazenda-reduz-previsao-do-pib-e-eleva-inflacao-para-2027',
    },
    {
      label: 'Ministério da Fazenda: Secretaria de Política Econômica',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/politica-economica',
    },
    {
      label: 'Banco Central do Brasil: boletim Focus',
      url: 'https://www.bcb.gov.br/publicacoes/focus',
    },
  ],
} as const satisfies NewsDocument;
