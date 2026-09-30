# Produção

Este guia publica a ADS Platform na Vercel com domínio próprio e deixa as
integrações prontas sem registrar identificadores reais no repositório.

## 1. Pré-requisitos

- conta na Vercel com acesso ao projeto Git;
- domínio sob controle da equipe;
- Node.js 24 ou superior e pnpm 11 ou superior para validação local;
- IDs dos serviços externos somente quando as respectivas contas estiverem
  aprovadas.

Valide o projeto antes do primeiro deploy:

```bash
pnpm install --frozen-lockfile
pnpm format
pnpm lint
pnpm test
pnpm build
```

## 2. Criar o projeto na Vercel

1. Na Vercel, selecione **Add New > Project** e importe o repositório.
2. Confirme o framework **Next.js**.
3. Use `pnpm build` como Build Command. O Install Command pode permanecer
   automático; a propriedade `packageManager` fixa a versão do pnpm.
4. Não altere o Output Directory do Next.js.
5. Cadastre as variáveis descritas abaixo para Production e, quando desejado,
   Preview.
6. Execute o deploy e valide a URL temporária da Vercel antes de associar o
   domínio.

## 3. Variáveis de ambiente

Copie `.env.example` para `.env.local` somente no desenvolvimento. Na Vercel,
use **Project Settings > Environment Variables**. Nunca comite `.env.local`.

| Variável                            | Obrigatória | Uso                                                                     |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_NAME`             | recomendada | Nome público e metadata.                                                |
| `NEXT_PUBLIC_SITE_URL`              | produção    | URL canônica, sem caminho; por exemplo `https://www.seudominio.com.br`. |
| `NEXT_PUBLIC_CONTACT_EMAIL`         | recomendada | Canal exibido em `/contato`.                                            |
| `NEXT_PUBLIC_ANALYTICS_ENABLED`     | não         | `true` habilita os scripts configurados; o padrão é `false`.            |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`   | não         | Measurement ID do GA4.                                                  |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | não         | Container ID do GTM.                                                    |
| `NEXT_PUBLIC_MICROSOFT_CLARITY_ID`  | não         | Project ID do Clarity.                                                  |
| `GOOGLE_SITE_VERIFICATION`          | não         | Token de verificação do Search Console, sem a tag HTML.                 |
| `NEXT_PUBLIC_ADSENSE_ENABLED`       | não         | Reserva a ativação futura; mantenha `false` nesta versão.               |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`  | não         | Publisher ID futuro; mantenha vazio até a aprovação.                    |

Variáveis `NEXT_PUBLIC_*` são incorporadas ao bundle no build. Qualquer mudança
nelas exige um novo deploy. Use valores de Preview separados dos de Production.
Em `VERCEL_ENV=production`, o build falha se `NEXT_PUBLIC_SITE_URL` estiver
ausente, inválida ou contiver caminho. Use a origem HTTPS canônica.

O painel e o catálogo de design são deliberadamente locais: `/acesso-admin`,
`/admin/*` e `/design-system` retornam 404 em produção. Não configure credenciais
mockadas na Vercel.

## 4. Domínio, DNS e HTTPS

1. Abra **Project Settings > Domains**, adicione o domínio principal e escolha
   se a versão canônica usa `www` ou o domínio raiz.
2. No provedor DNS, aplique exatamente os registros apresentados pela Vercel.
   Em geral, o domínio raiz usa registro `A` e `www` usa `CNAME`, mas os valores
   exibidos pela Vercel são a fonte de verdade.
3. Remova registros conflitantes e aguarde a propagação.
4. Defina o redirecionamento do domínio alternativo para o canônico na Vercel.
5. Atualize `NEXT_PUBLIC_SITE_URL` com a origem HTTPS canônica e faça novo
   deploy.
6. Aguarde o certificado automático e confirme que HTTP redireciona para HTTPS.

Depois, abra `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` e
`/browserconfig.xml` no domínio final. Todos devem apontar para a origem
canônica.

## 5. Google Analytics 4

1. Crie uma propriedade e um fluxo Web no Google Analytics.
2. Cadastre o Measurement ID em `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`.
3. Defina `NEXT_PUBLIC_ANALYTICS_ENABLED=true` somente depois de revisar a
   política de cookies e o mecanismo de consentimento aplicável.
4. Faça novo deploy e valide o Realtime e o DebugView.

Se o GA4 for configurado dentro do GTM, deixe
`NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` vazio para evitar pageviews duplicados.

## 6. Google Tag Manager

1. Crie um container Web.
2. Cadastre o Container ID em `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID`.
3. Habilite analytics, faça novo deploy e use o Preview do GTM.
4. Publique o container somente após validar tags, gatilhos e consentimento.

## 7. Microsoft Clarity

1. Crie o projeto no Clarity.
2. Cadastre o Project ID em `NEXT_PUBLIC_MICROSOFT_CLARITY_ID`.
3. Habilite analytics e faça novo deploy. O script usa carregamento tardio para
   reduzir impacto na renderização inicial.

## 8. Google Search Console

1. Cadastre uma propriedade de domínio (preferencial) ou prefixo de URL.
2. Para propriedade de domínio, use a verificação DNS fornecida pelo Google.
3. Para a alternativa por tag HTML, copie somente o valor de `content` para
   `GOOGLE_SITE_VERIFICATION`, faça novo deploy e solicite a verificação.
4. Envie `https://www.seudominio.com.br/sitemap.xml` e acompanhe cobertura e
   Core Web Vitals.

## 9. Google AdSense

Esta Sprint entrega somente a arquitetura. Nenhum script oficial, Publisher ID
ou bloco real foi incluído.

1. Publique o domínio com as páginas institucionais completas.
2. Solicite aprovação no AdSense.
3. Depois da aprovação, cadastre o Publisher ID e os IDs de bloco somente na
   Vercel.
4. Implemente o adaptador oficial sobre `AdSlot`, preservando `placementId`,
   `format`, `responsive` e a dimensão reservada para evitar layout shift.
5. Somente então habilite `NEXT_PUBLIC_ADSENSE_ENABLED` e valide políticas,
   consentimento, densidade de anúncios e Core Web Vitals.

## 10. Checklist de publicação

- [ ] `pnpm format`, `pnpm lint`, `pnpm test` e `pnpm build` aprovados.
- [ ] URL canônica e e-mail configurados na Vercel.
- [ ] Domínio principal e redirecionamento alternativo definidos.
- [ ] DNS propagado e HTTPS válido.
- [ ] `robots.txt`, sitemap, manifesto e ícones respondendo.
- [ ] Metadata, Open Graph, Twitter Cards e schemas validados.
- [ ] Páginas Sobre, Contato, Privacidade, Cookies, Termos e Autor revisadas.
- [ ] Consentimento e textos jurídicos revisados antes de habilitar métricas.
- [ ] Apenas uma origem de pageview do GA4 ativa (direta ou via GTM).
- [ ] Search Console verificado e sitemap enviado.
- [ ] AdSense mantido desabilitado até aprovação e implementação oficial.
- [ ] Testes móveis, acessibilidade e Core Web Vitals executados no domínio real.

## 11. Publicação e rollback

Promova para produção apenas um deploy de Preview já validado. Após publicar,
faça um smoke test da Home, pesquisa, uma categoria, uma notícia, um guia, uma
calculadora e todas as páginas institucionais. Em caso de regressão, use o
rollback da Vercel para promover o último deployment saudável e investigue em
Preview.
