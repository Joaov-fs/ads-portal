'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  authenticateMockOperator,
  publishingSessionCookie,
  publishingDemoEnabled,
} from '@/features/publishing/auth';

export async function loginAction(formData: FormData) {
  if (!publishingDemoEnabled) redirect('/');
  const usernameValue = formData.get('username');
  const passwordValue = formData.get('password');
  const username =
    typeof usernameValue === 'string' ? usernameValue.trim() : '';
  const password = typeof passwordValue === 'string' ? passwordValue : '';
  const operator = authenticateMockOperator(username, password);

  if (!operator) redirect('/acesso-admin?erro=credenciais');

  (await cookies()).set(publishingSessionCookie, operator.id, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
  redirect('/admin');
}
