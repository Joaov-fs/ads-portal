import type { NewsDocument } from '../../types';

export const newsFiesPreSelecionados18Novembro = {
  kind: 'news',
  slug: 'fies-pre-selecionados-tem-ate-18-11-para-validar-dados-e-lista-de-espera-sai-de-25-a-30-11',
  title:
    'Fies: pré-selecionados têm até 18/11 para validar os dados e a lista de espera sai de 25 a 30/11',
  description:
    'O MEC divulgou em 16/11 os pré-selecionados das 50 mil vagas do Fies. Veja como validar a inscrição até 18/11, o prazo no banco e quando sai a lista de espera.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/fies-pre-selecionados-tem-ate-18-11-para-validar-dados-e-lista-de-espera-sai-de-25-a-30-11.jpg',
    alt: 'Documento com as datas do Fies, calendário de novembro com o dia 18 marcado e celular mostrando o resultado de pré-selecionado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-17',
  updatedAt: '2026-11-17',
  tags: ['fies', 'financiamento-estudantil', 'mec', 'faculdade', 'educacao'],
  featuredCalculators: ['porcentagem', 'juros-compostos'],
  highlights: [
    {
      value: '18/11',
      label: 'Último dia para validar os dados',
      note: 'A validação é feita na comissão da instituição de ensino.',
    },
    {
      value: '50 mil',
      label: 'Vagas remanescentes do Fies',
      note: 'Metade das vagas é do Fies Social.',
    },
    {
      value: '25 a 30/11',
      label: 'Chamada da lista de espera',
      note: 'Quem não foi pré-selecionado entra na lista automaticamente.',
    },
  ],
  sections: [
    {
      heading: 'O resultado saiu em 16/11 e o prazo mais curto é o de quarta-feira',
      paragraphs: [
        'O Ministério da Educação divulgou em 16 de novembro a lista de pré-selecionados da edição de vagas remanescentes do Fundo de Financiamento Estudantil (Fies) do segundo semestre de 2026. São 50 mil vagas em cursos de graduação de instituições privadas, e o resultado pode ser consultado no Portal Acesso Único, com login da conta Gov.br.',
        'Quem aparece como pré-selecionado ainda não tem o financiamento garantido. O candidato precisa validar os dados da inscrição até quarta-feira, 18 de novembro, na Comissão Permanente de Supervisão e Acompanhamento do Fies (CPSA) da instituição para a qual foi pré-selecionado. Perder essa data é o risco mais concreto agora, porque o prazo é de apenas dois dias, 17 e 18/11.',
        'Esta é a continuação da notícia sobre a abertura das vagas, publicada em 31 de outubro. O que mudou desde então: o resultado da chamada única já saiu e começou a contagem da validação.',
      ],
    },
    {
      heading: 'Como fica a validação e o que vem depois dela',
      image: {
        src: '/images/news/fies-pre-selecionados-tem-ate-18-11-para-validar-dados-e-lista-de-espera-sai-de-25-a-30-11-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com resultado em 16/11, validação até 18/11 e lista de espera de 25 a 30/11.',
        caption: 'As datas da etapa: resultado em 16/11 e validação até 18/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A validação na instituição é a primeira etapa. A segunda é feita no banco: a partir do terceiro dia útil da validação, o candidato tem dez dias para também validar as informações junto ao agente financeiro. As datas exatas dessa janela dependem de quando a instituição concluir a sua parte, então vale acompanhar o andamento no Acesso Único e perguntar à comissão da faculdade.',
        'Candidatos que não foram pré-selecionados na chamada única entram automaticamente na lista de espera. Não é preciso se inscrever de novo. A convocação da lista de espera está prevista para o período de 25 a 30 de novembro, e as vagas que sobrarem da validação dos primeiros pré-selecionados podem ser redistribuídas nessa etapa.',
        'Para quem ficou na lista de espera, a recomendação prática é manter o Gov.br acessível, conferir o Acesso Único todos os dias nesse período e já separar os documentos que a faculdade costuma pedir, como comprovantes de renda e de residência. A lista exata de documentos varia e deve ser confirmada na própria instituição.',
      ],
    },
    {
      heading: 'Fies Social: a conta da renda por pessoa',
      paragraphs: [
        'Metade das vagas é do Fies Social, voltado a quem está no Cadastro Único e tem renda familiar mensal de até meio salário mínimo por pessoa. Com o salário mínimo de R$ 1.621, o limite é de R$ 810,50 por integrante da família. Nessa modalidade, o financiamento pode cobrir até 100% dos encargos educacionais, conforme as regras do programa.',
        'A conta é simples: some a renda bruta de todos os moradores e divida pelo número de pessoas. Uma família de 4 pessoas com renda total de R$ 3.000 tem R$ 750 por pessoa, abaixo de R$ 810,50. Já uma família de 3 pessoas com R$ 3.000 tem R$ 1.000 por pessoa e passa do limite do Fies Social, embora ainda possa se enquadrar na regra geral do edital, de até três salários mínimos por pessoa (R$ 4.863).',
      ],
      table: {
        caption: 'Renda por pessoa e limite do Fies Social (R$ 810,50)',
        columns: ['Família', 'Renda bruta', 'Renda por pessoa', 'Fies Social'],
        rows: [
          ['4 pessoas', 'R$ 3.000', 'R$ 750,00', 'Dentro do limite'],
          ['3 pessoas', 'R$ 3.000', 'R$ 1.000,00', 'Acima do limite'],
          ['2 pessoas', 'R$ 1.600', 'R$ 800,00', 'Dentro do limite'],
        ],
      },
    },
    {
      heading: 'O que o financiamento muda no orçamento',
      paragraphs: [
        'Financiar a faculdade não elimina a mensalidade, apenas a empurra para depois. Antes de assinar, estime quanto do curso será financiado, qual é a parte que continua a ser paga durante o curso e como os juros e a correção podem aumentar o saldo devedor. As condições de pagamento dependem das regras do programa e do contrato, e devem ser lidas por inteiro antes da assinatura.',
        'Um exemplo só para ilustrar a conta: se a mensalidade do curso é de R$ 900 e o estudante financia 50%, são R$ 450 financiados por mês, ou R$ 5.400 em 12 meses, antes de qualquer encargo. As calculadoras de porcentagem e de juros compostos do PortalFina ajudam a testar cenários, sem substituir as condições oficiais do contrato.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando o pré-selecionado do Fies precisa validar os dados?',
      answer:
        'Até 18 de novembro de 2026, na Comissão Permanente de Supervisão e Acompanhamento do Fies (CPSA) da instituição de ensino para a qual foi pré-selecionado.',
    },
    {
      question: 'Quem não foi pré-selecionado perdeu a chance?',
      answer:
        'Não necessariamente. Quem não foi pré-selecionado na chamada única entra automaticamente na lista de espera, com convocação prevista de 25 a 30 de novembro.',
    },
    {
      question: 'Onde consulto o resultado do Fies?',
      answer:
        'No Portal Acesso Único (acessounico.mec.gov.br/fies), com o login da conta Gov.br. A classificação dos pré-selecionados está disponível desde 16 de novembro.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Fies, candidatos pré-selecionados devem validar dados da inscrição',
      url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-11/fies-candidatos-pre-selecionados-devem-validar-dados-da-inscricao',
    },
    {
      label:
        'Agência Brasil: MEC divulga resultado das 50 mil vagas remanescentes do Fies 2026',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/educacao/audio/2026-11/mec-divulga-resultado-das-50-mil-vagas-remanescentes-do-fies-2026',
    },
    {
      label: 'MEC: MEC divulga resultado da edição do Fies para vagas remanescentes',
      url: 'https://www.gov.br/mec/pt-br/assuntos/noticias/2026/novembro/mec-divulga-resultado-da-edicao-do-fies-para-vagas-remanescentes',
    },
    {
      label: 'Portal Acesso Único: Fies',
      url: 'https://acessounico.mec.gov.br/fies',
    },
  ],
} as const satisfies NewsDocument;
