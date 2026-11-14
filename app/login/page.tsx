'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { authenticate } from '@/app/lib/actions';

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  const field = 'w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200';
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-600 p-4">
      <form action={formAction} className="w-full max-w-sm space-y-4 rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-blue-950">Silakan Masuk dengan akun Anda.</h1>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required placeholder="nama@email.com" className={field} />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">Kata sandi</label>
          <input id="password" name="password" type="password" required minLength={6} className={field} />
        </div>
        <button aria-disabled={isPending} disabled={isPending} className="w-full rounded-full bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60">
          {isPending ? 'Memproses...' : 'Masuk'}
        </button>
        <div className="flex h-6 items-end space-x-1" aria-live="polite">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <Link href="/" className="block text-center text-sm text-blue-700 hover:underline">Kembali ke beranda</Link>
      </form>
    </main>
  );
}
