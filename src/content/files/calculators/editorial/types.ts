import type { ContentFaq, ContentTable } from '../../../types';

/** Texto próprio de cada calculadora: exemplo calculado, fatores e erros comuns. */
export type CalculatorEditorial = Readonly<{
  example: Readonly<{
    paragraphs: readonly string[];
    table?: ContentTable;
  }>;
  faq: readonly ContentFaq[];
  factors: readonly string[];
  mistakes: readonly string[];
}>;

export type CalculatorEditorialMap = Readonly<
  Record<string, CalculatorEditorial>
>;
