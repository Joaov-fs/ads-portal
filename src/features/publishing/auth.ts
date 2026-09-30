import { cookies } from 'next/headers';

export type MockOperator = Readonly<{
  id: string;
  name: string;
  username: string;
}>;

export const mockOperators = [
  { id: 'ana', name: 'Ana Martins', username: 'operador.ana' },
  { id: 'caio', name: 'Caio Lima', username: 'operador.caio' },
] as const satisfies readonly MockOperator[];

export const mockPassword = 'operacao';
export const publishingSessionCookie = 'ads-publishing-operator';
export const publishingDemoEnabled = process.env.NODE_ENV !== 'production';

export function authenticateMockOperator(username: string, password: string) {
  if (!publishingDemoEnabled) return undefined;
  if (password !== mockPassword) return undefined;
  return mockOperators.find((operator) => operator.username === username);
}

export async function getMockOperator() {
  if (!publishingDemoEnabled) return undefined;
  const operatorId = (await cookies()).get(publishingSessionCookie)?.value;
  return mockOperators.find((operator) => operator.id === operatorId);
}
