import type { ContentSection } from '../../../types';

/**
 * Segunda leva de seções extras das calculadoras (tabelas de referência
 * calculadas pelo motor em src/calculators). Gerado por
 * scripts/aprofundamento/gerar-2.mts: não edite à mão.
 */
export const calculatorExtras2: Readonly<
  Record<string, readonly ContentSection[]>
> = {
  'rescisao-clt': [
    {
      heading: 'Tabela de referência: rescisão por salário',
      paragraphs: [
        'A tabela simula a dispensa sem justa causa de quem trabalhou 24 meses, saiu no dia 15, tem 6 meses no ano e 6 meses desde as últimas férias, sem férias vencidas. O total soma saldo de salário, aviso prévio indenizado, 13º e férias proporcionais com um terço e a multa de 40% do FGTS, em valores brutos.',
        'O saldo do FGTS aparece à parte porque ele já é do trabalhador e é sacado na conta do FGTS. A multa de 40% é paga pela empresa e entra no total da rescisão.',
      ],
      table: {
        caption: 'Rescisão sem justa causa com 24 meses de casa',
        columns: [
          'Salário',
          'Aviso prévio',
          'Saldo estimado do FGTS',
          'Total bruto da rescisão',
        ],
        rows: [
          ['R$ 2.000,00', '36 dias', 'R$ 3.840,00', 'R$ 7.658,22'],
          ['R$ 3.000,00', '36 dias', 'R$ 5.760,00', 'R$ 11.487,33'],
          ['R$ 5.000,00', '36 dias', 'R$ 9.600,00', 'R$ 19.145,56'],
        ],
      },
    },
    {
      heading: 'Como o tempo de casa muda a rescisão',
      paragraphs: [
        'Com salário de R$ 3.000,00, o tempo de serviço aumenta o aviso prévio (3 dias a mais por ano completo, até 90 dias) e o saldo do FGTS, que é a base da multa de 40%. Por isso a rescisão de quem tem 5 anos de casa é muito maior que a de quem tem 6 meses.',
        'As verbas proporcionais dependem dos meses do ano e do período desde as últimas férias, que aqui seguem o mesmo padrão para facilitar a comparação.',
      ],
      table: {
        caption: 'Rescisão de quem ganha R$ 3.000 por tempo de casa',
        columns: [
          'Tempo de casa',
          'Aviso prévio',
          'Saldo estimado do FGTS',
          'Total bruto da rescisão',
        ],
        rows: [
          ['6 meses', '30 dias', 'R$ 1.440,00', 'R$ 9.159,33'],
          ['12 meses', '33 dias', 'R$ 2.880,00', 'R$ 10.035,33'],
          ['24 meses', '36 dias', 'R$ 5.760,00', 'R$ 11.487,33'],
          ['60 meses', '45 dias', 'R$ 14.400,00', 'R$ 16.426,67'],
        ],
      },
    },
  ],
  'custo-demissao': [
    {
      heading: 'Tabela de referência: custo de demitir por salário',
      paragraphs: [
        'Para a empresa, demitir sem justa causa custa mais que as verbas da rescisão. Há também o FGTS de 8% que incide sobre saldo de salário, aviso e 13º. A tabela mostra o custo de um desligamento com 24 meses de casa, saída no dia 15, 6 meses no ano e 6 meses desde as últimas férias.',
        'O custo total é uma estimativa de caixa. Não inclui o custo de contratar e treinar um substituto, nem o INSS patronal sobre as verbas, que depende do regime tributário da empresa.',
      ],
      table: {
        caption: 'Custo de dispensa sem justa causa com 24 meses de casa',
        columns: [
          'Salário',
          'Verbas da rescisão',
          'FGTS sobre as verbas',
          'Custo total',
        ],
        rows: [
          ['R$ 2.000,00', 'R$ 7.658,22', 'R$ 365,33', 'R$ 8.023,56'],
          ['R$ 3.000,00', 'R$ 11.487,33', 'R$ 548,00', 'R$ 12.035,33'],
          ['R$ 5.000,00', 'R$ 19.145,56', 'R$ 913,33', 'R$ 20.058,89'],
          ['R$ 8.000,00', 'R$ 30.632,89', 'R$ 1.461,33', 'R$ 32.094,22'],
        ],
      },
    },
  ],
  'custo-funcionario-clt': [
    {
      heading: 'Tabela de referência: custo mensal por salário',
      paragraphs: [
        'A tabela usa encargos patronais de 28% sobre salário e provisões, valor comum em empresas fora do Simples Nacional, e nenhum benefício. Em empresas do Simples, esse percentual costuma ser menor, e deve ser ajustado na calculadora. A última coluna mostra quanto o custo total representa do salário.',
        'O resultado deixa claro que o funcionário custa bem mais que o salário no contracheque. As provisões guardam todo mês o dinheiro do 13º e das férias com um terço, e o FGTS de 8% é depositado todo mês na conta do trabalhador.',
      ],
      table: {
        caption: 'Custo mensal com encargos de 28% e sem benefícios',
        columns: [
          'Salário',
          'Provisões de 13º e férias',
          'FGTS de 8%',
          'Encargos',
          'Custo total',
          'Custo sobre o salário',
        ],
        rows: [
          [
            'R$ 2.000,00',
            'R$ 388,89',
            'R$ 191,11',
            'R$ 668,89',
            'R$ 3.248,89',
            '162,44%',
          ],
          [
            'R$ 3.000,00',
            'R$ 583,33',
            'R$ 286,67',
            'R$ 1.003,33',
            'R$ 4.873,33',
            '162,44%',
          ],
          [
            'R$ 5.000,00',
            'R$ 972,22',
            'R$ 477,78',
            'R$ 1.672,22',
            'R$ 8.122,22',
            '162,44%',
          ],
          [
            'R$ 8.000,00',
            'R$ 1.555,56',
            'R$ 764,44',
            'R$ 2.675,56',
            'R$ 12.995,56',
            '162,44%',
          ],
        ],
      },
    },
  ],
  dsr: [
    {
      heading: 'Tabela de referência: DSR sobre 20 horas extras',
      paragraphs: [
        'O DSR (descanso semanal remunerado) sobre horas extras é calculado dividindo o valor das horas extras do mês pelos dias úteis e multiplicando pelos domingos e feriados. A tabela usa um mês com 26 dias úteis e 4 de repouso e 20 horas extras com adicional de 50%, em uma jornada de 220 horas mensais.',
        'Em meses com mais domingos e feriados, o DSR aumenta, e em meses com mais dias úteis, diminui. Por isso o valor do holerite pode variar de um mês para outro mesmo com as mesmas horas extras.',
      ],
      table: {
        caption: 'Horas extras e DSR em um mês (26 dias úteis e 4 de repouso)',
        columns: [
          'Salário',
          '20 horas extras a 50%',
          'DSR sobre as horas extras',
          'Total',
        ],
        rows: [
          ['R$ 2.000,00', 'R$ 272,73', 'R$ 41,96', 'R$ 314,69'],
          ['R$ 3.000,00', 'R$ 409,09', 'R$ 62,94', 'R$ 472,03'],
          ['R$ 5.000,00', 'R$ 681,82', 'R$ 104,90', 'R$ 786,71'],
        ],
      },
    },
  ],
  'banco-de-horas': [
    {
      heading: 'Tabela de referência: valor da hora por salário',
      paragraphs: [
        'O banco de horas só vira dinheiro quando o saldo não é compensado no prazo. Nesse caso, cada hora é paga com adicional. A tabela mostra o valor da hora normal, da hora com 50% e da hora com 100% para quatro salários, em uma jornada de 220 horas mensais.',
        'Para o saldo total, multiplique o número de horas pelo valor da hora com o adicional que a sua convenção define. Em muitas categorias, as horas de domingo e feriado são pagas com 100%.',
      ],
      table: {
        caption: 'Hora normal e horas extras com 50% e 100%',
        columns: ['Salário', 'Hora normal', 'Hora com 50%', 'Hora com 100%'],
        rows: [
          ['R$ 2.000,00', 'R$ 9,09', 'R$ 13,64', 'R$ 18,18'],
          ['R$ 3.000,00', 'R$ 13,64', 'R$ 20,45', 'R$ 27,27'],
          ['R$ 4.500,00', 'R$ 20,45', 'R$ 30,68', 'R$ 40,91'],
          ['R$ 6.000,00', 'R$ 27,27', 'R$ 40,91', 'R$ 54,55'],
        ],
      },
    },
  ],
  'vale-transporte': [
    {
      heading: 'Tabela de referência: desconto de 6% por salário',
      paragraphs: [
        'O desconto do empregado é o menor valor entre 6% do salário-base e o gasto real com transporte. A tabela usa um gasto de R$ 300,00 por mês para mostrar como o desconto e a parte da empresa mudam de acordo com o salário.',
        'Quem ganha mais paga mais, mas nunca mais que o gasto. Quem ganha menos paga menos, e a empresa cobre a diferença, inclusive quando o desconto de 6% fica abaixo do gasto.',
      ],
      table: {
        caption: 'Desconto e parte da empresa com gasto de R$ 300,00',
        columns: [
          'Salário-base',
          'Teto de 6%',
          'Desconto do empregado',
          'Parte da empresa',
        ],
        rows: [
          ['R$ 1.621,00', 'R$ 97,26', 'R$ 97,26', 'R$ 202,74'],
          ['R$ 2.000,00', 'R$ 120,00', 'R$ 120,00', 'R$ 180,00'],
          ['R$ 3.000,00', 'R$ 180,00', 'R$ 180,00', 'R$ 120,00'],
          ['R$ 4.500,00', 'R$ 270,00', 'R$ 270,00', 'R$ 30,00'],
        ],
      },
    },
  ],
  insalubridade: [
    {
      heading: 'Tabela de referência: adicional por grau e base',
      paragraphs: [
        'A tabela mostra o adicional mensal em cada grau para três bases. A primeira linha, o salário mínimo de R$ 1.621,00, é a base padrão. As outras duas valem para quem tem previsão de base maior na convenção coletiva ou no contrato.',
        'Se o seu holerite mostra um valor diferente do da tabela, confira a base usada e o grau do laudo. O adicional soma ao salário e entra no INSS e no Imposto de Renda do mês.',
      ],
      table: {
        caption: 'Insalubridade mensal por grau e base de cálculo',
        columns: [
          'Base de cálculo',
          'Grau mínimo (10%)',
          'Grau médio (20%)',
          'Grau máximo (40%)',
        ],
        rows: [
          ['R$ 1.621,00', 'R$ 162,10', 'R$ 324,20', 'R$ 648,40'],
          ['R$ 2.000,00', 'R$ 200,00', 'R$ 400,00', 'R$ 800,00'],
          ['R$ 3.000,00', 'R$ 300,00', 'R$ 600,00', 'R$ 1.200,00'],
        ],
      },
    },
  ],
  periculosidade: [
    {
      heading: 'Tabela de referência: adicional de 30% por salário',
      paragraphs: [
        'A periculosidade é de 30% sobre o salário-base. A tabela mostra o adicional, a remuneração com ele e o valor da hora extra com 50%, que deve ser calculada sobre o salário somado ao adicional, em jornada de 220 horas mensais.',
        'Quem faz hora extra e recebe periculosidade deve conferir se o holerite usa a remuneração com adicional como base. Se usar só o salário-base, o valor da hora extra sai menor do que o devido.',
      ],
      table: {
        caption: 'Periculosidade e hora extra com 50%',
        columns: [
          'Salário-base',
          'Adicional de 30%',
          'Remuneração com adicional',
          'Hora extra com 50%',
        ],
        rows: [
          ['R$ 2.000,00', 'R$ 600,00', 'R$ 2.600,00', 'R$ 17,73'],
          ['R$ 3.000,00', 'R$ 900,00', 'R$ 3.900,00', 'R$ 26,59'],
          ['R$ 4.500,00', 'R$ 1.350,00', 'R$ 5.850,00', 'R$ 39,89'],
          ['R$ 6.000,00', 'R$ 1.800,00', 'R$ 7.800,00', 'R$ 53,18'],
        ],
      },
    },
  ],
  'pensao-alimenticia': [
    {
      heading: 'Tabela de referência: pensão por percentual',
      paragraphs: [
        'A pensão não tem percentual padrão em lei. A tabela mostra quanto seria a pensão em três percentuais usados como referência (20%, 25% e 30%) sobre três rendas líquidas, para dar uma ideia do impacto no orçamento de quem paga e da renda de quem recebe.',
        'Confira sempre a base: o percentual pode incidir sobre o salário mínimo, a renda líquida ou outra base prevista na decisão. A mesma porcentagem sobre bases diferentes dá valores muito diferentes.',
      ],
      table: {
        caption: 'Pensão em três percentuais da renda líquida',
        columns: ['Renda líquida', '20%', '25%', '30%'],
        rows: [
          ['R$ 3.000,00', 'R$ 600,00', 'R$ 750,00', 'R$ 900,00'],
          ['R$ 5.000,00', 'R$ 1.000,00', 'R$ 1.250,00', 'R$ 1.500,00'],
          ['R$ 8.000,00', 'R$ 1.600,00', 'R$ 2.000,00', 'R$ 2.400,00'],
        ],
      },
    },
  ],
  'pro-labore': [
    {
      heading: 'Tabela de referência: pró-labore líquido',
      paragraphs: [
        'A tabela aplica o INSS de 11% sobre o pró-labore, limitado ao teto, e o IRRF pela tabela mensal de 2026, sem dependentes. O INSS tem valor mínimo calculado sobre o salário mínimo, e o desconto máximo ocorre no teto do INSS.',
        'Esses valores são retidos do sócio. Fora do Simples Nacional, a empresa ainda paga 20% de INSS patronal sobre o pró-labore, e esse custo não aparece no valor líquido do sócio.',
      ],
      table: {
        caption: 'Pró-labore líquido em 2026, sem dependentes',
        columns: ['Pró-labore', 'INSS de 11%', 'IRRF', 'Líquido'],
        rows: [
          ['R$ 1.621,00', 'R$ 178,31', 'R$ 0,00', 'R$ 1.442,69'],
          ['R$ 3.000,00', 'R$ 330,00', 'R$ 0,00', 'R$ 2.670,00'],
          ['R$ 6.000,00', 'R$ 660,00', 'R$ 380,03', 'R$ 4.959,97'],
          ['R$ 10.000,00', 'R$ 932,31', 'R$ 1.584,89', 'R$ 7.482,80'],
        ],
      },
    },
  ],
  'plr-ppr-liquido': [
    {
      heading: 'Tabela de referência: PLR líquida por valor',
      paragraphs: [
        'A PLR tem tabela própria de Imposto de Renda, com tributação exclusiva na fonte. A tabela mostra o imposto, o líquido e a alíquota efetiva para quatro valores. Até R$ 8.214,40 a PLR é isenta, e acima disso a alíquota cresce por faixa, com uma dedução em cada uma.',
        'A alíquota efetiva é sempre menor que a alíquota da faixa, porque a dedução reduz o imposto. A base é a soma da PLR recebida no ano pela mesma empresa, então pagamentos em duas parcelas somam para efeito da tabela.',
      ],
      table: {
        caption: 'PLR líquida por valor bruto no ano',
        columns: ['PLR bruta', 'Imposto', 'Líquido', 'Alíquota efetiva'],
        rows: [
          ['R$ 8.000,00', 'R$ 0,00', 'R$ 8.000,00', '0,00%'],
          ['R$ 12.000,00', 'R$ 439,75', 'R$ 11.560,25', '3,66%'],
          ['R$ 18.000,00', 'R$ 1.783,20', 'R$ 16.216,80', '9,91%'],
          ['R$ 30.000,00', 'R$ 5.083,20', 'R$ 24.916,80', '16,94%'],
        ],
      },
    },
  ],
  'inss-autonomo': [
    {
      heading: 'Tabela de referência: contribuição por plano',
      paragraphs: [
        'Os planos de 5% e 11% incidem sobre o salário mínimo e, por isso, têm valor fixo, qualquer que seja a renda. O plano de 20% incide sobre a renda declarada, entre o salário mínimo e o teto do INSS, e permite aposentadoria por tempo de contribuição e benefícios calculados sobre a média.',
        'O plano de 5% é para o MEI e o de 11% é o plano simplificado do contribuinte individual. Ambos têm restrições, como a exclusão da aposentadoria por tempo de contribuição, que só é possível com complementação.',
      ],
      table: {
        caption: 'Contribuição mensal ao INSS por plano e renda',
        columns: ['Renda', 'Plano de 5%', 'Plano de 11%', 'Plano de 20%'],
        rows: [
          ['R$ 1.621,00', 'R$ 81,05', 'R$ 178,31', 'R$ 324,20'],
          ['R$ 3.000,00', 'R$ 81,05', 'R$ 178,31', 'R$ 600,00'],
          ['R$ 5.000,00', 'R$ 81,05', 'R$ 178,31', 'R$ 1.000,00'],
          ['R$ 8.475,55', 'R$ 81,05', 'R$ 178,31', 'R$ 1.695,11'],
        ],
      },
    },
  ],
  'salario-maternidade': [
    {
      heading: 'Tabela de referência: total por salário',
      paragraphs: [
        'O salário-maternidade é o valor mensal multiplicado pelos meses de afastamento. A regra geral é de 120 dias (4 meses), e a Empresa Cidadã estende para 180 dias (6 meses). A tabela mostra os dois totais para quatro valores mensais.',
        'A MEI recebe um salário mínimo por mês, e a empregada CLT recebe a remuneração integral. Os valores são brutos e não incluem a média de comissões ou adicionais habituais.',
      ],
      table: {
        caption: 'Salário-maternidade em 4 e em 6 meses',
        columns: ['Valor mensal', '120 dias', '180 dias'],
        rows: [
          ['R$ 1.621,00', 'R$ 6.484,00', 'R$ 9.726,00'],
          ['R$ 2.000,00', 'R$ 8.000,00', 'R$ 12.000,00'],
          ['R$ 3.000,00', 'R$ 12.000,00', 'R$ 18.000,00'],
          ['R$ 5.000,00', 'R$ 20.000,00', 'R$ 30.000,00'],
        ],
      },
    },
  ],
  'auxilio-incapacidade': [
    {
      heading: 'Tabela de referência: valor do benefício',
      paragraphs: [
        'O benefício é um percentual da média das contribuições, com piso no salário mínimo e teto do INSS. A tabela mostra dois percentuais, 91% e 60%, para quatro médias. O percentual real depende do tipo do benefício e do tempo de contribuição.',
        'A concessão depende de perícia médica do INSS. Os valores da tabela servem apenas para estimar a ordem de grandeza e não garantem o direito nem o valor final.',
      ],
      table: {
        caption: 'Benefício em dois percentuais da média',
        columns: ['Média das contribuições', 'Com 91%', 'Com 60%'],
        rows: [
          ['R$ 2.000,00', 'R$ 1.820,00', 'R$ 1.621,00'],
          ['R$ 4.000,00', 'R$ 3.640,00', 'R$ 2.400,00'],
          ['R$ 6.000,00', 'R$ 5.460,00', 'R$ 3.600,00'],
          ['R$ 10.000,00', 'R$ 8.475,55', 'R$ 6.000,00'],
        ],
      },
    },
  ],
  'bolsa-familia': [
    {
      heading: 'Tabela de referência: valor por composição familiar',
      paragraphs: [
        'O Bolsa Família soma uma renda de cidadania por pessoa, um valor por criança até 6 anos e um valor por criança, adolescente e gestante com idade acima. Quando a soma fica abaixo do piso de R$ 691,00 por família, um complemento garante esse mínimo.',
        'A tabela mostra o valor para cinco composições familiares. Ela serve para entender o efeito do tamanho da família e da idade dos filhos, e não substitui a consulta no aplicativo do programa, que define o valor oficial.',
      ],
      table: {
        caption: 'Bolsa Família por composição familiar',
        columns: [
          'Pessoas',
          'Crianças até 6 anos',
          'Outros dependentes',
          'Complemento',
          'Total',
        ],
        rows: [
          ['1', '0', '0', 'R$ 527,00', 'R$ 691,00'],
          ['2', '0', '0', 'R$ 363,00', 'R$ 691,00'],
          ['3', '1', '0', 'R$ 26,00', 'R$ 691,00'],
          ['4', '1', '1', 'R$ 0,00', 'R$ 887,00'],
          ['5', '2', '1', 'R$ 0,00', 'R$ 1.224,00'],
        ],
      },
    },
  ],
  bpc: [
    {
      heading: 'Tabela de referência: renda familiar máxima',
      paragraphs: [
        'Para o BPC, a renda por pessoa da família deve ser de até um quarto do salário mínimo, ou R$ 405,25 em 2026. A renda familiar máxima, portanto, cresce com o número de pessoas da casa, como mostra a tabela.',
        'Na renda familiar entram os rendimentos de quem mora na mesma casa, com algumas exclusões previstas em lei. A análise oficial é feita no CadÚnico e no INSS, e o resultado pode ser diferente do da tabela.',
      ],
      table: {
        caption: 'Renda familiar máxima para o BPC em 2026',
        columns: [
          'Pessoas na família',
          'Renda familiar máxima',
          'Renda máxima por pessoa',
        ],
        rows: [
          ['1', 'R$ 405,25', 'R$ 405,25'],
          ['2', 'R$ 810,50', 'R$ 405,25'],
          ['3', 'R$ 1.215,75', 'R$ 405,25'],
          ['4', 'R$ 1.621,00', 'R$ 405,25'],
          ['5', 'R$ 2.026,25', 'R$ 405,25'],
        ],
      },
    },
  ],
  pis: [
    {
      heading: 'Tabela de referência: abono proporcional aos meses',
      paragraphs: [
        'O abono salarial é proporcional aos meses trabalhados no ano-base, e o máximo é de um salário mínimo. Cada mês com pelo menos 15 dias de trabalho conta como mês inteiro. A tabela mostra o valor para quatro períodos.',
        'Para ter direito, é preciso estar inscrito no PIS ou Pasep há pelo menos cinco anos, ter trabalhado com carteira assinada por 30 dias no ano-base e respeitar o limite de renda do ano-base.',
      ],
      table: {
        caption: 'Abono salarial por meses trabalhados',
        columns: ['Meses trabalhados', 'Valor do abono'],
        rows: [
          ['3 meses', 'R$ 405,25'],
          ['6 meses', 'R$ 810,50'],
          ['9 meses', 'R$ 1.215,75'],
          ['12 meses', 'R$ 1.621,00'],
        ],
      },
    },
  ],
  'das-limite-mei': [
    {
      heading: 'Tabela de referência: faturamento e limite do MEI',
      paragraphs: [
        'O limite do MEI é de R$ 81.000,00 por ano, o que dá R$ 6.750,00 por mês. A tabela mostra, para cinco faturamentos, quanto do limite foi usado, o excesso e a situação. Até 20% acima do limite (R$ 97.200,00), o MEI continua até o fim do ano e migra no seguinte.',
        'Acima de R$ 97.200,00, o desenquadramento retroage a 1º de janeiro. Acompanhe o faturamento mês a mês e planeje a migração antes de chegar ao limite.',
      ],
      table: {
        caption: 'Faturamento anual e situação do MEI',
        columns: [
          'Faturamento no ano',
          'Parte do limite usada',
          'Excesso',
          'Situação',
        ],
        rows: [
          ['R$ 30.000,00', '37,04%', 'R$ 0,00', 'Dentro do limite'],
          ['R$ 60.000,00', '74,07%', 'R$ 0,00', 'Dentro do limite'],
          ['R$ 81.000,00', '100,00%', 'R$ 0,00', 'Dentro do limite'],
          ['R$ 90.000,00', '111,11%', 'R$ 9.000,00', 'Excesso até 20%'],
          ['R$ 100.000,00', '123,46%', 'R$ 19.000,00', 'Acima de 20%'],
        ],
      },
    },
  ],
  'excesso-limite-mei': [
    {
      heading: 'Tabela de referência: o que cada faixa significa',
      paragraphs: [
        'A tabela mostra o excesso e a situação do MEI para cinco faturamentos. O excesso de até 20% sobre o limite, ou até R$ 97.200,00, não gera efeito retroativo. Acima disso, o MEI passa a ser tratado como microempresa desde o começo do ano.',
        'O limite proporcional vale para quem abriu a empresa durante o ano: R$ 6.750,00 multiplicados pelos meses de atividade. Confira sempre qual é o seu limite antes de comparar com o faturamento.',
      ],
      table: {
        caption: 'Faturamento anual e situação do MEI',
        columns: [
          'Faturamento no ano',
          'Parte do limite usada',
          'Excesso',
          'Situação',
        ],
        rows: [
          ['R$ 30.000,00', '37,04%', 'R$ 0,00', 'Dentro do limite'],
          ['R$ 60.000,00', '74,07%', 'R$ 0,00', 'Dentro do limite'],
          ['R$ 81.000,00', '100,00%', 'R$ 0,00', 'Dentro do limite'],
          ['R$ 90.000,00', '111,11%', 'R$ 9.000,00', 'Excesso até 20%'],
          ['R$ 100.000,00', '123,46%', 'R$ 19.000,00', 'Acima de 20%'],
        ],
      },
    },
  ],
  'das-mei-atraso': [
    {
      heading: 'Tabela de referência: multa por dias de atraso',
      paragraphs: [
        'A multa do DAS em atraso é de 0,33% por dia, limitada a 20% do valor. A tabela mostra o efeito em um DAS de R$ 100,00 para facilitar a conta: multiplique pelo valor real da sua guia. Depois da multa, entram os juros pela Selic acumulada.',
        'A multa chega ao teto de 20% com cerca de 61 dias de atraso. Depois disso, só os juros continuam crescendo. Por isso regularizar cedo evita o maior custo, e pagar com atraso de poucos dias custa pouco.',
      ],
      table: {
        caption: 'Multa sobre um DAS de R$ 100,00',
        columns: [
          'Dias de atraso',
          'Multa em %',
          'Multa em reais',
          'Valor com multa, sem juros',
        ],
        rows: [
          ['10 dias', '3,30%', 'R$ 3,30', 'R$ 103,30'],
          ['30 dias', '9,90%', 'R$ 9,90', 'R$ 109,90'],
          ['60 dias', '19,80%', 'R$ 19,80', 'R$ 119,80'],
          ['90 dias', '20,00%', 'R$ 20,00', 'R$ 120,00'],
          ['120 dias', '20,00%', 'R$ 20,00', 'R$ 120,00'],
        ],
      },
    },
  ],
  'fator-r': [
    {
      heading: 'Tabela de referência: folha mínima para o Anexo III',
      paragraphs: [
        'O Fator R é a folha de pagamento dos últimos 12 meses dividida pela receita bruta dos últimos 12 meses. A partir de 28%, serviços sujeitos ao Fator R pagam pelo Anexo III, que é mais barato. A tabela mostra a folha mensal mínima, em média, para atingir 28% em quatro níveis de receita mensal.',
        'A folha inclui salários, pró-labore, encargos e FGTS pagos no período. Aumentar o pró-labore para atingir os 28% pode compensar se a economia de imposto for maior que o custo extra de INSS.',
      ],
      table: {
        caption: 'Folha mínima mensal para atingir 28% de Fator R',
        columns: [
          'Receita mensal',
          'Folha mensal mínima (28%)',
          'Folha em 12 meses',
        ],
        rows: [
          ['R$ 10.000,00', 'R$ 2.800,00', 'R$ 33.600,00'],
          ['R$ 20.000,00', 'R$ 5.600,00', 'R$ 67.200,00'],
          ['R$ 40.000,00', 'R$ 11.200,00', 'R$ 134.400,00'],
          ['R$ 80.000,00', 'R$ 22.400,00', 'R$ 268.800,00'],
        ],
      },
    },
  ],
  'simples-nacional': [
    {
      heading: 'Tabela de referência: alíquota efetiva por anexo',
      paragraphs: [
        'A alíquota efetiva do Simples Nacional é (receita de 12 meses vezes a alíquota nominal menos a parcela a deduzir) dividida pela receita de 12 meses. Ela é menor que a nominal e cresce de forma gradual. A tabela compara os Anexos III e V para quatro níveis de receita, com receita mensal igual a um doze avos da anual.',
        'A diferença entre os anexos é grande: para a mesma receita, o Anexo V cobra bem mais que o Anexo III. É por isso que o Fator R, de 28%, importa para quem presta serviços.',
      ],
      table: {
        caption: 'Alíquota efetiva e DAS mensal por anexo e receita',
        columns: [
          'Anexo',
          'Receita de 12 meses',
          'Alíquota nominal',
          'Alíquota efetiva',
          'DAS mensal',
        ],
        rows: [
          ['Anexo III', 'R$ 120.000,00', '6,00%', '6,00%', 'R$ 600,00'],
          ['Anexo III', 'R$ 240.000,00', '11,20%', '7,30%', 'R$ 1.460,00'],
          ['Anexo III', 'R$ 480.000,00', '13,50%', '9,83%', 'R$ 3.930,00'],
          ['Anexo III', 'R$ 1.200.000,00', '16,00%', '13,03%', 'R$ 13.030,00'],
          ['Anexo V', 'R$ 120.000,00', '15,50%', '15,50%', 'R$ 1.550,00'],
          ['Anexo V', 'R$ 240.000,00', '18,00%', '16,13%', 'R$ 3.225,00'],
          ['Anexo V', 'R$ 480.000,00', '19,50%', '17,44%', 'R$ 6.975,00'],
          ['Anexo V', 'R$ 1.200.000,00', '20,50%', '19,08%', 'R$ 19.075,00'],
        ],
      },
    },
  ],
  'financiamento-sac-price': [
    {
      heading: 'Tabela de referência: SAC e Price em R$ 200.000',
      paragraphs: [
        'A tabela compara os dois sistemas para um financiamento de R$ 200.000,00 a 0,95% ao mês (cerca de 12% ao ano), em três prazos. No SAC a parcela começa maior e cai todo mês. Na Price a parcela é fixa, começa menor e tem juros totais maiores.',
        'Quanto maior o prazo, maior a diferença de juros. Em 360 meses, a economia de juros do SAC é grande, mas a parcela inicial pesa mais no orçamento. A escolha deve considerar a renda atual e a capacidade de pagar a parcela mais alta no início.',
      ],
      table: {
        caption: 'R$ 200.000 a 0,95% ao mês',
        columns: [
          'Prazo',
          '1ª parcela SAC',
          'Última parcela SAC',
          'Parcela Price',
          'Juros no SAC',
          'Juros na Price',
        ],
        rows: [
          [
            '120 meses',
            'R$ 3.566,67',
            'R$ 1.682,50',
            'R$ 2.800,48',
            'R$ 114.950,00',
            'R$ 136.057,46',
          ],
          [
            '240 meses',
            'R$ 2.733,33',
            'R$ 841,25',
            'R$ 2.119,10',
            'R$ 228.950,00',
            'R$ 308.582,85',
          ],
          [
            '360 meses',
            'R$ 2.455,56',
            'R$ 560,83',
            'R$ 1.965,34',
            'R$ 342.950,00',
            'R$ 507.521,40',
          ],
        ],
      },
    },
  ],
  'simulador-de-emprestimo': [
    {
      heading: 'Tabela de referência: R$ 10.000 em três taxas',
      paragraphs: [
        'A tabela mostra a parcela, o total pago e os juros de um empréstimo de R$ 10.000,00 em três taxas mensais e três prazos, pela tabela Price. A mesma dívida pode custar poucas centenas de reais a mais ou milhares, dependendo da taxa e do prazo.',
        'Alongar o prazo reduz a parcela, mas aumenta os juros totais. Antes de contratar, peça o Custo Efetivo Total (CET), que inclui tarifas e seguros, e compare propostas pelo CET e não pela taxa de juros.',
      ],
      table: {
        caption: 'Empréstimo de R$ 10.000 na tabela Price',
        columns: ['Taxa mensal', 'Prazo', 'Parcela', 'Total pago', 'Juros'],
        rows: [
          ['2,00%', '12 meses', 'R$ 945,60', 'R$ 11.347,15', 'R$ 1.347,15'],
          ['2,00%', '24 meses', 'R$ 528,71', 'R$ 12.689,06', 'R$ 2.689,06'],
          ['2,00%', '36 meses', 'R$ 392,33', 'R$ 14.123,83', 'R$ 4.123,83'],
          ['3,50%', '12 meses', 'R$ 1.034,84', 'R$ 12.418,07', 'R$ 2.418,07'],
          ['3,50%', '24 meses', 'R$ 622,73', 'R$ 14.945,48', 'R$ 4.945,48'],
          ['3,50%', '36 meses', 'R$ 492,84', 'R$ 17.742,30', 'R$ 7.742,30'],
          ['5,00%', '12 meses', 'R$ 1.128,25', 'R$ 13.539,05', 'R$ 3.539,05'],
          ['5,00%', '24 meses', 'R$ 724,71', 'R$ 17.393,02', 'R$ 7.393,02'],
          ['5,00%', '36 meses', 'R$ 604,34', 'R$ 21.756,40', 'R$ 11.756,40'],
        ],
      },
    },
  ],
  'amortizacao-antecipada': [
    {
      heading: 'Tabela de referência: antecipar parte do saldo',
      paragraphs: [
        'A tabela considera um saldo de R$ 150.000,00 a 0,95% ao mês em 240 meses e três valores de antecipação. Há duas formas de usar o dinheiro: manter a parcela e encurtar o prazo, ou reduzir a parcela e manter o prazo. A primeira costuma economizar mais juros.',
        'Antecipar é mais vantajoso no começo do financiamento, quando a maior parte da parcela é juros. Avalie também a reserva de emergência antes de usar o dinheiro, e a taxa de outros investimentos.',
      ],
      table: {
        caption: 'Antecipação em um saldo de R$ 150.000 em 240 meses',
        columns: [
          'Valor antecipado',
          'Parcela atual',
          'Prazo restante mantendo a parcela',
          'Juros evitados mantendo a parcela',
          'Juros evitados reduzindo a parcela',
        ],
        rows: [
          [
            'R$ 10.000,00',
            'R$ 1.589,32',
            '192 meses',
            'R$ 66.690,23',
            'R$ 15.429,14',
          ],
          [
            'R$ 20.000,00',
            'R$ 1.589,32',
            '159 meses',
            'R$ 109.157,32',
            'R$ 30.858,29',
          ],
          [
            'R$ 40.000,00',
            'R$ 1.589,32',
            '114 meses',
            'R$ 161.324,49',
            'R$ 61.716,57',
          ],
        ],
      },
    },
  ],
  'cdb-x-poupanca': [
    {
      heading: 'Tabela de referência: R$ 10.000 na poupança e no CDB',
      paragraphs: [
        'A poupança rende 0,5% ao mês mais a TR quando a Selic está acima de 8,5% ao ano, o que dá cerca de 6,17% ao ano com a TR perto de zero, sem Imposto de Renda. O CDB de 100% do CDI, com CDI de 13,65% ao ano, rende mais mesmo depois do imposto.',
        'A tabela mostra o rendimento líquido de R$ 10.000,00 em três prazos. Os valores dependem do CDI do período e da TR, e servem para comparar a ordem de grandeza. Se a Selic cair, a diferença diminui.',
      ],
      table: {
        caption: 'R$ 10.000 na poupança e em CDB de 100% do CDI',
        columns: [
          'Prazo',
          'Poupança (líquido)',
          'CDB (líquido)',
          'Vantagem do CDB',
        ],
        rows: [
          ['6 meses', 'R$ 303,78', 'R$ 528,54', 'R$ 224,77'],
          ['12 meses', 'R$ 616,78', 'R$ 1.126,13', 'R$ 509,35'],
          ['24 meses', 'R$ 1.271,60', 'R$ 2.478,87', 'R$ 1.207,28'],
        ],
      },
    },
  ],
  cdi: [
    {
      heading: 'Tabela de referência: rendimento líquido em 12 meses',
      paragraphs: [
        'O rendimento de um CDB acompanha o CDI. A tabela mostra o líquido de R$ 10.000,00 em 12 meses, a 100% e a 110% do CDI, para quatro níveis de CDI, depois do Imposto de Renda de 17,5%.',
        'Cada ponto percentual a mais no CDI aumenta o rendimento de forma proporcional. Quando a Selic muda, o CDI muda junto, e o rendimento do pós-fixado acompanha a variação.',
      ],
      table: {
        caption: 'R$ 10.000 por 12 meses',
        columns: ['CDI ao ano', 'CDB a 100% do CDI', 'CDB a 110% do CDI'],
        rows: [
          ['10,00%', 'R$ 825,00', 'R$ 907,50'],
          ['12,00%', 'R$ 990,00', 'R$ 1.089,00'],
          ['13,65%', 'R$ 1.126,13', 'R$ 1.238,74'],
          ['15,00%', 'R$ 1.237,50', 'R$ 1.361,25'],
        ],
      },
    },
  ],
  'lci-lca': [
    {
      heading: 'Tabela de referência: LCI de 90% do CDI equivale a qual CDB',
      paragraphs: [
        'LCI e LCA são isentas de Imposto de Renda para pessoa física, e o CDB paga imposto pela tabela regressiva. Para comparar, a tabela mostra qual percentual de CDB rende o mesmo que uma LCI ou LCA de 90% do CDI em cada prazo. Se o CDB oferecido pagar mais que esse percentual, ele vence.',
        'O percentual de equivalência é 90% dividido por 1 menos a alíquota de imposto do prazo. Quanto maior o prazo, menor a alíquota, e menor a vantagem da isenção. Verifique também a liquidez, pois muitas LCI e LCA têm prazo mínimo de carência.',
      ],
      table: {
        caption: 'CDB equivalente a uma LCI ou LCA de 90% do CDI',
        columns: ['Prazo', 'IR do CDB', 'CDB equivalente'],
        rows: [
          ['6 meses', '20,00%', '112,50% do CDI'],
          ['12 meses', '17,50%', '109,09% do CDI'],
          ['24 meses', '15,00%', '105,88% do CDI'],
        ],
      },
    },
  ],
  'tesouro-selic': [
    {
      heading: 'Tabela de referência: R$ 10.000 em 12 meses',
      paragraphs: [
        'O Tesouro Selic rende aproximadamente a taxa Selic, com Imposto de Renda regressivo, que é de 17,5% em 12 meses. A tabela mostra o rendimento bruto, o imposto e o líquido de R$ 10.000,00 em 12 meses para quatro níveis de Selic.',
        'O cálculo é uma simulação com taxa constante. Na prática a Selic muda, o imposto incide só sobre o rendimento, e podem existir taxas de custódia. Confira as condições na plataforma onde você investe.',
      ],
      table: {
        caption: 'Tesouro Selic em 12 meses por nível de Selic',
        columns: ['Selic ao ano', 'Rendimento bruto', 'Imposto', 'Líquido'],
        rows: [
          ['10,00%', 'R$ 1.000,00', 'R$ 175,00', 'R$ 825,00'],
          ['12,00%', 'R$ 1.200,00', 'R$ 210,00', 'R$ 990,00'],
          ['13,75%', 'R$ 1.375,00', 'R$ 240,62', 'R$ 1.134,37'],
          ['15,00%', 'R$ 1.500,00', 'R$ 262,50', 'R$ 1.237,50'],
        ],
      },
    },
  ],
  'juros-simples': [
    {
      heading: 'Tabela de referência: R$ 1.000 em juros simples',
      paragraphs: [
        'Nos juros simples, o juro de cada mês é o mesmo, porque incide só sobre o valor inicial. A tabela mostra os juros e o montante de R$ 1.000,00 em três taxas mensais e três prazos. Os juros crescem em linha reta: dobrar o prazo dobra os juros.',
        'Os juros simples são usados em alguns contratos curtos e em multas por atraso. Em empréstimos e financiamentos, o mais comum é o juro composto, em que os juros crescem mais depressa com o tempo.',
      ],
      table: {
        caption: 'R$ 1.000 em juros simples',
        columns: ['Taxa mensal', 'Prazo', 'Juros', 'Montante'],
        rows: [
          ['1,00%', '12 meses', 'R$ 120,00', 'R$ 1.120,00'],
          ['1,00%', '24 meses', 'R$ 240,00', 'R$ 1.240,00'],
          ['1,00%', '60 meses', 'R$ 600,00', 'R$ 1.600,00'],
          ['2,00%', '12 meses', 'R$ 240,00', 'R$ 1.240,00'],
          ['2,00%', '24 meses', 'R$ 480,00', 'R$ 1.480,00'],
          ['2,00%', '60 meses', 'R$ 1.200,00', 'R$ 2.200,00'],
          ['3,00%', '12 meses', 'R$ 360,00', 'R$ 1.360,00'],
          ['3,00%', '24 meses', 'R$ 720,00', 'R$ 1.720,00'],
          ['3,00%', '60 meses', 'R$ 1.800,00', 'R$ 2.800,00'],
        ],
      },
    },
  ],
  'conversao-taxa-mensal-anual': [
    {
      heading: 'Tabela de referência: de mensal para anual',
      paragraphs: [
        'Nos juros compostos, a taxa anual equivalente à mensal é (1 mais a taxa mensal) elevado a 12, menos 1. A tabela mostra o resultado correto ao lado da soma simples (taxa vezes 12), que é a conta errada mais comum. A diferença cresce com a taxa.',
      ],
      table: {
        caption: 'Taxa mensal e taxa anual equivalente',
        columns: ['Taxa mensal', 'Anual equivalente', 'Soma simples (errada)'],
        rows: [
          ['0,50%', '6,17%', '6,00%'],
          ['0,80%', '10,03%', '9,60%'],
          ['1,00%', '12,68%', '12,00%'],
          ['1,50%', '19,56%', '18,00%'],
          ['2,00%', '26,82%', '24,00%'],
        ],
      },
    },
    {
      heading: 'Tabela de referência: de anual para mensal',
      paragraphs: [
        'O caminho inverso usa a raiz 12 da taxa anual: a taxa mensal equivalente é (1 mais a taxa anual) elevado a 1/12, menos 1. Dividir a taxa anual por 12 dá um valor maior que o correto.',
      ],
      table: {
        caption: 'Taxa anual e taxa mensal equivalente',
        columns: [
          'Taxa anual',
          'Mensal equivalente',
          'Divisão por 12 (errada)',
        ],
        rows: [
          ['6,00%', '0,487%', '0,50%'],
          ['10,00%', '0,797%', '0,83%'],
          ['12,00%', '0,949%', '1,00%'],
          ['15,00%', '1,171%', '1,25%'],
          ['20,00%', '1,531%', '1,67%'],
        ],
      },
    },
  ],
  porcentagem: [
    {
      heading: 'Tabela de referência: aumento e desconto não se cancelam',
      paragraphs: [
        'Aumentar um valor em 10% e depois dar 10% de desconto não devolve o valor original: o desconto incide sobre um valor maior. A tabela mostra o desconto necessário para voltar ao valor original depois de um aumento e o aumento necessário para voltar depois de um desconto.',
        'Esse efeito explica por que uma queda de 50% exige alta de 100% para recuperar o valor. Vale para preços, investimentos e salários.',
      ],
      table: {
        caption: 'Quanto é preciso para voltar ao valor original',
        columns: [
          'Variação',
          'Desconto para desfazer o aumento',
          'Aumento para desfazer o desconto',
        ],
        rows: [
          ['5,00%', '4,76%', '5,26%'],
          ['10,00%', '9,09%', '11,11%'],
          ['20,00%', '16,67%', '25,00%'],
          ['30,00%', '23,08%', '42,86%'],
          ['50,00%', '33,33%', '100,00%'],
        ],
      },
    },
  ],
  'contador-de-dias': [
    {
      heading: 'Tabela de referência: prazos contados a partir de 12/10/2026',
      paragraphs: [
        'Para conferir a lógica da calculadora, a tabela mostra onde terminam prazos comuns contados em dias corridos a partir de segunda-feira, 12/10/2026, sem contar o dia inicial. Veja o dia da semana do último dia, porque alguns prazos legais passam para o primeiro dia útil quando caem em sábado ou domingo.',
      ],
      table: {
        caption: 'Prazos em dias corridos a partir de 12/10/2026',
        columns: ['Prazo', 'Último dia', 'Dia da semana'],
        rows: [
          ['7 dias', '19/10/2026', 'segunda-feira'],
          ['15 dias', '27/10/2026', 'terça-feira'],
          ['30 dias', '11/11/2026', 'quarta-feira'],
          ['60 dias', '11/12/2026', 'sexta-feira'],
          ['90 dias', '10/01/2027', 'domingo'],
        ],
      },
    },
  ],
  ipva: [
    {
      heading: 'Tabela de referência: IPVA por valor venal e alíquota',
      paragraphs: [
        'O IPVA é o valor venal vezes a alíquota do estado, que costuma ficar entre 1% e 4% e varia com o tipo de veículo. A tabela mostra o valor anual cheio para quatro valores venais e quatro alíquotas. No primeiro ano de um veículo novo, muitos estados cobram proporcional aos meses restantes.',
        'Consulte a Secretaria da Fazenda do seu estado para a alíquota exata, o calendário, os descontos de cota única e as isenções.',
      ],
      table: {
        caption: 'IPVA anual por valor venal e alíquota',
        columns: ['Valor venal', '1,5%', '2%', '3%', '4%'],
        rows: [
          [
            'R$ 30.000,00',
            'R$ 450,00',
            'R$ 600,00',
            'R$ 900,00',
            'R$ 1.200,00',
          ],
          [
            'R$ 60.000,00',
            'R$ 900,00',
            'R$ 1.200,00',
            'R$ 1.800,00',
            'R$ 2.400,00',
          ],
          [
            'R$ 90.000,00',
            'R$ 1.350,00',
            'R$ 1.800,00',
            'R$ 2.700,00',
            'R$ 3.600,00',
          ],
          [
            'R$ 120.000,00',
            'R$ 1.800,00',
            'R$ 2.400,00',
            'R$ 3.600,00',
            'R$ 4.800,00',
          ],
        ],
      },
    },
  ],
};
