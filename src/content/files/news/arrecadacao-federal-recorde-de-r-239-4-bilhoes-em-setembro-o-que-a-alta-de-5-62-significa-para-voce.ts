import type { NewsDocument } from '../../types';

export const newsArrecadacaoFederalSetembro2026 = {
  kind: 'news',
  slug: 'arrecadacao-federal-recorde-de-r-239-4-bilhoes-em-setembro-o-que-a-alta-de-5-62-significa-para-voce',
  title:
    'Arrecadação federal bate recorde: R$ 239,4 bilhões em setembro, alta real de 5,62%',
  description:
    'A Receita Federal informou o maior setembro da série. Veja de onde veio o dinheiro, o peso da Previdência e do imposto sobre rendimentos de aplicações.',
  category: 'economia',
  coverImage: {
    src: '/images/news/arrecadacao-federal-recorde-de-r-239-4-bilhoes-em-setembro-o-que-a-alta-de-5-62-significa-para-voce.jpg',
    alt: 'Relatório de arrecadação de setembro com R$ 239,4 bilhões, calculadora, etiquetas de alta e pilha de moedas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-22',
  updatedAt: '2026-10-22',
  tags: [
    'arrecadacao',
    'receita-federal',
    'impostos',
    'previdencia',
    'imposto-de-renda',
    'economia',
  ],
  featuredCalculators: ['cdb-liquido', 'inss', 'irrf'],
  highlights: [
    {
      value: 'R$ 239,4 bi',
      label: 'Arrecadação federal em setembro',
      note: 'Alta real de 5,62% sobre setembro de 2025.',
    },
    {
      value: 'R$ 2,35 tri',
      label: 'Acumulado de janeiro a setembro',
      note: 'Alta real de 6,97% sobre o mesmo período de 2025.',
    },
    {
      value: 'R$ 64,6 bi',
      label: 'Contribuição previdenciária no mês',
      note: 'Alta real de 6,18%.',
    },
    {
      value: '+17,57%',
      label: 'IR sobre rendimentos de capital no ano',
      note: 'Soma R$ 131,15 bilhões até setembro.',
    },
  ],
  sections: [
    {
      heading: 'O que a Receita Federal divulgou em 22 de outubro',
      paragraphs: [
        'A Receita Federal informou que os tributos federais renderam R$ 239,4 bilhões em setembro de 2026. Descontada a inflação pelo IPCA, é uma alta real de 5,62% sobre setembro do ano passado. Segundo a Agência Brasil, foi o melhor resultado para o mês na série histórica, que começa em 1995.',
        'No acumulado de janeiro a setembro, a arrecadação chegou a R$ 2,351 trilhões, com alta real de 6,97%. Também é o melhor resultado da série para o período. As receitas administradas pela Receita Federal somaram R$ 231,4 bilhões no mês e R$ 2,25 trilhões no ano.',
        'Arrecadação é o que os governos recolhem de impostos e contribuições. Ela não é o mesmo que lucro nem que sobra de caixa: o dinheiro paga salários do funcionalismo, benefícios do INSS, saúde, educação e juros da dívida. O número mostra como estão a atividade econômica, a folha de pagamento e os rendimentos tributados.',
      ],
    },
    {
      heading: 'De onde veio o dinheiro: Previdência, aplicações e lucros',
      image: {
        src: '/images/news/arrecadacao-federal-recorde-de-r-239-4-bilhoes-em-setembro-o-que-a-alta-de-5-62-significa-para-voce-detalhe.jpg',
        alt: 'Detalhe da ilustração: relatório de arrecadação de setembro com R$ 239,4 bilhões e calculadora.',
        caption: 'O total de setembro e o peso da Previdência na arrecadação.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Receita apontou a contribuição previdenciária como a principal força da alta, tanto no mês quanto no ano. Em setembro ela somou R$ 64,6 bilhões, com crescimento real de 6,18%. Isso equivale a cerca de 27% de toda a arrecadação do mês, e a conta é simples: 64,6 divididos por 239,4 dão 0,27.',
        'Segundo o órgão, esse resultado refletiu uma alta real de 1,72% da massa salarial em agosto, na comparação anual, um aumento real de 7,42% na arrecadação previdenciária do Simples Nacional e a reoneração escalonada da contribuição patronal dos municípios e da folha de pagamentos. As compensações tributárias com débitos previdenciários também cresceram 14,88%.',
        'Outro destaque é o Imposto de Renda retido na fonte sobre rendimentos de capital: R$ 12,06 bilhões em setembro, alta real de 9,68%, e R$ 131,15 bilhões no ano, alta real de 17,57%. A Receita atribuiu o resultado às aplicações de renda fixa e à tributação de dividendos. Como a Selic influencia a remuneração dos títulos, ela também afeta o imposto cobrado no resgate.',
        'Os lucros das empresas também contribuíram. No acumulado do ano, IRPJ e CSLL somaram R$ 444,2 bilhões, alta real de 5,76%, e PIS/Pasep e Cofins renderam R$ 466,55 bilhões, alta real de 4,1%.',
      ],
      table: {
        caption: 'Arrecadação federal em 2026, segundo a Receita Federal',
        columns: ['Item', 'Setembro', 'Janeiro a setembro'],
        rows: [
          [
            'Arrecadação total',
            'R$ 239,4 bi (+5,62%)',
            'R$ 2,351 tri (+6,97%)',
          ],
          ['Previdência', 'R$ 64,6 bi (+6,18%)', 'R$ 575,9 bi (+5,16%)'],
          [
            'IR sobre rendimentos de capital',
            'R$ 12,06 bi (+9,68%)',
            'R$ 131,15 bi (+17,57%)',
          ],
          ['IRPJ e CSLL', '', 'R$ 444,2 bi (+5,76%)'],
          ['PIS/Pasep e Cofins', '', 'R$ 466,55 bi (+4,1%)'],
          ['Impostos sobre importações', 'R$ 13,3 bi (+21,07%)', ''],
        ],
      },
    },
    {
      heading: 'O que isso muda no seu bolso',
      paragraphs: [
        'Arrecadação recorde não significa, por si só, aumento de alíquota. Os percentuais divulgados são aumentos reais da soma recolhida, e podem vir de mais empregos formais, salários maiores, lucros maiores ou de rendimentos de aplicações em juros altos. O índice não diz que cada contribuinte pagou mais.',
        'Quem investe em renda fixa sente a ponta desse número. Um exemplo calculado: com R$ 10.000 aplicados em um CDB que rende R$ 1.000 em um ano, o Imposto de Renda é cobrado só sobre os R$ 1.000, de acordo com a alíquota que vale para o prazo da aplicação. Esse imposto retido na fonte é a parcela que aparece em números como os R$ 131,15 bilhões do ano. Para ver quanto sobra líquido, use a calculadora de CDB líquido.',
        'Já o trabalhador com carteira assinada contribui para a Previdência pelo desconto do INSS no contracheque, e a empresa paga a sua parte sobre a folha. A calculadora do INSS mostra o desconto de cada faixa de salário, e a de IRRF ajuda a conferir o imposto retido na fonte.',
        'Para o importador e quem compra produtos de fora, os tributos sobre importações chegaram a R$ 13,3 bilhões, alta real de 21,07%. A Receita citou o crescimento das importações, o aumento das alíquotas efetivas e uma queda de 4,15% na taxa média de câmbio, ou seja, um dólar em média mais barato.',
      ],
    },
    {
      heading: 'O que observar nos próximos meses',
      paragraphs: [
        'A Receita divulga a arrecadação todo mês, e os números de outubro devem sair em novembro. Vale acompanhar o comportamento da folha de pagamento, que é o item de maior peso, e os rendimentos de capital, que dependem da Selic e das decisões de investimento.',
        'O Imposto de Exportação sobre petróleo bruto também aparece nos números: mais de R$ 2,9 bilhões em setembro e mais de R$ 12 bilhões no ano. É uma fonte menor, mas mostra como a conta pode mudar com o preço e o volume das exportações.',
        'Os valores acima são os informados pela Receita Federal. Para decisões pessoais, como escolher uma aplicação ou conferir um desconto, o que vale é a regra do seu caso, e não o total do país.',
      ],
    },
  ],
  faq: [
    {
      question: 'Arrecadação recorde significa que os impostos subiram?',
      answer:
        'Não necessariamente. Significa que o total recolhido, já descontada a inflação, foi o maior da série para setembro. Pode refletir mais emprego, salários e lucros, e não só aumento de tributo.',
    },
    {
      question: 'Quanto a Previdência representou na arrecadação de setembro?',
      answer:
        'A contribuição previdenciária somou R$ 64,6 bilhões dos R$ 239,4 bilhões do mês, cerca de 27%, segundo a Receita Federal.',
    },
    {
      question: 'O Imposto de Renda sobre aplicações cresceu?',
      answer:
        'Sim. O IR retido sobre rendimentos de capital somou R$ 131,15 bilhões de janeiro a setembro, alta real de 17,57%, segundo a Agência Brasil com dados da Receita.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Arrecadação federal cresce 5,62% em setembro e soma R$ 239,4 bilhões (22/10/2026)',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/arrecadacao-federal-cresce-562-em-setembro-e-soma-r-2394-bilhoes',
    },
    {
      label:
        'Agência Brasil: Arrecadação tem alta real de 5,62% em setembro e chega a R$ 239,4 bi (Rádio Agência Nacional)',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/economia/audio/2026-10/arrecadacao-tem-alta-real-de-562-em-setembro-e-chega-r-2394-bi',
    },
    {
      label:
        'Receita Federal: coletiva sobre a arrecadação do mês de setembro (22/10/2026)',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/outubro/receita-federal-comenta-nesta-quinta-feira-22-a-arrecadacao-do-mes-de-setembro',
    },
  ],
} as const satisfies NewsDocument;
