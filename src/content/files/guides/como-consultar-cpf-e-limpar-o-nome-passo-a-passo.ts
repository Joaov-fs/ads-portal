import type { GuideDocument } from '../../types';

export const guideComoConsultarCpfELimparONomePassoAPasso = {
  kind: 'guide',
  slug: 'como-consultar-cpf-e-limpar-o-nome-passo-a-passo',
  title: 'Como consultar seu CPF, ver dívidas e limpar o nome',
  description:
    'Descubra se você está negativado, confira se a dívida é legítima, negocie com segurança e acompanhe a retirada do seu nome dos cadastros de proteção ao crédito.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-19',
  updatedAt: '2026-10-02',
  tags: ['nome-sujo', 'serasa', 'negativado', 'dividas'],
  featuredCalculators: ['juros-compostos', 'simulador-de-emprestimo'],
  highlights: [
    {
      value: '5 anos',
      label: 'Máximo da restrição',
      note: 'Contados do vencimento da dívida.',
    },
    {
      value: '5 dias úteis',
      label: 'Para retirar o nome',
      note: 'Depois do pagamento integral.',
    },
    {
      value: 'Grátis',
      label: 'Consulta',
      note: 'Nos birôs de crédito.',
    },
  ],
  sections: [
    {
      heading: 'Nome sujo é dívida, não problema na Receita',
      paragraphs: [
        'Estar negativado significa que um credor registrou uma dívida em atraso em um cadastro de proteção ao crédito, como Serasa, Boa Vista ou SPC. O efeito prático é a dificuldade de conseguir cartão, financiamento ou crediário. Esse registro não tem relação com a situação do CPF na Receita Federal, que pode estar regular mesmo com o nome sujo.',
        'Se ao tentar abrir uma conta você viu a mensagem "CPF irregular" ou "CPF com pendência", o problema pode estar na Receita, e não em dívidas. Nesse caso, veja o guia sobre como consultar a situação cadastral do CPF. O restante deste texto trata de dívidas e de negativação.',
      ],
    },
    {
      heading: 'Passo 1: consulte nos três birôs',
      paragraphs: [
        'Acesse os sites ou aplicativos de Serasa, Boa Vista e SPC e entre com seu CPF. Cada um tem a sua base, então consulte nos três. A tela de pendências mostra o credor, o valor, a data do vencimento e o contrato da dívida.',
        'Anote tudo em uma lista. Se aparecer uma dívida que você não conhece, não negocie ainda: ela pode ser fraude, cobrança em duplicidade ou erro de cadastro.',
      ],
    },
    {
      heading: 'Passo 2: confira se a dívida é sua e se o valor está certo',
      paragraphs: [
        'Antes de pagar, peça ao credor o contrato, o demonstrativo da dívida e a data do vencimento original. Compare com os seus comprovantes de pagamento. Se o valor estiver errado ou a dívida não for sua, conteste por escrito, pelo canal do credor, e guarde o protocolo. Se não resolver, registre a reclamação no consumidor.gov.br ou no Procon.',
        'Verifique também se houve aviso prévio. A lei exige que o consumidor seja comunicado por escrito quando seu nome é incluído em cadastro de inadimplentes, e a comunicação cabe ao órgão que mantém o cadastro. Se você nunca recebeu o aviso, informe isso na contestação. Pagamento já feito e registro mantido é motivo para exigir a correção imediata.',
      ],
    },
    {
      heading: 'Exemplo: João negocia uma dívida de R$ 1.280,00',
      paragraphs: [
        'João teve o cartão recusado na loja e, ao consultar, viu uma pendência de R$ 1.280,00 de uma loja de móveis, com vencimento em 2022. Ele confere o contrato, reconhece a compra e vê que o valor bate com as parcelas não pagas.',
        'A loja oferece duas propostas: pagar R$ 640,00 à vista ou parcelar em 6 vezes de R$ 135,00. A conta é simples: 6 x R$ 135,00 = R$ 810,00, ou seja, R$ 170,00 a mais do que à vista. Como João recebeu um valor extra no mês, ele escolhe pagar à vista, e não parcela só porque a parcela parece pequena.',
        'Ele paga pelo boleto gerado no site da própria loja e confere se o beneficiário é o nome da empresa. Se a negociação for por mensagem ou telefone, ele pede a proposta por escrito. Depois do pagamento, guarda o comprovante e o acordo. Cinco dias úteis depois, consulta de novo nos três birôs para confirmar a baixa.',
      ],
      table: {
        caption: 'Prazos que importam em uma negativação',
        columns: ['Situação', 'Prazo', 'Base'],
        rows: [
          [
            'Retirada do nome após o pagamento integral',
            'Até 5 dias úteis',
            'Súmula 548 do STJ.',
          ],
          [
            'Duração máxima da restrição',
            'Até 5 anos, contados do vencimento',
            'CDC e Súmula 323 do STJ.',
          ],
          [
            'Correção de dado errado no cadastro',
            'Até 5 dias úteis para comunicar a alteração',
            'Código de Defesa do Consumidor.',
          ],
        ],
      },
    },
    {
      heading: 'Passo 3: cuidado com golpes na negociação',
      paragraphs: [
        'O golpe mais comum é o falso negociador: alguém liga, manda mensagem ou e-mail com um boleto ou Pix "com desconto" para uma dívida que existe. O pagamento vai para a conta do golpista e a dívida continua. Entre sempre pelo site ou aplicativo do credor, ou pelo canal de negociação do birô, e confira o nome do beneficiário antes de pagar. O guia sobre boleto falso explica o que verificar.',
        'Ninguém cobra para limpar o nome. Empresas que prometem "limpar o nome em 24 horas" por uma taxa não têm esse poder: a retirada depende de o credor quitar ou corrigir o registro.',
      ],
    },
    {
      heading: 'Passo 4: acompanhe a baixa e peça ajuda se precisar',
      paragraphs: [
        'Depois do pagamento integral, o credor deve pedir a exclusão do registro em até 5 dias úteis. Se o prazo passou e o nome continua sujo, mande o comprovante ao credor e exija a baixa por escrito. Persistindo, procure o Procon, o consumidor.gov.br ou a Defensoria Pública. Manter o nome negativado depois de pago pode dar direito à indenização, caso a caso.',
        'Se as dívidas somam mais do que cabe no orçamento, o Procon e a Defensoria Pública costumam oferecer atendimento de renegociação para quem está superendividado. Leve a lista de dívidas, as rendas e as despesas do mês.',
      ],
    },
  ],
  faq: [
    {
      question: 'Dívida antiga ainda pode ser cobrada?',
      answer:
        'O prazo para cobrar judicialmente é limitado, e o registro nos cadastros de crédito não pode passar de 5 anos. Mesmo assim, a dívida pode continuar sendo cobrada por outros meios. Para saber se o seu caso prescreveu, consulte a Defensoria Pública ou o Procon.',
    },
    {
      question: 'Pagar uma parcela do acordo já limpa o nome?',
      answer:
        'Em geral, a baixa ocorre após o pagamento integral da dívida ou conforme o que ficou combinado no acordo. Peça por escrito quando o nome será retirado.',
    },
    {
      question: 'Posso ser negativado sem aviso?',
      answer:
        'Não. A inclusão exige comunicação prévia por escrito ao consumidor. Se ela não ocorreu, você pode contestar o registro.',
    },
    {
      question: 'Estou negativado e quero um empréstimo. Dá para conseguir?',
      answer:
        'Dá, mas as taxas costumam ser mais altas. Antes de contratar, compare o custo total e use o simulador de empréstimo para ver quanto vai pagar no fim.',
    },
    {
      question: 'Consultar meu CPF nos birôs prejudica minha pontuação?',
      answer:
        'Não. A consulta que você faz ao seu próprio cadastro é um direito e não derruba o score.',
    },
  ],
  sources: [
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990), art. 43',
    },
    {
      label: 'Súmula 548 do STJ — prazo para exclusão do registro',
    },
    {
      label: 'Súmula 323 do STJ — prazo máximo de manutenção do registro',
    },
    {
      label: 'Plataforma consumidor.gov.br',
      url: 'https://www.consumidor.gov.br/',
    },
    {
      label: 'Procon e Defensoria Pública',
    },
  ],
} as const satisfies GuideDocument;
