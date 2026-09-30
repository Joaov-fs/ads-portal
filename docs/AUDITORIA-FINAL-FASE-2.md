# Fase 2 — Auditoria final do produto

Data: 29 de setembro de 2026.

## Resumo executivo

A auditoria cobriu Home, índices e páginas de calculadoras, notícias, guias,
categorias, busca, navegação global, rodapé, acesso operacional, dashboard,
listagens e editor administrativo. As correções ficaram restritas a UX, UI,
conteúdo, responsividade, confiança e SEO; nenhuma funcionalidade de produto foi
adicionada.

Os principais ganhos foram a correção do contraste dos cards institucionais, a
remoção de conteúdo fictício e controles indisponíveis da Home, a substituição
de catálogos de cards por listas editoriais compactas e a consolidação dos
conteúdos relacionados.

## Comparativo mensurável

| Jornada em 390 px        |     Antes |   Depois | Redução |
| ------------------------ | --------: | -------: | ------: |
| Home                     | 11.100 px | 5.932 px |     47% |
| Catálogo de calculadoras | 17.516 px | 7.543 px |     57% |
| Categoria Finanças       |  8.596 px | 4.829 px |     44% |
| Busca por “salario”      |  4.289 px | 2.935 px |     32% |
| Página Salário líquido   |  6.329 px | 4.633 px |     27% |

Em desktop, a Home passou de 6.605 px para 3.834 px de altura. Todas as jornadas
testadas permaneceram sem overflow horizontal.

## Melhorias aplicadas

### Home e confiança

- corrigido o card “Da dúvida ao próximo passo”, que exibia texto branco sobre
  fundo branco por conflito de classes no componente base;
- removidos os seis indicadores fictícios;
- removida a newsletter desabilitada;
- placeholders de publicidade agora só aparecem quando a integração está de
  fato configurada;
- reduzida a seleção de calculadoras em destaque de seis para três;
- categorias passaram de cards altos para atalhos compactos;
- sinais de confiança foram reescritos para promessas verificáveis: fontes,
  premissas e método explicado.

### Calculadoras, notícias e guias

- catálogo de 50 calculadoras agrupado por categoria em listas compactas;
- título do índice reforçado para intenção de busca;
- páginas de conteúdo passaram de três blocos de relacionados para uma única
  seção curada;
- resultado das calculadoras teve alertas repetitivos consolidados em um único
  bloco de uso seguro;
- cards de notícia perderam a imagem gradiente genérica e adotaram composição
  editorial baseada em texto;
- títulos e textos que declaravam cenários fictícios foram substituídos por
  conteúdo perene, sem alegação de evento atual.

### Busca, categorias e navegação

- resultados de busca trocaram cards genéricos por uma lista escaneável;
- indicadores fictícios e a categoria vazia Política deixaram de aparecer na
  busca;
- categorias com muitas ferramentas passaram a usar listas compactas;
- categorias vazias não aparecem mais entre relacionadas nem no sitemap;
- menu principal foi reduzido a seis destinos prioritários;
- rodapé deixou de apontar para indicadores removidos e ganhou aviso mais útil.

### Painel administrativo

- corrigidos “Salvar conteýo”, “Novo calculadora” e o CTA com gênero incorreto;
- editor, dashboard e listagens foram verificados em desktop e mobile;
- a rota do editor foi recompilada e validada com resposta funcional;
- toda a área administrativa recebeu `noindex, nofollow` e foi bloqueada no
  `robots.txt`.

### SEO e qualidade técnica

- sitemap deixa de publicar categorias sem conteúdo;
- página de acesso ganhou canonical próprio;
- navegação com rolagem suave passou a declarar a convenção exigida pelo Next.js
  16;
- títulos, descrições, breadcrumbs, fontes, FAQ e dados estruturados existentes
  foram preservados;
- validações finais: Prettier aprovado, ESLint sem warnings, 25 testes aprovados
  e build de produção compilado com TypeScript.

## Problemas grandes documentados

1. **Autenticação e persistência do admin.** O painel usa credenciais mockadas,
   cookie local e `localStorage`. Não existe autenticação real, banco de dados,
   autorização por perfil, histórico de alterações ou persistência compartilhada.
2. **Validação de domínio das calculadoras.** Há tabelas e valores de referência
   codificados no código. Cálculos financeiros, tributários e trabalhistas exigem
   revisão formal por especialista, data de vigência e rotina de atualização.
3. **Autoria e revisão verificáveis.** A autoria é atribuída a uma equipe
   genérica. Um portal de confiança precisa de responsáveis identificáveis,
   credenciais, política de revisão e, nos temas sensíveis, revisor técnico.
4. **Identidade e contato de produção.** “ADS Platform” ainda funciona como nome
   provisório e o canal de contato depende de variável de ambiente. Faltam
   identidade jurídica/editorial e contato público configurado.
5. **Operação editorial de notícias.** O catálogo atual é pequeno e não possui
   ingestão, agenda ou verificação externa. A expansão deve vir com governança
   editorial, não com geração automática de volume.

## Recomendações futuras

1. Priorizar autenticação real, banco de dados e trilha de auditoria antes de
   disponibilizar o painel fora de ambiente controlado.
2. Criar matriz versionada de regras por calculadora, com fonte, vigência,
   responsável e teste de regressão para cada alteração normativa.
3. Definir nome final, entidade responsável, contato público e política de
   correções antes do lançamento.
4. Implantar revisão técnica nominal para páginas trabalhistas, tributárias e de
   benefícios.
5. Acompanhar busca sem resultado, conclusão de cálculo, cliques em fontes e
   continuidade para conteúdos relacionados antes de novos ajustes de UX.

## Capturas finais

- `docs/auditoria-fase-2/depois-home-desktop.png`
- `docs/auditoria-fase-2/depois-home-mobile.png`
- `docs/auditoria-fase-2/depois-calculadoras-desktop.png`
- `docs/auditoria-fase-2/depois-admin-editor-mobile.png`
