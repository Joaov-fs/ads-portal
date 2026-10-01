'use client';

import { useState, type FormEvent } from 'react';

import { buildCalculatorDecision } from '@/calculators/decision';
import {
  calculateCalculator,
  formatCalculatorResult,
} from '@/calculators/rules';
import type {
  CalculatorDecision,
  CalculationResult,
} from '@/calculators/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/field';
import type { CalculatorDocument } from '@/content';

import { CalculatorDecisionOutput } from './calculator-decision-output';

const resultDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

const positiveDivisorFields: Readonly<
  Partial<Record<CalculatorDocument['calculatorId'], readonly string[]>>
> = {
  'adicional-noturno': ['monthlyHours'],
  bpc: ['people'],
  dsr: ['workDays'],
  emprestimo: ['months'],
  'fator-r': ['amount'],
  'financiamento-sac-price': ['months'],
  'horas-extras': ['monthlyHours'],
  'salario-por-hora': ['monthlyHours'],
};

function formatInputValue(
  value: number,
  type: CalculatorDocument['fields'][number]['type'],
) {
  if (type === 'money') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)}${type === 'percentage' ? '%' : ''}`;
}

function fieldHint(field: CalculatorDocument['fields'][number]): string {
  if (field.hint) return field.hint;

  if (field.type === 'money') {
    return `Use o valor de ${field.label.toLocaleLowerCase('pt-BR')} conforme aparece no documento ou proposta.`;
  }

  if (field.type === 'percentage') {
    return 'Informe apenas o percentual, sem fazer a conta antes.';
  }

  return `Informe a quantidade de ${field.label.toLocaleLowerCase('pt-BR')} usada no seu caso.`;
}

type CalculatorPanelProps = Readonly<{
  document: CalculatorDocument;
}>;

export function CalculatorPanel({ document }: CalculatorPanelProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [calculation, setCalculation] = useState<CalculationResult | null>(
    null,
  );
  const [decision, setDecision] = useState<CalculatorDecision | null>(null);
  const [submittedValues, setSubmittedValues] = useState<
    Record<string, number>
  >({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    const numericValues: Record<string, number> = {};

    for (const field of document.fields) {
      const rawValue = values[field.name]?.trim() ?? '';
      const normalizedValue = rawValue.includes(',')
        ? rawValue.replace(/\./g, '').replace(',', '.')
        : rawValue;
      const parsedValue = Number(normalizedValue);
      const requiresPositiveValue = positiveDivisorFields[
        document.calculatorId
      ]?.includes(field.name);

      if (
        !rawValue ||
        !Number.isFinite(parsedValue) ||
        parsedValue < 0 ||
        (requiresPositiveValue && parsedValue === 0)
      ) {
        nextErrors[field.name] =
          requiresPositiveValue && parsedValue === 0
            ? 'Informe um valor maior que zero.'
            : 'Informe um valor válido igual ou maior que zero.';
      } else {
        numericValues[field.name] = parsedValue;
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setCalculation(null);
      setDecision(null);
      setSubmittedValues({});
      return;
    }

    const nextCalculation = calculateCalculator(
      document.calculatorId,
      numericValues,
    );
    setSubmittedValues(numericValues);
    setCalculation(nextCalculation);
    setDecision(
      buildCalculatorDecision(
        document.calculatorId,
        numericValues,
        nextCalculation,
      ),
    );
  }

  return (
    <Card
      className="grid gap-8 overflow-hidden border-ads-border-strong p-5 shadow-ads-soft sm:p-8"
      id="simulador"
    >
      <div className="grid gap-3 border-b border-ads-border pb-6">
        <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
          Calculadora passo a passo
        </span>
        <h2 className="font-ads-display text-3xl font-bold text-ads-secondary sm:text-4xl">
          Faça sua simulação
        </h2>
        <p className="leading-7 text-ads-muted">
          Preencha os campos com os valores do seu caso. Todos são obrigatórios
          e você poderá refazer a conta quantas vezes precisar.
        </p>
      </div>

      <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
        <fieldset className="grid gap-5">
          <legend className="sr-only">Dados da simulação</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            {document.fields.map((field) => (
              <Input
                error={errors[field.name]}
                hint={fieldHint(field)}
                key={field.name}
                kind={field.type}
                label={field.label}
                min={
                  positiveDivisorFields[document.calculatorId]?.includes(
                    field.name,
                  )
                    ? 0.01
                    : 0
                }
                name={field.name}
                onChange={(event) => {
                  setValues((current) => ({
                    ...current,
                    [field.name]: event.target.value,
                  }));
                }}
                placeholder={field.placeholder}
                required
                value={values[field.name] ?? ''}
              />
            ))}
          </div>
        </fieldset>
        <Button
          className="w-full shadow-ads-subtle sm:w-fit sm:min-w-52"
          size="large"
          type="submit"
        >
          Calcular resultado
        </Button>
      </form>

      <div
        aria-live="polite"
        className={`relative overflow-hidden rounded-ads-xlarge border p-5 sm:p-7 ${calculation ? 'border-ads-primary/30 bg-ads-primary-soft' : 'border-dashed border-ads-border-strong bg-ads-background'}`}
      >
        {calculation ? (
          <>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Resumo executivo
            </span>
            <p className="mt-3 max-w-2xl leading-7 text-ads-text">
              Com base nos dados informados, este é o principal valor estimado
              para o seu cenário:
            </p>
            <strong className="mt-5 block text-sm text-ads-secondary">
              {calculation.label}
            </strong>
            <output className="mt-1 block font-ads-display text-4xl font-bold tracking-tight text-ads-secondary sm:text-5xl">
              {formatCalculatorResult(document.calculatorId, calculation.value)}
            </output>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-ads-muted">
              {decision?.summary}
            </p>
          </>
        ) : (
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-ads-full bg-ads-secondary-soft text-ads-secondary"
            >
              ↳
            </span>
            <div>
              <strong className="block text-sm text-ads-secondary">
                Seu resultado aparecerá aqui
              </strong>
              <p className="mt-1 text-sm leading-6 text-ads-muted">
                {document.resultPlaceholder} A explicação completa será exibida
                logo abaixo.
              </p>
            </div>
          </div>
        )}
      </div>

      {calculation ? (
        <div className="grid gap-10 border-t border-ads-border pt-8">
          <section
            className="grid gap-4"
            aria-labelledby="calculation-explanation-title"
          >
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Como chegamos ao resultado
            </span>
            <h3
              className="text-xl font-bold text-ads-secondary"
              id="calculation-explanation-title"
            >
              Explicação passo a passo
            </h3>
            <p className="leading-7 text-ads-muted">
              Primeiro, usamos exatamente os valores que você informou. Depois,
              aplicamos a regra desta calculadora: {calculation.explanation} Por
              fim, apresentamos o total com arredondamento de duas casas
              decimais quando necessário.
            </p>
          </section>

          <section
            className="grid gap-4"
            aria-labelledby="calculation-memory-title"
          >
            <h3
              className="text-xl font-bold text-ads-secondary"
              id="calculation-memory-title"
            >
              Memória de cálculo
            </h3>
            <ol className="grid gap-3">
              {document.fields.map((field, index) => (
                <li
                  className="flex gap-3 rounded-ads-large border border-ads-border bg-ads-surface p-4"
                  key={field.name}
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-ads-full bg-ads-primary-soft text-xs font-bold text-ads-primary-strong">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-ads-muted">
                    <strong className="block text-ads-text">
                      {field.label}
                    </strong>
                    {formatInputValue(
                      submittedValues[field.name] ?? 0,
                      field.type,
                    )}
                  </span>
                </li>
              ))}
              <li className="flex gap-3 rounded-ads-large border border-ads-primary/25 bg-ads-primary-soft p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-ads-full bg-ads-primary text-xs font-bold text-white">
                  {document.fields.length + 1}
                </span>
                <span className="text-sm leading-6 text-ads-muted">
                  <strong className="block text-ads-secondary">
                    Aplicação da regra
                  </strong>
                  {calculation.explanation}
                </span>
              </li>
            </ol>
          </section>

          {decision ? <CalculatorDecisionOutput decision={decision} /> : null}

          <section className="grid gap-3" aria-labelledby="rules-sources-title">
            <h3
              className="text-xl font-bold text-ads-secondary"
              id="rules-sources-title"
            >
              Legislação e referências aplicáveis
            </h3>
            <p className="text-sm leading-6 text-ads-muted">
              A metodologia considera as referências listadas nesta página. No
              seu caso, confirme datas, limites e regras diretamente em{' '}
              {document.sources.map((source) => source.label).join('; ')}.
            </p>
          </section>

          <p className="text-xs text-ads-muted">
            Metodologia revisada editorialmente em{' '}
            {resultDateFormatter.format(
              new Date(`${document.updatedAt}T00:00:00Z`),
            )}
            .
          </p>
        </div>
      ) : null}
    </Card>
  );
}
