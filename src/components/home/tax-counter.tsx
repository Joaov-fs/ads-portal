'use client';

import { useEffect, useState } from 'react';

import {
  baseCollected,
  estimateCollected,
  formatBrl,
} from '@/features/impostometro/estimate';

type TaxCounterProps = Readonly<{ className?: string }>;

/** Contador que sobe em tempo real. O servidor entrega o valor oficial de agosto; o navegador passa a estimar o total de hoje. */
export function TaxCounter({ className }: TaxCounterProps) {
  const [value, setValue] = useState(baseCollected);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const tick = () => setValue(estimateCollected(Date.now()));

    tick();

    if (reduced) return;

    const timer = window.setInterval(tick, 100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span
      aria-label="Estimativa de arrecadação federal em 2026"
      className={className}
    >
      {formatBrl(value)}
    </span>
  );
}
