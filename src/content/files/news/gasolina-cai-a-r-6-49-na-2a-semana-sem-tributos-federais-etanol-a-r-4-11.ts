import type { NewsDocument } from '../../types';

export const newsGasolinaAnpSegundaSemanaSemTributos = {
  kind: 'news',
  slug: 'gasolina-cai-a-r-6-49-na-2a-semana-sem-tributos-federais-etanol-a-r-4-11',
  title:
    'Gasolina cai a R$ 6,49 na 2ª semana sem tributos federais e etanol fica em R$ 4,11',
  description:
    'A ANP mostra gasolina de R$ 6,53 para R$ 6,49 na semana de 18 a 24/10 e etanol estável em R$ 4,11. Veja a conta no tanque e se o etanol compensa.',
  category: 'economia',
  coverImage: {
    src: '/images/news/gasolina-cai-a-r-6-49-na-2a-semana-sem-tributos-federais-etanol-a-r-4-11.jpg',
    alt: 'Documento com a gasolina a R$ 6,49 e R$ 6,53 na semana anterior, etanol a R$ 4,11, bomba de combustível, etiqueta de R$ 6,49 e galão vermelho.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-29',
  updatedAt: '2026-10-29',
  tags: ['gasolina', 'combustiveis', 'anp', 'etanol', 'porcentagem'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 6,49',
      label: 'Gasolina, média nacional',
      note: 'Semana de 18 a 24/10, segundo a ANP.',
    },
    {
      value: 'R$ 0,04',
      label: 'Queda na semana',
      note: 'Era R$ 6,53 na semana de 11 a 17/10.',
    },
    {
      value: 'R$ 4,11',
      label: 'Etanol, média nacional',
      note: 'Sem variação em relação à semana anterior.',
    },
    {
      value: '63,33%',
      label: 'Etanol sobre a gasolina',
      note: 'Abaixo de 70%, a regra prática para o etanol compensar.',
    },
  ],
  sections: [
    {
      heading:
        'O que a pesquisa da ANP mostrou na semana de 18 a 24 de outubro',
      paragraphs: [
        'O levantamento semanal da ANP, divulgado em 27 de outubro de 2026, mostrou a gasolina comum a R$ 6,49 por litro na média nacional. Na semana anterior, de 11 a 17 de outubro, o preço era de R$ 6,53. A queda foi de R$ 0,04, ou 0,61%. É a segunda semana inteira com os tributos federais zerados sobre a gasolina, medida que começou em 9 de outubro.',
        'Na semana de 4 a 10 de outubro, antes de a nova desoneração valer por inteiro, a média era de R$ 6,54. Em duas semanas, portanto, o litro caiu R$ 0,05, ou 0,76%. O preço também está 4,28% abaixo do pico de R$ 6,78 registrado em março.',
        'O etanol hidratado ficou em R$ 4,11 por litro, igual ao da semana anterior. Entre os estados, o preço caiu em 12 e no Distrito Federal, subiu em 11 e ficou estável em 2. Não houve dado do Amapá na pesquisa.',
      ],
      table: {
        caption: 'Preços médios nacionais de revenda, segundo a ANP',
        columns: [
          'Combustível',
          'Semana de 11 a 17/10',
          'Semana de 18 a 24/10',
        ],
        rows: [
          ['Gasolina comum (litro)', 'R$ 6,53', 'R$ 6,49'],
          ['Etanol hidratado (litro)', 'R$ 4,11', 'R$ 4,11'],
        ],
      },
    },
    {
      heading: 'A conta no tanque: o que o corte entregou até agora',
      image: {
        src: '/images/news/gasolina-cai-a-r-6-49-na-2a-semana-sem-tributos-federais-etanol-a-r-4-11-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com a gasolina a R$ 6,49 na semana de 18 a 24/10, R$ 6,53 na semana anterior, etanol a R$ 4,11 e razão de 63,33%.',
        caption:
          'Médias nacionais da ANP para gasolina e etanol na semana de 18 a 24/10.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O corte novo de tributos federais anunciado em 9 de outubro foi de R$ 0,26 por litro de gasolina A, segundo a conta do próprio decreto. Se esse valor chegasse inteiro ao posto, um tanque de 50 litros ficaria R$ 13,00 mais barato (50 x R$ 0,26). A queda de R$ 0,05 desde a semana de 4 a 10 de outubro vale R$ 2,50 no mesmo tanque (50 x R$ 0,05).',
        'Para quem abastece 200 litros por mês, o teto teórico do corte seria de R$ 52,00 por mês. A queda observada até agora equivale a R$ 10,00 por mês (200 x R$ 0,05). A comparação é só uma referência: o decreto fala em gasolina A, a gasolina da bomba leva etanol na mistura, e o preço final também depende do estoque comprado antes, do ICMS e da margem do posto.',
        'A calculadora de porcentagem do portal ajuda a testar cenários: coloque o preço que você paga hoje e veja quanto seria uma queda de 1% ou de 2% no litro.',
      ],
      table: {
        caption:
          'Economia em R$ conforme a queda do litro, para 50 litros e 200 litros por mês',
        columns: ['Cenário', 'Tanque de 50 litros', '200 litros por mês'],
        rows: [
          ['Corte inteiro de R$ 0,26', 'R$ 13,00', 'R$ 52,00'],
          [
            'Queda de R$ 0,05 (4 a 10/10 até 18 a 24/10)',
            'R$ 2,50',
            'R$ 10,00',
          ],
          ['Queda de R$ 0,04 (só a última semana)', 'R$ 2,00', 'R$ 8,00'],
        ],
      },
    },
    {
      heading: 'Gasolina ou etanol: a conta com os preços da semana',
      paragraphs: [
        'Dividindo o preço do etanol pelo da gasolina, R$ 4,11 por R$ 6,49, o resultado é 63,33%. Pela regra prática, o etanol compensa em média quando custa menos de 70% do preço da gasolina, porque rende menos quilômetros por litro. Segundo a pesquisa, o etanol estava abaixo desse limite em 11 estados e no Distrito Federal, e Mato Grosso tinha a menor razão, de 60,44%.',
        'Um exemplo com um carro flex que faz 12 km por litro de gasolina e cerca de 8,4 km por litro de etanol (70% do consumo): para rodar 100 km, a gasolina gasta 8,33 litros e custa R$ 54,08. O etanol gasta 11,90 litros e custa R$ 48,93. A diferença é de R$ 5,15 a cada 100 km a favor do etanol, na média nacional.',
        'Cada carro tem seu consumo real, e o preço varia por cidade. O jeito mais seguro é dividir o preço do etanol pelo da gasolina no posto onde você abastece: se o resultado for menor que 0,70, o etanol tende a sair mais barato.',
      ],
      table: {
        caption:
          'Rodar 100 km com um carro flex (12 km/l na gasolina, 8,4 km/l no etanol)',
        columns: ['Combustível', 'Litros gastos', 'Custo'],
        rows: [
          ['Gasolina a R$ 6,49', '8,33', 'R$ 54,08'],
          ['Etanol a R$ 4,11', '11,90', 'R$ 48,93'],
        ],
      },
    },
    {
      heading: 'O preço muda muito de um estado para outro',
      paragraphs: [
        'A média nacional esconde diferenças. No etanol, a menor média estadual foi a de São Paulo, de R$ 3,89, e a maior a do Amapá, de R$ 5,38, uma distância de R$ 1,49 por litro. Em um tanque de 40 litros, isso dá R$ 59,60 (40 x R$ 1,49). A maior alta da semana foi no Rio Grande do Norte (6,39%, para R$ 5,16) e a maior queda foi no Amazonas (5,52%, para R$ 4,96).',
        'Por isso, escolher o posto e comparar os dois combustíveis na sua cidade costuma pesar mais do que a variação de centavos na média do país.',
      ],
    },
    {
      heading: 'O que acompanhar nos próximos dias',
      paragraphs: [
        'O corte de tributos federais sobre a gasolina vale por 30 dias a partir de 9 de outubro, ou seja, até o início de novembro, e pode ser prorrogado por novo ato do governo. Uma prorrogação ou o fim da medida pode mexer no preço em poucos dias. Quem faz o orçamento do mês não deve contar com o desconto como permanente.',
        'A ANP divulga uma nova síntese semanal toda semana. Se a média continuar caindo, é sinal de que o repasse está chegando aos postos.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto está a gasolina na média do país?',
      answer:
        'R$ 6,49 por litro na semana de 18 a 24 de outubro de 2026, segundo a ANP. Na semana anterior, a média era de R$ 6,53.',
    },
    {
      question: 'O etanol compensa mais que a gasolina agora?',
      answer:
        'Na média nacional, sim: a razão entre os preços é de 63,33%, abaixo da regra prática de 70%. Confira a razão no posto onde você abastece, porque ela varia de cidade para cidade.',
    },
    {
      question: 'Por que a queda é menor que o corte de tributos?',
      answer:
        'O decreto retira tributos, mas não fixa o preço nem obriga o repasse. O posto considera o estoque comprado antes, o ICMS, a distribuição e a margem, e o corte vale para a gasolina A, sem o etanol da mistura.',
    },
  ],
  sources: [
    {
      label:
        'ANP: Síntese Semanal do Comportamento dos Preços dos Combustíveis',
      url: 'https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/sintese-semanal-do-comportamento-dos-precos-dos-combustiveis',
    },
    {
      label:
        'Times Brasil: Preço médio do etanol fica estável em R$ 4,11 por litro no Brasil (dados da ANP, 27/10/2026)',
      url: 'https://timesbrasil.com.br/brasil/preco-medio-do-etanol-fica-estavel-em-r-411-por-litro-no-brasil',
    },
    {
      label:
        'Economic News Brasil: Gasolina hoje cai para R$ 6,49, mas segue acima de janeiro (27/10/2026)',
      url: 'https://economicnewsbrasil.com.br/2026/10/27/gasolina-hoje-precos-2026',
    },
    {
      label:
        'Ministério da Fazenda: Governo Federal prorroga desoneração da gasolina e do etanol (9/10/2026)',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/governo-federal-prorroga-desoneracao-da-gasolina-e-do-etanol',
    },
  ],
} as const satisfies NewsDocument;
