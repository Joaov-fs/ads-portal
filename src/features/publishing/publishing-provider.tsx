'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  LocalPublishingRepository,
  canTransitionStatus,
  initialPublishingRecords,
  type PublishingRecord,
  type PublishingRecordInput,
} from '.';

const storageKey = 'ads-platform:publishing:v1';

type PublishingContextValue = Readonly<{
  findRecord(
    kind: PublishingRecord['kind'],
    slug: string,
  ): PublishingRecord | undefined;
  records: readonly PublishingRecord[];
  saveRecord(
    input: PublishingRecordInput,
    operatorName: string,
  ): PublishingRecord;
}>;

const PublishingContext = createContext<PublishingContextValue | undefined>(
  undefined,
);

export function PublishingProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [records, setRecords] = useState<readonly PublishingRecord[]>(
    initialPublishingRecords,
  );

  useEffect(() => {
    const repository = new LocalPublishingRepository(
      window.localStorage,
      storageKey,
      initialPublishingRecords,
    );
    const timer = window.setTimeout(() => setRecords(repository.load()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const saveRecord = useCallback(
    (input: PublishingRecordInput, operatorName: string) => {
      const current = input.id
        ? records.find((record) => record.id === input.id)
        : undefined;

      if (current && !canTransitionStatus(current.status, input.status)) {
        throw new Error('Transição de status inválida.');
      }

      const duplicate = records.find(
        (record) =>
          record.kind === input.kind &&
          record.slug === input.slug &&
          record.id !== input.id,
      );
      if (duplicate) throw new Error('Já existe um conteúdo com este slug.');

      const saved: PublishingRecord = {
        ...input,
        id: input.id ?? crypto.randomUUID(),
        updatedAt: new Date().toISOString().slice(0, 10),
        updatedBy: operatorName,
      };
      const nextRecords = current
        ? records.map((record) => (record.id === current.id ? saved : record))
        : [saved, ...records];

      new LocalPublishingRepository(
        window.localStorage,
        storageKey,
        initialPublishingRecords,
      ).save(nextRecords);
      setRecords(nextRecords);
      return saved;
    },
    [records],
  );

  const value = useMemo<PublishingContextValue>(
    () => ({
      records,
      findRecord: (kind, slug) =>
        records.find((record) => record.kind === kind && record.slug === slug),
      saveRecord,
    }),
    [records, saveRecord],
  );

  return (
    <PublishingContext.Provider value={value}>
      {children}
    </PublishingContext.Provider>
  );
}

export function usePublishing() {
  const context = useContext(PublishingContext);
  if (!context) {
    throw new Error(
      'usePublishing deve ser usado dentro de PublishingProvider.',
    );
  }
  return context;
}
