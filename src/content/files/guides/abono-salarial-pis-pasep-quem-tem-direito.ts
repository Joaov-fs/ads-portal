import type { GuideDocument } from '../../types';

export const guideAbonoSalarialPisPasepQuemTemDireito = {
  kind: 'guide',
  slug: 'abono-salarial-pis-pasep-quem-tem-direito',
  title:
    'Abono salarial PIS/Pasep: quem tem direito, quanto recebe e onde sacar',
  description:
    'As regras do abono do ano-base 2024, a tabela por meses trabalhados e como conferir se há valor para você.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-16',
  updatedAt: '2026-10-02',
  tags: ['pis', 'pasep', 'abono', 'beneficios', 'trabalho'],
  featuredCalculators: ['pis', 'salario-liquido', 'ferias'],
  highlights: [
    {
      value: 'R$ 1.621',
      label: 'Valor máximo',
      note: 'Para quem trabalhou 12 meses em 2024.',
    },
    {
      value: 'R$ 135,08',
      label: 'Valor por mês trabalhado',
      note: 'Salário mínimo dividido por 12.',
    },
    {
      value: '30 de dezembro',
      label: 'Limite para sacar em 2026',
      note: 'Quem não retirou ainda tem prazo.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito ao abono de 2026',
      paragraphs: [
        'O abono pago em 2026 tem como ano-base 2024, ou seja, olha para o que você trabalhou naquele ano. Para receber, é preciso cumprir quatro condições ao mesmo tempo: estar inscrito no PIS/Pasep há pelo menos 5 anos, ter trabalhado com carteira assinada por pelo menos 30 dias (seguidos ou não) em 2024, ter recebido em média até R$ 2.766 por mês e ter os dados daquele ano informados corretamente pelo empregador no eSocial.',
        'Falhar em qualquer uma dessas condições zera o benefício daquele ciclo. O trabalhador de empresa privada recebe o PIS pela Caixa, e o servidor público recebe o Pasep pelo Banco do Brasil.',
      ],
    },
    {
      heading: 'Como o valor é calculado',
      paragraphs: [
        'O valor é o salário mínimo vigente no ano do pagamento (R$ 1.621 em 2026) dividido por 12 e multiplicado pelos meses trabalhados em 2024. Cada mês em que você trabalhou 15 dias ou mais conta como mês inteiro; meses com menos de 15 dias não contam. O máximo, de R$ 1.621, vale para quem teve 12 meses de trabalho.',
      ],
      table: {
        caption: 'Abono por meses trabalhados em 2024',
        columns: ['Meses', 'Valor'],
        rows: [
          ['1', 'R$ 135,08'],
          ['3', 'R$ 405,25'],
          ['5', 'R$ 675,42'],
          ['6', 'R$ 810,50'],
          ['9', 'R$ 1.215,75'],
          ['11', 'R$ 1.485,92'],
          ['12', 'R$ 1.621,00'],
        ],
      },
    },
    {
      heading: 'Exemplo completo: quem trabalhou só parte de 2024',
      paragraphs: [
        'Marcos foi contratado em 18 de abril de 2024 e demitido em 20 de novembro do mesmo ano. Ganhou R$ 2.000 por mês nos quatro primeiros meses contados e R$ 2.800 nos três últimos. Ele se inscreveu no PIS em 2017. A conta fica assim:',
      ],
      table: {
        caption: 'Conta do abono de Marcos',
        columns: ['Etapa', 'Cálculo', 'Resultado'],
        rows: [
          ['PIS há 5 anos ou mais?', 'Inscrito desde 2017', 'Sim'],
          [
            'Meses que contam',
            'Abril: 13 dias (não conta). Maio a outubro: 6 meses. Novembro: 20 dias (conta)',
            '7 meses',
          ],
          [
            'Remuneração média',
            '(4 x R$ 2.000 + 3 x R$ 2.800) ÷ 7',
            'R$ 2.342,86 (abaixo de R$ 2.766)',
          ],
          ['Valor por mês', 'R$ 1.621 ÷ 12', 'R$ 135,08'],
          ['Abono', '7 x R$ 135,08', 'R$ 945,58'],
        ],
      },
    },
    {
      heading: 'Como consultar e onde sacar',
      paragraphs: [
        'Abra o aplicativo Carteira de Trabalho Digital, entre com a conta gov.br, vá em "Benefícios" e escolha "Abono Salarial". O aplicativo e o portal gov.br mostram o valor, o banco pagador e a data do depósito. Os pagamentos seguem um calendário escalonado e terminam em 30 de dezembro de 2026; quem não sacar até lá perde o valor desse ciclo.',
        'O PIS é pago pela Caixa: veja no aplicativo CAIXA Trabalhador se o valor já foi creditado ou se precisa ser retirado em agência ou lotérica, com documento de identificação. O Pasep é pago pelo Banco do Brasil, nos canais do próprio banco.',
      ],
    },
    {
      heading: 'Por que não aparece nada para mim',
      paragraphs: [
        'O motivo mais comum é um dado do empregador. Antes de desistir, confira a causa na lista abaixo.',
      ],
      table: {
        caption: 'Causas comuns e o que fazer',
        columns: ['Situação', 'O que fazer'],
        rows: [
          [
            'Empresa não informou ou informou errado no eSocial',
            'Peça ao RH que corrija o ano de 2024; depois de corrigido, a consulta é atualizada.',
          ],
          [
            'Inscrição no PIS/Pasep com menos de 5 anos',
            'Não há direito neste ciclo; confira a data da sua inscrição no PIS/Pasep.',
          ],
          [
            'Média acima de R$ 2.766',
            'O benefício não é devido; confira os salários que a empresa informou.',
          ],
          [
            'Menos de 30 dias de trabalho em 2024',
            'Não há direito; some todos os vínculos do ano antes de concluir.',
          ],
        ],
      },
    },
    {
      heading: 'Onde pedir ajuda',
      paragraphs: [
        'Para dúvidas sobre direito e dados informados, ligue para o Alô Trabalho, no 158, ou procure uma unidade do Ministério do Trabalho e Emprego. Para saque e conta, fale com a Caixa (PIS) ou com o Banco do Brasil (Pasep). Desconfie de mensagens que pedem pagamento ou senha para liberar o abono: o benefício é gratuito e não depende de intermediário.',
      ],
    },
  ],
  faq: [
    {
      question: 'O abono é pago junto com o salário?',
      answer:
        'Não. É um benefício separado, pago por calendário, e quem não retirou até o prazo perde o valor daquele ciclo.',
    },
    {
      question: 'Trabalhei 35 dias em 2024. Quanto recebo?',
      answer:
        'Você cumpre os 30 dias mínimos. O valor depende de como os dias caíram: se foram 20 dias num mês e 15 no seguinte, contam 2 meses e o abono é R$ 270,17. Se foram 25 dias num mês e 10 no outro, conta só 1 mês: R$ 135,08.',
    },
    {
      question: 'Tive dois empregos ao mesmo tempo em 2024. Soma?',
      answer:
        'O abono é um só por trabalhador, com no máximo 12 meses. A remuneração média considera o que você recebeu no ano, por isso confira se os dois vínculos aparecem corretos.',
    },
    {
      question: 'Quem tem o Pasep precisa fazer algo diferente?',
      answer:
        'A consulta é a mesma, na Carteira de Trabalho Digital ou no gov.br. A diferença está no pagamento, feito pelo Banco do Brasil, com calendário próprio.',
    },
    {
      question: 'O valor muda de um ano para outro?',
      answer:
        'Sim. Ele acompanha o salário mínimo do ano do pagamento: em 2026, o máximo é R$ 1.621. A regra de 5 anos de inscrição e o teto de renda média também são atualizados pelo governo.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego — Abono Salarial',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/abono-salarial',
    },
    {
      label: 'Agência Brasil — como consultar o abono salarial PIS/Pasep 2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-02/saiba-como-consultar-se-tem-direito-ao-abono-salarial-pispasep-2026',
    },
    {
      label: 'Caixa Econômica Federal — PIS',
    },
    {
      label: 'Banco do Brasil — Pasep',
    },
  ],
} as const satisfies GuideDocument;
