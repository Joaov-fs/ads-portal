# Components

Reusable presentation components are grouped by responsibility:

- `ui`: buttons, fields, search, and base surfaces.
- `layout`: containers, sections, and grids.
- `cards`: news, guide, calculator, indicator, and feature compositions.
- `navigation`: header, footer, menus, logo, and breadcrumb.
- `advertising`: reusable ad placeholders.
- `content`: shared editorial rendering plus explicit news, guide, and
  calculator templates.

Components must remain free of data fetching and business rules. Use the public
`index.ts` in each component folder and review supported states at
`/design-system`.
