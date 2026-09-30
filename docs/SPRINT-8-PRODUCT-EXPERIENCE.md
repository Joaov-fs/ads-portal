# Sprint 8 — Product Experience

Data da revisão: 28 de setembro de 2026.

## Resultado

A experiência pública foi reorganizada para responder três perguntas em cada
jornada: o produto transmite confiança, parece bem cuidado e convida a pessoa a
continuar? A Sprint não adiciona funcionalidades. Ela melhora apresentação,
compreensão, descoberta e continuidade do que já existia.

## Home

- hero reescrito em torno da promessa “Entenda. Calcule. Decida melhor”;
- proposta de valor mais concreta e bloco lateral orientado à jornada;
- sinais visíveis de confiança: tamanho do catálogo, fontes e revisão;
- catálogo completo removido da Home e substituído por seis ferramentas
  representativas, com acesso explícito às 50 calculadoras;
- hierarquia, espaçamento, contraste e ritmo de seções refinados;
- ícones e cards ajustados para reduzir a aparência genérica.

## Calculadoras

As 50 páginas continuam usando um único template e as regras puras existentes.
Após uma simulação válida, todas apresentam:

1. resultado principal;
2. explicação da regra aplicada;
3. memória dos valores informados e do passo final;
4. interpretação do resultado;
5. próximos passos recomendados;
6. alertas importantes;
7. erros comuns;
8. perguntas frequentes;
9. fontes oficiais;
10. data da última revisão;
11. ferramentas relacionadas;
12. notícias relacionadas;
13. guias relacionados.

A navegação lateral permite saltar para simulador, conteúdo, FAQ e fontes. A
publicidade pós-resultado só aparece quando existe resultado, preservando foco e
melhorando a qualidade da impressão.

## Notícias e guias

Notícias agora começam com um resumo de decisão que explicita o acontecimento,
quem tende a ser afetado e o impacto prático. Ferramentas e guias continuam
ligados pelo pipeline de relevância.

Guias passaram a declarar o que a pessoa aprenderá. Os dois guias existentes
receberam exemplos concretos, passos aplicáveis e indicação de ferramenta para
continuar a jornada.

## Busca, navegação e categorias

- índices mostram volume disponível, revisão editorial e busca em destaque;
- categorias financeiras e trabalhistas passaram a exibir seus guias
  relacionados, corrigindo uma associação antes limitada à categoria Guias;
- categorias sem publicação exibem um estado honesto e recebem `noindex` até
  terem conteúdo suficiente;
- páginas de conteúdo ganharam sumário lateral e âncoras previsíveis.

## SEO

- título da Home mais descritivo e orientado à intenção de busca;
- conteúdo pós-resultado e seções estáticas aprofundam a utilidade das páginas;
- estrutura semântica de headings, datas, breadcrumbs, FAQ e fontes preservada;
- páginas vazias deixam de competir no índice;
- exemplos e orientação prática reduzem conteúdo raso em guias e calculadoras.

## Monetização

Os cinco contratos de anúncio da Home foram preservados, mas os placeholders
ficaram visualmente neutros e foram alinhados a pausas naturais. Páginas de
conteúdo usam uma posição antes dos relacionados; calculadoras possuem outra
apenas após o resultado. Nenhum script, ID real ou integração AdSense foi
ativado.

## Design e responsividade

A paleta ganhou contraste e refinamento, bordas e sombras foram suavizadas e o
raio dos componentes foi harmonizado. O ritmo vertical, os CTAs e os estados de
resultado foram revisados em desktop e em viewport móvel de 390 px, sem overflow
horizontal. O produto mantém fontes locais do sistema e Server Components como
padrão.

## Validação

- `pnpm format:write`: aprovado;
- `pnpm lint`: aprovado, sem warnings;
- `pnpm test`: 9 arquivos e 25 testes aprovados;
- `pnpm build`: aprovado com TypeScript e 91 páginas geradas;
- revisão visual: Home e calculadora verificadas em 1440 × 900 e 390 × 844;
- Sprint 9: não iniciada.
