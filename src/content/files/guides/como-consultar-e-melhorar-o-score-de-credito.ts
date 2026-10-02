import type { GuideDocument } from '../../types';

export const guideComoConsultarEMelhorarOScoreDeCredito = {
  kind: 'guide',
  slug: 'como-consultar-e-melhorar-o-score-de-credito',
  title: 'Como consultar e melhorar o score de crédito',
  description:
    'Veja onde consultar o score de graça, como investigar uma queda de pontuação, o que fazer com dados errados e como o Cadastro Positivo entra nessa conta.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-29',
  updatedAt: '2026-10-02',
  tags: ['score', 'credito', 'cadastro-positivo', 'serasa'],
  featuredCalculators: ['simulador-de-emprestimo', 'juros-compostos'],
  highlights: [
    {
      value: '0 a 1.000',
      label: 'Faixa do score',
      note: 'Quanto maior, melhor a avaliação.',
    },
    {
      value: 'Grátis',
      label: 'Consulta',
      note: 'A lei garante acesso ao seu cadastro e à sua nota.',
    },
    {
      value: 'Automático',
      label: 'Entrada no Cadastro Positivo',
      note: 'Você pode pedir a saída quando quiser.',
    },
  ],
  sections: [
    {
      heading: 'O que o score mede e o que ele não mede',
      paragraphs: [
        'O score é uma pontuação, em geral de 0 a 1.000, calculada por um birô de crédito para indicar a chance de uma pessoa pagar as contas em dia. Ele não é uma nota única nem oficial: Serasa, Boa Vista e SPC têm modelos próprios, e a mesma pessoa pode ter pontuações diferentes em cada um.',
        'Também não é o score que decide o crédito. Banco ou loja olham a renda, o histórico com a própria instituição e outros dados. Um score alto não garante aprovação, e um score baixo não impede toda contratação, mas pode piorar os juros oferecidos.',
      ],
      table: {
        caption:
          'Faixas usadas pela Serasa (outros birôs podem usar escalas próprias)',
        columns: ['Pontuação', 'Leitura'],
        rows: [
          ['0 a 300', 'Baixa'],
          ['301 a 500', 'Regular'],
          ['501 a 700', 'Boa'],
          ['701 a 1.000', 'Excelente'],
        ],
      },
    },
    {
      heading: 'Consulte nos três birôs',
      paragraphs: [
        'Entre no aplicativo ou no site de Serasa, Boa Vista e SPC, crie ou acesse o cadastro com seu CPF e procure a área do score. A Lei do Cadastro Positivo garante que você acesse gratuitamente as informações sobre você, incluindo o histórico e a nota, sem precisar justificar. Os nomes dos menus mudam com frequência, então procure por "score", "meu CPF" ou "Cadastro Positivo".',
        'Anote a pontuação, a data da consulta e os motivos que o birô mostrar. Repita a consulta uma vez por mês, no mesmo dia, para enxergar a evolução. Consultar o seu próprio score não derruba a nota.',
      ],
    },
    {
      heading: 'Exemplo: o score de Bruno caiu 120 pontos',
      paragraphs: [
        'Bruno tinha 680 pontos e, um mês depois, viu 560: uma queda de 120 pontos. Ele não perdeu o emprego nem deixou de pagar nada que lembre. O passo a passo da investigação foi este.',
        'Primeiro, olhou as pendências em aberto. Achou uma conta de telefone de R$ 89,90 vencida e esquecida, que o credor havia registrado como dívida em atraso. Segundo, conferiu o histórico de pagamentos e viu um cartão pago com 25 dias de atraso. Terceiro, listou os pedidos de crédito recentes: havia simulado financiamento em quatro lojas na mesma semana.',
        'Com isso, agiu em ordem. Pagou a conta de telefone e guardou o comprovante. Atualizou o endereço e o telefone no cadastro. Passou a pagar o cartão por débito automático para não esquecer o vencimento. A pontuação não voltou de uma vez, e ele sabia que não voltaria: o score reflete o comportamento ao longo do tempo.',
      ],
      table: {
        caption: 'O que costuma pesar para cima e para baixo',
        columns: ['Costuma ajudar', 'Costuma prejudicar'],
        rows: [
          ['Pagar contas em dia', 'Atrasos e dívidas negativadas'],
          [
            'Manter dados cadastrais atualizados',
            'Dados desatualizados ou inconsistentes',
          ],
          [
            'Usar o crédito com moderação',
            'Vários pedidos de crédito em pouco tempo',
          ],
          [
            'Manter histórico no Cadastro Positivo',
            'Sair do cadastro sem ter outro histórico',
          ],
        ],
      },
    },
    {
      heading: 'Se há dado errado ou o crédito foi negado',
      paragraphs: [
        'Se encontrar uma dívida que não é sua, um pagamento não computado ou um dado de outra pessoa, peça a correção ao birô e ao credor, por escrito. O Código de Defesa do Consumidor dá direito à correção imediata, e o arquivo deve comunicar a alteração em até 5 dias úteis. Guarde protocolo e prints.',
        'Se um banco recusou o crédito por decisão automática, a Lei do Cadastro Positivo permite pedir a revisão da decisão e conhecer os principais critérios usados na análise de risco, resguardado o segredo empresarial. Faça o pedido ao banco ou à loja que negou. Se não resolver, registre reclamação no consumidor.gov.br, no Procon ou, no caso de instituição financeira, no Banco Central pelo telefone 145 ou pelo site, depois de tentar o SAC e a ouvidoria do banco.',
      ],
    },
    {
      heading: 'Cadastro Positivo: o que mudou e como sair',
      paragraphs: [
        'Desde 2019, o histórico de pagamentos entra no Cadastro Positivo sem precisar de autorização prévia, e você pode pedir o cancelamento a qualquer momento. Quem tem pouco histórico de dívidas pode ser prejudicado ao sair, porque deixa de provar que paga em dia. Por outro lado, quem tem contas em dia e saiu do cadastro pode pedir a reabertura.',
        'Desconfie de quem promete "turbinar o score" por pagamento. Não existe taxa que eleve a nota. O que funciona é regularizar pendências, pagar em dia e esperar o histórico melhorar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Por que meu score é diferente em cada birô?',
      answer:
        'Cada birô usa dados e modelos próprios de cálculo, e a nota é só uma referência. Uma diferença entre eles é normal.',
    },
    {
      question: 'Pagar uma dívida antiga faz o score subir na hora?',
      answer:
        'Nem sempre. A baixa do registro ajuda, mas o histórico de atraso continua pesando por um tempo. Acompanhe a pontuação nas semanas seguintes.',
    },
    {
      question: 'Consultar meu score muitas vezes baixa a nota?',
      answer:
        'Não. A consulta que você faz ao seu próprio cadastro não afeta a pontuação. O que pode pesar são fatores como atrasos e pedidos de crédito, conforme o modelo de cada birô.',
    },
    {
      question: 'Posso sair do Cadastro Positivo?',
      answer:
        'Pode. O pedido é feito aos gestores do cadastro (os birôs). Lembre que isso reduz as informações positivas sobre você.',
    },
    {
      question: 'Quanto tempo leva para o score melhorar?',
      answer:
        'Não há prazo fixo. Depende do histórico de cada pessoa e do modelo de cada birô. Mantenha as contas em dia por vários meses e acompanhe a evolução.',
    },
  ],
  sources: [
    {
      label: 'Lei 12.414/2011 — Lei do Cadastro Positivo',
    },
    {
      label: 'Lei Complementar 166/2019',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990), art. 43',
    },
    {
      label:
        'Banco Central do Brasil — reclamação contra instituições financeiras',
      url: 'https://www.gov.br/pt-br/servicos/registrar-reclamacao-contra-instituicao-supervisionada-pelo-banco-central',
    },
  ],
} as const satisfies GuideDocument;
