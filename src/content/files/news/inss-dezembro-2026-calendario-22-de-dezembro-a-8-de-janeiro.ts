import type { NewsDocument } from '../../types';

export const newsInssDezembro2026Calendario = {
  kind: 'news',
  slug: 'inss-dezembro-2026-calendario-22-de-dezembro-a-8-de-janeiro',
  title:
    'INSS dezembro 2026: pagamentos de 22/12 a 8/1, e finais 6 a 0 recebem só em janeiro',
  description:
    'Pelo calendário oficial, a folha de dezembro do INSS começa em 22/12 e termina em 8/1. Veja a data de cada final de benefício, até e acima do mínimo.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/inss-dezembro-2026-calendario-22-de-dezembro-a-8-de-janeiro.jpg',
    alt: 'Tabela de pagamento do INSS ao lado de um calendário de dezembro de 2026 com os dias 22, 23, 28, 29 e 30 marcados.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-20',
  updatedAt: '2026-11-20',
  tags: ['inss', 'calendario', 'aposentadoria', 'pensao', 'beneficios'],
  featuredCalculators: ['inss', 'bpc'],
  highlights: [
    {
      value: '22/12',
      label: 'Início da folha de dezembro',
      note: 'Benefícios de até um salário mínimo com final 1.',
    },
    {
      value: '08/01',
      label: 'Fim da folha de dezembro',
      note: 'Último grupo: final 0, em 2027.',
    },
    {
      value: '5 finais',
      label: 'Recebem ainda em dezembro',
      note: 'Finais 1 a 5, na faixa de até um salário mínimo.',
    },
  ],
  sections: [
    {
      heading: 'Quando o INSS paga a folha de dezembro',
      paragraphs: [
        'O calendário oficial de 2026 do INSS, divulgado pelo Ministério da Previdência Social, define que a folha de dezembro começa em 22 de dezembro e termina em 8 de janeiro de 2027. A data de cada pessoa depende do final do número do benefício, ou seja, o último algarismo antes do traço. O dígito que vem depois do traço não conta.',
        'Na faixa de até um salário mínimo, os finais 1 a 5 recebem ainda em dezembro, entre 22/12 e 30/12. Os finais 6 a 0 recebem em janeiro, entre 4/1 e 8/1. Quem recebe acima do mínimo só começa em 4/1 e também vai até 8/1.',
        'A folha de dezembro é a última do calendário de 2026. A de novembro, por sua vez, vai de 24/11 a 7/12, e quem ainda não recebeu a de novembro deve seguir as datas daquela tabela.',
      ],
    },
    {
      heading: 'Datas para quem recebe até um salário mínimo',
      image: {
        src: '/images/news/inss-dezembro-2026-calendario-22-de-dezembro-a-8-de-janeiro-detalhe.jpg',
        alt: 'Detalhe da ilustração: tabela com a folha de dezembro do INSS, de 22/12 a 8/1.',
        caption:
          'A folha de dezembro tem 10 datas para quem recebe até um salário mínimo, uma para cada final.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Veja abaixo a data de cada final de benefício na faixa de até um salário mínimo. Os finais 6 a 0 recebem em 2027.',
      ],
      table: {
        caption:
          'Folha de dezembro de 2026: benefícios de até um salário mínimo',
        columns: ['Final do benefício', 'Data de pagamento'],
        rows: [
          ['1', '22/12'],
          ['2', '23/12'],
          ['3', '28/12'],
          ['4', '29/12'],
          ['5', '30/12'],
          ['6', '04/01/2027'],
          ['7', '05/01/2027'],
          ['8', '06/01/2027'],
          ['9', '07/01/2027'],
          ['0', '08/01/2027'],
        ],
      },
    },
    {
      heading: 'Datas para quem recebe acima de um salário mínimo',
      paragraphs: [
        'Nessa faixa, os finais são agrupados em pares e todos recebem em janeiro de 2027, de 4/1 a 8/1. Quem tem benefício acima do mínimo não recebe a folha de dezembro ainda em 2026.',
      ],
      table: {
        caption:
          'Folha de dezembro de 2026: benefícios acima de um salário mínimo',
        columns: ['Finais do benefício', 'Data de pagamento'],
        rows: [
          ['1 e 6', '04/01/2027'],
          ['2 e 7', '05/01/2027'],
          ['3 e 8', '06/01/2027'],
          ['4 e 9', '07/01/2027'],
          ['5 e 0', '08/01/2027'],
        ],
      },
    },
    {
      heading: 'Como achar o seu final e conferir a data',
      paragraphs: [
        'Exemplo prático: um benefício de número 123.456.789-0 tem final 9, porque o último algarismo antes do traço é o 9. Se o valor é de até um salário mínimo, a data na tabela acima é 7/1/2027. Se o valor é maior que o mínimo, o final 9 cai no par 4 e 9, e a data é 7/1/2027 também.',
        'Para conferir o número do benefício e o valor, acesse o Meu INSS com a conta gov.br e abra o extrato de pagamento. A Central 135 também atende dúvidas sobre datas. Cuidado com golpes: o INSS não pede senha, código ou pagamento para liberar o benefício.',
        'As tabelas oficiais trazem apenas as datas de pagamento, sem observação sobre feriados. Se a sua data cair em dia sem expediente bancário, confirme no extrato do Meu INSS ou na Central 135 antes de ir ao banco.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando começa o pagamento do INSS de dezembro de 2026?',
      answer:
        'Em 22/12, para quem recebe até um salário mínimo e tem benefício com final 1. A folha vai até 8/1/2027.',
    },
    {
      question: 'Quem recebe só em janeiro?',
      answer:
        'Quem recebe até um salário mínimo e tem final 6 a 0, e todos os benefícios acima do mínimo. As datas vão de 4/1 a 8/1/2027.',
    },
    {
      question: 'Qual final vale: o antes ou o depois do traço?',
      answer:
        'Vale o último algarismo antes do traço. O dígito que vem depois do traço não entra na conta.',
    },
  ],
  sources: [
    {
      label: 'INSS: tabela de pagamento de benefícios de 2026',
      url: 'https://www.gov.br/inss/pt-br/assuntos/calendario-de-pagamentos-do-inss-de-2026-esta-disponivel/TabeladePagamentodeBenefcios20261.pdf',
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
