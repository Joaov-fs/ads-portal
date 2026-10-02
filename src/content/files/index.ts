import { feriasCalculator } from './calculators/ferias';
import { jurosCompostosCalculator } from './calculators/juros-compostos';
import { mvpCalculatorCatalog } from './calculators/mvp-catalog';
import { salarioLiquidoCalculator } from './calculators/salario-liquido';
import { holeriteGuide } from './guides/holerite';
import { reservaEmergenciaGuide } from './guides/reserva-emergencia';
import { newsFiles } from './news';

import type { ContentDocument } from '../types';

export const contentFiles = [
  ...newsFiles,
  reservaEmergenciaGuide,
  holeriteGuide,
  jurosCompostosCalculator,
  salarioLiquidoCalculator,
  feriasCalculator,
  ...mvpCalculatorCatalog,
] as const satisfies readonly ContentDocument[];
