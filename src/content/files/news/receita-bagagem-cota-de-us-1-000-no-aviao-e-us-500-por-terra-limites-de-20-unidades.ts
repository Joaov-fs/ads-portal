import type { NewsDocument } from '../../types';

export const newsReceitaBagagemCotaLimites = {
  kind: 'news',
  slug: 'receita-bagagem-cota-de-us-1-000-no-aviao-e-us-500-por-terra-limites-de-20-unidades',
  title:
    'Bagagem: Receita publica quadro com cota de US$ 1.000 (avião e navio) e US$ 500 (terra) e limite de 20 unidades',
  description:
    'A Receita atualizou o Guia do Viajante: cota de US$ 1.000 ou US$ 500, limites de unidades e multa de 50% para quem escolhe Nada a Declarar sem poder.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/receita-bagagem-cota-de-us-1-000-no-aviao-e-us-500-por-terra-limites-de-20-unidades.jpg',
    alt: 'Documento com os limites de bagagem na chegada ao Brasil, roteiro de três passos e etiquetas de US$ 1.000 e US$ 500.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: [
    'bagagem',
    'receita-federal',
    'viagem',
    'alfandega',
    'compras-no-exterior',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'US$ 1.000',
      label: 'Cota por avião ou navio',
      note: 'Por terra, rio ou lago, a cota é de US$ 500.',
    },
    {
      value: '20',
      label: 'Unidades no total',
      note: 'No avião e no navio. Por terra, o teto é de 10.',
    },
    {
      value: '50% + 50%',
      label: 'Imposto e multa',
      note: 'Sobre o excedente de quem escolhe Nada a Declarar sem poder.',
    },
  ],
  sections: [
    {
      heading: 'O que a Receita publicou em 26/11',
      image: {
        src: '/images/news/receita-bagagem-cota-de-us-1-000-no-aviao-e-us-500-por-terra-limites-de-20-unidades-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com as cotas de US$ 1.000 e US$ 500 e o limite de 20 e 10 unidades.',
        caption:
          'Os limites de bagagem na chegada ao Brasil, segundo a Receita.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Em 26/11, a Receita Federal atualizou o Guia do Viajante com foco nas regras de bagagem: o que pode ser trazido, em quais quantidades e quais procedimentos valem em cada tipo de viagem. A novidade é um quadro sintético, o Quadro Bagagem na Chegada ao Brasil, que reúne as regras num só lugar. O guia em inglês também foi revisado.',
        'A cota de isenção é de US$ 1.000 para quem chega por via aérea ou marítima e de US$ 500 para quem chega por via terrestre, fluvial ou lacustre. A cota é individual e intransferível: não se soma entre familiares.',
        'Os prazos também variam. Na via aérea, o pagamento do imposto deve ser feito em até 30 dias. Nas demais vias, os bens ficam armazenados por até 45 dias.',
      ],
      table: {
        caption: 'Cota de isenção e prazos por tipo de viagem',
        columns: ['Item', 'Avião ou navio', 'Terra, rio ou lago'],
        rows: [
          ['Cota de isenção', 'US$ 1.000', 'US$ 500'],
          ['Teto de unidades (compras e presentes)', '20', '10'],
          [
            'Prazo para pagar ou armazenamento',
            '30 dias para pagar',
            'Até 45 dias armazenados',
          ],
        ],
      },
    },
    {
      heading: 'Limites de unidades: o que conta e o que não conta',
      paragraphs: [
        'Os limites de quantidade valem para os bens da cota, ou seja, compras e presentes. Roupas e itens de higiene e uso pessoal compatíveis com a viagem não entram nessa conta.',
        'O teto global é de 20 unidades no avião e no navio e de 10 por terra, rio ou lago, somando todos os itens. Para bens idênticos, isto é, da mesma espécie, marca, modelo e características essenciais, o limite é de 10 unidades quando o item é de menor valor e de 3 quando é de maior valor. Kits, caixas e conjuntos fechados contam como uma unidade só.',
        'O que passar dos limites é tributado pelo Regime de Tributação Especial, sem desconto da cota. A Receita também lista bens sujeitos a controle específico, como bebidas e tabaco acima do limite, partes de veículos, bens com fim comercial e produtos que dependem de Anvisa ou Vigiagro.',
      ],
    },
    {
      heading: 'Nada a Declarar: o risco de escolher o canal errado',
      paragraphs: [
        'Quem escolhe indevidamente o canal Nada a Declarar paga imposto de 50% e multa de 50% sobre o excedente. Veja a conta de um exemplo: uma pessoa que desembarca de avião com US$ 1.350 em compras tem US$ 350 acima da cota de US$ 1.000. Se ela escolher indevidamente o canal Nada a Declarar, a Receita cobra US$ 175 de imposto (50% de US$ 350) e mais US$ 175 de multa, num total de US$ 350 sobre o excedente.',
        'O quadro também esclarece o enquadramento de alguns bens como bagagem: drones recreativos dispensam registro aeronáutico complexo, bicicletas elétricas e equipamentos autopropelidos, como patinetes e monociclos, entram como bagagem, e ciclomotores exigem registro no Renavam e despacho formal de importação. A Receita informou ainda que prepara uma IA Guia do Viajante, sem data de lançamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'A cota de US$ 1.000 pode ser somada entre familiares?',
      answer:
        'Não. A cota de isenção é individual e intransferível, e não se soma entre familiares.',
    },
    {
      question: 'Roupas usadas na viagem entram no limite de 20 unidades?',
      answer:
        'Não. Segundo a Receita, os limites de quantidade não se aplicam a roupas e itens de higiene e uso pessoal compatíveis com a viagem.',
    },
    {
      question: 'O que acontece com o excedente da cota?',
      answer:
        'É tributado pelo Regime de Tributação Especial. Quem escolhe o canal Nada a Declarar indevidamente paga ainda imposto de 50% e multa de 50% sobre o excedente.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Receita explica limites de bagagens e compras na alfândega do Brasil',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/sem-surpresas-na-alfandega-receita-federal-publica-quadro-inedito-de-bagagem-e-esclarece-limites-de-compras-na-chegada-ao-brasil',
    },
    {
      label:
        'Receita Federal: Isenções, cotas, limites quantitativos e Free Shop',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/viagens-internacionais/guia-do-viajante/entrada-no-brasil/cota-de-isencao-duty-free-e-bagagem-tributavel',
    },
  ],
} as const satisfies NewsDocument;
