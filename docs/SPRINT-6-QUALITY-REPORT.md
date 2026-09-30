# Sprint 6 — Relatório de qualidade para publicação

Data da auditoria: 25 de setembro de 2026.

## Escopo auditado

Foram revisados UX, UI, responsividade, acessibilidade, SEO técnico, metadata,
Schema.org, performance, Core Web Vitals, lazy loading, navegação, links
internos, espaços publicitários, arquitetura, componentes, organização, código
morto, duplicações e consistência visual. A auditoria preservou o desenho
static-first e não adicionou CMS, banco, Supabase, autenticação, dashboard ou
novas funcionalidades de produto.

## Melhorias realizadas

- removida a duplicação dos primeiros links de navegação no cabeçalho desktop;
- adicionado link de salto visível ao foco para acesso direto ao conteúdo;
- associados textos de ajuda e erro aos campos com `aria-describedby`, mantendo
  anúncio de validação para tecnologia assistiva;
- normalizadas as datas das notícias para o formato brasileiro com elemento
  semântico `time`;
- removidos textos internos de demonstração da interface de pesquisa;
- corrigida a busca de categoria, que sugeria filtro local inexistente;
- deixado explícito que a newsletter ainda não aceita inscrições, evitando uma
  ação sem persistência ou retorno ao usuário;
- adicionada imagem social padrão de 1200 × 630 pela convenção de metadata do
  App Router;
- adicionada recuperação acessível para erros inesperados de rota;
- incluídos testes de regressão para os contratos de acessibilidade dos campos
  e para o estado honesto da newsletter.

## Problemas encontrados

- o cabeçalho desktop exibia links repetidos em duas linhas;
- não existia mecanismo para usuários de teclado ignorarem a navegação global;
- mensagens de validação eram visuais, mas não estavam programaticamente
  ligadas aos respectivos controles;
- datas editoriais apareciam como valores ISO em cards;
- a página de pesquisa expunha a expressão "Busca mockada";
- a busca nas categorias prometia um filtro por categoria que não era aplicado;
- o formulário de newsletter aparentava realizar cadastro, embora não exista
  backend nesta fase;
- cards sociais solicitavam formato grande sem uma imagem Open Graph padrão;
- não havia uma interface de recuperação para exceções de renderização.

Não foram encontrados imports com `any`, supressões de TypeScript, imagens
HTML não otimizadas, links internos estáticos apontando para rotas inexistentes
ou bibliotecas de UI paralelas. O único `dangerouslySetInnerHTML` é o emissor
centralizado de JSON-LD e neutraliza o caractere `<` antes da serialização.

## Performance e Core Web Vitals

A aplicação continua usando Server Components por padrão. Somente o painel das
calculadoras e a tela de recuperação de erro hidratam JavaScript próprio. Não há
imagens editoriais rasterizadas, fontes remotas ou scripts de terceiros ativos
por padrão. O Next.js mantém code splitting, prefetch e prerenderização por
rota; os slots publicitários reservam altura para reduzir CLS. Não foi
introduzido lazy loading manual sem evidência de necessidade.

Lighthouse e dados de campo devem ser medidos no domínio final, pois resultados
locais não representam latência de CDN, DNS, scripts consentidos ou anúncios
reais.

## Publicidade

A Home conserva exatamente cinco posições com `AdSlot`, todas com dimensão
reservada. O adaptador oficial e novos posicionamentos permanecem pendentes de
aprovação da conta, revisão de consentimento e medição de densidade/CWV. Nenhum
script ou identificador real foi incluído.

## Sugestões futuras

- executar Lighthouse móvel e desktop no Preview e novamente no domínio final;
- validar metadata e Schema.org nas ferramentas oficiais dos buscadores;
- adicionar testes end-to-end dos fluxos Home → busca → conteúdo → calculadora;
- automatizar verificações de acessibilidade e links no CI;
- medir Web Vitals reais antes de introduzir preloads, fontes ou otimizações
  adicionais;
- revisar textos jurídicos e estratégia de consentimento antes de habilitar
  analytics ou publicidade;
- avaliar posicionamentos publicitários em páginas de conteúdo somente com
  protótipo, teste responsivo e orçamento explícito de CLS.

## Checklist final para publicação

- [x] documentação e `TASKS.md` atualizados;
- [x] formatação, lint, testes e build de produção aprovados localmente;
- [x] navegação, responsividade e componentes compartilhados revisados;
- [x] metadata, sitemap, robots, manifesto, schemas e imagem social revisados;
- [x] cinco slots da Home preservados sem integração real;
- [x] scripts externos continuam desabilitados por padrão;
- [ ] definir `NEXT_PUBLIC_SITE_URL` e contato no ambiente de produção;
- [ ] validar Preview nas larguras 360, 390, 430, 768, 1024 e 1440 px;
- [ ] executar Lighthouse e teste por teclado no deploy real;
- [ ] validar Open Graph, Twitter Card e Schema.org no domínio final;
- [ ] revisar textos legais e consentimento com responsáveis;
- [ ] confirmar DNS, HTTPS, Search Console e sitemap conforme `PRODUCTION.md`;
- [ ] manter analytics e AdSense desabilitados até consentimento e aprovação.

Os itens não marcados dependem do ambiente de publicação ou de validação
organizacional e não devem ser simulados no código-fonte.
