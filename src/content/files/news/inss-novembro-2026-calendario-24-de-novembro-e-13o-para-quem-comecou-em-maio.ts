import type { NewsDocument } from '../../types';

export const newsInssNovembro2026Calendario13oNovos = {
  kind: 'news',
  slug: 'inss-novembro-2026-calendario-24-de-novembro-e-13o-para-quem-comecou-em-maio',
  title:
    'INSS novembro 2026: pagamentos de 24/11 a 7/12 e 13º para quem começou a receber a partir de maio',
  description:
    'A folha de novembro do INSS vai de 24/11 a 7/12. Quem teve o benefício concedido a partir de maio recebe o 13º proporcional nessa folha.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/inss-novembro-2026-calendario-24-de-novembro-e-13o-para-quem-comecou-em-maio.jpg',
    alt: 'Documento com as datas do INSS, calendário de novembro com o dia 24 marcado, celular com extrato do 13º e cédula de 13º.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-30',
  updatedAt: '2026-10-30',
  tags: [
    'inss',
    '13-salario',
    'aposentadoria',
    'pensao',
    'calendario',
    'beneficios',
  ],
  featuredCalculators: ['decimo-salario', 'inss'],
  highlights: [
    {
      value: '24/11',
      label: 'Início da folha de novembro',
      note: 'Benefícios de um salário mínimo com final 1.',
    },
    {
      value: '07/12',
      label: 'Fim da folha de novembro',
      note: 'Último grupo: final 0 (mínimo) e finais 5 e 0 (acima).',
    },
    {
      value: 'Desde maio',
      label: 'Benefícios que recebem o 13º',
      note: 'Quem não recebeu a antecipação do primeiro semestre.',
    },
  ],
  sections: [
    {
      heading: 'O que muda na folha de novembro do INSS',
      paragraphs: [
        'O calendário oficial de 2026 do INSS, divulgado pelo Ministério da Previdência Social, define que a folha de novembro começa em 24 de novembro e termina em 7 de dezembro. A data de cada pessoa depende do final do número do benefício, ou seja, o último algarismo antes do traço. O dígito que vem depois do traço não conta.',
        'Nessa mesma folha, o INSS paga o 13º salário a quem ainda não recebeu. Neste ano, o 13º dos aposentados e pensionistas foi antecipado para abril e maio. Por isso, em novembro, o abono é pago apenas a quem passou a receber o benefício depois dessa antecipação, a partir de maio, e tem direito ao 13º.',
        'Quem já recebeu o 13º nas parcelas de abril e maio não terá um novo lote em novembro. Não há nada a pedir: o valor entra junto com o pagamento do mês e aparece no extrato do Meu INSS.',
      ],
    },
    {
      heading: 'Datas de novembro para quem recebe até um salário mínimo',
      image: {
        src: '/images/news/inss-novembro-2026-calendario-24-de-novembro-e-13o-para-quem-comecou-em-maio-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com as datas da folha de novembro do INSS, de 24/11 a 7/12.',
        caption:
          'A folha de novembro tem 10 datas diferentes, uma para cada final de benefício.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Para benefícios de até um salário mínimo, hoje de R$ 1.621, o pagamento começa em 24 de novembro, para os benefícios com final 1, e segue em ordem até 7 de dezembro, para o final 0.',
      ],
      table: {
        caption:
          'Folha de novembro de 2026: benefícios de até um salário mínimo',
        columns: ['Final do benefício', 'Data de pagamento'],
        rows: [
          ['1', '24/11'],
          ['2', '25/11'],
          ['3', '26/11'],
          ['4', '27/11'],
          ['5', '30/11'],
          ['6', '01/12'],
          ['7', '02/12'],
          ['8', '03/12'],
          ['9', '04/12'],
          ['0', '07/12'],
        ],
      },
    },
    {
      heading: 'Datas para quem recebe acima de um salário mínimo',
      paragraphs: [
        'Quem recebe mais de um salário mínimo só começa a receber em 1º de dezembro. Nessa faixa, os finais são agrupados em pares. Confira a tabela da sua faixa mesmo que você veja notícias sobre o início dos pagamentos em novembro.',
      ],
      table: {
        caption:
          'Folha de novembro de 2026: benefícios acima de um salário mínimo',
        columns: ['Finais do benefício', 'Data de pagamento'],
        rows: [
          ['1 e 6', '01/12'],
          ['2 e 7', '02/12'],
          ['3 e 8', '03/12'],
          ['4 e 9', '04/12'],
          ['5 e 0', '07/12'],
        ],
      },
    },
    {
      heading:
        'Como é calculado o 13º de quem começou a receber depois de maio',
      paragraphs: [
        'O INSS informa que, para benefícios concedidos depois do período de antecipação, o 13º é proporcional ao tempo em que o benefício foi recebido no ano. A regra geral do abono é de 1/12 do valor do benefício por mês, e o mês entra na conta quando o benefício foi pago por 15 dias ou mais.',
        'Exemplo apenas para ilustrar a conta: um benefício de R$ 2.400 recebido por 6 meses em 2026 geraria R$ 2.400 dividido por 12, ou R$ 200 por mês, multiplicado por 6, o que dá R$ 1.200 antes de eventuais descontos. Para um benefício de um salário mínimo, R$ 1.621, recebido por 7 meses, a conta seria R$ 1.621 dividido por 12, multiplicado por 7, ou R$ 945,58.',
        'O valor exato de cada pessoa depende da data de início do benefício e das regras do tipo de benefício. Por isso, o caminho seguro é consultar o extrato de pagamento no Meu INSS antes da data do seu final. A calculadora de 13º salário do PortalFina ajuda a entender a lógica da proporcionalidade, mas não substitui o extrato oficial.',
      ],
    },
    {
      heading: 'Quem tem direito ao 13º e quem fica de fora',
      paragraphs: [
        'Segundo o INSS, têm direito ao 13º os beneficiários de benefícios previdenciários, como aposentadorias e pensão por morte, e também os de benefícios de legislação especial quando a lei prevê o abono. Entram, por exemplo, o auxílio por incapacidade temporária e o salário-maternidade, de forma proporcional ao período em que são pagos.',
        'O Benefício de Prestação Continuada (BPC) não tem 13º. O motivo apontado pelo INSS é que o BPC é um benefício assistencial, e não previdenciário. Quem recebe BPC segue o calendário normal da folha, sem parcela extra.',
        'Para consultar, acesse o Meu INSS com a conta gov.br e abra o serviço de extrato de pagamento. A Central 135 também atende dúvidas sobre datas e valores. Cuidado com golpes: o INSS não pede senha, código ou pagamento para liberar o 13º.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem recebe o 13º do INSS em novembro?',
      answer:
        'Quem passou a receber o benefício a partir de maio, depois da antecipação do 13º de abril e maio, e tem direito ao abono. O valor é proporcional ao tempo de benefício no ano.',
    },
    {
      question: 'Quem já recebeu o 13º em abril e maio recebe de novo?',
      answer:
        'Não. Quem recebeu o abono na antecipação não tem um novo lote em novembro. O pagamento do mês segue a folha normal.',
    },
    {
      question: 'Quem recebe BPC tem 13º?',
      answer:
        'Não. O BPC é um benefício assistencial, e não previdenciário, e por isso não tem 13º salário.',
    },
  ],
  sources: [
    {
      label:
        'INSS: beneficiários que começaram a receber a partir de maio terão 13º pago em novembro',
      url: 'https://www.gov.br/inss/pt-br/assuntos/noticias/beneficiarios-que-comecaram-a-receber-apos-maio-terao-13o-salario-pago-em-novembro',
    },
    {
      label: 'Agência Brasil: calendário de pagamentos do INSS para 2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-01/confira-calendario-de-pagamentos-do-inss-para-2026',
    },
    {
      label: 'Gov.br: emitir extrato de pagamento de benefício do INSS',
      url: 'https://www.gov.br/pt-br/servicos/emitir-extrato-de-pagamento-de-beneficio',
    },
  ],
} as const satisfies NewsDocument;
