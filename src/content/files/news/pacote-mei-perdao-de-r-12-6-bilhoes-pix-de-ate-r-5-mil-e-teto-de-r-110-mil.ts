import type { NewsDocument } from '../../types';

export const newsPacoteMeiPerdaoPixTeto110Mil = {
  kind: 'news',
  slug: 'pacote-mei-perdao-de-r-12-6-bilhoes-pix-de-ate-r-5-mil-e-teto-de-r-110-mil',
  title:
    'Prospera MEI: governo confirma sanção; teto de R$ 110 mil fica para 2027',
  description:
    'Pacote do MEI foi sancionado, segundo o governo. Veja os limites por ano, as condições do perdão de dívidas e o que falta para acessar o Pix MEI.',
  category: 'financas',
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-25',
  tags: ['mei', 'prospera-mei', 'divida', 'pix', 'impostos', 'negocios'],
  featuredCalculators: [
    'excesso-limite-mei',
    'das-limite-mei',
    'das-mei-atraso',
  ],
  coverImage: {
    src: '/images/news/prospera-mei-sancao-limites-2026-2028.jpg',
    alt: 'Documento com os limites de faturamento do MEI em 2026, 2027 e 2028, celular com a indicação de edital do Pix MEI e moedas.',
    credit: 'Ilustração: PortalFina',
  },
  highlights: [
    {
      value: 'R$ 81 mil',
      label: 'Teto anual mantido em 2026',
      note: 'Novos limites não ampliam o teto deste ano.',
    },
    {
      value: 'R$ 110 mil',
      label: 'Limite anunciado para 2027',
      note: 'Conforme comunicado do MEMP sobre a sanção.',
    },
    {
      value: 'R$ 140 mil',
      label: 'Limite anunciado para 2028',
      note: 'Segunda etapa da ampliação.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou desde o anúncio do pacote',
      paragraphs: [
        'O Ministério do Empreendedorismo informou que o governo sancionou, em 21 de outubro, o projeto sobre o Prospera MEI. O comunicado trata da ampliação do faturamento, da contratação de empregados e da remissão de débitos federais.',
        'Esta matéria foi revisada em 25 de outubro. A versão anterior descrevia o pacote ainda como anúncio dependente do Congresso. A sanção foi confirmada também pelo Ministério das Mulheres e pelo Sebrae.',
      ],
    },
    {
      heading: 'O novo teto não vale para o faturamento de 2026',
      image: {
        src: '/images/news/prospera-mei-sancao-limites-2026-2028-detalhe.jpg',
        alt: 'Detalhe do documento com os limites de faturamento do MEI por ano.',
        caption:
          'Confira o exercício antes de comparar o faturamento com o limite anual.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O comunicado do MEMP apresenta uma ampliação em etapas. O teto permanece em R$ 81 mil em 2026. A previsão é de R$ 110 mil em 2027. A etapa seguinte chega a R$ 140 mil em 2028.',
        'Para empresas abertas durante o ano, observe a proporcionalidade e as regras de enquadramento aplicáveis. O limite se refere à receita bruta, e não ao lucro que sobra depois das despesas.',
      ],
      table: {
        caption: 'Limites anuais informados pelo governo para o MEI',
        columns: ['Ano', 'Limite anual'],
        rows: [
          ['2026', 'R$ 81 mil'],
          ['2027', 'R$ 110 mil'],
          ['2028', 'R$ 140 mil'],
        ],
      },
    },
    {
      heading: 'Perdão de dívida federal não elimina todo tipo de débito',
      paragraphs: [
        'Segundo o MEMP, a remissão tem efeitos previstos a partir de janeiro de 2027 e alcança os débitos federais abrangidos pela regra até 13 de outubro de 2026. A comunicação prevê contrapartida de regularidade nos pagamentos nos seis meses seguintes.',
        'O Ministério das Mulheres esclarece que ICMS e ISS não entram nesse perdão. Empréstimos bancários também são uma obrigação diferente. Portanto, não trate o pacote como cancelamento integral de qualquer guia ou contrato.',
        'Valores já pagos não serão devolvidos, conforme as orientações oficiais. Quem possui discussão judicial deve acompanhar os procedimentos necessários para a baixa. Confira suas pendências nos canais da Receita Federal e da PGFN antes de reorganizar os pagamentos.',
      ],
    },
    {
      heading: 'Pix MEI e contratação exigem atenção às datas',
      paragraphs: [
        'O Pix MEI é uma iniciativa diferente da remissão tributária. O Ministério das Mulheres informa que o incentivo de até R$ 5 mil ainda está em estruturação. Não é um pagamento automático a todas as pessoas com CNPJ de MEI.',
        'A seleção terá critérios e procedimentos próprios. A orientação é acompanhar o edital no site do MEMP, inclusive para saber quais investimentos poderão ser feitos com o recurso.',
        'A ampliação para até dois empregados consta da comunicação da sanção. O Sebrae aponta aplicação a partir de 2027. Antes de contratar, confirme as regras de implantação e os custos trabalhistas do negócio.',
        'As calculadoras de limite do MEI e de DAS do PortalFina ajudam a organizar o exercício de 2026. Não use o limite futuro para justificar faturamento excedente neste ano.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso faturar R$ 110 mil como MEI em 2026?',
      answer:
        'Não com base nesse pacote. A comunicação oficial mantém o teto de R$ 81 mil em 2026 e informa o novo limite para 2027.',
    },
    {
      question: 'O Pix MEI já será depositado automaticamente?',
      answer:
        'Não. O incentivo ainda depende das regras de seleção e do edital. O anúncio não garante o recebimento a todo MEI.',
    },
    {
      question: 'O perdão inclui dívidas com bancos, ICMS e ISS?',
      answer:
        'Não. A remissão federal e a negociação de dívidas bancárias são medidas distintas. ICMS e ISS não estão abrangidos pelo perdão descrito pelo governo.',
    },
  ],
  sources: [
    {
      label: 'MEMP: comunicado de sanção das medidas para MEIs, de 21/10/2026',
      url: 'https://www.gov.br/memp/pt-br/assuntos/noticias/lula-sanciona-lei-que-amplia-beneficios-para-meis-e-envia-ao-congresso-pec-sobre-tarifa-zero-no-transporte-coletivo',
    },
    {
      label: 'Ministério das Mulheres: condições e prazos do Prospera MEI',
      url: 'https://www.gov.br/mulheres/pt-br/central-de-conteudos/noticias/2026/outubro-defeso-eleitoral/do-alivio-nas-dividas-ao-investimento-no-negocio-conheca-as-medidas-do-prospera-mei-para-mulheres',
    },
    {
      label:
        'Sebrae: novos limites e contratação no Prospera MEI, de 21/10/2026',
      url: 'https://agenciasebrae.com.br/economia-e-politica/mais-funcionarios-maior-faturamento-e-divida-zero-programa-incentiva-o-mei-e-a-economia/',
    },
  ],
} as const satisfies NewsDocument;
