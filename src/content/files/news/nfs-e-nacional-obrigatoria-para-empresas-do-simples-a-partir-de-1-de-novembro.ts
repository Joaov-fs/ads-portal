import type { NewsDocument } from '../../types';

export const newsNfseNacionalSimples2026 = {
  kind: 'news',
  slug: 'nfs-e-nacional-obrigatoria-para-empresas-do-simples-a-partir-de-1-de-novembro',
  title:
    'NFS-e Nacional vira obrigatória para empresas do Simples a partir de 1º de novembro: o que muda na emissão',
  description:
    'Desde 1º/11, ME e EPP do Simples Nacional emitem a nota de serviço pelo Emissor Nacional. Veja o que muda agora, o que vale em 2027 com CBS e IBS e como emitir.',
  category: 'utilidades',
  coverImage: {
    src: '/images/news/nfs-e-nacional-obrigatoria-para-empresas-do-simples-a-partir-de-1-de-novembro.jpg',
    alt: 'Documento da NFS-e Nacional com a data de 1/11/2026, calendário de novembro com o dia 1 marcado, celular com o Emissor Nacional e etiqueta 1º/11.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-31',
  updatedAt: '2026-10-31',
  tags: ['nfs-e', 'simples-nacional', 'nota-fiscal', 'cbs', 'ibs', 'mei'],
  featuredCalculators: ['simples-nacional', 'fator-r', 'das-limite-mei'],
  highlights: [
    {
      value: '1º/11',
      label: 'Início da emissão pelo Emissor Nacional',
      note: 'Vale para ME e EPP do Simples que prestam serviço com NFS-e.',
    },
    {
      value: '1/1/2027',
      label: 'CBS e IBS passam a valer para o Simples',
      note: 'Em novembro e dezembro de 2026 não há CBS nem IBS na nota.',
    },
    {
      value: 'R$ 0',
      label: 'Custo do Emissor Nacional',
      note: 'O serviço é gratuito, com login pelo gov.br.',
    },
  ],
  sections: [
    {
      heading: 'O que passa a valer em 1º de novembro',
      paragraphs: [
        'A partir de domingo, 1º de novembro de 2026, microempresas (ME) e empresas de pequeno porte (EPP) optantes pelo Simples Nacional que prestam serviços sujeitos à Nota Fiscal de Serviços Eletrônica (NFS-e) passam a emitir a nota no padrão nacional, pelo Emissor Nacional. A regra está na Resolução CGSN nº 191, de 4 de agosto de 2026, que alterou a Resolução CGSN nº 140/2018 e revogou a Resolução nº 189/2026, que previa o início em 1º de setembro.',
        'Como 1º de novembro cai em domingo e 2 de novembro é feriado de Finados, o primeiro dia útil com a regra em vigor é terça-feira, 3 de novembro. Quem emite nota todos os dias deve testar o acesso ao Emissor Nacional antes disso, para não descobrir um problema de login com o cliente esperando.',
        'O comunicado da Receita Federal trata de ME e EPP e não detalha o caso do MEI. Quem é MEI deve seguir as orientações do Portal do Empreendedor e da própria prefeitura, e não tratar esta data como regra dele sem conferir.',
      ],
    },
    {
      heading: 'O que muda na prática e o que fica igual até dezembro',
      image: {
        src: '/images/news/nfs-e-nacional-obrigatoria-para-empresas-do-simples-a-partir-de-1-de-novembro-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com emissor nacional, obrigatoriedade desde 1/11/2026, CBS e IBS a partir de 1/1/2027 e custo gratuito.',
        caption:
          'Duas datas para guardar: 1/11/2026 para o emissor e 1/1/2027 para CBS e IBS.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A mudança de novembro é de ferramenta, não de imposto. Entre 1º de novembro e 31 de dezembro de 2026, a empresa emite a nota pelo Emissor Nacional e continua seguindo as regras atuais do Simples Nacional. Não há aplicação de CBS e IBS nesse período.',
        'Veja um exemplo de conta. Uma ME de serviços na primeira faixa do Anexo III do Simples, com alíquota de 6%, emite em novembro três notas de R$ 2.500 cada, somando R$ 7.500. O imposto do mês, apurado no PGDAS-D, continua sendo 6% de R$ 7.500, ou R$ 450. Emitir a nota no sistema nacional não muda esse valor.',
        'A partir de 1º de janeiro de 2027, as regras de CBS e IBS para os optantes do Simples passam a produzir efeitos. A empresa continua emitindo pelo Emissor Nacional e, quando a regulamentação exigir, deve informar e destacar CBS e IBS no documento fiscal. O Ato Conjunto RFB/CGIBS nº 4/2026 trata dessas regras e deve ser lido junto com a Resolução CGSN nº 191/2026.',
      ],
      table: {
        caption: 'Calendário da NFS-e Nacional para o Simples',
        columns: ['Período', 'Como emitir', 'CBS e IBS'],
        rows: [
          [
            'Até 31/10/2026',
            'Conforme a regra de cada município',
            'Não se aplicam',
          ],
          ['1/11 a 31/12/2026', 'Emissor Nacional', 'Não se aplicam'],
          ['A partir de 1/1/2027', 'Emissor Nacional', 'Regras passam a valer'],
        ],
      },
    },
    {
      heading: 'Como emitir a nota no Emissor Nacional',
      paragraphs: [
        'O serviço é gratuito para o contribuinte e funciona pela versão web ou pelo aplicativo NFS-e Mobile. Empresas com sistema próprio podem emitir por integração via API, com credenciamento prévio no Painel do Contribuinte. O acesso é feito com conta gov.br, e o portal do governo indica nível Prata ou Ouro, ou com certificado digital.',
        'Os passos gerais são: entrar com o gov.br, escolher a emissão simplificada ou completa, informar o CPF ou CNPJ do cliente, descrever o serviço, informar o valor e emitir. O sistema calcula os tributos automaticamente. Se você usa um sistema de gestão ou contador, vale perguntar se a integração com o padrão nacional já está pronta.',
        'Há diferenças de município para município. Na cidade de São Paulo, por exemplo, a prefeitura informa que os sistemas municipais passam a servir somente para consultas e emissões retroativas depois das datas de migração. Em outras cidades, o cronograma pode ser diferente, por isso confirme na página da sua prefeitura.',
      ],
    },
    {
      heading: 'O que fazer agora para não travar a emissão',
      paragraphs: [
        'Primeiro, entre no Emissor Nacional com a conta gov.br e confira se o acesso funciona com o CNPJ da empresa. Segundo, verifique com o contador se o cadastro do município está sincronizado e se os códigos de serviço usados nas notas estão corretos. Terceiro, se você emite por sistema próprio ou de terceiros, peça a confirmação de que ele já fala com a API nacional.',
        'Quem ainda está acompanhando o limite de faturamento do Simples (R$ 360 mil por ano para ME e R$ 4,8 milhões para EPP) pode usar a calculadora do portal para estimar o imposto do mês e o efeito do Fator R, porque a nota continua sendo a base do faturamento declarado.',
      ],
    },
  ],
  faq: [
    {
      question: 'A NFS-e Nacional aumenta o imposto do Simples?',
      answer:
        'Não. Em novembro e dezembro de 2026 a empresa segue as regras atuais do Simples e não há CBS nem IBS. A mudança é a ferramenta de emissão.',
    },
    {
      question: 'O Emissor Nacional é pago?',
      answer:
        'Não. O serviço é gratuito para o contribuinte, com acesso por conta gov.br ou certificado digital.',
    },
    {
      question: 'E o MEI, também muda em 1º de novembro?',
      answer:
        'O comunicado da Receita trata de ME e EPP e não cita o MEI. O MEI deve conferir as orientações do Portal do Empreendedor e da prefeitura.',
    },
  ],
  sources: [
    {
      label:
        'Receita Federal: NFS-e Nacional será obrigatória para ME e EPP a partir de 1º de novembro de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/agosto/simples-nacional-nfs-e-nacional-sera-obrigatoria-para-me-e-epp-a-partir-de-1o-de-novembro-de-2026',
    },
    {
      label: 'Gov.br: emitir Nota Fiscal de Serviço Eletrônica (NFS-e)',
      url: 'https://www.gov.br/pt-br/servicos/emitir-nota-fiscal-de-servico-eletronica',
    },
    {
      label:
        'Prefeitura de São Paulo: uso do Emissor Nacional da NFS-e será obrigatório para o Simples',
      url: 'https://prefeitura.sp.gov.br/web/fazenda/w/usoemissornacional',
    },
  ],
} as const satisfies NewsDocument;
