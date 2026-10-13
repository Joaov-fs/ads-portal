import type { GuideDocument } from '../../types';

export const guideSalarioMaternidade = {
  kind: 'guide',
  slug: 'salario-maternidade-quem-recebe-e-como-calcular',
  title:
    'Salário-maternidade: quem recebe, por quanto tempo e como calcular o valor',
  description:
    'Quem tem direito ao salário-maternidade, quanto tempo dura, como o valor é calculado para CLT, MEI e autônoma e o que muda na Empresa Cidadã.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['salario-maternidade', 'inss', 'beneficios', 'licenca-maternidade'],
  featuredCalculators: ['salario-maternidade', 'salario-liquido', 'inss'],
  highlights: [
    {
      value: '120 dias',
      label: 'Duração padrão',
      note: 'A Empresa Cidadã estende por mais 60 dias.',
    },
    {
      value: 'R$ 12.000',
      label: 'Total para salário de R$ 3.000',
      note: 'CLT, em 4 parcelas mensais de R$ 3.000.',
    },
    {
      value: '10 meses',
      label: 'Carência para MEI e autônoma',
      note: 'Empregada CLT não tem carência.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito e a carência',
      paragraphs: [
        'O salário-maternidade é pago por 120 dias a quem tem o filho, adota ou recebe a guarda judicial para fins de adoção. O direito vale para empregadas CLT, domésticas, trabalhadoras avulsas, contribuintes individuais, MEI, seguradas facultativas e seguradas especiais.',
        'A empregada CLT, a doméstica e a avulsa não têm carência. Contribuinte individual, MEI e facultativa precisam de 10 contribuições mensais em dia. Em parto antecipado, o prazo de carência é reduzido na mesma proporção da antecipação.',
      ],
    },
    {
      heading: 'Como o valor é calculado',
      paragraphs: [
        'Para a empregada CLT, o valor é a remuneração integral do mês, e a empresa paga e depois compensa com o INSS. Para a MEI, o valor é de um salário mínimo por mês, porque é essa a base da contribuição. Para a contribuinte individual, é a média dos últimos salários de contribuição.',
        'A conta é simples: valor mensal multiplicado pelos meses de afastamento. Com 4 meses, a CLT com salário de R$ 3.000,00 recebe R$ 12.000,00; a MEI, com salário mínimo de R$ 1.621,00, recebe R$ 6.484,00.',
      ],
      table: {
        caption: 'Salário-maternidade de 120 dias, valores brutos',
        columns: ['Situação', 'Valor mensal', 'Meses', 'Total'],
        rows: [
          ['CLT com salário de R$ 3.000', 'R$ 3.000,00', '4', 'R$ 12.000,00'],
          ['MEI, com um salário mínimo', 'R$ 1.621,00', '4', 'R$ 6.484,00'],
          ['CLT na Empresa Cidadã', 'R$ 3.000,00', '6', 'R$ 18.000,00'],
        ],
      },
    },
    {
      heading: 'Empresa Cidadã: 180 dias',
      paragraphs: [
        'Se a empresa participa do programa Empresa Cidadã, a licença passa de 120 para 180 dias. Os 60 dias a mais são pagos pela empresa, que depois os deduz do Imposto de Renda. Só a empregada de empresa que aderiu ao programa tem esse direito, e é preciso pedir até o fim do primeiro mês depois do parto.',
        'Com salário de R$ 3.000,00 e 6 meses, o total fica em R$ 18.000,00. Vale perguntar ao RH se a sua empresa participa antes de planejar o retorno.',
      ],
    },
    {
      heading: 'Quando começa e outros detalhes',
      paragraphs: [
        'O afastamento pode começar até 28 dias antes do parto, mediante atestado médico, e vai até 91 dias depois, no padrão de 120 dias. Em adoção, o prazo de 120 dias vale independentemente da idade da criança. No caso de aborto não criminoso, o salário-maternidade é de 2 semanas.',
        'A gestante tem estabilidade no emprego desde a confirmação da gravidez até 5 meses depois do parto, o que protege de demissão sem justa causa nesse período.',
      ],
    },
    {
      heading: 'Como pedir',
      paragraphs: [
        'A empregada CLT pede o afastamento à empresa, com atestado médico, e a empresa paga o benefício. MEI, autônoma e facultativa pedem no Meu INSS, pelo site ou aplicativo, com certidão de nascimento ou documento da adoção e comprovação das contribuições. O pedido pode ser feito a partir do 8º mês de gestação.',
      ],
    },
    {
      heading: 'Quando procurar ajuda',
      paragraphs: [
        'Se a empresa se recusar a pagar, se o INSS negar por carência ou se o valor vier abaixo do esperado, peça a memória de cálculo e guarde holerites, guias de contribuição e atestados. Persistindo o problema, procure o sindicato, a Defensoria Pública ou o Ministério do Trabalho e Emprego.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quantos dias dura o salário-maternidade?',
      answer:
        '120 dias na regra geral, e 180 dias para empregada de empresa que participa do programa Empresa Cidadã.',
    },
    {
      question: 'MEI tem direito ao salário-maternidade?',
      answer:
        'Sim, desde que tenha 10 contribuições mensais em dia. O valor é de um salário mínimo por mês.',
    },
    {
      question: 'A empregada CLT precisa de carência?',
      answer:
        'Não. A empregada CLT, a doméstica e a avulsa têm direito desde o primeiro dia de contribuição.',
    },
    {
      question: 'Mãe adotiva recebe salário-maternidade?',
      answer:
        'Sim, por 120 dias, independentemente da idade da criança adotada.',
    },
    {
      question: 'Quando posso pedir o benefício?',
      answer:
        'A partir do 8º mês de gestação, no caso do INSS, e a empresa paga diretamente à empregada CLT.',
    },
  ],
  sources: [
    { label: 'Lei 8.213/1991: arts. 71 a 73 (salário-maternidade)' },
    { label: 'Lei 11.770/2008: Programa Empresa Cidadã' },
    { label: 'Constituição Federal, art. 7º, XVIII' },
    {
      label: 'Meu INSS',
      url: 'https://meu.inss.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
