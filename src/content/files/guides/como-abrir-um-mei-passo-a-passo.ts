import type { GuideDocument } from '../../types';

export const guideComoAbrirUmMeiPassoAPasso = {
  kind: 'guide',
  slug: 'como-abrir-um-mei-passo-a-passo',
  title: 'Como abrir um MEI: requisitos, custo mensal e obrigações',
  description:
    'O passo a passo para formalizar como Microempreendedor Individual em 2026, quanto custa o DAS e o que precisa ser declarado todo ano.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-22',
  updatedAt: '2026-10-02',
  tags: ['mei', 'das', 'negocios', 'cnpj'],
  featuredCalculators: ['das-limite-mei', 'das-mei-atraso', 'inss-autonomo'],
  highlights: [
    {
      value: 'R$ 81.000',
      label: 'Limite anual de faturamento',
      note: 'Média de R$ 6.750 por mês.',
    },
    {
      value: 'R$ 82,05',
      label: 'DAS mensal a partir de',
      note: 'Comércio e indústria; serviços pagam R$ 86,05.',
    },
    {
      value: '31 de maio',
      label: 'Declaração anual',
      note: 'DASN-SIMEI do ano anterior.',
    },
  ],
  sections: [
    {
      heading: 'Quem pode ser MEI e quem não pode',
      paragraphs: [
        'Pode ser MEI quem trabalha por conta própria, fatura até R$ 81.000 por ano, tem no máximo um empregado (que receba o salário mínimo ou o piso da categoria) e exerce uma atividade que conste na lista oficial de ocupações do MEI. A lista é o Anexo XI da Resolução CGSN 140/2018, e vale consultá-la antes de começar.',
        'Não pode ser MEI quem é sócio, titular ou administrador de outra empresa, quem pretende abrir filial ou ter mais de um estabelecimento, e quem exerce atividade que não está na lista. Profissões com conselho de classe, como advogado, médico, dentista, engenheiro e contador, em geral ficam de fora. Ter carteira assinada não impede: um empregado CLT pode ser MEI, desde que o contrato de trabalho permita e a atividade seja compatível.',
      ],
    },
    {
      heading: 'Atividades: o que costuma entrar e como isso muda o imposto',
      paragraphs: [
        'Entram atividades como cabeleireiro, manicure, eletricista, pedreiro, costureira, confeiteiro, fotógrafo, vendedor de roupas e diarista, entre muitas outras. A atividade define o valor do DAS: comércio e indústria pagam R$ 1,00 de ICMS, serviços pagam R$ 5,00 de ISS, e quem faz as duas coisas paga os dois adicionais.',
        'Na hora da inscrição você escolhe uma atividade principal e pode acrescentar as secundárias que também estejam na lista. Escolha só o que você realmente vai fazer: cada atividade pode exigir regras próprias da prefeitura, e incluir uma atividade de serviço em um negócio de comércio, por exemplo, aumenta o DAS em R$ 5,00 por mês.',
      ],
    },
    {
      heading: 'O limite de R$ 81.000 e o cálculo no ano de abertura',
      paragraphs: [
        'O limite é de R$ 81.000 por ano, o que dá uma média de R$ 6.750 por mês. Quem fatura R$ 4.500 por mês chega a R$ 54.000 no ano e está dentro, com folga de R$ 27.000.',
        'No ano em que abre o CNPJ, o limite é proporcional: R$ 6.750 multiplicados pelos meses de atividade, e a fração de mês conta como mês inteiro. Quem abre em 12 de março tem dez meses (março a dezembro) e um limite de R$ 67.500 naquele ano. Se vendesse R$ 4.500 por mês nesse período, faturaria R$ 45.000 e ficaria dentro.',
        'Se passar do limite em até 20%, o MEI declara o excesso na DASN-SIMEI, paga o imposto sobre a diferença e deve pedir o desenquadramento. Acima de 20%, o desenquadramento tem efeito retroativo, e o imposto passa a ser calculado como microempresa desde o início do ano; se o excesso ocorrer no primeiro ano, retroage à data de abertura.',
      ],
    },
    {
      heading: 'Passo a passo da abertura no Portal do Empreendedor',
      paragraphs: [
        'A inscrição é gratuita. Qualquer cobrança para abrir o MEI, inclusive de sites que prometem "agilizar" o CNPJ, é desnecessária.',
        'Passo 1: entre no Portal do Empreendedor (gov.br/mei) e escolha "Quero ser MEI", usando sua conta gov.br. Se o portal pedir um nível de segurança maior, ele orienta como elevar. Passo 2: informe seus dados pessoais, telefone, e-mail e o endereço residencial. Passo 3: informe o endereço comercial (pode ser o de casa), a atividade principal, as secundárias e a forma de atuação. Passo 4: leia e confirme as declarações exigidas, revise o resumo e conclua.',
        'Ao final saem o número do CNPJ e o Certificado da Condição de Microempreendedor Individual (CCMEI), na hora. Guarde o CCMEI: é ele que você apresenta a bancos, fornecedores e à prefeitura. Depois, consulte a prefeitura sobre alvará e, conforme a atividade, a vigilância sanitária e o corpo de bombeiros.',
      ],
    },
    {
      heading: 'Quanto custa por mês',
      paragraphs: [
        'O MEI paga um valor fixo (DAS) que reúne INSS, ICMS e ISS. A parte do INSS é de 5% do salário mínimo, R$ 81,05, e o acréscimo depende da atividade. Em um ano, o comércio paga R$ 984,60, o serviço paga R$ 1.032,60 e quem faz os dois paga R$ 1.044,60.',
      ],
      table: {
        caption: 'DAS do MEI em 2026',
        columns: ['Atividade', 'Composição', 'Valor mensal'],
        rows: [
          ['Comércio e indústria', 'R$ 81,05 + R$ 1,00 de ICMS', 'R$ 82,05'],
          ['Serviços', 'R$ 81,05 + R$ 5,00 de ISS', 'R$ 86,05'],
          ['Comércio e serviços', 'R$ 81,05 + R$ 1,00 + R$ 5,00', 'R$ 87,05'],
        ],
      },
    },
    {
      heading: 'Obrigações depois de abrir',
      paragraphs: [
        'Todo mês, pague o DAS até o dia 20 e registre suas receitas no relatório mensal de receitas brutas, guardando as notas e comprovantes. Todo ano, entregue a declaração anual (DASN-SIMEI) até 31 de maio, informando o que faturou no ano anterior. Quem abriu em 2026 declara em 2027 a receita desde a abertura.',
        'Vender para empresas (pessoas jurídicas) exige emitir nota fiscal. Para pessoa física, a regra depende da atividade e do município; confirme na prefeitura. Os guias sobre emissão do DAS e sobre DAS em atraso detalham cada etapa.',
      ],
    },
    {
      heading: 'Erros comuns e o que eles custam',
      paragraphs: [
        'O primeiro erro é abrir o MEI e não pagar o DAS: os meses em aberto não contam para o INSS, acumulam multa e juros e podem virar dívida ativa. O segundo é misturar contas pessoais e do negócio, o que dificulta saber se o faturamento passou do limite. O terceiro é incluir atividade fora da lista ou contratar mais de um empregado, o que obriga o desenquadramento.',
        'Também é comum esquecer a declaração anual por achar que ela só vale para quem faturou: ela é obrigatória mesmo sem receita. Se tiver dúvida, o Sebrae atende gratuitamente pela Central de Relacionamento 0800 570 0800.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto posso faturar por mês sendo MEI?',
      answer:
        'Não existe limite mensal, só o anual de R$ 81.000. Um mês pode ter R$ 10.000 e outro R$ 2.000, desde que a soma do ano fique dentro do limite (ou do proporcional, no ano de abertura).',
    },
    {
      question: 'MEI tem direito a aposentadoria?',
      answer:
        'Sim, desde que o DAS esteja em dia. O MEI tem direito a aposentadoria por idade, auxílio por incapacidade (em regra, com 12 meses de carência), salário-maternidade e pensão para os dependentes. A aposentadoria por tempo de contribuição exige complementar a contribuição para 20%.',
    },
    {
      question: 'Posso ter CLT e ser MEI ao mesmo tempo?',
      answer:
        'Sim, desde que as atividades sejam compatíveis e você respeite as regras do contrato de trabalho. O DAS é pago normalmente, além do desconto de INSS do emprego.',
    },
    {
      question: 'Posso ter dois MEIs ou um MEI e uma sociedade?',
      answer:
        'Não. O MEI não pode ser sócio, titular ou administrador de outra empresa. Quem passa a ter sócio precisa se desenquadrar do MEI.',
    },
    {
      question: 'Preciso de contador para abrir ou manter o MEI?',
      answer:
        'Não. A abertura, a emissão do DAS e a declaração anual são feitas sem custo pelo próprio MEI, no portal ou no aplicativo.',
    },
    {
      question: 'Posso abrir o MEI usando o endereço de casa?',
      answer:
        'Sim, o endereço comercial pode ser o residencial. A prefeitura é quem diz se a atividade pode funcionar naquele local, então confira as regras do município antes.',
    },
  ],
  sources: [
    {
      label: 'Portal do Empreendedor — Governo Federal',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
    },
    {
      label:
        'Quero crescer ou deixar de ser MEI (desenquadramento) — Portal do Empreendedor',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/quero-crescer-desenquadramento',
    },
    {
      label: 'Perguntas e Respostas MEI e Simei — Receita Federal',
      url: 'https://www8.receita.fazenda.gov.br/simplesnacional/arquivos/manual/perguntaomei.pdf',
    },
    {
      label: 'Lei Complementar 123/2006 — Estatuto da Microempresa',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm',
    },
    {
      label: 'Sebrae — Central de Relacionamento 0800 570 0800',
      url: 'https://sebrae.com.br/sites/PortalSebrae/artigos/como-entrar-em-contato-com-o-sebrae',
    },
  ],
} as const satisfies GuideDocument;
