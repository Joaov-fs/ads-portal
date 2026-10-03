import type { NewsDocument } from '../../types';

export const newsInssOutubro2026Calendario = {
  kind: 'news',
  slug: 'inss-outubro-2026-calendario-de-pagamento-26-de-outubro-a-9-de-novembro',
  title:
    'INSS: pagamento da folha de outubro começa em 26/10 e vai até 9 de novembro',
  description:
    'Veja a data do seu pagamento do INSS pelo final do número do benefício, para quem recebe até um salário mínimo (R$ 1.621) e para quem recebe mais.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-03',
  updatedAt: '2026-10-03',
  tags: ['inss', 'aposentadoria', 'beneficios', 'calendario', 'bpc'],
  featuredCalculators: ['inss', 'bpc'],
  highlights: [
    {
      value: '26/10',
      label: 'Início da folha de outubro',
      note: 'Benefícios de até um salário mínimo, final 1.',
    },
    {
      value: '09/11',
      label: 'Último pagamento do calendário',
      note: 'Benefícios com final 0, em qualquer faixa.',
    },
    {
      value: 'R$ 1.621',
      label: 'Salário mínimo de 2026',
      note: 'É o valor que separa os dois calendários.',
    },
  ],
  sections: [
    {
      heading: 'Quando o INSS paga a folha de outubro',
      paragraphs: [
        'O INSS paga cada folha mensal em dois blocos: quem recebe até um salário mínimo começa a receber nos últimos dias úteis do mês, e quem recebe mais de um salário mínimo recebe nos primeiros dias úteis do mês seguinte. Na folha de outubro, o calendário vai de 26 de outubro a 9 de novembro de 2026.',
        'A data de cada pessoa depende de dois fatores: se o benefício é de até R$ 1.621 ou maior que isso, e qual é o final do número do benefício. O calendário vale para aposentadorias, pensões, auxílios e o BPC.',
        'Os últimos pagamentos da folha de setembro, para quem recebe acima do mínimo, terminam em 7 de outubro.',
      ],
    },
    {
      heading: 'Data de pagamento de quem recebe até um salário mínimo',
      paragraphs: [
        'Para benefícios de até R$ 1.621, o pagamento segue a ordem dos finais, do 1 ao 0. Como 2 de novembro é feriado de Finados, o calendário pula essa data.',
      ],
      table: {
        caption: 'Benefícios de até um salário mínimo (R$ 1.621)',
        columns: ['Final do benefício', 'Data do pagamento'],
        rows: [
          ['1', '26 de outubro'],
          ['2', '27 de outubro'],
          ['3', '28 de outubro'],
          ['4', '29 de outubro'],
          ['5', '30 de outubro'],
          ['6', '3 de novembro'],
          ['7', '4 de novembro'],
          ['8', '5 de novembro'],
          ['9', '6 de novembro'],
          ['0', '9 de novembro'],
        ],
      },
    },
    {
      heading: 'Data de pagamento de quem recebe acima do mínimo',
      paragraphs: [
        'Para benefícios acima de R$ 1.621, o pagamento é concentrado em cinco dias úteis, com dois finais por data.',
      ],
      table: {
        caption: 'Benefícios acima de um salário mínimo',
        columns: ['Finais do benefício', 'Data do pagamento'],
        rows: [
          ['1 e 6', '3 de novembro'],
          ['2 e 7', '4 de novembro'],
          ['3 e 8', '5 de novembro'],
          ['4 e 9', '6 de novembro'],
          ['5 e 0', '9 de novembro'],
        ],
      },
    },
    {
      heading: 'Como descobrir o final do seu benefício',
      paragraphs: [
        'O final que vale é o último algarismo do número do benefício antes do traço, sem contar o dígito verificador, que é o número depois do traço. Se o benefício é 123.456.789-0, o final considerado é 9.',
        'Exemplo 1: uma aposentada que recebe R$ 1.621 e tem benefício com final 7 recebe em 4 de novembro. Exemplo 2: um pensionista que recebe R$ 2.500 e tem benefício com final 2 também recebe em 4 de novembro. As datas coincidem por acaso: os calendários são diferentes e seguem a regra de cada faixa.',
        'O número do benefício aparece no aplicativo e no site Meu INSS e no extrato bancário. Em caso de dúvida, a Central 135 atende de segunda a sábado, das 7h às 22h.',
      ],
    },
    {
      heading: 'O que conferir antes da data de pagamento',
      paragraphs: [
        'O valor que cai na conta pode ser menor que o do benefício, porque empréstimos consignados e outros descontos autorizados são retirados antes do pagamento. O extrato no Meu INSS mostra cada desconto. A calculadora do INSS ajuda a entender a contribuição de quem ainda trabalha, e a do BPC mostra a regra de renda do benefício assistencial.',
        'O INSS orienta que o calendário seja consultado somente pelos canais oficiais, porque páginas falsas que prometem antecipação ou liberação de valores são usadas em golpes.',
      ],
    },
  ],
  faq: [
    {
      question: 'Como saber o final do meu benefício?',
      answer:
        'É o último algarismo do número do benefício antes do traço. O dígito que aparece depois do traço não conta. O número aparece no Meu INSS e no extrato.',
    },
    {
      question: 'Por que a folha de outubro começa em 26 de outubro?',
      answer:
        'Quem recebe até um salário mínimo começa a receber nos últimos dias úteis do mês de referência. Quem recebe mais recebe nos primeiros dias úteis do mês seguinte.',
    },
    {
      question: 'O BPC segue o mesmo calendário?',
      answer:
        'Sim. O BPC vale um salário mínimo, então segue o calendário dos benefícios de até R$ 1.621, pelo final do número do benefício.',
    },
  ],
  sources: [
    { label: 'INSS — calendário de pagamentos de benefícios 2026' },
    { label: 'Meu INSS — consulta de benefícios e pagamentos' },
  ],
} as const satisfies NewsDocument;
