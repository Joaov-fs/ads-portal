import type { CalculatorEditorialMap } from './types';

export const editorialFinancas: CalculatorEditorialMap = {
  'contador-de-dias': {
    example: {
      paragraphs: [
        'Imagine um curso que começa em 10/03/2026 e um evento marcado para 25/12/2026. Ao informar essas duas datas, a calculadora devolve 290 dias corridos, sem contar o dia 10/03, que é o ponto de partida. Dentro desse intervalo há 208 dias úteis de segunda a sexta, já que sábados e domingos ficam de fora.',
        'A mesma diferença também aparece em outras unidades: 41 semanas e 3 dias, ou 0 anos, 9 meses e 15 dias. Cada formato serve a um uso. Semanas ajudam a montar cronogramas de estudo ou de obra, e meses e dias são mais naturais para prazos de contrato.',
        'Na leitura, lembre que os 208 dias úteis não descontam feriados. Se houver feriados nacionais ou locais no período, o número real de dias de trabalho será menor.',
      ],
      table: {
        caption: 'Entre 10/03/2026 e 25/12/2026',
        columns: ['Medida', 'Valor'],
        rows: [
          ['Dias corridos', '290'],
          ['Dias úteis (segunda a sexta, sem feriados)', '208'],
          ['Semanas e dias', '41 semanas e 3 dias'],
          ['Anos, meses e dias', '0 anos, 9 meses e 15 dias'],
        ],
      },
    },
    factors: [
      'O principal fator é a regra de contagem. Esta calculadora não inclui o dia inicial, então o intervalo entre 10/03 e 11/03 vale 1 dia. Se o seu caso exige contar os dois extremos, some 1 ao resultado.',
      'O segundo fator são os feriados: a contagem de dias úteis considera apenas sábado e domingo como folga. Em prazos de processo civil, por exemplo, só contam os dias úteis e o primeiro dia é excluído (CPC, arts. 219 e 224), por isso um prazo judicial costuma terminar em data diferente da diferença simples entre calendários.',
    ],
    mistakes: [
      'O erro mais comum é usar o resultado em dias corridos para um prazo que a lei ou o contrato define em dias úteis, ou o contrário. Antes de confiar na data final, leia a cláusula ou o documento e veja se ele fala em dias corridos, dias úteis ou meses, e se o dia do início entra na conta. Também confira se a data de início é a da assinatura, da notificação ou da publicação, porque cada uma muda o vencimento.',
    ],
    faq: [
      {
        question: 'Por que a calculadora não conta o dia inicial?',
        answer:
          'Ela mede a distância entre as datas, como quem conta quantas noites passam entre uma data e outra. Por isso 10/03 a 11/03 resulta em 1 dia. Se o seu prazo inclui o primeiro dia, acrescente 1.',
      },
      {
        question: 'Os dias úteis já descontam feriados?',
        answer:
          'Não. O cálculo exclui apenas sábados e domingos. Feriados nacionais, estaduais e municipais precisam ser subtraídos manualmente.',
      },
      {
        question: 'Posso usar para saber o vencimento de um prazo de processo?',
        answer:
          'Só como referência inicial. No processo civil a contagem usa dias úteis e exclui o primeiro dia (CPC, arts. 219 e 224), além de suspensões e feriados forenses. Para prazo judicial, confirme com o advogado ou com o tribunal.',
      },
    ],
  },

  porcentagem: {
    example: {
      paragraphs: [
        'Uma loja anuncia um produto de R$ 850,00 e você quer saber quanto vale 12% desse valor. Digitando R$ 850,00 como valor-base e 12 como porcentagem, a calculadora responde R$ 102,00. É a parte que representa os 12%.',
        'A partir daí, os dois usos mais comuns saem direto da tabela. Com acréscimo de 12%, o preço vai a R$ 952,00. Com desconto de 12%, cai para R$ 748,00.',
        'Há um detalhe que surpreende: aumentar 12% e depois dar 12% de desconto não devolve os R$ 850,00. O resultado é R$ 837,76, porque o desconto incide sobre R$ 952,00, uma base maior. Percentuais seguidos nunca se cancelam quando a base muda.',
      ],
      table: {
        caption: 'Porcentagem de 12% sobre R$ 850,00',
        columns: ['Cálculo', 'Resultado'],
        rows: [
          ['12,00% de R$ 850,00', 'R$ 102,00'],
          ['R$ 850,00 com acréscimo de 12,00%', 'R$ 952,00'],
          ['R$ 850,00 com desconto de 12,00%', 'R$ 748,00'],
        ],
      },
    },
    factors: [
      'O resultado depende de duas coisas: o valor-base e a base em que o percentual incide. Os mesmos 12% valem R$ 102,00 sobre R$ 850,00, mas R$ 114,24 sobre R$ 952,00. Em promoções com mais de um desconto, cada percentual age sobre o preço já reduzido pelo anterior, então dois descontos de 10% somam 19%, não 20%.',
      'Também importa se o percentual é sobre o preço de venda ou sobre o custo. Margem e acréscimo sobre custo são medidas diferentes, e confundi-las muda o preço final.',
    ],
    mistakes: [
      'Quem preenche costuma somar percentuais de etapas diferentes, como dois aumentos ou um aumento e um desconto, e tratar o total como se fosse uma única taxa. Cada etapa deve ser calculada sobre o valor resultante da anterior. Outro deslize é digitar 0,12 em vez de 12 no campo de porcentagem, o que reduz o resultado a um centésimo do esperado. Confira também se a etiqueta já inclui o desconto antes de aplicá-lo de novo.',
    ],
    faq: [
      {
        question: 'Como descobrir quanto por cento um valor é de outro?',
        answer:
          'Divida a parte pelo total e multiplique por 100. Se R$ 102,00 é a parte e R$ 850,00 o total, 102 dividido por 850 dá 0,12, ou seja, 12%.',
      },
      {
        question:
          'Por que aumentar 12% e depois descontar 12% não volta ao valor original?',
        answer:
          'Porque o desconto incide sobre o valor já aumentado. No exemplo, R$ 850,00 viram R$ 952,00 e, ao descontar 12% dessa nova base, o resultado é R$ 837,76.',
      },
      {
        question: 'O que digito no campo de porcentagem para 5%?',
        answer:
          'Digite 5, não 0,05. O campo já espera o número em percentual, e a calculadora faz a divisão por 100.',
      },
    ],
  },

  cdi: {
    example: {
      paragraphs: [
        'Considere R$ 25.000,00 aplicados em um produto que paga 110% do CDI, usando como exemplo um CDI de 13,65% ao ano, por 18 meses. A calculadora aplica a taxa efetiva ao valor aplicado e devolve um rendimento bruto de R$ 5.836,97.',
        'Esse número ainda não é o que chega à conta. Para o prazo de 18 meses, a calculadora usa a faixa de 17,5% de Imposto de Renda da tabela regressiva, o que dá R$ 1.021,47 de imposto. O rendimento líquido fica em R$ 4.815,50.',
        'A leitura é simples: o CDI de 13,65% é um valor de exemplo, e a projeção supõe que ele fique constante o ano inteiro. Se o CDI cair ou subir, o resultado muda na mesma direção.',
      ],
      table: {
        caption:
          'R$ 25.000,00 a 110% do CDI (taxa de exemplo de 13,65% ao ano) em 18 meses',
        columns: ['Item', 'Valor'],
        rows: [
          ['Rendimento bruto', 'R$ 5.836,97'],
          ['Imposto de Renda (17,5%)', 'R$ 1.021,47'],
          ['Rendimento líquido', 'R$ 4.815,50'],
        ],
      },
    },
    factors: [
      'Três variáveis movem o resultado: a taxa anual do CDI, o percentual do CDI que o produto paga e o prazo. Um CDB de 110% do CDI rende mais que um de 100% sobre o mesmo CDI, mas só vale a comparação se o prazo e a liquidez forem parecidos.',
      'O CDI acompanha a Selic e muda ao longo do tempo, então qualquer projeção é um cenário, não uma promessa. O prazo também define a alíquota: quanto mais longo, menor o percentual de Imposto de Renda na tabela regressiva.',
    ],
    mistakes: [
      'Um erro frequente é colocar 110 no campo da taxa do CDI quando o certo é preencher a taxa anual do CDI no primeiro campo e o percentual contratado no segundo. Outro é tratar o valor bruto como lucro final, esquecendo o Imposto de Renda. Ao olhar a oferta, confira se o percentual vale para o prazo inteiro, se há carência para resgate e se o produto é de fato indexado ao CDI, e não a uma taxa prefixada.',
    ],
    faq: [
      {
        question: 'O que significa render 100% do CDI?',
        answer:
          'Significa que o investimento paga uma taxa igual à do CDI no período. Em 110% do CDI, ele paga 1,1 vez essa taxa.',
      },
      {
        question:
          'Esta calculadora considera o Imposto de Renda no resultado principal?',
        answer:
          'O resultado principal é o rendimento bruto. O Imposto de Renda aparece à parte, na faixa da tabela regressiva correspondente ao prazo, e o líquido é mostrado ao lado.',
      },
      {
        question: 'Posso usar a mesma taxa de CDI para vários anos?',
        answer:
          'Pode, mas é uma simplificação. O CDI varia com a Selic, então o cálculo serve para comparar cenários, e não para prever o valor final.',
      },
    ],
  },

  'financiamento-sac-price': {
    example: {
      paragraphs: [
        'Vamos comparar um financiamento de R$ 250.000,00, com taxa de 0,9% ao mês, em 360 meses. Na Price, todas as parcelas são iguais: R$ 2.343,10 do início ao fim. No SAC, a primeira parcela é R$ 2.944,44 e vai caindo até R$ 700,69 na última.',
        'A primeira parcela do SAC é R$ 601,34 maior que a da Price, o que pesa no orçamento do começo. Em compensação, o total de juros cai de R$ 593.517,71 na Price para R$ 406.125,00 no SAC, uma economia de R$ 187.392,71.',
        'Em termos de valor total pago, são R$ 843.517,71 na Price contra R$ 656.125,00 no SAC. A escolha, portanto, passa por saber se a renda comporta a parcela inicial mais alta em troca de pagar menos juros.',
      ],
      table: {
        caption: 'R$ 250.000,00, 0,9% ao mês, 360 meses',
        columns: ['Comparativo', 'Price', 'SAC'],
        rows: [
          ['Primeira parcela', 'R$ 2.343,10', 'R$ 2.944,44'],
          ['Última parcela', 'R$ 2.343,10', 'R$ 700,69'],
          ['Total de juros', 'R$ 593.517,71', 'R$ 406.125,00'],
          ['Total pago', 'R$ 843.517,71', 'R$ 656.125,00'],
        ],
      },
    },
    factors: [
      'O prazo é o fator que mais alarga a diferença entre os dois sistemas. Em 360 meses, a Price passa muitos anos pagando principalmente juros, enquanto o SAC amortiza o mesmo valor todo mês e reduz o saldo mais depressa. Em prazos curtos, a diferença no total de juros encolhe bastante.',
      'A taxa mensal também pesa: quanto maior, maior a distância entre as duas tabelas. Já seguros, tarifas e correção pela TR não entram nesta comparação e aumentam o custo real, o que o CET do contrato revela.',
    ],
    mistakes: [
      'Muita gente compara apenas a primeira parcela e escolhe a menor sem olhar o total de juros, ou faz o oposto e escolhe o SAC sem checar se a renda suporta a parcela inicial. Outro descuido é informar a taxa anual no campo da taxa mensal. No contrato, confira o sistema de amortização, o CET, a taxa efetiva mensal e anual, os seguros obrigatórios e o indexador do saldo devedor.',
    ],
    faq: [
      {
        question: 'Qual sistema tem a parcela inicial menor?',
        answer:
          'Neste exemplo, a Price: R$ 2.343,10 contra R$ 2.944,44 do SAC. Em compensação, a Price paga mais juros no total.',
      },
      {
        question: 'Por que as parcelas do SAC diminuem?',
        answer:
          'Porque a amortização é a mesma todo mês e os juros incidem sobre um saldo que encolhe. Como os juros caem, a parcela cai junto.',
      },
      {
        question: 'A calculadora inclui seguros e correção pela TR?',
        answer:
          'Não. Ela usa apenas valor, taxa mensal e prazo. Seguros, tarifas e TR elevam o custo, e o CET do contrato é maior que a taxa informada.',
      },
    ],
  },

  'reajuste-aluguel': {
    example: {
      paragraphs: [
        'Um aluguel de R$ 1.800,00 chega ao aniversário do contrato, que prevê reajuste pela variação do IPCA. Usando como exemplo uma variação de 4,22% em 12 meses (valor de exemplo, não a taxa de hoje; confira o índice no IBGE), a calculadora indica um novo aluguel estimado de R$ 1.875,96.',
        'Isso significa R$ 75,96 a mais por mês. Em um ano, o acréscimo soma cerca de R$ 911,52 em relação ao valor antigo.',
        'Para ver o efeito da escolha do índice, basta refazer a conta com outra variação. Com 3,35%, que é a variação de IGP-M usada como referência no campo da calculadora, o aumento seria de R$ 60,30 sobre os mesmos R$ 1.800,00. A diferença entre os dois índices, portanto, é de R$ 15,66 por mês.',
      ],
      table: {
        caption: 'Aluguel de R$ 1.800,00 com variação de 4,22% (exemplo)',
        columns: ['Item', 'Valor'],
        rows: [
          ['Aluguel atual', 'R$ 1.800,00'],
          ['Índice aplicado', '4,22%'],
          ['Aumento mensal', 'R$ 75,96'],
          ['Novo aluguel estimado', 'R$ 1.875,96'],
        ],
      },
    },
    factors: [
      'O que decide o resultado é o índice escolhido no contrato e o período de apuração. IGP-M e IPCA medem coisas diferentes e raramente acumulam o mesmo valor em 12 meses, de modo que o mesmo aluguel pode subir bem mais com um do que com o outro.',
      'O mês de início e o de fim da apuração também mudam o percentual. A variação precisa cobrir exatamente os 12 meses previstos no contrato, e não o ano-calendário. Se o contrato fala em outra periodicidade ou em um índice próprio, é isso que vale.',
    ],
    mistakes: [
      'O deslize mais comum é usar o índice do mês, e não o acumulado de 12 meses, ou aplicar o índice errado porque o contrato antigo foi renovado com outra cláusula. Leia a cláusula de reajuste e identifique o índice, o mês-base e a data do aniversário. Se houve aditivo, o valor atual pode já incluir reajustes anteriores. Também confira se o percentual foi digitado como 4,22, e não como 0,0422.',
    ],
    faq: [
      {
        question: 'Qual índice devo usar no campo de reajuste?',
        answer:
          'O que estiver escrito no seu contrato, acumulado nos 12 meses anteriores ao aniversário. Os índices do campo são apenas referências de exemplo.',
      },
      {
        question: 'O resultado é o valor exato que o proprietário pode cobrar?',
        answer:
          'É uma estimativa baseada no percentual informado. O valor final depende da redação da cláusula, do arredondamento adotado e do mês-base do índice.',
      },
      {
        question:
          'Posso simular uma negociação com percentual diferente do índice?',
        answer:
          'Sim. Basta digitar o percentual combinado, por exemplo metade do índice, e comparar o novo aluguel com o da simulação pelo índice cheio.',
      },
    ],
  },

  'cdb-liquido': {
    example: {
      paragraphs: [
        'Suponha R$ 10.000,00 aplicados em um CDB que paga 13,65% ao ano, por 12 meses. A calculadora estima um rendimento bruto de R$ 1.365,00. Desse valor sai o Imposto de Renda de 17,5%, ou R$ 238,88, que é a faixa da tabela regressiva para esse prazo.',
        'No fim, o rendimento líquido é de R$ 1.126,13 e o saldo chega a R$ 11.126,13. A taxa de 13,65% é apenas um exemplo para a conta.',
        'Um resultado extra ajuda na comparação: uma LCI ou LCA, que é isenta de Imposto de Renda para pessoa física, precisaria pagar pelo menos 11,26% ao ano para entregar o mesmo líquido. Se a oferta isenta pagar menos que isso, o CDB sai na frente neste cenário.',
      ],
      table: {
        caption: 'R$ 10.000,00 a 13,65% ao ano em 12 meses',
        columns: ['Item', 'Valor'],
        rows: [
          ['Rendimento bruto', 'R$ 5.836,97'],
          ['Imposto de Renda (17,5%)', 'R$ 1.021,47'],
          ['Rendimento líquido', 'R$ 4.815,50'],
          ['Saldo final', 'R$ 11.126,13'],
        ],
      },
    },
    factors: [
      'A alíquota depende do prazo: 22,5% até 180 dias, 20% até 360, 17,5% até 720 e 15% acima disso. Por isso, prazos mais longos devolvem proporcionalmente mais do rendimento bruto, mesmo com a mesma taxa.',
      'A taxa precisa estar em base anual e efetiva. Um CDB que paga percentual do CDI deve ser convertido antes, pelo CDI do momento. O valor aplicado e o prazo completam o cálculo.',
    ],
    mistakes: [
      'Quem preenche costuma digitar 110, que é o percentual do CDI, no campo da taxa anual, quando o campo pede a taxa em % ao ano. Outro engano é comparar o rendimento bruto de um CDB com o líquido de um produto isento. No documento da oferta, confira se a taxa é prefixada ou pós-fixada, o prazo de vencimento, se há liquidez antes dele e se o resgate antecipado muda a remuneração.',
    ],
    faq: [
      {
        question: 'O Imposto de Renda é cobrado em que momento?',
        answer:
          'Na tabela regressiva, o imposto incide sobre o rendimento no resgate ou no vencimento, e a alíquota depende de quanto tempo o dinheiro ficou aplicado.',
      },
      {
        question: 'Como informo um CDB de 110% do CDI?',
        answer:
          'Converta antes: aplique 110% ao CDI do momento e digite o resultado como taxa anual. Se quiser fazer isso direto, use a calculadora de CDI.',
      },
      {
        question:
          'Por que o resultado mostra a taxa equivalente de uma LCI ou LCA?',
        answer:
          'Porque LCI e LCA são isentas de Imposto de Renda para pessoa física. Comparar apenas as taxas brutas sem considerar o imposto distorce a decisão.',
      },
    ],
  },

  'cdb-x-poupanca': {
    example: {
      paragraphs: [
        'Para comparar, aplicamos R$ 10.000,00 por 12 meses em duas alternativas. O CDB paga 13,65% ao ano, como taxa de exemplo, e a poupança rende 8,3% ao ano no total (0,5% ao mês mais a TR). A poupança é isenta de Imposto de Renda, então os R$ 830,00 de rendimento são líquidos.',
        'No CDB, o rendimento bruto é de R$ 1.365,00, do qual se desconta 17,5% de Imposto de Renda. O líquido fica em R$ 1.126,13. A calculadora mostra que o CDB rende R$ 296,13 a mais que a poupança no período.',
        'Se o resultado vier negativo, a poupança rende mais no seu cenário. Isso acontece, por exemplo, quando a taxa do CDB é muito baixa ou o prazo é curto, e o imposto pesa mais.',
      ],
      table: {
        caption: 'R$ 10.000,00 em 12 meses',
        columns: ['Aplicação', 'Rendimento líquido'],
        rows: [
          ['CDB (após IR de 17,5%)', 'R$ 1.126,13'],
          ['Poupança (isenta de IR)', 'R$ 830,00'],
          ['Diferença a favor do CDB', 'R$ 296,13'],
        ],
      },
    },
    factors: [
      'O que muda o confronto é a taxa do CDB, a taxa da poupança e o prazo. Como a poupança não paga Imposto de Renda, o CDB precisa compensar a alíquota da tabela regressiva. Quanto menor o prazo, maior o imposto e menor a vantagem.',
      'A poupança rende 0,5% ao mês mais a TR quando a Selic está acima de 8,5% ao ano; abaixo disso, 70% da Selic mais a TR. Por isso o campo da poupança deve receber a taxa anual atual, e não um número fixo antigo.',
    ],
    mistakes: [
      'Um erro comum é colocar no campo da poupança a taxa mensal, ou comparar o bruto do CDB com a poupança sem descontar o imposto. Também é frequente ignorar a liquidez: a poupança permite saque a qualquer momento, e muitos CDBs só pagam a taxa contratada se mantidos até o vencimento. Na oferta do CDB, confira prazo, carência, garantia do FGC dentro dos limites e se a taxa é prefixada ou atrelada ao CDI.',
    ],
    faq: [
      {
        question: 'Por que a poupança não tem Imposto de Renda?',
        answer:
          'Para pessoa física, o rendimento da poupança é isento. Essa isenção é considerada no cálculo, por isso comparamos o CDB depois do imposto.',
      },
      {
        question: 'A comparação vale para qualquer valor?',
        answer:
          'O cálculo é proporcional ao valor, então o percentual de vantagem se mantém. O que muda na prática são limites de garantia e a liquidez de cada produto.',
      },
      {
        question: 'O que significa um resultado negativo?',
        answer:
          'Significa que, no cenário informado, a poupança rende mais que o CDB depois do imposto. Revise a taxa e o prazo digitados.',
      },
    ],
  },

  'tesouro-selic': {
    example: {
      paragraphs: [
        'Considere R$ 10.000,00 no Tesouro Selic por 24 meses, com taxa anual de 13,75% usada como exemplo, aproximando a Selic. A calculadora estima um rendimento bruto de R$ 2.939,06 no período.',
        'Como o prazo é superior a 720 dias, aplica-se a alíquota de 15% de Imposto de Renda, o que representa R$ 440,86. O rendimento líquido é de R$ 2.498,20, e o saldo vai a R$ 12.498,20.',
        'Esse total ainda não desconta a taxa de custódia da B3 nem a taxa da corretora, que reduzem o ganho final. Para efeito de comparação, uma LCI ou LCA isenta precisaria pagar pelo menos 11,8% ao ano para entregar o mesmo líquido.',
      ],
      table: {
        caption: 'R$ 10.000,00 a 13,75% ao ano em 24 meses',
        columns: ['Item', 'Valor'],
        rows: [
          ['Rendimento bruto', 'R$ 2.939,06'],
          ['Imposto de Renda (15%)', 'R$ 440,86'],
          ['Rendimento líquido', 'R$ 2.498,20'],
          ['Saldo final', 'R$ 12.498,20'],
        ],
      },
    },
    factors: [
      'O rendimento acompanha a taxa Selic ao longo do prazo, que pode mudar. A projeção usa um valor fixo, então vale como cenário. Prazo e valor aplicado entram diretamente na conta, e o prazo define a alíquota de Imposto de Renda, de 22,5% a 15% na tabela regressiva.',
      'Os custos também alteram o resultado: a taxa de custódia da B3 e eventuais taxas da corretora ficam de fora do cálculo e reduzem o ganho. Em aplicações pequenas, esses custos podem pesar mais.',
    ],
    mistakes: [
      'Quem preenche costuma esquecer que o rendimento é projetado com taxa constante, mas a Selic varia. Outro deslize é ignorar as taxas cobradas pela corretora e pela B3 e tomar o líquido da calculadora como valor final. Antes de comprar, confira o vencimento do título, se há cobrança de taxa por parte da corretora e qual taxa de custódia incide sobre o saldo.',
    ],
    faq: [
      {
        question: 'O que são as taxas que a calculadora não inclui?',
        answer:
          'A taxa de custódia da B3 e a taxa que algumas corretoras cobram. Elas diminuem o rendimento real e variam conforme o caso.',
      },
      {
        question: 'Qual taxa devo digitar?',
        answer:
          'A taxa anual da Selic que você quer simular. O valor de 13,75% usado no exemplo é só ilustrativo; consulte o site do Banco Central ou do Tesouro Direto.',
      },
      {
        question: 'O imposto muda com o prazo?',
        answer:
          'Sim. Segue a tabela regressiva: 22,5% até 180 dias, 20% até 360, 17,5% até 720 e 15% acima disso.',
      },
    ],
  },

  'lci-lca': {
    example: {
      paragraphs: [
        'Uma LCI paga 11% ao ano e você aplica R$ 10.000,00 por 12 meses. A calculadora devolve um rendimento de R$ 1.100,00, e como LCI e LCA são isentas de Imposto de Renda para pessoa física, o líquido é igual ao bruto. O saldo final fica em R$ 11.100,00.',
        'O resultado traz também uma referência para comparar com um CDB. Para entregar o mesmo líquido, ele precisaria pagar 13,33% ao ano brutos, já descontado o Imposto de Renda de 17,5% desse prazo.',
        'Em outras palavras, uma taxa de 11% isenta equivale a uma taxa bem maior no papel do CDB. Se o CDB disponível pagar menos que 13,33%, a LCI leva vantagem neste cenário.',
      ],
      table: {
        caption: 'R$ 10.000,00 a 11% ao ano em 12 meses',
        columns: ['Item', 'Valor'],
        rows: [
          ['Rendimento bruto', 'R$ 1.100,00'],
          ['Imposto de Renda (isento)', 'R$ 0,00'],
          ['Rendimento líquido', 'R$ 1.100,00'],
          ['CDB equivalente (taxa bruta)', '13,33% ao ano'],
        ],
      },
    },
    factors: [
      'A taxa e o prazo definem o rendimento, mas a vantagem da isenção depende de quanto o CDB desconta de imposto. Quanto menor o prazo, maior a alíquota do CDB, e mais a isenção da LCI ou LCA vale.',
      'Outro ponto é a liquidez: esses papéis costumam ter carência e prazo mínimo para resgate. Se você precisar do dinheiro antes, a taxa contratada pode não valer, e esse custo de oportunidade não aparece no cálculo.',
    ],
    mistakes: [
      'Um tropeço comum é comparar uma LCI com um CDB pela taxa nominal sem converter para o mesmo critério. Outro é ignorar a carência, que impede o resgate durante um período. Na oferta, confira o prazo mínimo, a forma da remuneração (prefixada ou percentual do CDI), a garantia do FGC dentro dos limites e se a isenção vale para o seu caso, porque ela se aplica a pessoa física.',
    ],
    faq: [
      {
        question: 'LCI e LCA pagam Imposto de Renda?',
        answer:
          'Para pessoa física, não: o rendimento é isento, e por isso o líquido iguala o bruto na calculadora.',
      },
      {
        question: 'Como é calculado o CDB equivalente?',
        answer:
          'A calculadora divide o rendimento isento pelo que sobra de um CDB após o imposto da faixa do prazo, chegando à taxa bruta que o CDB precisaria pagar.',
      },
      {
        question: 'Por que a carência importa?',
        answer:
          'Porque LCI e LCA costumam ter prazo mínimo para resgate. Retirar o dinheiro antes pode ser impossível ou mudar o rendimento.',
      },
    ],
  },

  'conversao-taxa-mensal-anual': {
    example: {
      paragraphs: [
        'Digamos que um crédito cobre 1,5% ao mês. Muita gente multiplica por 12 e conclui que são 18% ao ano, mas essa é a taxa nominal, que ignora os juros sobre juros. Ao informar 1,5, a calculadora devolve 19,5618% ao ano, a taxa efetiva.',
        'A diferença de quase 1,56 ponto percentual vem da capitalização: cada mês os juros incidem sobre o saldo já corrigido. A tabela também mostra os períodos intermediários: 4,5678% no trimestre e 9,3443% no semestre.',
        'Na prática, ao comparar uma proposta em taxa mensal com outra em taxa anual, converta uma para a unidade da outra antes de decidir, em vez de multiplicar ou dividir por 12.',
      ],
      table: {
        caption: 'Equivalências para 1,5% ao mês',
        columns: ['Período', 'Taxa efetiva'],
        rows: [
          ['Mensal (informada)', '1,50%'],
          ['Trimestral', '4,5678%'],
          ['Semestral', '9,3443%'],
          ['Anual', '19,5618%'],
        ],
      },
    },
    factors: [
      'O efeito dos juros compostos cresce com a taxa. Em taxas baixas, a diferença entre multiplicar por 12 e capitalizar é pequena; em taxas de cartão, cheque especial ou crédito pessoal, ela passa de muitos pontos percentuais por ano.',
      'O período de capitalização também importa. A conversão supõe que os juros são capitalizados todo mês durante um ano, então o resultado só vale se o contrato funciona assim. Em contratos que citam taxa nominal, é preciso saber como ela é capitalizada.',
    ],
    mistakes: [
      'O erro mais frequente é somar ou multiplicar taxas em vez de capitalizar, o que subestima o custo anual. Outro é misturar taxa efetiva com nominal ao comparar propostas. Ao ler o contrato, procure a taxa de juros efetiva mensal e anual, que a instituição deve informar, e confira o CET, porque tarifas e seguros ficam de fora desta conversão.',
    ],
    faq: [
      {
        question: 'Por que 1,5% ao mês não é 18% ao ano?',
        answer:
          'Porque os juros de cada mês incidem sobre o saldo já corrigido. Multiplicar por 12 dá a taxa nominal; a efetiva, com capitalização, é 19,5618%.',
      },
      {
        question: 'Posso usar a conversão para rendimentos?',
        answer:
          'Sim, a matemática é a mesma para taxas de investimento ou de dívida, desde que haja capitalização composta no período.',
      },
      {
        question: 'A taxa anual convertida inclui tarifas e seguros?',
        answer:
          'Não. A conversão trata apenas da taxa de juros. O custo total de um contrato é dado pelo CET.',
      },
    ],
  },

  'juros-simples': {
    example: {
      paragraphs: [
        'Um valor de R$ 5.000,00 é aplicado a juros simples de 1,2% por período, durante 10 períodos. Como os juros incidem sempre sobre o capital inicial, cada período rende os mesmos R$ 60,00. Ao fim do 10º período, os juros somam R$ 600,00 e o montante é de R$ 5.600,00.',
        'A tabela da calculadora mostra a evolução: R$ 5.060,00 no primeiro período, R$ 5.120,00 no segundo e assim por diante, sempre somando R$ 60,00.',
        'Para dimensionar o efeito da capitalização, a calculadora compara com juros compostos na mesma taxa e prazo: o montante seria R$ 5.633,46, uma diferença de R$ 33,46. A diferença é pequena em prazos curtos e cresce com o tempo e com a taxa.',
      ],
      table: {
        caption: 'R$ 5.000,00 a 1,2% por período, juros simples',
        columns: ['Período', 'Juros acumulados', 'Saldo'],
        rows: [
          ['Período 1', 'R$ 60,00', 'R$ 5.060,00'],
          ['Período 2', 'R$ 120,00', 'R$ 5.120,00'],
          ['Período 3', 'R$ 180,00', 'R$ 5.180,00'],
          ['Período 4', 'R$ 240,00', 'R$ 5.240,00'],
        ],
      },
    },
    factors: [
      'Em juros simples, o resultado é proporcional a três coisas: o capital, a taxa e o número de períodos. Dobrar qualquer um deles dobra os juros. Não há efeito de bola de neve, e por isso o crescimento é uma reta.',
      'A taxa e o prazo precisam estar na mesma unidade: taxa mensal com prazo em meses, taxa anual com prazo em anos. Misturar as duas é a principal fonte de erro. Esse regime também só se aplica quando o contrato diz que não há capitalização, ou em prazos curtos.',
    ],
    mistakes: [
      'Quem preenche costuma digitar uma taxa anual e um prazo em meses, o que gera juros incorretos. Outro engano é supor que uma dívida ou investimento do mercado financeiro usa juros simples, quando quase todos capitalizam. Leia no contrato se os juros são capitalizados e com que periodicidade, e compare o resultado com o montante a juros compostos antes de aceitar a proposta.',
    ],
    faq: [
      {
        question: 'Qual a diferença entre juros simples e compostos?',
        answer:
          'Nos simples, os juros incidem sempre sobre o capital inicial. Nos compostos, incidem também sobre os juros já acumulados, e o saldo cresce mais rápido.',
      },
      {
        question: 'Posso usar taxa anual com prazo em meses?',
        answer:
          'Não diretamente. Converta uma das duas para a mesma unidade. Com taxa anual, informe o prazo em anos, ou divida a taxa para a base mensal.',
      },
      {
        question: 'Onde os juros simples são usados?',
        answer:
          'Em prazos curtos e em contratos que dizem expressamente que não há capitalização. Fora disso, o mais comum é o regime composto.',
      },
    ],
  },

  'simulador-de-emprestimo': {
    example: {
      paragraphs: [
        'Você toma R$ 8.000,00 emprestados com juros de 3,5% ao mês, em 24 parcelas. O simulador usa o sistema Price, e a parcela fixa estimada é de R$ 498,18. Ao fim, você terá pago R$ 11.956,38, dos quais R$ 3.956,38 são juros.',
        'Olhando a primeira parcela, R$ 280,00 vão para juros e apenas R$ 218,18 abatem a dívida, deixando saldo devedor de R$ 7.781,82. Na segunda, os juros caem para R$ 272,36 e a amortização sobe para R$ 225,82.',
        'Os juros caem aos poucos porque incidem sobre um saldo menor, e a parte que amortiza cresce. Perceba que o custo total supera em quase 50% o valor recebido, um número que ajuda a pesar o empréstimo.',
      ],
      table: {
        caption: 'R$ 8.000,00, 3,5% ao mês, 24 parcelas (primeiras linhas)',
        columns: ['Parcela', 'Valor', 'Juros', 'Amortização', 'Saldo devedor'],
        rows: [
          ['Parcela 1', 'R$ 498,18', 'R$ 280,00', 'R$ 218,18', 'R$ 7.781,82'],
          ['Parcela 2', 'R$ 498,18', 'R$ 272,36', 'R$ 225,82', 'R$ 7.556,00'],
          ['Parcela 3', 'R$ 498,18', 'R$ 264,46', 'R$ 233,72', 'R$ 7.322,28'],
        ],
      },
    },
    factors: [
      'O prazo e a taxa decidem o equilíbrio entre parcela e custo total. Prazos maiores reduzem a parcela, mas aumentam os juros pagos. Uma taxa maior eleva as duas coisas.',
      'O simulador não inclui tarifas, seguros nem IOF, que costumam ser somados ao valor liberado ou cobrados nas parcelas. Por isso o custo real, expresso no CET, é maior que o da simulação.',
    ],
    mistakes: [
      'Um erro comum é decidir pela parcela que cabe no orçamento sem olhar o total pago e o CET. Também acontece de a taxa ser digitada como anual no campo mensal. No contrato, confira a taxa efetiva mensal e anual, o CET, o valor líquido liberado, o IOF, os seguros embutidos, o valor total a pagar e as condições de quitação antecipada.',
    ],
    faq: [
      {
        question: 'Por que os juros diminuem a cada parcela?',
        answer:
          'Porque são calculados sobre o saldo devedor, que cai a cada parcela paga. A parcela fica igual, e a parte que amortiza a dívida cresce.',
      },
      {
        question: 'O CET aparece nesta simulação?',
        answer:
          'Não. O simulador usa só a taxa mensal e o prazo. O CET do contrato inclui tarifas, seguros e IOF, e por isso é maior.',
      },
      {
        question: 'Posso usar para financiar um carro ou imóvel?',
        answer:
          'Serve como estimativa se o sistema for Price e a taxa mensal for constante. Para imóveis, compare também o SAC e inclua seguros e a correção do saldo.',
      },
    ],
  },

  'amortizacao-antecipada': {
    example: {
      paragraphs: [
        'Um financiamento de R$ 60.000,00, com 1,1% ao mês e 120 meses na tabela Price, tem parcela de R$ 902,96. Você consegue antecipar R$ 10.000,00 e quer saber como usar esse dinheiro.',
        'Se mantiver a parcela de R$ 902,96 e encurtar o prazo, o restante cai para 85,9 meses, cerca de 34,1 meses a menos, e você economiza R$ 20.824,71 em juros. Se preferir reduzir a parcela e manter o prazo de 120 meses, ela passa a R$ 752,46, e a economia é de R$ 8.059,12.',
        'A comparação mostra que, nas mesmas condições, encurtar o prazo gera bem mais economia de juros do que reduzir a parcela. A segunda opção, por outro lado, alivia o orçamento mensal de imediato.',
      ],
      table: {
        caption:
          'R$ 60.000,00, 1,1% ao mês, 120 meses, antecipando R$ 10.000,00',
        columns: ['Opção', 'Parcela', 'Prazo restante', 'Juros economizados'],
        rows: [
          ['Sem antecipar', 'R$ 902,96', '120 meses', '—'],
          [
            'Manter a parcela e encurtar o prazo',
            'R$ 902,96',
            '85,9 meses',
            'R$ 20.824,71',
          ],
          [
            'Reduzir a parcela e manter o prazo',
            'R$ 752,46',
            '120 meses',
            'R$ 8.059,12',
          ],
        ],
      },
    },
    factors: [
      'Três coisas pesam: o valor antecipado, a taxa de juros e o prazo que ainda falta. Antecipar cedo, quando o saldo é alto e a maior parte da parcela é juros, economiza mais do que antecipar perto do fim.',
      'A escolha entre encurtar o prazo e reduzir a parcela define o ganho. Encurtar o prazo corta mais juros; reduzir a parcela dá fôlego ao caixa mensal. Cada banco tem sua forma de calcular o abatimento, então o valor exato deve ser confirmado com ele.',
    ],
    mistakes: [
      'Um deslize frequente é supor que o banco aplicará exatamente o cálculo da tabela Price, quando o contrato pode ter regras próprias, tarifas ou correção do saldo. Antes de pagar, peça à instituição o saldo devedor atualizado e o valor da quitação parcial, e confira se há cobrança adicional. Informe também a sua escolha por escrito, pois o padrão pode ser reduzir prazo ou parcela, conforme o banco.',
    ],
    faq: [
      {
        question: 'É melhor reduzir o prazo ou a parcela?',
        answer:
          'Para economizar juros, encurtar o prazo costuma render mais, como no exemplo. Reduzir a parcela é melhor se o orçamento mensal estiver apertado.',
      },
      {
        question: 'Tenho direito a desconto de juros ao antecipar?',
        answer:
          'O CDC garante a redução proporcional dos juros ao antecipar o pagamento. Ainda assim, cada banco tem regras próprias de cálculo, e o valor exato deve ser confirmado com ele.',
      },
      {
        question: 'A calculadora serve para financiamento com taxa variável?',
        answer:
          'Ela considera taxa constante na tabela Price. Se a taxa ou o saldo mudam por indexador, o resultado será apenas uma aproximação.',
      },
    ],
  },
};
