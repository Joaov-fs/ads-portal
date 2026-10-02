'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Step = Readonly<{
  panel: ReactNode;
  text: string;
  title: string;
}>;

/**
 * Explica o método rolando a página: o passo no centro da tela acende e o
 * painel fixo ao lado troca de conteúdo. No celular, cada passo traz o seu painel.
 */
export function ScrollStory({ steps }: Readonly<{ steps: readonly Step[] }>) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute('data-step')));
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );

    for (const element of refs.current) {
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <ol className="grid gap-6 md:gap-0">
        {steps.map((step, index) => (
          <li
            className="grid content-center gap-4 md:min-h-[58vh]"
            data-step={index}
            key={step.title}
            ref={(element) => {
              refs.current[index] = element;
            }}
          >
            <div
              className={`grid gap-3 transition-opacity duration-500 ${
                active === index ? 'md:opacity-100' : 'md:opacity-35'
              }`}
            >
              <span className="grid size-10 place-items-center rounded-ads-full bg-ads-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="font-ads-display text-2xl font-extrabold tracking-tight text-ads-secondary sm:text-3xl">
                {step.title}
              </h3>
              <p className="max-w-md leading-7 text-ads-muted">{step.text}</p>
            </div>
            <div className="md:hidden">{step.panel}</div>
          </li>
        ))}
      </ol>
      <div className="relative hidden md:block">
        <div className="sticky top-28 grid min-h-[22rem] place-items-center">
          {steps.map((step, index) => (
            <div
              aria-hidden={active !== index}
              className={`col-start-1 row-start-1 w-full transition-all duration-500 ${
                active === index
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-4 opacity-0'
              }`}
              key={step.title}
            >
              {step.panel}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
