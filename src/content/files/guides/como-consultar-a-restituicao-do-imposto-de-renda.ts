import type { GuideDocument } from '../../types';

export const guideComoConsultarARestituicaoDoImpostoDeRenda = {
  kind: 'guide',
  slug: 'como-consultar-a-restituicao-do-imposto-de-renda',
  title:
    'Como consultar a restituição do Imposto de Renda e entender cada situação',
  description:
    'Onde ver se a restituição está liberada, o que significa cada situação da declaração e como receber quando o valor não cai na conta.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-16',
  updatedAt: '2026-10-02',
  tags: ['imposto-de-renda', 'restituicao', 'receita-federal', 'consulta'],
  featuredCalculators: ['irrf', 'salario-liquido'],
  highlights: [
    {
      value: 'CPF + data',
      label: 'O que você precisa',
      note: 'E o ano da declaração.',
    },
    {
      value: 'Lotes',
      label: 'Como é pago',
      note: 'Em datas divulgadas pela Receita.',
    },
    {
      value: '1 ano',
      label: 'Prazo no Banco do Brasil',
      note: 'Para resgatar se o crédito não caiu.',
    },
  ],
  sections: [
    {
      heading: 'Onde consultar',
      paragraphs: [
        'A consulta é gratuita e pode ser feita por três caminhos: no site da Receita Federal, na opção Meu Imposto de Renda (com a conta gov.br), no aplicativo Meu Imposto de Renda, para celular e tablet, ou pelo telefone 146. Em todos, você informa o CPF, a data de nascimento e o ano da declaração.',
        'A Receita divulga o cronograma de pagamento dos lotes. Por isso, ver "em processamento" depois de entregar a declaração não significa erro: o pagamento só acontece no lote correspondente.',
      ],
    },
    {
      heading: 'Exemplo: a Fernanda confere a restituição',
      paragraphs: [
        'Fernanda entregou a declaração de 2026 em abril e calculava receber R$ 1.850. Veja o que ela encontra em cada etapa da consulta e o que faz:',
      ],
      table: {
        caption: 'Etapas da consulta da Fernanda',
        columns: ['Etapa', 'O que aparece', 'O que fazer'],
        rows: [
          [
            '1. Abre o aplicativo e escolhe consultar restituição',
            'Pede CPF, data de nascimento e o ano da declaração',
            'Informar os dados exatamente como na declaração.',
          ],
          [
            '2. Primeira consulta',
            'Em processamento',
            'Aguardar; a Receita ainda analisa. Consultar de novo depois.',
          ],
          [
            '3. Segunda consulta',
            'Processada, com restituição prevista',
            'Anotar o lote e conferir o banco e a chave Pix informados.',
          ],
          [
            '4. Se aparecer outro cenário',
            'Pendente de regularização',
            'Abrir o extrato da declaração e ver o motivo da pendência.',
          ],
        ],
      },
    },
    {
      heading: 'O que cada situação significa',
      paragraphs: [
        'A consulta mostra em que ponto está a declaração. As mais comuns são as da tabela.',
      ],
      table: {
        caption: 'Situações da declaração',
        columns: ['Situação', 'O que significa'],
        rows: [
          ['Em processamento', 'A Receita ainda analisa a declaração.'],
          [
            'Processada, com restituição',
            'Há valor a receber; veja o lote e a data de pagamento.',
          ],
          [
            'Pendente de regularização',
            'A declaração tem inconsistências (malha fina) que precisam ser corrigidas antes do pagamento.',
          ],
          [
            'Sem restituição ou com imposto a pagar',
            'Não há valor a receber; confira o valor e a guia do imposto.',
          ],
        ],
      },
    },
    {
      heading: 'Como receber o dinheiro',
      paragraphs: [
        'A restituição é depositada na conta ou na chave Pix informada na declaração. Se for Pix, a chave deve ser o CPF. Se a conta estiver errada, encerrada ou o dinheiro não cair, o valor fica disponível no Banco do Brasil por até um ano. Antes do pagamento, o serviço "Alterar dados bancários" permite corrigir a conta; depois, o serviço "Obter restituição não resgatada no banco", no portal da Receita, ajuda a pedir o valor que ficou parado.',
        'A restituição é atualizada pela Selic acumulada do mês seguinte ao do prazo final de entrega até o mês anterior ao pagamento, mais 1% no mês do depósito. Exemplo hipotético: se a Selic acumulada no período fosse de 5%, a correção total seria de 6%, e os R$ 1.850 da Fernanda virariam R$ 1.961.',
      ],
    },
    {
      heading: 'Pendente de regularização, malha fina e compensação',
      paragraphs: [
        'Se a declaração estiver "pendente de regularização", entre no portal Meu Imposto de Renda ou no e-CAC com a conta gov.br e abra o extrato da declaração para ver o motivo, como rendimento informado por fonte pagadora que não bate com o que você declarou ou despesa médica sem recibo. Quando o erro é seu, entregue uma declaração retificadora com os dados corretos. Quando a informação está certa, junte os documentos para comprovar. Resolver rápido libera o pagamento.',
        'Outra causa de atraso é a compensação de ofício: se você tem débito com a Receita ou com outros órgãos federais, a restituição pode ser usada para abater a dívida, e você é avisado por notificação. Regularize o débito para receber o valor.',
      ],
    },
    {
      heading: 'Onde pedir ajuda',
      paragraphs: [
        'Para dúvidas sobre a situação da declaração, ligue para o 146 ou procure um centro de atendimento da Receita Federal com agendamento. Para o depósito que não caiu, fale com o Banco do Brasil e com o banco onde você informou a conta. Desconfie de mensagens e sites que pedem pagamento ou senha para liberar a restituição: a Receita não cobra para devolver o imposto.',
      ],
    },
  ],
  faq: [
    {
      question: 'A restituição vem com correção?',
      answer:
        'Sim. Ela é atualizada pela Selic acumulada do mês seguinte ao do prazo final de entrega até o mês anterior ao pagamento, mais 1% no mês do depósito.',
    },
    {
      question: 'Quem recebe primeiro?',
      answer:
        'Os lotes têm prioridades legais, como idosos, pessoas com deficiência e professores. As demais seguem a ordem de entrega.',
    },
    {
      question: 'Entreguei com a conta errada. E agora?',
      answer:
        'Use o serviço "Alterar dados bancários" antes do pagamento. Se o dinheiro já foi pago e não caiu, ele fica no Banco do Brasil por até um ano, e depois disso pode ser pedido pela Receita.',
    },
    {
      question: 'Posso usar Pix de qualquer chave?',
      answer:
        'Não. Para receber a restituição por Pix, a chave informada precisa ser o CPF do contribuinte.',
    },
    {
      question: 'Estou com "em processamento" há semanas. Preciso fazer algo?',
      answer:
        'Em geral, não. A declaração aguarda análise e lote. Só procure a Receita se a situação mudar para pendência ou se o lote já tiver sido pago e o valor não aparecer.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal do Brasil',
      url: 'https://www.gov.br/receitafederal/pt-br',
    },
    {
      label: 'Receita Federal: restituição do Imposto de Renda',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/restituicao',
    },
    {
      label: 'Banco do Brasil: restituição do Imposto de Renda',
    },
  ],
} as const satisfies GuideDocument;
