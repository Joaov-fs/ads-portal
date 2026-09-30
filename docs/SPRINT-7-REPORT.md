# Sprint 7 — Relatório do Publishing System

Data de conclusão: 28 de setembro de 2026.

## Resultado

A plataforma agora possui uma operação editorial focada, acessível em `/admin`,
sem alterar o pipeline público static-first. Dois operadores mockados conseguem
entrar, consultar o catálogo, pesquisar, filtrar, paginar, criar, editar,
relacionar e movimentar conteúdos pelo fluxo Rascunho → Revisão → Publicado.

## Entregas

- login local demonstrativo com sessão HTTP-only para dois operadores;
- layout administrativo responsivo, menu e saída da sessão;
- dashboard com totais de notícias, guias, calculadoras, rascunhos, itens em
  revisão e publicados;
- listas independentes de notícias, guias e calculadoras;
- pesquisa normalizada, filtros de status e categoria e paginação de dez itens;
- editor de título, slug, resumo, categoria, status e seções estruturadas;
- relacionamentos Notícia → Guia e Guia → Calculadora;
- validação de slugs duplicados e transições do workflow;
- persistência local por repositório substituível;
- testes unitários das regras operacionais e ADR da decisão.

## Limites intencionais

Não foram adicionados Supabase, banco, autenticação real, permissões, upload,
analytics ou AdSense. A publicação desta Sprint representa o estado aprovado no
painel local; ela não altera os arquivos do build nem o catálogo público. Os
dados ficam no navegador atual e não são compartilhados entre operadores em
dispositivos diferentes.

## Arquitetura preparada para crescimento

O `PublishingRepository` isola persistência da interface. O adaptador local pode
ser trocado por Supabase mantendo dashboard, listas, editor e regras. A sessão
mockada também está isolada da persistência editorial, permitindo que
autenticação e autorização reais sejam introduzidas sem transformar o painel em
um CMS genérico.

## Validação

- `pnpm format`: aprovado;
- `pnpm lint`: aprovado, sem warnings;
- `pnpm test`: 9 arquivos e 24 testes aprovados;
- `pnpm build`: aprovado com TypeScript e 91 páginas geradas;
- `/admin` sem sessão: redirecionamento HTTP 307 para `/acesso-admin`;
- `/acesso-admin`: HTTP 200;
- `/admin` com operador mockado: HTTP 200.

O Vitest e a etapa TypeScript do build precisaram ser executados fora do sandbox
da ferramenta local porque a criação de subprocessos foi bloqueada com `EPERM`;
ambos concluíram normalmente no mesmo workspace.

## Próximo limite

A Sprint 8 não foi iniciada. A futura integração persistente deve começar pelo
adaptador do repositório e por autenticação/autorização reais, preservando as
regras editoriais já testadas.
