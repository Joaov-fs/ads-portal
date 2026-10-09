import type { NewsDocument } from '../../types';

export const newsPixPorAproximacaoSemTetoDeR500 = {
  kind: 'news',
  slug: 'pix-por-aproximacao-sem-teto-de-r-500-como-ajustar-o-limite-no-app',
  title:
    'Pix por aproximação deixa de ter teto de R$ 500: veja como ajustar o limite no app',
  description:
    'Desde 1º de outubro de 2026, o Pix por aproximação não tem mais o teto fixo de R$ 500 por transação. O limite passa a seguir o que você definir com o banco.',
  category: 'financas',
  coverImage: {
    src: '/images/news/pix-por-aproximacao-sem-teto-de-r-500-como-ajustar-o-limite-no-app.jpg',
    alt: 'Celular encostado na maquininha pagando R$ 1.000 por aproximação.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-06',
  updatedAt: '2026-10-06',
  tags: ['pix', 'seguranca', 'banco', 'pix-por-aproximacao', 'limite'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 500',
      label: 'Teto fixo que deixou de existir',
      note: 'Valia para o Pix por aproximação até 30 de setembro de 2026.',
    },
    {
      value: '1º/10',
      label: 'Data da mudança',
      note: 'A regra vem da Instrução Normativa BCB nº 746, de junho de 2026.',
    },
    {
      value: '0,06%',
      label: 'Parcela do Pix em agosto',
      note: 'Cerca de 2 milhões de transações por aproximação no mês.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou no Pix por aproximação',
      paragraphs: [
        'Desde 1º de outubro de 2026, o Pix por aproximação deixou de ter o teto fixo de R$ 500 por transação. A mudança vem da Instrução Normativa BCB nº 746, publicada pelo Banco Central em junho de 2026, e passou a valer na quinta-feira passada.',
        'Na prática, o pagamento feito encostando o celular na maquininha, pela tecnologia NFC, passa a seguir o limite que cada cliente tem na conta. Se o seu limite permite, uma compra de R$ 600 ou de R$ 1.000 pode ser paga por aproximação.',
        'A regra vale também para outras formas de iniciar o Pix que antes tinham tratamento próprio: QR Code, chaves de acesso e as operações iniciadas pelo Open Finance. O reajuste é do limite, não da forma de pagar: o fluxo na maquininha continua o mesmo.',
        'Os bancos devem oferecer, no aplicativo, uma ferramenta para o cliente consultar e alterar o limite. Quem quiser pode pedir aumento ou redução.',
      ],
    },
    {
      heading: 'Como o limite funciona agora',
      image: {
        src: '/images/news/pix-por-aproximacao-sem-teto-de-r-500-como-ajustar-o-limite-no-app-detalhe.jpg',
        alt: 'Detalhe da ilustração: celular encostado na maquininha pagando R$ 1.000 por aproximação.',
        caption:
          'O pagamento por aproximação passa a seguir o limite definido no app do banco.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Antes, havia um limite próprio de R$ 500 só para o Pix por aproximação, separado do limite geral do Pix. Agora não existe mais um número único para todos: o valor é o que você combinar com o banco, dentro das regras de segurança.',
        'Isso significa que o limite pode ser diferente de uma pessoa para outra e de um banco para outro. O que continua igual são as regras gerais de segurança do Pix, e o banco pode exigir autenticação conforme a configuração da sua conta.',
        'Para saber qual é o seu limite, abra o aplicativo do banco e procure a área de configurações do Pix ou de limites. Cada instituição organiza o menu à sua maneira, por isso o caminho exato muda.',
      ],
      table: {
        caption: 'Pix por aproximação: antes e depois de 1º de outubro de 2026',
        columns: ['Ponto', 'Até 30/9/2026', 'A partir de 1º/10/2026'],
        rows: [
          ['Teto por transação', 'R$ 500 fixo', 'Segue o limite da conta'],
          [
            'Quem define o limite',
            'Regra do Banco Central',
            'O cliente, com o banco',
          ],
          [
            'Compra de R$ 750 por aproximação',
            'Acima do teto',
            'Possível, se o limite permitir',
          ],
        ],
      },
    },
    {
      heading: 'Mais limite, mais cuidado',
      paragraphs: [
        'O teto de R$ 500 também funcionava como proteção: se o celular fosse usado por outra pessoa, o prejuízo por transação tinha um máximo. Com um limite maior, esse máximo sobe.',
        'Um exemplo: com o limite do Pix por aproximação em R$ 1.000, uma transação indevida poderia chegar a esse valor, o dobro do antigo teto. Se você quase nunca paga por aproximação, manter um limite baixo reduz o risco sem custo nenhum.',
        'Vale ajustar o limite ao seu uso real. Quem paga compras do dia a dia de até R$ 200 não precisa de um limite de R$ 1.000 na aproximação, e quem prefere pagar compras maiores desse jeito pode subir o valor.',
        'Mantenha o bloqueio de tela do celular ativo e, se o aparelho for perdido ou roubado, avise o banco o quanto antes para bloquear o acesso à conta. Para outras dicas de proteção, veja o guia sobre como usar o Pix com segurança.',
      ],
    },
    {
      heading: 'Por que a mudança importa pouco, por enquanto',
      paragraphs: [
        'O Pix por aproximação completou um ano com adesão baixa. Em agosto de 2026 foram cerca de 2 milhões de transações, o equivalente a 0,06% do total de operações do Pix no mês.',
        'Pela conta aproximada, 2 milhões representando 0,06% indicam um total da ordem de 3,3 bilhões de transações por mês no Pix inteiro. É uma estimativa feita com o número arredondado, e serve só para mostrar a escala: o pagamento por aproximação ainda é uma fração minúscula.',
        'Para você, o efeito prático depende do seu hábito. Quem já usa o Pix por QR Code ou por chave não vê diferença. Quem tem o recurso ativado no celular e paga compras de valor mais alto na maquininha é quem mais sente a mudança.',
      ],
    },
  ],
  faq: [
    {
      question: 'O teto de R$ 500 do Pix por aproximação acabou?',
      answer:
        'Sim. Desde 1º de outubro de 2026 não existe mais o teto fixo de R$ 500 por transação. O valor máximo passa a seguir o limite que o cliente definiu com o banco.',
    },
    {
      question: 'Meu limite aumentou sozinho?',
      answer:
        'A norma retirou o teto fixo, mas o limite de cada conta é definido por você e pelo banco. Confira no aplicativo qual é o seu e ajuste para cima ou para baixo conforme o uso.',
    },
    {
      question: 'Como reduzir o limite para ficar mais seguro?',
      answer:
        'Os bancos devem oferecer no aplicativo uma ferramenta para consultar e alterar os limites do Pix. Procure a área de configurações ou de limites do Pix e escolha um valor compatível com o seu uso.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil: Instrução Normativa BCB nº 746, de 2026',
    },
    {
      label:
        'Agência Brasil: Pix por aproximação deixa de ter teto de R$ 500 a partir desta quinta, 1º de outubro de 2026',
    },
    { label: 'Banco Central do Brasil: regulamento do Pix' },
  ],
} as const satisfies NewsDocument;
