/**
 * Refaz as tabelas de referência das calculadoras a partir do motor em
 * src/calculators (INSS, IRRF, seguro-desemprego, CDB etc.).
 *
 * Quando usar: depois de mudar uma regra anual em src/calculators (1º de janeiro).
 * Como rodar, na raiz do projeto:  npx tsx scripts/aprofundamento/gerar.mts
 *
 * Gera src/content/files/calculators/editorial/aprofundamento.ts e reescreve as
 * seções de ferias.ts, salario-liquido.ts e juros-compostos.ts. Os textos citam
 * alguns valores fixos (teto do INSS, faixas do seguro-desemprego, CDI de
 * referência): revise-os neste arquivo antes de rodar.
 */
import fs from 'node:fs';
import {
  calculateNetSalary,
  calculateThirteenth,
  calculateOvertime,
  calculateVacation,
  calculateNightShift,
  progressiveInss,
  progressiveIrrf,
} from '@/calculators/rules';
import {
  unemploymentBenefit,
  unemploymentInstallments,
} from '@/calculators/benefits';
import { fixedIncome, incomeTaxRateForDays } from '@/calculators/finance';
import { noticeDaysFor } from '@/calculators/termination';

const R = new URL('../../src/content/files/calculators', import.meta.url)
  .pathname;
const n2 = (n: number) =>
  n.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const brl = (n: number) => `R$ ${n2(n)}`;
const pct = (n: number) => `${n2(n)}%`;
const SM = 1621;

type Section = {
  heading: string;
  paragraphs: string[];
  table?: { caption?: string; columns: string[]; rows: string[][] };
};
const extras: Record<string, Section[]> = {};

// ---------- 13º salário ----------
{
  const rows = [2000, 3000, 4000, 5000, 6500, 8000, 10000].map((s) => {
    const r = calculateThirteenth({ salary: s });
    return [
      brl(s),
      brl(r.firstInstallment),
      brl(r.inss),
      brl(r.irrf),
      brl(r.secondInstallment),
      brl(r.net),
    ];
  });
  extras['decimo-salario'] = [
    {
      heading: 'Tabela de referência: 13º líquido por faixa de salário',
      paragraphs: [
        'A tabela mostra o 13º integral, sem dependentes, de quem trabalhou os 12 meses do ano. A primeira parcela é metade do salário bruto e sai sem desconto. O INSS e o Imposto de Renda são calculados sobre o 13º inteiro e descontados só da segunda parcela.',
        'A coluna da segunda parcela explica a surpresa de dezembro: até R$ 5.000 o Imposto de Renda do 13º é zero, mas a parcela final já é menor que a primeira por causa do INSS. Nos salários mais altos, o IRRF reduz a segunda parcela ainda mais, e ela pode ficar perto da metade da primeira.',
      ],
      table: {
        caption: '13º integral por salário, sem dependentes',
        columns: [
          'Salário',
          '1ª parcela',
          'INSS',
          'IRRF',
          '2ª parcela',
          'Total líquido',
        ],
        rows,
      },
    },
    {
      heading: 'Como conferir o 13º no contracheque',
      paragraphs: [
        'Confira três pontos. A primeira parcela deve ser exatamente metade do salário bruto, sem INSS e sem IRRF. A segunda deve trazer o INSS e o IRRF calculados sobre o 13º inteiro. E o valor bruto deve incluir a média de horas extras, comissões e adicionais habituais, quando existirem, e não só o salário-base.',
        'A primeira parcela pode ser paga entre fevereiro e 30 de novembro, e a segunda até 20 de dezembro. Se houver atraso, reclame por escrito ao RH e procure o sindicato ou o Ministério do Trabalho e Emprego. Quem entrou ou saiu durante o ano deve usar a calculadora de 13º proporcional.',
      ],
    },
  ];
}

// ---------- Horas extras ----------
{
  const rows = [2000, 3000, 4000, 6000].map((s) => {
    const r = calculateOvertime({
      salary: s,
      monthlyHours: 220,
      extraHours50: 10,
      extraHours100: 4,
      workDays: 26,
      restDays: 4,
    });
    return [
      brl(s),
      brl(r.hourly),
      brl(r.pay50),
      brl(r.pay100),
      brl(r.dsr),
      brl(r.total),
    ];
  });
  extras['horas-extras'] = [
    {
      heading: 'Tabela de referência: horas extras por faixa de salário',
      paragraphs: [
        'A tabela usa um mês com 26 dias úteis e 4 de repouso, jornada de 220 horas mensais, 10 horas extras comuns (50%) e 4 horas em domingos e feriados (100%). O reflexo no descanso semanal é o total das horas extras dividido pelos dias úteis e multiplicado pelos repousos.',
        'Mudar o número de dias úteis muda o reflexo: em meses com cinco domingos, o repouso pesa mais; em meses com mais dias úteis, pesa menos. Por isso o valor do holerite pode diferir alguns reais da simulação, e isso não significa erro da empresa.',
      ],
      table: {
        caption: 'Horas extras de um mês (10 h a 50% e 4 h a 100%)',
        columns: [
          'Salário',
          'Hora normal',
          '10 h a 50%',
          '4 h a 100%',
          'Reflexo no DSR',
          'Total bruto',
        ],
        rows,
      },
    },
    {
      heading: 'Limites e regras que valem para a hora extra',
      paragraphs: [
        'A jornada diária pode ter no máximo 2 horas extras, o que dá 10 horas de trabalho por dia. O adicional mínimo é de 50% sobre a hora normal, e muitas convenções coletivas pagam 100% em domingos e feriados e percentuais maiores em outros casos. Veja o que diz a convenção da sua categoria.',
        'Horas extras habituais refletem também em 13º, férias com um terço, FGTS e aviso prévio. Se a empresa compensa as horas em folga pelo banco de horas, o adicional não é pago em dinheiro, e o saldo que não for compensado no prazo deve ser pago como hora extra.',
      ],
    },
  ];
}

// ---------- INSS ----------
{
  const rows = [1621, 2500, 3500, 5000, 7000, 8475.55, 12000, 20000].map(
    (s) => {
      const i = progressiveInss(s);
      return [brl(s), brl(i), pct((i / s) * 100), brl(s - i)];
    },
  );
  extras['inss'] = [
    {
      heading: 'Tabela de referência: INSS por faixa de salário',
      paragraphs: [
        'O desconto é progressivo: cada alíquota, de 7,5%, 9%, 12% e 14%, incide só sobre a parte do salário que está dentro da faixa. A alíquota efetiva, que é o INSS dividido pelo salário, é sempre menor que a alíquota da última faixa atingida.',
        'No teto de R$ 8.475,55 o desconto trava em R$ 988,09, e quem ganha mais paga o mesmo valor. Por isso a alíquota efetiva cai nos salários muito altos, como mostra a linha de R$ 20.000.',
      ],
      table: {
        caption: 'INSS do empregado em 2026',
        columns: [
          'Salário',
          'INSS',
          'Alíquota efetiva',
          'Salário depois do INSS',
        ],
        rows,
      },
    },
    {
      heading: 'O que entra na base do INSS',
      paragraphs: [
        'Entram na base o salário, as horas extras, as comissões e os adicionais habituais. O 13º tem cálculo à parte, separado do salário do mês. Em regra, ficam de fora o vale-transporte e verbas de natureza indenizatória.',
        'Quem tem dois empregos paga INSS em cada um, mas a soma dos descontos é limitada ao teto. Avise o RH de cada empresa sobre o outro vínculo para que o desconto seja ajustado e o excesso, quando houver, não seja descontado duas vezes.',
      ],
    },
  ];
}

// ---------- IRRF ----------
{
  const rows = [4000, 5000, 5500, 6000, 7000, 7350, 9000, 12000].map((s) => {
    const r = calculateNetSalary({ salary: s });
    return [
      brl(s),
      brl(r.inss),
      brl(r.irrfBase),
      brl(r.irrf),
      pct((r.irrf / s) * 100),
    ];
  });
  const depRows = [0, 1, 2, 3].map((d) => {
    const r = calculateNetSalary({ salary: 6000, dependents: d });
    return [String(d), brl(r.irrfBase), brl(r.irrf), brl(r.net)];
  });
  extras['irrf'] = [
    {
      heading: 'Tabela de referência: IRRF por salário',
      paragraphs: [
        'A tabela mostra o IRRF mensal de 2026 sem dependentes. Até R$ 5.000 a redução da Lei 15.270/2025 zera o imposto. Entre R$ 5.000,01 e R$ 7.350 a redução diminui aos poucos até desaparecer, e acima disso vale a tabela cheia.',
        `Repare que o imposto não salta de zero para o valor cheio: ele sobe de forma gradual. É o que faz o peso do imposto sobre o salário bruto ser pequeno em R$ 5.500 e chegar a ${pct((calculateNetSalary({ salary: 12000 }).irrf / 12000) * 100)} em R$ 12.000.`,
      ],
      table: {
        caption: 'IRRF mensal em 2026, sem dependentes',
        columns: [
          'Salário bruto',
          'INSS',
          'Base do IRRF',
          'IRRF',
          'Peso no salário bruto',
        ],
        rows,
      },
    },
    {
      heading: 'Quanto cada dependente reduz o imposto',
      paragraphs: [
        'Cada dependente reduz R$ 189,59 da base de cálculo. Para um salário de R$ 6.000, os dependentes diminuem o IRRF mês a mês, como mostra a tabela. Só vale para dependentes informados ao RH, com os documentos exigidos.',
      ],
      table: {
        caption: 'Efeito dos dependentes no IRRF, salário de R$ 6.000',
        columns: ['Dependentes', 'Base do IRRF', 'IRRF', 'Líquido do mês'],
        rows: depRows,
      },
    },
  ];
}

// ---------- Seguro-desemprego ----------
{
  const medias = [1500, 2000, 2222.17, 2500, 3000, 3703.99, 5000];
  const rows = medias.map((m) => {
    const v = unemploymentBenefit(m, SM);
    const note = v <= SM ? ' (piso)' : v > 2518.64 ? ' (teto)' : '';
    return [brl(m), `${brl(v)}${note}`];
  });
  const totalRows = [
    ['12 a 23 meses', '1ª vez', String(unemploymentInstallments(1, 12))],
    ['24 meses ou mais', '1ª vez', String(unemploymentInstallments(1, 24))],
    ['9 a 11 meses', '2ª vez', String(unemploymentInstallments(2, 9))],
    ['12 a 23 meses', '2ª vez', String(unemploymentInstallments(2, 12))],
    ['6 a 11 meses', '3ª vez ou mais', String(unemploymentInstallments(3, 6))],
    [
      '24 meses ou mais',
      '3ª vez ou mais',
      String(unemploymentInstallments(3, 24)),
    ],
  ];
  const v3 = unemploymentBenefit(3000, SM);
  extras['seguro-desemprego'] = [
    {
      heading: 'Tabela de referência: valor da parcela por média salarial',
      paragraphs: [
        'O valor depende da média dos três últimos salários antes da dispensa. Até R$ 2.222,17, a parcela é de 80% da média. Entre R$ 2.222,18 e R$ 3.703,99, soma-se R$ 1.777,74 a 50% do que passar de R$ 2.222,17. Acima disso vale o teto de R$ 2.518,65, e nenhuma parcela pode ser menor que um salário mínimo (R$ 1.621,00).',
        'O piso explica por que quem ganhava R$ 1.500 ou R$ 2.000 recebe o mesmo valor por parcela. O teto explica por que, a partir de R$ 3.703,99 de média, mais salário não aumenta o benefício.',
      ],
      table: {
        caption: 'Parcela por média dos 3 últimos salários, 2026',
        columns: ['Média dos 3 últimos salários', 'Valor da parcela'],
        rows,
      },
    },
    {
      heading: 'Quantas parcelas e quanto no total',
      paragraphs: [
        `O número de parcelas depende de quantas vezes você já pediu o benefício e de quantos meses trabalhou com carteira assinada nos últimos 36 meses. Quem tem média de R$ 3.000,00 recebe parcelas de ${brl(v3)}: com 4 parcelas são ${brl(v3 * 4)}, e com 5 parcelas, ${brl(v3 * 5)}.`,
        'Na primeira solicitação, quem trabalhou menos de 12 meses não tem direito. O prazo para pedir é de 7 a 120 dias depois da dispensa, e o pedido pode ser feito pelo aplicativo Carteira de Trabalho Digital ou pelo portal gov.br.',
      ],
      table: {
        caption: 'Parcelas por solicitação e tempo de trabalho',
        columns: ['Tempo de trabalho', 'Solicitação', 'Parcelas'],
        rows: totalRows,
      },
    },
  ];
}

// ---------- FGTS e multa ----------
{
  const rows = [12, 24, 60, 120].map((m) => {
    const saldo = 3000 * m * 0.08;
    return [`${m} meses`, brl(saldo), brl(saldo * 0.4), brl(saldo * 1.4)];
  });
  const rows2 = [2000, 3000, 4500, 6000].map((s) => {
    const saldo = s * 24 * 0.08;
    return [brl(s), brl(saldo), brl(saldo * 0.4)];
  });
  extras['fgts-multa'] = [
    {
      heading: 'Tabela de referência: FGTS e multa de 40% por tempo de empresa',
      paragraphs: [
        'A empresa deposita 8% do salário por mês na conta do FGTS. Na dispensa sem justa causa, ela também deposita uma multa de 40% sobre o total depositado durante o contrato, e o trabalhador pode sacar o saldo e a multa.',
        'A tabela mostra o saldo estimado de quem ganha R$ 3.000 por mês, sem considerar rendimento nem saques anteriores. Ela mostra como o tempo de casa aumenta a multa: a de 120 meses é dez vezes a de 12 meses.',
      ],
      table: {
        caption: 'Salário de R$ 3.000: saldo estimado e multa de 40%',
        columns: [
          'Tempo de empresa',
          'Saldo estimado (8%)',
          'Multa de 40%',
          'Saldo mais multa',
        ],
        rows,
      },
    },
    {
      heading: 'Quanto muda com o salário',
      paragraphs: [
        'Salário e tempo de casa pesam na mesma proporção: dobrar um dos dois dobra o saldo e a multa. A tabela compara salários diferentes depois de 24 meses de empresa.',
        'Em acordo entre empresa e empregado, a multa cai para 20% e o saque é de 80% do saldo, sem direito ao seguro-desemprego. No pedido de demissão e na justa causa, não há multa nem saque, salvo outras hipóteses previstas em lei.',
      ],
      table: {
        caption: 'Saldo estimado e multa de 40% após 24 meses',
        columns: ['Salário', 'Saldo estimado (8%)', 'Multa de 40%'],
        rows: rows2,
      },
    },
  ];
}

// ---------- Aviso prévio ----------
{
  const rows = [3, 12, 24, 36, 60, 120, 240].map((m) => {
    const d = noticeDaysFor(m);
    return [`${m} meses`, `${d} dias`, brl((3000 / 30) * d)];
  });
  extras['aviso-previo'] = [
    {
      heading: 'Tabela de referência: dias de aviso por tempo de empresa',
      paragraphs: [
        'O aviso prévio é de 30 dias, mais 3 dias por ano completo de contrato, até o limite de 90 dias. A tabela mostra os dias e o valor do aviso indenizado para um salário de R$ 3.000, em que cada dia vale R$ 100,00.',
        'O aviso proporcional vale apenas para o aviso dado pela empresa. Quem pede demissão deve avisar com 30 dias, sem acréscimo por tempo de casa.',
      ],
      table: {
        caption: 'Aviso prévio indenizado, salário de R$ 3.000',
        columns: ['Tempo de empresa', 'Dias de aviso', 'Valor do aviso'],
        rows,
      },
    },
    {
      heading: 'Aviso trabalhado ou indenizado',
      paragraphs: [
        'No aviso trabalhado, o empregado cumpre a jornada com redução de 2 horas por dia ou, se preferir, de 7 dias corridos no final. No aviso indenizado, a empresa dispensa o trabalho e paga o valor correspondente, que entra na rescisão.',
        'O aviso, mesmo indenizado, conta como tempo de serviço: ele projeta mais avos de 13º e de férias e entra na base do FGTS. Por isso o valor da rescisão costuma ser maior do que a soma de salário e verbas proporcionais até a data do desligamento.',
      ],
    },
  ];
}

// ---------- CDB líquido ----------
{
  const rows = [3, 6, 12, 18, 24, 36].map((m) => {
    const r = fixedIncome(10000, 13.65, m);
    return [
      `${m} meses`,
      brl(r.gross),
      `${r.taxRate.toString().replace('.', ',')}%`,
      brl(r.tax),
      brl(r.net),
    ];
  });
  extras['cdb-liquido'] = [
    {
      heading: 'Tabela de referência: R$ 10.000 em CDB de 100% do CDI',
      paragraphs: [
        'A tabela usa a taxa de 13,65% ao ano, que é a referência do CDI em setembro de 2026, e mostra como o Imposto de Renda regressivo muda o ganho líquido conforme o prazo. Até 180 dias o imposto é de 22,5%, de 181 a 360 dias é de 20%, de 361 a 720 dias é de 17,5% e acima de 720 dias é de 15%.',
        'Repare que esperar mais tempo reduz a alíquota do imposto. Resgatar com 360 dias custa 20% em vez de 17,5%, que só vale a partir do 361º dia, e o mesmo vale nos outros marcos de prazo.',
      ],
      table: {
        caption: 'R$ 10.000 a 13,65% ao ano, rendimento bruto e líquido',
        columns: [
          'Prazo',
          'Rendimento bruto',
          'Alíquota do IR',
          'Imposto',
          'Rendimento líquido',
        ],
        rows,
      },
    },
    {
      heading: 'Como usar o resultado',
      paragraphs: [
        'Use o valor líquido para comparar com LCI, LCA, Tesouro Selic e poupança no mesmo prazo. LCI e LCA são isentas de Imposto de Renda para pessoa física, então um CDB precisa pagar um percentual maior do CDI para empatar com elas.',
        'A simulação supõe taxa constante e não inclui a taxa de custódia de alguns produtos. Se o CDB tem liquidez diária ou carência, confira as regras de resgate antes de contar com o dinheiro.',
      ],
    },
  ];
}

// ---------- Reajuste do aluguel ----------
{
  const idx = [3.35, 4.22, 4.58, 5];
  const rows = [1200, 1800, 2500, 3500].map((a) => [
    brl(a),
    ...idx.map((i) => brl(a * (1 + i / 100))),
  ]);
  extras['reajuste-aluguel'] = [
    {
      heading: 'Tabela de referência: novo aluguel por índice',
      paragraphs: [
        'A tabela aplica quatro índices a valores de aluguel comuns: 3,35% (IGP-M acumulado em 12 meses até setembro de 2026), 4,22% (IPCA até agosto de 2026), 4,58% (IPCA até setembro de 2026) e 5% como referência redonda.',
        'A diferença entre os índices parece pequena em percentual, mas vira dinheiro ao longo do contrato. Em um aluguel de R$ 2.500, passar de 3,35% para 4,58% custa cerca de R$ 31 a mais por mês, ou R$ 370 por ano.',
      ],
      table: {
        caption: 'Aluguel atual e valor reajustado por índice',
        columns: [
          'Aluguel atual',
          'Reajuste de 3,35%',
          'Reajuste de 4,22%',
          'Reajuste de 4,58%',
          'Reajuste de 5%',
        ],
        rows,
      },
    },
    {
      heading: 'Regras do reajuste',
      paragraphs: [
        'O reajuste só pode ser aplicado uma vez por ano, a cada 12 meses de contrato, e deve seguir o índice previsto no contrato. Se o contrato não definir o índice, ou se ele deixar de existir, as partes devem combinar um substituto por escrito.',
        'O índice mais alto não é automático: inquilino e proprietário podem negociar um valor menor, especialmente quando o mercado está desaquecido. Um reajuste combinado por mensagem ou por aditivo, com data de início, evita discussão depois.',
      ],
    },
  ];
}

// ---------- Salário por hora ----------
{
  const rows = [1621, 2000, 3000, 4500, 6000].map((s) => [
    brl(s),
    brl(s / 220),
    brl(s / 200),
    brl(s / 180),
    brl(s / 150),
  ]);
  extras['salario-por-hora'] = [
    {
      heading: 'Tabela de referência: valor da hora por jornada',
      paragraphs: [
        'O valor da hora é o salário dividido pelas horas mensais da jornada. Uma jornada de 44 horas semanais equivale a 220 horas por mês, uma de 40 horas equivale a 200, uma de 36 horas a 180 e uma de 30 horas a 150.',
        'Quanto menor a jornada, maior o valor da hora para o mesmo salário. É por isso que comparar propostas de emprego só pelo salário mensal pode enganar: R$ 3.000 por 150 horas valem mais por hora do que R$ 3.000 por 220 horas.',
      ],
      table: {
        caption: 'Valor da hora normal por salário e jornada mensal',
        columns: [
          'Salário',
          '220 horas',
          '200 horas',
          '180 horas',
          '150 horas',
        ],
        rows,
      },
    },
    {
      heading: 'Para que serve o valor da hora',
      paragraphs: [
        'O valor da hora é a base de horas extras, adicional noturno, desconto de atrasos e cobrança de trabalho avulso. A hora extra comum vale 50% a mais, e a de domingo e feriados costuma valer 100% a mais.',
        'Se você é autônomo, use o valor da hora CLT apenas como piso: some encargos, férias, 13º e custos próprios para chegar a um preço de hora que cubra o que a carteira assinada já paga.',
      ],
    },
  ];
}

// ---------- Férias proporcionais ----------
{
  const rows = [1, 2, 3, 4, 6, 8, 10, 12].map((m) => {
    const bruto = ((3000 * m) / 12) * (4 / 3);
    return [
      `${m}/12`,
      brl((3000 * m) / 12),
      brl((3000 * m) / 12 / 3),
      brl(bruto),
    ];
  });
  extras['ferias-proporcionais'] = [
    {
      heading: 'Tabela de referência: férias proporcionais por avos',
      paragraphs: [
        'As férias proporcionais pagam 1/12 do salário por mês trabalhado no período aquisitivo, mais o terço constitucional. A fração de 15 dias ou mais conta como mês inteiro. A tabela mostra os valores brutos para um salário de R$ 3.000.',
        'Em 12/12, o valor é igual ao das férias integrais: um salário mais um terço. Em uma rescisão sem justa causa, o aviso prévio indenizado projeta mais um avo no cálculo.',
      ],
      table: {
        caption: 'Férias proporcionais, salário de R$ 3.000',
        columns: [
          'Meses trabalhados',
          'Valor proporcional',
          'Terço constitucional',
          'Total bruto',
        ],
        rows,
      },
    },
    {
      heading: 'Quando as férias proporcionais são devidas',
      paragraphs: [
        'São pagas na rescisão sem justa causa, no pedido de demissão, no acordo entre as partes e no fim de contrato por prazo determinado. Na justa causa, só as férias vencidas são devidas. Férias vencidas, quando houver, valem um salário mais um terço e entram à parte.',
        'Os valores acima são brutos. O INSS e o IRRF incidem sobre as férias gozadas, mas as férias indenizadas na rescisão não têm INSS nem IRRF, e o terço constitucional também fica de fora desses descontos nesse caso.',
      ],
    },
  ];
}

// ---------- 13º proporcional ----------
{
  const rows = [1, 2, 3, 4, 6, 8, 10, 12].map((m) => {
    const bruto = (3000 * m) / 12;
    const inss = progressiveInss(bruto);
    return [`${m}/12`, brl(bruto), brl(inss), brl(bruto - inss)];
  });
  extras['decimo-proporcional'] = [
    {
      heading: 'Tabela de referência: 13º proporcional por avos',
      paragraphs: [
        'O 13º proporcional paga 1/12 do salário por mês trabalhado no ano, e a fração de 15 dias ou mais conta como mês inteiro. A tabela mostra o valor bruto e o INSS para um salário de R$ 3.000, sem considerar Imposto de Renda.',
        'Quem entrou em junho trabalhou 7 meses no ano e recebe 7/12. Quem saiu em março, com 15 dias ou mais de março, recebe 3/12.',
      ],
      table: {
        caption: '13º proporcional, salário de R$ 3.000',
        columns: [
          'Meses trabalhados',
          '13º bruto',
          'INSS',
          'Líquido depois do INSS',
        ],
        rows,
      },
    },
    {
      heading: 'Quem recebe o 13º proporcional',
      paragraphs: [
        'Recebe o 13º proporcional quem foi contratado durante o ano, quem saiu sem justa causa, quem pediu demissão e quem terminou um contrato por prazo determinado. Na justa causa, o 13º proporcional não é pago.',
        'Na rescisão, o INSS é descontado do 13º proporcional, e o Imposto de Renda incide sobre ele em separado. Confira os avos no termo de rescisão: um avo a menos pode significar centenas de reais a menos.',
      ],
    },
  ];
}

// ---------- Adicional noturno ----------
{
  const rows = [20, 40, 80, 120].map((h) => {
    const r = calculateNightShift({
      salary: 2640,
      monthlyHours: 220,
      nightHours: h,
      rate: 20,
    });
    return [
      `${h} horas`,
      brl(r.hourly),
      brl(r.additional),
      brl(r.reducedHourExtra),
    ];
  });
  extras['adicional-noturno'] = [
    {
      heading: 'Tabela de referência: adicional noturno por horas trabalhadas',
      paragraphs: [
        'O trabalho entre 22h e 5h tem adicional mínimo de 20% sobre a hora normal. A tabela usa um salário de R$ 2.640 e jornada de 220 horas mensais, o que dá hora normal de R$ 12,00, e mostra o adicional para diferentes quantidades de horas noturnas no mês.',
        'A hora noturna é reduzida: cada hora de trabalho noturno dura 52 minutos e 30 segundos. A última coluna mostra o valor adicional dessa redução, que depende de como a jornada foi contratada e pode já estar incluído no salário fixo.',
      ],
      table: {
        caption: 'Adicional noturno de 20%, salário de R$ 2.640',
        columns: [
          'Horas noturnas no mês',
          'Hora normal',
          'Adicional de 20%',
          'Efeito da hora reduzida',
        ],
        rows,
      },
    },
    {
      heading: 'Adicional noturno e outros adicionais',
      paragraphs: [
        'O adicional noturno é habitual e, por isso, reflete em 13º, férias com um terço, FGTS e DSR. Também entra na base de horas extras feitas à noite, que somam o adicional noturno ao adicional de hora extra.',
        'Convenções coletivas podem pagar mais que 20%. Confira o percentual no contrato ou na convenção da sua categoria antes de calcular, e mantenha o registro de ponto de cada hora noturna.',
      ],
    },
  ];
}

// ---------- gravar editorial extra ----------
const body = `import type { ContentSection } from '../../../types';

/**
 * Seções extras de cada calculadora (tabelas de referência calculadas pelo
 * motor em src/calculators). Entram depois de "O que muda o resultado".
 * Gerado a partir do motor: ao mudar uma regra anual, refaça as tabelas.
 */
export const calculatorExtras: Readonly<
  Record<string, readonly ContentSection[]>
> = ${JSON.stringify(extras, null, 2)};
`;
fs.writeFileSync(`${R}/editorial/aprofundamento.ts`, body);
console.log('extras:', Object.keys(extras).length);

// ---------- Calculadoras escritas à mão ----------
function patch(
  file: string,
  sections: Section[],
  faq: { question: string; answer: string }[],
) {
  let src = fs.readFileSync(`${R}/${file}`, 'utf8');
  const a = src.indexOf('  sections: [');
  const b = src.indexOf('  sources: [');
  if (a < 0 || b < 0) throw new Error('âncoras em ' + file);
  const block = `  sections: ${JSON.stringify(sections, null, 2)},\n  faq: ${JSON.stringify(faq, null, 2)},\n`;
  src = src.slice(0, a) + block + src.slice(b);
  src = src.replace(
    /updatedAt: '\d{4}-\d{2}-\d{2}'/,
    "updatedAt: '2026-10-12'",
  );
  fs.writeFileSync(`${R}/${file}`, src);
}

// Férias
{
  const ex = calculateVacation({
    salary: 4200,
    days: 20,
    sellDays: 10,
    dependents: 0,
  });
  const rows = [2000, 3000, 4500, 6000, 8000].map((s) => {
    const r = calculateVacation({
      salary: s,
      days: 30,
      sellDays: 0,
      dependents: 0,
    });
    return [brl(s), brl(r.gross), brl(r.inss), brl(r.irrf), brl(r.net)];
  });
  patch(
    'ferias.ts',
    [
      {
        heading: 'Como as férias são estimadas',
        paragraphs: [
          'As férias pagam o salário proporcional aos dias gozados e mais um terço constitucional sobre esse valor. Com 30 dias, o total é o salário multiplicado por 4/3. Os dias vendidos (abono pecuniário) também recebem o terço.',
          'O INSS e o IRRF incidem sobre as férias gozadas; o abono pecuniário, de até 10 dias, não tem desconto. Médias de horas extras e adicionais habituais entram na base real, mas não nesta simulação.',
        ],
      },
      {
        heading: 'Exemplo prático',
        paragraphs: [
          `Com salário de R$ 4.200,00, 20 dias de descanso e 10 dias vendidos, as férias gozadas valem ${brl(ex.taken)} mais ${brl(ex.takenThird)} de terço, e o abono vale ${brl(ex.allowance)} mais ${brl(ex.allowanceThird)} de terço. O total bruto é de ${brl(ex.gross)}.`,
          `Descontando ${brl(ex.inss)} de INSS e ${brl(ex.irrf)} de IRRF, que incidem só sobre as férias gozadas, sobram ${brl(ex.net)} líquidos. Vender os 10 dias aumenta o valor recebido, mas diminui o descanso.`,
        ],
        table: {
          caption: 'Férias de R$ 4.200 com 20 dias gozados e 10 vendidos',
          columns: ['Item', 'Valor'],
          rows: [
            ['Férias gozadas (20 dias)', brl(ex.taken)],
            ['1/3 sobre as férias gozadas', brl(ex.takenThird)],
            ['Abono pecuniário (10 dias)', brl(ex.allowance)],
            ['1/3 sobre o abono', brl(ex.allowanceThird)],
            ['Total bruto', brl(ex.gross)],
            ['INSS', brl(ex.inss)],
            ['IRRF', brl(ex.irrf)],
            ['Líquido estimado', brl(ex.net)],
          ],
        },
      },
      {
        heading: 'Tabela de referência: férias de 30 dias por salário',
        paragraphs: [
          'A tabela mostra as férias integrais de 30 dias, sem venda de dias e sem dependentes. Como as férias são pagas como um salário mais um terço, o INSS e o IRRF pesam mais do que em um mês comum de salário.',
        ],
        table: {
          caption: 'Férias integrais de 30 dias, sem dependentes',
          columns: ['Salário', 'Total bruto', 'INSS', 'IRRF', 'Líquido'],
          rows,
        },
      },
      {
        heading: 'O que muda o resultado',
        paragraphs: [
          'Os fatores que mais mexem no valor são o número de dias gozados, a venda de até 10 dias, os dependentes (R$ 189,59 cada na base do IRRF) e as médias de horas extras, comissões e adicionais, que entram na remuneração das férias.',
          'As férias podem ser divididas em até três períodos, com concordância do empregado, e cada período é calculado separadamente. Se a empresa atrasar o pagamento, que deve sair até dois dias antes do início do descanso, há direito a reclamar.',
        ],
      },
      {
        heading: 'Erros comuns ao preencher',
        paragraphs: [
          'O erro mais comum é informar o salário líquido em vez do bruto. Outros são vender mais de 10 dias, somar dias gozados e vendidos acima de 30, esquecer o terço sobre o abono e achar que o INSS e o IRRF incidem sobre os dias vendidos.',
          'Confira também a data de início e o salário da data do pagamento. Quem recebeu reajuste ou tem parte variável deve usar a média, e o valor do holerite pode ficar um pouco acima da simulação.',
        ],
      },
    ],
    [
      {
        question: 'O resultado considera descontos?',
        answer:
          'Sim: o demonstrativo mostra INSS e IRRF sobre as férias gozadas e o líquido. No contracheque os valores se somam ao salário do mês e podem variar um pouco.',
      },
      {
        question: 'Posso vender todos os dias de férias?',
        answer:
          'Não. O abono pecuniário permite vender no máximo 10 dias, ou um terço do período, e o empregado precisa pedir até 15 dias antes do fim do período aquisitivo.',
      },
      {
        question: 'O terço de férias também é pago sobre os dias vendidos?',
        answer:
          'Sim. O terço constitucional incide sobre os dias gozados e sobre o abono, que não tem INSS nem Imposto de Renda.',
      },
      {
        question: 'Quando as férias devem ser pagas?',
        answer:
          'Até dois dias antes do início do descanso. Se o prazo para conceder as férias vencer, elas devem ser pagas em dobro.',
      },
      {
        question: 'Dá para dividir as férias em períodos?',
        answer:
          'Sim, em até três períodos, com concordância do empregado. Um deles precisa ter pelo menos 14 dias corridos e os outros, pelo menos 5 dias cada.',
      },
    ],
  );
}

// Salário líquido
{
  const ex = calculateNetSalary({ salary: 5500, dependents: 1 });
  const rows = [1621, 2500, 3500, 5000, 6500, 8000, 10000, 15000].map((s) => {
    const r = calculateNetSalary({ salary: s });
    return [
      brl(s),
      brl(r.inss),
      brl(r.irrf),
      brl(r.net),
      pct((r.net / s) * 100),
    ];
  });
  patch(
    'salario-liquido.ts',
    [
      {
        heading: 'Como o salário líquido é calculado',
        paragraphs: [
          'O INSS é cobrado por faixas: cada parte do salário paga a alíquota da sua faixa, de 7,5% a 14%, e não o salário inteiro pela maior alíquota. O IRRF vem depois, sobre o salário já reduzido pelo INSS, pelos dependentes e pela pensão alimentícia.',
          'Em 2026, quem ganha até R$ 5.000 por mês fica isento do IRRF, e há um desconto gradual até R$ 7.350. A simulação aplica essas regras e não substitui o holerite do empregador.',
        ],
      },
      {
        heading: 'Exemplo prático',
        paragraphs: [
          `Com salário bruto de R$ 5.500,00 e um dependente, o INSS é de ${brl(ex.inss)}. A base do IRRF é de ${brl(ex.irrfBase)}, já descontados o INSS e R$ 189,59 do dependente, e o IRRF fica em ${brl(ex.irrf)}.`,
          `O salário líquido estimado é de ${brl(ex.net)}. Se houver vale-transporte, plano de saúde ou pensão alimentícia, esses descontos saem do líquido, e a pensão ainda reduz o IRRF.`,
        ],
        table: {
          caption: 'Salário bruto de R$ 5.500 e um dependente',
          columns: ['Item', 'Valor'],
          rows: [
            ['Salário bruto', brl(5500)],
            ['INSS', brl(ex.inss)],
            ['Base do IRRF', brl(ex.irrfBase)],
            ['IRRF', brl(ex.irrf)],
            ['Salário líquido', brl(ex.net)],
          ],
        },
      },
      {
        heading: 'Tabela de referência: líquido por faixa de salário',
        paragraphs: [
          'A tabela mostra o líquido de quem não tem dependentes, pensão nem outros descontos. A última coluna mostra quanto do salário bruto chega à conta: ela cai conforme o salário sobe, porque o IRRF cresce, e o INSS deixa de crescer no teto.',
        ],
        table: {
          caption:
            'Salário líquido em 2026, sem dependentes e sem outros descontos',
          columns: [
            'Salário bruto',
            'INSS',
            'IRRF',
            'Líquido',
            'Líquido sobre o bruto',
          ],
          rows,
        },
      },
      {
        heading: 'O que muda o resultado',
        paragraphs: [
          'Dependentes reduzem o IRRF, e a pensão alimentícia paga por decisão judicial também. Horas extras, comissões e adicionais habituais entram na base do INSS e do IRRF no mês em que são pagos. Benefícios como vale-transporte e plano de saúde entram como outros descontos, quando o empregado os paga em parte.',
          'O 13º salário e as férias têm cálculo próprio, separado do salário mensal. Use as calculadoras de 13º e de férias para essas verbas.',
        ],
      },
      {
        heading: 'Erros comuns ao preencher',
        paragraphs: [
          'O erro mais comum é informar um salário que já é líquido, o que subestima o bruto. Outros são esquecer dependentes, somar descontos que não aparecem no holerite e incluir benefícios pagos integralmente pela empresa, que não saem do salário.',
          'Compare o resultado com o holerite e, se houver diferença de mais de alguns reais, peça ao RH a memória de cálculo do INSS e do IRRF.',
        ],
      },
    ],
    [
      {
        question: 'Este resultado substitui o holerite?',
        answer:
          'Não. A simulação é uma estimativa e o holerite emitido pelo empregador informa os valores oficiais.',
      },
      {
        question: 'Quem ganha até R$ 5.000 paga Imposto de Renda?',
        answer:
          'Não. Pela Lei 15.270/2025, a redução do imposto zera o IRRF para rendimentos tributáveis até R$ 5.000 por mês, e ela diminui aos poucos até R$ 7.350.',
      },
      {
        question: 'Por que o INSS não é uma porcentagem única sobre o salário?',
        answer:
          'Porque é progressivo: cada faixa do salário paga a sua alíquota, de 7,5% a 14%. A alíquota efetiva fica sempre abaixo da alíquota da última faixa.',
      },
      {
        question: 'Dependente muda o salário líquido?',
        answer:
          'Sim. Cada dependente reduz R$ 189,59 da base do IRRF, o que diminui o imposto para quem está acima da faixa de isenção.',
      },
      {
        question: 'A pensão alimentícia entra no cálculo?',
        answer:
          'Sim. Quando paga por decisão judicial ou acordo homologado e descontada em folha, ela reduz a base do IRRF e sai do líquido.',
      },
    ],
  );
}

// Juros compostos
{
  const f = (m: number, r: number, v = 1000) => v * (1 + r / 100) ** m;
  const rows = [12, 24, 60, 120, 240].map((m) => [
    `${m} meses`,
    brl(f(m, 0.8)),
    brl(f(m, 1)),
    brl(f(m, 1.2)),
  ]);
  const aporte = 500;
  const aporteRows = [60, 120, 240].map((m) => {
    const r = 0.8 / 100;
    const montante = aporte * (((1 + r) ** m - 1) / r);
    return [
      `${m} meses`,
      brl(aporte * m),
      brl(montante),
      brl(montante - aporte * m),
    ];
  });
  patch(
    'juros-compostos.ts',
    [
      {
        heading: 'Como funcionam os juros compostos',
        paragraphs: [
          'Nos juros compostos, cada período considera o valor acumulado anteriormente: o juro de hoje rende juros amanhã. Por isso o crescimento não é linear, e o ganho de cada mês é maior que o do mês anterior.',
          'Mantenha a taxa e o período na mesma unidade: taxa mensal com prazo em meses, taxa anual com prazo em anos. O resultado é uma projeção bruta e não considera impostos, aportes ou oscilações.',
        ],
      },
      {
        heading: 'Exemplo prático',
        paragraphs: [
          `Ao informar R$ 1.000,00, taxa de 1% ao mês e prazo de 12 meses, o montante é de ${brl(f(12, 1))}, ou seja, ${brl(f(12, 1) - 1000)} de juros. Em juros simples, o mesmo prazo renderia R$ 120,00. A diferença de ${brl(f(12, 1) - 1120)} vem dos juros sobre juros.`,
          `Com 120 meses (10 anos), o mesmo valor chega a ${brl(f(120, 1))}, mais de 3 vezes o valor inicial. É o tempo que faz a diferença: o mesmo valor com o dobro do prazo rende bem mais que o dobro.`,
        ],
        table: {
          caption: 'R$ 1.000 a 1% ao mês',
          columns: [
            'Prazo',
            'Montante em juros compostos',
            'Montante em juros simples',
          ],
          rows: [12, 24, 60, 120].map((m) => [
            `${m} meses`,
            brl(f(m, 1)),
            brl(1000 * (1 + 0.01 * m)),
          ]),
        },
      },
      {
        heading: 'Tabela de referência: R$ 1.000 em três taxas mensais',
        paragraphs: [
          'A tabela mostra o montante de R$ 1.000,00 em taxas de 0,8%, 1% e 1,2% ao mês. Uma diferença de 0,2 ponto na taxa parece pequena, mas em 20 anos ela muda o resultado de forma enorme.',
        ],
        table: {
          caption: 'Montante bruto de R$ 1.000, sem aportes',
          columns: ['Prazo', '0,8% ao mês', '1% ao mês', '1,2% ao mês'],
          rows,
        },
      },
      {
        heading: 'Aportes mensais fazem mais que o valor inicial',
        paragraphs: [
          'A calculadora considera um valor único. Quem investe todo mês cresce muito mais: a tabela mostra aportes de R$ 500,00 por mês a 0,8% ao mês, o que equivale a cerca de 10% ao ano.',
          `Os juros passam a ser a maior parte do total no longo prazo. Na linha de 240 meses, os juros ganhos chegam a ${n2((aporte * (((1 + 0.008) ** 240 - 1) / 0.008) - aporte * 240) / (aporte * 240))} vez o total aportado.`,
        ],
        table: {
          caption: 'Aportes de R$ 500 por mês a 0,8% ao mês',
          columns: ['Prazo', 'Total aportado', 'Montante', 'Juros ganhos'],
          rows: aporteRows,
        },
      },
      {
        heading: 'Erros comuns ao preencher',
        paragraphs: [
          'O erro mais comum é misturar unidades, como taxa anual com prazo em meses, o que gera um resultado muito maior ou menor que o real. Outro é usar a taxa bruta de um investimento sem descontar o Imposto de Renda e a inflação, o que superestima o ganho.',
          'Para converter uma taxa anual em mensal equivalente, use a calculadora de conversão de taxa, e não a divisão por 12, que dá um valor errado nos juros compostos.',
        ],
      },
    ],
    [
      {
        question: 'O resultado considera impostos?',
        answer:
          'Não. A projeção mostra o crescimento bruto; impostos e custos podem reduzir o rendimento líquido.',
      },
      {
        question: 'A taxa deve usar o mesmo período do prazo?',
        answer:
          'Sim. Em um cálculo real, taxa e prazo precisam usar unidades compatíveis: taxa mensal com prazo em meses.',
      },
      {
        question:
          'Na prática, o que diferencia juros compostos de juros simples?',
        answer:
          'Nos juros simples, o juro incide só sobre o valor inicial. Nos compostos, incide também sobre os juros já acumulados, o que faz o valor crescer cada vez mais rápido.',
      },
      {
        question: 'Dá para converter taxa anual em mensal dividindo por 12?',
        answer:
          'Não, nos juros compostos. A taxa mensal equivalente é a raiz 12 de (1 mais a taxa anual) menos 1. Use a calculadora de conversão de taxa.',
      },
      {
        question: 'Os juros compostos valem para dívidas também?',
        answer:
          'Sim. Cartão de crédito e cheque especial cobram juros compostos, e é por isso que a dívida cresce tão depressa quando não é paga.',
      },
    ],
  );
}
console.log('calculadoras escritas à mão atualizadas');
