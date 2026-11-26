import type { NewsDocument } from '../../types';

export const newsIpca15Novembro2026 = {
  kind: 'news',
  slug: 'ipca-15-de-novembro-sobe-0-22-inflacao-em-12-meses-vai-a-4-64-tomate-dispara-38-92',
  title:
    'IPCA-15 de novembro sobe 0,22% e inflação em 12 meses vai a 4,64%; tomate dispara 38,92%',
  description:
    'O IBGE divulgou o IPCA-15 de novembro: 0,22% no mês e 4,64% em 12 meses. Alimentos subiram 1,51% e transportes caíram 0,71%. Veja a conta no seu bolso.',
  category: 'economia',
  coverImage: {
    src: '/images/news/ipca-15-de-novembro-sobe-0-22-inflacao-em-12-meses-vai-a-4-64-tomate-dispara-38-92.jpg',
    alt: 'Relatório do IPCA-15 de novembro com 0,22% no mês e 4,64% em 12 meses, calculadora e etiquetas de tomate com alta de 38,92% e transportes com queda de 0,71%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-26',
  updatedAt: '2026-11-26',
  tags: [
    'ipca-15',
    'ipca',
    'inflacao',
    'ibge',
    'alimentos',
    'combustiveis',
    'custo-de-vida',
  ],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem'],
  highlights: [
    {
      value: '4,64%',
      label: 'IPCA-15 em 12 meses',
      note: 'Acima do teto de 4,5% da meta. Na leitura anterior eram 4,62%.',
    },
    {
      value: '0,22%',
      label: 'IPCA-15 de novembro',
      note: 'Em outubro, a taxa tinha sido de 0,32%.',
    },
    {
      value: '+38,92%',
      label: 'Tomate no mês',
      note: 'A cebola subiu 17,43% e as carnes, 3,65%.',
    },
    {
      value: '-0,71%',
      label: 'Transportes no mês',
      note: 'Impacto de -0,14 ponto percentual no índice.',
    },
  ],
  sections: [
    {
      heading: 'O que o IBGE divulgou em 26/11',
      paragraphs: [
        'O IBGE divulgou em 26/11/2026 que o IPCA-15, a prévia da inflação oficial, subiu 0,22% em novembro. A taxa ficou abaixo dos 0,32% de outubro e um pouco acima dos 0,20% registrados em novembro de 2025.',
        'No acumulado de 12 meses, o índice chegou a 4,64%, contra 4,62% na leitura anterior. O número segue acima do teto de 4,5% da meta de inflação, que é de 3% com tolerância de 1,5 ponto percentual para cima ou para baixo. No ano, o IPCA-15 acumula 4,38%.',
        'O resultado do mês foi mais baixo mesmo com a comida mais cara porque os transportes recuaram. Cinco dos nove grupos pesquisados tiveram alta. O IPCA cheio de novembro, que fecha o mês-calendário, está previsto para 11/12.',
      ],
    },
    {
      heading: 'Comida no mercado pesa mais: tomate, cebola, carnes e arroz',
      image: {
        src: '/images/news/ipca-15-de-novembro-sobe-0-22-inflacao-em-12-meses-vai-a-4-64-tomate-dispara-38-92-detalhe.jpg',
        alt: 'Detalhe da ilustração: relatório do IPCA-15 de novembro com 0,22% no mês, 0,32% em outubro, 4,64% em 12 meses e 1,51% em alimentos.',
        caption:
          'O IPCA-15 de novembro subiu 0,22%, e a inflação em 12 meses chegou a 4,64%.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Alimentação e bebidas subiu 1,51% e foi o grupo que mais pesou, com 0,33 ponto percentual de impacto. A alimentação no domicílio, ou seja, a compra de supermercado e feira, avançou 2,02%, o dobro dos 1,01% de outubro.',
        'O tomate liderou as altas, com 38,92%. Também ficaram mais caros a cebola (17,43%), as carnes (3,65%) e o arroz (3,38%). Do lado das quedas, aparecem a batata-inglesa (-2,33%) e o leite longa vida (-1,84%).',
      ],
      table: {
        caption: 'Itens de destaque no IPCA-15 de novembro de 2026 (IBGE)',
        columns: ['Item ou grupo', 'Variação no mês'],
        rows: [
          ['Tomate', '38,92%'],
          ['Cebola', '17,43%'],
          ['Carnes', '3,65%'],
          ['Arroz', '3,38%'],
          ['Alimentação no domicílio', '2,02%'],
          ['Alimentação e bebidas', '1,51%'],
          ['Batata-inglesa', '-2,33%'],
          ['Leite longa vida', '-1,84%'],
          ['Transportes', '-0,71%'],
        ],
      },
    },
    {
      heading: 'Transportes seguraram o índice',
      paragraphs: [
        'O grupo transportes recuou 0,71% e tirou 0,14 ponto percentual do resultado geral. Foi esse alívio que fez o índice desacelerar de 0,32% para 0,22%, mesmo com a alimentação no domicílio acelerando.',
        'A alta dos alimentos e a queda dos transportes se compensam no número geral, mas não no bolso de todo mundo: quem gasta mais com supermercado sente a inflação acima da média, e quem depende pouco do carro sente menos o alívio.',
      ],
    },
    {
      heading: 'A conta em reais',
      paragraphs: [
        'Uma compra de supermercado de R$ 600 por mês, se acompanhasse os 2,02% da alimentação no domicílio, passaria a custar R$ 612,12, ou R$ 12,12 a mais. Um quilo de tomate a R$ 8,00, com alta de 38,92%, iria a R$ 11,11.',
        'Para o aluguel, vale o índice que está no contrato. Se for o IPCA, conta o acumulado de 12 meses do IPCA cheio, e não o da prévia. Como referência, 4,64% sobre um aluguel de R$ 2.000 dá R$ 92,80 de reajuste, e o aluguel iria a R$ 2.092,80.',
        'O IPCA-15 não corrige aluguel nem salário por conta própria. Ele serve de termômetro do custo de vida e de pista para o que o IPCA cheio de 11/12 pode mostrar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto foi o IPCA-15 de novembro de 2026?',
      answer:
        'O IBGE informou alta de 0,22% no mês, com 4,38% no ano e 4,64% em 12 meses.',
    },
    {
      question: 'IPCA-15 serve para reajustar o aluguel?',
      answer:
        'Em geral não. Os contratos costumam usar o IPCA cheio ou o IGP-M, conforme está escrito no contrato. O IPCA-15 é uma prévia.',
    },
    {
      question: 'O que puxou a inflação em novembro?',
      answer:
        'A alimentação e bebidas, com alta de 1,51% e impacto de 0,33 ponto percentual, com destaque para tomate, cebola, carnes e arroz.',
    },
  ],
  sources: [
    {
      label: 'IBGE: IPCA-15, Índice Nacional de Preços ao Consumidor Amplo 15',
      url: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9260-indice-nacional-de-precos-ao-consumidor-amplo-15.html',
    },
    {
      label: 'Agência Brasil: IPCA-15 teve alta de 0,22% em novembro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/ipca-15-teve-alta-de-022-em-novembro',
    },
    {
      label: 'Banco Central do Brasil: meta para a inflação',
      url: 'https://www.bcb.gov.br/controleinflacao',
    },
  ],
} as const satisfies NewsDocument;
