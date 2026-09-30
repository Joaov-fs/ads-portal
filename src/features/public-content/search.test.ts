import { describe, expect, it } from 'vitest';

import { searchPublicContent } from './search';

describe('searchPublicContent', () => {
  it('matches normalized terms across typed mock content', () => {
    expect(searchPublicContent('salário').map((item) => item.title)).toContain(
      'Salário líquido',
    );
    expect(searchPublicContent('ferias').map((item) => item.title)).toContain(
      'Férias',
    );
  });

  it('requires every informed term and ignores empty queries', () => {
    expect(searchPublicContent('juros compostos')).not.toHaveLength(0);
    expect(searchPublicContent('')).toEqual([]);
    expect(searchPublicContent('conteudo inexistente')).toEqual([]);
  });
});
