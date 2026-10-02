import type { CalculatorEditorialMap } from './types';

export const editorialNegocios: CalculatorEditorialMap = {
  'das-limite-mei': {
    example: {
      paragraphs: [
        'Imagine um MEI que, de janeiro até hoje, emitiu notas e recebeu R$ 5.200,00. Ele digita esse valor no campo de faturamento acumulado no ano e a calculadora compara a soma com o limite anual de R$ 81.000,00.',
        'O resultado é 6,42% do limite usado, e ainda sobram R$ 75.800,00 para faturar até o fim do ano. Como o limite anual dividido por 12 dá R$ 6.750,00 por mês, quem fatura menos que isso em média está andando com folga.',
        'Na prática, o número serve como termômetro: enquanto o percentual estiver baixo, não há motivo para preocupação com o desenquadramento; conforme ele se aproxima de 100%, vale conversar com o contador.',
      ],
      table: {
        caption: 'Uso do limite anual do MEI com R$ 5.200,00 faturados',
        columns: ['Item', 'Valor'],
        rows: [
          ['Limite anual', 'R$ 81.000,00'],
          ['Faturamento até agora', 'R$ 5.200,00'],
          ['Ainda disponível', 'R$ 75.800,00'],
        ],
      },
    },
    factors: [
      'O que pesa aqui é o faturamento bruto acumulado no ano, somando todas as vendas e serviços, e não o lucro. Despesas, impostos e custos não são descontados antes de comparar com o limite. Valores recebidos em um mês e emitidos em outro devem seguir o critério que sua contabilidade ou o aplicativo MEI adota.',
      'A guia mensal do MEI não depende do quanto você faturou dentro do limite: ela é fixa, de R$ 81,05, com mais R$ 1,00 de ICMS para comércio e indústria e R$ 5,00 de ISS para serviços. Por isso esta calculadora olha para o limite, e não para o valor do DAS.',
    ],
    mistakes: [
      'O erro mais comum é informar só o que caiu na conta e esquecer vendas no cartão a receber, notas emitidas e valores de outro CNPJ ou de outra atividade do mesmo MEI. Também é frequente confundir faturamento com lucro. Confira o total no relatório mensal de receitas brutas e na declaração anual do MEI, que é o documento que vale para o limite.',
    ],
    faq: [
      {
        question: 'O que acontece se eu passar de R$ 81.000,00 no ano?',
        answer:
          'Depende de quanto passou. Até 20% acima do limite, o MEI continua no regime naquele ano e paga uma DAS complementar sobre o excedente. Acima disso, o desenquadramento vale desde 1º de janeiro e os tributos são recalculados.',
      },
      {
        question: 'O limite de R$ 81.000,00 conta o lucro ou a receita bruta?',
        answer:
          'Conta a receita bruta, ou seja, tudo o que o MEI faturou, antes de descontar custos e despesas.',
      },
      {
        question: 'Percentual baixo significa que não preciso me preocupar?',
        answer:
          'Em geral significa que há margem, mas o ritmo importa. Se o faturamento é concentrado no segundo semestre, o percentual pode saltar rápido; acompanhe todo mês.',
      },
    ],
  },

  'fator-r': {
    example: {
      paragraphs: [
        'Uma empresa de serviços pagou R$ 9.000,00 de folha (salários, pró-labore, encargos e FGTS) nos últimos 12 meses e teve R$ 40.000,00 de receita bruta no mesmo período. Esses dois números entram nos campos da calculadora.',
        'A divisão dá Fator R de 22,5%, abaixo do corte de 28%. Para as atividades sujeitas à regra, isso significa tributação pelo Anexo V, de alíquotas maiores que as do Anexo III.',
        'Para chegar a 28% com essa mesma receita, a folha precisaria ser de R$ 11.200,00, ou seja, R$ 2.200,00 a mais. Se isso compensa depende do custo adicional de folha contra a economia de imposto, conta que um contador deve fazer com os números reais.',
      ],
    },
    factors: [
      'Só dois valores mexem no resultado: a folha e a receita bruta dos mesmos 12 meses. Folha maior ou receita menor elevam o percentual. Entram salários, pró-labore, encargos patronais e FGTS; ficam de fora, por exemplo, distribuição de lucros e retiradas que não sejam pró-labore.',
      'O corte é de 28%: com esse valor ou mais, as atividades sujeitas ao Fator R seguem o Anexo III; abaixo, o Anexo V. Nem toda atividade de serviços entra nessa regra, e a janela de 12 meses anda a cada mês, então o resultado pode mudar de uma apuração para outra.',
    ],
    mistakes: [
      'Quem preenche costuma usar períodos diferentes para folha e receita, ou acumular o ano civil em vez dos 12 meses anteriores à apuração. Outro deslize é esquecer o pró-labore dos sócios, que conta como folha, ou incluir o lucro distribuído, que não conta. Confira os valores na folha de pagamento, nas guias de FGTS e GPS e no extrato do PGDAS-D.',
    ],
    faq: [
      {
        question: 'Qual Fator R separa o Anexo III do Anexo V?',
        answer:
          'O corte é 28%. Com 28% ou mais, as atividades sujeitas à regra são tributadas pelo Anexo III; abaixo disso, pelo Anexo V.',
      },
      {
        question: 'Pró-labore entra no cálculo da folha?',
        answer:
          'Sim. A folha considerada inclui salários, pró-labore, encargos e FGTS pagos nos últimos 12 meses.',
      },
      {
        question: 'Posso usar o Fator R do ano passado?',
        answer:
          'Não é o ideal. A conta usa a folha e a receita dos 12 meses anteriores à apuração, e esse período se desloca todo mês.',
      },
    ],
  },

  'pro-labore': {
    example: {
      paragraphs: [
        'Uma sócia define para si um pró-labore bruto de R$ 4.000,00 por mês e não tem dependentes para fins de imposto de renda. Ela informa os dois dados e a calculadora desconta o que sai do bolso dela.',
        'O INSS do sócio é de 11% sobre R$ 4.000,00, o que dá R$ 440,00. Nessa faixa o IRRF fica zerado, porque o valor está isento pela tabela mensal de 2026. O líquido é de R$ 3.560,00.',
        'Esse é o valor que chega à conta da sócia. A contribuição patronal que a empresa pode recolher sobre o pró-labore, dependendo do regime tributário, não entra nessa conta.',
      ],
      table: {
        caption: 'Pró-labore de R$ 4.000,00, sem dependentes',
        columns: ['Item', 'Valor'],
        rows: [
          ['Pró-labore bruto', 'R$ 4.000,00'],
          ['INSS do sócio (11%)', 'R$ 440,00'],
          ['IRRF', 'R$ 0,00 (isento)'],
          ['Pró-labore líquido', 'R$ 3.560,00'],
        ],
      },
    },
    factors: [
      'O INSS de 11% incide sobre uma base que fica entre o salário mínimo (R$ 1.621,00) e o teto do INSS (R$ 8.475,55). Retirar menos que o mínimo não reduz a base: um pró-labore de R$ 1.000,00, por exemplo, paga INSS sobre R$ 1.621,00, R$ 178,31.',
      'O IRRF depende do valor depois do INSS e do número de dependentes, que reduzem a base. Quanto maior o pró-labore, maior a parcela do imposto de renda, enquanto o INSS para de crescer ao chegar ao teto. Lucros distribuídos seguem regra separada, tratada pela contabilidade.',
    ],
    mistakes: [
      'Um engano comum é achar que o pró-labore pode ser zero ou simbólico sem consequência, quando sócios que administram a empresa costumam ter de recolher o INSS sobre ele. Também se confunde o bruto com o que cai na conta. Veja o valor definido em ata ou contrato, o recibo de pró-labore e a guia do INSS (GPS ou DAS, conforme o regime) para conferir.',
    ],
    faq: [
      {
        question: 'Pró-labore é o mesmo que distribuição de lucros?',
        answer:
          'Não. O pró-labore é a remuneração pelo trabalho do sócio e tem INSS e IRRF; a distribuição de lucros segue outra regra e é tratada pela contabilidade.',
      },
      {
        question: 'Por que o INSS não cai se eu retirar menos que o mínimo?',
        answer:
          'Porque a base de cálculo do INSS tem piso no salário mínimo. A calculadora usa R$ 1.621,00 como base mínima.',
      },
      {
        question: 'A empresa paga algum encargo além dos 11% descontados?',
        answer:
          'Dependendo do regime tributário, sim: pode haver contribuição patronal. Ela não sai do sócio e por isso não entra neste cálculo.',
      },
    ],
  },

  'inss-autonomo': {
    example: {
      paragraphs: [
        'Um autônomo que fatura cerca de R$ 3.000,00 por mês escolhe contribuir pelo plano normal, de 20%. Ele informa a base de R$ 3.000,00 e a alíquota de 20% na calculadora.',
        'A contribuição mensal sai em R$ 600,00. Em outras palavras, vinte por cento da base escolhida vão para o INSS, e o número é o mesmo todo mês enquanto a base não mudar.',
        'Para comparar, o plano simplificado de 11% incide sempre sobre o salário mínimo e resultaria em R$ 178,31 por mês. A diferença entre os dois planos é o que cada um cobre de benefícios, ponto que você deve verificar no site do INSS antes de decidir.',
      ],
      table: {
        caption: 'Contribuição pelo plano de 20%',
        columns: ['Item', 'Valor'],
        rows: [
          ['Base de contribuição', 'R$ 3.000,00'],
          ['Alíquota', '20%'],
          ['Contribuição mensal', 'R$ 600,00'],
        ],
      },
    },
    factors: [
      'Duas escolhas definem o valor: a base e a alíquota. A base pode ir do salário mínimo (R$ 1.621,00) ao teto do INSS (R$ 8.475,55); no teto, a contribuição de 20% chega a R$ 1.695,11. Informar mais que o teto não aumenta a conta, porque a calculadora limita a base.',
      'As alíquotas de 5% e 11% incidem sempre sobre o salário mínimo, independentemente da renda declarada. A de 20% é a única em que você escolhe uma base maior para fortalecer o histórico contributivo.',
    ],
    mistakes: [
      'Muita gente digita a renda anual ou o faturamento bruto com custos em vez da renda mensal que pretende usar como base. Também é comum aplicar 11% sobre uma base maior que o mínimo, o que não existe nesse plano. Confira a alíquota, a competência e o código de pagamento da GPS, ou do carnê, antes de recolher.',
    ],
    faq: [
      {
        question: 'Posso pagar 11% sobre uma base de R$ 3.000,00?',
        answer:
          'Não. Nos planos de 5% e 11% a contribuição incide sempre sobre o salário mínimo. Para contribuir sobre uma base maior, a alíquota é a de 20%.',
      },
      {
        question: 'Qual é o limite máximo da base de contribuição?',
        answer:
          'O teto do INSS, de R$ 8.475,55. Rendas acima disso contribuem como se fossem esse valor.',
      },
      {
        question: 'Qual plano gera mais benefícios?',
        answer:
          'Isso varia, pois os planos de 5% e 11% têm restrições sobre alguns benefícios e sobre a contagem de tempo. Consulte as regras no Meu INSS antes de optar.',
      },
    ],
  },

  'simples-nacional': {
    example: {
      paragraphs: [
        'Uma empresa de serviços teve R$ 30.000,00 de receita no mês e R$ 360.000,00 nos 12 meses anteriores. A folha de salários desse período foi de R$ 90.000,00. Na calculadora, o anexo informado é o 3.',
        'Com esses dados, o Fator R é de 25%, abaixo de 28%, e o cálculo passa a usar o Anexo V. A receita de 12 meses cai na 2ª faixa, com alíquota nominal de 18% e parcela a deduzir de R$ 4.500,00. A alíquota efetiva fica em 16,75% e o DAS estimado do mês é de R$ 5.025,00.',
        'O número mostra quanto do faturamento do mês vai para o imposto único. Se a folha fosse maior e o Fator R chegasse a 28%, o Anexo III poderia se aplicar, o que a calculadora refaz sozinha.',
      ],
      table: {
        caption: 'Como o DAS de R$ 5.025,00 foi formado',
        columns: ['Etapa', 'Valor'],
        rows: [
          ['Anexo aplicado', 'Anexo V (Fator R de 25%)'],
          ['Receita dos últimos 12 meses', 'R$ 360.000,00'],
          ['Faixa', '2ª faixa'],
          ['Alíquota nominal', '18%'],
          ['Parcela a deduzir', 'R$ 4.500,00'],
          ['Alíquota efetiva', '16,75%'],
          ['DAS estimado', 'R$ 5.025,00'],
        ],
      },
    },
    factors: [
      'A faixa vem da receita dos 12 meses anteriores, não da do mês. A alíquota efetiva é (receita de 12 meses x alíquota nominal - parcela a deduzir) dividido pela receita de 12 meses, e é ela que se aplica sobre o faturamento do mês. Por isso a mesma empresa paga percentuais diferentes ao subir de faixa.',
      'O anexo também pesa muito. Comércio, indústria, serviços e construção têm tabelas próprias. Em serviços, a folha informada define pelo Fator R se vale o Anexo III ou o V. Outro ponto: ISS e ICMS têm sublimites estaduais, e esta é uma estimativa pela tabela geral.',
    ],
    mistakes: [
      'Erros típicos: incluir o mês atual nos 12 meses de receita, confundir o anexo da atividade, deixar a folha em branco em serviços ou considerar só salários e esquecer pró-labore e encargos. Para conferir, compare com o extrato do PGDAS-D, onde constam a receita acumulada, o anexo e a alíquota efetiva do período.',
    ],
    faq: [
      {
        question: 'A receita dos 12 meses inclui o mês que estou calculando?',
        answer:
          'Não. A soma deve ser dos 12 meses anteriores ao mês de apuração, sem o mês atual.',
      },
      {
        question: 'Por que a calculadora usou o Anexo V se informei o 3?',
        answer:
          'Porque, quando a folha é informada em serviços, o Fator R decide o anexo. Com Fator R abaixo de 28%, o cálculo muda para o Anexo V.',
      },
      {
        question: 'O valor calculado é o mesmo da guia do PGDAS-D?',
        answer:
          'Pode diferir, pois a calculadora usa a tabela geral e não considera sublimites estaduais de ISS e ICMS nem particularidades da atividade.',
      },
    ],
  },

  'excesso-limite-mei': {
    example: {
      paragraphs: [
        'Um microempreendedor fechou o ano com R$ 92.000,00 de faturamento acumulado. Ele informa esse total e a calculadora o compara ao limite de R$ 81.000,00.',
        'O excesso é de R$ 11.000,00, o que representa 13,58% acima do limite. Como está dentro da margem de 20%, que corresponde a R$ 97.200,00 de faturamento, ele continua no MEI naquele ano e paga a DAS complementar sobre o que passou. O desenquadramento vale a partir de 1º de janeiro do ano seguinte.',
        'Se o mesmo MEI tivesse faturado R$ 98.000,00, o excesso passaria de 20% e o desenquadramento valeria desde 1º de janeiro do próprio ano, com os tributos recalculados.',
      ],
      table: {
        caption: 'Faturamento de R$ 92.000,00 contra o limite do MEI',
        columns: ['Item', 'Valor'],
        rows: [
          ['Faturamento no ano', 'R$ 92.000,00'],
          ['Limite anual do MEI', 'R$ 81.000,00'],
          ['Excesso', 'R$ 11.000,00'],
          ['Excesso em relação ao limite', '13,58%'],
        ],
      },
    },
    factors: [
      'O percentual acima do limite é o que separa os dois cenários. Até 20% (R$ 97.200,00), o MEI segue no regime no ano em curso e recolhe a DAS complementar; passando de 20%, o desenquadramento retroage ao início do ano. A conta usa o faturamento bruto acumulado, e não o lucro.',
      'O mês em que a ultrapassagem ocorre, a atividade e o tipo de nota também importam para os tributos devidos depois. Esta calculadora mostra a dimensão do excesso, mas o recolhimento e a migração para outro regime são tratados no Portal do Simples Nacional.',
    ],
    mistakes: [
      'Muitos MEIs só olham o total do fim do ano e descobrem a ultrapassagem tarde, ou deixam de somar notas de clientes diferentes e vendas por maquininha. Outro erro é supor que passar do limite é sempre desenquadramento imediato, quando há tolerância de 20%. Confirme o total no relatório de receitas brutas e no Portal do Simples Nacional.',
    ],
    faq: [
      {
        question: 'Ultrapassar o limite faz eu sair do MEI na hora?',
        answer:
          'Só se o excesso for maior que 20%. Até esse percentual, você permanece no MEI no ano e paga a DAS complementar, com o desenquadramento valendo no 1º de janeiro seguinte.',
      },
      {
        question: 'Quanto representa 20% acima do limite?',
        answer:
          'R$ 97.200,00 de faturamento no ano, ou seja, R$ 16.200,00 acima dos R$ 81.000,00.',
      },
      {
        question: 'Preciso do contador se o excesso passar de 20%?',
        answer:
          'É recomendável, porque os tributos são recalculados desde janeiro e a migração para outro regime tem prazos e obrigações próprias.',
      },
    ],
  },

  'das-mei-atraso': {
    example: {
      paragraphs: [
        'Uma guia do DAS no valor de R$ 86,05 venceu em 20 de julho de 2026 e só será paga em 15 de outubro de 2026. Esses são os três campos que a calculadora pede: valor, vencimento e data de pagamento.',
        'São 87 dias de atraso. A multa de 0,33% ao dia chegaria a mais de 28%, mas o teto é de 20%, então vale R$ 17,21. Os juros somam 3,17%: Selic de agosto (1,09%) e de setembro (1,08%), mais 1% pelo mês do pagamento, o que dá R$ 2,73. O total a pagar é de R$ 105,99.',
        'Em resumo, a demora de quase três meses acrescentou cerca de R$ 19,94 à guia. Como a multa atinge o teto com 61 dias, atrasar mais que isso passa a custar apenas os juros.',
      ],
      table: {
        caption: 'Guia de R$ 86,05 paga com 87 dias de atraso',
        columns: ['Item', 'Valor'],
        rows: [
          ['Valor original do DAS', 'R$ 86,05'],
          ['Multa de mora (20%)', 'R$ 17,21'],
          ['Juros (3,17%)', 'R$ 2,73'],
          ['Total a pagar', 'R$ 105,99'],
        ],
      },
    },
    factors: [
      'A multa cresce 0,33% por dia e para em 20%, o que acontece no 61º dia de atraso. Já os juros dependem de quantos meses separam o vencimento do pagamento: soma-se a Selic acumulada dos meses intermediários e mais 1% no mês em que você paga. Pagar logo no mês seguinte ao vencimento reduz bastante essa parte.',
      'O valor original da guia também muda o resultado, já que a multa e os juros são percentuais sobre ele. A calculadora traz a Selic oficial até setembro de 2026; meses posteriores usam a última taxa conhecida como estimativa.',
    ],
    mistakes: [
      'É comum informar como vencimento o dia em que o MEI percebeu a dívida, quando o correto é o dia 20 do mês seguinte ao da apuração. Outro engano é pagar a guia antiga em vez de emitir uma atualizada, ou tentar quitar vários meses de uma vez com o valor errado. Gere o boleto atualizado no Portal do Simples Nacional ou no aplicativo MEI, que usa a data exata do pagamento.',
    ],
    faq: [
      {
        question: 'A multa pode passar de 20%?',
        answer:
          'Não. Ela é de 0,33% por dia de atraso e limitada a 20% do valor original.',
      },
      {
        question: 'Como são calculados os juros?',
        answer:
          'Pela Selic acumulada nos meses entre o vencimento e o pagamento, mais 1% no mês em que a guia é paga.',
      },
      {
        question: 'Devo pagar o valor da calculadora ou o do portal?',
        answer:
          'Pague o da guia atualizada emitida no Portal do Simples Nacional ou no aplicativo MEI. A calculadora é uma estimativa e o sistema usa a data exata do pagamento.',
      },
    ],
  },

  bpc: {
    example: {
      paragraphs: [
        'Uma família de três pessoas vive com R$ 1.200,00 de renda mensal. Na calculadora, esses dois números entram nos campos de renda familiar e de pessoas da família.',
        'A renda por pessoa fica em R$ 400,00, abaixo do limite padrão de R$ 405,25, que é um quarto do salário mínimo de R$ 1.621,00. Pelo critério de renda, a família está dentro, por uma margem de apenas R$ 5,25 por pessoa.',
        'Isso não garante o benefício: falta comprovar 65 anos ou mais, ou deficiência de longo prazo, e a inscrição no CadÚnico. Se concedido, o BPC é de um salário mínimo, R$ 1.621,00.',
      ],
      table: {
        caption: 'Renda por pessoa de uma família de três',
        columns: ['Item', 'Valor'],
        rows: [
          ['Renda familiar mensal', 'R$ 1.200,00'],
          ['Pessoas na família', '3'],
          ['Renda por pessoa', 'R$ 400,00'],
          ['Limite (1/4 do salário mínimo)', 'R$ 405,25'],
        ],
      },
    },
    factors: [
      'O número de pessoas pesa tanto quanto a renda. Com três pessoas, a renda familiar máxima pelo critério é de R$ 1.215,75; com a mesma renda de R$ 1.200,00 e só duas pessoas, o valor por pessoa subiria para R$ 600,00 e passaria do limite. Por isso quem mora junto precisa ser contado corretamente.',
      'Nem toda renda entra na conta oficial, e a definição de família segue regras próprias do INSS e do CadÚnico. A calculadora faz só a divisão simples e compara com R$ 405,25; a análise de idade, deficiência e demais critérios é do INSS.',
    ],
    mistakes: [
      'Quem preenche costuma esquecer de contar algum morador, incluir renda que a análise oficial não considera ou usar o valor de um mês atípico. Também se supõe que estar abaixo do limite basta para receber, quando o BPC exige comprovar idade ou deficiência. Confira os dados no CadÚnico e no Meu INSS antes de pedir o benefício.',
    ],
    faq: [
      {
        question: 'Qual é o limite de renda por pessoa do BPC?',
        answer:
          'O limite padrão é de R$ 405,25 por pessoa, um quarto do salário mínimo de R$ 1.621,00.',
      },
      {
        question: 'Estar abaixo do limite garante o BPC?',
        answer:
          'Não. Também é preciso ter 65 anos ou mais, ou deficiência de longo prazo, e estar inscrito no CadÚnico. A análise final é do INSS.',
      },
      {
        question: 'Quanto vale o BPC quando é concedido?',
        answer: 'Um salário mínimo, hoje R$ 1.621,00 por mês.',
      },
    ],
  },

  'bolsa-familia': {
    example: {
      paragraphs: [
        'Uma família de quatro pessoas tem uma criança de 0 a 6 anos e um adolescente de 7 a 18 anos. Na calculadora, ela informa 4 pessoas, 1 criança pequena e 1 integrante na segunda categoria.',
        'A Renda de Cidadania paga R$ 164,00 por pessoa, o que dá R$ 656,00. O Benefício Primeira Infância soma R$ 173,00 pela criança pequena e o Variável Familiar, R$ 58,00 pelo adolescente. O total estimado é de R$ 887,00 por mês, já acima do piso de R$ 691,00, então o Benefício Complementar não é necessário.',
        'Já uma pessoa que mora sozinha somaria apenas R$ 164,00, e o complemento elevaria o valor ao mínimo de R$ 691,00 por família.',
      ],
      table: {
        caption: 'Composição do benefício, valores de outubro de 2026',
        columns: ['Componente', 'Cálculo', 'Valor'],
        rows: [
          ['Renda de Cidadania', '4 x R$ 164,00', 'R$ 656,00'],
          ['Primeira Infância', '1 x R$ 173,00', 'R$ 173,00'],
          ['Variável Familiar', '1 x R$ 58,00', 'R$ 58,00'],
          ['Total estimado', 'soma dos três', 'R$ 887,00'],
        ],
      },
    },
    factors: [
      'O valor muda com o tamanho da família e com a composição. Cada pessoa soma R$ 164,00; crianças de 0 a 6 anos acrescentam R$ 173,00 e adolescentes de 7 a 18 anos, gestantes e nutrizes, R$ 58,00 cada. Quando a soma fica abaixo de R$ 691,00, o Benefício Complementar completa até esse mínimo.',
      'A calculadora estima o valor, mas quem recebe e quanto é definido pelo CadÚnico e pelo Ministério do Desenvolvimento e Assistência Social. Renda, cadastro atualizado e regras de permanência ficam fora desta conta.',
    ],
    mistakes: [
      'Quem preenche costuma contar pessoas que não moram na casa ou não estão no CadÚnico, ou colocar a criança de 6 anos na categoria errada. Também é comum achar que o resultado é o valor garantido do mês. Confira a composição familiar no CadÚnico e o valor liberado no aplicativo Bolsa Família.',
    ],
    faq: [
      {
        question: 'Qual é o valor mínimo do Bolsa Família por família?',
        answer:
          'R$ 691,00. Se a soma dos benefícios fica abaixo disso, o Benefício Complementar completa a diferença.',
      },
      {
        question: 'Quem conta como adicional de R$ 58,00?',
        answer:
          'Adolescentes de 7 a 18 anos, gestantes e nutrizes, com R$ 58,00 para cada pessoa que se enquadra.',
      },
      {
        question: 'A calculadora diz se tenho direito ao benefício?',
        answer:
          'Não. Ela só estima o valor pela composição da família; o direito é definido pelo CadÚnico e pelo Ministério.',
      },
    ],
  },

  ipva: {
    example: {
      paragraphs: [
        'Um carro com valor venal de R$ 60.000,00 está em um estado que cobra alíquota de 4%. O dono informa o valor, a alíquota, 12 meses e 3 parcelas.',
        'O IPVA do ano fica em R$ 2.400,00 em cota única, sem desconto. Dividido em 3 parcelas iguais, cada uma sai por R$ 800,00. O resultado mostra quanto o imposto pesa no orçamento e como ele se distribui no calendário.',
        'Se o veículo fosse novo e o estado cobrasse só 6 meses no primeiro ano, o campo de meses reduziria o valor para R$ 1.200,00.',
      ],
      table: {
        caption: 'IPVA de um veículo de R$ 60.000,00 com alíquota de 4%',
        columns: ['Forma', 'Valor'],
        rows: [
          ['Cota única, sem desconto', 'R$ 2.400,00'],
          ['Em 3 parcelas iguais', '3 x R$ 800,00'],
        ],
      },
    },
    factors: [
      'O imposto é o valor venal vezes a alíquota estadual, que varia por estado e por tipo de veículo (em geral entre 1% e 4%). O valor venal vem da tabela usada pela Secretaria da Fazenda, normalmente baseada na FIPE, e muda a cada ano conforme a desvalorização do carro.',
      'Quanto aos meses, o primeiro ano de um veículo novo pode ser proporcional em muitos estados. Isenções, como para veículos antigos ou pessoas com deficiência, o número de parcelas e o desconto da cota única são definidos por cada estado; a calculadora não aplica o desconto.',
    ],
    mistakes: [
      'O deslize mais frequente é usar o preço pago pelo carro em vez do valor venal da tabela do estado, ou aplicar a alíquota de outro estado ou de outro tipo de veículo. Também se esquece que a data de vencimento depende da placa. Confira alíquota, valor venal, parcelas e desconto no site da Secretaria da Fazenda do seu estado.',
    ],
    faq: [
      {
        question: 'Qual alíquota devo usar?',
        answer:
          'A do seu estado para o tipo de veículo, que consta no site da Secretaria da Fazenda. A faixa geral é de 1% a 4%, mas varia.',
      },
      {
        question: 'A calculadora aplica o desconto da cota única?',
        answer:
          'Não. Muitos estados oferecem esse desconto até uma data do calendário, então confira no site estadual o valor final.',
      },
      {
        question: 'Veículo antigo paga IPVA?',
        answer:
          'Depende do estado. Alguns concedem isenção a partir de certa idade do veículo, e há isenções também para pessoas com deficiência.',
      },
    ],
  },
};
