import type { NewsDocument } from '../../types';

export const news13oSalario2026Datas = {
  kind: 'news',
  slug: '13o-salario-2026-primeira-parcela-ate-30-de-novembro-e-segunda-ate-18-de-dezembro',
  title:
    '13º salário 2026: 1ª parcela até 30/11 e 2ª até 18/12; veja quanto cai na conta',
  description:
    'A 1ª parcela do 13º vence em 30/11 e a 2ª em 18/12, porque 20/12 cai num domingo. Veja quanto cai na conta em exemplos de salário.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/13o-salario-2026-primeira-parcela-ate-30-de-novembro-e-segunda-ate-18-de-dezembro.jpg',
    alt: 'Documento com as parcelas do 13º salário e calendários de novembro com o dia 30 marcado e de dezembro com o dia 18 marcado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-23',
  updatedAt: '2026-10-23',
  tags: ['13-salario', 'decimo-terceiro', 'trabalho', 'salario', 'clt'],
  featuredCalculators: [
    'decimo-salario',
    'decimo-proporcional',
    'salario-liquido',
  ],
  highlights: [
    {
      value: '18/12',
      label: 'Prazo da 2ª parcela em 2026',
      note: 'O dia 20/12 cai num domingo.',
    },
    {
      value: '30/11',
      label: 'Prazo da 1ª parcela',
      note: 'Cai numa segunda-feira.',
    },
    {
      value: 'R$ 1.707,40',
      label: '2ª parcela de quem ganha R$ 4.200',
      note: 'Sem dependentes e sem outros descontos.',
    },
  ],
  sections: [
    {
      heading: 'Quais são os prazos do 13º em 2026',
      paragraphs: [
        'A lei que dividiu o 13º em duas parcelas (Lei 4.749/1965) fixa 30 de novembro para a primeira e 20 de dezembro para a segunda. Em 2026, 30 de novembro cai numa segunda-feira, então o prazo vale como está. Já 20 de dezembro cai num domingo.',
        'Quando o último dia não é dia útil, a orientação divulgada pela Agência Brasil em dezembro de 2025, com base em advogados trabalhistas, é antecipar o depósito para o dia útil bancário anterior. Para a segunda parcela de 2026, isso leva o prazo prático para sexta-feira, 18 de dezembro. A empresa que pagar depois corre o risco de multa administrativa do Ministério do Trabalho e Emprego.',
        'A primeira parcela pode ser paga em qualquer mês, de fevereiro a 30 de novembro, e muitas empresas pagam junto com a folha de novembro. Quem pediu o adiantamento junto com as férias, por escrito em janeiro, já recebeu a metade do 13º no mês do descanso.',
      ],
    },
    {
      heading: 'Quanto cai em cada parcela',
      image: {
        src: '/images/news/13o-salario-2026-primeira-parcela-ate-30-de-novembro-e-segunda-ate-18-de-dezembro-detalhe.jpg',
        alt: 'Detalhe dos calendários de novembro, com o dia 30 marcado, e de dezembro, com o dia 18 marcado.',
        caption:
          'Os dois prazos de 2026: 30/11 para a primeira parcela e 18/12 para a segunda.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A primeira parcela é metade do salário bruto, sem desconto algum. Todo o INSS e o Imposto de Renda do 13º inteiro saem na segunda parcela, que ainda abate o que o trabalhador já recebeu na primeira.',
        'Exemplo com salário de R$ 4.200 e ano inteiro de trabalho: a primeira parcela é de R$ 2.100,00. O INSS sobre R$ 4.200 é de R$ 392,60 (R$ 121,57 na faixa de 7,5%, R$ 115,37 na de 9% e R$ 155,66 na de 12%). O Imposto de Renda é zero, porque o valor fica abaixo do limite de isenção de R$ 5.000 da Lei 15.270/2025. A segunda parcela fica em R$ 4.200,00 menos R$ 392,60 menos R$ 2.100,00, ou seja, R$ 1.707,40. No total, o trabalhador recebe R$ 3.807,40.',
        'Quem ganha mais sente a diferença na segunda parcela. Com salário de R$ 8.000, o INSS é de R$ 921,51 e o Imposto de Renda, de R$ 1.037,86, sem dependentes. A primeira parcela é de R$ 4.000,00 e a segunda cai para R$ 2.040,62, cerca de metade da primeira.',
      ],
      table: {
        caption: '13º integral de quem trabalhou o ano todo, sem dependentes',
        columns: [
          'Salário',
          '1ª parcela (até 30/11)',
          'INSS',
          'IRRF',
          '2ª parcela (até 18/12)',
        ],
        rows: [
          ['R$ 3.500,00', 'R$ 1.750,00', 'R$ 308,60', 'R$ 0,00', 'R$ 1.441,40'],
          ['R$ 4.200,00', 'R$ 2.100,00', 'R$ 392,60', 'R$ 0,00', 'R$ 1.707,40'],
          ['R$ 5.000,00', 'R$ 2.500,00', 'R$ 501,51', 'R$ 0,00', 'R$ 1.998,49'],
          [
            'R$ 8.000,00',
            'R$ 4.000,00',
            'R$ 921,51',
            'R$ 1.037,86',
            'R$ 2.040,62',
          ],
        ],
      },
    },
    {
      heading: 'Quem recebe o 13º e como fica o proporcional',
      paragraphs: [
        'Tem direito ao 13º o empregado com carteira assinada, o trabalhador doméstico e o aposentado ou pensionista do INSS. Quem trabalhou os 12 meses recebe o valor cheio. Quem entrou ou saiu no meio do ano recebe 1/12 por mês trabalhado, e o mês só conta se houver 15 dias ou mais de trabalho.',
        'Exemplo: quem começou em junho trabalhou 7 meses em 2026. Com salário de R$ 2.350,00, o 13º bruto é de R$ 2.350,00 × 7 ÷ 12 = R$ 1.370,83. Horas extras, comissões e adicionais habituais entram na média e aumentam o valor.',
        'Os aposentados e pensionistas do INSS não entram nesse calendário de novembro e dezembro: o 13º do INSS de 2026 foi antecipado e pago em duas parcelas ao longo de abril e maio.',
      ],
    },
    {
      heading: 'O que fazer se o pagamento atrasar ou vier errado',
      paragraphs: [
        'Guarde o holerite e o comprovante de depósito. Se a primeira parcela não estiver na conta até 30/11, ou a segunda até 18/12, peça uma explicação por escrito ao RH, que deve informar a data do pagamento.',
        'Se o valor parecer errado, solicite a memória de cálculo com os avos e as médias usados, e confira com a calculadora de 13º do PortalFina. Persistindo o problema, procure o sindicato da categoria ou o Ministério do Trabalho e Emprego.',
      ],
    },
  ],
  faq: [
    {
      question:
        'Qual é a data final para pagar a segunda parcela do 13º em 2026?',
      answer:
        'O prazo legal é 20 de dezembro, mas essa data cai num domingo. A orientação é pagar até o dia útil anterior, sexta-feira, 18 de dezembro.',
    },
    {
      question: 'A primeira parcela do 13º tem desconto?',
      answer:
        'Não. A primeira parcela é metade do salário bruto, sem INSS nem Imposto de Renda. Os descontos incidem sobre o 13º inteiro e saem na segunda parcela.',
    },
    {
      question: 'Quem trabalha há menos de um ano recebe o 13º?',
      answer:
        'Sim, de forma proporcional: 1/12 do salário por mês trabalhado, contando o mês em que houve 15 dias ou mais de trabalho.',
    },
  ],
  sources: [
    {
      label: 'Lei 4.749/1965: pagamento do 13º salário em duas parcelas',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l4749.htm',
    },
    {
      label:
        'eSocial: prazo para pagar a primeira parcela do 13º, 30 de novembro',
      url: 'https://www.gov.br/esocial/pt-br/noticias/prazo-para-pagamento-da-primeira-parcela-do-13o-salario-encerra-se-dia-30-de-novembro-fique-atento-programe-se-evite-deixar-para-a-ultima-hora',
    },
    {
      label:
        'Agência Brasil: segunda parcela do 13º e antecipação para o dia útil anterior',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/economia/audio/2025-12/segunda-parcela-do-13o-salario-deve-ser-paga-ate-esta-sexta-feira',
    },
    {
      label:
        'Agência Brasil: aposentados e pensionistas do INSS e a antecipação do 13º em 2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-04/aposentados-e-pensionistas-do-inss-podem-consultar-antecipacao-do-13o',
    },
  ],
} as const satisfies NewsDocument;
