import type { GuideDocument } from '../../types';

export const guideQualidadeSegurado = {
  kind: 'guide',
  slug: 'qualidade-de-segurado-e-carencia-no-inss-como-funciona',
  title: 'Qualidade de segurado e carência no INSS: como funciona',
  description:
    'Entenda o que é qualidade de segurado, o período de graça de 12 a 36 meses, a carência de cada benefício do INSS e como recuperar o direito depois de parar de contribuir.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-14',
  tags: [
    'inss',
    'qualidade-de-segurado',
    'carencia',
    'periodo-de-graca',
    'beneficios',
  ],
  featuredCalculators: ['auxilio-incapacidade', 'salario-maternidade', 'inss'],
  highlights: [
    {
      value: '12 meses',
      label: 'Período de graça básico',
      note: 'Depois de parar de contribuir, em regra.',
    },
    {
      value: '12',
      label: 'Contribuições de carência do auxílio por incapacidade',
      note: 'Dispensada em acidente e doenças graves.',
    },
    {
      value: '180',
      label: 'Contribuições da aposentadoria por idade',
      note: 'Equivale a 15 anos de contribuição.',
    },
  ],
  sections: [
    {
      heading: 'Qualidade de segurado: o que é',
      paragraphs: [
        'Qualidade de segurado é a condição de quem está protegido pelo INSS e pode receber benefícios. Ela existe enquanto a pessoa contribui e também por um tempo depois que para de contribuir, chamado de período de graça. Se esse prazo acaba sem nova contribuição, a qualidade é perdida.',
        'Perder a qualidade não apaga as contribuições antigas, mas pode impedir benefícios como o auxílio por incapacidade e o salário-maternidade, que dependem de estar segurado na data do fato, como o início da doença ou o parto. Por isso, conhecer o prazo é uma forma de proteção.',
      ],
    },
    {
      heading: 'O período de graça',
      paragraphs: [
        'Quem deixa de contribuir mantém a qualidade de segurado por até 12 meses depois da última contribuição. Esse prazo pode ser maior: sobe para 24 meses para quem já pagou mais de 120 contribuições mensais sem interrupção que tenha causado perda da qualidade, e ganha mais 12 meses para o desempregado que comprova a situação.',
        'Quem recebe benefício por incapacidade mantém a qualidade enquanto estiver recebendo e, em geral, por 12 meses após o fim. A tabela resume os prazos mais comuns. O prazo conta a partir do mês seguinte ao da última contribuição, e a regra exata depende do tipo de segurado.',
      ],
      table: {
        caption: 'Manutenção da qualidade de segurado',
        columns: ['Situação', 'Prazo de manutenção'],
        rows: [
          ['Contribuinte que parou de pagar', 'Até 12 meses'],
          ['Mais de 120 contribuições sem perda da qualidade', 'Até 24 meses'],
          ['Desempregado com registro comprovado', '12 meses a mais'],
          [
            'Recebendo benefício por incapacidade',
            'Durante o benefício e mais 12 meses',
          ],
          ['Segurado facultativo', 'Até 6 meses'],
        ],
      },
    },
    {
      heading: 'O que é carência',
      paragraphs: [
        'Carência é o número mínimo de contribuições mensais que o segurado precisa ter pago para ter direito a certos benefícios. Ela não é o mesmo que tempo de contribuição: o que conta é o número de meses com contribuição válida, e não o tempo de trabalho.',
        'Para o empregado e o doméstico, a carência é contada a partir da data de filiação e se considera cumprida pelas contribuições registradas. Para o contribuinte individual, o MEI e o facultativo, só contam os meses efetivamente pagos, e as contribuições em atraso têm regras próprias para valerem como carência.',
      ],
    },
    {
      heading: 'Carência de cada benefício',
      paragraphs: [
        'Cada benefício tem a sua carência. Alguns, como a pensão por morte, o auxílio-acidente e o salário-família, não exigem carência. Outros exigem um número fixo de contribuições. A tabela mostra os principais casos.',
        'A carência pode ser dispensada em situações previstas em lei, como acidente de qualquer natureza, acidente de trabalho e doenças graves de lista oficial, no caso do auxílio por incapacidade e da aposentadoria por incapacidade permanente.',
      ],
      table: {
        caption: 'Carência por benefício',
        columns: ['Benefício', 'Carência'],
        rows: [
          ['Auxílio por incapacidade temporária', '12 contribuições'],
          ['Aposentadoria por incapacidade permanente', '12 contribuições'],
          ['Aposentadoria por idade', '180 contribuições'],
          [
            'Salário-maternidade (autônoma, MEI e facultativa)',
            '10 contribuições',
          ],
          ['Salário-maternidade (empregada)', 'Sem carência'],
          ['Pensão por morte', 'Sem carência para ter direito'],
        ],
      },
    },
    {
      heading: 'Como recuperar o direito depois de perder a qualidade',
      paragraphs: [
        'Quem perdeu a qualidade de segurado precisa voltar a contribuir. Para o auxílio por incapacidade, a aposentadoria por incapacidade e o salário-maternidade, o INSS exige que, a partir da nova filiação, o segurado cumpra metade da carência para que as contribuições anteriores voltem a contar. No caso dos benefícios de 12 contribuições, são 6.',
        'A aposentadoria por idade é diferente: desde que as 180 contribuições da carência já estejam cumpridas, a perda da qualidade de segurado não impede o pedido, conforme a Lei 10.666/2003. Um conselho prático: quem ficou sem contribuir deve voltar o quanto antes, mesmo como facultativo ou MEI, para não deixar passar o período de graça.',
      ],
    },
    {
      heading: 'Doença antes de voltar a contribuir',
      paragraphs: [
        'Um erro frequente é voltar a contribuir já doente e pedir o auxílio. Se a doença ou lesão existia antes da nova filiação, o INSS costuma negar o benefício, porque a incapacidade começou quando a pessoa não era segurada. A exceção é o agravamento posterior comprovado.',
        'Por isso, quem tem uma doença crônica deve manter as contribuições em dia durante todo o tratamento, especialmente quando é autônomo. Um carnê atrasado pode ser a diferença entre ter e não ter direito a um benefício meses depois.',
      ],
    },
    {
      heading: 'Como conferir no Meu INSS',
      paragraphs: [
        'O extrato CNIS, no Meu INSS, mostra os vínculos, as contribuições e as datas, e é a melhor forma de conferir carência e qualidade. Veja se todos os meses estão lançados, se há indicadores de pendência e se a última contribuição está dentro do período de graça.',
        'Se faltar algo, peça a correção com documentos: carteira de trabalho, contracheques, guias pagas e contratos. Fazer isso antes de precisar de um benefício evita surpresas e acelera a análise.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são achar que a contribuição antiga garante o benefício para sempre, parar de pagar sem acompanhar o prazo, pagar atrasado e imaginar que a competência conta, e confundir carência com tempo de contribuição.',
        'Também é comum o MEI esquecer o DAS e perder meses de carência, ou o autônomo recolher sobre um código errado que não conta para aposentadoria. Confira sempre o CNIS depois de regularizar um pagamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é qualidade de segurado?',
      answer:
        'É a condição de quem está protegido pelo INSS, seja porque contribui ou porque ainda está no período de graça depois de parar de contribuir.',
    },
    {
      question: 'Quanto tempo posso ficar sem contribuir?',
      answer:
        'Em regra, até 12 meses depois da última contribuição. O prazo sobe para 24 meses com mais de 120 contribuições e ganha mais 12 meses para o desempregado que comprova a situação.',
    },
    {
      question: 'Qual a carência do auxílio-doença?',
      answer:
        'São 12 contribuições mensais, dispensadas em acidente, doença profissional e doenças graves de lista oficial.',
    },
    {
      question: 'O que acontece se eu perder a qualidade de segurado?',
      answer:
        'Você precisa voltar a contribuir e cumprir parte da carência para ter direito de novo a benefícios como auxílio por incapacidade e salário-maternidade.',
    },
    {
      question: 'O MEI tem qualidade de segurado?',
      answer:
        'Tem, enquanto pagar o DAS em dia. Meses sem pagamento não contam para carência, e o período de graça passa a correr.',
    },
  ],
  sources: [
    { label: 'Lei 8.213/1991, arts. 15, 24, 25 e 27-A' },
    { label: 'Decreto 3.048/1999, arts. 13 e 30' },
    { label: 'INSS: Meu INSS e extrato CNIS' },
  ],
} as const satisfies GuideDocument;
