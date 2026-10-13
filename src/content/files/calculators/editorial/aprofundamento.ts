import type { ContentSection } from '../../../types';

/**
 * Seções extras de cada calculadora (tabelas de referência calculadas pelo
 * motor em src/calculators). Entram depois de "O que muda o resultado".
 * Gerado a partir do motor: ao mudar uma regra anual, refaça as tabelas.
 */
export const calculatorExtras: Readonly<
  Record<string, readonly ContentSection[]>
> = {
  'decimo-salario': [
    {
      heading: 'Tabela de referência: 13º líquido por faixa de salário',
      paragraphs: [
        'A tabela mostra o 13º integral, sem dependentes, de quem trabalhou os 12 meses do ano. A primeira parcela é metade do salário bruto e sai sem desconto. O INSS e o Imposto de Renda são calculados sobre o 13º inteiro e descontados só da segunda parcela.',
        'A coluna da segunda parcela explica a surpresa de dezembro: até R$ 5.000 o Imposto de Renda do 13º é zero, mas a parcela final já é menor que a primeira por causa do INSS. Nos salários mais altos, o IRRF reduz a segunda parcela ainda mais, e ela pode ficar perto da metade da primeira.',
      ],
      table: {
        caption: '13º integral por salário, sem dependentes',
        columns: [
          'Salário',
          '1ª parcela',
          'INSS',
          'IRRF',
          '2ª parcela',
          'Total líquido',
        ],
        rows: [
          [
            'R$ 2.000,00',
            'R$ 1.000,00',
            'R$ 155,69',
            'R$ 0,00',
            'R$ 844,32',
            'R$ 1.844,32',
          ],
          [
            'R$ 3.000,00',
            'R$ 1.500,00',
            'R$ 248,60',
            'R$ 0,00',
            'R$ 1.251,40',
            'R$ 2.751,40',
          ],
          [
            'R$ 4.000,00',
            'R$ 2.000,00',
            'R$ 368,60',
            'R$ 0,00',
            'R$ 1.631,40',
            'R$ 3.631,40',
          ],
          [
            'R$ 5.000,00',
            'R$ 2.500,00',
            'R$ 501,51',
            'R$ 0,00',
            'R$ 1.998,49',
            'R$ 4.498,49',
          ],
          [
            'R$ 6.500,00',
            'R$ 3.250,00',
            'R$ 711,51',
            'R$ 569,93',
            'R$ 1.968,55',
            'R$ 5.218,55',
          ],
          [
            'R$ 8.000,00',
            'R$ 4.000,00',
            'R$ 921,51',
            'R$ 1.037,86',
            'R$ 2.040,62',
            'R$ 6.040,62',
          ],
          [
            'R$ 10.000,00',
            'R$ 5.000,00',
            'R$ 988,09',
            'R$ 1.569,55',
            'R$ 2.442,36',
            'R$ 7.442,36',
          ],
        ],
      },
    },
    {
      heading: 'Como conferir o 13º no contracheque',
      paragraphs: [
        'Confira três pontos. A primeira parcela deve ser exatamente metade do salário bruto, sem INSS e sem IRRF. A segunda deve trazer o INSS e o IRRF calculados sobre o 13º inteiro. E o valor bruto deve incluir a média de horas extras, comissões e adicionais habituais, quando existirem, e não só o salário-base.',
        'A primeira parcela pode ser paga entre fevereiro e 30 de novembro, e a segunda até 20 de dezembro. Se houver atraso, reclame por escrito ao RH e procure o sindicato ou o Ministério do Trabalho e Emprego. Quem entrou ou saiu durante o ano deve usar a calculadora de 13º proporcional.',
      ],
    },
  ],
  'horas-extras': [
    {
      heading: 'Tabela de referência: horas extras por faixa de salário',
      paragraphs: [
        'A tabela usa um mês com 26 dias úteis e 4 de repouso, jornada de 220 horas mensais, 10 horas extras comuns (50%) e 4 horas em domingos e feriados (100%). O reflexo no descanso semanal é o total das horas extras dividido pelos dias úteis e multiplicado pelos repousos.',
        'Mudar o número de dias úteis muda o reflexo: em meses com cinco domingos, o repouso pesa mais; em meses com mais dias úteis, pesa menos. Por isso o valor do holerite pode diferir alguns reais da simulação, e isso não significa erro da empresa.',
      ],
      table: {
        caption: 'Horas extras de um mês (10 h a 50% e 4 h a 100%)',
        columns: [
          'Salário',
          'Hora normal',
          '10 h a 50%',
          '4 h a 100%',
          'Reflexo no DSR',
          'Total bruto',
        ],
        rows: [
          [
            'R$ 2.000,00',
            'R$ 9,09',
            'R$ 136,36',
            'R$ 72,73',
            'R$ 32,17',
            'R$ 241,26',
          ],
          [
            'R$ 3.000,00',
            'R$ 13,64',
            'R$ 204,55',
            'R$ 109,09',
            'R$ 48,25',
            'R$ 361,89',
          ],
          [
            'R$ 4.000,00',
            'R$ 18,18',
            'R$ 272,73',
            'R$ 145,45',
            'R$ 64,34',
            'R$ 482,52',
          ],
          [
            'R$ 6.000,00',
            'R$ 27,27',
            'R$ 409,09',
            'R$ 218,18',
            'R$ 96,50',
            'R$ 723,78',
          ],
        ],
      },
    },
    {
      heading: 'Limites e regras que valem para a hora extra',
      paragraphs: [
        'A jornada diária pode ter no máximo 2 horas extras, o que dá 10 horas de trabalho por dia. O adicional mínimo é de 50% sobre a hora normal, e muitas convenções coletivas pagam 100% em domingos e feriados e percentuais maiores em outros casos. Veja o que diz a convenção da sua categoria.',
        'Horas extras habituais refletem também em 13º, férias com um terço, FGTS e aviso prévio. Se a empresa compensa as horas em folga pelo banco de horas, o adicional não é pago em dinheiro, e o saldo que não for compensado no prazo deve ser pago como hora extra.',
      ],
    },
  ],
  inss: [
    {
      heading: 'Tabela de referência: INSS por faixa de salário',
      paragraphs: [
        'O desconto é progressivo: cada alíquota, de 7,5%, 9%, 12% e 14%, incide só sobre a parte do salário que está dentro da faixa. A alíquota efetiva, que é o INSS dividido pelo salário, é sempre menor que a alíquota da última faixa atingida.',
        'No teto de R$ 8.475,55 o desconto trava em R$ 988,09, e quem ganha mais paga o mesmo valor. Por isso a alíquota efetiva cai nos salários muito altos, como mostra a linha de R$ 20.000.',
      ],
      table: {
        caption: 'INSS do empregado em 2026',
        columns: [
          'Salário',
          'INSS',
          'Alíquota efetiva',
          'Salário depois do INSS',
        ],
        rows: [
          ['R$ 1.621,00', 'R$ 121,57', '7,50%', 'R$ 1.499,43'],
          ['R$ 2.500,00', 'R$ 200,69', '8,03%', 'R$ 2.299,32'],
          ['R$ 3.500,00', 'R$ 308,60', '8,82%', 'R$ 3.191,40'],
          ['R$ 5.000,00', 'R$ 501,51', '10,03%', 'R$ 4.498,49'],
          ['R$ 7.000,00', 'R$ 781,51', '11,16%', 'R$ 6.218,49'],
          ['R$ 8.475,55', 'R$ 988,09', '11,66%', 'R$ 7.487,46'],
          ['R$ 12.000,00', 'R$ 988,09', '8,23%', 'R$ 11.011,91'],
          ['R$ 20.000,00', 'R$ 988,09', '4,94%', 'R$ 19.011,91'],
        ],
      },
    },
    {
      heading: 'O que entra na base do INSS',
      paragraphs: [
        'Entram na base o salário, as horas extras, as comissões e os adicionais habituais. O 13º tem cálculo à parte, separado do salário do mês. Em regra, ficam de fora o vale-transporte e verbas de natureza indenizatória.',
        'Quem tem dois empregos paga INSS em cada um, mas a soma dos descontos é limitada ao teto. Avise o RH de cada empresa sobre o outro vínculo para que o desconto seja ajustado e o excesso, quando houver, não seja descontado duas vezes.',
      ],
    },
  ],
  irrf: [
    {
      heading: 'Tabela de referência: IRRF por salário',
      paragraphs: [
        'A tabela mostra o IRRF mensal de 2026 sem dependentes. Até R$ 5.000 a redução da Lei 15.270/2025 zera o imposto. Entre R$ 5.000,01 e R$ 7.350 a redução diminui aos poucos até desaparecer, e acima disso vale a tabela cheia.',
        'Repare que o imposto não salta de zero para o valor cheio: ele sobe de forma gradual. É o que faz o peso do imposto sobre o salário bruto ser pequeno em R$ 5.500 e chegar a 17,66% em R$ 12.000.',
      ],
      table: {
        caption: 'IRRF mensal em 2026, sem dependentes',
        columns: [
          'Salário bruto',
          'INSS',
          'Base do IRRF',
          'IRRF',
          'Peso no salário bruto',
        ],
        rows: [
          ['R$ 4.000,00', 'R$ 368,60', 'R$ 3.631,40', 'R$ 0,00', '0,00%'],
          ['R$ 5.000,00', 'R$ 501,51', 'R$ 4.498,49', 'R$ 0,00', '0,00%'],
          ['R$ 5.500,00', 'R$ 571,51', 'R$ 4.928,49', 'R$ 200,29', '3,64%'],
          ['R$ 6.000,00', 'R$ 641,51', 'R$ 5.358,49', 'R$ 385,11', '6,42%'],
          ['R$ 7.000,00', 'R$ 781,51', 'R$ 6.218,49', 'R$ 754,76', '10,78%'],
          ['R$ 7.350,00', 'R$ 830,51', 'R$ 6.519,49', 'R$ 884,13', '12,03%'],
          ['R$ 9.000,00', 'R$ 988,09', 'R$ 8.011,91', 'R$ 1.294,55', '14,38%'],
          [
            'R$ 12.000,00',
            'R$ 988,09',
            'R$ 11.011,91',
            'R$ 2.119,55',
            '17,66%',
          ],
        ],
      },
    },
    {
      heading: 'Quanto cada dependente reduz o imposto',
      paragraphs: [
        'Cada dependente reduz R$ 189,59 da base de cálculo. Para um salário de R$ 6.000, os dependentes diminuem o IRRF mês a mês, como mostra a tabela. Só vale para dependentes informados ao RH, com os documentos exigidos.',
      ],
      table: {
        caption: 'Efeito dos dependentes no IRRF, salário de R$ 6.000',
        columns: ['Dependentes', 'Base do IRRF', 'IRRF', 'Líquido do mês'],
        rows: [
          ['0', 'R$ 5.358,49', 'R$ 385,11', 'R$ 4.973,37'],
          ['1', 'R$ 5.168,90', 'R$ 332,97', 'R$ 5.025,51'],
          ['2', 'R$ 4.979,31', 'R$ 280,84', 'R$ 5.077,65'],
          ['3', 'R$ 4.789,72', 'R$ 228,70', 'R$ 5.129,79'],
        ],
      },
    },
  ],
  'seguro-desemprego': [
    {
      heading: 'Tabela de referência: valor da parcela por média salarial',
      paragraphs: [
        'O valor depende da média dos três últimos salários antes da dispensa. Até R$ 2.222,17, a parcela é de 80% da média. Entre R$ 2.222,18 e R$ 3.703,99, soma-se R$ 1.777,74 a 50% do que passar de R$ 2.222,17. Acima disso vale o teto de R$ 2.518,65, e nenhuma parcela pode ser menor que um salário mínimo (R$ 1.621,00).',
        'O piso explica por que quem ganhava R$ 1.500 ou R$ 2.000 recebe o mesmo valor por parcela. O teto explica por que, a partir de R$ 3.703,99 de média, mais salário não aumenta o benefício.',
      ],
      table: {
        caption: 'Parcela por média dos 3 últimos salários, 2026',
        columns: ['Média dos 3 últimos salários', 'Valor da parcela'],
        rows: [
          ['R$ 1.500,00', 'R$ 1.621,00 (piso)'],
          ['R$ 2.000,00', 'R$ 1.621,00 (piso)'],
          ['R$ 2.222,17', 'R$ 1.777,74'],
          ['R$ 2.500,00', 'R$ 1.916,66'],
          ['R$ 3.000,00', 'R$ 2.166,65'],
          ['R$ 3.703,99', 'R$ 2.518,65 (teto)'],
          ['R$ 5.000,00', 'R$ 2.518,65 (teto)'],
        ],
      },
    },
    {
      heading: 'Quantas parcelas e quanto no total',
      paragraphs: [
        'O número de parcelas depende de quantas vezes você já pediu o benefício e de quantos meses trabalhou com carteira assinada nos últimos 36 meses. Quem tem média de R$ 3.000,00 recebe parcelas de R$ 2.166,65: com 4 parcelas são R$ 8.666,62, e com 5 parcelas, R$ 10.833,27.',
        'Na primeira solicitação, quem trabalhou menos de 12 meses não tem direito. O prazo para pedir é de 7 a 120 dias depois da dispensa, e o pedido pode ser feito pelo aplicativo Carteira de Trabalho Digital ou pelo portal gov.br.',
      ],
      table: {
        caption: 'Parcelas por solicitação e tempo de trabalho',
        columns: ['Tempo de trabalho', 'Solicitação', 'Parcelas'],
        rows: [
          ['12 a 23 meses', '1ª vez', '4'],
          ['24 meses ou mais', '1ª vez', '5'],
          ['9 a 11 meses', '2ª vez', '3'],
          ['12 a 23 meses', '2ª vez', '4'],
          ['6 a 11 meses', '3ª vez ou mais', '3'],
          ['24 meses ou mais', '3ª vez ou mais', '5'],
        ],
      },
    },
  ],
  'fgts-multa': [
    {
      heading: 'Tabela de referência: FGTS e multa de 40% por tempo de empresa',
      paragraphs: [
        'A empresa deposita 8% do salário por mês na conta do FGTS. Na dispensa sem justa causa, ela também deposita uma multa de 40% sobre o total depositado durante o contrato, e o trabalhador pode sacar o saldo e a multa.',
        'A tabela mostra o saldo estimado de quem ganha R$ 3.000 por mês, sem considerar rendimento nem saques anteriores. Ela mostra como o tempo de casa aumenta a multa: a de 120 meses é dez vezes a de 12 meses.',
      ],
      table: {
        caption: 'Salário de R$ 3.000: saldo estimado e multa de 40%',
        columns: [
          'Tempo de empresa',
          'Saldo estimado (8%)',
          'Multa de 40%',
          'Saldo mais multa',
        ],
        rows: [
          ['12 meses', 'R$ 2.880,00', 'R$ 1.152,00', 'R$ 4.032,00'],
          ['24 meses', 'R$ 5.760,00', 'R$ 2.304,00', 'R$ 8.064,00'],
          ['60 meses', 'R$ 14.400,00', 'R$ 5.760,00', 'R$ 20.160,00'],
          ['120 meses', 'R$ 28.800,00', 'R$ 11.520,00', 'R$ 40.320,00'],
        ],
      },
    },
    {
      heading: 'Quanto muda com o salário',
      paragraphs: [
        'Salário e tempo de casa pesam na mesma proporção: dobrar um dos dois dobra o saldo e a multa. A tabela compara salários diferentes depois de 24 meses de empresa.',
        'Em acordo entre empresa e empregado, a multa cai para 20% e o saque é de 80% do saldo, sem direito ao seguro-desemprego. No pedido de demissão e na justa causa, não há multa nem saque, salvo outras hipóteses previstas em lei.',
      ],
      table: {
        caption: 'Saldo estimado e multa de 40% após 24 meses',
        columns: ['Salário', 'Saldo estimado (8%)', 'Multa de 40%'],
        rows: [
          ['R$ 2.000,00', 'R$ 3.840,00', 'R$ 1.536,00'],
          ['R$ 3.000,00', 'R$ 5.760,00', 'R$ 2.304,00'],
          ['R$ 4.500,00', 'R$ 8.640,00', 'R$ 3.456,00'],
          ['R$ 6.000,00', 'R$ 11.520,00', 'R$ 4.608,00'],
        ],
      },
    },
  ],
  'aviso-previo': [
    {
      heading: 'Tabela de referência: dias de aviso por tempo de empresa',
      paragraphs: [
        'O aviso prévio é de 30 dias, mais 3 dias por ano completo de contrato, até o limite de 90 dias. A tabela mostra os dias e o valor do aviso indenizado para um salário de R$ 3.000, em que cada dia vale R$ 100,00.',
        'O aviso proporcional vale apenas para o aviso dado pela empresa. Quem pede demissão deve avisar com 30 dias, sem acréscimo por tempo de casa.',
      ],
      table: {
        caption: 'Aviso prévio indenizado, salário de R$ 3.000',
        columns: ['Tempo de empresa', 'Dias de aviso', 'Valor do aviso'],
        rows: [
          ['3 meses', '30 dias', 'R$ 3.000,00'],
          ['12 meses', '33 dias', 'R$ 3.300,00'],
          ['24 meses', '36 dias', 'R$ 3.600,00'],
          ['36 meses', '39 dias', 'R$ 3.900,00'],
          ['60 meses', '45 dias', 'R$ 4.500,00'],
          ['120 meses', '60 dias', 'R$ 6.000,00'],
          ['240 meses', '90 dias', 'R$ 9.000,00'],
        ],
      },
    },
    {
      heading: 'Aviso trabalhado ou indenizado',
      paragraphs: [
        'No aviso trabalhado, o empregado cumpre a jornada com redução de 2 horas por dia ou, se preferir, de 7 dias corridos no final. No aviso indenizado, a empresa dispensa o trabalho e paga o valor correspondente, que entra na rescisão.',
        'O aviso, mesmo indenizado, conta como tempo de serviço: ele projeta mais avos de 13º e de férias e entra na base do FGTS. Por isso o valor da rescisão costuma ser maior do que a soma de salário e verbas proporcionais até a data do desligamento.',
      ],
    },
  ],
  'cdb-liquido': [
    {
      heading: 'Tabela de referência: R$ 10.000 em CDB de 100% do CDI',
      paragraphs: [
        'A tabela usa a taxa de 13,65% ao ano, que é a referência do CDI em setembro de 2026, e mostra como o Imposto de Renda regressivo muda o ganho líquido conforme o prazo. Até 180 dias o imposto é de 22,5%, de 181 a 360 dias é de 20%, de 361 a 720 dias é de 17,5% e acima de 720 dias é de 15%.',
        'Repare que esperar mais tempo reduz a alíquota do imposto. Resgatar com 360 dias custa 20% em vez de 17,5%, que só vale a partir do 361º dia, e o mesmo vale nos outros marcos de prazo.',
      ],
      table: {
        caption: 'R$ 10.000 a 13,65% ao ano, rendimento bruto e líquido',
        columns: [
          'Prazo',
          'Rendimento bruto',
          'Alíquota do IR',
          'Imposto',
          'Rendimento líquido',
        ],
        rows: [
          ['3 meses', 'R$ 325,05', '22,5%', 'R$ 73,14', 'R$ 251,92'],
          ['6 meses', 'R$ 660,68', '20%', 'R$ 132,14', 'R$ 528,54'],
          ['12 meses', 'R$ 1.365,00', '17,5%', 'R$ 238,88', 'R$ 1.126,13'],
          ['18 meses', 'R$ 2.115,86', '17,5%', 'R$ 370,28', 'R$ 1.745,58'],
          ['24 meses', 'R$ 2.916,32', '15%', 'R$ 437,45', 'R$ 2.478,87'],
          ['36 meses', 'R$ 4.679,40', '15%', 'R$ 701,91', 'R$ 3.977,49'],
        ],
      },
    },
    {
      heading: 'Como usar o resultado',
      paragraphs: [
        'Use o valor líquido para comparar com LCI, LCA, Tesouro Selic e poupança no mesmo prazo. LCI e LCA são isentas de Imposto de Renda para pessoa física, então um CDB precisa pagar um percentual maior do CDI para empatar com elas.',
        'A simulação supõe taxa constante e não inclui a taxa de custódia de alguns produtos. Se o CDB tem liquidez diária ou carência, confira as regras de resgate antes de contar com o dinheiro.',
      ],
    },
  ],
  'reajuste-aluguel': [
    {
      heading: 'Tabela de referência: novo aluguel por índice',
      paragraphs: [
        'A tabela aplica quatro índices a valores de aluguel comuns: 3,35% (IGP-M acumulado em 12 meses até setembro de 2026), 4,22% (IPCA até agosto de 2026), 4,58% (IPCA até setembro de 2026) e 5% como referência redonda.',
        'A diferença entre os índices parece pequena em percentual, mas vira dinheiro ao longo do contrato. Em um aluguel de R$ 2.500, passar de 3,35% para 4,58% custa cerca de R$ 31 a mais por mês, ou R$ 370 por ano.',
      ],
      table: {
        caption: 'Aluguel atual e valor reajustado por índice',
        columns: [
          'Aluguel atual',
          'Reajuste de 3,35%',
          'Reajuste de 4,22%',
          'Reajuste de 4,58%',
          'Reajuste de 5%',
        ],
        rows: [
          [
            'R$ 1.200,00',
            'R$ 1.240,20',
            'R$ 1.250,64',
            'R$ 1.254,96',
            'R$ 1.260,00',
          ],
          [
            'R$ 1.800,00',
            'R$ 1.860,30',
            'R$ 1.875,96',
            'R$ 1.882,44',
            'R$ 1.890,00',
          ],
          [
            'R$ 2.500,00',
            'R$ 2.583,75',
            'R$ 2.605,50',
            'R$ 2.614,50',
            'R$ 2.625,00',
          ],
          [
            'R$ 3.500,00',
            'R$ 3.617,25',
            'R$ 3.647,70',
            'R$ 3.660,30',
            'R$ 3.675,00',
          ],
        ],
      },
    },
    {
      heading: 'Regras do reajuste',
      paragraphs: [
        'O reajuste só pode ser aplicado uma vez por ano, a cada 12 meses de contrato, e deve seguir o índice previsto no contrato. Se o contrato não definir o índice, ou se ele deixar de existir, as partes devem combinar um substituto por escrito.',
        'O índice mais alto não é automático: inquilino e proprietário podem negociar um valor menor, especialmente quando o mercado está desaquecido. Um reajuste combinado por mensagem ou por aditivo, com data de início, evita discussão depois.',
      ],
    },
  ],
  'salario-por-hora': [
    {
      heading: 'Tabela de referência: valor da hora por jornada',
      paragraphs: [
        'O valor da hora é o salário dividido pelas horas mensais da jornada. Uma jornada de 44 horas semanais equivale a 220 horas por mês, uma de 40 horas equivale a 200, uma de 36 horas a 180 e uma de 30 horas a 150.',
        'Quanto menor a jornada, maior o valor da hora para o mesmo salário. É por isso que comparar propostas de emprego só pelo salário mensal pode enganar: R$ 3.000 por 150 horas valem mais por hora do que R$ 3.000 por 220 horas.',
      ],
      table: {
        caption: 'Valor da hora normal por salário e jornada mensal',
        columns: [
          'Salário',
          '220 horas',
          '200 horas',
          '180 horas',
          '150 horas',
        ],
        rows: [
          ['R$ 1.621,00', 'R$ 7,37', 'R$ 8,11', 'R$ 9,01', 'R$ 10,81'],
          ['R$ 2.000,00', 'R$ 9,09', 'R$ 10,00', 'R$ 11,11', 'R$ 13,33'],
          ['R$ 3.000,00', 'R$ 13,64', 'R$ 15,00', 'R$ 16,67', 'R$ 20,00'],
          ['R$ 4.500,00', 'R$ 20,45', 'R$ 22,50', 'R$ 25,00', 'R$ 30,00'],
          ['R$ 6.000,00', 'R$ 27,27', 'R$ 30,00', 'R$ 33,33', 'R$ 40,00'],
        ],
      },
    },
    {
      heading: 'Para que serve o valor da hora',
      paragraphs: [
        'O valor da hora é a base de horas extras, adicional noturno, desconto de atrasos e cobrança de trabalho avulso. A hora extra comum vale 50% a mais, e a de domingo e feriados costuma valer 100% a mais.',
        'Se você é autônomo, use o valor da hora CLT apenas como piso: some encargos, férias, 13º e custos próprios para chegar a um preço de hora que cubra o que a carteira assinada já paga.',
      ],
    },
  ],
  'ferias-proporcionais': [
    {
      heading: 'Tabela de referência: férias proporcionais por avos',
      paragraphs: [
        'As férias proporcionais pagam 1/12 do salário por mês trabalhado no período aquisitivo, mais o terço constitucional. A fração de 15 dias ou mais conta como mês inteiro. A tabela mostra os valores brutos para um salário de R$ 3.000.',
        'Em 12/12, o valor é igual ao das férias integrais: um salário mais um terço. Em uma rescisão sem justa causa, o aviso prévio indenizado projeta mais um avo no cálculo.',
      ],
      table: {
        caption: 'Férias proporcionais, salário de R$ 3.000',
        columns: [
          'Meses trabalhados',
          'Valor proporcional',
          'Terço constitucional',
          'Total bruto',
        ],
        rows: [
          ['1/12', 'R$ 250,00', 'R$ 83,33', 'R$ 333,33'],
          ['2/12', 'R$ 500,00', 'R$ 166,67', 'R$ 666,67'],
          ['3/12', 'R$ 750,00', 'R$ 250,00', 'R$ 1.000,00'],
          ['4/12', 'R$ 1.000,00', 'R$ 333,33', 'R$ 1.333,33'],
          ['6/12', 'R$ 1.500,00', 'R$ 500,00', 'R$ 2.000,00'],
          ['8/12', 'R$ 2.000,00', 'R$ 666,67', 'R$ 2.666,67'],
          ['10/12', 'R$ 2.500,00', 'R$ 833,33', 'R$ 3.333,33'],
          ['12/12', 'R$ 3.000,00', 'R$ 1.000,00', 'R$ 4.000,00'],
        ],
      },
    },
    {
      heading: 'Quando as férias proporcionais são devidas',
      paragraphs: [
        'São pagas na rescisão sem justa causa, no pedido de demissão, no acordo entre as partes e no fim de contrato por prazo determinado. Na justa causa, só as férias vencidas são devidas. Férias vencidas, quando houver, valem um salário mais um terço e entram à parte.',
        'Os valores acima são brutos. O INSS e o IRRF incidem sobre as férias gozadas, mas as férias indenizadas na rescisão não têm INSS nem IRRF, e o terço constitucional também fica de fora desses descontos nesse caso.',
      ],
    },
  ],
  'decimo-proporcional': [
    {
      heading: 'Tabela de referência: 13º proporcional por avos',
      paragraphs: [
        'O 13º proporcional paga 1/12 do salário por mês trabalhado no ano, e a fração de 15 dias ou mais conta como mês inteiro. A tabela mostra o valor bruto e o INSS para um salário de R$ 3.000, sem considerar Imposto de Renda.',
        'Quem entrou em junho trabalhou 7 meses no ano e recebe 7/12. Quem saiu em março, com 15 dias ou mais de março, recebe 3/12.',
      ],
      table: {
        caption: '13º proporcional, salário de R$ 3.000',
        columns: [
          'Meses trabalhados',
          '13º bruto',
          'INSS',
          'Líquido depois do INSS',
        ],
        rows: [
          ['1/12', 'R$ 250,00', 'R$ 18,75', 'R$ 231,25'],
          ['2/12', 'R$ 500,00', 'R$ 37,50', 'R$ 462,50'],
          ['3/12', 'R$ 750,00', 'R$ 56,25', 'R$ 693,75'],
          ['4/12', 'R$ 1.000,00', 'R$ 75,00', 'R$ 925,00'],
          ['6/12', 'R$ 1.500,00', 'R$ 112,50', 'R$ 1.387,50'],
          ['8/12', 'R$ 2.000,00', 'R$ 155,69', 'R$ 1.844,32'],
          ['10/12', 'R$ 2.500,00', 'R$ 200,69', 'R$ 2.299,32'],
          ['12/12', 'R$ 3.000,00', 'R$ 248,60', 'R$ 2.751,40'],
        ],
      },
    },
    {
      heading: 'Quem recebe o 13º proporcional',
      paragraphs: [
        'Recebe o 13º proporcional quem foi contratado durante o ano, quem saiu sem justa causa, quem pediu demissão e quem terminou um contrato por prazo determinado. Na justa causa, o 13º proporcional não é pago.',
        'Na rescisão, o INSS é descontado do 13º proporcional, e o Imposto de Renda incide sobre ele em separado. Confira os avos no termo de rescisão: um avo a menos pode significar centenas de reais a menos.',
      ],
    },
  ],
  'adicional-noturno': [
    {
      heading: 'Tabela de referência: adicional noturno por horas trabalhadas',
      paragraphs: [
        'O trabalho entre 22h e 5h tem adicional mínimo de 20% sobre a hora normal. A tabela usa um salário de R$ 2.640 e jornada de 220 horas mensais, o que dá hora normal de R$ 12,00, e mostra o adicional para diferentes quantidades de horas noturnas no mês.',
        'A hora noturna é reduzida: cada hora de trabalho noturno dura 52 minutos e 30 segundos. A última coluna mostra o valor adicional dessa redução, que depende de como a jornada foi contratada e pode já estar incluído no salário fixo.',
      ],
      table: {
        caption: 'Adicional noturno de 20%, salário de R$ 2.640',
        columns: [
          'Horas noturnas no mês',
          'Hora normal',
          'Adicional de 20%',
          'Efeito da hora reduzida',
        ],
        rows: [
          ['20 horas', 'R$ 12,00', 'R$ 48,00', 'R$ 41,14'],
          ['40 horas', 'R$ 12,00', 'R$ 96,00', 'R$ 82,29'],
          ['80 horas', 'R$ 12,00', 'R$ 192,00', 'R$ 164,57'],
          ['120 horas', 'R$ 12,00', 'R$ 288,00', 'R$ 246,86'],
        ],
      },
    },
    {
      heading: 'Adicional noturno e outros adicionais',
      paragraphs: [
        'O adicional noturno é habitual e, por isso, reflete em 13º, férias com um terço, FGTS e DSR. Também entra na base de horas extras feitas à noite, que somam o adicional noturno ao adicional de hora extra.',
        'Convenções coletivas podem pagar mais que 20%. Confira o percentual no contrato ou na convenção da sua categoria antes de calcular, e mantenha o registro de ponto de cada hora noturna.',
      ],
    },
  ],
};
