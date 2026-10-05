import type { GuideDocument } from '../../types';

export const holeriteGuide = {
  kind: 'guide',
  slug: 'como-entender-o-holerite',
  title: 'Como entender o seu holerite, linha por linha',
  description:
    'Aprenda a ler cabeçalho, vencimentos, descontos e bases do contracheque, com dois holerites comentados passo a passo.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-08',
  updatedAt: '2026-10-02',
  tags: ['salario', 'descontos', 'holerite', 'trabalho'],
  highlights: [
    {
      value: 'R$ 3.414,93',
      label: 'Líquido do 1º exemplo',
      note: 'Salário de R$ 3.850 com horas extras e descontos.',
    },
    {
      value: '8%',
      label: 'FGTS sobre a remuneração',
      note: 'Aparece no rodapé, mas é pago pela empresa.',
    },
    {
      value: '5º dia útil',
      label: 'Prazo do pagamento',
      note: 'Do mês seguinte ao trabalhado.',
    },
  ],
  sections: [
    {
      heading: 'Comece pelo cabeçalho',
      paragraphs: [
        'No alto do holerite ficam a empresa e o CNPJ, o seu nome, o cargo, a data de admissão, a competência (o mês a que o pagamento se refere) e o salário-base. Confira a competência e o tipo de folha: mensal, adiantamento, 13º, férias ou rescisão. Um holerite de adiantamento, por exemplo, não mostra todos os descontos, e isso é normal.',
        'Verifique também o salário-base e o cargo. Se o salário estiver menor que o contratado, o erro nasce aqui e se repete em todas as linhas seguintes.',
      ],
    },
    {
      heading: 'Como ler as colunas',
      paragraphs: [
        'Cada linha traz um código, uma descrição, uma referência (dias, horas ou percentual) e um valor em uma de duas colunas: vencimentos, que somam ao que você recebe, ou descontos, que reduzem. O total de vencimentos é o salário bruto; o bruto menos os descontos é o líquido, o valor que cai na conta.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 3.850 com horas extras',
      paragraphs: [
        'A hora normal vale R$ 3.850 ÷ 220 = R$ 17,50. Foram feitas 10 horas extras a 50%, que valem R$ 26,25 cada, totalizando R$ 262,50. Em um mês com 26 dias úteis e 4 repousos, o descanso semanal remunerado sobre as extras é R$ 262,50 ÷ 26 × 4 = R$ 40,38.',
        'O INSS incide sobre todos os vencimentos, R$ 4.152,88, e dá R$ 386,95. O vale-transporte é descontado em 6% do salário-base: R$ 231,00. O plano de saúde é uma mensalidade de R$ 120,00. O Imposto de Renda é zero, porque a remuneração fica abaixo de R$ 5.000.',
      ],
      table: {
        caption: 'Holerite de um salário de R$ 3.850',
        columns: ['Descrição', 'Referência', 'Vencimentos', 'Descontos'],
        rows: [
          ['Salário-base', '30 dias', 'R$ 3.850,00', ''],
          ['Horas extras 50%', '10 h', 'R$ 262,50', ''],
          ['DSR sobre horas extras', '4 repousos', 'R$ 40,38', ''],
          ['INSS', 'tabela progressiva', '', 'R$ 386,95'],
          ['Vale-transporte', '6%', '', 'R$ 231,00'],
          ['Plano de saúde', 'mensalidade', '', 'R$ 120,00'],
          ['Totais', '', 'R$ 4.152,88', 'R$ 737,95'],
          ['Líquido a receber', '', '', 'R$ 3.414,93'],
        ],
      },
    },
    {
      heading: 'O rodapé: bases de cálculo e FGTS',
      paragraphs: [
        'No fim do holerite ficam as bases. A base do INSS é a soma dos vencimentos sujeitos à contribuição (aqui, R$ 4.152,88). A base do FGTS é a mesma, e o FGTS do mês, 8%, é de R$ 332,23. Ele é depositado pela empresa na sua conta do FGTS e não é descontado de você; se aparecer como desconto, procure o RH.',
        'A base do IRRF é a remuneração menos INSS e menos R$ 189,59 por dependente. Neste holerite, R$ 4.152,88 − R$ 386,95 = R$ 3.765,93. Se o imposto está zerado, confirme se o salário bruto realmente está abaixo de R$ 5.000.',
      ],
    },
    {
      heading: 'Exemplo 2: salário de R$ 6.200 com um dependente',
      paragraphs: [
        'Quando o salário passa de R$ 5.000, o IRRF aparece. O INSS é R$ 669,51. A base do IRRF é R$ 6.200,00 − R$ 669,51 − R$ 189,59 = R$ 5.340,90. A tabela cobra R$ 560,02, e a redução da Lei 15.270/2025 abate R$ 153,12, deixando R$ 406,90 de IRRF.',
        'Se houver um adiantamento de R$ 2.000,00 pago no meio do mês, ele aparece como desconto no holerite mensal. O líquido do mês é R$ 6.200,00 − R$ 669,51 − R$ 406,90 = R$ 5.123,59; descontado o adiantamento, restam R$ 3.123,59 a receber.',
      ],
    },
    {
      heading: 'Erros comuns na conferência',
      paragraphs: [
        'Os problemas mais frequentes são: horas extras trabalhadas que não aparecem, DSR sobre extras esquecido, desconto de vale-transporte acima de 6% do salário-base, INSS calculado sobre uma base menor do que os vencimentos e descontos sem identificação. A CLT só permite descontar adiantamentos, valores previstos em lei ou em norma coletiva e danos causados quando previstos em contrato ou causados de forma dolosa.',
        'Guarde os holerites. Eles servem de prova de salário e de desconto em ações trabalhistas, em pedidos de crédito e na declaração de Imposto de Renda.',
      ],
    },
    {
      heading: 'Quando procurar o RH, o sindicato ou o ministério',
      paragraphs: [
        'O salário deve ser pago até o quinto dia útil do mês seguinte ao trabalhado. Se algo estiver errado, peça por escrito ao RH uma explicação linha por linha e anexe seu controle de ponto. Sem resposta, procure o sindicato da categoria ou o Ministério do Trabalho e Emprego, e consulte um advogado trabalhista se o prejuízo for grande.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que significa a coluna referência?',
      answer:
        'É a medida usada no cálculo da linha: dias trabalhados, número de horas, percentual ou quantidade de parcelas.',
    },
    {
      question: 'O FGTS é descontado do meu salário?',
      answer:
        'Não. Os 8% de FGTS são pagos pela empresa, além do salário. No holerite ele aparece como informação, não como desconto.',
    },
    {
      question: 'A empresa pode descontar qualquer valor do holerite?',
      answer:
        'Não. Só podem ser descontados adiantamentos, valores previstos em lei ou norma coletiva e danos nas condições da CLT. Descontos de benefícios dependem de autorização.',
    },
    {
      question: 'Por que meu salário bruto é diferente do contratado?',
      answer:
        'Porque o bruto soma horas extras, comissões e adicionais do mês, e subtrai faltas. Confira linha por linha.',
    },
    {
      question: 'Posso pedir holerites antigos?',
      answer:
        'Sim. Peça ao RH ou à folha de pagamento. Muitas empresas guardam as cópias em um portal ou aplicativo do colaborador.',
    },
  ],
  sources: [
    {
      label: 'CLT: arts. 459, 462 e 464 (pagamento e descontos do salário)',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'INSS: tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies GuideDocument;
