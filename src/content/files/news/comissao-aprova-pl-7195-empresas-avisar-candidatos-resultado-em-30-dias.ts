import type { NewsDocument } from '../../types';

export const newsComissaoAprovaPl7195ResultadoProcessoSeletivo = {
  kind: 'news',
  slug: 'comissao-aprova-pl-7195-empresas-avisar-candidatos-resultado-em-30-dias',
  title:
    'Comissão da Câmara aprova projeto que obriga empresas a avisar candidatos do resultado da seleção em até 30 dias',
  description:
    'A Comissão de Trabalho aprovou o PL 7195/25: empregador teria de comunicar o fim do processo seletivo em até 30 dias. Ainda não é lei e segue para a CCJ.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/comissao-aprova-pl-7195-empresas-avisar-candidatos-resultado-em-30-dias.jpg',
    alt: 'Documento com as regras do aviso ao candidato, calendário de dezembro, etiqueta de 30 dias e envelope.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-20',
  updatedAt: '2026-11-20',
  tags: ['processo-seletivo', 'pl-7195', 'camara', 'emprego', 'trabalho'],
  featuredCalculators: ['seguro-desemprego', 'salario-liquido'],
  highlights: [
    {
      value: '30 dias',
      label: 'Prazo para avisar o candidato',
      note: 'Contado da última etapa da seleção.',
    },
    {
      value: 'PL 7195/25',
      label: 'Projeto aprovado na comissão',
      note: 'Ainda precisa passar pela CCJ.',
    },
    {
      value: 'Multa',
      label: 'Na reincidência',
      note: 'A 1ª infração gera só advertência.',
    },
  ],
  sections: [
    {
      heading: 'O que a Comissão de Trabalho aprovou em 19/11',
      paragraphs: [
        'A Comissão de Trabalho da Câmara dos Deputados aprovou o Projeto de Lei 7195/25, do deputado Amom Mandel (Republicanos-AM). O texto obriga empregadores a comunicar aos candidatos o encerramento de um processo seletivo, inclusive a quem não foi escolhido. A notícia foi divulgada pela Agência Câmara em 19/11.',
        'O relator, deputado Leonardo Monteiro (PT-MG), apresentou um substitutivo que mantém os objetivos do projeto original. Uma das mudanças foi trocar a expressão "empresas privadas" por "empregadores", para alcançar também empresas públicas e de economia mista que contratam pela CLT.',
        'É importante separar o que foi aprovado do que já vale. O projeto passou apenas por uma comissão e continua em análise na Câmara. Hoje, nenhuma regra nacional obriga a empresa a dar retorno a quem participou de uma seleção.',
      ],
    },
    {
      heading: 'Prazo de 30 dias, aviso eletrônico e punição',
      image: {
        src: '/images/news/comissao-aprova-pl-7195-empresas-avisar-candidatos-resultado-em-30-dias-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com prazo de 30 dias, meio eletrônico, advertência e multa.',
        caption:
          'Resumo das regras do texto aprovado na comissão; ainda não valem como lei.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Pelo texto aprovado, a comunicação deve ser feita por meio eletrônico, como e-mail ou mensagem, em até 30 dias após a conclusão da última etapa do processo seletivo. A mensagem pode ser padronizada e impessoal, e a empresa não precisa explicar os critérios de seleção ou de eliminação.',
        'Quem descumprir recebe advertência na primeira infração e multa em caso de reincidência. A notícia da Agência Câmara não informa o valor da multa.',
        'Concursos públicos e seleções da administração pública ficam de fora da regra.',
        'Exemplo para entender o prazo, se a regra já existisse: uma entrevista final em 10/12/2026 faria a empresa avisar todos os candidatos até 09/01/2027, 30 dias depois. O exemplo é apenas uma conta de calendário e não indica que a regra esteja em vigor.',
      ],
      table: {
        caption: 'Principais pontos do PL 7195/25 na versão da comissão',
        columns: ['Ponto', 'O que diz o texto'],
        rows: [
          ['Quem avisa', 'Empregadores, inclusive estatais celetistas'],
          ['Quem recebe o aviso', 'Todos os candidatos, aprovados ou não'],
          ['Prazo', 'Até 30 dias após a última etapa'],
          ['Forma', 'Meio eletrônico, mensagem pode ser padronizada'],
          ['Punição', 'Advertência; multa na reincidência'],
          ['Exceção', 'Concursos e seleções da administração pública'],
        ],
      },
    },
    {
      heading: 'O que falta para virar lei',
      paragraphs: [
        'A proposta tramita em caráter conclusivo e agora será analisada pela Comissão de Constituição e Justiça e de Cidadania (CCJC). Esse caminho permite que o texto seja aprovado sem passar pelo plenário, desde que não haja recurso. Depois, o projeto ainda precisa ser aprovado pelo Senado e ir à sanção presidencial.',
        'Até lá, quem participa de seleções continua dependendo da boa vontade da empresa para receber resposta. Vale guardar e-mails e comprovantes de cada etapa e acompanhar a tramitação do PL 7195/25 no site da Câmara.',
        'Para quem está sem emprego, o portal tem calculadoras de seguro-desemprego e de salário líquido, úteis para comparar propostas quando o retorno das empresas chega.',
      ],
    },
  ],
  faq: [
    {
      question: 'Essa regra já vale para as empresas?',
      answer:
        'Não. O PL 7195/25 foi aprovado apenas na Comissão de Trabalho e ainda precisa passar pela CCJC, pelo restante da tramitação na Câmara e pelo Senado.',
    },
    {
      question: 'A empresa teria de explicar por que reprovou o candidato?',
      answer:
        'Não. Pelo texto aprovado, a mensagem pode ser padronizada e impessoal, sem obrigação de informar os critérios de seleção ou eliminação.',
    },
    {
      question: 'Vale para concurso público?',
      answer:
        'Não. O texto aprovado na comissão não se aplica a concursos públicos nem a seleções da administração pública.',
    },
  ],
  sources: [
    {
      label:
        'Agência Câmara: Comissão aprova projeto que obriga empresas a informarem resultado de processo seletivo aos candidatos',
      url: 'https://www.camara.leg.br/noticias/1320999-comissao-aprova-projeto-que-obriga-empresas-a-informarem-resultado-de-processo-seletivo-aos-candidatos',
    },
    {
      label: 'Câmara dos Deputados: ficha de tramitação do PL 7195/2025',
      url: 'https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2599804',
    },
  ],
} as const satisfies NewsDocument;
