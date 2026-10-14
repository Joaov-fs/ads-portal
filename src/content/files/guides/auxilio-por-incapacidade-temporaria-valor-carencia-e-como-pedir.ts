import type { GuideDocument } from '../../types';

export const guideAuxilioIncapacidadeValor = {
  kind: 'guide',
  slug: 'auxilio-por-incapacidade-temporaria-valor-carencia-e-como-pedir',
  title: 'Auxílio por incapacidade temporária: valor, carência e como pedir',
  description:
    'Veja quem tem direito ao auxílio-doença do INSS, quanto ele paga (91% da média), a carência de 12 contribuições, quando ela é dispensada e como pedir pelo Meu INSS.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-14',
  tags: ['inss', 'auxilio-doenca', 'incapacidade', 'carencia', 'beneficios'],
  featuredCalculators: [
    'auxilio-incapacidade',
    'prazo-prorrogacao-auxilio-inss',
    'retroativos-inss',
  ],
  highlights: [
    {
      value: '91%',
      label: 'Percentual da média que o auxílio paga',
      note: 'Sempre entre o salário mínimo e o teto do INSS.',
    },
    {
      value: '12',
      label: 'Contribuições de carência',
      note: 'Dispensadas em acidente e em doenças graves da lista oficial.',
    },
    {
      value: 'R$ 2.730,00',
      label: 'Auxílio para uma média de R$ 3.000,00',
      note: 'Calculado a 91% da média dos salários.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito',
      paragraphs: [
        'O auxílio por incapacidade temporária, antigo auxílio-doença, é pago ao segurado do INSS que fica incapacitado para o trabalho por mais de 15 dias consecutivos, por doença ou acidente. Os 15 primeiros dias são pagos pela empresa para o empregado com carteira assinada, e o INSS paga a partir do 16º dia.',
        'Para ter direito, três condições precisam existir ao mesmo tempo: a qualidade de segurado (estar contribuindo ou dentro do período de graça), a carência de 12 contribuições, quando exigida, e a incapacidade comprovada em perícia ou por documento aceito. Se uma delas falta, o pedido pode ser negado.',
      ],
    },
    {
      heading: 'Quanto o auxílio paga',
      paragraphs: [
        'O valor do auxílio é de 91% da média dos salários de contribuição, considerando todo o histórico desde julho de 1994 ou desde o início das contribuições. O benefício não pode ser menor que um salário mínimo, hoje R$ 1.621,00, nem maior que o teto do INSS, de R$ 8.475,55. Há ainda um limite: o valor não pode passar da média das 12 últimas contribuições.',
        'A tabela mostra o que o auxílio paga para algumas médias. Na primeira linha, 91% da média ficaria abaixo do mínimo, e o benefício é elevado ao piso. Na última, o resultado passaria do teto e fica limitado a ele.',
      ],
      table: {
        caption: 'Auxílio por incapacidade temporária por média salarial',
        columns: ['Média dos salários', '91% da média', 'Benefício pago'],
        rows: [
          ['R$ 1.600,00', 'R$ 1.456,00', 'R$ 1.621,00'],
          ['R$ 2.000,00', 'R$ 1.820,00', 'R$ 1.820,00'],
          ['R$ 3.000,00', 'R$ 2.730,00', 'R$ 2.730,00'],
          ['R$ 5.000,00', 'R$ 4.550,00', 'R$ 4.550,00'],
          ['R$ 10.000,00', 'R$ 9.100,00', 'R$ 8.475,55'],
        ],
      },
    },
    {
      heading: 'Carência: quando existe e quando é dispensada',
      paragraphs: [
        'A carência do auxílio por incapacidade temporária é de 12 contribuições mensais. Ela é dispensada em acidente de qualquer natureza, em acidente de trabalho, em doença profissional ou do trabalho e em doenças graves previstas em lista oficial, como tuberculose ativa, hanseníase, câncer, cegueira, doença de Parkinson e AIDS. A lista completa está nas portarias do governo.',
        'Quem perdeu a qualidade de segurado precisa voltar a contribuir e cumprir parte da carência antes de ter direito de novo. Para o auxílio por incapacidade, são necessárias 6 contribuições após a nova filiação, que correspondem à metade da carência. Leia o guia de qualidade de segurado e carência para ver os detalhes.',
      ],
    },
    {
      heading: 'Doença anterior à filiação',
      paragraphs: [
        'Quem já tinha a doença ou a lesão quando entrou no INSS, ou voltou a contribuir, em regra não tem direito ao benefício por essa doença. A exceção é quando a incapacidade surgiu por agravamento posterior. É um dos motivos de negativas frequentes, por isso os exames e relatórios com datas ajudam a mostrar quando o problema se agravou.',
        'A perícia define a data de início da incapacidade (DII). É essa data que mostra se, naquele momento, o segurado cumpria carência e tinha qualidade. Se a DII ficar antes do cumprimento dos requisitos, o benefício pode ser negado, e é nesse ponto que muitos recursos acontecem.',
      ],
    },
    {
      heading: 'Como pedir pelo Meu INSS',
      paragraphs: [
        'O pedido é feito pelo Meu INSS, no aplicativo ou no site, com conta gov.br. Escolha o novo pedido de benefício por incapacidade, anexe o atestado médico e confira os dados de contato. A Central 135 também registra o pedido.',
        'Dependendo do caso e da regra vigente, o INSS pode analisar o atestado sem perícia presencial, no modelo do Atestmed, ou marcar perícia presencial ou por telemedicina. Acompanhe a situação do pedido no Meu INSS e responda a qualquer exigência dentro do prazo.',
      ],
    },
    {
      heading: 'Documentos para levar',
      paragraphs: [
        'Leve um documento com foto, o CPF e todos os documentos médicos do caso: atestados com CID, exames, laudos, receitas, relatórios de especialista, comprovantes de internação e cirurgia. Para quem é empregado, ajuda ter o comprovante de afastamento pela empresa, e para o contribuinte individual, o comprovante de contribuição.',
        'Documentos sem data, sem CRM do médico ou com letra ilegível costumam atrapalhar. Um relatório do médico assistente que descreva a doença, as limitações e a duração estimada do afastamento é mais forte que um atestado genérico.',
      ],
    },
    {
      heading: 'Pagamento, retroativos e alta',
      paragraphs: [
        'O benefício começa a ser pago a partir do 16º dia de afastamento para o empregado e, em outros casos, a partir da data do início da incapacidade ou do pedido, conforme a situação. Se a análise demorar, os valores desde a data de início do direito são pagos depois como retroativos.',
        'Quem recebe o auxílio por incapacidade temporária pode ser convocado para nova perícia e tem a alta quando o médico perito reconhece a capacidade de voltar ao trabalho. Se a incapacidade continuar, é possível pedir a prorrogação nos 15 dias que antecedem a data da alta.',
      ],
    },
    {
      heading: 'Quando o auxílio vira aposentadoria',
      paragraphs: [
        'Se a perícia concluir que não há perspectiva de recuperação para a atividade que a pessoa exerce e que ela não pode ser reabilitada, o auxílio pode ser convertido em aposentadoria por incapacidade permanente. Nessa aposentadoria, o cálculo é diferente: 60% da média, mais 2% por ano de contribuição acima de 20 anos (homem) ou 15 anos (mulher), e 100% em caso de acidente de trabalho ou doença profissional.',
        'A calculadora de auxílio por incapacidade permite informar o percentual que se aplica ao seu caso, e o resultado respeita o piso e o teto.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são deixar de pedir por achar que sem carteira assinada não há direito, esperar muito para procurar o INSS depois do afastamento, apresentar documentos incompletos e faltar à perícia. Autônomos e MEI também têm direito, desde que contribuam como segurados.',
        'Outro erro é confundir o auxílio com o benefício acidentário. Em acidente ou doença do trabalho, a empresa deve emitir a Comunicação de Acidente de Trabalho (CAT), e isso pode dar direito a estabilidade e a depósito de FGTS durante o afastamento. Guarde uma cópia.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto o INSS paga de auxílio por incapacidade temporária?',
      answer:
        'Paga 91% da média dos salários de contribuição, com piso de um salário mínimo e teto do INSS.',
    },
    {
      question: 'Qual é a carência do auxílio-doença?',
      answer:
        'São 12 contribuições mensais. A carência é dispensada em acidente, doença profissional e doenças graves de lista oficial.',
    },
    {
      question: 'Quem não tem carteira assinada pode receber?',
      answer:
        'Pode, desde que seja segurado do INSS, como contribuinte individual, MEI ou facultativo, e cumpra carência e qualidade de segurado.',
    },
    {
      question: 'Quem paga os primeiros 15 dias de afastamento?',
      answer:
        'Para o empregado com carteira assinada, a empresa paga os 15 primeiros dias. O INSS paga a partir do 16º.',
    },
    {
      question: 'O auxílio por incapacidade desconta INSS ou Imposto de Renda?',
      answer:
        'O benefício não tem desconto de contribuição ao INSS. O Imposto de Renda segue a tabela mensal, e quem recebe valores baixos costuma ficar isento. Confira o desconto no extrato e no informe de rendimentos.',
    },
  ],
  sources: [
    { label: 'Lei 8.213/1991, arts. 25, 26, 59 a 63' },
    { label: 'Emenda Constitucional 103/2019, art. 26' },
    { label: 'INSS: auxílio por incapacidade temporária' },
  ],
} as const satisfies GuideDocument;
