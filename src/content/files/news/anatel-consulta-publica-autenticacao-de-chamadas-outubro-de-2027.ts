import type { NewsDocument } from '../../types';

export const newsAnatelAutenticacaoChamadas2027 = {
  kind: 'news',
  slug: 'anatel-consulta-publica-autenticacao-de-chamadas-outubro-de-2027',
  title:
    'Anatel abre consulta para exigir autenticação de chamadas até outubro de 2027 e bloquear ligações sem origem',
  description:
    'A Anatel aprovou em 19/11 consulta pública que antecipa de nov/2028 para out/2027 a autenticação de chamadas. Veja o que muda contra golpes por telefone.',
  category: 'financas',
  coverImage: {
    src: '/images/news/anatel-consulta-publica-autenticacao-de-chamadas-outubro-de-2027.jpg',
    alt: 'Documento de consulta pública com o prazo de outubro de 2027, etiqueta laranja e celular mostrando ligação não autenticada bloqueada.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-21',
  updatedAt: '2026-11-21',
  tags: ['golpes', 'anatel', 'telefone', 'chamadas', 'seguranca'],
  featuredCalculators: ['contador-de-dias', 'porcentagem'],
  highlights: [
    {
      value: 'out/2027',
      label: 'Prazo proposto pela Anatel',
      note: 'Autenticar as chamadas no país. A meta anterior era novembro de 2028.',
    },
    {
      value: '10 dias',
      label: 'Para enviar contribuições',
      note: 'Contagem a partir da publicação da consulta no Diário Oficial.',
    },
    {
      value: '85%',
      label: 'Chamadas curtas ou não completadas',
      note: 'Percentual que, com o volume de ligações, pode barrar a origem por 15 dias.',
    },
    {
      value: '100 mil',
      label: 'Chamadas por mês',
      note: 'Abaixo disso, a empresa seria dispensada de mostrar nome e logotipo na tela.',
    },
  ],
  sections: [
    {
      heading: 'O que a Anatel colocou em consulta pública',
      image: {
        src: '/images/news/anatel-consulta-publica-autenticacao-de-chamadas-outubro-de-2027-detalhe.jpg',
        alt: 'Close do documento com o prazo de outubro de 2027, a meta anterior de novembro de 2028 e o prazo de 10 dias para contribuições.',
        caption:
          'Prazos da proposta: out/2027 para autenticar as chamadas e 10 dias para contribuições.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O Conselho Diretor da Agência Nacional de Telecomunicações (Anatel) aprovou, em votação remota em 19 de novembro de 2026, uma consulta pública sobre o bloqueio de chamadas e mensagens indesejadas e a identificação de ligações feitas por empresas, segundo o noticiário especializado Teletime. A proposta antecipa para outubro de 2027 o prazo de implementação da autenticação de chamadas no país. A meta anterior era autenticar 100% das ligações até novembro de 2028.',
        'Autenticar uma chamada significa que a operadora de origem comprova quem está ligando e a operadora de destino confere essa informação antes de entregar a ligação ao celular. A proposta incorpora ao regulamento geral dos serviços de telecomunicações o bloqueio de chamadas não autenticadas e de chamadas e mensagens com códigos irregulares, preservando comunicações legítimas, como as de serviços públicos essenciais.',
        'Importante: outubro de 2027 é uma proposta em consulta pública, e não uma regra em vigor. Pela notícia, as contribuições poderão ser enviadas por dez dias após a publicação no Diário Oficial da União, prazo curto justificado pela urgência. Esta reportagem não localizou, até a publicação, o aviso oficial com a data de abertura.',
      ],
    },
    {
      heading: 'Ligações de empresas: nome e logotipo na tela',
      paragraphs: [
        'Quando a chamada for de uma pessoa jurídica e estiver autenticada, a proposta prevê que o celular de quem recebe mostre o nome empresarial e o logotipo, quando houver. A identificação seria dispensada se o total de ligações da empresa, por serviço e por operadora, não passar de 100 mil por mês.',
        'Haveria ainda uma base centralizada com os titulares dos números, administrada por entidade técnica designada ou credenciada pela Anatel. A ideia é ter um sistema público de consulta e permitir que o interessado conteste uma vinculação que considere errada.',
        'Para o consumidor, o efeito esperado é reconhecer mais facilmente uma ligação legítima de banco, loja ou órgão público e desconfiar da que chega sem identificação. A regra, porém, ainda depende da conclusão da consulta e de a Anatel editar o texto final.',
      ],
    },
    {
      heading: 'O que a medida provisória já prevê e o limite de 85%',
      paragraphs: [
        'A proposta se apoia na Medida Provisória 1.396/2026, lançada pelo governo em outubro contra golpes por telefone. Segundo o Teletime, a MP manda as operadoras autenticarem as chamadas originadas em suas redes e bloquearem as não autenticadas, com exceções a definir pela Anatel, e dá 60 dias para a agência regulamentar o tema. Pela própria Anatel, esse prazo termina em 12 de dezembro de 2026.',
        'A MP também fixa um limite para chamadas em massa. Quem fizer mais de mil chamadas por acesso, ou dez mil por dia no conjunto de seus acessos, com pelo menos 85% delas não completadas, caindo na caixa postal ou durando até seis segundos, pode ficar impedido de originar chamadas por 15 dias. Órgãos públicos, de saúde, de segurança pública e de defesa civil ficam fora.',
        'Na conta: se uma empresa dispara 1.000 chamadas em um dia, 85% são 850. Se 850 ou mais forem curtas ou não completadas, ela atinge o limite proporcional. Para conferir a porcentagem de qualquer volume, use a calculadora de porcentagem do portal.',
      ],
      table: {
        caption:
          'Regras citadas pelo Teletime sobre a MP e a consulta da Anatel',
        columns: ['Ponto', 'O que consta'],
        rows: [
          [
            'Autenticação das chamadas',
            'Proposta de out/2027; meta anterior de nov/2028',
          ],
          ['Prazo da Anatel para regulamentar a MP', '60 dias, até 12/12/2026'],
          [
            'Chamadas em massa',
            'Mais de mil por acesso ou dez mil por dia, com 85% curtas ou não completadas',
          ],
          ['Suspensão de origem', '15 dias'],
          ['Contribuições à consulta', '10 dias após a publicação no DOU'],
        ],
      },
    },
    {
      heading: 'O que fazer até lá para não cair em golpe por telefone',
      paragraphs: [
        'Enquanto a autenticação não chega, a cautela continua com o consumidor. Banco não pede senha, código de verificação nem transferência por telefone. Se a ligação trouxer urgência, ameaça de bloqueio de conta ou promessa de ganho, desligue.',
        'Para confirmar, ligue para o número que está no verso do cartão ou no aplicativo oficial, e não para o número que ligou. Quem já passou dados deve avisar o banco pelos canais oficiais e registrar boletim de ocorrência. Para acompanhar prazos, a calculadora de contador de dias ajuda a contar a partir da data de publicação da consulta.',
      ],
    },
  ],
  faq: [
    {
      question: 'A autenticação de chamadas já vale?',
      answer:
        'Não. Outubro de 2027 é o prazo proposto em consulta pública da Anatel. A regra só vale depois que a agência concluir a regulamentação.',
    },
    {
      question: 'O que é uma chamada não autenticada?',
      answer:
        'É uma ligação cuja origem a operadora não consegue comprovar. A proposta é que esse tipo de chamada seja bloqueado, com exceções definidas pela Anatel.',
    },
    {
      question: 'Posso participar da consulta pública?',
      answer:
        'Pela notícia, as contribuições terão dez dias a partir da publicação no Diário Oficial da União. Acompanhe o site da Anatel para a data de abertura.',
    },
  ],
  sources: [
    {
      label:
        'Teletime: Anatel propõe antecipar autenticação de chamadas para outubro de 2027, 19/11/2026',
      url: 'https://teletime.com.br/19/11/2026/anatel-mp-autenticacao/',
    },
    {
      label: 'Teletime: MCom, MP antecipa autenticação de chamadas, 13/10/2026',
      url: 'https://teletime.com.br/13/10/2026/mcom-mp-antecipa-autenticacao/',
    },
    {
      label: 'Anatel: chamadas abusivas',
      url: 'https://www.gov.br/anatel/pt-br/consumidor/chamadas-abusivas',
    },
  ],
} as const satisfies NewsDocument;
