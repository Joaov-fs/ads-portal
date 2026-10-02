'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { consentStorageKey } from './consent-defaults';

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(consentStorageKey);

    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function applyChoice(choice: Choice) {
  try {
    window.localStorage.setItem(consentStorageKey, choice);
  } catch {
    // Sem armazenamento: a escolha vale só nesta visita.
  }

  const state = {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };

  window.gtag?.('consent', 'update', state);

  window.clarity?.('consent', choice === 'granted');
}

export const reopenConsentEvent = 'portalfina:reabrir-cookies';

/** Faixa de consentimento: aparece até a pessoa escolher e pode ser reaberta pela política de cookies. */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (readChoice() === null) setOpen(true);

    const reopen = () => setOpen(true);

    window.addEventListener(reopenConsentEvent, reopen);

    return () => window.removeEventListener(reopenConsentEvent, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: Choice) => {
    applyChoice(choice);
    setOpen(false);
  };

  return (
    <div
      aria-label="Preferências de cookies"
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-3xl rounded-2xl border border-ads-border bg-white p-4 shadow-2xl sm:p-5"
      role="dialog"
    >
      <p className="text-sm leading-6 text-ads-muted">
        Usamos cookies para medir a audiência e exibir anúncios, que mantêm o
        portal gratuito. Se você recusar, os anúncios continuam, mas sem
        personalização. Veja a{' '}
        <Link
          className="font-semibold text-ads-primary-strong underline underline-offset-4"
          href="/politica-de-cookies"
        >
          Política de Cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="rounded-full bg-ads-primary-strong px-5 py-2 text-sm font-bold text-white hover:opacity-90"
          onClick={() => choose('granted')}
          type="button"
        >
          Aceitar
        </button>
        <button
          className="rounded-full border border-ads-border px-5 py-2 text-sm font-bold text-ads-secondary hover:bg-ads-surface"
          onClick={() => choose('denied')}
          type="button"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

/** Botão para a pessoa mudar de ideia depois. */
export function ConsentPreferencesButton() {
  return (
    <button
      className="font-semibold text-ads-primary-strong underline underline-offset-4"
      onClick={() => window.dispatchEvent(new Event(reopenConsentEvent))}
      type="button"
    >
      Alterar minha escolha de cookies
    </button>
  );
}
