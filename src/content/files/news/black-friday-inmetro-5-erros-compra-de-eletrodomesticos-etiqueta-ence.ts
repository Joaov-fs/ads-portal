import type { NewsDocument } from '../../types';

export const newsBlackFridayInmetroEletrodomesticos2026 = {
  kind: 'news',
  slug: 'black-friday-inmetro-5-erros-compra-de-eletrodomesticos-etiqueta-ence',
  title:
    'Black Friday: Inmetro lista 5 erros na compra de eletrodomésticos e ensina a ler a etiqueta ENCE',
  description:
    'Inmetro alerta para 5 erros na Black Friday: geladeira, ar-condicionado, máquina de lavar, ventilador e tensão. Veja como comparar consumo antes de pagar.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/black-friday-inmetro-5-erros-compra-de-eletrodomesticos-etiqueta-ence.jpg',
    alt: 'Documento com os itens geladeira, ar-condicionado, ventilador e tensão de 127 ou 220 V, ao lado de etiqueta Black Friday e marcador de eficiência ENCE A.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-13',
  updatedAt: '2026-11-13',
  tags: ['black-friday', 'inmetro', 'eletrodomesticos', 'ence', 'consumidor'],
  featuredCalculators: ['porcentagem', 'juros-simples'],
  highlights: [
    {
      value: '5 erros',
      label: 'Alerta do Inmetro',
      note: 'Em geladeira, ar, lavadora, ventilador e tensão.',
    },
    {
      value: '127 ou 220 V',
      label: 'Tensão da tomada',
      note: 'Confira antes de levar o produto para casa.',
    },
    {
      value: '0800 285 1818',
      label: 'Ouvidoria do Inmetro',
      note: 'Ligação gratuita, de telefone fixo.',
    },
  ],
  sections: [
    {
      heading: 'Por que o menor preço nem sempre é a melhor compra',
      paragraphs: [
        'O Inmetro divulgou em 13/11 um alerta com cinco erros comuns na compra de eletrodomésticos em promoções como a Black Friday. A recomendação central é que o preço mais baixo nem sempre representa a melhor escolha: o consumidor deve pesar o valor contra as características do aparelho e o custo de usá-lo.',
        'A principal ferramenta é a Etiqueta Nacional de Conservação de Energia (ENCE), presente em geladeiras, máquinas de lavar e aparelhos de ar-condicionado. A letra A indica maior eficiência, mas os demais dados da etiqueta também contam. O Inmetro orienta comparar modelos de capacidade parecida, olhando o consumo mensal em kWh nas geladeiras e o consumo anual nos condicionadores de ar.',
        'Como o consumo se repete todo mês, um aparelho um pouco mais caro e mais econômico pode compensar. Segundo o órgão, pagar mais por um modelo que gasta menos energia pode valer a pena ao longo dos meses.',
      ],
    },
    {
      heading: 'Erros 1 e 2: geladeira e ar-condicionado',
      image: {
        src: '/images/news/black-friday-inmetro-5-erros-compra-de-eletrodomesticos-etiqueta-ence-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com os cinco erros na compra, com geladeira, ar-condicionado, ventilador e tensão.',
        caption:
          'Cada item do documento corresponde a uma das verificações listadas pelo Inmetro.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Geladeira: o erro é olhar só o tamanho total. Duas geladeiras com a mesma capacidade podem ter espaços diferentes para o freezer e para os alimentos frescos, então vale conferir o volume de cada parte. O Inmetro também cita que modelos com compressor inverter podem gastar menos energia e que os frost free dispensam o degelo manual.',
        'Ar-condicionado: o erro é escolher a capacidade sem avaliar o ambiente. A potência é medida em BTUs e precisa combinar com o cômodo. Incidência de sol, número de pessoas, aparelhos que geram calor e portas e janelas bem vedadas entram na conta. O modelo inverter ajusta a velocidade do compressor, enquanto o convencional liga e desliga.',
        'Exemplo hipotético, só para mostrar a conta: com tarifa de R$ 0,90 por kWh, uma geladeira que gasta 10 kWh a menos por mês economiza R$ 9,00 mensais, ou R$ 108,00 por ano. Se o modelo mais eficiente custa R$ 100 a mais, a diferença se paga em pouco mais de 11 meses. Use os dados da etiqueta do modelo e a tarifa da sua conta de luz.',
      ],
    },
    {
      heading: 'Erros 3, 4 e 5: lavadora, ventilador e pequenos aparelhos',
      paragraphs: [
        'Máquina de lavar: nem sempre a maior capacidade é a melhor. O Inmetro dá o exemplo de uma lavadora de 18 kg e orienta avaliar o gasto de água e energia e o desempenho de lavagem e centrifugação. Nas lava e seca, a capacidade de secagem pode ser menor que a de lavagem, o que obriga a dividir a carga; o manual traz os limites.',
        'Ventilador: não confunda potência com vazão de ar. A potência, em watts, mostra a energia que o aparelho usa; a vazão é o volume de ar que ele movimenta. O Inmetro sugere pedir à loja que ligue o ventilador e conferir as tabelas do Programa Brasileiro de Etiquetagem.',
        'Secador de cabelo, liquidificador e aspirador: o erro é esquecer a tensão e o ruído. O Selo Ruído vai de 1 (mais silencioso) a 5 (mais barulhento) dentro da mesma categoria. A tensão pode ser 127 V, 220 V ou bivolt e deve combinar com a tomada de casa, porque a tensão errada pode causar mau funcionamento, danos e risco de segurança. Confira também o selo de conformidade do Inmetro nos produtos em que ele é obrigatório.',
      ],
      table: {
        caption: 'Os 5 erros e o que conferir',
        columns: ['Aparelho', 'Erro comum', 'O que conferir'],
        rows: [
          [
            'Geladeira',
            'Olhar só o tamanho total',
            'Volume do freezer, inverter e degelo',
          ],
          [
            'Ar-condicionado',
            'Escolher BTUs sem medir o ambiente',
            'Sol, pessoas, calor de outros aparelhos',
          ],
          [
            'Máquina de lavar',
            'Achar que maior é sempre melhor',
            'Gasto de água e energia, limites de secagem',
          ],
          [
            'Ventilador',
            'Confundir watts com vazão de ar',
            'Vazão nas tabelas do PBE',
          ],
          [
            'Secador, liquidificador, aspirador',
            'Ignorar tensão e ruído',
            '127 V, 220 V ou bivolt e Selo Ruído de 1 a 5',
          ],
        ],
      },
    },
    {
      heading: 'Como reclamar de produto sem selo ou que causou acidente',
      paragraphs: [
        'Para denunciar suspeita de irregularidade, como produto sem o selo de certificação obrigatória, o consumidor pode usar a Ouvidoria do Inmetro pelo formulário do site ou pelo telefone 0800 285 1818. A ligação é gratuita, vale só para telefone fixo e o atendimento é de segunda a sexta, das 8h às 16h30.',
        'Acidentes de consumo, como uma queimadura causada por falha do produto, podem ser comunicados ao Sistema Inmetro de Monitoramento de Acidentes de Consumo (Sinmac). O Sinmac monitora acidentes e não substitui a reclamação na Ouvidoria nem os direitos previstos no Código de Defesa do Consumidor.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que significa a letra A na etiqueta ENCE?',
      answer:
        'Indica maior eficiência energética. Mesmo assim, o Inmetro orienta comparar também capacidade e consumo em kWh entre modelos parecidos.',
    },
    {
      question: 'Como saber se o aparelho serve para a tomada de casa?',
      answer:
        'Veja a tensão indicada no produto: 127 V, 220 V ou bivolt. A tensão errada pode causar mau funcionamento, danos e risco de segurança.',
    },
    {
      question: 'Onde denunciar produto sem selo do Inmetro?',
      answer:
        'Na Ouvidoria do Inmetro, pelo site ou pelo 0800 285 1818, de telefone fixo, de segunda a sexta, das 8h às 16h30.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Black Friday, Inmetro alerta para 5 erros na compra de eletrodomésticos',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/black-friday-inmetro-alerta-para-5-erros-na-compra-de-eletrodomesticos',
    },
    {
      label: 'Inmetro: Ouvidoria, faça sua manifestação',
      url: 'https://www.gov.br/inmetro/pt-br/canais_atendimento/ouvidoria/faca-sua-manifestacao',
    },
    {
      label: 'Inmetro: Sinmac, monitoramento de acidentes de consumo',
      url: 'https://sinmac.inmetro.gov.br/#/inicio',
    },
  ],
} as const satisfies NewsDocument;
