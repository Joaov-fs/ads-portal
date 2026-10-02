'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = Readonly<{
  className?: string;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  value: number;
}>;

/** Número que sobe até o valor final quando entra na tela. O servidor já entrega o valor final. */
export function CountUp({
  className,
  decimals = 0,
  duration = 1100,
  prefix = '',
  suffix = '',
  value,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const element = ref.current;

    if (
      !element ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - progress) ** 3;
          setCurrent(value * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        setCurrent(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  const formatted = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(current);

  return (
    <span className={className} ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
