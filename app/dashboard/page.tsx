import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-950">Dashboard</h1>
      <p className="mt-3 text-slate-700">
        Login berhasil. Halo, <b>{session?.user?.name}</b> ({session?.user?.email}).
      </p>
    </div>
  );
}
