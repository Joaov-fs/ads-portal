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

/** Mini calculadora da home: visual de calculadora física com tela e teclado. */
export function HeroCalculator() {
  const inputId = useId();
  const [salary, setSalary] = useState(4500);
  const safeSalary = Number.isFinite(salary) ? Math.max(0, salary) : 0;
  const result = calculateNetSalary({ salary: safeSalary, dependents: 0 });
  const total = Math.max(1, result.gross);
  const share = (amount: number) => `${(amount / total) * 100}%`;

  return (
    <div className="calc-body relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-[#1a2e2b] to-[#0f1f1d] p-1.5 shadow-[0_20px_60px_rgb(0_0_0/50%),0_0_0_1px_rgb(110_231_183/8%)]">
      {/* Borda superior decorativa: faixa de marca */}
      <div className="flex items-center justify-between rounded-t-[1.2rem] bg-gradient-to-r from-ads-primary/20 via-emerald-300/10 to-transparent px-5 py-2.5">
        <span className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-emerald-300/70">
          <span className="grid size-5 place-items-center rounded-full border border-emerald-300/30 text-[0.5rem]">
            PF
          </span>
          PortalFina Calc
        </span>
        <span className="rounded-full bg-emerald-300/15 px-2.5 py-0.5 text-[0.6rem] font-semibold text-emerald-300/60">
          2026
        </span>
      </div>

      {/* Tela da calculadora */}
      <div className="calc-screen mx-1 mt-1 rounded-xl bg-gradient-to-b from-[#0a1614] to-[#0d1e1a] p-5 sm:p-6">
        {/* Resultado principal: tela LCD */}
        <div className="grid gap-4">
          <div className="flex items-end justify-between gap-3">
            <div className="grid gap-1">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald-400/60">
                Cai na sua conta
              </span>
              <strong
                aria-live="polite"
                className="font-ads-display text-[2.2rem] font-extrabold leading-none tabular-nums tracking-tight text-emerald-300 sm:text-[2.8rem]"
              >
                {money.format(result.net)}
              </strong>
            </div>
            <span className="pb-1 text-right text-[0.65rem] tabular-nums text-emerald-300/50">
              {percent.format((result.net / total) * 100)}%
            </span>
          </div>

          {/* Barra de proporção */}
          <div
            aria-hidden="true"
            className="flex h-2 overflow-hidden rounded-full bg-white/5"
          >
            <div
              className="bg-emerald-400 transition-[width] duration-500 ease-out"
              style={{ width: share(result.net) }}
            />
            <div
              className="bg-amber-400 transition-[width] duration-500 ease-out"
              style={{ width: share(result.inss) }}
            />
            <div
              className="bg-rose-400 transition-[width] duration-500 ease-out"
              style={{ width: share(result.irrf) }}
            />
          </div>

          {/* Descontos */}
          <dl className="grid grid-cols-3 gap-2 text-[0.65rem]">
            <div className="grid gap-0.5">
              <dt className="flex items-center gap-1 text-emerald-300/50">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Líquido
              </dt>
              <dd className="font-bold tabular-nums text-emerald-300/80">
                {money.format(result.net)}
              </dd>
            </div>
            <div className="grid gap-0.5">
              <dt className="flex items-center gap-1 text-emerald-300/50">
                <span className="size-1.5 rounded-full bg-amber-400" />
                INSS
              </dt>
              <dd className="font-bold tabular-nums text-amber-300/80">
                {money.format(result.inss)}
              </dd>
            </div>
            <div className="grid gap-0.5">
              <dt className="flex items-center gap-1 text-emerald-300/50">
                <span className="size-1.5 rounded-full bg-rose-400" />
                IRRF
              </dt>
              <dd className="font-bold tabular-nums text-rose-300/80">
                {money.format(result.irrf)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Corpo / teclado da calculadora */}
      <div className="grid gap-4 p-4 sm:p-5">
        <div className="grid gap-2">
          <label
            className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-emerald-300/50"
            htmlFor={inputId}
          >
            Salário bruto mensal
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-emerald-300/15 bg-[#0d1e1a] px-4 focus-within:border-emerald-300/40 focus-within:ring-2 focus-within:ring-emerald-300/10">
            <span className="text-sm font-semibold text-emerald-300/40">
              R$
            </span>
            <input
              className="min-h-12 w-full bg-transparent text-xl font-bold tabular-nums text-emerald-100 outline-none placeholder:text-emerald-300/20"
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

        {/* Botões que simulam teclas de calculadora */}
        <div className="grid grid-cols-3 gap-2">
          {[1621, 3000, 4500, 6000, 8000, 10000].map((val) => (
            <button
              className={`rounded-lg px-3 py-2.5 text-xs font-bold tabular-nums transition ${
                salary === val
                  ? 'bg-emerald-300 text-[#0f1f1d] shadow-[0_0_12px_rgb(110_231_183/30%)]'
                  : 'bg-white/[0.06] text-emerald-300/70 hover:bg-white/10 hover:text-emerald-200'
              }`}
              key={val}
              onClick={() => setSalary(val)}
              type="button"
            >
              {val >= 1000
                ? `${(val / 1000).toLocaleString('pt-BR')}mil`
                : val.toLocaleString('pt-BR')}
            </button>
          ))}
        </div>

        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-300 px-5 text-sm font-bold text-[#0f1f1d] shadow-[0_0_20px_rgb(110_231_183/25%)] transition hover:bg-emerald-200 hover:shadow-[0_0_30px_rgb(110_231_183/35%)]"
          href="/calculadoras/salario-liquido"
        >
          Ver holerite completo
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
        <p className="-mt-2 text-center text-[0.6rem] leading-4 text-emerald-300/35">
          Sem dependentes nem outros descontos. INSS e IRRF pelas regras de
          2026.
        </p>
      </div>
    </div>
  );
}
