import type { GuideDocument } from '../../types';

export const guideIpvaComoCalcular = {
  kind: 'guide',
  slug: 'ipva-como-calcular-valor-venal-aliquota-e-parcelas',
  title: 'IPVA: como calcular pelo valor venal, alíquota e parcelas',
  description:
    'Entenda como o IPVA é calculado, o que é o valor venal, como a alíquota do estado muda o valor e quanto fica a cota única, as parcelas e o primeiro ano do veículo.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['ipva', 'veiculo', 'impostos', 'financas'],
  featuredCalculators: ['ipva', 'porcentagem', 'juros-simples'],
  highlights: [
    {
      value: 'R$ 2.400,00',
      label: 'IPVA de um carro de R$ 60.000 com alíquota de 4%',
      note: 'Valor da cota única, sem desconto.',
    },
    {
      value: 'R$ 800,00',
      label: 'Cada parcela, em três vezes',
      note: 'Muitos estados permitem parcelar em até 3 vezes.',
    },
    {
      value: 'R$ 800,00',
      label: 'Veículo novo com 4 meses no ano',
      note: 'Quando o estado cobra proporcional aos meses.',
    },
  ],
  sections: [
    {
      heading: 'O que é o IPVA e quem cobra',
      paragraphs: [
        'O IPVA (Imposto sobre a Propriedade de Veículos Automotores) é um imposto estadual cobrado todos os anos do proprietário de carros, motos, caminhões e outros veículos. Cada estado define sua alíquota, seu calendário e suas regras de desconto e isenção, e por isso o mesmo carro pode pagar valores diferentes dependendo de onde é emplacado.',
        'O imposto fica vinculado ao veículo, e não à pessoa. Ao comprar um usado, confira se há IPVA atrasado, porque a dívida acompanha o veículo e pode impedir o licenciamento e a transferência.',
      ],
    },
    {
      heading: 'A conta: valor venal vezes alíquota',
      paragraphs: [
        'O IPVA é o valor venal do veículo multiplicado pela alíquota do estado. O valor venal é o valor de referência que o estado usa, em geral baseado na tabela FIPE. Ele muda a cada ano conforme o preço de mercado, e por isso o imposto costuma cair com o envelhecimento do carro.',
        'As alíquotas costumam ficar entre 1% e 4% e variam conforme o tipo de veículo, o combustível e o estado. Motos e veículos elétricos, em geral, têm alíquotas menores ou isenção em alguns estados, e a regra deve ser conferida na Secretaria da Fazenda.',
      ],
      table: {
        caption: 'IPVA por valor venal e alíquota',
        columns: [
          'Valor venal',
          'Alíquota de 1,5%',
          'Alíquota de 2%',
          'Alíquota de 3%',
          'Alíquota de 4%',
        ],
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
    {
      heading: 'Cota única, desconto e parcelas',
      paragraphs: [
        'Muitos estados oferecem desconto para quem paga o IPVA de uma vez, na cota única, e permitem parcelar em até 3 vezes sem desconto. Para um carro de R$ 60.000,00 com alíquota de 4%, o IPVA é de R$ 2.400,00. Em 3 parcelas, cada uma é de R$ 800,00.',
        'Compare o desconto da cota única com o seu fluxo de caixa. Se o desconto for de 3%, por exemplo, ele equivale a R$ 72,00 de economia no exemplo, e vale a pena se o dinheiro não fizer falta para outras contas com juros mais altos, como cartão e cheque especial.',
      ],
    },
    {
      heading: 'Primeiro ano do veículo: proporcional aos meses',
      paragraphs: [
        'No ano em que o veículo é comprado novo, muitos estados cobram o IPVA proporcional aos meses que faltam até dezembro. A contagem do mês varia, e alguns estados incluem o mês da compra, outros não. A tabela mostra o IPVA proporcional de um carro com imposto cheio de R$ 2.400,00 no ano.',
      ],
      table: {
        caption: 'IPVA proporcional de um imposto anual de R$ 2.400,00',
        columns: ['Meses a pagar', 'Valor proporcional', 'Em 3 parcelas'],
        rows: [
          ['12', 'R$ 2.400,00', 'R$ 800,00'],
          ['9', 'R$ 1.800,00', 'R$ 600,00'],
          ['6', 'R$ 1.200,00', 'R$ 400,00'],
          ['3', 'R$ 600,00', 'R$ 200,00'],
        ],
      },
    },
    {
      heading: 'Isenções, venda e perda do veículo',
      paragraphs: [
        'Muitos estados isentam veículos com mais de 20 anos de fabricação, pessoas com deficiência em condições específicas e táxis ou veículos de uso específico. Os critérios variam e quase sempre exigem pedido formal.',
        'Se o veículo for roubado, furtado ou tiver perda total, alguns estados devolvem ou deixam de cobrar o IPVA proporcional aos meses restantes. Guarde o boletim de ocorrência e o documento de baixa e peça a regularização na Secretaria da Fazenda.',
      ],
    },
    {
      heading: 'IPVA atrasado: multa, juros e restrições',
      paragraphs: [
        'O atraso gera multa e juros, e o débito pode ser inscrito na dívida ativa. Enquanto o IPVA estiver em aberto, o licenciamento anual não é liberado, e o veículo pode ser apreendido em fiscalização, além de a dívida poder ser protestada.',
        'Quem não consegue pagar tudo deve procurar o parcelamento do débito oferecido pelo estado, que costuma ter condições melhores que o atraso contínuo. Guarde os comprovantes de cada parcela.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são usar a alíquota de outro estado, esquecer que o valor venal muda a cada ano e achar que o imposto do primeiro ano é sempre cheio ou sempre proporcional. Também é comum pagar o licenciamento sem conferir se o IPVA já foi quitado.',
        'Pague sempre pelo boleto ou pelo site da Secretaria da Fazenda do seu estado, e desconfie de links de WhatsApp ou e-mail com cobrança de IPVA. Golpes com boletos falsos são frequentes nessa época do ano.',
      ],
    },
    {
      heading: 'Quando procurar a Secretaria da Fazenda',
      paragraphs: [
        'A calculadora do portal estima o IPVA com o valor venal e a alíquota que você informar. O valor oficial, o calendário, os descontos e as isenções são definidos pela Secretaria da Fazenda do estado, e é lá que você deve conferir antes de pagar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Como é calculado o IPVA?',
      answer:
        'Multiplica-se o valor venal do veículo pela alíquota do estado. O valor venal costuma ser baseado na tabela FIPE.',
    },
    {
      question: 'Qual é a alíquota do IPVA?',
      answer:
        'Varia por estado e por tipo de veículo, em geral entre 1% e 4%. Consulte a Secretaria da Fazenda do seu estado.',
    },
    {
      question: 'Posso parcelar o IPVA?',
      answer:
        'Muitos estados permitem parcelar em até 3 vezes. Alguns dão desconto para quem paga na cota única.',
    },
    {
      question: 'O IPVA do primeiro ano é proporcional?',
      answer:
        'Em muitos estados, sim, de acordo com os meses que faltam até dezembro. A regra varia por estado.',
    },
    {
      question: 'O que acontece se eu não pagar o IPVA?',
      answer:
        'Há multa e juros, o licenciamento não é liberado e o débito pode ir para a dívida ativa, com risco de apreensão do veículo.',
    },
  ],
  sources: [
    { label: 'Constituição Federal, art. 155, III: competência dos estados' },
    { label: 'Legislação do IPVA de cada estado' },
    { label: 'Secretarias da Fazenda estaduais' },
  ],
} as const satisfies GuideDocument;
