'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'zoom-in';

type RevealProps = Readonly<{
  children: ReactNode;
  className?: string;
  /** Atraso da animação em milissegundos, para escalonar itens de uma lista. */
  delay?: number;
  /** Direção / estilo da animação de entrada. */
  variant?: RevealVariant;
}>;

/**
 * Revela o conteúdo ao rolar a página. O HTML do servidor já nasce visível:
 * só o que está abaixo da dobra é escondido no navegador, então sem JavaScript
 * ou com "reduzir movimento" nada some.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'hidden' | 'shown' | undefined>();

  useEffect(() => {
    const element = ref.current;

    if (
      !element ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
      return;
    }

    setState('hidden');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState('shown');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`reveal ${className}`}
      data-state={state}
      data-variant={variant}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
