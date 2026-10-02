import type { GuideDocument } from '../../types';

export const guideBpcLoasQuemTemDireitoEComoPedir = {
  kind: 'guide',
  slug: 'bpc-loas-quem-tem-direito-e-como-pedir',
  title: 'BPC/LOAS: quem tem direito, a renda limite e como pedir',
  description:
    'O benefício de um salário mínimo para idosos e pessoas com deficiência de baixa renda: requisitos, documentos e o passo a passo do pedido.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-19',
  updatedAt: '2026-10-02',
  tags: ['bpc', 'loas', 'beneficios', 'inss', 'cadunico'],
  featuredCalculators: ['bpc', 'bolsa-familia', 'pis'],
  highlights: [
    {
      value: 'R$ 1.621',
      label: 'Valor do benefício',
      note: 'Um salário mínimo.',
    },
    {
      value: 'R$ 405,25',
      label: 'Renda por pessoa',
      note: '1/4 do salário mínimo.',
    },
    {
      value: '65 anos',
      label: 'Idade mínima',
      note: 'Ou pessoa com deficiência de longo prazo.',
    },
  ],
  sections: [
    {
      heading: 'O que é o BPC e quem pode receber',
      paragraphs: [
        'O Benefício de Prestação Continuada (BPC), também chamado de LOAS, paga um salário mínimo por mês (R$ 1.621 em 2026) a duas categorias de pessoas de baixa renda: idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade. No caso da deficiência, é preciso ter um impedimento de longo prazo, de 2 anos ou mais, que dificulte a participação plena na sociedade.',
        'O BPC é assistencial, não previdenciário. Por isso não exige contribuição ao INSS, mas também não paga 13º salário e não gera pensão por morte. Ele não pode ser recebido junto com aposentadoria, pensão ou seguro-desemprego.',
      ],
    },
    {
      heading: 'A regra da renda: quem entra na conta',
      paragraphs: [
        'A renda por pessoa do grupo familiar deve ser de até 1/4 do salário mínimo, R$ 405,25 em 2026. Conta-se a renda bruta de todos os integrantes da família que vivem na mesma casa: o requerente, o cônjuge ou companheiro, os pais, os irmãos solteiros e os filhos solteiros (e enteados). Filho casado que mora em outra casa fica fora da conta.',
        'Divida a renda bruta total pelo número de pessoas. Se o resultado for de até R$ 405,25, a renda está dentro do limite.',
      ],
      table: {
        caption: 'Renda familiar total máxima por tamanho da família',
        columns: ['Pessoas na casa', 'Renda bruta total máxima'],
        rows: [
          ['1', 'R$ 405,25'],
          ['2', 'R$ 810,50'],
          ['3', 'R$ 1.215,75'],
          ['4', 'R$ 1.621,00'],
          ['5', 'R$ 2.026,25'],
        ],
      },
    },
    {
      heading: 'Exemplo completo: seu Antônio, 66 anos',
      paragraphs: [
        'Seu Antônio tem 66 anos, mora com a esposa, que não tem renda, e com um filho solteiro de 30 anos, que trabalha e ganha bruto R$ 1.200. São 3 pessoas na casa. Veja o que acontece em três situações, dividindo a renda pelo número de pessoas:',
      ],
      table: {
        caption: 'Seu Antônio dentro e fora do limite',
        columns: ['Situação', 'Cálculo', 'Renda por pessoa', 'Resultado'],
        rows: [
          [
            'Filho ganha R$ 1.200',
            'R$ 1.200 ÷ 3',
            'R$ 400,00',
            'Dentro do limite (R$ 405,25)',
          ],
          [
            'Filho passa a ganhar R$ 1.300',
            'R$ 1.300 ÷ 3',
            'R$ 433,33',
            'Acima do limite',
          ],
          [
            'Filho se casa e muda de casa',
            'R$ 0 ÷ 2',
            'R$ 0,00',
            'Dentro do limite',
          ],
        ],
      },
    },
    {
      heading: 'Como pedir, passo a passo',
      paragraphs: [
        'Primeiro, atualize o Cadastro Único no CRAS: o cadastro precisa estar atualizado nos últimos 2 anos e conter todos os moradores com a renda correta. Depois, faça o pedido pelo Meu INSS ou pela central 135 (de segunda a sábado, das 7h às 22h). No Meu INSS, pesquise "assistencial" e escolha o benefício para idoso ou para pessoa com deficiência; acompanhe o andamento em "Consultar Pedidos".',
        'No caso do idoso, não há avaliação médica: o INSS confere a idade e a renda familiar com base no Cadastro Único e nos seus próprios registros. Por isso, qualquer divergência de renda ou de moradores no cadastro pode travar o pedido.',
        'Para a pessoa com deficiência, o INSS marca avaliação médica e avaliação social. Leve laudos, receitas, exames e relatórios recentes. A presença na agência só é exigida quando o INSS não consegue confirmar os dados por meios digitais.',
      ],
    },
    {
      heading: 'Documentos e erros comuns',
      paragraphs: [
        'Tenha em mãos documento de identificação com foto, CPF, comprovante de residência e o número do NIS. Se o pedido for feito por representante, é preciso procuração ou documento de curatela.',
        'Os erros que mais levam à negativa são três: moradores faltando no Cadastro Único, renda informada diferente da que consta nas bases do governo e cadastro vencido. Antes de pedir, confira se o cadastro mostra todas as pessoas da casa e a renda de cada uma.',
      ],
    },
    {
      heading: 'Depois da concessão',
      paragraphs: [
        'O benefício é revisado periodicamente e o valor acompanha o salário mínimo. Mudanças de renda ou da composição da família devem ser informadas no CRAS. Se o pedido for negado, leia o motivo na carta do INSS, corrija o dado apontado e faça novo pedido ou recurso pelo Meu INSS. Para dúvidas, ligue para o 135.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem recebe BPC pode trabalhar?',
      answer:
        'Há regras específicas para pessoas com deficiência que passam a trabalhar, com possibilidade de suspensão e retomada. Consulte o INSS antes de assinar a carteira.',
    },
    {
      question: 'Preciso ter contribuído ao INSS?',
      answer: 'Não. O BPC é assistencial e não exige contribuição.',
    },
    {
      question: 'A renda é bruta ou líquida?',
      answer:
        'Conta a renda bruta mensal das pessoas da família que moram na mesma casa. No exemplo do seu Antônio, o R$ 1.200 do filho é o valor antes dos descontos.',
    },
    {
      question: 'Meu filho casado entra na conta?',
      answer:
        'Não. Entram apenas filhos solteiros que moram na mesma casa, junto com cônjuge, pais e irmãos solteiros do requerente.',
    },
    {
      question: 'O BPC paga 13º salário?',
      answer:
        'Não. São 12 parcelas por ano, e o benefício também não gera pensão por morte para a família.',
    },
  ],
  sources: [
    {
      label: 'INSS — Benefício assistencial à pessoa idosa (BPC-LOAS)',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-assistenciais/beneficio-assistencial-a-pessoa-idosa-bpc-loas',
    },
    {
      label: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
      url: 'https://www.gov.br/mds/',
    },
    {
      label: 'Lei 8.742/1993 — LOAS',
    },
  ],
} as const satisfies GuideDocument;
