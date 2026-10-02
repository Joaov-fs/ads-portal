import { editorialFinancas } from './financas';
import { editorialNegocios } from './negocios';
import { editorialTrabalho1 } from './trabalho-1';
import { editorialTrabalho2 } from './trabalho-2';
import type { CalculatorEditorialMap } from './types';

export const calculatorEditorial: CalculatorEditorialMap = {
  ...editorialFinancas,
  ...editorialNegocios,
  ...editorialTrabalho1,
  ...editorialTrabalho2,
};
