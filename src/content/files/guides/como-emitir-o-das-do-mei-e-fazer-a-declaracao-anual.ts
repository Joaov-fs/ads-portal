import type { GuideDocument } from '../../types';

export const guideComoEmitirODasDoMeiEFazerADeclaracaoAnual = {
  kind: 'guide',
  slug: 'como-emitir-o-das-do-mei-e-fazer-a-declaracao-anual',
  title: 'Como emitir o DAS do MEI e fazer a declaração anual (DASN-SIMEI)',
  description:
    'Passo a passo para gerar a guia do mês, pagar por Pix ou código de barras e entregar a declaração anual até 31 de maio.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-28',
  updatedAt: '2026-10-02',
  tags: ['mei', 'das', 'dasn-simei', 'declaracao'],
  featuredCalculators: ['das-limite-mei', 'das-mei-atraso'],
  highlights: [
    {
      value: 'Dia 20',
      label: 'Vencimento mensal',
      note: 'Do DAS.',
    },
    {
      value: '31 de maio',
      label: 'Declaração anual',
      note: 'Da receita do ano anterior.',
    },
    {
      value: 'Grátis',
      label: 'Emissão',
      note: 'Pelo app MEI ou pelo portal.',
    },
  ],
  sections: [
    {
      heading: 'Como o calendário do MEI funciona',
      paragraphs: [
        'O DAS de cada mês vence no dia 20 do mês seguinte: o DAS de setembro, por exemplo, vence em 20 de outubro. Se o dia 20 cair em fim de semana ou feriado, confira a data impressa na própria guia. Já a declaração anual (DASN-SIMEI) tem prazo no último dia de maio e informa o que o MEI faturou no ano anterior.',
      ],
      table: {
        caption: 'Calendário do MEI',
        columns: ['Obrigação', 'Prazo'],
        rows: [
          ['Pagar o DAS', 'Todo dia 20, referente ao mês anterior'],
          [
            'Relatório mensal de receitas',
            'Todo mês, com as notas e comprovantes',
          ],
          ['Declaração anual (DASN-SIMEI)', 'Até 31 de maio'],
        ],
      },
    },
    {
      heading: 'Passo 1: emita a guia do mês',
      paragraphs: [
        'Acesse o Portal do Simples Nacional, entre em "PGMEI — Gerar DAS" com o CNPJ, ou use o aplicativo MEI. Escolha o ano e o mês (a competência) e gere o documento. O valor já vem calculado conforme a atividade: R$ 82,05 para comércio, R$ 86,05 para serviços e R$ 87,05 para quem faz as duas coisas.',
        'Confira se o CNPJ e a competência estão corretos antes de pagar. Pagar a guia de um mês no lugar da de outro não quita o mês que ficou em aberto.',
      ],
    },
    {
      heading: 'Passo 2: pague e guarde o comprovante',
      paragraphs: [
        'O pagamento pode ser feito pelo aplicativo do banco com o código de barras, em lotérica ou por débito automático. Se a guia trouxer o QR Code do Pix, o pagamento também pode ser feito por ele. Guarde o comprovante: a contribuição paga é a prova de que você contribuiu para o INSS.',
        'Depois de alguns dias, volte ao PGMEI e abra o extrato do DAS para confirmar que a competência aparece como paga. Esse extrato também lista o que ainda está em aberto.',
      ],
    },
    {
      heading: 'Passo 3: registre as receitas durante o ano',
      paragraphs: [
        'Mesmo sem contador, o MEI deve registrar a receita bruta mensal no relatório de receitas, separando comércio, indústria e serviços, e guardar as notas fiscais de compras e vendas. É esse relatório que serve de base para a declaração anual e que mostra se o limite de R$ 81.000 está perto de estourar.',
      ],
    },
    {
      heading: 'Passo 4: entregue a declaração anual',
      paragraphs: [
        'No Portal do Simples Nacional, escolha a DASN-SIMEI, entre com o CNPJ e o código de acesso ou conta gov.br e selecione o ano-calendário. Informe a receita bruta total do ano, separando "comércio e indústria" e "serviços", e diga se teve empregado. Revise, transmita e guarde o recibo.',
        'Exemplo: um MEI de comércio e serviços que vendeu R$ 30.000 em mercadorias e prestou R$ 24.000 em serviços em 2026 declara os dois valores separados, totalizando R$ 54.000, dentro do limite de R$ 81.000. No ano pagou 12 DAS de R$ 87,05, ou R$ 1.044,60. Quem abriu o CNPJ no meio do ano informa apenas a receita desde a abertura.',
      ],
    },
    {
      heading: 'O que acontece se a declaração atrasar',
      paragraphs: [
        'A entrega fora do prazo gera multa de 2% ao mês-calendário ou fração, limitada a 20%, com valor mínimo de R$ 50,00. A multa é gerada no momento do envio, em guia à parte. Entregar no prazo evita essa cobrança, mesmo que não tenha havido receita.',
        'A declaração não substitui o pagamento: o DAS mensal segue valendo, e débitos de DAS só podem ser parcelados quando a declaração do período já foi entregue.',
      ],
    },
    {
      heading: 'Se algum DAS ficou para trás',
      paragraphs: [
        'O mesmo PGMEI gera a guia atualizada, com multa e juros. O guia "DAS do MEI em atraso: multa, juros e como regularizar" mostra a conta mês a mês, os efeitos sobre o INSS e como parcelar. Se, durante o ano, a soma das receitas se aproximar de R$ 81.000, avalie o desenquadramento antes de dezembro, porque o excesso gera imposto extra.',
      ],
    },
    {
      heading: 'Erros comuns ao emitir e declarar',
      paragraphs: [
        'Confundir a competência: gerar o DAS de setembro quando o que está em aberto é o de agosto. Declarar a receita como se fosse só de serviços quando parte foi comércio, o que muda a base da declaração. Não registrar o faturamento mês a mês e tentar reconstruir tudo em maio. E usar sites que cobram para emitir o DAS ou entregar a DASN-SIMEI: os dois serviços são gratuitos nos canais oficiais.',
        'Quem ficou sem entregar a declaração de anos anteriores deve entregá-las também, porque a declaração dos períodos é condição para parcelar débitos de DAS.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso entregar a declaração anual se não faturei nada?',
      answer:
        'Sim. A DASN-SIMEI é obrigatória mesmo sem receita; nesse caso, informe zero nos campos de faturamento.',
    },
    {
      question: 'O DAS de setembro vence em qual data?',
      answer:
        'Em 20 de outubro. O DAS sempre se refere ao mês anterior e vence no dia 20 do mês seguinte.',
    },
    {
      question: 'Posso pagar o DAS de vários meses de uma vez?',
      answer:
        'Sim, mas cada competência é uma guia própria, e o pagamento só quita a competência indicada nela. Confira no extrato do PGMEI se todos os meses constam como pagos.',
    },
    {
      question: 'Errei o valor informado na declaração anual. Como corrijo?',
      answer:
        'Acesse a DASN-SIMEI do mesmo ano no Portal do Simples Nacional e retifique a declaração, conferindo antes no recibo o que havia sido informado.',
    },
    {
      question: 'O contador é obrigatório?',
      answer:
        'Não. O MEI pode emitir a guia e fazer a declaração sozinho, sem custo.',
    },
    {
      question: 'Onde tiro dúvidas sobre o DAS?',
      answer:
        'No próprio Portal do Empreendedor ou pela Central de Relacionamento do Sebrae, no 0800 570 0800.',
    },
  ],
  sources: [
    {
      label: 'Portal do Simples Nacional',
      url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/',
    },
    {
      label: 'Portal do Empreendedor',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
    },
    {
      label: 'Perguntas e Respostas MEI e Simei — Receita Federal',
      url: 'https://www8.receita.fazenda.gov.br/simplesnacional/arquivos/manual/perguntaomei.pdf',
    },
    {
      label: 'Sebrae — Central de Relacionamento 0800 570 0800',
      url: 'https://sebrae.com.br/sites/PortalSebrae/artigos/como-entrar-em-contato-com-o-sebrae',
    },
  ],
} as const satisfies GuideDocument;
