import { indicators as staticIndicators } from './mock-data';
import type { Indicator } from './types';

const endpoint = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs';

type Point = Readonly<{ date: string; value: number }>;

/** Séries do Banco Central (SGS), com cache de 1 hora na Vercel. */
async function series(code: number, last: number): Promise<readonly Point[]> {
  const response = await fetch(
    `${endpoint}.${code}/dados/ultimos/${last}?formato=json`,
    { next: { revalidate: 3600 }, signal: AbortSignal.timeout(6000) },
  );

  if (!response.ok) throw new Error(`SGS ${code}: ${response.status}`);

  const rows = (await response.json()) as readonly {
    data: string;
    valor: string;
  }[];
  const points = rows
    .map((row) => ({ date: row.data, value: Number(row.valor) }))
    .filter((point) => Number.isFinite(point.value));

  if (points.length === 0) throw new Error(`SGS ${code}: sem dados`);

  return points;
}

const decimal = (value: number, digits = 2) =>
  new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

const signed = (value: number, suffix: string) =>
  `${value > 0 ? '+' : value < 0 ? '−' : ''}${decimal(Math.abs(value))}${suffix}`;

const trendOf = (value: number): Indicator['trend'] =>
  Math.abs(value) < 0.005 ? 'neutral' : value > 0 ? 'up' : 'down';

const shortDate = (date: string) => date.slice(0, 5);

function currency(label: string, points: readonly Point[]): Indicator {
  const latest = points[points.length - 1] as Point;
  const previous = points[points.length - 2] ?? latest;
  const change = ((latest.value - previous.value) / previous.value) * 100;

  return {
    label,
    value: `R$ ${decimal(latest.value)}`,
    change: signed(change, '%'),
    trend: trendOf(change),
    note: `PTAX de venda em ${latest.date} · Banco Central`,
  };
}

async function live(): Promise<Record<string, Indicator>> {
  const [selic, cdi, ipca, igpm, usd, eur] = await Promise.allSettled([
    series(432, 400),
    series(4389, 2),
    series(13522, 2),
    series(189, 12),
    series(1, 3),
    series(21619, 3),
  ]);
  const found: Record<string, Indicator> = {};
  const fallback = (label: string) =>
    staticIndicators.find((item) => item.label === label);

  if (selic.status === 'fulfilled') {
    const points = selic.value;
    const latest = points[points.length - 1] as Point;
    const earlier = [...points]
      .reverse()
      .find((point) => point.value !== latest.value);
    const delta = earlier ? latest.value - earlier.value : 0;

    found['Selic (meta)'] = {
      label: 'Selic (meta)',
      value: `${decimal(latest.value)}% a.a.`,
      change: delta === 0 ? 'estável' : signed(delta, ' p.p.'),
      trend: trendOf(delta),
      note: `Em ${latest.date} · Banco Central`,
      href: fallback('Selic (meta)')?.href,
    };
  }

  if (cdi.status === 'fulfilled') {
    const latest = cdi.value[cdi.value.length - 1] as Point;

    found.CDI = {
      label: 'CDI',
      value: `${decimal(latest.value)}% a.a.`,
      change: shortDate(latest.date),
      trend: 'neutral',
      note: `Em ${latest.date} · Banco Central`,
      href: fallback('CDI')?.href,
    };
  }

  if (ipca.status === 'fulfilled') {
    const latest = ipca.value[ipca.value.length - 1] as Point;
    const previous = ipca.value[ipca.value.length - 2] ?? latest;
    const delta = latest.value - previous.value;

    found['IPCA em 12 meses'] = {
      label: 'IPCA em 12 meses',
      value: `${decimal(latest.value)}%`,
      change: delta === 0 ? 'estável' : `era ${decimal(previous.value)}%`,
      trend: trendOf(delta),
      note: `Mês de referência ${latest.date.slice(3)} · IBGE`,
      href: fallback('IPCA em 12 meses')?.href,
    };
  }

  if (igpm.status === 'fulfilled' && igpm.value.length === 12) {
    const accumulated =
      (igpm.value.reduce((total, point) => total * (1 + point.value / 100), 1) -
        1) *
      100;
    const latest = igpm.value[igpm.value.length - 1] as Point;

    found['IGP-M em 12 meses'] = {
      label: 'IGP-M em 12 meses',
      value: `${decimal(accumulated)}%`,
      change: `${signed(latest.value, '%')} no mês`,
      trend: trendOf(latest.value),
      note: `Mês de referência ${latest.date.slice(3)} · FGV`,
      href: fallback('IGP-M em 12 meses')?.href,
    };
  }

  if (usd.status === 'fulfilled') {
    found['Dólar comercial'] = currency('Dólar comercial', usd.value);
  }

  if (eur.status === 'fulfilled') {
    found.Euro = currency('Euro', eur.value);
  }

  return found;
}

/** Indicadores da faixa da home: tempo real do Banco Central, com o texto estático como reserva. */
export async function getMarketIndicators(): Promise<readonly Indicator[]> {
  let found: Record<string, Indicator> = {};

  try {
    found = await live();
  } catch {
    found = {};
  }

  return staticIndicators.map((item) => found[item.label] ?? item);
}
