import type { NewsDocument } from '../../types';

export const newsPacoteFiscal60Bi2027 = {
  kind: 'news',
  slug: 'pacote-fiscal-de-ate-r-60-bilhoes-limita-despesas-a-2-e-corta-incentivos-em-20',
  title:
    'Pacote fiscal de até R$ 60 bilhões limita despesas a 2% e corta benefícios fiscais em 20%',
  description:
    'Governo apresentou em 11/11 projeto de lei complementar com economia de R$ 50 a 60 bi em 2027: limite de despesas de 2%, corte de 20% em incentivos e supersalários.',
  category: 'economia',
  coverImage: {
    src: '/images/news/pacote-fiscal-de-ate-r-60-bilhoes-limita-despesas-a-2-e-corta-incentivos-em-20.jpg',
    alt: 'Documento com os números do ajuste fiscal de 2027, gráfico de despesas em queda, etiqueta R$ 60 bi, pilha de moedas e carimbo PLP no Senado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-11',
  updatedAt: '2026-11-11',
  tags: [
    'ajuste-fiscal',
    'orcamento-2027',
    'arcabouco-fiscal',
    'supersalarios',
    'beneficios-fiscais',
    'senado',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 50-60 bi',
      label: 'Economia estimada em 2027',
      note: 'Estimativa do governo, sem cálculo detalhado por medida.',
    },
    {
      value: '2%',
      label: 'Limite de alta real das despesas',
      note: 'Hoje o arcabouço fiscal permite até 2,5%.',
    },
    {
      value: '20%',
      label: 'Corte em benefícios fiscais',
      note: 'Isenções e alíquotas reduzidas passam a valer em parte.',
    },
    {
      value: '120 dias',
      label: 'Prazo sobre supersalários',
      note: 'Para o Congresso analisar a regulamentação.',
    },
  ],
  sections: [
    {
      heading: 'O que o governo apresentou em 11/11',
      paragraphs: [
        'O ministro do Planejamento e Orçamento, Bruno Moretti, apresentou em 11 de novembro de 2026, na Comissão Mista de Orçamento (CMO), um pacote de ajuste fiscal para 2027. O instrumento é um projeto de lei complementar (PLP) que, segundo o governo, geraria economia de R$ 50 bilhões a R$ 60 bilhões no próximo ano. A Agência Brasil informa que não há memória de cálculo detalhada por medida.',
        'A Agência Brasil atribui a apresentação do texto ao líder do governo no Senado, Jaques Wagner (PT-BA), com relatoria do senador Eduardo Braga (MDB-AM), que também relata o Orçamento de 2027. A Agência Câmara descreve o projeto como ainda em negociação com as lideranças e diz que a tramitação começa pelo Senado. Como se trata de lei complementar, o texto precisa ser aprovado pelas duas Casas. O governo quer concluir a votação ainda em 2026.',
        'O pacote reforça o projeto do Orçamento de 2027 (PLN 24/26), que prevê superávit primário de R$ 83,4 bilhões, e a meta de 0,5% do PIB para o resultado fiscal do ano. Moretti afirmou que as medidas não são um choque fiscal.',
      ],
    },
    {
      heading:
        'Limite de despesas cai de 2,5% para 2% e benefícios fiscais encolhem',
      image: {
        src: '/images/news/pacote-fiscal-de-ate-r-60-bilhoes-limita-despesas-a-2-e-corta-incentivos-em-20-detalhe.jpg',
        alt: 'Detalhe da ilustração: economia de R$ 50 a 60 bi em 2027, limite de despesas de 2% (antes 2,5%), corte de 20% em benefícios fiscais e 120 dias para supersalários.',
        caption: 'Os números centrais do pacote fiscal de 2027.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A primeira medida é reduzir o limite de crescimento real das despesas federais de 2,5% para 2% a partir de 2027. Um exemplo hipotético mostra o tamanho da diferença: sobre um conjunto de despesas de R$ 100 bilhões, a alta real máxima passaria de R$ 2,5 bilhões para R$ 2 bilhões, ou R$ 500 milhões a menos de aumento.',
        'A segunda frente são os benefícios tributários, com corte de 20%. Pelo texto descrito pela Agência Brasil, isenções passariam a pagar 20% da alíquota padrão, alíquotas reduzidas seriam compostas de 80% da reduzida e 20% da padrão, e os créditos tributários ficariam limitados a 80% do valor. A matéria não identifica setores ou empresas.',
        'Um exemplo ilustrativo: uma empresa vende R$ 100.000,00 em um produto com alíquota reduzida de 10%, enquanto a padrão é 20%. Hoje paga R$ 10.000,00. Pela composição de 80% da reduzida e 20% da padrão, a alíquota efetiva iria a 12% (0,8 x 10% + 0,2 x 20%), ou R$ 12.000,00. Os números são hipotéticos e servem só para mostrar a lógica da regra.',
      ],
      table: {
        caption:
          'Principais medidas do projeto, segundo Agência Brasil e Agência Câmara',
        columns: ['Medida', 'O que prevê'],
        rows: [
          [
            'Limite de despesas',
            'Alta real de até 2% ao ano a partir de 2027 (hoje, 2,5%)',
          ],
          [
            'Benefícios fiscais',
            'Corte de 20% em isenções, alíquotas reduzidas e créditos',
          ],
          [
            'Supersalários',
            'Congresso tem 120 dias para analisar a regulamentação',
          ],
          [
            'Fundos públicos',
            'Uso de até 40% do superávit financeiro do ano anterior',
          ],
          [
            'Compensação previdenciária',
            'Limite de R$ 3 bi por ano entre 2027 e 2030',
          ],
          ['Diesel', 'Até R$ 10,5 bi em subsídios fora da meta fiscal de 2026'],
        ],
      },
    },
    {
      heading: 'Supersalários, saúde e educação: o que fica de fora do corte',
      paragraphs: [
        'Sobre os supersalários, o projeto não determina cortes imediatos nem estima economia. A proposta dá ao Congresso até 120 dias, contados da publicação da eventual lei complementar, para analisar a regulamentação das verbas indenizatórias que ultrapassam o teto constitucional, hoje de R$ 46.366,19 por mês, segundo a Agência Brasil.',
        'Na saúde e na educação, o governo propõe retirar receitas extraordinárias de petróleo da base de cálculo dos pisos. Segundo a Agência Câmara, o piso da saúde em 2027 seria de R$ 272,2 bilhões, e o da educação, de R$ 141,2 bilhões, R$ 2,4 bilhões acima do mínimo. A Agência Brasil informa que recursos vinculados a saúde, educação, seguridade e segurança ficam preservados no uso do superávit dos fundos.',
        'O texto também limita a R$ 1 bilhão por ano as despesas de financiamento às exportações até 2030 e prevê redução temporária de certas transferências a estados, com redistribuição dos valores restantes entre 2031 e 2037.',
      ],
    },
    {
      heading: 'O que muda para o cidadão e o que vem agora',
      paragraphs: [
        'O pacote ainda não é lei, então nada muda hoje para o salário, o benefício ou os impostos do cidadão. Os efeitos práticos dependem do texto final: o limite de despesas pesa sobre o espaço para novos gastos do governo, e o corte nos incentivos pode elevar custos de empresas que hoje usam isenções, com possível reflexo em preços, o que a reportagem não quantifica.',
        'Houve críticas no debate da CMO. O deputado Lindbergh Farias (PT-RJ) disse estar frustrado e sugeriu tributar bancos e títulos como LCA e LCI, o que não consta do texto. Já o deputado Mauro Benevides Filho (União-CE) cobrou discussão sobre o custo da rolagem da dívida. Segundo a Agência Câmara, a dívida chegaria a 87,8% do PIB em 2029 e depois cairia.',
        'Quem acompanha o assunto deve observar a apresentação formal do texto no Senado, a distribuição da relatoria e a votação em plenário. Se houver mudanças, os números acima podem variar.',
      ],
    },
  ],
  faq: [
    {
      question: 'O pacote fiscal já está em vigor?',
      answer:
        'Não. É um projeto de lei complementar que ainda precisa ser aprovado pelo Senado e pela Câmara. O governo quer votar ainda em 2026.',
    },
    {
      question: 'Quanto o governo quer economizar com o pacote?',
      answer:
        'Entre R$ 50 bilhões e R$ 60 bilhões em 2027, segundo a Agência Brasil. A Agência Câmara fala em R$ 60 bilhões. Não há memória de cálculo detalhada por medida.',
    },
    {
      question: 'O pacote corta o salário de servidores com supersalário?',
      answer:
        'Não de imediato. O projeto dá 120 dias ao Congresso para analisar a regulamentação das verbas acima do teto de R$ 46.366,19 e não estima economia com essa medida.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Governo anuncia medidas de ajuste para economia de até R$ 60 bilhões',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/governo-anuncia-medidas-de-ajuste-para-economia-de-ate-r-60-bilhoes',
    },
    {
      label:
        'Agência Brasil: Pacote fiscal prevê 120 dias para Congresso discutir supersalários',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/pacote-fiscal-preve-120-dias-para-congresso-discutir-supersalarios',
    },
    {
      label:
        'Agência Câmara: Ministro do Planejamento anuncia novas medidas de ajuste fiscal para 2027',
      url: 'https://www.camara.leg.br/noticias/1318603-ministro-do-planejamento-anuncia-novas-medidas-de-ajuste-fiscal-para-2027',
    },
  ],
} as const satisfies NewsDocument;
