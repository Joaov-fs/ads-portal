/** Tabelas do Simples Nacional (LC 123/2006, anexos I a V). Alíquota nominal e parcela a deduzir por faixa. */
export const simplesBracketLimits = [
  180000, 360000, 720000, 1800000, 3600000, 4800000,
] as const;

export const simplesAnnexes = {
  1: {
    name: 'Anexo I — Comércio',
    brackets: [
      [4, 0],
      [7.3, 5940],
      [9.5, 13860],
      [10.7, 22500],
      [14.3, 87300],
      [19, 378000],
    ],
  },
  2: {
    name: 'Anexo II — Indústria',
    brackets: [
      [4.5, 0],
      [7.8, 5940],
      [10, 13860],
      [11.2, 22500],
      [14.7, 85500],
      [30, 720000],
    ],
  },
  3: {
    name: 'Anexo III — Serviços',
    brackets: [
      [6, 0],
      [11.2, 9360],
      [13.5, 17640],
      [16, 35640],
      [21, 125640],
      [33, 648000],
    ],
  },
  4: {
    name: 'Anexo IV — Serviços (construção, vigilância, limpeza e advocacia)',
    brackets: [
      [4.5, 0],
      [9, 8100],
      [10.2, 12420],
      [14, 39780],
      [22, 183780],
      [33, 828000],
    ],
  },
  5: {
    name: 'Anexo V — Serviços intelectuais',
    brackets: [
      [15.5, 0],
      [18, 4500],
      [19.5, 9900],
      [20.5, 17100],
      [23, 62100],
      [30.5, 540000],
    ],
  },
} as const;

export type SimplesResult = Readonly<{
  annexName: string;
  bracket: number;
  deduction: number;
  das: number;
  effectiveRate: number;
  nominalRate: number;
  outOfLimit: boolean;
  rbt12: number;
}>;

/** Alíquota efetiva = (RBT12 × alíquota nominal − parcela a deduzir) ÷ RBT12. */
export function simplesNacional(
  monthlyRevenue: number,
  rbt12: number,
  annexNumber: number,
): SimplesResult {
  const key = Math.min(5, Math.max(1, Math.round(annexNumber))) as
    | 1
    | 2
    | 3
    | 4
    | 5;
  const annex = simplesAnnexes[key];
  const revenue = Math.max(0, rbt12);
  const index = simplesBracketLimits.findIndex((limit) => revenue <= limit);
  const outOfLimit = index === -1;
  const bracket = outOfLimit ? simplesBracketLimits.length - 1 : index;
  const [nominalRate, deduction] = annex.brackets[bracket];
  const effectiveRate =
    revenue > 0
      ? Math.max(0, ((revenue * nominalRate) / 100 - deduction) / revenue) * 100
      : nominalRate;

  return {
    annexName: annex.name,
    bracket: bracket + 1,
    das: Math.max(0, monthlyRevenue) * (effectiveRate / 100),
    deduction,
    effectiveRate,
    nominalRate,
    outOfLimit,
    rbt12: revenue,
  };
}
