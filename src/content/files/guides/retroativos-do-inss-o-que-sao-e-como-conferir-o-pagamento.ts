import type { GuideDocument } from '../../types';

export const guideRetroativosInss = {
  kind: 'guide',
  slug: 'retroativos-do-inss-o-que-sao-e-como-conferir-o-pagamento',
  title: 'Retroativos do INSS: o que são e como conferir o pagamento',
  description:
    'Entenda o que são os atrasados do INSS, como é feito o cálculo, quando eles são pagos, como ler o extrato de pagamento no Meu INSS e o que fazer se o valor vier errado.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-14',
  tags: ['inss', 'retroativos', 'extrato', 'pagamento', 'beneficios'],
  featuredCalculators: [
    'retroativos-inss',
    'prazo-prorrogacao-auxilio-inss',
    'auxilio-incapacidade',
  ],
  highlights: [
    {
      value: 'R$ 54,03',
      label: 'Valor de cada dia atrasado no piso',
      note: 'Salário mínimo de R$ 1.621,00 dividido por 30.',
    },
    {
      value: 'R$ 9.726,00',
      label: 'Seis meses de atraso no piso',
      note: '180 dias de benefício de um salário mínimo.',
    },
    {
      value: 'DER',
      label: 'Data que costuma definir o início do direito',
      note: 'É o dia em que o pedido foi feito.',
    },
  ],
  sections: [
    {
      heading: 'O que são os retroativos',
      paragraphs: [
        'Os retroativos, também chamados de atrasados ou valores acumulados, são as parcelas do benefício do INSS que seriam devidas desde a data de início do direito, mas só foram pagas depois. Eles aparecem quando a análise do pedido demora, quando há exigência não cumprida, quando o INSS nega e a decisão é revertida ou quando um benefício é revisado.',
        'Na prática, a pessoa que pediu o benefício em março e teve o direito reconhecido em setembro não perde os seis meses de espera: eles são pagos como retroativos junto com a primeira parcela regular, desde que o direito retroaja à data do pedido.',
      ],
    },
    {
      heading: 'Que data define o início do direito',
      paragraphs: [
        'A data em que o benefício começa a contar depende do tipo. Para a maioria dos benefícios, vale a data de entrada do requerimento (DER), que é o dia em que o pedido foi protocolado. Por isso, pedir cedo e guardar o protocolo é importante: ele é a base dos retroativos.',
        'Em alguns casos, o início é outro. No auxílio por incapacidade para o empregado, parte do afastamento é paga pela empresa e o INSS paga a partir do 16º dia. Em pensão por morte, a data do óbito conta se o pedido for feito dentro do prazo. A carta de concessão e o Meu INSS mostram a data de início do benefício (DIB) usada.',
      ],
    },
    {
      heading: 'Como o valor é calculado',
      paragraphs: [
        'O cálculo básico é a mensalidade do benefício, dividida por 30, multiplicada pelos dias entre o início do direito e a data do primeiro pagamento regular. A tabela mostra o valor bruto para o piso e para um benefício de R$ 2.500,00, sem correção monetária.',
        'O INSS aplica correção monetária aos atrasados, e em ações judiciais também podem ser somados juros. Por isso o valor real costuma ser um pouco maior que a conta simples.',
      ],
      table: {
        caption: 'Retroativos por tempo de atraso (sem correção)',
        columns: [
          'Tempo de atraso',
          'Benefício de R$ 1.621,00',
          'Benefício de R$ 2.500,00',
        ],
        rows: [
          ['30 dias', 'R$ 1.621,00', 'R$ 2.500,00'],
          ['90 dias', 'R$ 4.863,00', 'R$ 7.500,00'],
          ['180 dias', 'R$ 9.726,00', 'R$ 15.000,00'],
          ['270 dias', 'R$ 14.589,00', 'R$ 22.500,00'],
          ['360 dias', 'R$ 19.452,00', 'R$ 30.000,00'],
        ],
      },
    },
    {
      heading: 'Quando os atrasados são pagos',
      paragraphs: [
        'Quando o benefício é concedido, os retroativos costumam ser pagos junto com a primeira parcela, ou em parcela própria, informada no extrato. Em valores maiores, pode ser necessário mais um prazo de processamento. A data de cada pagamento depende do calendário do INSS e do final do número do benefício.',
        'Se a concessão ocorreu por decisão judicial, o pagamento é feito pelo sistema de precatórios ou por requisição de pequeno valor (RPV), e o prazo é diferente do administrativo. O advogado ou a Defensoria informa o andamento, e o extrato do Meu INSS mostra o que o INSS pagou.',
      ],
    },
    {
      heading: 'Como conferir no Meu INSS',
      paragraphs: [
        'No Meu INSS, a consulta de pagamentos mostra o extrato por competência, com o valor bruto, os descontos e o valor líquido, além da data em que cada pagamento ficou disponível. O extrato de crédito, que também pode ser pedido pela Central 135, mostra as parcelas já pagas.',
        'Abra o extrato e procure por parcelas de valor diferente da mensalidade, em geral na primeira competência. Compare com a data de início e a renda mensal da carta de concessão. Se a soma não bater, o cálculo pode ter considerado outra data de início ou descontado valores já pagos.',
      ],
    },
    {
      heading: 'Imposto de Renda sobre valores acumulados',
      paragraphs: [
        'Quando os atrasados são pagos de uma vez, pode haver incidência de Imposto de Renda sobre rendimentos recebidos acumuladamente (RRA), calculado como se o valor tivesse sido recebido mês a mês. Para benefícios do INSS que ficam abaixo do limite de isenção em cada mês, o imposto pode ser zero ou pequeno.',
        'O informe de rendimentos do INSS, disponível no Meu INSS, traz os valores pagos e retidos no ano. Use esse documento na declaração do Imposto de Renda do ano seguinte, conferindo se os atrasados foram lançados corretamente.',
      ],
    },
    {
      heading: 'Se o valor veio errado ou não veio',
      paragraphs: [
        'Quando o pagamento não vem na data esperada ou o valor não confere, comece reunindo a carta de concessão, o protocolo do pedido e o extrato. Depois, abra uma solicitação pelo Meu INSS ou pela Central 135, descrevendo o que faltou, com as datas.',
        'Se o INSS não resolver, é possível pedir revisão, recorrer da decisão em 30 dias ou buscar a Justiça. Em pedidos de valores maiores, a Defensoria Pública da União atende quem não pode pagar um advogado. Guarde todos os protocolos, porque eles provam a data do pedido.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são contar a partir da data da perícia e não da data do pedido, esquecer de descontar parcelas já pagas e não conferir o extrato depois da concessão. Também é comum acreditar que todo benefício retroage à data do pedido: há situações em que o início é outro, e a carta de concessão explica.',
        'Desconfie de ofertas de antecipação ou de pessoas que cobram para liberar atrasados do INSS. Quem tem direito recebe pelo próprio INSS, sem pagar para ninguém liberar o dinheiro. Use apenas o Meu INSS, a Central 135 e as agências para tratar do pagamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que são retroativos do INSS?',
      answer:
        'São as parcelas do benefício devidas desde o início do direito até o primeiro pagamento regular, pagas depois por causa da demora ou da revisão.',
    },
    {
      question: 'Como calcular os atrasados do INSS?',
      answer:
        'Divida a mensalidade por 30 e multiplique pelos dias entre a data de início do direito e a do primeiro pagamento. O INSS ainda aplica correção monetária.',
    },
    {
      question: 'Onde vejo o extrato de pagamento do INSS?',
      answer:
        'No Meu INSS, em consulta de pagamentos, e pela Central 135. O extrato mostra cada competência, o valor bruto, os descontos e o líquido.',
    },
    {
      question: 'Os retroativos do INSS pagam Imposto de Renda?',
      answer:
        'Podem pagar, pelo regime de rendimentos recebidos acumuladamente. O imposto considera o valor como se tivesse sido recebido mês a mês, e muitas vezes fica zerado em benefícios menores.',
    },
    {
      question: 'Qual o prazo para recorrer se o valor veio errado?',
      answer:
        'O recurso administrativo tem prazo de 30 dias a partir da ciência da decisão. Antes disso, é possível abrir uma solicitação pelo Meu INSS ou pela Central 135.',
    },
  ],
  sources: [
    { label: 'Lei 8.213/1991, arts. 43, 49, 60 e 74' },
    { label: 'Receita Federal: rendimentos recebidos acumuladamente' },
    { label: 'INSS: Meu INSS e Central 135' },
  ],
} as const satisfies GuideDocument;
