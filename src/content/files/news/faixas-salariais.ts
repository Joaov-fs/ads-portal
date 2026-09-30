import type { NewsDocument } from '../../types';

export const faixasSalariaisNews = {
  kind: 'news',
  slug: 'faixas-salariais-e-descontos',
  title: 'Descontos no salário: por que as faixas mudam o valor líquido',
  description:
    'Veja por que referências salariais precisam estar atualizadas antes de estimar o valor líquido.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-18',
  updatedAt: '2026-09-23',
  tags: ['salario', 'descontos', 'trabalho', 'planejamento'],
  sections: [
    {
      heading: 'Por que as faixas importam',
      paragraphs: [
        'Limites e alíquotas por faixa fazem com que o desconto não cresça de maneira uniforme em todos os salários.',
        'Uma estimativa confiável deve informar a data de referência e separar remuneração, benefícios e descontos.',
      ],
    },
    {
      heading: 'O que conferir',
      paragraphs: [
        'Verifique o salário bruto, os descontos recorrentes e as regras vigentes no período antes de usar qualquer resultado no orçamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'A simulação substitui o holerite?',
      answer:
        'Não. Ela serve como estimativa. O documento emitido pelo empregador apresenta os valores efetivamente processados.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies NewsDocument;
