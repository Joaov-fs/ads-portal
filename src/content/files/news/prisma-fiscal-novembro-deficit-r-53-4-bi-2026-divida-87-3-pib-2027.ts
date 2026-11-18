import type { NewsDocument } from '../../types';

export const newsPrismaFiscalNovembro2026 = {
  kind: 'news',
  slug: 'prisma-fiscal-novembro-deficit-r-53-4-bi-2026-divida-87-3-pib-2027',
  title:
    'Prisma Fiscal de novembro: mercado vê déficit de R$ 53,4 bi em 2026 e dívida de 87,3% do PIB em 2027',
  description:
    'A Fazenda divulgou o Prisma Fiscal de novembro: déficit primário mediano de R$ 53,369 bi em 2026, R$ 45,288 bi em 2027 e dívida bruta de 87,31% do PIB.',
  category: 'economia',
  coverImage: {
    src: '/images/news/prisma-fiscal-novembro-deficit-r-53-4-bi-2026-divida-87-3-pib-2027.jpg',
    alt: 'Documento do Prisma Fiscal com déficit de R$ 53,369 bi em 2026 e dívida bruta de 87,31% do PIB em 2027, gráfico de dívida e calculadora.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  tags: [
    'prisma-fiscal',
    'contas-publicas',
    'deficit-primario',
    'divida-publica',
    'fazenda',
    'ajuste-fiscal',
  ],
  featuredCalculators: ['porcentagem', 'juros-compostos'],
  highlights: [
    {
      value: 'R$ 53,369 bi',
      label: 'Déficit primário em 2026',
      note: 'Mediana das projeções do mercado para o Governo Central.',
    },
    {
      value: 'R$ 45,288 bi',
      label: 'Déficit primário em 2027',
      note: 'Também mediana das projeções do mercado.',
    },
    {
      value: '87,31%',
      label: 'Dívida bruta em 2027',
      note: 'Percentual do PIB, contra 83,41% em 2026.',
    },
  ],
  sections: [
    {
      heading: 'O que o Prisma Fiscal de novembro mostra',
      image: {
        src: '/images/news/prisma-fiscal-novembro-deficit-r-53-4-bi-2026-divida-87-3-pib-2027-detalhe.jpg',
        alt: 'Detalhe da ilustração: déficit de R$ 53,369 bi em 2026, R$ 45,288 bi em 2027 e dívida bruta de 83,41% e 87,31% do PIB.',
        caption: 'Medianas do Prisma Fiscal divulgado em 16/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O Ministério da Fazenda divulgou o Prisma Fiscal de novembro, levantamento da Secretaria de Política Econômica que reúne as projeções de instituições do mercado para as contas do governo. A página do ministério informa que o relatório foi divulgado em 16/11/2026 e publicada em 17/11. Os números abaixo são medianas das projeções de mercado, e não metas nem estimativas oficiais do governo.',
        'Para 2026, a mediana do resultado primário do Governo Central, que é a diferença entre o que o governo arrecada e o que gasta sem contar os juros da dívida, ficou em déficit de R$ 53,369 bilhões. Para 2027, a projeção é de déficit de R$ 45,288 bilhões. Isso significa que o mercado ainda não enxerga as contas no azul no próximo ano.',
        'Na dívida, a Dívida Bruta do Governo Geral aparece em 83,41% do PIB em 2026 e em 87,31% do PIB em 2027. A diferença entre os dois anos é de 3,90 pontos percentuais.',
      ],
      table: {
        caption: 'Prisma Fiscal de novembro: medianas das projeções',
        columns: ['Indicador', '2026', '2027'],
        rows: [
          [
            'Resultado primário do Governo Central',
            'déficit de R$ 53,369 bi',
            'déficit de R$ 45,288 bi',
          ],
          [
            'Receita líquida do Governo Central',
            'R$ 2,585 tri',
            'R$ 2,763 tri',
          ],
          ['Despesa total do Governo Central', 'R$ 2,630 tri', 'R$ 2,804 tri'],
          ['Arrecadação das receitas federais', 'R$ 3,211 tri', 'R$ 3,419 tri'],
          ['Dívida Bruta do Governo Geral', '83,41% do PIB', '87,31% do PIB'],
        ],
      },
    },
    {
      heading: 'Como ler esses números em reais',
      paragraphs: [
        'Os valores em trilhões parecem distantes do dia a dia, mas a comparação entre os anos ajuda. A receita líquida projetada passa de R$ 2,585 trilhões em 2026 para R$ 2,763 trilhões em 2027, uma alta de R$ 178 bilhões, ou cerca de 6,9%. A despesa total sobe de R$ 2,630 trilhões para R$ 2,804 trilhões, uma alta de R$ 174 bilhões, ou cerca de 6,6%. Esses percentuais são cálculo do PortalFina sobre os números do Prisma.',
        'Sobre a dívida, o percentual do PIB tem leitura simples. Uma dívida bruta de 87,31% do PIB equivale a R$ 87,31 de dívida para cada R$ 100 produzidos no país em um ano. Em 2026, seriam R$ 83,41 para cada R$ 100. A alta de R$ 3,90 por R$ 100 de PIB é o que o mercado espera de aumento em um ano.',
        'Para quem tem dívida, financiamento ou investe em renda fixa, esse indicador importa porque um governo mais endividado tende a pagar mais juros para se financiar, e isso pesa nas taxas dos títulos públicos e do crédito. A calculadora de juros compostos do portal mostra, por exemplo, quanto uma taxa maior faz um saldo crescer ao longo dos meses.',
      ],
    },
    {
      heading: 'O que o ajuste fiscal no Congresso tem a ver com isso',
      paragraphs: [
        'O Senado aprovou em 12/11/2026, por 45 votos a 31, o texto-base do PLP 299/2026, o projeto de ajuste fiscal. Segundo o Congresso em Foco, as medidas melhorariam as contas públicas em valores entre R$ 45,1 bilhões e R$ 56,1 bilhões em 2027, e o texto ainda segue para a Câmara dos Deputados. As medidas não estão em vigor.',
        'Na audiência da Comissão de Assuntos Econômicos do Senado em 17/11, o ministro da Fazenda, Dario Durigan, citou meta de superávit primário de 0,5% do PIB em 2027, o equivalente a R$ 73,2 bilhões, segundo a Agência Senado. A mediana do Prisma Fiscal para o mesmo ano é de déficit de R$ 45,288 bilhões. São medidas diferentes: uma é meta do governo e a outra é a expectativa de instituições do mercado, que pode mudar conforme o Congresso votar as medidas.',
        'Por isso, o Prisma de novembro funciona como um retrato do que o mercado espera antes da votação final do ajuste. O próximo levantamento mostrará se as projeções mudam depois da decisão da Câmara.',
      ],
    },
    {
      heading: 'O que muda para o leitor',
      paragraphs: [
        'O Prisma Fiscal não altera imposto, benefício nem salário. Ele é um termômetro. Quando o mercado projeta déficit e dívida em alta, cresce a pressão sobre os juros de longo prazo e sobre o dólar, e isso pode chegar ao financiamento da casa, ao cartão e ao rendimento dos títulos do Tesouro.',
        'Quem acompanha o assunto deve olhar três pontos nas próximas semanas: a votação do ajuste fiscal na Câmara, a decisão do Senado sobre a alíquota de referência da CBS, que tem prazo até 15/12, e o novo Prisma Fiscal, que sai todos os meses.',
      ],
    },
  ],
  faq: [
    {
      question: 'O Prisma Fiscal é uma previsão do governo?',
      answer:
        'Não. Ele reúne as projeções de instituições do mercado e divulga a mediana. O levantamento é organizado pela Secretaria de Política Econômica do Ministério da Fazenda.',
    },
    {
      question: 'O que é resultado primário?',
      answer:
        'É a diferença entre receitas e despesas do governo sem contar os juros da dívida. Quando as despesas são maiores, há déficit primário.',
    },
    {
      question: 'Esses números já valem para o meu bolso?',
      answer:
        'Não diretamente. São projeções para as contas públicas. Elas podem influenciar juros, dólar e crédito, mas não mudam sozinhas impostos, benefícios ou salários.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Fazenda: Prisma Fiscal de novembro projeta déficit de R$ 53,369 bilhões do Governo Central em 2026',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/novembro/prisma-fiscal-de-novembro-projeta-deficit-de-r-53-369-bilhoes-do-governo-central-em-2026',
    },
    {
      label:
        'Congresso em Foco: Ajuste fiscal, entenda o que o Senado aprovou e os próximos passos',
      url: 'https://www.congressoemfoco.com.br/noticia/131572/ajuste-fiscal-entenda-o-que-o-senado-aprovou-e-os-proximos-passos',
    },
    {
      label:
        'Agência Senado: No Senado, ministro da Fazenda defende novo tributo sobre o consumo',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/11/17/no-senado-ministro-da-fazenda-defende-novo-tributo-sobre-o-consumo',
    },
  ],
} as const satisfies NewsDocument;
