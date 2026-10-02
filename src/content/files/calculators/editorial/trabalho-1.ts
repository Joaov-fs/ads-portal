import type { CalculatorEditorialMap } from './types';

export const editorialTrabalho1: CalculatorEditorialMap = {
  'rescisao-clt': {
    example: {
      paragraphs: [
        'Imagine uma pessoa com salário de R$ 3.200,00 e 30 meses de empresa, dispensada sem justa causa. No último mês ela trabalhou 12 dias, já soma 5 meses no ano para fins de 13º, tem 7 meses desde o último período de férias e nenhum período vencido. Como passou de dois anos completos, o aviso prévio indenizado é de 36 dias (30 mais 3 por ano completo). Esses 36 dias projetam mais um avo de 13º e um de férias, por isso o 13º entra com 6/12 e as férias proporcionais com 8/12.',
        'A calculadora devolve cerca de R$ 12.636,44 brutos. A maior fatia é o aviso (R$ 3.840,00), seguida da multa de 40% do FGTS (R$ 3.072,00), calculada sobre um saldo estimado de R$ 7.680,00, que é 8% do salário por mês durante 30 meses. Na prática, aviso e multa juntos respondem por mais da metade do total, e são justamente as verbas que dependem do tipo de desligamento. O saldo do FGTS em si não entra na soma.',
      ],
      table: {
        caption: 'Composição do exemplo (valores brutos)',
        columns: ['Verba', 'Referência', 'Valor'],
        rows: [
          ['Saldo de salário', '12 dias', 'R$ 1.280,00'],
          ['Aviso prévio indenizado', '36 dias', 'R$ 3.840,00'],
          ['13º salário proporcional', '6/12 avos', 'R$ 1.600,00'],
          ['Férias proporcionais', '8/12 avos', 'R$ 2.133,33'],
          ['1/3 constitucional sobre as férias', '1/3', 'R$ 711,11'],
          ['Multa de 40% do FGTS', 'sobre R$ 7.680,00', 'R$ 3.072,00'],
          ['Total bruto estimado', '', 'R$ 12.636,44'],
        ],
      },
    },
    factors: [
      'O que mais pesa é o motivo do desligamento: dispensa sem justa causa, pedido de demissão, justa causa e acordo entre as partes geram conjuntos diferentes de verbas, e a conta aqui parte da dispensa sem justa causa com aviso indenizado. Depois vem o tempo de casa, que define os dias de aviso e o saldo do FGTS sobre o qual incide a multa.',
      'Também alteram o total o dia do mês em que o contrato termina, quantos meses do ano já contam para o 13º, o tempo desde as últimas férias e a existência de períodos vencidos, que valem um salário mais o terço. Médias de horas extras, adicionais e descontos não entram no cálculo, mas costumam aparecer no termo oficial. Convenção coletiva pode prever verbas extras.',
    ],
    mistakes: [
      'O erro mais comum é misturar contagens: os meses de contrato inteiro vão no campo de tempo de empresa, os meses do ano corrente vão no campo do 13º e os meses desde as últimas férias ficam em outro. Também é frequente esquecer um período de férias vencido ou informar o salário líquido em vez do bruto. No termo de rescisão (TRCT), confira cada rubrica, os avos de 13º e de férias, a data de desligamento e se o saldo do FGTS bate com o extrato.',
    ],
    faq: [
      {
        question: 'Se eu pedir demissão, o valor será o mesmo?',
        answer:
          'Não. As verbas mudam conforme o tipo de desligamento, e itens como a multa de 40% do FGTS e o aviso indenizado pago pela empresa são típicos da dispensa sem justa causa. Use o resultado como referência apenas para esse cenário.',
      },
      {
        question:
          'Por que as férias proporcionais têm mais avos do que os meses que informei?',
        answer:
          'Porque o aviso prévio indenizado projeta o tempo para 13º e férias. No exemplo, 36 dias de aviso somam mais um avo, e os 7 meses informados viram 8/12.',
      },
      {
        question: 'O total da calculadora é o que cai na conta?',
        answer:
          'Não necessariamente. O total é bruto, antes de INSS e IRRF, e o saldo do FGTS não faz parte da soma. No TRCT você vê o que é pago direto e quais descontos foram aplicados.',
      },
    ],
  },

  'seguro-desemprego': {
    example: {
      paragraphs: [
        'Vamos supor um trabalhador dispensado sem justa causa, com média dos três últimos salários de R$ 2.800,00, 20 meses trabalhados nos últimos 36 e primeiro pedido do benefício. A média passa de R$ 2.222,17, então a regra de 2026 usada pela calculadora é R$ 1.777,74 mais 50% do que excede esse valor: metade de R$ 577,83 é cerca de R$ 288,92, o que dá uma parcela de R$ 2.066,65. Esse valor fica acima do piso de R$ 1.621,00 e abaixo do teto de R$ 2.518,65.',
        'Pela tabela de parcelas, quem pede pela primeira vez e tem de 12 a 23 meses trabalhados recebe 4 parcelas, o que totaliza R$ 8.266,62. Em termos práticos, a parcela equivale a cerca de 74% da média salarial: o benefício cobre boa parte da renda, mas não toda, e esse percentual cai à medida que o salário sobe.',
      ],
      table: {
        caption: 'Resultado do exemplo',
        columns: ['Item', 'Resultado'],
        rows: [
          ['Valor de cada parcela', 'R$ 2.066,65'],
          ['Número de parcelas', '4'],
          ['Total a receber', 'R$ 8.266,62'],
        ],
      },
    },
    factors: [
      'O valor depende da média dos três últimos salários antes da dispensa, incluindo horas extras e comissões, e não do último contracheque isolado. Salários até R$ 2.222,17 recebem 80% da média; acima disso a parcela cresce só metade do excedente, até o teto de R$ 2.518,65. O piso é o salário mínimo, R$ 1.621,00.',
      'A quantidade de parcelas depende de quantas vezes o benefício já foi solicitado e dos meses trabalhados: com 24 meses ou mais são 5 parcelas; de 12 a 23, são 4; na segunda solicitação, 9 a 11 meses dão 3; na terceira ou mais, 6 a 11 meses dão 3. O pedido precisa ser feito entre 7 e 120 dias corridos depois da dispensa sem justa causa.',
    ],
    mistakes: [
      'Quem preenche costuma usar o último salário em vez da média de três meses, ou esquecer horas extras e comissões nessa média. Outro deslize é informar o tempo total de carreira no campo de meses, quando a pergunta trata dos últimos 36 meses, ou escolher o número errado da solicitação. Deixar passar a janela de 120 dias também faz perder o benefício. O valor e a habilitação finais saem do requerimento oficial, não da simulação.',
    ],
    faq: [
      {
        question: 'Qual é o prazo para pedir o seguro-desemprego?',
        answer:
          'O pedido deve ser feito entre 7 e 120 dias corridos depois da dispensa sem justa causa. A habilitação final é do Ministério do Trabalho.',
      },
      {
        question: 'Por que a parcela é menor do que meu salário?',
        answer:
          'Porque o benefício aplica faixas sobre a média dos três últimos salários: 80% até R$ 2.222,17 e metade do excedente acima disso, com teto de R$ 2.518,65. Só quem recebe pouco chega perto do piso do salário mínimo.',
      },
      {
        question: 'Quantas parcelas recebo na segunda solicitação?',
        answer:
          'Segundo a tabela usada aqui, a segunda solicitação rende 3 parcelas com 9 a 11 meses trabalhados, 4 com 12 a 23 meses e 5 com 24 meses ou mais. Abaixo de 9 meses não há parcelas pelo tempo informado.',
      },
    ],
  },

  'decimo-salario': {
    example: {
      paragraphs: [
        'Considere alguém que trabalhou o ano inteiro com salário de R$ 4.200,00 e um dependente. O 13º bruto é R$ 4.200,00. A primeira parcela é metade desse valor, R$ 2.100,00, paga até 30 de novembro e sem descontos. Os descontos ficam para a segunda parcela, até 20 de dezembro: INSS de R$ 392,60, calculado só sobre o 13º, e IRRF zero, porque o rendimento não passa de R$ 5.000,00 e a redução da Lei 15.270/2025 zera o imposto.',
        'O líquido é R$ 3.807,40, e a segunda parcela sai em R$ 1.707,40, menor que a primeira. Quem espera receber dois pagamentos iguais costuma estranhar, mas a diferença é só o INSS que foi deixado para dezembro.',
      ],
      table: {
        caption: 'Parcelas do 13º no exemplo',
        columns: ['Parcela', 'Prazo', 'Valor'],
        rows: [
          [
            '1ª parcela (50% do bruto)',
            'Até 30 de novembro, sem descontos',
            'R$ 2.100,00',
          ],
          [
            '2ª parcela (restante)',
            'Até 20 de dezembro, com INSS e IRRF',
            'R$ 1.707,40',
          ],
          ['13º líquido', '', 'R$ 3.807,40'],
        ],
      },
    },
    factors: [
      'O 13º integral equivale a um salário e só vale para quem trabalhou os 12 meses; para menos tempo, o certo é o cálculo proporcional. O INSS e o IRRF são apurados sobre o 13º isoladamente, sem somar com o salário do mês, e por isso a alíquota efetiva costuma ser menor do que a do holerite mensal.',
      'Quanto maior o 13º, mais faixas do INSS e do IRRF entram em jogo. Cada dependente reduz a base do imposto em R$ 189,59. Médias de horas extras, comissões e adicionais habituais, que podem aumentar o valor, não estão incluídas no cálculo.',
    ],
    mistakes: [
      'Um erro comum é esperar a segunda parcela igual à primeira, quando ela já vem com todos os descontos. Também se erra ao usar o 13º integral para quem entrou ou saiu no meio do ano, ao somar o 13º ao salário de dezembro para calcular imposto, ou ao esquecer a média de horas extras e adicionais. Confira no holerite de dezembro o valor bruto do 13º, o desconto de INSS e o número de dependentes cadastrados na folha.',
    ],
    faq: [
      {
        question: 'Por que a segunda parcela do 13º vem menor?',
        answer:
          'A primeira parcela é metade do bruto, sem descontos. INSS e IRRF incidem sobre o 13º inteiro e são cobrados na segunda parcela, que fica menor.',
      },
      {
        question: 'Quais são os prazos de pagamento do 13º?',
        answer:
          'A primeira parcela deve ser paga até 30 de novembro e a segunda até 20 de dezembro, conforme os prazos usados na calculadora.',
      },
      {
        question: 'O INSS do 13º soma com o do meu salário de dezembro?',
        answer:
          'Não. O cálculo aqui trata o 13º separadamente do salário do mês, então a contribuição é apurada só sobre o valor do 13º.',
      },
    ],
  },

  irrf: {
    example: {
      paragraphs: [
        'Pegue um rendimento tributável de R$ 6.000,00 por mês, com um dependente e sem pensão alimentícia. O INSS sai por faixas e soma R$ 641,51. O dependente reduz mais R$ 189,59. A base de cálculo fica em R$ 5.168,90 e, pela tabela progressiva, o imposto seria cerca de R$ 512,72. Como o rendimento está entre R$ 5.000,00 e R$ 7.350,00, entra uma redução parcial da Lei 15.270/2025, de cerca de R$ 179,75, e o IRRF retido fica em R$ 332,97, ou 5,55% do rendimento.',
        'Aqui as deduções legais (R$ 831,10) superam o desconto simplificado mensal de R$ 607,20, que a folha pode aplicar quando for mais vantajoso, então o holerite tende a ficar próximo desse valor. Em salários logo acima de R$ 5.000,00 essa escolha pode gerar diferença de alguns reais.',
      ],
      table: {
        caption:
          'Passo a passo do exemplo (valores arredondados individualmente)',
        columns: ['Etapa', 'Valor'],
        rows: [
          ['Rendimento tributável bruto', 'R$ 6.000,00'],
          ['(−) INSS', 'R$ 641,51'],
          ['(−) 1 dependente × R$ 189,59', 'R$ 189,59'],
          ['= Base de cálculo', 'R$ 5.168,90'],
          ['Imposto pela tabela progressiva', 'R$ 512,72'],
          ['(−) Redução da Lei 15.270/2025', 'R$ 179,75'],
          ['= IRRF retido', 'R$ 332,97'],
        ],
      },
    },
    factors: [
      'Três coisas definem o imposto: o rendimento tributável bruto, as deduções e a faixa em que a redução cai. Até R$ 5.000,00 de rendimento o imposto é zerado; entre R$ 5.000,00 e R$ 7.350,00 a redução diminui gradualmente; acima de R$ 7.350,00 não há redução e vale a tabela cheia.',
      'As deduções usadas aqui são o INSS, R$ 189,59 por dependente e a pensão alimentícia. Previdência privada (PGBL) e outras deduções podem reduzir ainda mais a base. Na folha de pagamento também pode valer o desconto simplificado mensal de R$ 607,20 no lugar das deduções legais, quando for melhor para o empregado.',
    ],
    mistakes: [
      'Quem preenche costuma colocar o salário líquido no lugar do bruto, contar dependentes que não estão cadastrados na folha ou esquecer a pensão alimentícia. Também há quem some 13º, férias ou PLR ao salário, sendo que cada um tem tributação própria. No holerite, compare o rendimento tributável, o desconto de INSS, a base de cálculo do IRRF e o número de dependentes. Diferenças pequenas costumam vir do desconto simplificado ou de outras deduções.',
    ],
    faq: [
      {
        question: 'Até quanto não pago IRRF em 2026?',
        answer:
          'A Lei 15.270/2025 zera o imposto para rendimentos tributáveis de até R$ 5.000,00 por mês, com redução gradual até R$ 7.350,00. Acima disso, vale a tabela progressiva sem a redução.',
      },
      {
        question: 'Quanto cada dependente reduz da base?',
        answer:
          'R$ 189,59 por dependente por mês, valor descontado da base de cálculo depois do INSS. A pensão alimentícia paga também reduz a base.',
      },
      {
        question: 'Por que o IRRF do meu holerite não bate com o resultado?',
        answer:
          'A folha pode aplicar o desconto simplificado de R$ 607,20 quando ele compensa mais, ou considerar PGBL e outras deduções. Isso pode gerar diferença de alguns reais, principalmente logo acima de R$ 5.000,00.',
      },
    ],
  },

  'horas-extras': {
    example: {
      paragraphs: [
        'Pense em um salário de R$ 2.400,00 com jornada de 220 horas por mês. A hora normal vale R$ 10,91. No mês foram 12 horas extras comuns e 4 em domingos e feriados. As comuns levam adicional de 50%, ou R$ 16,36 por hora, e somam R$ 196,36. As de domingos e feriados levam 100%, ou R$ 21,82 por hora, e somam R$ 87,27.',
        'Em seguida entra o reflexo no descanso semanal remunerado (DSR): com 22 dias úteis e 8 repousos no mês, soma-se mais R$ 103,14. O total bruto é R$ 386,78. O DSR acrescenta algo como 36% sobre as horas extras, um efeito que muita gente esquece de conferir no holerite.',
      ],
      table: {
        caption: 'Composição do exemplo (valores arredondados individualmente)',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['Horas extras a 50%', '12 h × R$ 16,36', 'R$ 196,36'],
          ['Horas extras a 100%', '4 h × R$ 21,82', 'R$ 87,27'],
          ['Reflexo no DSR', '8 repousos ÷ 22 dias úteis', 'R$ 103,14'],
          ['Total bruto', '', 'R$ 386,78'],
        ],
      },
    },
    factors: [
      'O ponto de partida é o valor da hora, que depende do salário e da jornada mensal: 220 horas para 44 semanais, 200 para 40 e 180 para 36. A mesma quantidade de horas extras rende mais em jornadas menores. O adicional mínimo constitucional é de 50%, mas convenção ou acordo coletivo pode fixar percentual maior, e é comum que domingos e feriados paguem 100%.',
      'A base também conta: adicionais fixos que integram a remuneração, como insalubridade, devem ser incluídos no salário informado. O número de dias úteis e de repousos do mês muda o reflexo no DSR. Horas compensadas com folga não viram pagamento.',
    ],
    mistakes: [
      'Os tropeços mais frequentes são informar só o salário-base quando há adicionais fixos, usar uma jornada mensal que não é a do contrato (como 30 dias vezes 8 horas), tratar horas de domingo e feriado como se fossem de 50% e contar dias úteis ou repousos errados. Confira no cartão de ponto a quantidade de horas de cada tipo e, no holerite, a rubrica de cada adicional e a de reflexo no DSR.',
    ],
    faq: [
      {
        question: 'Hora extra em domingo ou feriado paga mais?',
        answer:
          'Em regra, o trabalho em domingo ou feriado sem folga compensatória é pago com adicional de 100%. Convenções coletivas podem prever percentuais maiores, então confira a sua.',
      },
      {
        question: 'O que é o reflexo das horas extras no DSR?',
        answer:
          'É o acréscimo no pagamento dos repousos semanais: o total das horas extras é dividido pelos dias úteis do mês e multiplicado pelos dias de repouso. No exemplo, isso soma R$ 103,14.',
      },
      {
        question: 'Hora extra em feriado paga 50% ou 100%?',
        answer:
          'A calculadora paga 100% nas horas de domingos e feriados. A convenção coletiva da categoria pode prever outro percentual, então vale conferir a sua.',
      },
    ],
  },

  'fgts-multa': {
    example: {
      paragraphs: [
        'Suponha um salário de R$ 3.000,00 e 24 meses de depósitos. O empregador deposita 8% por mês, ou R$ 240,00, e em 24 meses o saldo estimado chega a R$ 5.760,00. Se a dispensa for sem justa causa e a multa informada for 40%, ela soma R$ 2.304,00. A calculadora devolve R$ 8.064,00 como saldo mais multa.',
        'Isso significa que o valor da multa equivale a 40% do que já foi depositado, e não a 40% de um salário. Se o campo de multa for zerado, como em um pedido de demissão, o resultado cai para os R$ 5.760,00 do saldo.',
      ],
      table: {
        caption: 'Composição do exemplo',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          [
            'Saldo estimado do FGTS',
            '8% × R$ 3.000,00 × 24 meses',
            'R$ 5.760,00',
          ],
          ['Multa rescisória', '40% do saldo', 'R$ 2.304,00'],
          ['Saldo mais multa', '', 'R$ 8.064,00'],
        ],
      },
    },
    factors: [
      'O saldo cresce com o salário e com o número de meses depositados, e a multa é um percentual sobre ele. O valor real também sofre influência da correção do saldo (TR mais 3% ao ano), dos depósitos feitos sobre o 13º e de saques já realizados, itens que a estimativa não leva em conta.',
      'O percentual da multa depende do tipo de desligamento: 40% na dispensa sem justa causa; no pedido de demissão não há multa. Se houve meses sem depósito ou depósito sobre valor menor que o salário, o saldo real será menor que o estimado.',
    ],
    mistakes: [
      'É comum usar o salário líquido em vez do bruto, contar como depositados meses em que a empresa não recolheu o FGTS, ou confundir a multa com o saldo, achando que um substitui o outro. Também se esquece dos saques anteriores. Para um valor exato, consulte o extrato do aplicativo FGTS e confira se todos os meses do contrato aparecem com depósito.',
    ],
    faq: [
      {
        question: 'Quem paga a multa de 40% do FGTS?',
        answer:
          'Na dispensa sem justa causa, a multa é obrigação do empregador, calculada sobre o saldo do FGTS. Ela não desconta nada do saldo do trabalhador.',
      },
      {
        question: 'Por que meu extrato mostra mais do que a estimativa?',
        answer:
          'O saldo real recebe correção (TR mais 3% ao ano) e depósitos sobre o 13º, que a estimativa deixa de fora. A estimativa usa só 8% do salário por mês.',
      },
      {
        question: 'Se eu pedir demissão, perco o saldo do FGTS?',
        answer:
          'O saldo continua sendo seu; o que muda é que não há multa de 40%. As regras de saque dependem do tipo de desligamento, então confira no aplicativo FGTS.',
      },
    ],
  },

  inss: {
    example: {
      paragraphs: [
        'Com um salário de R$ 4.500,00, o INSS não é uma alíquota única sobre tudo. A primeira faixa, até R$ 1.621,00, paga 7,5% e rende R$ 121,57. Os R$ 1.281,84 seguintes, até R$ 2.902,84, pagam 9%, ou R$ 115,37. Depois vêm R$ 1.451,43 a 12%, ou R$ 174,17, e só os últimos R$ 145,73, acima de R$ 4.354,27, pagam 14%, ou R$ 20,40.',
        'A contribuição total é R$ 431,51, o equivalente a 9,59% do salário. Esse percentual efetivo é menor que a alíquota da última faixa, porque a parte mais alta do salário é a única que chega a 14%.',
      ],
      table: {
        caption: 'Contribuição por faixa no exemplo',
        columns: ['Faixa do salário', 'Alíquota', 'Parte do salário', 'INSS'],
        rows: [
          ['Até R$ 1.621,00', '7,5%', 'R$ 1.621,00', 'R$ 121,57'],
          ['R$ 1.621,01 a R$ 2.902,84', '9%', 'R$ 1.281,84', 'R$ 115,37'],
          ['R$ 2.902,85 a R$ 4.354,27', '12%', 'R$ 1.451,43', 'R$ 174,17'],
          ['R$ 4.354,28 a R$ 8.475,55', '14%', 'R$ 145,73', 'R$ 20,40'],
          ['Total', '', 'R$ 4.500,00', 'R$ 431,51'],
        ],
      },
    },
    factors: [
      'O valor depende apenas do salário de contribuição e de quantas faixas ele atinge. Cada alíquota incide só sobre a parte do salário dentro da faixa. Há um teto: acima de R$ 8.475,55 a contribuição para de crescer e fica em R$ 988,09, o máximo.',
      'Por isso, aumentos em salários altos elevam o desconto menos que proporcionalmente. A remuneração do mês, e não só o salário-base, pode compor a base: o holerite mostra o valor usado. A contribuição reduz o líquido e também diminui a base de cálculo do IRRF.',
    ],
    mistakes: [
      'O erro clássico é multiplicar o salário inteiro pela alíquota da última faixa, o que superestima o desconto. Também é comum informar o salário líquido, ignorar o teto de R$ 8.475,55 ou esquecer horas extras e adicionais que entram na base. Compare o resultado com a linha de INSS do holerite e com a base de contribuição que ali aparece.',
    ],
    faq: [
      {
        question: 'Qual é o desconto máximo de INSS em 2026?',
        answer:
          'Para salários a partir de R$ 8.475,55, o teto de contribuição, o desconto é de R$ 988,09. Acima disso o valor não aumenta.',
      },
      {
        question: 'Por que meu desconto não é 14% do salário?',
        answer:
          'Porque as alíquotas são progressivas: 7,5%, 9%, 12% e 14% incidem cada uma só sobre a parte do salário que cai na respectiva faixa. A alíquota efetiva fica abaixo de 14%.',
      },
      {
        question: 'O INSS entra no cálculo do imposto de renda?',
        answer:
          'Sim. Na calculadora de IRRF, o INSS é descontado do rendimento antes de aplicar a tabela, reduzindo a base de cálculo do imposto.',
      },
    ],
  },

  'aviso-previo': {
    example: {
      paragraphs: [
        'Um empregado com salário de R$ 3.500,00 e 60 meses de empresa, ou seja, 5 anos completos, é dispensado e a empresa decide indenizar o aviso. O aviso é de 30 dias mais 3 por ano completo: 30 + 15 = 45 dias, conforme a Lei 12.506/2011. O valor é o salário proporcional a esses dias: R$ 3.500,00 ÷ 30 × 45 = R$ 5.250,00.',
        'Em termos práticos, o trabalhador recebe um salário e meio a título de aviso. Se, em vez disso, cumprir o aviso trabalhando, recebe o salário normal pelos dias trabalhados, e o valor acima não se aplica. O aviso indenizado ainda soma avos de 13º e férias na rescisão.',
      ],
      table: {
        caption: 'Dias de aviso prévio por anos completos de contrato',
        columns: ['Anos completos', 'Dias de aviso'],
        rows: [
          ['Menos de 1 ano', '30'],
          ['1 ano', '33'],
          ['5 anos', '45'],
          ['10 anos', '60'],
          ['20 anos ou mais', '90'],
        ],
      },
    },
    factors: [
      'O número de dias depende dos anos completos de contrato: 3 dias a mais por ano, a partir de 30, com limite de 90 (20 anos ou mais). Meses que não fecham um ano não somam dias. O salário usado como base pode incluir médias de horas extras e comissões habituais, o que aumenta o valor.',
      'Outro fator é a forma de cumprimento: aviso trabalhado, em que a pessoa segue em atividade e recebe salário, ou indenizado, quando a empresa dispensa o trabalho e paga o valor correspondente. No indenizado, os dias de aviso também projetam avos de 13º e de férias.',
    ],
    mistakes: [
      'O campo pede meses, e muita gente digita anos, o que reduz o aviso a 30 dias. Outros somam 3 dias por mês em vez de por ano, arredondam 1 ano e 11 meses para 2 anos ou passam do limite de 90 dias. Confira o tempo de empresa na carteira de trabalho e os dias de aviso no termo de rescisão (TRCT).',
    ],
    faq: [
      {
        question:
          'Quantos dias de aviso tenho com 1 ano e 11 meses de empresa?',
        answer:
          'São 33 dias: 30 mais 3 por ano completo, e só 1 ano está completo. Os 11 meses restantes não somam dias.',
      },
      {
        question: 'O aviso prévio indenizado conta para 13º e férias?',
        answer:
          'Sim. Os dias do aviso indenizado projetam o tempo do contrato e somam avos de 13º e de férias proporcionais na rescisão.',
      },
      {
        question: 'Existe limite de dias de aviso?',
        answer:
          'Sim. A Lei 12.506/2011 prevê 30 dias mais 3 por ano completo, até o máximo de 90 dias.',
      },
    ],
  },

  'ferias-proporcionais': {
    example: {
      paragraphs: [
        'Uma pessoa com salário de R$ 3.000,00 que trabalhou 7 meses do período aquisitivo e se desliga antes de completar um ano tem direito a 7/12 de férias. O cálculo é R$ 3.000,00 ÷ 12 × 7 = R$ 1.750,00. A esse valor soma-se o adicional de 1/3 previsto no art. 7º, XVII, da Constituição, R$ 583,33, o que resulta em R$ 2.333,33 brutos.',
        'Na prática, cada mês trabalhado vale R$ 250,00 de férias e o terço acrescenta cerca de 33% sobre esse total. O resultado é bruto, antes de INSS e IRRF, e é diferente das férias vencidas, que valem um salário completo mais o terço.',
      ],
      table: {
        caption: 'Composição do exemplo (valores brutos)',
        columns: ['Item', 'Referência', 'Valor'],
        rows: [
          ['Férias proporcionais', '7/12 avos', 'R$ 1.750,00'],
          [
            'Adicional de 1/3',
            'Constituição Federal, art. 7º, XVII',
            'R$ 583,33',
          ],
          ['Total bruto', '', 'R$ 2.333,33'],
        ],
      },
    },
    factors: [
      'O resultado cresce com os meses do período aquisitivo em curso, e não com o tempo total de empresa. Cada mês com 15 dias ou mais trabalhados conta como um avo inteiro; fração menor não conta. Por isso a data de admissão ou do último período de férias importa.',
      'O salário base também pesa: médias de horas extras e adicionais variáveis aumentam o valor e não entram nesta conta. Em uma rescisão com aviso prévio indenizado, o aviso pode projetar mais um avo. O tipo de desligamento altera quais verbas são devidas.',
    ],
    mistakes: [
      'A confusão mais comum é contar os meses desde a admissão, e não desde o início do período aquisitivo em andamento. Também se esquece do terço constitucional, soma-se uma fração de menos de 15 dias como se fosse mês inteiro ou se mistura férias proporcionais com vencidas, que são calculadas à parte. Confira no termo de rescisão (TRCT) quantos avos foram pagos e a data de início do período.',
    ],
    faq: [
      {
        question: 'Quando um mês incompleto conta como avo?',
        answer:
          'Quando houve 15 dias ou mais de trabalho nele. Com menos de 15 dias, o mês não entra na contagem.',
      },
      {
        question: 'Por que as férias têm o adicional de 1/3?',
        answer:
          'Porque a Constituição Federal (art. 7º, XVII) garante às férias um pagamento pelo menos um terço maior que o salário normal. No exemplo, esse terço soma R$ 583,33.',
      },
      {
        question:
          'O valor das férias proporcionais já vem com INSS e IRRF descontados?',
        answer:
          'Não. O resultado é bruto, antes de INSS e IRRF. Os descontos aparecem no termo de rescisão.',
      },
    ],
  },

  'decimo-proporcional': {
    example: {
      paragraphs: [
        'Suponha uma pessoa com salário de R$ 3.000,00 admitida no início de junho e que trabalhou até dezembro, somando 7 meses no ano. O 13º é dividido em 12 avos: R$ 3.000,00 ÷ 12 = R$ 250,00 por mês. Com 7 avos, o 13º proporcional bruto é de R$ 1.750,00.',
        'Para quem foi admitido ou saiu no meio do ano, o 13º é proporcional aos meses trabalhados: com 3 meses seria R$ 750,00 e com 12, R$ 3.000,00. O valor é bruto, antes do INSS e do IRRF, que incidem sobre o 13º separadamente do salário.',
      ],
      table: {
        caption: 'Valor bruto por meses trabalhados (salário de R$ 3.000,00)',
        columns: ['Meses no ano', 'Avos', '13º proporcional bruto'],
        rows: [
          ['3', '3/12', 'R$ 750,00'],
          ['7', '7/12', 'R$ 1.750,00'],
          ['12', '12/12', 'R$ 3.000,00'],
        ],
      },
    },
    factors: [
      'Dois fatores comandam o resultado: o salário e o número de avos. Cada mês com 15 dias ou mais de trabalho vale um avo; fração menor não conta. Quem entrou em 20 de março, por exemplo, não ganha o avo de março, pois trabalhou apenas 12 dias naquele mês.',
      'Médias de horas extras, comissões e adicionais variáveis aumentam o valor devido, mas não entram nesta conta. O tipo de desligamento também importa, já que algumas situações alteram as verbas rescisórias. Em dispensa com aviso indenizado, o aviso pode projetar mais um avo.',
    ],
    mistakes: [
      'Um deslize frequente é contar os meses de contrato inteiro, e não só os do ano corrente, ou contar um mês incompleto com menos de 15 dias. Também se tenta usar o 13º proporcional para alguém que trabalhou o ano todo, caso em que o cálculo integral é mais adequado. No holerite ou no termo de rescisão, procure a rubrica de 13º proporcional e confira o número de avos pagos.',
    ],
    faq: [
      {
        question: 'Como entra o 13º proporcional em uma rescisão?',
        answer:
          'Aparece como uma verba própria, calculada em avos dos meses trabalhados no ano. Com aviso prévio indenizado, o tempo do aviso pode acrescentar um avo.',
      },
      {
        question: 'Quando o 13º proporcional é pago?',
        answer:
          'Na rescisão, ele entra junto com as demais verbas, no prazo do termo de rescisão. Com o contrato em andamento, o 13º segue o calendário de novembro e dezembro.',
      },
      {
        question:
          'Quem trabalhou só 14 dias em um mês recebe o avo daquele mês?',
        answer:
          'Não. O mês só conta como avo inteiro quando teve 15 dias ou mais trabalhados.',
      },
    ],
  },

  'custo-demissao': {
    example: {
      paragraphs: [
        'Uma empresa avalia dispensar sem justa causa um empregado com salário de R$ 4.800,00 e 18 meses de casa. No último mês ele trabalhou 20 dias, soma 8 meses no ano e 3 meses desde as últimas férias, sem período vencido. As verbas rescisórias, com aviso indenizado de 33 dias, chegam a R$ 16.978,13, já incluída a multa de 40% do FGTS, de R$ 2.764,80.',
        'Além disso, a empresa deposita 8% de FGTS sobre saldo de salário, aviso e 13º, o que soma R$ 966,40. O custo estimado é de R$ 17.944,53, pouco menos de quatro salários. Esse número ainda não inclui os encargos patronais de INSS, que variam conforme o regime tributário.',
      ],
      table: {
        caption: 'Composição do custo estimado no exemplo',
        columns: ['Item', 'Referência', 'Valor'],
        rows: [
          ['Saldo de salário', '20 dias', 'R$ 3.200,00'],
          ['Aviso prévio indenizado', '33 dias', 'R$ 5.280,00'],
          ['13º salário proporcional', '9/12 avos', 'R$ 3.600,00'],
          ['Férias proporcionais', '4/12 avos', 'R$ 1.600,00'],
          ['1/3 constitucional sobre as férias', '1/3', 'R$ 533,33'],
          ['Multa de 40% do FGTS', '40% do saldo estimado', 'R$ 2.764,80'],
          ['FGTS de 8% sobre saldo, aviso e 13º', '8%', 'R$ 966,40'],
          ['Custo total estimado', '', 'R$ 17.944,53'],
        ],
      },
    },
    factors: [
      'O custo sobe com o tempo de casa, porque aumenta o aviso prévio (30 dias mais 3 por ano completo, até 90) e o saldo do FGTS sobre o qual incide a multa. Períodos de férias vencidos pesam bastante, já que cada um custa um salário mais o terço.',
      'Horas extras, adicionais e médias habituais que integram a remuneração aumentam as verbas, assim como cláusulas de convenção coletiva. Fora do cálculo ficam os encargos patronais de INSS, que mudam com o regime tributário da empresa. Por isso o número deve ser lido como piso do desembolso, e não como o custo completo.',
    ],
    mistakes: [
      'Quem faz a conta costuma considerar só o que o empregado recebe e esquecer o FGTS de 8% sobre as verbas, a multa e os encargos patronais. Outros omitem férias vencidas ou usam o salário sem adicionais habituais. Comece sempre pelo tempo de casa e pelo período de férias em aberto, e peça ao departamento pessoal ou à contabilidade uma simulação do termo de rescisão, que é o documento que vale.',
    ],
    faq: [
      {
        question: 'Como a multa de 40% do FGTS entra no custo?',
        answer:
          'Ela é calculada sobre o saldo estimado do FGTS (8% do salário por mês de contrato). No exemplo, 40% de R$ 6.912,00 dão R$ 2.764,80.',
      },
      {
        question: 'Os encargos patronais de INSS estão incluídos?',
        answer:
          'Não. O custo mostrado soma as verbas rescisórias, a multa e o FGTS de 8% sobre as verbas, mas não os encargos patronais, que dependem do regime tributário da empresa.',
      },
      {
        question:
          'Se o empregado cumprir o aviso trabalhando, o custo é o mesmo?',
        answer:
          'Não. A calculadora considera aviso indenizado. Com aviso trabalhado, a empresa paga os salários normais desse período em vez do valor indenizado, e o resultado muda.',
      },
    ],
  },

  'salario-por-hora': {
    example: {
      paragraphs: [
        'Quem recebe R$ 3.300,00 por mês em uma jornada de 220 horas, a de 44 horas semanais, tem hora de trabalho valendo R$ 15,00. A conta é só uma divisão: R$ 3.300,00 ÷ 220.',
        'O mesmo salário com jornada menor rende mais por hora: 200 horas (40 semanais) dão R$ 16,50 e 180 horas (36 semanais) dão R$ 18,33. Na prática, a hora é a base de cálculo de horas extras, adicional noturno e banco de horas. Se a jornada informada estiver errada, tudo o que depende dela sai errado.',
      ],
      table: {
        caption: 'Valor da hora para um salário de R$ 3.300,00',
        columns: ['Jornada semanal', 'Horas por mês', 'Valor da hora'],
        rows: [
          ['44 horas', '220', 'R$ 15,00'],
          ['40 horas', '200', 'R$ 16,50'],
          ['36 horas', '180', 'R$ 18,33'],
        ],
      },
    },
    factors: [
      'O valor da hora depende de duas coisas: o salário mensal e a jornada mensal contratada. Para o mesmo salário, menos horas significam hora mais cara. Adicionais fixos que integram a remuneração, como insalubridade, podem compor o salário usado na divisão.',
      'Variações como horas extras, comissões e prêmios eventuais ficam fora desta conta, que parte de um salário fixo. Se o contrato usa outro divisor, o valor muda. O resultado é uma estimativa, e o holerite ou o contrato com o empregador são a referência.',
    ],
    mistakes: [
      'O deslize mais comum é calcular a jornada como 30 dias vezes 8 horas, chegando a 240, quando o contrato diz 220. Também se informa a jornada semanal (44) no campo mensal, ou o salário líquido no lugar do bruto. Veja no contrato de trabalho e no holerite qual divisor a empresa usa e confira se o salário informado inclui os adicionais fixos.',
    ],
    faq: [
      {
        question: 'Devo usar 220 ou 200 horas?',
        answer:
          'Use 220 para jornada de 44 horas semanais, 200 para 40 horas e 180 para 36 horas. Se o contrato mencionar outro divisor, use o do contrato.',
      },
      {
        question: 'Como o valor da hora vira hora extra?',
        answer:
          'Sobre o valor da hora incide o adicional, no mínimo 50% pela Constituição. Com hora de R$ 15,00, a hora extra a 50% seria R$ 22,50, mas convenção coletiva pode fixar adicional maior.',
      },
      {
        question: 'O salário informado deve incluir adicionais?',
        answer:
          'Inclua os adicionais fixos que fazem parte da remuneração, como insalubridade. Prêmios e comissões eventuais não entram, porque variam de mês a mês.',
      },
    ],
  },
};
