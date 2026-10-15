import type { NewsDocument } from '../../types';

export const newsGasolinaSemTributosFederais30DiasR089 = {
  kind: 'news',
  slug: 'gasolina-sem-tributos-federais-por-30-dias-desoneracao-de-r-0-89-por-litro',
  title:
    'Gasolina sem tributos federais por 30 dias: desoneração sobe para R$ 0,89 por litro',
  description:
    'O governo zerou PIS/Pasep, Cofins e Cide da gasolina por 30 dias: o corte vai de R$ 0,63 para R$ 0,89 por litro. Veja a conta no tanque e o que não é garantido.',
  category: 'economia',
  coverImage: {
    src: '/images/news/gasolina-sem-tributos-federais-por-30-dias-desoneracao-de-r-0-89-por-litro.jpg',
    alt: 'Documento com os tributos da gasolina somando R$ 0,89 por litro, bomba de combustível, galão vermelho, etiqueta de R$ 0,26 e moedas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-13',
  updatedAt: '2026-10-13',
  tags: [
    'gasolina',
    'combustiveis',
    'pis-cofins',
    'cide',
    'impostos',
    'porcentagem',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 0,89',
      label: 'Tributos federais zerados por litro',
      note: 'Antes eram R$ 0,63 por litro de gasolina A.',
    },
    {
      value: 'R$ 0,26',
      label: 'Corte adicional por litro',
      note: 'É a diferença entre R$ 0,89 e R$ 0,63.',
    },
    {
      value: '30 dias',
      label: 'Prazo da medida',
      note: 'Anunciada em 9/10/2026, com possibilidade de prorrogação.',
    },
    {
      value: 'R$ 2,4 bi',
      label: 'Custo estimado por mês',
      note: 'Só a parte da gasolina, segundo a Agência Brasil.',
    },
  ],
  sections: [
    {
      heading: 'O que o governo anunciou para a gasolina',
      paragraphs: [
        'Em 9 de outubro de 2026, o Governo Federal anunciou, por decreto, a prorrogação e a ampliação da desoneração da gasolina. As alíquotas de PIS/Pasep, Cofins e Cide-Combustíveis ficam zeradas na importação e na comercialização interna do produto por 30 dias, com possibilidade de prorrogação. O decreto anterior, que reduzia R$ 0,63 por litro, venceria justamente em 9 de outubro.',
        'Segundo o Ministério da Fazenda, o valor da desoneração passa de R$ 0,63 para R$ 0,89 por litro de gasolina A. O novo total é a soma de R$ 0,79 de PIS/Pasep e Cofins com R$ 0,10 de Cide. Em setembro, o decreto anterior havia reduzido a carga de PIS/Pasep e Cofins sobre a gasolina para R$ 0,16 por litro. Agora esse resto também sai.',
        'O governo explica que a medida responde à alta do petróleo: o Brent está acima de US$ 100 por barril, contra cerca de US$ 70 antes do conflito no Oriente Médio, segundo o Ministério da Justiça e Segurança Pública. O Ministério da Fazenda informa que R$ 0,89 é o mesmo patamar de desoneração de fevereiro de 2026.',
      ],
      table: {
        caption: 'Tributos federais sobre a gasolina, por litro de gasolina A',
        columns: ['Item', 'Decreto de setembro', 'Decreto de 9/10'],
        rows: [
          ['Desoneração total', 'R$ 0,63', 'R$ 0,89'],
          ['PIS/Pasep e Cofins restantes', 'R$ 0,16', 'R$ 0,00'],
          ['Cide-Combustíveis', 'R$ 0,10', 'R$ 0,00'],
          ['Prazo', 'até 9/10/2026', '30 dias, prorrogável'],
        ],
      },
    },
    {
      heading: 'Quanto isso muda no tanque: a conta em reais',
      image: {
        src: '/images/news/gasolina-sem-tributos-federais-por-30-dias-desoneracao-de-r-0-89-por-litro-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com PIS/Pasep e Cofins de R$ 0,79, Cide de R$ 0,10 e total de R$ 0,89 por litro.',
        caption: 'Os tributos zerados somam R$ 0,89 por litro de gasolina A.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A novidade desta semana é o corte adicional de R$ 0,26 por litro, porque os R$ 0,63 anteriores já estavam em vigor desde setembro. Se toda essa diferença chegasse ao preço da bomba, quem enche um tanque de 50 litros pagaria R$ 13,00 a menos (50 x R$ 0,26). Quem abastece 200 litros por mês economizaria R$ 52,00 por mês (200 x R$ 0,26).',
        'Olhando o valor total de R$ 0,89 por litro, a conta é a seguinte: R$ 44,50 em um tanque de 50 litros e R$ 178,00 em 200 litros por mês. Esse é o peso dos tributos federais que deixam de ser cobrados em comparação com um cenário sem nenhuma desoneração, e parte dele já aparecia nos preços desde setembro.',
        'Esses números são o teto teórico. O decreto fala em litro de gasolina A, que é a gasolina sem o etanol anidro misturado. A gasolina comum vendida no posto leva etanol na mistura, então a conta exata por litro da bomba pode ser menor do que a do exemplo. Para fazer a sua simulação com outro volume ou outro percentual de repasse, use a calculadora de porcentagem do portal.',
      ],
      table: {
        caption:
          'Economia possível conforme o quanto do corte chegar ao preço da bomba',
        columns: [
          'Parcela repassada',
          'Corte de R$ 0,26: 50 litros',
          'Corte de R$ 0,26: 200 litros por mês',
        ],
        rows: [
          ['100%', 'R$ 13,00', 'R$ 52,00'],
          ['50%', 'R$ 6,50', 'R$ 26,00'],
          ['0%', 'R$ 0,00', 'R$ 0,00'],
        ],
      },
    },
    {
      heading: 'O desconto chegar ao posto não é garantido',
      paragraphs: [
        'O texto oficial do Ministério da Fazenda zera os tributos, mas não diz se nem como a redução deve aparecer no preço final ao consumidor. Quem define o preço na bomba é cada posto, que também considera o custo do combustível comprado da distribuidora, a margem e as despesas de operação. O decreto muda um custo da cadeia, não fixa o preço.',
        'No diesel, o governo usou outro desenho: uma subvenção em que quem adere deve descontar o valor do preço de venda. Para a gasolina, o instrumento é a retirada de tributos, sem regra de repasse descrita no texto.',
        'Por isso o efeito pode variar por cidade, por posto e por semana. Uma reportagem de 12 de outubro sobre o Cariri, no Ceará, registrou queda de R$ 6,93 para R$ 6,39 em postos do Crato, mas o próprio texto afirma que ainda não era possível atribuir essa queda diretamente à desoneração. A ANP divulga toda semana o preço médio de revenda por cidade, e é a melhor forma de comparar o posto do seu bairro.',
        'Sobre fiscalização, o Ministério da Justiça informa que a Senacon fiscalizou 11.140 postos e 463 distribuidoras entre março e maio de 2026 e que, desde 22 de setembro, uma segunda fase somou 676 ações.',
      ],
    },
    {
      heading: 'Etanol e diesel também entraram no pacote',
      paragraphs: [
        'No etanol hidratado, a alíquota zero de PIS/Pasep e Cofins foi prorrogada por mais um mês e equivale a R$ 0,19 por litro. Como a gasolina ficou com carga federal zerada, o governo elevou a subvenção a produtores e cooperativas de etanol de R$ 0,25 para cerca de R$ 0,43 por litro (R$ 0,4287, segundo o Ministério da Fazenda), para manter a diferença de competitividade do etanol.',
        'No diesel, o governo anunciou uma subvenção adicional de R$ 1,40 por litro de diesel A rodoviário importado, por 30 dias. Ela se soma aos R$ 2,12 por litro que já estavam em vigor, e a portaria correspondente estava prevista para terça-feira, 13 de outubro. O custo estimado é de R$ 1,6 bilhão em 30 dias, e a ANP fica responsável pela habilitação, pelo acompanhamento de preços e pelo pagamento.',
        'Para quem abastece com flex, a decisão entre gasolina e etanol continua dependendo do preço de cada um no posto. A regra prática de comparar o preço do etanol com 70% do preço da gasolina segue valendo, e a calculadora de porcentagem faz essa conta em segundos.',
      ],
    },
    {
      heading: 'Quem paga a conta e até quando vale',
      paragraphs: [
        'O Ministério do Planejamento informa que a renúncia de receita com gasolina e etanol será compensada com receitas extraordinárias de petróleo da União, para manter a neutralidade fiscal. A estimativa de impacto é de R$ 3,6 bilhões em 2026 para gasolina e etanol, e de R$ 2,4 bilhões por mês só para a gasolina, segundo a Agência Brasil.',
        'As medidas são temporárias, valem apenas para 2026 e podem ser revistas conforme as condições econômicas e a disponibilidade orçamentária. O prazo de 30 dias termina no início de novembro, e uma nova prorrogação depende de novo ato do governo. Quem faz planejamento de gastos com combustível deve tratar o desconto como temporário, sem incluí-lo de forma permanente no orçamento do mês.',
      ],
    },
  ],
  faq: [
    {
      question: 'A gasolina vai ficar R$ 0,89 mais barata?',
      answer:
        'Não necessariamente. R$ 0,89 é o total de tributos federais zerados por litro de gasolina A, e R$ 0,63 desse valor já estava em vigor desde setembro. O corte novo é de R$ 0,26 por litro, e o repasse ao preço da bomba depende de cada posto.',
    },
    {
      question: 'Até quando vale a redução de tributos da gasolina?',
      answer:
        'A medida vale por 30 dias a partir do anúncio de 9 de outubro de 2026, ou seja, até o início de novembro, e pode ser prorrogada por novo ato do governo.',
    },
    {
      question: 'Quais tributos foram zerados?',
      answer:
        'PIS/Pasep, Cofins e Cide-Combustíveis, tanto na importação quanto na comercialização interna de gasolina. O ICMS, que é cobrado pelos estados, não faz parte da medida.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Fazenda: Governo Federal prorroga desoneração da gasolina e do etanol (9/10/2026)',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/governo-federal-prorroga-desoneracao-da-gasolina-e-do-etanol',
    },
    {
      label:
        'Ministério da Fazenda: Governo Federal adota novas medidas para combustíveis frente a oscilações do petróleo (setembro de 2026)',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/setembro/governo-federal-adota-novas-medidas-para-combustiveis-frente-a-oscilacoes-do-petroleo',
    },
    {
      label:
        'Ministério da Justiça e Segurança Pública: Governo Federal zera tributos sobre a gasolina e reforça subvenção a importadores de diesel (9/10/2026)',
      url: 'https://www.gov.br/mj/pt-br/assuntos/noticias-1/governo-federal-zera-tributos-sobre-a-gasolina-e-reforca-subvencao-a-importadores-de-diesel',
    },
    {
      label:
        'Agência Brasil: Tributos da gasolina são zerados e subsídios a combustíveis ampliados (outubro de 2026)',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/tributos-da-gasolina-sao-zerados-e-subsidios-combustiveis-ampliados',
    },
  ],
} as const satisfies NewsDocument;
