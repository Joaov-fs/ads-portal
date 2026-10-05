'use client';

import Link from 'next/link';
import { useId, useState } from 'react';

import { calculateNetSalary } from '@/calculators/rules';

const money = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
});
const percent = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 });

const minimumSalary = 1621;
const maximumSalary = 20000;

/**
 * Mini calculadora da home: instrutiva, guia o visitante passo a passo.
 * Cada bloco interno entra com animação staggered para criar movimento.
 */
export function HeroCalculator() {
  const inputId = useId();
  const [salary, setSalary] = useState(4500);
  const safeSalary = Number.isFinite(salary) ? Math.max(0, salary) : 0;
  const result = calculateNetSalary({ salary: safeSalary, dependents: 0 });
  const total = Math.max(1, result.gross);
  const share = (amount: number) => `${(amount / total) * 100}%`;

  return (
    <div className="calc-body relative overflow-hidden rounded-ads-xlarge bg-white p-6 text-ads-text shadow-[0_25px_60px_rgb(0_0_0/25%)] sm:p-8">
      {/* Faixa superior verde */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-ads-primary via-emerald-300 to-ads-primary" />

      <div className="grid gap-5">
        {/* Passo 1: Contexto: o que é isso */}
        <div className="calc-step-1 grid gap-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
              <svg
                aria-hidden="true"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect height="16" rx="2" width="16" x="4" y="4" />
                <path d="M4 10h16" />
                <path d="M10 4v16" />
              </svg>
              Calculadora
            </span>
            <span className="rounded-ads-full bg-ads-primary-soft px-2.5 py-0.5 text-[0.6rem] font-bold text-ads-primary-strong">
              Tabelas 2026
            </span>
          </div>
          <h3 className="font-ads-display text-xl font-extrabold tracking-tight text-ads-secondary sm:text-2xl">
            Quanto sobra do seu salário?
          </h3>
          <p className="text-sm leading-relaxed text-ads-muted">
            Digite o valor bruto e veja na hora o líquido, o INSS e o IR.
          </p>
        </div>

        {/* Passo 2: Input: o que digitar */}
        <div className="calc-step-2 grid gap-2">
          <label
            className="text-sm font-semibold text-ads-secondary"
            htmlFor={inputId}
          >
            Seu salário bruto mensal
          </label>
          <div className="flex items-center gap-2 rounded-ads-large border-2 border-ads-border-strong bg-ads-background px-4 transition-colors focus-within:border-ads-primary focus-within:ring-4 focus-within:ring-ads-primary-ring">
            <span className="text-lg font-semibold text-ads-muted">R$</span>
            <input
              className="min-h-14 w-full bg-transparent text-2xl font-bold tabular-nums text-ads-secondary outline-none"
              id={inputId}
              inputMode="decimal"
              max={maximumSalary * 10}
              min={0}
              onChange={(event) => setSalary(Number(event.target.value))}
              step={50}
              type="number"
              value={Number.isFinite(salary) ? salary : ''}
            />
          </div>
          <input
            aria-label="Ajustar salário bruto"
            className="home-range"
            max={maximumSalary}
            min={minimumSalary}
            onChange={(event) => setSalary(Number(event.target.value))}
            step={50}
            type="range"
            value={Math.min(maximumSalary, Math.max(minimumSalary, safeSalary))}
          />
        </div>

        {/* Passo 3: Resultado: tela de resposta */}
        <div className="calc-step-3 grid gap-4 rounded-ads-large bg-ads-secondary p-5 text-white">
          <div className="flex items-end justify-between gap-3">
            <div className="grid gap-1">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                Cai na sua conta
              </span>
              <strong
                aria-live="polite"
                className="font-ads-display text-4xl font-extrabold tabular-nums tracking-tight sm:text-5xl"
              >
                {money.format(result.net)}
              </strong>
            </div>
            <span className="pb-1 text-right text-xs text-white/70">
              {percent.format((result.net / total) * 100)}% do bruto
            </span>
          </div>

          {/* Barra visual */}
          <div
            aria-hidden="true"
            className="flex h-3 overflow-hidden rounded-ads-full bg-white/10"
          >
            <div
              className="bg-emerald-300 transition-[width] duration-500 ease-out"
              style={{ width: share(result.net) }}
            />
            <div
              className="bg-amber-300 transition-[width] duration-500 ease-out"
              style={{ width: share(result.inss) }}
            />
            <div
              className="bg-rose-300 transition-[width] duration-500 ease-out"
              style={{ width: share(result.irrf) }}
            />
          </div>

          {/* Legenda */}
          <dl className="grid grid-cols-3 gap-3 text-xs">
            <div className="grid gap-0.5">
              <dt className="flex items-center gap-1.5 text-white/70">
                <span className="size-2 rounded-full bg-emerald-300" />
                Líquido
              </dt>
              <dd className="font-bold tabular-nums">
                {money.format(result.net)}
              </dd>
            </div>
            <div className="grid gap-0.5">
              <dt className="flex items-center gap-1.5 text-white/70">
                <span className="size-2 rounded-full bg-amber-300" />
                INSS
              </dt>
              <dd className="font-bold tabular-nums">
                {money.format(result.inss)}
              </dd>
            </div>
            <div className="grid gap-0.5">
              <dt className="flex items-center gap-1.5 text-white/70">
                <span className="size-2 rounded-full bg-rose-300" />
                IRRF
              </dt>
              <dd className="font-bold tabular-nums">
                {money.format(result.irrf)}
              </dd>
            </div>
          </dl>
        </div>

        {/* Passo 4: CTA */}
        <div className="calc-step-4 grid gap-2">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-ads-medium bg-ads-primary px-5 text-sm font-bold text-white transition hover:bg-ads-primary-strong hover:shadow-ads-soft"
            href="/calculadoras/salario-liquido"
          >
            Ver o holerite completo, com dependentes e pensão
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
          <p className="text-center text-xs leading-5 text-ads-muted">
            Sem dependentes nem outros descontos · Regras de 2026
          </p>
        </div>
      </div>
    </div>
  );
}
