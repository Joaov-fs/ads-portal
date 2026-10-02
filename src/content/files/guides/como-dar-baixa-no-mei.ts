import type { GuideDocument } from '../../types';

export const guideComoDarBaixaNoMei = {
  kind: 'guide',
  slug: 'como-dar-baixa-no-mei',
  title: 'Como dar baixa no MEI e o que acontece com as dívidas',
  description:
    'Quando vale encerrar o CNPJ, o passo a passo no Portal do Empreendedor e por que a baixa não apaga os débitos.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-18',
  updatedAt: '2026-10-02',
  tags: ['mei', 'baixa', 'cnpj', 'encerramento'],
  featuredCalculators: ['das-mei-atraso'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Custo da baixa',
      note: 'Pelo Portal do Empreendedor.',
    },
    {
      value: 'Mantém',
      label: 'Dívidas',
      note: 'A baixa não apaga os débitos.',
    },
    {
      value: 'DASN',
      label: 'Declaração final',
      note: 'Obrigatória na baixa.',
    },
  ],
  sections: [
    {
      heading: 'Quando vale a pena dar baixa',
      paragraphs: [
        'Dê baixa se você parou de trabalhar por conta própria, passou a ter sócio, foi para um emprego que não permite a atividade ou quer migrar para outro tipo de empresa. O DAS é fixo e continua sendo cobrado todo mês mesmo sem faturamento, e a dívida cresce com multa e juros.',
        'Um exemplo: uma manicure (serviços, DAS de R$ 86,05) para de atender em março, mas só encerra o CNPJ em setembro. Foram seis meses de DAS, R$ 516,30, pagos sem receita. Se não pagou, o valor ainda aumenta com multa e juros. Quem pretende voltar a trabalhar como MEI no futuro também deve pesar que a baixa não pode ser desfeita.',
      ],
    },
    {
      heading: 'Antes de começar: o que conferir',
      paragraphs: [
        'Separe o CNPJ e a conta gov.br. Verifique no PGMEI quais meses de DAS estão em aberto e se todas as declarações anuais (DASN-SIMEI) foram entregues. Se tiver empregado, regularize a rescisão antes, porque a baixa do CNPJ não encerra as obrigações trabalhistas e previdenciárias.',
        'Você pode dar baixa mesmo com débitos: o portal não impede o pedido. Mas isso só encerra a empresa, não a dívida, como mostram as seções abaixo.',
      ],
    },
    {
      heading: 'Passo a passo da baixa no Portal do Empreendedor',
      paragraphs: [
        'Passo 1: entre no Portal do Empreendedor com sua conta gov.br e acesse o serviço de baixa da empresa, na área de quem já é MEI. Passo 2: confirme os dados do CNPJ e o pedido de encerramento. Passo 3: guarde o comprovante, que mostra a situação do CNPJ como baixado.',
        'O processo é gratuito e feito sozinho, sem contador. A baixa extingue o CNPJ e o enquadramento no MEI; também é uma boa hora de avisar a prefeitura e de cancelar alvará, inscrição municipal e notas fiscais que ainda usava.',
      ],
    },
    {
      heading: 'A declaração de extinção (DASN-SIMEI) e seus prazos',
      paragraphs: [
        'Depois da baixa, é obrigatória a declaração anual de extinção, informando a receita bruta do período em que a empresa funcionou. O prazo é o último dia de junho, se a extinção ocorreu de janeiro a abril, ou o último dia do mês seguinte, se ocorreu de maio a dezembro.',
      ],
      table: {
        caption: 'Prazo da DASN-SIMEI de extinção',
        columns: ['Mês da baixa', 'Prazo da declaração'],
        rows: [
          [
            'Janeiro a abril (exemplo: baixa em 10 de março)',
            'Até 30 de junho',
          ],
          [
            'Maio a dezembro (exemplo: baixa em 15 de agosto)',
            'Até 30 de setembro',
          ],
        ],
      },
    },
    {
      heading: 'O que acontece com as dívidas',
      paragraphs: [
        'A baixa não cancela o DAS devido nem as multas. Os débitos continuam exigíveis e passam a ser cobrados do titular, pelo CPF. O DAS do mês em que a baixa foi feita também é devido.',
        'Exemplo: dois DAS de comércio (R$ 82,05 cada) venceram em 20 de agosto e 20 de setembro de 2026 e foram pagos só em 15 de outubro. O primeiro sai por R$ 98,92 e o segundo por R$ 89,64, total de R$ 188,56, R$ 24,46 a mais que o valor original de R$ 164,10. Se a dívida não for paga, pode ser inscrita em dívida ativa e passar a ser cobrada pela Procuradoria da Fazenda Nacional, com impedimento para emitir certidões negativas.',
        'É possível pedir parcelamento no Portal do Simples Nacional mesmo com o CNPJ baixado, mas os períodos precisam ter a DASN-SIMEI entregue, o limite é de 60 parcelas e cada parcela tem valor mínimo de R$ 50,00.',
      ],
    },
    {
      heading: 'Erros comuns na hora de encerrar',
      paragraphs: [
        'Esquecer a DASN-SIMEI de extinção, o que gera multa por atraso (mínimo de R$ 50,00). Acreditar que a baixa apaga o que foi devido antes. E deixar o CNPJ parado por anos sem faturar, acumulando DAS e multas.',
        'Em caso de dúvida, o Sebrae atende pela Central de Relacionamento 0800 570 0800.',
      ],
    },
    {
      heading: 'E se eu quiser voltar a ser MEI',
      paragraphs: [
        'Não é possível reabrir o mesmo CNPJ. Se voltar a trabalhar como MEI, você abre um novo cadastro, com outro número, mas os débitos do CNPJ anterior continuam existindo no seu CPF e precisam ser tratados à parte.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso dar baixa com DAS atrasado?',
      answer:
        'Sim, a baixa é aceita mesmo com débitos de DAS ou de declarações. Eles continuam sendo cobrados depois, em nome do titular, e podem ser pagos ou parcelados.',
    },
    {
      question: 'Posso abrir de novo o mesmo CNPJ depois da baixa?',
      answer:
        'Não. O CNPJ baixado não é reaberto. É possível abrir um novo MEI, com número diferente, e as dívidas do anterior continuam valendo.',
    },
    {
      question: 'A baixa cancela o INSS que já paguei?',
      answer:
        'Não. As contribuições pagas continuam contando para os benefícios previdenciários. O que deixa de existir é a contribuição dos meses seguintes, o que pode reduzir ou interromper a proteção.',
    },
    {
      question: 'Qual é o prazo da declaração depois da baixa?',
      answer:
        'Se a baixa foi de janeiro a abril, até o último dia de junho. De maio a dezembro, até o último dia do mês seguinte. Fora do prazo há multa, de no mínimo R$ 50,00.',
    },
    {
      question: 'Preciso de contador para dar baixa?',
      answer:
        'Não. A baixa e a declaração de extinção são feitas gratuitamente pelo titular, no Portal do Empreendedor e no Portal do Simples Nacional.',
    },
    {
      question: 'Se eu passei do limite de faturamento, preciso dar baixa?',
      answer:
        'Nem sempre. O excesso leva ao desenquadramento do MEI, que passa a empresa para outro regime, sem fechar o CNPJ. A baixa é o fim da empresa.',
    },
  ],
  sources: [
    {
      label: 'Portal do Empreendedor',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
    },
    {
      label: 'Perguntas frequentes sobre baixa — Portal do Empreendedor',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/baixa-de-mei/perguntas-frequentes-baixa',
    },
    {
      label: 'Manual do Parcelamento de Débitos do MEI — Simples Nacional',
      url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Arquivos/manual/Manual_Parcelamento_MEI.pdf',
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
