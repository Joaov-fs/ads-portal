import type { PublishingRecord } from './types';

export interface PublishingRepository {
  load(): readonly PublishingRecord[];
  save(records: readonly PublishingRecord[]): void;
}

export interface PublishingStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export class LocalPublishingRepository implements PublishingRepository {
  constructor(
    private readonly storage: PublishingStorage,
    private readonly storageKey: string,
    private readonly fallback: readonly PublishingRecord[],
  ) {}

  load() {
    const stored = this.storage.getItem(this.storageKey);
    if (!stored) return this.fallback;

    try {
      const parsed: unknown = JSON.parse(stored);
      return isPublishingRecordList(parsed) ? parsed : this.fallback;
    } catch {
      return this.fallback;
    }
  }

  save(records: readonly PublishingRecord[]) {
    this.storage.setItem(this.storageKey, JSON.stringify(records));
  }
}

function isPublishingRecordList(value: unknown): value is PublishingRecord[] {
  return (
    Array.isArray(value) &&
    (value as unknown[]).every((item) => {
      if (typeof item !== 'object' || item === null) return false;
      const candidate = item as Record<string, unknown>;
      return (
        typeof candidate.id === 'string' &&
        typeof candidate.kind === 'string' &&
        ['news', 'guide', 'calculator'].includes(candidate.kind) &&
        typeof candidate.status === 'string' &&
        ['draft', 'review', 'published'].includes(candidate.status)
      );
    })
  );
}
