import type { NewsDocument } from '../../types';

export const newsCagedSetembro2026 = {
  kind: 'news',
  slug: 'brasil-gera-121-3-mil-empregos-em-setembro-caged',
  title:
    'Caged: Brasil gera 121,3 mil empregos com carteira em setembro e soma 1,24 milhão no ano',
  description:
    'Saldo de 121,3 mil vagas em setembro, salário médio de admissão de R$ 2.429,41 e 26 estados no azul. Veja o que o Caged mostra para quem trabalha ou procura vaga.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/brasil-gera-121-3-mil-empregos-em-setembro-caged.jpg',
    alt: 'Documento com o saldo do Caged de setembro de 2026, carteira de trabalho, etiqueta de 121,3 mil e celular com salário médio de admissão de R$ 2.429,41.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-05',
  updatedAt: '2026-11-05',
  tags: ['caged', 'emprego', 'carteira-assinada', 'salario', 'trabalho'],
  featuredCalculators: ['salario-liquido', 'seguro-desemprego', 'inss'],
  highlights: [
    {
      value: '121,3 mil',
      label: 'Vagas criadas em setembro',
      note: 'Saldo entre admissões e desligamentos com carteira.',
    },
    {
      value: '1,24 mi',
      label: 'Saldo de janeiro a setembro',
      note: 'Alta de 2,65% no estoque de empregos formais.',
    },
    {
      value: 'R$ 2.429,41',
      label: 'Salário médio de admissão',
      note: 'R$ 44,90 a mais que em setembro de 2025.',
    },
    {
      value: '26 de 27',
      label: 'Estados com saldo positivo',
      note: 'Só o Rio Grande do Sul fechou no negativo.',
    },
  ],
  sections: [
    {
      heading: 'Quantas vagas com carteira assinada surgiram em setembro',
      paragraphs: [
        'O Cadastro Geral de Empregados e Desempregados (Caged), do Ministério do Trabalho e Emprego, foi divulgado na quarta-feira (4/11). Em setembro de 2026, o país criou 121.305 empregos formais, resultado de 2,21 milhões de admissões e 2,09 milhões de desligamentos.',
        'No acumulado de janeiro a setembro, o saldo chega a 1.248.914 vagas, o que o governo resume como 1,24 milhão de novos postos com carteira assinada. O estoque total de vínculos formais é de 48,3 milhões de empregos, 1,65% a mais do que em setembro de 2025.',
        'O ritmo, porém, é menor que o do ano passado. Em setembro de 2025 o saldo foi de 214,6 mil vagas, o que significa que o resultado deste ano é 43,5% menor. Segundo a Agência Brasil, é o menor saldo para um mês de setembro desde 2020. No acumulado de janeiro a setembro, o saldo de 2026 também ficou abaixo do de 2025, que foi de 1.731.398 vagas.',
      ],
    },
    {
      heading: 'Salário médio de admissão: R$ 2.429,41',
      image: {
        src: '/images/news/brasil-gera-121-3-mil-empregos-em-setembro-caged-detalhe.jpg',
        alt: 'Detalhe da ilustração: saldo de 121,3 mil em setembro, 1,24 milhão no ano, 214,6 mil em setembro de 2025 e salário de admissão de R$ 2.429.',
        caption:
          'O saldo de setembro de 2026 ao lado do acumulado do ano e do resultado de um ano antes.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O salário médio real de admissão, que é o que ganha em média quem acabou de ser contratado, ficou em R$ 2.429,41 em setembro. É R$ 44,90 acima do valor de setembro de 2025 (R$ 2.384,51), uma alta de 1,88% já descontada a inflação.',
        'Para quem se encaixa nessa média, a conta do desconto é simples. Num salário de R$ 2.429,41, a contribuição ao INSS soma cerca de R$ 194,33: R$ 121,57 sobre a primeira faixa, de até R$ 1.621,00, a 7,5%, e R$ 72,76 sobre o que passa disso, até esse valor, a 9%. Como o salário está abaixo do limite de isenção do Imposto de Renda na fonte, o líquido fica perto de R$ 2.235,08, antes de vale-transporte, plano de saúde ou outros descontos. Use a calculadora de salário líquido para o seu caso.',
        'Lembre que a média mistura todas as profissões e regiões. O Caged mostra que trabalhadores em perfil considerado típico entram com R$ 2.480,24, enquanto os demais entram com R$ 2.054,61.',
      ],
      table: {
        caption: 'Caged de setembro de 2026 em números',
        columns: ['Indicador', 'Resultado', 'Comparação'],
        rows: [
          [
            'Saldo de setembro',
            '121.305 vagas',
            '214,6 mil em setembro de 2025',
          ],
          [
            'Saldo de janeiro a setembro',
            '1.248.914 vagas',
            '1.731.398 em 2025',
          ],
          [
            'Admissões e desligamentos',
            '2,21 milhões e 2,09 milhões',
            'Valores arredondados',
          ],
          [
            'Salário médio de admissão',
            'R$ 2.429,41',
            'R$ 2.384,51 em setembro de 2025',
          ],
          [
            'Estoque de empregos formais',
            '48,3 milhões',
            '1,65% a mais em 12 meses',
          ],
        ],
      },
    },
    {
      heading: 'Quais setores e estados mais contrataram',
      paragraphs: [
        'Quatro dos cinco grandes setores tiveram saldo positivo. Serviços liderou, com 81.241 vagas, puxado por atividades administrativas (18.386), saúde e serviços sociais (15.403) e transporte, armazenagem e correio (13.240). A indústria somou 19.285 vagas, o comércio 15.697 e a construção 9.468.',
        'A única queda veio da agropecuária, com saldo negativo de 4.381 vagas. A Agência Brasil lembra que o recuo é comum em setembro, com o início do plantio.',
        'Por regiões, todas fecharam no positivo: Nordeste (49.142), Sudeste (39.404), Norte (14.748), Sul (9.949) e Centro-Oeste (7.894). Entre os estados, 26 dos 27 tiveram saldo positivo. São Paulo (19.391), Pernambuco (13.371) e Alagoas (11.110) tiveram os maiores saldos. O Rio Grande do Sul foi o único com saldo negativo, o que o ministério atribui ao fim da safra de fumo e à retração no varejo.',
      ],
    },
    {
      heading:
        'Quem ocupou as vagas e o que isso muda para quem procura emprego',
      paragraphs: [
        'Pelo perfil, as mulheres ficaram com 62.989 das vagas do saldo e os homens com 59.129. Os jovens de até 24 anos tiveram saldo de 106.293, e quem tem ensino médio completo, 82.818.',
        'Para quem busca vaga, o dado indica que o mercado segue contratando, mas em ritmo mais moderado, e que os serviços concentram a maior parte das oportunidades. Para quem perdeu o emprego com carteira assinada, o seguro-desemprego pode estar disponível a quem cumpre os requisitos: simule o valor na calculadora do portal.',
        'O Caged mede apenas empregos formais. O resultado da PNAD Contínua, do IBGE, que inclui também informais e autônomos, mostrou desemprego de 5,2% no trimestre até setembro. As próximas divulgações do Caged saem mensalmente, com os números de outubro previstos para dezembro.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é o saldo do Caged?',
      answer:
        'É a diferença entre as contratações e os desligamentos de trabalhadores com carteira assinada no período. Se for positivo, o país criou mais empregos formais do que fechou.',
    },
    {
      question: 'O Caged conta autônomos e informais?',
      answer:
        'Não. O Caged registra apenas vínculos formais regidos pela CLT. Para o quadro completo, inclusive informais, a referência é a PNAD Contínua do IBGE.',
    },
    {
      question: 'Quanto ganha, em média, quem foi contratado em setembro?',
      answer:
        'O salário médio real de admissão foi de R$ 2.429,41. É uma média nacional, e o valor varia conforme a profissão, o setor e a região.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Brasil cria 121,3 mil postos de trabalho em setembro, aponta Caged',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/brasil-cria-1213-mil-postos-de-trabalho-em-setembro-aponta-caged',
    },
    {
      label:
        'Agência Gov: Brasil gera 121,3 mil empregos formais em setembro e saldo no ano chega a 1,24 milhão',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/brasil-gera-121-3-mil-empregos-formais-em-setembro-e-saldo-no-ano-chega-a-1-24-milhao-de-novos-postos-com-carteira-assinada',
    },
    {
      label: 'Ministério do Trabalho e Emprego: Novo Caged',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged',
    },
  ],
} as const satisfies NewsDocument;
