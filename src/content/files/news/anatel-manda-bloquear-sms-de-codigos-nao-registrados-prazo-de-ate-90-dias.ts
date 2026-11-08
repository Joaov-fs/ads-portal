import type { NewsDocument } from '../../types';

export const newsAnatelSmsCodigosCurtos2026 = {
  kind: 'news',
  slug: 'anatel-manda-bloquear-sms-de-codigos-nao-registrados-prazo-de-ate-90-dias',
  title:
    'Anatel manda bloquear SMS de códigos não registrados: operadoras têm até 90 dias',
  description:
    'Regras publicadas no DOU em 4/11 criam diretório público de códigos curtos e mandam bloquear SMS de remetentes não cadastrados. Veja o que muda para você.',
  category: 'financas',
  coverImage: {
    src: '/images/news/anatel-manda-bloquear-sms-de-codigos-nao-registrados-prazo-de-ate-90-dias.jpg',
    alt: 'Documento com os prazos da Anatel, celular com SMS bloqueado, etiqueta de 90 dias e carimbo de bloqueado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-08',
  updatedAt: '2026-11-08',
  tags: ['golpes', 'sms', 'anatel', 'celular', 'seguranca'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '90 dias',
      label: 'Prazo para bloquear códigos sem registro',
      note: 'A notícia oficial não informa a data de início da contagem.',
    },
    {
      value: '71%',
      label: 'Tentativas de golpe feitas por SMS',
      note: 'Dado da pesquisa do Cetic.br citado pelo Ministério das Comunicações.',
    },
    {
      value: '1 empresa',
      label: 'Por código curto',
      note: 'Cada código fica vinculado a uma única pessoa jurídica.',
    },
    {
      value: '4/11',
      label: 'Publicação no Diário Oficial',
      note: 'As regras foram publicadas pela Anatel.',
    },
  ],
  sections: [
    {
      heading: 'O que a Anatel determinou para os SMS de empresas',
      image: {
        src: '/images/news/anatel-manda-bloquear-sms-de-codigos-nao-registrados-prazo-de-ate-90-dias-detalhe.jpg',
        alt: 'Close do documento com os prazos das regras da Anatel e da etiqueta de 90 dias.',
        caption:
          'As operadoras terão de bloquear mensagens de códigos que não estiverem registrados.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Agência Nacional de Telecomunicações (Anatel) publicou no Diário Oficial da União de 4 de novembro de 2026 novas regras para dificultar golpes por mensagem de texto. A medida atinge o SMS enviado por empresas, aquele em que o remetente aparece como um código curto de poucos dígitos, e não como um número de celular comum.',
        'Pelas regras, as operadoras de telefonia móvel ficam obrigadas a bloquear mensagens originadas de códigos não registrados. Cada código curto passa a ser de uso exclusivo de uma única pessoa jurídica, sem compartilhamento. O envio de SMS corporativo fica restrito a empresas devidamente identificadas e cadastradas.',
        'Também será criado um diretório centralizado e de consulta pública, que mostra qual empresa é responsável por cada código curto. Segundo o Ministério das Comunicações, esse diretório deve ficar pronto em até 90 dias.',
      ],
    },
    {
      heading: 'Quais são os prazos para as operadoras',
      paragraphs: [
        'O Ministério das Comunicações divulgou quatro prazos para a implantação das medidas. A notícia oficial não informa a partir de que data eles começam a contar, e por isso o portal não calcula datas finais. Quando houver essa informação, o leitor poderá conferir os dias na calculadora de contador de dias.',
        'Enquanto os prazos correm, o bloqueio ainda não vale por inteiro. Mensagens de códigos não cadastrados podem continuar chegando até que as operadoras concluam a implantação.',
      ],
      table: {
        caption: 'Prazos das regras da Anatel para SMS corporativo',
        columns: ['Medida', 'Prazo'],
        rows: [
          [
            'Políticas internas de segurança e monitoramento nas operadoras',
            '60 dias',
          ],
          [
            'Criação do diretório público de códigos curtos e cadastro das empresas',
            '90 dias',
          ],
          ['Bloqueio de mensagens de códigos não cadastrados', '90 dias'],
          [
            'Relatório de avaliação da Superintendência Executiva ao Conselho Diretor',
            '180 dias',
          ],
        ],
      },
    },
    {
      heading: 'Por que o SMS virou alvo',
      paragraphs: [
        'Segundo pesquisa do Cetic.br citada pelo Ministério das Comunicações, 71% das tentativas de golpe identificadas ocorreram por SMS. É um canal simples e barato para o golpista: basta fazer a mensagem parecer de um banco, de uma loja ou de um órgão público e levar a vítima a clicar em um link.',
        'Com um código curto ligado a uma única empresa e consultável em um diretório público, fica mais fácil descobrir quem enviou cada mensagem e barrar quem não tem cadastro. A regra não elimina o golpe, mas tira do golpista a possibilidade de usar códigos sem dono.',
      ],
    },
    {
      heading: 'O que fazer enquanto as regras não chegam ao seu celular',
      paragraphs: [
        'Até a conclusão da implantação, o cuidado continua sendo do usuário. Nenhum banco ou órgão do governo pede senha, código de verificação ou pagamento por link enviado em SMS. Se a mensagem trouxer urgência, ameaça de bloqueio ou promessa de dinheiro, desconfie.',
        'Em vez de clicar no link, abra o aplicativo ou o site oficial digitando o endereço por conta própria. Se já informou dados, avise o banco pelos canais oficiais e registre um boletim de ocorrência. O guia do portal sobre uso seguro do Pix traz os passos para quem caiu em golpe de transferência.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é um código curto de SMS?',
      answer:
        'É um número de poucos dígitos usado por empresas para enviar mensagens em massa, como avisos e códigos de verificação. Ele aparece no lugar do número de celular como remetente.',
    },
    {
      question: 'Já posso consultar o diretório de códigos curtos?',
      answer:
        'Ainda não. Segundo o Ministério das Comunicações, o diretório público deve ser criado em até 90 dias.',
    },
    {
      question: 'As regras bloqueiam SMS de amigos e familiares?',
      answer:
        'Não. As regras tratam do SMS enviado por empresas com código curto. Mensagens entre pessoas, de número de celular comum, não são o foco da medida.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Anatel publica novas regras para prevenir fraudes por meio de SMS, 4/11/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/anatel-publica-novas-regras-para-prevenir-fraudes-por-meio-de-sms',
    },
    {
      label:
        'Ministério das Comunicações: novas medidas para combater golpes por SMS, 4/11/2026',
      url: 'https://www.gov.br/mcom/pt-br/noticias/2026/novembro/ministerio-das-comunicacoes-destaca-novas-medidas-para-combater-golpes-por-sms-e-proteger-consumidores',
    },
    {
      label:
        'Anatel: aprova medidas para reforçar a segurança de mensagens SMS e prevenir fraudes',
      url: 'https://www.gov.br/anatel/pt-br/assuntos/noticias/anatel-aprova-medidas-para-reforcar-seguranca-de-mensagens-sms-e-prevenir-fraudes',
    },
  ],
} as const satisfies NewsDocument;
