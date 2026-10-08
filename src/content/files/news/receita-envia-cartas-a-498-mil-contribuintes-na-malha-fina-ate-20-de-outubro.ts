import type { NewsDocument } from '../../types';

export const newsReceitaCartasMalhaFina2026 = {
  kind: 'news',
  slug: 'receita-envia-cartas-a-498-mil-contribuintes-na-malha-fina-ate-20-de-outubro',
  title:
    'Receita envia cartas a 498 mil contribuintes na malha fina até 20 de outubro',
  description:
    'O Projeto Cartas 2026 avisa 498.487 contribuintes com o IRPF 2026 retido. Veja como consultar a pendência, corrigir a declaração e evitar multa.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-08',
  updatedAt: '2026-10-08',
  tags: ['imposto-de-renda', 'malha-fina', 'receita-federal', 'irpf-2026'],
  featuredCalculators: ['irrf', 'salario-liquido'],
  highlights: [
    {
      value: '498.487',
      label: 'Contribuintes avisados',
      note: 'Declarações do IRPF 2026 retidas na malha fina.',
    },
    {
      value: '20/10',
      label: 'Fim do envio das cartas',
      note: 'Os lotes semanais começaram em 5 de outubro de 2026.',
    },
    {
      value: '7 erros',
      label: 'Apontados pela Receita',
      note: 'Os mais comuns que levam a declaração à malha.',
    },
  ],
  sections: [
    {
      heading: 'O que a Receita anunciou',
      paragraphs: [
        'A Receita Federal começou a enviar, em 5 de outubro de 2026, cartas a 498.487 contribuintes cuja declaração do Imposto de Renda de Pessoa Física 2026 ficou retida na malha fina. O envio é feito em lotes semanais e vai até 20 de outubro. A informação consta do comunicado do Projeto Cartas 2026, publicado pela Receita em 6 de outubro.',
        'O objetivo do projeto é dar ao contribuinte a chance de corrigir o problema por conta própria, antes de uma intimação ou notificação formal. Segundo a Receita, regularizar antes de ser notificado reduz o risco de multa e de atraso na restituição.',
        'A carta não é cobrança nem multa. Ela funciona como um aviso de que existe uma pendência na declaração. Quem não recebeu carta pode ter a declaração em ordem, mas vale conferir no sistema, porque o envio é por lotes e a consulta é gratuita.',
      ],
    },
    {
      heading: 'Como saber se a sua declaração está na malha fina',
      paragraphs: [
        'A consulta é feita no serviço Meu Imposto de Renda, disponível no site da Receita Federal e no aplicativo para celular, nos sistemas iOS e Android. Para entrar, é preciso ter conta gov.br com nível prata ou ouro.',
        'As declarações retidas aparecem com a informação "Com Pendência". Ao abrir o link da pendência, o contribuinte vê o motivo da retenção e as orientações para corrigir. Não é necessário ir a uma unidade da Receita Federal.',
        'Se a conta gov.br ainda estiver no nível bronze, o primeiro passo é elevar o nível de segurança, o que costuma exigir validação facial ou de dados bancários. Fazer isso antes de precisar evita correria quando o prazo apertar.',
      ],
    },
    {
      heading: 'Os erros que mais levam à malha fina',
      paragraphs: [
        'A Receita listou os problemas mais comuns que retêm uma declaração. Conferir esta lista contra a sua cópia do IRPF 2026 é a forma mais rápida de achar a causa.',
      ],
      table: {
        caption: 'Erros comuns apontados pela Receita Federal no IRPF 2026',
        columns: ['Erro', 'O que conferir'],
        rows: [
          [
            'Rendimento pontual esquecido',
            'Valores recebidos uma única vez no ano de 2025, fora do salário fixo',
          ],
          [
            'Rendimentos do dependente',
            'O que o dependente recebeu também entra na declaração',
          ],
          [
            'Aposentadoria de várias fontes',
            'Somar todas as fontes pagadoras do titular e dos dependentes',
          ],
          [
            'Ano errado da despesa médica',
            'A despesa vale no ano em que foi paga',
          ],
          [
            'Valor errado da despesa médica',
            'Informar o que foi efetivamente pago, conforme o recibo',
          ],
          [
            'Gasto não dedutível como médico',
            'Só entra o que a lei permite deduzir como despesa médica',
          ],
          [
            'VGBL como dedução',
            'Segundo a Receita, o VGBL não é dedutível, por falta de previsão legal',
          ],
        ],
      },
    },
    {
      heading: 'O que fazer: retificar ou guardar os documentos',
      paragraphs: [
        'A orientação da Receita depende da situação. Se houver erro ou omissão na declaração, o caminho é enviar uma declaração retificadora pelos canais digitais, informando os valores corretos.',
        'Se a declaração estiver correta e você tiver os documentos que comprovam as informações, como recibos médicos e informes de rendimentos, não é preciso alterar nada. Guarde a documentação e aguarde uma eventual solicitação da Receita.',
        'Antes de retificar, abra a pendência no Meu Imposto de Renda e leia o motivo. Retificar sem entender a causa pode trocar um problema por outro. Reúna os informes de rendimentos de 2025, os comprovantes de despesas e, se houver, os dados dos dependentes.',
      ],
    },
    {
      heading: 'Por que corrigir antes pode sair mais barato',
      paragraphs: [
        'Em regra, quando a Receita lança o imposto de ofício, ou seja, depois de notificar o contribuinte, aplica multa de 75% sobre o imposto devido, além de juros pela taxa Selic, conforme o artigo 44 da Lei 9.430/1996. Quem corrige antes de ser notificado e paga o imposto que faltava costuma pagar apenas multa de mora, de 0,33% ao dia, limitada a 20%, mais os juros.',
        'Um exemplo simples: uma despesa médica declarada a mais fez o imposto cair R$ 1.000 abaixo do devido. Se a diferença for lançada de ofício, a multa de 75% seria de R$ 750, sem contar os juros. Se você retificar a tempo e a multa de mora chegar ao teto de 20% (o que ocorre a partir de 61 dias de atraso), ela seria de R$ 200, também sem os juros. A diferença é de R$ 550 em multa.',
        'Esse é um exemplo para dar a ordem de grandeza. O valor real depende do caso, da data do pagamento e da taxa Selic do período, e a Receita é quem calcula o débito. Para estimar o efeito de uma mudança na base de cálculo, use a calculadora de IRRF e a de salário líquido do portal, que mostram como a dedução altera o imposto.',
        'Outro ponto é a restituição. Enquanto a declaração está retida, o valor a restituir não é liberado. Corrigir a pendência é o caminho para a declaração voltar a ser processada. Para entender cada situação da declaração, veja o guia sobre como consultar a restituição.',
      ],
    },
  ],
  faq: [
    {
      question: 'Recebi a carta da Receita. Eu serei multado?',
      answer:
        'Não. A carta é um aviso para você corrigir a pendência por conta própria. Segundo a Receita, regularizar antes de ser intimado ou notificado reduz o risco de multa e de atraso na restituição.',
    },
    {
      question: 'Preciso ir a uma unidade da Receita Federal?',
      answer:
        'Não. A consulta é feita no Meu Imposto de Renda, no site ou no aplicativo, e a retificação é enviada pelos canais digitais. É preciso ter conta gov.br de nível prata ou ouro.',
    },
    {
      question: 'E se a minha declaração estiver correta?',
      answer:
        'Se tiver os documentos que comprovam as informações, não precisa alterar nada. Guarde os comprovantes e aguarde uma eventual solicitação da Receita.',
    },
  ],
  sources: [
    {
      label:
        'Receita Federal: Projeto Cartas 2026 incentiva autorregularização de declarações retidas em malha fiscal (6/10/2026)',
    },
    {
      label:
        'Agência Brasil: Receita envia cartas a 498 mil que estão na malha fina até o dia 20 (7/10/2026)',
    },
    { label: 'Lei 9.430/1996, artigos 44 e 61' },
  ],
} as const satisfies NewsDocument;
