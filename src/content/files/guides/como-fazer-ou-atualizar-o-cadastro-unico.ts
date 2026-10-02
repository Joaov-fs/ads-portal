import type { GuideDocument } from '../../types';

export const guideComoFazerOuAtualizarOCadastroUnico = {
  kind: 'guide',
  slug: 'como-fazer-ou-atualizar-o-cadastro-unico',
  title: 'Como fazer ou atualizar o Cadastro Único (CadÚnico)',
  description:
    'O passo a passo para entrar no CadÚnico, quais documentos levar e por que manter o cadastro atualizado a cada dois anos.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-21',
  updatedAt: '2026-10-02',
  tags: ['cadunico', 'beneficios', 'bolsa-familia', 'cras'],
  featuredCalculators: ['bolsa-familia', 'bpc'],
  highlights: [
    {
      value: '2 anos',
      label: 'Atualização',
      note: 'Prazo máximo sem revisar.',
    },
    {
      value: 'CRAS',
      label: 'Onde fazer',
      note: 'Ou posto de atendimento do município.',
    },
    {
      value: 'Grátis',
      label: 'Custo',
      note: 'Cadastro e atualização não têm taxa.',
    },
  ],
  sections: [
    {
      heading: 'Quem pode se cadastrar',
      paragraphs: [
        'O Cadastro Único é para famílias com renda mensal de até meio salário mínimo por pessoa (R$ 810,50 em 2026). Famílias com renda maior também podem entrar quando o cadastro é necessário para algum programa social que usa o CadÚnico. Para saber se a sua casa está dentro, some a renda de todos os moradores e divida pelo número de pessoas.',
        'Família, para o cadastro, é o grupo que mora na mesma casa e divide as despesas. Uma pessoa com 16 anos ou mais é indicada como responsável familiar: é ela quem vai à entrevista e deve apresentar CPF ou título de eleitor.',
      ],
    },
    {
      heading: 'Documentos para levar',
      paragraphs: [
        'O responsável familiar precisa de CPF ou título de eleitor. Os demais moradores podem apresentar certidão de nascimento ou de casamento, CPF, RG, carteira de trabalho ou título de eleitor. Se alguém ainda não tem documento, o cadastro pode ser aberto, mas ele fica incompleto, e a família não acessa programas sociais até que o responsável e cada morador tenham documento. Leve também comprovante de residência e comprovantes de renda, porque muitos postos pedem.',
      ],
      table: {
        caption: 'O que levar',
        columns: ['Documento', 'Para que serve'],
        rows: [
          ['CPF ou título de eleitor do responsável', 'Identificar a família.'],
          [
            'Certidão de nascimento ou RG dos moradores',
            'Registrar cada pessoa.',
          ],
          ['Comprovante de residência', 'Confirmar o endereço.'],
          [
            'Contracheque, carteira de trabalho ou declaração de renda',
            'Calcular a renda por pessoa.',
          ],
        ],
      },
    },
    {
      heading: 'Passo a passo: o cenário da Joana',
      paragraphs: [
        'Joana tem 34 anos, mora com o filho de 17 e a filha de 8 e faz bicos de limpeza que rendem R$ 1.100 por mês. Ela nunca fez o cadastro. Veja cada etapa:',
        'Primeiro, ela liga para o CRAS do bairro ou usa o agendamento da prefeitura e marca a entrevista. Segundo, no dia marcado, leva o CPF dela, as certidões dos filhos e uma declaração do valor que ganha. Terceiro, responde à entrevista: moradia, escolaridade, trabalho e renda de cada pessoa, sem esconder nem arredondar para baixo. Quarto, confere o que o atendente digitou antes de assinar e pede a Folha Resumo do cadastro. Quinto, guarda o número do NIS e acompanha a situação pelo aplicativo do Cadastro Único ou no CRAS.',
      ],
    },
    {
      heading: 'Em quais programas a Joana pode entrar',
      paragraphs: [
        'A renda da Joana por pessoa é de R$ 1.100 ÷ 3 = R$ 366,67. Cada programa tem um limite diferente, e estar no CadÚnico não garante nenhum deles:',
      ],
      table: {
        caption: 'Mesma família, limites diferentes',
        columns: [
          'Programa',
          'Limite de renda por pessoa',
          'Joana (R$ 366,67)',
        ],
        rows: [
          ['Cadastro Único', 'R$ 810,50', 'Dentro'],
          [
            'Bolsa Família',
            'R$ 218,00 (renda total de até R$ 654 para 3 pessoas)',
            'Acima do limite',
          ],
          [
            'BPC, se houvesse idoso ou pessoa com deficiência na casa',
            'R$ 405,25',
            'Dentro',
          ],
        ],
      },
    },
    {
      heading: 'Manter o cadastro em dia',
      paragraphs: [
        'O cadastro vale se tiver sido atualizado nos últimos 2 anos. Atualize antes disso sempre que mudar a renda, o endereço ou a composição da família, como nascimento, mudança de morador ou separação. Cadastro vencido pode bloquear ou cancelar benefícios.',
        'Confira também estes problemas comuns: nome ou data de nascimento digitados diferentes do documento, morador faltando, renda informada abaixo da realidade e endereço antigo. Peça a correção no CRAS levando o documento de quem foi cadastrado errado.',
      ],
    },
    {
      heading: 'Onde pedir ajuda',
      paragraphs: [
        'O CRAS ou posto do Cadastro Único do seu município é o lugar certo para cadastrar, atualizar e corrigir. Se houver cobrança para fazer o cadastro, demora sem explicação ou atendimento negado, denuncie à ouvidoria do MDS, pelo telefone 121. O cadastro é gratuito, e ninguém pode vender vaga ou prometer benefício.',
      ],
    },
  ],
  faq: [
    {
      question: 'Estar no CadÚnico garante benefício?',
      answer:
        'Não. É a porta de entrada para programas como o Bolsa Família e o BPC, mas cada um tem seus requisitos.',
    },
    {
      question: 'Posso fazer pela internet?',
      answer:
        'Em alguns municípios há agendamento ou atualização online. O cadastro inicial costuma exigir atendimento presencial.',
    },
    {
      question: 'O que acontece se eu informar uma renda errada?',
      answer:
        'Dados errados podem levar ao bloqueio ou ao cancelamento de benefícios. Informe a renda real de cada morador e corrija o cadastro no CRAS assim que ela mudar.',
    },
    {
      question: 'Tenho renda variável. O que informo?',
      answer:
        'Informe a média mensal do último período, com o que os comprovantes mostram. Mudanças grandes, como emprego novo, devem ser atualizadas no CRAS.',
    },
    {
      question: 'Se eu não tiver um documento, ainda posso me cadastrar?',
      answer:
        'Pode abrir o cadastro, mas ele fica incompleto até que o responsável e cada morador tenham documento. A primeira certidão de nascimento é gratuita.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
      url: 'https://www.gov.br/mds/',
    },
    {
      label: 'MDS — Carta de serviços: Cadastro Único',
      url: 'https://www.gov.br/mds/pt-br/acesso-a-informacao/carta-de-servicos/avaliacao-e-gestao-da-informacao-e-cadastro-unico/cadastro-unico',
    },
    {
      label: 'Decreto 11.016/2022 — Cadastro Único',
    },
  ],
} as const satisfies GuideDocument;
