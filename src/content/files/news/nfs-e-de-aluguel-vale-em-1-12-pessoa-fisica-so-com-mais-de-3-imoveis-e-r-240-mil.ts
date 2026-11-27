import type { NewsDocument } from '../../types';

export const newsNfseAluguel1Dezembro = {
  kind: 'news',
  slug: 'nfs-e-de-aluguel-vale-em-1-12-pessoa-fisica-so-com-mais-de-3-imoveis-e-r-240-mil',
  title:
    'Nota fiscal de aluguel vale a partir de 1º/12, mas pessoa física só entra com mais de 3 imóveis e R$ 240 mil por ano',
  description:
    'A NFS-e de locação de imóveis passa a ser exigida em 1º/12/2026. Veja quem emite, o limite da pessoa física e o que não muda para o pequeno proprietário.',
  category: 'financas',
  coverImage: {
    src: '/images/news/nfs-e-de-aluguel-vale-em-1-12-pessoa-fisica-so-com-mais-de-3-imoveis-e-r-240-mil.jpg',
    alt: 'Documento com as regras da nota fiscal de aluguel, calendário de dezembro de 2026 com o dia 1 marcado e uma casa.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: ['aluguel', 'nfs-e', 'reforma-tributaria', 'receita-federal', 'cbs'],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem'],
  highlights: [
    {
      value: '01/12/2026',
      label: 'Início da NFS-e de aluguel',
      note: 'Vale para fatos geradores a partir dessa data.',
    },
    {
      value: 'Mais de 3',
      label: 'Imóveis para a pessoa física',
      note: 'E mais de R$ 240 mil de aluguel no ano.',
    },
    {
      value: '01/01/2027',
      label: 'Simples Nacional entra',
      note: 'Data dos documentos para essas empresas.',
    },
  ],
  sections: [
    {
      heading: 'O que começa a valer em 1º/12/2026',
      paragraphs: [
        'O Ato Conjunto RFB/CGIBS nº 4, assinado em 30/07/2026 pela Receita Federal e pelo Comitê Gestor do IBS, fixou o cronograma dos documentos fiscais eletrônicos da reforma tributária do consumo. Para as locações de bens móveis e as locações, cessões onerosas e arrendamentos de bens imóveis, a Nota Fiscal de Serviços Eletrônica (NFS-e) passa a ser obrigatória em 1º de dezembro de 2026, para fatos geradores ocorridos a partir dessa data.',
        'Na prática, quem é contribuinte e recebe aluguel de imóvel precisa emitir a nota eletrônica desse recebimento, e não apenas um recibo. A mesma data vale para outros documentos do ato: NFS-e de plataformas digitais e de taxas condominiais, bilhete de passagem eletrônico no transporte semiurbano, metropolitano e aéreo de passageiros, e notas de gás canalizado.',
        'Para as empresas do Simples Nacional, a regra do ato começa um mês depois, em 01/01/2027. Já os serviços da lista da LC 116 que não entram nos grupos acima começaram em 01/10/2026.',
      ],
    },
    {
      heading: 'Pessoa física: quando o proprietário vira contribuinte',
      image: {
        src: '/images/news/nfs-e-de-aluguel-vale-em-1-12-pessoa-fisica-so-com-mais-de-3-imoveis-e-r-240-mil-detalhe.jpg',
        alt: 'Detalhe do documento com a data 01/12/2026, o tipo de nota e os dois critérios da pessoa física.',
        caption:
          'Os dois critérios da pessoa física: mais de 3 imóveis e receita de aluguel acima de R$ 240 mil no ano.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O ato trata do documento, e não de quem é contribuinte. Quem define isso é a regra da reforma tributária. A Receita Federal explicou, em nota publicada em 29/01/2026, que a pessoa física só vira contribuinte se tiver mais de 3 imóveis e receita anual de aluguel acima de R$ 240 mil. Os dois critérios valem ao mesmo tempo.',
        'Os R$ 240 mil por ano equivalem a R$ 20.000 por mês de aluguel recebido. Quem fica abaixo de qualquer um dos dois limites não é contribuinte nessa regra e, portanto, não é obrigado a emitir a NFS-e de aluguel.',
      ],
      table: {
        caption: 'Quatro exemplos de proprietários pessoa física',
        columns: ['Situação', 'Imóveis', 'Aluguel no ano', 'Entra na regra?'],
        rows: [
          [
            'Um apartamento alugado por R$ 2.500 por mês',
            '1',
            'R$ 30.000',
            'Não',
          ],
          [
            'Quatro imóveis, R$ 10.000 por mês no total',
            '4',
            'R$ 120.000',
            'Não',
          ],
          [
            'Três imóveis, R$ 25.000 por mês no total',
            '3',
            'R$ 300.000',
            'Não',
          ],
          [
            'Cinco imóveis, R$ 25.000 por mês no total',
            '5',
            'R$ 300.000',
            'Sim',
          ],
        ],
      },
    },
    {
      heading: 'O que muda e o que não muda para quem aluga um imóvel',
      paragraphs: [
        'Para o pequeno proprietário com um ou dois imóveis, a regra de 1º/12 não cria a obrigação de emitir nota. O contrato, o recibo e a declaração de Imposto de Renda seguem como antes. A Receita já alertou, em janeiro, que é falso que todo proprietário passaria a pagar um novo imposto imediato sobre o aluguel em 2026.',
        'Para empresas que exploram locação de imóveis, a emissão da NFS-e passa a fazer parte da rotina a partir da data do ato. Quem tem dúvida sobre o enquadramento deve consultar a página de orientações da reforma tributária do consumo no site da Receita Federal.',
        'A cobrança plena de CBS e IBS vem em transição, que se estende de 2027 a 2033. Por isso, a data de 1º/12 é sobre o documento fiscal, e não sobre um novo valor a pagar no aluguel de dezembro.',
      ],
    },
  ],
  faq: [
    {
      question:
        'Quem aluga um apartamento precisa emitir nota fiscal a partir de 1º/12?',
      answer:
        'Não, se for pessoa física com um ou poucos imóveis. A Receita informa que a pessoa física só vira contribuinte com mais de 3 imóveis e receita de aluguel acima de R$ 240 mil por ano, os dois critérios juntos.',
    },
    {
      question: 'O aluguel de dezembro vai ficar mais caro por causa da nota?',
      answer:
        'A data de 1º/12 trata da emissão do documento fiscal eletrônico. A cobrança plena de CBS e IBS segue um cronograma de transição de 2027 a 2033, e o reajuste do contrato continua sendo o do índice previsto nele.',
    },
    {
      question: 'E as empresas do Simples Nacional?',
      answer:
        'Para o Simples Nacional, o Ato Conjunto RFB/CGIBS nº 4 fixa 01/01/2027 como data de início dos documentos.',
    },
  ],
  sources: [
    {
      label: 'Ato Conjunto RFB/CGIBS nº 4, de 30 de julho de 2026',
      url: 'https://www.cgibs.gov.br/upload/arquivos/202607/31091735-20260730-16h30-ato-conjunto-rfb-cgibs-na-c2-ba-4-260731-090909.pdf',
    },
    {
      label:
        'Receita Federal: cronograma dos documentos fiscais eletrônicos da reforma tributária do consumo',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/julho/receita-federal-e-comite-gestor-do-ibs-publicam-o-cronograma-de-implementacao-dos-documentos-fiscais-eletronicos-da-reforma-tributaria-do-consumo',
    },
    {
      label:
        'Receita Federal: alerta sobre aluguel por temporada e novo imposto',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/janeiro/receita-federal-alerta-e-falso-que-201ctodo-proprietario-que-aluga-por-temporada-pagara-novo-imposto-imediato-sobre-o-aluguel-em-2026',
    },
    {
      label: 'Receita Federal: orientações da reforma tributária do consumo',
      url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/orientacoes-da-reforma-tributaria',
    },
  ],
} as const satisfies NewsDocument;
