import type { GuideDocument } from '../../types';

export const guideComoUsarOMeuInssEConsultarOCnis = {
  kind: 'guide',
  slug: 'como-usar-o-meu-inss-e-consultar-o-cnis',
  title: 'Como usar o Meu INSS e consultar o extrato de contribuições (CNIS)',
  description:
    'Passo a passo para entrar no Meu INSS, ver seu histórico de contribuições, pedir benefícios e acompanhar o andamento.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-22',
  updatedAt: '2026-10-02',
  tags: ['inss', 'meu-inss', 'cnis', 'aposentadoria', 'beneficios'],
  featuredCalculators: ['inss', 'inss-autonomo', 'auxilio-incapacidade'],
  highlights: [
    {
      value: 'Meu INSS',
      label: 'Canal oficial',
      note: 'Aplicativo e site, com conta gov.br.',
    },
    {
      value: '135',
      label: 'Telefone',
      note: 'Central de atendimento.',
    },
    {
      value: 'CNIS',
      label: 'Extrato de contribuições',
      note: 'Mostra vínculos e salários registrados.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: entre com a conta gov.br',
      paragraphs: [
        'Abra o aplicativo Meu INSS ou o site e faça login com o CPF e a senha da conta gov.br. Se você ainda não tem conta, crie uma com CPF e confirmação de identidade. Quanto maior o nível da conta (prata ou ouro), mais serviços ficam liberados. O Meu INSS é gratuito: ninguém cobra para consultar extratos ou fazer pedidos.',
      ],
    },
    {
      heading: 'Passo 2: emita o extrato (CNIS)',
      paragraphs: [
        'Na tela inicial, toque em "Do que você precisa?" e pesquise "CNIS". Escolha o tipo de extrato: só os vínculos, os vínculos com as remunerações ou o resumo anual a partir de novembro de 2019. O documento é gerado na hora, em até 5 minutos, e você baixa o PDF no celular. Para quem quer se aposentar, o extrato com remunerações é o mais útil.',
        'Se o aplicativo estiver fora do ar, ligue para o 135 (segunda a sábado, das 7h às 22h) e peça orientação ou agendamento.',
      ],
    },
    {
      heading: 'Exemplo: o CNIS do Roberto',
      paragraphs: [
        'Roberto tem 52 anos e quer saber quando poderá se aposentar. Ele abriu o extrato e comparou com a carteira de trabalho. A tabela mostra o que apareceu:',
      ],
      table: {
        caption: 'Vínculos no CNIS do Roberto',
        columns: ['Empregador', 'Período', 'Situação'],
        rows: [
          ['Mercearia União', '03/1998 a 11/2004', 'Correto'],
          ['Construtora Alfa', '02/2005 a 07/2008', 'Correto'],
          [
            'Transportes Beta',
            '09/2008 a 05/2011 (na carteira)',
            'Não aparece no CNIS',
          ],
          ['Indústria Gama', '08/2011 até hoje', 'Correto'],
        ],
      },
    },
    {
      heading: 'O que fazer quando falta um vínculo',
      paragraphs: [
        'O vínculo da Transportes Beta, com 33 meses (de setembro de 2008 a maio de 2011), não aparece e não conta para a aposentadoria do Roberto até que o INSS o inclua. A correção se chama atualização de tempo de contribuição. Ele pode pedir numa agência do INSS, sem agendamento específico, ou durante o pedido do benefício. Para isso, leva documento com foto, CPF, o requerimento de atualização e provas do período: carteira de trabalho, contracheques e outros comprovantes de pagamento. Em caso de dúvida, ligue para o 135.',
        'Outros problemas comuns no extrato são a remuneração com valor abaixo do salário mínimo, que o CNIS sinaliza com um indicador de pendência, e contribuições do autônomo recolhidas com valor insuficiente. Nesses casos, o INSS permite ajustar ou complementar a contribuição para que o mês seja considerado, e o extrato mostra o que está pendente. Se o nome ou a data de nascimento estiverem diferentes do seu documento, peça a correção dos dados cadastrais com o documento original.',
      ],
    },
    {
      heading: 'Passo 3: peça e acompanhe um benefício',
      paragraphs: [
        'No Meu INSS, pesquise o benefício que deseja (aposentadoria, auxílio por incapacidade, salário-maternidade, pensão por morte, BPC) e siga as telas, anexando os documentos solicitados. Depois, acompanhe o andamento em "Consultar Pedidos". Se o INSS pedir mais documentos, ele abre uma exigência com prazo, em geral de 30 dias, e o pedido pode ser indeferido se você não responder. Responda pelo próprio aplicativo.',
        'Perícia médica e algumas avaliações são presenciais; a data aparece no pedido. Leve documento com foto e os laudos mais recentes.',
      ],
    },
    {
      heading: 'Quando pedir ajuda',
      paragraphs: [
        'Procure uma agência do INSS ou ligue para o 135 se o extrato estiver errado, se você não conseguir acessar a conta gov.br ou se o pedido ficar parado muito além do esperado. Desconfie de quem cobra para "liberar" benefício: o pedido no INSS é gratuito.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso ir à agência?',
      answer:
        'Na maioria dos casos, não. O pedido e o acompanhamento são feitos pelo Meu INSS ou pelo telefone 135. Perícias, alguns atendimentos e a atualização de tempo de contribuição podem ser presenciais.',
    },
    {
      question: 'O CNIS mostra quanto falta para me aposentar?',
      answer:
        'Mostra os dados para a conta. Há simuladores no Meu INSS, e o cálculo exato depende da regra de transição aplicável a você.',
    },
    {
      question: 'Trabalhei sem carteira assinada. Como provar?',
      answer:
        'Em geral é preciso reunir documentos da época, como recibos, contracheques, contratos e testemunhos, e pedir a atualização do tempo. Cada caso é analisado pelo INSS.',
    },
    {
      question: 'O extrato do CNIS é o mesmo que a carta de concessão?',
      answer:
        'Não. O CNIS lista vínculos e contribuições. A carta de concessão é o documento que o INSS envia depois que um benefício é aprovado.',
    },
    {
      question: 'Meu nome está diferente no CNIS. O que faço?',
      answer:
        'Peça a correção dos dados cadastrais no INSS, com documento de identidade ou certidão que comprove o nome correto, antes de pedir o benefício.',
    },
  ],
  sources: [
    {
      label: 'Meu INSS — Instituto Nacional do Seguro Social',
      url: 'https://meu.inss.gov.br/',
    },
    {
      label: 'Portal gov.br — emitir extrato de contribuição (CNIS)',
      url: 'https://www.gov.br/pt-br/servicos/emitir-extrato-de-contribuicao-cnis',
    },
    {
      label: 'INSS — atualização de tempo de contribuição',
      url: 'https://www.gov.br/inss/pt-br/saiba-mais/seus-direitos-e-deveres/atualizacao-de-tempo-de-contribuicao',
    },
    {
      label: 'Lei 8.213/1991 — Planos de Benefícios da Previdência Social',
    },
  ],
} as const satisfies GuideDocument;
