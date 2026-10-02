import type { CalculatorEditorialMap } from './types';

export const editorialTrabalho2: CalculatorEditorialMap = {
  'adicional-noturno': {
    example: {
      paragraphs: [
        'Imagine alguém que ganha R$ 2.200,00 por mês, trabalha numa jornada de 220 horas mensais e cumpriu 40 horas entre 22h e 5h, com adicional de 20%. A calculadora primeiro acha o valor da hora normal: R$ 2.200,00 divididos por 220 dão R$ 10,00. Sobre as 40 horas noturnas, o acréscimo de 20% rende R$ 80,00 no mês.',
        'Esse R$ 80,00 é só o adicional, ou seja, vem somado ao salário que já remunera essas horas. Na prática, cada hora da madrugada passa a valer R$ 12,00 em vez de R$ 10,00. A ferramenta mostra também, em linha separada, o efeito da hora noturna reduzida de 52min30s, que neste caso seria de R$ 68,57. Ele só entra na conta quando o contrato não pagou a redução de outra forma, por exemplo com a jornada já encurtada.',
      ],
      table: {
        caption: 'Composição do exemplo (40 horas noturnas no mês)',
        columns: ['Item', 'Valor'],
        rows: [
          ['Valor da hora normal', 'R$ 10,00'],
          ['Adicional de 20% sobre 40 h', 'R$ 80,00'],
          ['Hora noturna reduzida de 52min30s (se aplicável)', 'R$ 68,57'],
        ],
      },
    },
    factors: [
      'O percentual pesa mais do que parece: o mínimo urbano é 20%, mas convenções coletivas de vários setores fixam índices maiores, e no trabalho rural o adicional é de 25%. Trocar 20% por 30% muda o valor em 50%, mesmo sem mexer em nenhuma hora.',
      'A jornada mensal também mexe no resultado, porque ela define o valor da hora. Quem trabalha 44 horas semanais usa 220, quem faz 40 horas usa 200, e uma hora normal mais cara eleva o adicional. Por fim, vale conferir quantas horas realmente caíram entre 22h e 5h: a hora que começa às 21h30 não entra inteira.',
    ],
    mistakes: [
      'O erro mais comum é dividir o salário por 30 ou por 8 em vez de usar a jornada mensal do contrato, o que distorce o valor da hora. Outro é somar a hora reduzida de 52min30s quando o holerite já paga as horas de forma ajustada, contando o benefício duas vezes. Conferir no contrato ou no cartão de ponto o percentual combinado, a jornada e o total de horas noturnas evita as duas falhas.',
    ],
    faq: [
      {
        question: 'Quais horas contam como noturnas no trabalho urbano?',
        answer:
          'As trabalhadas entre 22h e 5h. Nesse intervalo, cada hora de relógio é contada como 52 minutos e 30 segundos, e o adicional mínimo é de 20% sobre a hora normal.',
      },
      {
        question: 'O adicional noturno entra no cálculo de férias e 13º?',
        answer:
          'Quando é pago com habitualidade, ele integra a remuneração e costuma refletir em verbas como férias com 1/3, 13º salário e FGTS. A forma exata aparece no holerite e no que a convenção coletiva prevê.',
      },
      {
        question: 'Quem faz hora extra à noite recebe os dois adicionais?',
        answer:
          'Em geral sim: o adicional noturno incide sobre a hora, e a hora extra é calculada considerando esse valor já acrescido. Esta calculadora trata só do adicional noturno; as horas extras têm calculadora própria.',
      },
    ],
  },

  dsr: {
    example: {
      paragraphs: [
        'Considere um vendedor que recebeu R$ 600,00 de comissões no mês. O mês teve 26 dias úteis, contados de segunda a sábado, e 4 domingos de repouso, sem feriados. A calculadora divide o valor variável pelos dias úteis, R$ 600,00 por 26, o que dá R$ 23,08 por dia, e multiplica pelos 4 dias de repouso.',
        'O resultado é um DSR de R$ 92,31 sobre essas comissões. Em termos simples, o descanso semanal remunerado também precisa refletir o que a pessoa vendeu: se o domingo não fosse pago sobre a parte variável, quem ganha por comissão teria menos nos dias em que descansa. No holerite, o total das comissões somado ao DSR seria de R$ 692,31, antes dos descontos.',
      ],
      table: {
        caption: 'Rateio da comissão do exemplo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Comissões do mês', 'R$ 600,00'],
          ['Dias úteis (segunda a sábado)', '26'],
          ['Domingos e feriados', '4'],
          ['Comissão por dia útil', 'R$ 23,08'],
          ['DSR sobre as comissões', 'R$ 92,31'],
        ],
      },
    },
    factors: [
      'O DSR depende de dois contadores que mudam todo mês: quantos dias úteis e quantos domingos e feriados existem no calendário. Um mês com cinco domingos e feriado no meio da semana tem divisor menor e multiplicador maior, então o mesmo valor de comissão gera DSR diferente de um mês para outro.',
      'Também conta o tipo de verba. O DSR incide sobre pagamentos variáveis, como comissões, horas extras e adicionais pagos por hora, e não sobre o salário mensal fixo, que já remunera os dias de descanso. Regras de convenção coletiva sobre o que entra na base podem alterar o total.',
    ],
    mistakes: [
      'Quem preenche costuma contar os sábados como repouso, quando a calculadora pede segunda a sábado como dias úteis, ou esquecer os feriados nos dois campos. Outro tropeço é aplicar o DSR sobre o salário fixo mensalista, que não precisa dele, ou usar no campo de valor variável o total do contracheque. Confira no holerite quais rubricas são variáveis e quantos dias o calendário do mês realmente tem.',
    ],
    faq: [
      {
        question: 'Quem recebe salário fixo mensal tem direito a DSR separado?',
        answer:
          'Em regra o mensalista já tem o descanso embutido no salário. O DSR em destaque costuma aparecer para quem ganha por hora, comissão ou tem horas extras habituais.',
      },
      {
        question: 'Hora extra gera DSR?',
        answer:
          'Quando as horas extras são habituais, o valor entra na base do descanso semanal remunerado. Calcule o total pago de horas extras no mês e informe-o como valor variável.',
      },
      {
        question: 'Feriado conta como dia útil ou como repouso?',
        answer:
          'Nesta conta o feriado entra junto com os domingos, no campo de repouso, e deve ser retirado dos dias úteis. Colocar o mesmo dia nos dois campos gera um DSR errado.',
      },
    ],
  },

  'banco-de-horas': {
    example: {
      paragraphs: [
        'Um empregado com salário de R$ 3.300,00 e jornada de 220 horas por mês acumulou 18 horas de crédito, pelos dias em que ficou além do horário, e já compensou 6 horas de débito, folgas que tirou antes do combinado. A calculadora subtrai uma coisa da outra e mostra um saldo de 12 horas a favor do trabalhador.',
        'Como o salário foi informado, ela também estima o valor da hora normal, R$ 15,00, e quanto valeriam essas 12 horas se tivessem de ser pagas em dinheiro com o adicional de 50%: R$ 270,00. Na prática, isso mostra o que está em jogo se o prazo de compensação vencer sem a folga ser dada. Se o saldo fosse negativo, o número indicaria horas a compensar com o empregador.',
      ],
      table: {
        caption: 'Resumo do banco de horas no exemplo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Créditos', '18h00'],
          ['Débitos', '6h00'],
          ['Saldo do banco', '12h00'],
          ['Valor da hora normal', 'R$ 15,00'],
          ['Saldo pago em dinheiro (hora + 50%)', 'R$ 270,00'],
        ],
      },
    },
    factors: [
      'O prazo para compensar depende do tipo de acordo. Pela regra usada aqui, o banco pode ser quitado no mesmo mês, em até 6 meses quando o acordo individual é escrito, ou em até 12 meses quando há acordo ou convenção coletiva. O mesmo saldo pode estar dentro do prazo em um caso e vencido em outro.',
      'O valor em dinheiro varia com o salário e a jornada que definem a hora normal, e com o adicional, que não pode ser inferior a 50%. Convenções coletivas podem prever percentuais maiores, e horas em feriado ou domingo seguem regras próprias do instrumento coletivo.',
    ],
    mistakes: [
      'O erro clássico é digitar horas no formato do relógio. Uma hora e meia deve ser escrita como 1,5, e não como 1,30, e 2h15 vira 2,25. Também é comum lançar no crédito horas que a empresa já pagou como extras, ou ignorar horas de atraso que entram como débito. Compare o resultado com o extrato do banco de horas que a empresa deve fornecer e com o acordo assinado.',
    ],
    faq: [
      {
        question:
          'O que acontece se o banco de horas não for compensado no prazo?',
        answer:
          'As horas a favor do trabalhador que não forem compensadas no prazo devem ser pagas como hora extra, com adicional de no mínimo 50%. A calculadora mostra uma estimativa desse valor quando você informa o salário.',
      },
      {
        question: 'Posso ter saldo negativo no banco de horas?',
        answer:
          'Sim, quando o trabalhador folgou ou saiu antes e ainda deve horas. O saldo negativo é compensado com trabalho futuro dentro do prazo do acordo, e as regras de desconto dependem do que foi combinado.',
      },
      {
        question: 'Preciso informar o salário para ver o saldo?',
        answer:
          'Não. O saldo em horas só exige créditos e débitos. O salário e as horas mensais são opcionais e servem para estimar quanto o saldo positivo valeria em dinheiro.',
      },
    ],
  },

  'vale-transporte': {
    example: {
      paragraphs: [
        'Uma pessoa com salário-base de R$ 2.400,00 gasta R$ 280,00 por mês com ônibus e metrô para ir ao trabalho. O limite de desconto é de 6% do salário-base, ou seja, R$ 144,00. Como o custo do transporte é maior que esse limite, o desconto no contracheque é de R$ 144,00 e a empresa paga a diferença, R$ 136,00.',
        'Em 12 meses, o custo total do transporte soma R$ 3.360,00, dos quais o trabalhador banca R$ 1.728,00 e a empresa R$ 1.632,00. Se o transporte custasse só R$ 100,00 por mês, o desconto seria de R$ 100,00, porque nunca passa do custo real. Em resumo, o trabalhador nunca paga mais do que gasta nem mais do que 6% da base.',
      ],
      table: {
        caption: 'Quem paga o vale-transporte no exemplo',
        columns: ['Item', 'Por mês', 'Em 12 meses'],
        rows: [
          ['Custo do transporte', 'R$ 280,00', 'R$ 3.360,00'],
          ['Limite de desconto (6% do salário)', 'R$ 144,00', 'R$ 1.728,00'],
          ['Pago pelo trabalhador', 'R$ 144,00', 'R$ 1.728,00'],
          ['Pago pela empresa', 'R$ 136,00', 'R$ 1.632,00'],
        ],
      },
    },
    factors: [
      'O que decide a divisão do custo é a relação entre a tarifa e o salário-base. Quanto menor o salário e maior a distância percorrida, maior a parte paga pela empresa. Quem mora perto do trabalho pode ter um gasto menor que os 6% e, nesse caso, o desconto acompanha o custo real.',
      'A base dos 6% é o salário básico, sem horas extras, comissões ou outros adicionais, então um aumento de remuneração variável não altera o limite. O número de dias trabalhados no mês e as integrações entre linhas, que mudam o valor das passagens, também mexem no custo informado.',
    ],
    mistakes: [
      'Muita gente calcula os 6% sobre o total do holerite, com adicionais incluídos, o que gera um desconto maior que o permitido. Outro engano é informar o preço de uma passagem em vez do custo do mês, que depende de ida e volta e dos dias trabalhados. Veja no contracheque se o desconto não passou de 6% do salário-base e se o benefício é pago em dias úteis efetivamente trabalhados.',
    ],
    faq: [
      {
        question: 'A empresa pode descontar mais de 6% do salário?',
        answer:
          'O desconto máximo é de 6% do salário básico. Se o transporte custar menos que isso, o desconto é igual ao custo, e o excedente, quando existe, fica por conta do empregador.',
      },
      {
        question: 'Vale-transporte conta como salário para férias e FGTS?',
        answer:
          'Não, ele não tem natureza salarial e não entra no cálculo de férias, 13º salário ou FGTS. Por isso o valor pago pela empresa não reflete em outras verbas.',
      },
      {
        question: 'Posso recusar o vale-transporte?',
        answer:
          'Sim, desde que a recusa seja feita por declaração escrita. Sem o benefício, não há desconto de 6% no salário.',
      },
    ],
  },

  insalubridade: {
    example: {
      paragraphs: [
        'Uma trabalhadora de limpeza hospitalar tem laudo técnico com insalubridade em grau médio, de 20%. O contrato e a convenção coletiva não fixam outra base, então se usa o salário mínimo de R$ 1.621,00. Aplicando 20% sobre esse valor, a calculadora devolve um adicional de R$ 324,20 por mês.',
        'Somado à base, isso leva a remuneração de referência a R$ 1.945,20. A tabela da própria ferramenta mostra o mesmo caso nos três graus: R$ 162,10 no mínimo, R$ 324,20 no médio e R$ 648,40 no máximo. A leitura prática é simples: o grau do laudo, e não a atividade em si, é o que muda o valor, e a base de cálculo é a mesma nos três cenários.',
      ],
      table: {
        caption: 'Adicional mensal por grau sobre a base de R$ 1.621,00',
        columns: ['Grau', 'Percentual', 'Adicional mensal'],
        rows: [
          ['Mínimo', '10%', 'R$ 162,10'],
          ['Médio', '20%', 'R$ 324,20'],
          ['Máximo', '40%', 'R$ 648,40'],
        ],
      },
    },
    factors: [
      'O grau vem do laudo técnico, com base na NR-15, e define se o percentual é 10%, 20% ou 40%. O que também pesa é a base de cálculo: a regra geral aponta o salário mínimo, mas contrato ou norma coletiva podem indicar o salário-base ou o piso da categoria, e isso pode dobrar o valor.',
      'O adicional pode deixar de ser devido quando o equipamento de proteção neutraliza o agente nocivo, conforme a Súmula 80 do TST. Se houver também risco de periculosidade, o trabalhador não acumula os dois: vale o mais vantajoso. Quando o adicional é pago de forma habitual, costuma refletir em verbas como 13º, férias e FGTS.',
    ],
    mistakes: [
      'Um erro frequente é aplicar o percentual sobre o salário inteiro quando a base é o salário mínimo, ou o inverso. Outro é usar o grau do ambiente de trabalho em geral em vez do que consta no laudo. Peça o laudo e leia no contrato ou na convenção coletiva qual é a base, e confira no holerite se a rubrica aparece com o percentual correto.',
    ],
    faq: [
      {
        question: 'Insalubridade e periculosidade podem ser recebidas juntas?',
        answer:
          'Não. A CLT, no art. 193, §2º, determina que o trabalhador escolha o adicional mais vantajoso, sem acumular os dois.',
      },
      {
        question: 'Quem define o grau de insalubridade?',
        answer:
          'O grau é fixado em laudo técnico, com base nos agentes e limites da NR-15. A calculadora não identifica o grau sozinha: você informa 10%, 20% ou 40% conforme o laudo.',
      },
      {
        question: 'O fornecimento de EPI acaba com o adicional?',
        answer:
          'Se o equipamento de proteção neutralizar o agente nocivo, o adicional deixa de ser devido, segundo a Súmula 80 do TST. A análise depende do caso concreto e do laudo.',
      },
    ],
  },

  periculosidade: {
    example: {
      paragraphs: [
        'Um vigilante com salário-base de R$ 3.500,00 trabalha em atividade enquadrada como perigosa. A calculadora aplica 30% sobre o salário-base e encontra um adicional de R$ 1.050,00 por mês, o que leva a remuneração a R$ 4.550,00.',
        'O adicional, quando habitual, também reflete em outras verbas. Pela estimativa da ferramenta, o 13º acrescenta R$ 87,50 por mês, as férias com 1/3 somam R$ 116,67 e o FGTS de 8% sobre o adicional é de R$ 84,00. Juntos, os reflexos chegam a R$ 288,17 mensais, ou R$ 3.458,00 em 12 meses. Ou seja, o adicional custa para a empresa bem mais do que os R$ 1.050,00 que aparecem na linha do holerite.',
      ],
      table: {
        caption: 'Reflexos do adicional no exemplo',
        columns: ['Reflexo', 'Por mês', 'Em 12 meses'],
        rows: [
          ['13º salário (1/12)', 'R$ 87,50', 'R$ 1.050,00'],
          ['Férias + 1/3 (1/12)', 'R$ 116,67', 'R$ 1.400,00'],
          ['FGTS de 8% sobre o adicional', 'R$ 84,00', 'R$ 1.008,00'],
          ['Total dos reflexos', 'R$ 288,17', 'R$ 3.458,00'],
        ],
      },
    },
    factors: [
      'O percentual é fixo, 30%, e o que muda o resultado é a base. O adicional incide sobre o salário-base, sem gratificações, prêmios ou participação nos lucros, e por isso um salário com muitos extras não aumenta o valor. Norma coletiva pode alterar o critério, e é ela que costuma explicar diferenças entre categorias.',
      'O enquadramento depende de laudo e da forma de exposição. A exposição apenas eventual não gera direito ao adicional, enquanto a exposição intermitente gera, conforme a Súmula 364 do TST. E, se o trabalhador também tiver direito a insalubridade, precisa escolher uma delas.',
    ],
    mistakes: [
      'Quem preenche costuma informar o total do contracheque no lugar do salário-base, inflando os 30%. Também é comum esquecer os reflexos e olhar apenas o valor mensal do adicional. Outro erro é assumir que qualquer contato com risco dá direito ao adicional, sem laudo. Confira no contrato o salário-base e no holerite a rubrica de periculosidade, e peça o laudo se houver dúvida sobre o enquadramento.',
    ],
    faq: [
      {
        question: 'Qual é o percentual do adicional de periculosidade?',
        answer:
          'É de 30% sobre o salário-base, sem os acréscimos de gratificações, prêmios ou participação nos lucros, conforme o art. 193, §1º da CLT.',
      },
      {
        question:
          'Exposição ao risco por poucos minutos dá direito ao adicional?',
        answer:
          'A exposição apenas eventual não dá direito, mas a intermitente dá, segundo a Súmula 364 do TST. A fronteira entre elas depende da atividade e do laudo.',
      },
      {
        question:
          'O adicional de periculosidade entra no cálculo das horas extras?',
        answer:
          'Sim, quando pago de forma permanente. Ele integra a remuneração usada como base das horas extras, conforme a Súmula 132 do TST.',
      },
    ],
  },

  'pensao-alimenticia': {
    example: {
      paragraphs: [
        'Um trabalhador tem rendimento de R$ 4.000,00 e, no holerite, R$ 368,60 saem de INSS (nessa faixa não há Imposto de Renda). A decisão judicial fixou a pensão em 30% da renda líquida. A calculadora desconta os R$ 368,60 e chega a uma base de R$ 3.631,40. Sobre ela, 30% resultam em uma pensão de R$ 1.089,42 por mês.',
        'Sobram R$ 2.541,98 para quem paga. Se a decisão tivesse fixado 30% sobre o rendimento bruto, a conta seria outra, com R$ 1.200,00 de pensão, e é por isso que o texto da sentença ou do acordo vale mais do que qualquer regra geral. Ao informar a base sem descontos, você replica a forma como a decisão manda calcular.',
      ],
      table: {
        caption: 'Composição da pensão no exemplo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Rendimento informado', 'R$ 4.000,00'],
          ['Descontos legais (INSS e IRRF)', 'R$ 368,60'],
          ['Base de cálculo (renda líquida)', 'R$ 3.631,40'],
          ['Pensão alimentícia (30%)', 'R$ 1.089,42'],
          ['Fica com quem paga a pensão', 'R$ 2.541,98'],
        ],
      },
    },
    factors: [
      'Não existe percentual padrão em lei: o valor nasce da decisão judicial ou do acordo, que fixa percentual, base de cálculo e verbas incluídas. O mesmo percentual produz valores bem diferentes conforme a base seja o salário bruto, a renda líquida ou o salário mínimo.',
      'Muitas decisões estendem o percentual ao 13º salário e ao terço de férias, e o que está escrito no documento vale. Também mudam o resultado a existência de outros rendimentos e de filhos de outra relação, e o juiz pode ajustar a base nesses casos. Quando a pensão é fixada em valor certo, o cálculo percentual deixa de ser necessário.',
    ],
    mistakes: [
      'O erro mais frequente é aplicar o percentual sobre o salário bruto quando a decisão fala em renda líquida, ou o inverso. Outro é esquecer que 13º e férias podem estar incluídos, ou deixar de abater INSS e IRRF quando a base é o líquido. Releia a decisão ou o acordo para ver base, percentual e verbas incluídas, e confira o desconto no holerite antes de comparar com o resultado.',
    ],
    faq: [
      {
        question: 'A pensão é sempre de 30% do salário?',
        answer:
          'Não. Não há percentual padrão em lei; o valor depende da decisão do juiz ou do acordo, considerando a necessidade de quem recebe e a possibilidade de quem paga.',
      },
      {
        question: 'A pensão incide sobre o 13º salário?',
        answer:
          'Muitas decisões estendem o percentual ao 13º e ao terço de férias, mas isso precisa estar no texto do seu caso. Se estiver, calcule separadamente sobre cada verba.',
      },
      {
        question:
          'O que informo se a decisão fixou a pensão em salário mínimo?',
        answer:
          'Informe o salário mínimo no campo de base e o percentual que a decisão indicar. Se for um valor em reais, não é necessário calcular percentual.',
      },
    ],
  },

  'salario-maternidade': {
    example: {
      paragraphs: [
        'Uma empregada CLT com remuneração de R$ 3.000,00 por mês entra em licença-maternidade de 4 meses, ou 120 dias. A calculadora multiplica a remuneração pelos meses de afastamento e chega a um total bruto de R$ 12.000,00, dividido em quatro parcelas mensais de R$ 3.000,00.',
        'Em outras palavras, durante a licença ela continua recebendo o equivalente ao salário, sem perda de renda. Para a empregada com carteira assinada, a empresa paga o valor na folha e compensa depois nas contribuições ao INSS, com os descontos de INSS e Imposto de Renda como no salário comum. Se a empresa participa do programa Empresa Cidadã, o período pode chegar a 6 meses, e o total do mesmo exemplo subiria para R$ 18.000,00.',
      ],
      table: {
        caption: 'Parcelas do salário-maternidade no exemplo (120 dias)',
        columns: ['Período', 'Valor bruto'],
        rows: [
          ['1ª parcela (dias 1 a 30)', 'R$ 3.000,00'],
          ['2ª parcela (dias 31 a 60)', 'R$ 3.000,00'],
          ['3ª parcela (dias 61 a 90)', 'R$ 3.000,00'],
          ['4ª parcela (dias 91 a 120)', 'R$ 3.000,00'],
        ],
      },
    },
    factors: [
      'A categoria da segurada decide quem paga e como se calcula. A empregada CLT recebe da empresa pela remuneração e não precisa de carência. A contribuinte individual, a MEI, a facultativa e a desempregada com qualidade de segurada recebem direto do INSS, com base na média das últimas contribuições, limitada ao teto, e exigem 10 contribuições de carência.',
      'O prazo é de 120 dias em regra e de 180 quando a empresa participa do Empresa Cidadã. O valor também muda com a remuneração considerada: variáveis habituais, como comissões, podem entrar na média, e o teto do INSS limita o benefício pago diretamente pela Previdência.',
    ],
    mistakes: [
      'É comum informar apenas o salário-base e esquecer a parte variável recebida com habitualidade, ou usar o prazo errado de afastamento. Quem é autônoma costuma esperar o salário atual e recebe uma média das contribuições, que pode ser menor. Outro engano é achar que o valor é líquido: a conta mostra o bruto. Confirme a categoria de segurada, a carência e a data prevista do afastamento no Meu INSS ou com o RH.',
    ],
    faq: [
      {
        question: 'Quem paga o salário-maternidade da empregada CLT?',
        answer:
          'A própria empresa paga na folha e depois compensa o valor nas contribuições devidas ao INSS. A empregada não precisa procurar o INSS para receber.',
      },
      {
        question: 'Existe carência para receber o benefício?',
        answer:
          'Para a empregada CLT, não. Para contribuinte individual, MEI, facultativa e desempregada com qualidade de segurada, são exigidas 10 contribuições.',
      },
      {
        question: 'Qual é a duração da licença?',
        answer:
          'Em regra, 120 dias. Quando a empresa participa do programa Empresa Cidadã, a licença pode ser estendida para 180 dias.',
      },
    ],
  },

  'auxilio-incapacidade': {
    example: {
      paragraphs: [
        'Suponha um segurado cuja média de todas as contribuições, corrigidas desde julho de 1994, seja de R$ 3.500,00. Pelo tempo de contribuição, o percentual aplicável é de 70% sobre essa média (60% mais 2% por ano acima de 20 anos, no caso de um homem com 25 anos de contribuição). A calculadora aplica 70% a R$ 3.500,00 e encontra R$ 2.450,00 por mês.',
        'Esse valor está entre o piso, que é o salário mínimo de R$ 1.621,00, e o teto do INSS, de R$ 8.475,55, por isso o resultado antes e depois dos limites é o mesmo. Se a conta desse menos que o mínimo, o benefício seria elevado ao piso. Na prática, o número é uma referência de ordem de grandeza: o INSS é quem define o direito, por perícia médica, e o valor exato após a análise do histórico.',
      ],
      table: {
        caption: 'Cálculo do benefício no exemplo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Média das contribuições', 'R$ 3.500,00'],
          ['Percentual aplicado', '70%'],
          ['Resultado antes de piso e teto', 'R$ 2.450,00'],
          ['Benefício estimado', 'R$ 2.450,00'],
        ],
      },
    },
    factors: [
      'O percentual é o que mais pesa. Na regra de referência da incapacidade permanente, o cálculo parte de 60% e cresce 2% por ano de contribuição acima de 20 anos para homens e de 15 para mulheres, chegando a 100% em caso de acidente de trabalho. A média das contribuições, que considera todo o histórico desde julho de 1994, é o segundo fator.',
      'Piso e teto limitam o resultado: o benefício não fica abaixo do salário mínimo nem passa do teto do INSS. Além disso, a existência do direito depende de perícia médica, da qualidade de segurado e, em muitos casos, da carência, o que a calculadora não avalia. Períodos sem contribuição podem baixar a média.',
    ],
    mistakes: [
      'Muita gente informa o último salário no campo de média, quando a regra olha todas as contribuições do histórico. Também é comum aplicar 100% sem se tratar de acidente de trabalho, ou esquecer de conferir o tempo de contribuição para chegar ao percentual correto. Consulte o extrato CNIS no Meu INSS para ver o histórico e salários de contribuição antes de preencher.',
    ],
    faq: [
      {
        question: 'Quem decide se tenho direito ao auxílio?',
        answer:
          'O INSS, por meio de perícia médica que avalia a incapacidade. A calculadora só estima o valor, sem confirmar que o benefício será concedido.',
      },
      {
        question: 'O benefício pode ser menor que um salário mínimo?',
        answer:
          'Não. A conta respeita o piso do salário mínimo, hoje R$ 1.621,00, e também o teto do INSS, de R$ 8.475,55.',
      },
      {
        question:
          'Por que o valor do auxílio costuma ficar abaixo do último salário?',
        answer:
          'Porque a base é a média de todas as contribuições desde julho de 1994, e o percentual aplicado pode ser menor que 100%. Quem teve salários mais baixos no passado puxa a média para baixo.',
      },
    ],
  },

  'custo-funcionario-clt': {
    example: {
      paragraphs: [
        'Uma pequena empresa contrata alguém com salário de R$ 2.500,00 e paga R$ 450,00 por mês em benefícios, como vale-refeição e plano de saúde. Os encargos patronais sobre a folha são de 20%. A calculadora soma ao salário as provisões de 13º e férias com 1/3, de R$ 486,11 por mês, o FGTS de 8%, de R$ 238,89, os encargos de 20%, de R$ 597,22, e os benefícios.',
        'O custo total chega a R$ 4.272,22 por mês, 70,89% a mais do que o salário. Em palavras simples, quem ganha R$ 2.500,00 no contrato custa mais de R$ 1.700,00 a mais para o caixa da empresa todos os meses, sem contar rescisão futura. O trabalhador não recebe esse valor integral na conta, e boa parte dele é provisão ou recolhimento.',
      ],
      table: {
        caption: 'Composição do custo mensal do exemplo',
        columns: ['Item', 'Referência', 'Valor'],
        rows: [
          ['Salário', '', 'R$ 2.500,00'],
          ['Provisão de 13º e férias com 1/3', '8,33% + 11,11%', 'R$ 486,11'],
          ['FGTS', '8%', 'R$ 238,89'],
          ['Encargos patronais', '20%', 'R$ 597,22'],
          ['Benefícios', '', 'R$ 450,00'],
          ['Custo total para a empresa', '', 'R$ 4.272,22'],
        ],
      },
    },
    factors: [
      'O regime tributário é o fator de maior peso. Empresas do Simples Nacional nos anexos I, II, III e V não pagam a contribuição patronal de 20% por fora, porque ela já está dentro do DAS, então o campo de encargos deve ser 0%. Já no lucro presumido ou real, o conjunto de encargos costuma ficar perto de 28,8%, somando INSS, RAT e terceiros.',
      'Os benefícios também pesam: vale-transporte pago pela empresa, vale-refeição e plano de saúde entram direto no custo mensal. Convenção coletiva pode acrescentar benefícios obrigatórios e pisos maiores. Rotatividade, aviso prévio e multa do FGTS na demissão ficam fora desta conta mensal.',
    ],
    mistakes: [
      'Um erro comum é usar o percentual de encargos de outro regime, como 28,8% numa empresa do Simples, o que superestima o custo. Outro é esquecer benefícios pagos ou incluir o vale-transporte descontado do empregado, que não é custo. Confira com o contador o enquadramento da empresa e as alíquotas de RAT e terceiros, e liste os benefícios reais do contrato.',
    ],
    faq: [
      {
        question: 'Por que o custo é maior do que o salário combinado?',
        answer:
          'Porque a empresa paga também as provisões de 13º e férias com 1/3, o FGTS de 8%, os encargos patronais e os benefícios. Esses itens somam ao salário e formam o custo mensal total.',
      },
      {
        question: 'Qual percentual de encargos devo usar no Simples Nacional?',
        answer:
          'Nos anexos I, II, III e V, a contribuição patronal de 20% já vai dentro do DAS, então o campo de encargos fica em 0%. O FGTS de 8% continua sendo calculado.',
      },
      {
        question: 'A multa do FGTS e o aviso prévio entram no custo mensal?',
        answer:
          'Não. A calculadora mostra o custo mensal do contrato em andamento. Os valores de uma eventual demissão são tratados à parte.',
      },
    ],
  },

  'plr-ppr-liquido': {
    example: {
      paragraphs: [
        'Uma empresa paga a um funcionário R$ 9.000,00 de PLR em parcela única. A calculadora usa a tabela exclusiva da participação nos lucros, que é diferente da tabela mensal do salário. Nessa faixa, a alíquota é de 7,5% com uma parcela a deduzir de R$ 616,08, e o Imposto de Renda retido é de R$ 58,92.',
        'O valor líquido é de R$ 8.941,08. O ponto importante é que a PLR não soma com o salário do mês para efeito de alíquota: ela é tributada separadamente, e valores até R$ 8.214,40 ficam sem imposto na tabela usada pela ferramenta. Por isso, um mesmo pagamento de R$ 9.000,00, se fosse tributado como salário, teria um desconto bem diferente. Em resumo, só a parte acima de R$ 8.214,40 faz o imposto aparecer.',
      ],
      table: {
        caption: 'PLR de R$ 9.000,00 na tabela exclusiva',
        columns: ['Item', 'Valor'],
        rows: [
          ['PLR bruta', 'R$ 9.000,00'],
          ['Imposto de Renda (7,5% menos R$ 616,08)', 'R$ 58,92'],
          ['PLR líquida', 'R$ 8.941,08'],
        ],
      },
    },
    factors: [
      'O valor líquido depende do total recebido no ano a título de PLR, e não de cada parcela isolada. Se a empresa paga em duas vezes, a retenção considera o acumulado. Ele também depende da faixa da tabela: abaixo de R$ 8.214,40 não há imposto, e acima disso as alíquotas sobem por faixa, de 7,5% até 27,5%.',
      'Outros fatores são o que o acordo coletivo define como bruto, se há descontos de adiantamentos, e a tabela vigente no ano do pagamento, que pode mudar. A PLR sofre apenas o imposto da tabela exclusiva, sem o desconto de INSS, desde que cumpra as regras da lei da participação nos resultados.',
    ],
    mistakes: [
      'O deslize mais comum é comparar o resultado com a tabela mensal do salário, quando a PLR tem tabela própria. Também é frequente informar só a parcela recebida em vez do total do ano, ou incluir no bruto valores que não são PLR, como bônus pagos fora do acordo. Veja no demonstrativo de pagamento a rubrica de PLR e o valor de IR retido, e some todas as parcelas do ano.',
    ],
    faq: [
      {
        question: 'A PLR tem desconto de INSS?',
        answer:
          'Em regra não, quando paga de acordo com a lei da participação nos resultados. A calculadora considera só o Imposto de Renda da tabela exclusiva.',
      },
      {
        question: 'Por que a tabela da PLR é diferente da tabela do salário?',
        answer:
          'A PLR é tributada de forma exclusiva e separada da remuneração mensal, com tabela e faixas próprias. Por isso o imposto sobre ela não se soma ao do salário.',
      },
      {
        question: 'Se a PLR for paga em duas parcelas, o imposto muda?',
        answer:
          'O cálculo considera o total recebido no ano. A retenção em cada parcela pode ser diferente, mas o imposto final se refere à soma.',
      },
    ],
  },

  pis: {
    example: {
      paragraphs: [
        'Uma pessoa trabalhou com carteira assinada durante 8 meses no ano-base, cada um deles com pelo menos 15 dias de trabalho. O abono salarial é proporcional: o salário mínimo de R$ 1.621,00 dividido por 12 equivale a R$ 135,08 por mês trabalhado, e 8 desses meses dão R$ 1.080,67.',
        'Isso significa 8/12 do salário mínimo. Quem trabalhou os 12 meses receberia o valor cheio, de R$ 1.621,00, e quem trabalhou apenas 30 dias do ano receberia um mês, R$ 135,08. O cálculo mostra só o valor, mas o pagamento exige também que o trabalhador cumpra os requisitos de renda e inscrição. Se a pessoa não atender a algum, o resultado desta conta não se transforma em direito.',
      ],
      table: {
        caption: 'Abono salarial do exemplo (salário mínimo de R$ 1.621,00)',
        columns: ['Item', 'Valor'],
        rows: [
          ['Valor por mês trabalhado (R$ 1.621,00 / 12)', 'R$ 135,08'],
          ['Meses trabalhados no ano-base', '8'],
          ['Abono salarial estimado (8/12)', 'R$ 1.080,67'],
        ],
      },
    },
    factors: [
      'O que muda o valor é o número de meses trabalhados no ano-base, de 1 a 12. Cada mês com pelo menos 15 dias de trabalho conta como inteiro, então um vínculo que começou no dia 20 ou terminou no dia 10 pode não render aquele mês. Quem teve mais de um emprego soma os meses de todos os vínculos formais.',
      'O direito depende de requisitos que a calculadora não verifica: pelo menos 30 dias com carteira assinada no ano-base 2024, remuneração média mensal de até 2 salários mínimos, que o Ministério do Trabalho indica como R$ 2.766, e inscrição no PIS/Pasep há 5 anos ou mais. O saque do ciclo de 2026 vai até 30 de dezembro.',
    ],
    mistakes: [
      'O engano mais comum é contar meses de calendário em vez de meses com ao menos 15 dias trabalhados, ou incluir períodos sem registro formal. Outro é achar que o resultado da calculadora garante o pagamento, sem checar renda média e tempo de inscrição. Consulte a Carteira de Trabalho Digital para ver se há abono disponível e o valor, e fique atento ao prazo de saque.',
    ],
    faq: [
      {
        question: 'Quem tem direito ao abono salarial do PIS?',
        answer:
          'Quem trabalhou ao menos 30 dias com carteira no ano-base, teve remuneração média de até 2 salários mínimos e está inscrito no PIS/Pasep há 5 anos ou mais. Os dados do empregador também precisam estar corretos na RAIS ou no eSocial.',
      },
      {
        question: 'Até quando posso sacar o abono do ciclo de 2026?',
        answer:
          'O prazo informado para saque no ciclo de 2026 é 30 de dezembro. Depois dessa data, o valor não retirado pode ser perdido.',
      },
      {
        question: 'O abono é sempre de um salário mínimo inteiro?',
        answer:
          'Não. É proporcional aos meses trabalhados no ano-base: um doze avos do salário mínimo por mês. Só quem teve 12 meses recebe o valor cheio.',
      },
    ],
  },
};
