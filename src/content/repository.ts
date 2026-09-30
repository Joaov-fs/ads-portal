import { contentFiles } from './files';
import type {
  ContentDocument,
  ContentDocumentByKind,
  ContentKind,
} from './types';

export interface ContentRepository {
  findBySlug<K extends ContentKind>(
    kind: K,
    slug: string,
  ): ContentDocumentByKind<K> | undefined;
  list<K extends ContentKind>(kind: K): readonly ContentDocumentByKind<K>[];
  listAll(): readonly ContentDocument[];
}

export class FileContentRepository implements ContentRepository {
  constructor(private readonly documents: readonly ContentDocument[]) {}

  findBySlug<K extends ContentKind>(kind: K, slug: string) {
    return this.list(kind).find((document) => document.slug === slug);
  }

  list<K extends ContentKind>(kind: K) {
    return this.documents.filter(
      (document): document is ContentDocumentByKind<K> =>
        document.kind === kind,
    );
  }

  listAll() {
    return this.documents;
  }
}

export const contentRepository: ContentRepository = new FileContentRepository(
  contentFiles,
);
