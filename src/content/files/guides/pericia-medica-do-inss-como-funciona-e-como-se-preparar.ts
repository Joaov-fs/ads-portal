import type { GuideDocument } from '../../types';

export const guidePericiaInss = {
  kind: 'guide',
  slug: 'pericia-medica-do-inss-como-funciona-e-como-se-preparar',
  title: 'Perícia médica do INSS: como funciona e como se preparar',
  description:
    'Entenda como é a perícia médica do INSS, o que levar, como funciona a telemedicina, o que o perito avalia, o que fazer após o resultado e como é a perícia judicial.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-14',
  tags: ['inss', 'pericia', 'auxilio-doenca', 'incapacidade', 'beneficios'],
  featuredCalculators: [
    'prazo-prorrogacao-auxilio-inss',
    'auxilio-incapacidade',
    'retroativos-inss',
  ],
  highlights: [
    {
      value: '30 dias',
      label: 'Prazo para recorrer do resultado',
      note: 'Contados da ciência da decisão do INSS.',
    },
    {
      value: '90 dias',
      label: 'Limite do Atestmed',
      note: 'Atestado analisado sem perícia presencial, em casos aceitos.',
    },
    {
      value: '15 dias',
      label: 'Janela para pedir prorrogação',
      note: 'Antes da data de cessação do benefício.',
    },
  ],
  sections: [
    {
      heading: 'O que é a perícia médica do INSS',
      paragraphs: [
        'A perícia médica é a avaliação feita por um médico perito federal para decidir se o segurado está incapacitado para o trabalho e, em caso positivo, desde quando e por quanto tempo. Ela é a etapa central dos benefícios por incapacidade, como o auxílio por incapacidade temporária e a aposentadoria por incapacidade permanente.',
        'O perito não é o médico que trata o paciente. Ele analisa documentos, examina o segurado e conclui se a doença ou a lesão impede o trabalho que a pessoa faz. Por isso os documentos do médico assistente são tão importantes: eles contam a história que o perito não viu.',
      ],
    },
    {
      heading: 'Perícia presencial, telemedicina e análise de atestado',
      paragraphs: [
        'Hoje o INSS trabalha com três formas de avaliação. A perícia presencial, feita em uma agência ou unidade de perícia, a perícia por telemedicina, em que o segurado é avaliado por vídeo, e a análise documental do atestado, conhecida como Atestmed, para benefícios de até 90 dias. Segundo a divulgação do governo, a regra do Atestmed foi prorrogada até setembro de 2027.',
        'Qual delas será usada depende do tipo de pedido, do prazo e da regra vigente. O Meu INSS informa a data, o local ou o link da perícia. Se não puder comparecer, avise e remarque antes da data, porque faltar pode levar ao arquivamento do pedido.',
      ],
    },
    {
      heading: 'O que levar no dia',
      paragraphs: [
        'Leve um documento oficial com foto, o CPF e, se houver, o número do benefício ou do protocolo. Leve também todos os documentos médicos em original: atestados recentes com CID, laudos, exames de imagem e laboratoriais, receitas, relatórios de especialistas e comprovantes de internação, cirurgia ou fisioterapia.',
        'Organize os papéis em ordem de data, do mais recente ao mais antigo. Um resumo curto, em uma folha, com a evolução da doença, os tratamentos feitos e as limitações para o trabalho facilita a conversa. Evite levar documentos que não tenham relação com a doença.',
      ],
      table: {
        caption: 'Documentos que mais pesam na perícia',
        columns: ['Documento', 'Por que ajuda'],
        rows: [
          ['Atestado com CID e CRM', 'Mostra o diagnóstico e quem assina.'],
          [
            'Relatório do médico assistente',
            'Descreve a doença, o tratamento e as limitações.',
          ],
          ['Exames recentes', 'Provam o estado atual.'],
          [
            'Receitas e comprovantes de tratamento',
            'Mostram que o tratamento é contínuo.',
          ],
          [
            'Comprovantes de internação ou cirurgia',
            'Marcam datas e gravidade.',
          ],
        ],
      },
    },
    {
      heading: 'O que o perito avalia',
      paragraphs: [
        'O perito verifica se há doença ou lesão, se ela causa incapacidade para a atividade habitual, a data em que a incapacidade começou e se há possibilidade de recuperação. A incapacidade é avaliada em relação ao trabalho que a pessoa exerce, e não em relação a qualquer atividade.',
        'Por isso é importante descrever as tarefas do dia a dia: se o trabalho exige carregar peso, ficar muito tempo em pé, dirigir, digitar ou lidar com o público, e como a doença atrapalha cada uma. Responda com clareza e sem exagerar, porque o perito compara o que você diz com os documentos.',
      ],
    },
    {
      heading: 'Como se comportar na perícia',
      paragraphs: [
        'Chegue com antecedência, mantenha a calma e fale de forma objetiva. Descreva os sintomas, os tratamentos e as dificuldades reais. Não omita doenças antigas relacionadas, porque elas ajudam a explicar o quadro, e o perito costuma ter acesso ao histórico no sistema.',
        'Na telemedicina, teste a internet e a câmera antes, esteja em lugar silencioso e tenha os documentos à mão para mostrar. Anote o horário e o nome do perito, se informado, e guarde qualquer comprovante gerado pelo sistema.',
      ],
    },
    {
      heading: 'O resultado e o que fazer em seguida',
      paragraphs: [
        'O resultado aparece no Meu INSS, com a conclusão sobre a incapacidade, o início, a data de cessação e, se negado, o motivo. Leia com atenção: muitas negativas se baseiam em falta de qualidade de segurado, de carência ou em não reconhecer a incapacidade, e cada motivo exige uma resposta diferente.',
        'Se for concedido, confira a data de início, a data de cessação e o valor. Se a incapacidade continuar, anote a janela de 15 dias antes da alta para pedir a prorrogação. Se houver mudança de situação, como piora do quadro, junte novos documentos e peça nova avaliação.',
      ],
    },
    {
      heading: 'Se o resultado for negativo',
      paragraphs: [
        'O segurado pode recorrer ao INSS em 30 dias, pelo Meu INSS. O recurso é julgado pela Junta de Recursos do Conselho de Recursos da Previdência Social. Anexe novos documentos que respondam ao motivo da negativa, como exames posteriores e relatórios mais detalhados.',
        'Também é possível procurar a Justiça Federal, onde pode ser feita a perícia judicial. Nela, o perito é nomeado pelo juiz, e as partes podem apresentar perguntas, os chamados quesitos. A perícia judicial acontece em outro ambiente e muitas vezes inclui mais detalhes do que a do INSS. Quem não pode pagar advogado pode procurar a Defensoria Pública da União.',
      ],
    },
    {
      heading: 'Perícia judicial: como funciona e como se preparar',
      paragraphs: [
        'A perícia judicial é determinada pelo juiz em ações contra o INSS. O perito é um médico de confiança do juízo, e o laudo dele costuma ter grande peso na sentença. O segurado deve comparecer com os mesmos documentos da perícia do INSS e, se tiver advogado ou defensor, falar com ele sobre os quesitos antes.',
        'Responda com sinceridade e detalhe as limitações. Após o laudo, as partes têm prazo para se manifestar, e o juiz decide. Acompanhe o processo pelo advogado ou pelo sistema do tribunal, e guarde a data da perícia e o número do processo.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são faltar à perícia, levar atestado sem CID ou sem data, exagerar sintomas, esquecer exames e não pedir a prorrogação a tempo. Outro erro é deixar de tratar por achar que a perícia vai resolver: o tratamento contínuo é uma prova importante.',
        'Desconfie de quem cobra para garantir resultado na perícia. Nenhuma pessoa pode prometer aprovação, e o INSS não cobra para marcar ou realizar a avaliação. Use apenas o Meu INSS e a Central 135.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que levar na perícia do INSS?',
      answer:
        'Documento com foto, CPF e todos os documentos médicos em original: atestados com CID, exames, laudos, receitas e relatórios do médico assistente.',
    },
    {
      question: 'Posso faltar à perícia?',
      answer:
        'Faltar pode levar ao arquivamento do pedido. Se não puder ir, avise e remarque pelo Meu INSS ou pela Central 135 antes da data.',
    },
    {
      question: 'Existe perícia por telemedicina no INSS?',
      answer:
        'Sim, em alguns casos a avaliação é feita por vídeo. O Meu INSS informa a data e como acessar.',
    },
    {
      question: 'Quanto tempo tenho para recorrer do resultado?',
      answer:
        'O recurso ao INSS deve ser apresentado em 30 dias, a partir da ciência da decisão.',
    },
    {
      question: 'O que é a perícia judicial?',
      answer:
        'É a avaliação médica determinada por um juiz em uma ação contra o INSS. O perito é nomeado pelo juízo e o laudo tem grande peso na sentença.',
    },
  ],
  sources: [
    { label: 'Lei 8.213/1991, arts. 42 a 47 e 59 a 63' },
    {
      label:
        'Decreto 3.048/1999: recursos ao Conselho de Recursos da Previdência Social',
    },
    { label: 'INSS: Meu INSS e Central 135' },
  ],
} as const satisfies GuideDocument;
