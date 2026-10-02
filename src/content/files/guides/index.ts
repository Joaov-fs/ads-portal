import { guideComoCalcularOSalarioLiquido } from './como-calcular-o-salario-liquido';
import { guideComoCalcularFeriasPassoAPasso } from './como-calcular-ferias-passo-a-passo';
import { guideComoCalcularO13oSalario } from './como-calcular-o-13o-salario';
import { guideComoCalcularARescisaoSemJustaCausa } from './como-calcular-a-rescisao-sem-justa-causa';
import { guideComoCalcularHorasExtrasEDsr } from './como-calcular-horas-extras-e-dsr';
import { guideComoPedirOSeguroDesemprego } from './como-pedir-o-seguro-desemprego';
import { guideComoAbrirUmMeiPassoAPasso } from './como-abrir-um-mei-passo-a-passo';
import { guideMeiDasEmAtrasoComoRegularizar } from './mei-das-em-atraso-como-regularizar';
import { guideTabelaDoImpostoDeRenda2026NaFolha } from './tabela-do-imposto-de-renda-2026-na-folha';
import { guideComoFuncionaODescontoDoInss } from './como-funciona-o-desconto-do-inss';
import { guideCdbLciLcaOuTesouroSelicQualEscolher } from './cdb-lci-lca-ou-tesouro-selic-qual-escolher';
import { guidePoupancaOuCdbQualRendeMais } from './poupanca-ou-cdb-qual-rende-mais';
import { guideJurosCompostosNaPratica } from './juros-compostos-na-pratica';
import { guideFinanciamentoSacOuPriceQualEscolher } from './financiamento-sac-ou-price-qual-escolher';
import { guideComoSairDoEndividamentoPassoAPasso } from './como-sair-do-endividamento-passo-a-passo';
import { guideBolsaFamiliaComoConsultarEQuantoRecebe } from './bolsa-familia-como-consultar-e-quanto-recebe';
import { guideBpcLoasQuemTemDireitoEComoPedir } from './bpc-loas-quem-tem-direito-e-como-pedir';
import { guideAbonoSalarialPisPasepQuemTemDireito } from './abono-salarial-pis-pasep-quem-tem-direito';
import { guideQuantoCustaUmFuncionarioClt } from './quanto-custa-um-funcionario-clt';
import { guideSimplesNacionalEFatorRComoPagarMenosImposto } from './simples-nacional-e-fator-r-como-pagar-menos-imposto';
import { guideReajusteDoAluguelComoCalcularIgpMOuIpca } from './reajuste-do-aluguel-como-calcular-igp-m-ou-ipca';
import { holeriteGuide } from './holerite';
import { reservaEmergenciaGuide } from './reserva-emergencia';

export const guideFiles = [
  holeriteGuide,
  reservaEmergenciaGuide,
  guideComoCalcularOSalarioLiquido,
  guideComoCalcularFeriasPassoAPasso,
  guideComoCalcularO13oSalario,
  guideComoCalcularARescisaoSemJustaCausa,
  guideComoCalcularHorasExtrasEDsr,
  guideComoPedirOSeguroDesemprego,
  guideComoAbrirUmMeiPassoAPasso,
  guideMeiDasEmAtrasoComoRegularizar,
  guideTabelaDoImpostoDeRenda2026NaFolha,
  guideComoFuncionaODescontoDoInss,
  guideCdbLciLcaOuTesouroSelicQualEscolher,
  guidePoupancaOuCdbQualRendeMais,
  guideJurosCompostosNaPratica,
  guideFinanciamentoSacOuPriceQualEscolher,
  guideComoSairDoEndividamentoPassoAPasso,
  guideBolsaFamiliaComoConsultarEQuantoRecebe,
  guideBpcLoasQuemTemDireitoEComoPedir,
  guideAbonoSalarialPisPasepQuemTemDireito,
  guideQuantoCustaUmFuncionarioClt,
  guideSimplesNacionalEFatorRComoPagarMenosImposto,
  guideReajusteDoAluguelComoCalcularIgpMOuIpca,
] as const;
