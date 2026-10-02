import { feriasCalculator } from './calculators/ferias';
import { jurosCompostosCalculator } from './calculators/juros-compostos';
import { mvpCalculatorCatalog } from './calculators/mvp-catalog';
import { salarioLiquidoCalculator } from './calculators/salario-liquido';
import { guideFiles } from './guides';
import { newsFiles } from './news';

import type { ContentDocument } from '../types';

export const contentFiles = [
  ...newsFiles,
  ...guideFiles,
  jurosCompostosCalculator,
  salarioLiquidoCalculator,
  feriasCalculator,
  ...mvpCalculatorCatalog,
] as const satisfies readonly ContentDocument[];
