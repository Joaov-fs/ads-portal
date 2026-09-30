'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { publishingSessionCookie } from '@/features/publishing/auth';

export async function logoutAction() {
  (await cookies()).delete(publishingSessionCookie);
  redirect('/acesso-admin');
}
