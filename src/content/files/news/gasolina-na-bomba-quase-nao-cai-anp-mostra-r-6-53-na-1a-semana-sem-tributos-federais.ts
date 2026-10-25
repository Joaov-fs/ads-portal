import type { NewsDocument } from '../../types';

export const newsGasolinaAnpPrimeiraSemanaSemTributos = {
  kind: 'news',
  slug: 'gasolina-na-bomba-quase-nao-cai-anp-mostra-r-6-53-na-1a-semana-sem-tributos-federais',
  title:
    'Gasolina na bomba quase não cai: ANP mostra R$ 6,53 na 1ª semana sem tributos federais',
  description:
    'A média nacional da gasolina foi de R$ 6,54 para R$ 6,53 na primeira semana após zerar os tributos federais. Veja a conta no tanque e como comparar com o etanol.',
  category: 'economia',
  coverImage: {
    src: '/images/news/gasolina-na-bomba-quase-nao-cai-anp-mostra-r-6-53-na-1a-semana-sem-tributos-federais.jpg',
    alt: 'Documento com os preços da gasolina de R$ 6,54 e R$ 6,53, bomba de combustível, galão vermelho, etiqueta de R$ 6,53 e moedas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-25',
  updatedAt: '2026-10-25',
  tags: ['gasolina', 'combustiveis', 'anp', 'etanol', 'diesel', 'porcentagem'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 6,53',
      label: 'Gasolina, média nacional',
      note: 'Semana de 11 a 17/10, segundo a ANP.',
    },
    {
      value: 'R$ 0,01',
      label: 'Queda na semana',
      note: 'Era R$ 6,54 na semana de 4 a 10/10.',
    },
    {
      value: 'R$ 0,26',
      label: 'Corte novo por litro',
      note: 'Valor da desoneração anunciada em 9/10 que se somou ao anterior.',
    },
    {
      value: 'R$ 1,62',
      label: 'Diferença entre capitais',
      note: 'De R$ 5,94 em Porto Alegre a R$ 7,56 em Boa Vista.',
    },
  ],
  sections: [
    {
      heading: 'O que a pesquisa semanal da ANP mostrou',
      paragraphs: [
        'O governo zerou PIS/Pasep, Cofins e Cide sobre a gasolina em 9 de outubro de 2026, por 30 dias. A primeira semana inteira com a medida em vigor foi a de 11 a 17 de outubro, e o levantamento da ANP, divulgado em 20 de outubro, mostrou que o litro da gasolina comum ficou em R$ 6,53 na média do país. Na semana anterior, de 4 a 10 de outubro, a média era de R$ 6,54. A queda foi de R$ 0,01, ou 0,15%.',
        'Outros combustíveis tiveram movimentos pequenos na mesma pesquisa: o diesel caiu 0,3% e o botijão de gás de 13 kg subiu 0,1%, de R$ 114,61 para R$ 114,73. O botijão foi o único item que subiu na semana.',
        'Os valores são médias de revenda em todo o país. Em Mato Grosso do Sul, por exemplo, a média subiu um centavo e chegou a R$ 6,43. A pesquisa seguinte, referente a 18 a 24 de outubro, deve mostrar se o corte começou a aparecer com mais força.',
      ],
      table: {
        caption: 'Preços médios nacionais de revenda, segundo a ANP',
        columns: ['Combustível', 'Semana de 4 a 10/10', 'Semana de 11 a 17/10'],
        rows: [
          ['Gasolina comum (litro)', 'R$ 6,54', 'R$ 6,53'],
          ['Diesel', 'R$ 7,36 (S10)', 'queda de 0,3%'],
          ['Botijão de gás (13 kg)', 'R$ 114,61', 'R$ 114,73'],
        ],
      },
    },
    {
      heading: 'A conta no tanque: o que seria e o que foi',
      image: {
        src: '/images/news/gasolina-na-bomba-quase-nao-cai-anp-mostra-r-6-53-na-1a-semana-sem-tributos-federais-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com a gasolina a R$ 6,54 na semana de 4 a 10/10, R$ 6,53 na de 11 a 17/10 e queda de R$ 0,01.',
        caption:
          'Média nacional da gasolina nas duas semanas da pesquisa da ANP.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A desoneração de 9 de outubro elevou o corte de tributos federais de R$ 0,63 para R$ 0,89 por litro de gasolina A, ou seja, um corte novo de R$ 0,26 por litro. Se esse valor chegasse inteiro ao posto, um tanque de 50 litros ficaria R$ 13,00 mais barato (50 x R$ 0,26). Com a queda de R$ 0,01 que a ANP registrou, a economia no mesmo tanque é de R$ 0,50 (50 x R$ 0,01).',
        'Para quem abastece 200 litros por mês, a diferença entre o teto teórico e o que apareceu na pesquisa é de R$ 52,00 contra R$ 2,00 por mês. R$ 0,01 é menos de 4% de R$ 0,26, mas essa comparação é só uma referência: o decreto fala em litro de gasolina A, e a gasolina da bomba leva etanol na mistura, então o corte exato por litro vendido no posto pode ser menor.',
        'Uma semana de pesquisa não encerra a discussão. O preço na bomba depende do estoque que o posto comprou antes, do preço cobrado pela distribuidora, do ICMS cobrado pelo estado e da margem do revendedor. Por isso a calculadora de porcentagem do portal ajuda a testar cenários: coloque o preço que você paga hoje e veja quanto seria um desconto de 1%, 2% ou 4%.',
      ],
      table: {
        caption:
          'Economia em R$ conforme quanto do corte de R$ 0,26 chegou à bomba',
        columns: ['Cenário', 'Tanque de 50 litros', '200 litros por mês'],
        rows: [
          ['Corte inteiro de R$ 0,26', 'R$ 13,00', 'R$ 52,00'],
          ['Metade do corte (R$ 0,13)', 'R$ 6,50', 'R$ 26,00'],
          ['Queda observada de R$ 0,01', 'R$ 0,50', 'R$ 2,00'],
        ],
      },
    },
    {
      heading: 'Por que o desconto pode demorar ou não chegar',
      paragraphs: [
        'O decreto retira tributos federais da cadeia, mas não fixa o preço final nem obriga o posto a repassar o valor. Quem define o preço na bomba é cada revendedor, que considera o custo de compra, a margem e as despesas. Combustível comprado antes do decreto, com o custo antigo, pode ser vendido primeiro, o que atrasa o efeito.',
        'A pesquisa mostra também que a média nacional esconde diferenças grandes. Na semana de 4 a 10 de outubro, a gasolina era mais barata em Porto Alegre, a R$ 5,94, e mais cara em Boa Vista, a R$ 7,56, uma distância de R$ 1,62 por litro. Em um tanque de 50 litros, essa diferença chega a R$ 81,00 (50 x R$ 1,62). Muitas vezes, escolher o posto pesa mais do que o desconto federal.',
        'A medida vale por 30 dias a partir do anúncio, ou seja, até o início de novembro, e pode ser prorrogada por novo ato do governo. Quem faz o orçamento do mês não deve contar com o desconto como permanente.',
      ],
    },
    {
      heading: 'Gasolina ou etanol: a conta com os preços da ANP',
      paragraphs: [
        'Na pesquisa de 4 a 10 de outubro, o etanol hidratado estava em R$ 4,14 por litro na média nacional, contra R$ 6,54 da gasolina. A razão entre os dois é de 63%, abaixo da regra prática de 70%. Pela regra, o etanol compensa em média quando custa menos de 70% do preço da gasolina, porque rende menos quilômetros por litro.',
        'Um exemplo com um carro flex que faz 12 km por litro de gasolina e cerca de 8,4 km por litro de etanol (70% do consumo): para rodar 100 km, a gasolina gasta 8,33 litros e custa R$ 54,50. O etanol gasta 11,90 litros e custa R$ 49,29. A diferença é de R$ 5,21 a cada 100 km a favor do etanol, nessa média nacional.',
        'Cada carro tem seu consumo real, e o preço varia por cidade. O jeito mais seguro é dividir o preço do etanol pelo da gasolina no posto onde você abastece: se o resultado for menor que 0,70, o etanol tende a sair mais barato. Nos dias em que o desconto federal chega só à gasolina, essa razão pode mudar de uma semana para outra.',
      ],
    },
    {
      heading: 'O que acompanhar nas próximas semanas',
      paragraphs: [
        'A ANP divulga a síntese semanal dos preços, e a próxima edição trará a semana de 18 a 24 de outubro. Se a média da gasolina continuar perto de R$ 6,53, o efeito da desoneração segue pequeno na bomba. Se cair mais, é sinal de que o repasse está chegando.',
        'Também vale olhar o prazo: com a medida terminando no início de novembro, uma prorrogação ou o fim do corte pode mexer no preço em poucos dias. Quem tem o hábito de encher o tanque de uma vez pode comparar o preço do posto com a média da cidade antes de decidir.',
      ],
    },
  ],
  faq: [
    {
      question: 'A gasolina ficou mais barata depois do corte de tributos?',
      answer:
        'Pouco, na média nacional. A ANP registrou queda de R$ 6,54 para R$ 6,53 por litro entre as semanas de 4 a 10 e de 11 a 17 de outubro de 2026. O efeito pode ser diferente na sua cidade.',
    },
    {
      question: 'Por que o corte de R$ 0,26 não aparece no preço do posto?',
      answer:
        'O decreto retira tributos, mas não fixa o preço nem obriga o repasse. O posto também considera estoque comprado antes, ICMS, distribuição e margem, e o corte de R$ 0,26 vale para a gasolina A, sem o etanol da mistura.',
    },
    {
      question: 'Como saber se compensa abastecer com etanol?',
      answer:
        'Divida o preço do etanol pelo da gasolina no posto. Se o resultado for menor que 0,70, o etanol tende a compensar. Na média nacional da ANP de 4 a 10 de outubro, a razão era de 63%.',
    },
  ],
  sources: [
    {
      label:
        'ANP: Síntese Semanal do Comportamento dos Preços dos Combustíveis, edição 41/2026 (4 a 10/10/2026)',
      url: 'https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/arq-sintese-semanal/2026/sintese-precos-41.pdf',
    },
    {
      label:
        'ANP: Síntese Semanal do Comportamento dos Preços dos Combustíveis (edição 42/2026, de 11 a 17/10/2026)',
      url: 'https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/sintese-semanal-do-comportamento-dos-precos-dos-combustiveis',
    },
    {
      label:
        'Ministério da Fazenda: Governo Federal prorroga desoneração da gasolina e do etanol (9/10/2026)',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/governo-federal-prorroga-desoneracao-da-gasolina-e-do-etanol',
    },
    {
      label:
        'Agência Brasil: Tributos da gasolina são zerados e subsídios a combustíveis ampliados (outubro de 2026)',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/tributos-da-gasolina-sao-zerados-e-subsidios-combustiveis-ampliados',
    },
  ],
} as const satisfies NewsDocument;
