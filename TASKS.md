# Sprint 1 — Biblioteca Visual

- [x] Definir Design Tokens
- [x] Sistema Tipográfico
- [x] Grid e Containers
- [x] Botões
- [x] Inputs
- [x] Search Components
- [x] Cards
- [x] Header
- [x] Footer
- [x] Navegação
- [x] Breadcrumb
- [x] AdSlot
- [x] Página /design-system
- [x] Atualizar documentação
- [x] Executar lint
- [x] Executar testes
- [x] Executar build

# Sprint 2 — Produto Público

- [x] Layout global com navegação e footer definitivos
- [x] Home completa e hero principal
- [x] Busca em destaque com dados mockados
- [x] Categorias públicas reutilizáveis
- [x] Ferramentas populares
- [x] Últimas notícias mockadas
- [x] Guias em destaque
- [x] Indicadores econômicos mockados
- [x] Newsletter
- [x] Cinco posições reutilizáveis de publicidade com AdSlot
- [x] Página de pesquisa
- [x] Página de categoria reutilizável
- [x] Página 404 personalizada
- [x] Metadata, Open Graph, canonical e robots
- [x] Atualizar documentação e ADR
- [x] Executar lint
- [x] Executar testes
- [x] Executar build

# Sprint 3 — Engine de Conteúdo

- [x] Criar repositório de conteúdo baseado em arquivos tipados
- [x] Criar pipeline único para notícias, guias e calculadoras
- [x] Implementar templates reutilizáveis para notícias, guias e calculadoras
- [x] Criar índices e URLs amigáveis em `/noticias`, `/guias` e `/calculadoras`
- [x] Gerar metadata, canonical, Open Graph, breadcrumbs e Schema.org
- [x] Gerar FAQ, relacionados, autor, tempo de leitura e atualização
- [x] Integrar Home, pesquisa e sitemap à nova fonte editorial
- [x] Adicionar conteúdo mockado e testes do pipeline
- [x] Atualizar documentação e ADR
- [x] Executar lint, testes e build

# Sprint 4 — Implementação das 50 Ferramentas do MVP

- [x] 01–10: Rescisão CLT, Salário Líquido, Férias, Seguro-Desemprego, 13º,
      IRRF, Horas Extras, FGTS + Multa, INSS e Contador de Dias
- [x] 11–20: Juros Compostos, Porcentagem, CDI, SAC x Price, Reajuste de
      Aluguel, Bolsa Família, PIS, DAS/MEI, Custo CLT e Fator R
- [x] 21–30: Salário por Hora, Adicional Noturno, DSR, Banco de Horas, Férias
      Proporcionais, 13º Proporcional, Aviso Prévio, PLR/PPR, Vale-Transporte e
      Insalubridade
- [x] 31–40: Periculosidade, Pensão Alimentícia, Custo da Demissão, Pró-labore,
      INSS Autônomo, Simples Nacional, Excesso MEI, DAS em Atraso, BPC e
      Salário-Maternidade
- [x] 41–50: Auxílio por Incapacidade, IPVA, CDB Líquido, CDB x Poupança,
      Tesouro Selic, LCI/LCA, Conversão de Taxa, Juros Simples, Empréstimo e
      Amortização Antecipada
- [x] Integrar validação, resultado e explicação ao template único
- [x] Criar clusters para ferramentas, notícias e guias relacionados
- [x] Atualizar documentação
- [x] Executar lint, testes e build

# Sprint 5 — Infraestrutura de Produção

- [x] Configurar metadata global, Open Graph, Twitter Cards e schemas globais
- [x] Implementar robots, sitemap, manifesto, browserconfig e ícones
- [x] Preparar GA4, GTM, Microsoft Clarity e Search Console por ambiente
- [x] Preparar contrato do AdSlot para integração futura com AdSense
- [x] Criar páginas Sobre, Contato, Privacidade, Cookies, Termos e Autor
- [x] Revisar cache, prefetch, JavaScript, imagens e Core Web Vitals
- [x] Adicionar headers de segurança e cache de assets estáveis
- [x] Criar `.env.example` e `PRODUCTION.md`
- [x] Atualizar README, arquitetura, desenvolvimento e ADR
- [x] Executar auditoria de acessibilidade, SEO, performance e organização
- [x] Executar lint, testes e build

# Sprint 6 — Quality Release

- [x] Ler e revisar toda a documentação do projeto
- [x] Auditar UX, UI, responsividade e consistência visual
- [x] Auditar acessibilidade e navegação por teclado
- [x] Auditar SEO, metadata, Schema.org e links internos
- [x] Auditar performance, Core Web Vitals e lazy loading
- [x] Auditar arquitetura, componentes, duplicações e código morto
- [x] Revisar espaços reservados para publicidade
- [x] Corrigir inconsistências e bugs encontrados sem ampliar o produto
- [x] Adicionar testes de regressão proporcionais às correções
- [x] Atualizar documentação e relatório de publicação
- [x] Executar formatação, lint, testes e build

# Pendências pós-auditoria

- [ ] Definir estratégia e interface de consentimento para cookies não essenciais
- [ ] Adicionar testes end-to-end dos fluxos públicos críticos
- [ ] Automatizar auditorias Lighthouse e acessibilidade no CI
- [ ] Integrar fonte real e versionada para indicadores econômicos
- [ ] Planejar busca indexada para o crescimento do catálogo
- [ ] Avaliar monitoramento de erros, disponibilidade e Web Vitals em produção
- [ ] Implementar adaptador oficial do AdSense somente após aprovação da conta
- [ ] Revisar textos legais com responsáveis jurídico e de privacidade

# Sprint 7 — Publishing System (Operação)

- [x] Criar login local mockado para dois operadores
- [x] Criar layout e menu administrativos com o Design System
- [x] Criar dashboard com totais por tipo e status editorial
- [x] Criar listas de notícias, guias e calculadoras
- [x] Implementar pesquisa, filtros e paginação preparada
- [x] Implementar workflow Rascunho → Revisão → Publicado
- [x] Preparar editor de conteýo estruturado
- [x] Permitir relacionamentos Notícia → Guia → Calculadora
- [x] Persistir a operação localmente sem banco
- [x] Criar contrato de repositório substituível por Supabase
- [x] Adicionar testes das regras editoriais
- [x] Atualizar documentação, arquitetura e ADR
- [x] Executar formatação, lint, testes e build
- [x] Entregar relatório da Sprint

# Sprint 8 — Product Experience

- [x] Revisar integralmente Home, calculadoras, notícias, guias, busca e categorias
- [x] Reorganizar a Home com hero orientado a valor e curadoria de ferramentas
- [x] Padronizar a experiência pós-resultado das 50 calculadoras
- [x] Exibir explicação, memória de cálculo, interpretação e próximos passos
- [x] Exibir alertas, erros comuns, FAQ, fontes e última atualização
- [x] Estruturar notícias por acontecimento, público afetado e impacto
- [x] Tornar guias mais didáticos com objetivos, exemplos e próximos passos
- [x] Melhorar hierarquia, tipografia, espaçamento, cards, CTA e responsividade
- [x] Corrigir associação de guias nas páginas de categoria
- [x] Evitar indexação de categorias sem conteúdo publicado
- [x] Revisar AdSlots para pontos de pausa e intenção mais naturais
- [x] Atualizar documentação e relatório da Sprint
- [x] Executar formatação, lint, testes e build

# RC1 — Release Candidate da versão 1.0

- [x] Auditar rotas públicas, administrativas e estados vazios
- [x] Revisar metadata, canonical, sitemap, robots e dados estruturados
- [x] Bloquear painel mockado e design system em produção
- [x] Reforçar headers HTTP e validação da URL canônica na Vercel
- [x] Reconciliar referências de cálculo sensíveis com fontes oficiais de 2026
- [x] Corrigir divisões por zero, parcelas sem juros e saldos negativos
- [x] Reposicionar AdSlots com densidade reduzida e ativação segura
- [x] Atualizar README, arquitetura, desenvolvimento e publicação
- [x] Executar format, lint, testes e build

# Pendências externas para publicação

- [ ] Comprar o domínio e configurar DNS/HTTPS na Vercel
- [ ] Configurar URL canônica e e-mail de contato no ambiente de produção
- [ ] Fazer revisão jurídica final dos textos institucionais
- [ ] Validar Lighthouse, acessibilidade e Core Web Vitals no domínio real
- [ ] Verificar Search Console e enviar o sitemap após a propagação do domínio
- [ ] Solicitar AdSense; integrar IDs e consentimento apenas após aprovação
