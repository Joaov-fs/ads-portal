'use client';

import { useState, type FormEvent } from 'react';

import { buildCalculatorDecision } from '@/calculators/decision';
import { daysToDate, parseFieldValue } from '@/calculators/parse';
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
  'bolsa-familia': ['people'],
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
  if (type === 'date') {
    return resultDateFormatter.format(daysToDate(value));
  }

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

  if (field.type === 'date') {
    return 'Escolha a data no calendário.';
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
      const parsedValue = parseFieldValue(rawValue, field.type);
      const requiresPositiveValue = positiveDivisorFields[
        document.calculatorId
      ]?.includes(field.name);

      if (
        !rawValue ||
        !Number.isFinite(parsedValue) ||
        (field.type !== 'date' && parsedValue < 0) ||
        (requiresPositiveValue && parsedValue === 0)
      ) {
        nextErrors[field.name] = !rawValue
          ? field.type === 'date'
            ? 'Escolha uma data.'
            : 'Preencha este campo. Se não se aplica ao seu caso, informe 0.'
          : requiresPositiveValue && parsedValue === 0
            ? 'Informe um valor maior que zero.'
            : field.type === 'date'
              ? 'Informe uma data válida.'
              : 'Informe um número válido, igual ou maior que zero.';
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
          Calculadora
        </span>
        <h2 className="font-ads-display text-3xl font-bold text-ads-secondary sm:text-4xl">
          Faça sua simulação
        </h2>
        <p className="leading-7 text-ads-muted">
          Preencha todos os campos com os valores do seu caso. Quando algo não
          se aplicar, informe 0.
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
                  field.type === 'date'
                    ? undefined
                    : positiveDivisorFields[document.calculatorId]?.includes(
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
            <strong className="block text-sm text-ads-secondary">
              {calculation.label}
            </strong>
            <output className="mt-1 block font-ads-display text-4xl font-bold tracking-tight text-ads-secondary sm:text-5xl">
              {formatCalculatorResult(document.calculatorId, calculation.value)}
            </output>
            {decision?.summary ? (
              <p className="mt-4 max-w-2xl text-sm leading-6 text-ads-muted">
                {decision.summary}
              </p>
            ) : null}
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
                {document.resultPlaceholder}
              </p>
            </div>
          </div>
        )}
      </div>

      {calculation ? (
        <div className="grid gap-8">
          {decision ? <CalculatorDecisionOutput decision={decision} /> : null}

          <section
            className="grid gap-4 border-t border-ads-border pt-8"
            aria-labelledby="calculation-explanation-title"
          >
            <h3
              className="text-xl font-bold text-ads-secondary"
              id="calculation-explanation-title"
            >
              Como calculamos
            </h3>
            <p className="leading-7 text-ads-muted">
              {calculation.explanation}
            </p>
            <dl className="grid gap-px overflow-hidden rounded-ads-large border border-ads-border bg-ads-border text-sm sm:grid-cols-2">
              {document.fields.map((field) => (
                <div
                  className="flex items-baseline justify-between gap-4 bg-ads-surface px-4 py-3"
                  key={field.name}
                >
                  <dt className="text-ads-muted">{field.label}</dt>
                  <dd className="text-right font-semibold text-ads-text">
                    {formatInputValue(
                      submittedValues[field.name] ?? 0,
                      field.type,
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="text-xs text-ads-muted">
            Metodologia revisada em{' '}
            {resultDateFormatter.format(
              new Date(`${document.updatedAt}T00:00:00Z`),
            )}
            . Fontes oficiais completas ao final da página.
          </p>
        </div>
      ) : null}
    </Card>
  );
}
