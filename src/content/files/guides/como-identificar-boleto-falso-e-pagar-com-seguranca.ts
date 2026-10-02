import type { GuideDocument } from '../../types';

export const guideComoIdentificarBoletoFalsoEPagarComSeguranca = {
  kind: 'guide',
  slug: 'como-identificar-boleto-falso-e-pagar-com-seguranca',
  title: 'Como identificar boleto falso e pagar com segurança',
  description:
    'O que conferir antes de pagar um boleto, como usar o DDA e o que fazer nas primeiras horas se você pagou um boleto falso.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-23',
  updatedAt: '2026-10-02',
  tags: ['boleto', 'golpe', 'seguranca', 'pagamento'],
  highlights: [
    {
      value: '3 itens',
      label: 'Para conferir',
      note: 'Beneficiário, valor e vencimento.',
    },
    {
      value: 'DDA',
      label: 'Débito Direto Autorizado',
      note: 'Lista no app os boletos emitidos contra o seu CPF ou CNPJ.',
    },
    {
      value: 'Agora',
      label: 'Quando agir',
      note: 'Pagou errado? Fale com o banco logo.',
    },
  ],
  sections: [
    {
      heading: 'O que é um boleto falso',
      paragraphs: [
        'Boleto falso é um boleto adulterado ou criado por golpistas para que o dinheiro vá para a conta deles. Existem dois tipos mais comuns. No primeiro, o desenho do boleto parece normal, mas o código de barras leva a outro beneficiário. No segundo, o golpista manda uma cobrança que parece de uma empresa conhecida, com valor, vencimento e logotipo verdadeiros, mas com o beneficiário trocado.',
        'O golpe depende de você pagar sem conferir. A defesa é checar, na tela do próprio banco, quem vai receber o dinheiro.',
      ],
    },
    {
      heading: 'Exemplo: Maria desconfia do boleto de R$ 389,90',
      paragraphs: [
        'Maria paga todo mês a mensalidade de R$ 389,90 do colégio do filho, emitida em nome de "Colégio Aurora Ltda.". Neste mês, o boleto chegou por mensagem de WhatsApp, de um número que ela não conhecia, com o aviso de que o antigo estava "cancelado por erro no sistema".',
        'Ela abriu o aplicativo do banco, escolheu pagar boleto, colou a linha digitável do documento e chegou à tela de confirmação. Nela, o beneficiário aparecia como "J. M. Serviços Digitais Ltda.", e não como o colégio. O valor estava certo, mas o nome não. Maria parou aí: não confirmou o pagamento e ligou para a secretaria da escola, que informou que não havia enviado nenhum boleto novo e que o dela estava disponível no portal da escola.',
        'Ela apagou a mensagem, bloqueou o número, baixou o boleto verdadeiro no portal do colégio e comparou com o do mês anterior. O beneficiário batia, e ela pagou. Se a escola não tivesse atendido, ela esperaria o contato pelo telefone oficial antes de pagar qualquer coisa.',
      ],
      table: {
        caption: 'Sinais de golpe e sinais de segurança',
        columns: ['Sinal de golpe', 'Sinal de segurança'],
        rows: [
          [
            'Chegou por mensagem de número desconhecido.',
            'Foi baixado no site ou no aplicativo oficial da empresa.',
          ],
          [
            'O nome do beneficiário na tela do banco é diferente do da empresa.',
            'O beneficiário bate com o dos boletos anteriores.',
          ],
          [
            'Desconto muito acima do normal ou prazo de poucas horas.',
            'Valor igual ao combinado ou ao do contrato.',
          ],
          [
            'Pedem para pagar por Pix, e não por boleto, ou para "atualizar" o antigo.',
            'Aparece no DDA do seu banco.',
          ],
          [
            'Os números impressos não conferem com a linha digitável.',
            'Linha digitável e código de barras dão o mesmo resultado.',
          ],
        ],
      },
    },
    {
      heading: 'Passo a passo para pagar com segurança',
      paragraphs: [
        'Primeiro, obtenha o boleto no canal oficial: site ou aplicativo da empresa, e-mail cadastrado por você ou carnê que você já recebeu. Segundo, no aplicativo do banco, digite a linha digitável ou leia o código de barras e pare na tela de confirmação. Terceiro, leia o nome e o CNPJ ou CPF do beneficiário, o valor e o vencimento. Se algo não bater com a cobrança, não confirme.',
        'Desconfie também de boletos que pedem pagamento fora do banco, por links ou QR Codes que não são do aplicativo. Nunca digite senha ou cartão em páginas abertas por um link de boleto. Se o boleto estiver vencido, o aplicativo mostra o valor atualizado: confira com a empresa antes de pagar.',
        'Boletos de contas de consumo, como água, luz e telefone, seguem outro padrão de código, mas a regra é a mesma: o nome da concessionária deve aparecer na tela do banco.',
      ],
    },
    {
      heading: 'Use o DDA para filtrar os boletos reais',
      paragraphs: [
        'O Débito Direto Autorizado (DDA) lista no aplicativo do seu banco os boletos emitidos contra o seu CPF ou CNPJ. Ative o serviço na área de boletos ou de cobranças. Quando você receber uma cobrança e ela não aparecer no DDA, desconfie: pode ser falsa, ou ainda não ter sido registrada. Aguarde e confirme com a empresa. O DDA não substitui a conferência do beneficiário, mas reduz muito o risco.',
      ],
    },
    {
      heading: 'Se você já pagou um boleto falso',
      paragraphs: [
        'Aja nas primeiras horas. Ligue para o banco pelo telefone do cartão ou use o chat do aplicativo, informe que foi golpe e peça a contestação do pagamento. Guarde o comprovante, o boleto e as mensagens do golpista e registre um boletim de ocorrência, que pode ser feito pela internet em muitos estados. Peça o número de protocolo.',
        'Avise também a empresa verdadeira: a dívida original não foi paga, então peça um novo boleto e informe o golpe, para evitar cobrança duplicada ou negativação. Se o banco não resolver, registre reclamação na ouvidoria e depois no Banco Central, pelo telefone 145 ou pelo site, ou procure o Procon. A chance de recuperar o dinheiro depende do caso e da rapidez: o banco analisa e pode tentar bloquear o valor se ele ainda estiver na conta do golpista.',
      ],
    },
  ],
  faq: [
    {
      question: 'O banco devolve o dinheiro de um boleto falso?',
      answer:
        'Depende do caso. O banco analisa a contestação, e pode haver responsabilidade conforme as circunstâncias e as provas. Registre tudo por escrito e guarde protocolos.',
    },
    {
      question:
        'O boleto saiu em nome de um beneficiário que eu não conheço, mas o valor é igual ao de sempre. Pago?',
      answer:
        'Não pague até confirmar com a empresa por um canal oficial. Valor correto não prova que o boleto é verdadeiro.',
    },
    {
      question: 'Boleto vencido pode ser pago em qualquer banco?',
      answer:
        'Em regra, boletos registrados podem ser pagos em qualquer instituição, com valor atualizado calculado no momento do pagamento. Confira o beneficiário na tela, como sempre.',
    },
    {
      question: 'Receber o boleto no meu e-mail garante que é verdadeiro?',
      answer:
        'Não. E-mails também são falsificados. Confira o remetente, não clique em links suspeitos e compare o beneficiário com o de boletos anteriores.',
    },
    {
      question:
        'Posso ser cobrado de novo pela empresa se paguei um boleto falso?',
      answer:
        'A empresa pode cobrar a dívida original, porque o pagamento não chegou a ela. Por isso, avise-a logo e guarde a prova do golpe.',
    },
  ],
  sources: [
    {
      label: 'Federação Brasileira de Bancos (Febraban) — dicas de segurança',
    },
    {
      label: 'Banco Central do Brasil — dicas de segurança',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
    {
      label:
        'Banco Central do Brasil — reclamação contra instituições financeiras',
      url: 'https://www.gov.br/pt-br/servicos/registrar-reclamacao-contra-instituicao-supervisionada-pelo-banco-central',
    },
  ],
} as const satisfies GuideDocument;
