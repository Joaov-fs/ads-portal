import type { GuideDocument } from '../../types';

export const guideComoPedirOSeguroDesemprego = {
  kind: 'guide',
  slug: 'como-pedir-o-seguro-desemprego',
  title: 'Como pedir o seguro-desemprego: prazo, parcelas e valor',
  description:
    'Quem tem direito, em quanto tempo pedir, como fazer o requerimento e quanto você recebe, com a conta completa de um exemplo de 5 parcelas.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-19',
  updatedAt: '2026-10-02',
  tags: ['seguro-desemprego', 'demissao', 'beneficios', 'trabalho'],
  featuredCalculators: ['seguro-desemprego', 'rescisao-clt', 'salario-liquido'],
  highlights: [
    {
      value: '7 a 120 dias',
      label: 'Prazo para pedir',
      note: 'Contados a partir da demissão.',
    },
    {
      value: 'R$ 2.518,65',
      label: 'Parcela máxima',
      note: 'Piso de R$ 1.621,00.',
    },
    {
      value: '3 a 5',
      label: 'Parcelas',
      note: 'Conforme o tempo de trabalho e o número do pedido.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito',
      paragraphs: [
        'Tem direito o trabalhador formal demitido sem justa causa que cumpra a carência: 12 meses de trabalho nos últimos 18 no primeiro pedido, 9 meses nos últimos 12 no segundo e 6 meses imediatamente anteriores à demissão nos demais. Além disso, não pode ter renda própria suficiente para se sustentar nem receber benefício continuado da Previdência (exceto auxílio-acidente e pensão por morte).',
        'Pedido de demissão e demissão por justa causa não dão direito ao benefício.',
      ],
    },
    {
      heading: 'O prazo para pedir',
      paragraphs: [
        'O pedido pode ser feito entre o 7º e o 120º dia depois da demissão. Exemplo: quem foi demitido em 10 de setembro de 2026 pode pedir de 17 de setembro de 2026 a 8 de janeiro de 2027. Passado esse limite, em regra o direito é perdido.',
      ],
    },
    {
      heading: 'Quantas parcelas',
      paragraphs: [
        'O número de parcelas depende do tempo trabalhado nos últimos 36 meses e de quantas vezes você já pediu o benefício.',
      ],
      table: {
        caption: 'Parcelas do seguro-desemprego',
        columns: ['Pedido', 'Tempo de trabalho', 'Parcelas'],
        rows: [
          ['1º pedido', '12 a 23 meses', '4'],
          ['1º pedido', '24 meses ou mais', '5'],
          ['2º pedido', '9 a 11 meses', '3'],
          ['2º pedido', '12 a 23 meses', '4'],
          ['2º pedido', '24 meses ou mais', '5'],
          ['3º pedido ou mais', '6 a 11 meses', '3'],
          ['3º pedido ou mais', '12 a 23 meses', '4'],
          ['3º pedido ou mais', '24 meses ou mais', '5'],
        ],
      },
    },
    {
      heading: 'Como o valor da parcela é calculado',
      paragraphs: [
        'A parcela depende da média dos seus três últimos salários antes da demissão e segue três faixas. O resultado nunca fica abaixo do salário mínimo (R$ 1.621,00) nem acima do teto (R$ 2.518,65).',
      ],
      table: {
        caption: 'Faixas de 2026',
        columns: ['Média dos 3 últimos salários', 'Como se calcula'],
        rows: [
          ['Até R$ 2.222,17', '80% da média (mínimo de R$ 1.621,00)'],
          [
            'De R$ 2.222,18 a R$ 3.703,99',
            'R$ 1.777,74 + 50% do que passar de R$ 2.222,17',
          ],
          ['Acima de R$ 3.703,99', 'Valor fixo de R$ 2.518,65'],
        ],
      },
    },
    {
      heading: 'Exemplo completo: Carlos, 27 meses de casa',
      paragraphs: [
        'Carlos foi demitido sem justa causa em 10 de setembro de 2026, depois de 27 meses na empresa. Nos três últimos meses ganhou R$ 2.900, R$ 2.900 e R$ 3.100. É o primeiro pedido dele. O cálculo, etapa por etapa:',
      ],
      table: {
        caption: 'Conta do seguro-desemprego do Carlos',
        columns: ['Etapa', 'Cálculo', 'Resultado'],
        rows: [
          [
            'Carência do 1º pedido',
            '27 meses, mais que os 12 exigidos',
            'Tem direito',
          ],
          [
            'Média dos 3 últimos salários',
            '(R$ 2.900 + R$ 2.900 + R$ 3.100) ÷ 3',
            'R$ 2.966,67',
          ],
          ['Faixa', 'Entre R$ 2.222,18 e R$ 3.703,99', 'Segunda faixa'],
          [
            'Parte que passa de R$ 2.222,17',
            'R$ 2.966,67 - R$ 2.222,17',
            'R$ 744,50',
          ],
          ['50% do excedente', 'R$ 744,50 x 0,5', 'R$ 372,25'],
          ['Valor da parcela', 'R$ 1.777,74 + R$ 372,25', 'R$ 2.149,99'],
          [
            'Número de parcelas',
            '1º pedido com 24 meses ou mais',
            '5 parcelas',
          ],
          ['Total do benefício', '5 x R$ 2.149,99', 'R$ 10.749,95'],
        ],
      },
    },
    {
      heading: 'Como pedir e o que acontece depois',
      paragraphs: [
        'O pedido pode ser feito pelo aplicativo Carteira de Trabalho Digital, pelo portal gov.br ou pelo telefone 158 (Alô Trabalho), que também agenda atendimento presencial. Tenha em mãos o CPF, um documento de identificação e os dados da rescisão, como o termo de rescisão do contrato de trabalho. Se o sistema não encontrar a sua demissão, peça à empresa que confirme a informação.',
        'O governo informa que o serviço é concluído entre 31 e 60 dias corridos; na prática, a primeira parcela costuma ser liberada cerca de 30 dias após o pedido. O pagamento é feito pela Caixa, em conta ou em poupança social digital. Enquanto recebe, o benefício é suspenso se você começar a ter renda com trabalho e suspenso se você for admitido com carteira assinada; se for dispensado sem justa causa de novo, volta a receber as parcelas restantes. Passar a receber benefício continuado da Previdência cancela o seguro.',
      ],
    },
    {
      heading: 'Pedido negado: o que fazer',
      paragraphs: [
        'Se o benefício foi negado, o aplicativo ou o gov.br mostra o motivo. Se você acha que há erro, use o serviço de recurso do seguro-desemprego no portal gov.br e anexe documentos, como a carteira de trabalho e o termo de rescisão. Faça isso logo, porque o prazo para pedir não para de correr. Em caso de dúvida, ligue para o 158.',
      ],
    },
  ],
  faq: [
    {
      question: 'Perdi o prazo de 120 dias. Posso pedir?',
      answer:
        'Em regra, não. O prazo é de até 120 dias a partir da data da demissão, por isso peça logo.',
    },
    {
      question: 'Posso trabalhar e receber?',
      answer:
        'Se você conseguir emprego formal, o benefício é suspenso, porque não há acúmulo com renda de carteira assinada. Se for dispensado sem justa causa de novo, as parcelas restantes voltam a ser pagas.',
    },
    {
      question: 'Recebo o seguro se pedi demissão?',
      answer:
        'Não. O benefício vale para demissão sem justa causa. Acordo entre empresa e empregado também não dá direito ao seguro.',
    },
    {
      question: 'Se eu ganhava R$ 1.800, quanto vou receber?',
      answer:
        '80% de R$ 1.800 dá R$ 1.440, que é menos que o salário mínimo. Por isso a parcela sobe para R$ 1.621,00.',
    },
    {
      question: 'Quem ganhava R$ 5.000 recebe mais?',
      answer:
        'Recebe o teto: R$ 2.518,65 por parcela, igual a quem ganhava qualquer valor acima de R$ 3.703,99.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego: Seguro-Desemprego',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/seguro-desemprego',
    },
    {
      label: 'Portal gov.br: solicitar o seguro-desemprego',
      url: 'https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego',
    },
    {
      label: 'Lei 7.998/1990: Programa do Seguro-Desemprego',
    },
  ],
} as const satisfies GuideDocument;
