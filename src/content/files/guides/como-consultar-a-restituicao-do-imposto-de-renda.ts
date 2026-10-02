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
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
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
      heading: 'Passo 1: acesse o canal oficial',
      paragraphs: [
        'Entre no site da Receita Federal e escolha "Meu Imposto de Renda" ou use o aplicativo Meu Imposto de Renda, disponível para celular e tablet. Escolha "Consultar restituição", informe o CPF, a data de nascimento e o ano da declaração.',
      ],
    },
    {
      heading: 'Passo 2: entenda a situação',
      paragraphs: [
        'A consulta mostra em que ponto está a declaração. As mais comuns são as que aparecem na tabela.',
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
            'A declaração caiu na malha fina e há inconsistências para corrigir.',
          ],
          [
            'Sem restituição ou com imposto a pagar',
            'Não há valor a receber; confira a guia do imposto.',
          ],
        ],
      },
    },
    {
      heading: 'Passo 3: receba o dinheiro',
      paragraphs: [
        'A restituição é depositada na conta ou na chave Pix informada na declaração. Se a conta estiver errada, inativa ou o dinheiro não cair, o valor fica disponível no Banco do Brasil por até um ano. O pedido de reagendamento pode ser feito pelo site do banco ou no aplicativo.',
      ],
    },
    {
      heading: 'Se caiu na malha fina',
      paragraphs: [
        'Entre no portal Meu Imposto de Renda ou no e-CAC com a conta gov.br para ver as inconsistências. Quando o erro é seu, entregue uma declaração retificadora; quando a informação está correta, apresente os documentos solicitados. Resolver rápido libera o pagamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'A restituição vem com correção?',
      answer:
        'Sim, ela é atualizada pela taxa Selic desde o prazo de entrega até o mês anterior ao pagamento.',
    },
    {
      question: 'Quem recebe primeiro?',
      answer:
        'Os lotes têm prioridades legais, como idosos, pessoas com deficiência e professores. As demais seguem a ordem de entrega.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal do Brasil',
      url: 'https://www.gov.br/receitafederal/pt-br',
    },
    {
      label: 'Banco do Brasil — restituição do Imposto de Renda',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
