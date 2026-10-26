import type { NewsDocument } from '../../types';

export const newsInssOutubro2026Calendario = {
  kind: 'news',
  slug: 'inss-outubro-2026-calendario-de-pagamento-26-de-outubro-a-9-de-novembro',
  title:
    'INSS começa a pagar outubro em 26/10: confira o final do benefício e a data do depósito',
  description:
    'Pagamentos de até um salário mínimo começam em 26/10. Para valores maiores, o início é em 3/11. Veja as datas e como consultar o extrato.',
  category: 'beneficios',
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-03',
  updatedAt: '2026-10-25',
  tags: ['inss', 'aposentadoria', 'beneficios', 'calendario', 'bpc'],
  featuredCalculators: ['inss', 'bpc'],
  coverImage: {
    src: '/images/news/inss-outubro-inicio-pagamento-26-2026.jpg',
    alt: 'Documento com as datas do INSS, calendário de outubro com o dia 26 marcado e celular mostrando a opção de extrato.',
    credit: 'Ilustração: PortalFina',
  },
  highlights: [
    {
      value: '26/10',
      label: 'Início para até um salário mínimo',
      note: 'Primeiro grupo: benefício com final 1.',
    },
    {
      value: '03/11',
      label: 'Início para valores acima do mínimo',
      note: 'Primeiro grupo: finais 1 e 6.',
    },
    {
      value: '09/11',
      label: 'Encerramento da folha de outubro',
      note: 'Confira o calendário da sua faixa.',
    },
  ],
  sections: [
    {
      heading: 'Qual número usar para encontrar sua data',
      paragraphs: [
        'O INSS confirmou, em comunicado publicado em 22 de outubro, o início dos pagamentos da folha na segunda-feira, 26. A matéria foi revisada em 25 de outubro para reunir o calendário confirmado e a consulta individual.',
        'A ordem usa o final do número do benefício antes do traço. O algarismo que vem depois dele é o dígito verificador e deve ser desconsiderado. Não use o final do CPF ou do cartão bancário.',
        'Confira também a faixa do benefício. As tabelas de quem recebe até um salário mínimo e de quem recebe mais são diferentes.',
      ],
    },
    {
      heading: 'Até um salário mínimo: depósitos de 26/10 a 9/11',
      image: {
        src: '/images/news/inss-outubro-inicio-pagamento-26-2026-detalhe.jpg',
        alt: 'Detalhe do calendário de outubro com o dia 26 destacado.',
        caption:
          'O início do calendário não significa que todos os benefícios serão pagos no mesmo dia.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Localize o final do benefício na tabela correspondente à sua faixa. O primeiro grupo tem pagamento previsto para 26 de outubro.',
      ],
      table: {
        caption:
          'Folha de outubro de 2026: benefícios de até um salário mínimo',
        columns: ['Final do benefício', 'Data'],
        rows: [
          ['1', '26/10'],
          ['2', '27/10'],
          ['3', '28/10'],
          ['4', '29/10'],
          ['5', '30/10'],
          ['6', '03/11'],
          ['7', '04/11'],
          ['8', '05/11'],
          ['9', '06/11'],
          ['0', '09/11'],
        ],
      },
    },
    {
      heading: 'Acima de um salário mínimo: pagamentos a partir de 3/11',
      paragraphs: [
        'Para quem recebe mais de um salário mínimo, a folha é organizada em pares de finais. Consulte esse calendário mesmo que você veja notícias sobre o início dos depósitos em outubro.',
      ],
      table: {
        caption:
          'Folha de outubro de 2026: benefícios acima de um salário mínimo',
        columns: ['Finais do benefício', 'Data'],
        rows: [
          ['1 e 6', '03/11'],
          ['2 e 7', '04/11'],
          ['3 e 8', '05/11'],
          ['4 e 9', '06/11'],
          ['5 e 0', '09/11'],
        ],
      },
    },
    {
      heading: 'Onde consultar o valor e o banco do pagamento',
      paragraphs: [
        'O extrato de pagamento é o comprovante oficial com valores, data e banco do depósito. O serviço está disponível pela internet no Meu INSS, sem necessidade de comparecer a uma agência do instituto.',
        'Acesse o Meu INSS com sua conta gov.br e procure o serviço de extrato de pagamento. A consulta é individual: o calendário geral, sozinho, não confirma a situação de uma parcela específica.',
        'Beneficiários atendidos pela Caixa também podem consultar informações do INSS no aplicativo Benefícios Sociais CAIXA. A página do banco reúne calendário, situação das parcelas e orientações de atendimento.',
        'As calculadoras de INSS e BPC do PortalFina servem para simulações das regras de cada ferramenta. Elas não acessam sua conta nem substituem o extrato oficial.',
      ],
    },
  ],
  faq: [
    {
      question: 'O final é o número depois do traço?',
      answer:
        'Não. Considere o último algarismo antes do traço no número do benefício.',
    },
    {
      question: 'Quem recebe acima do salário mínimo começa em 26/10?',
      answer:
        'Não. Nessa faixa, o calendário começa em 3 de novembro e segue os pares de finais da tabela.',
    },
    {
      question: 'Preciso ir ao INSS para emitir o extrato?',
      answer:
        'Não. O serviço de extrato de pagamento pode ser acessado pela internet no Meu INSS.',
    },
  ],
  sources: [
    {
      label: 'INSS: início dos pagamentos de outubro, comunicado de 22/10/2026',
      url: 'https://www.gov.br/inss/pt-br/assuntos/noticias/comeca-na-proxima-segunda-26-o-pagamento-de-beneficios-e-auxilios-referentes-ao-mes-de-outubro',
    },
    {
      label: 'Gov.br: emitir extrato de pagamento de benefício do INSS',
      url: 'https://www.gov.br/pt-br/servicos/emitir-extrato-de-pagamento-de-beneficio',
    },
    {
      label: 'Caixa: benefícios do INSS e calendário de pagamentos',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/inss/Paginas/default.aspx',
    },
  ],
} as const satisfies NewsDocument;
