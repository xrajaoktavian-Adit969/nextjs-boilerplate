import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main
      className="flex min-h-screen flex-col gap-4 p-3 md:p-6"
      style={{
        backgroundImage: "url('/gedung-uia.jpg'), linear-gradient(135deg,#e0edff,#2563eb)",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      <header className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 px-5 py-3 shadow-lg">
        <Image src="/logo/uia-logo.png" width={260} height={90} alt="Universitas Islam As-Syafi'iyah" priority />
        <nav className="hidden items-center gap-5 text-sm font-medium text-white md:flex">
          <span className="rounded-full border border-sky-300 px-4 py-2">Beranda</span>
          <span>Berilmu</span>
          <span>Berakhlak</span>
          <span>Berdaya Saing</span>
        </nav>
      </header>
      <section className="flex flex-1 items-center">
        <div className="max-w-xl rounded-3xl bg-white/85 p-8 shadow-xl backdrop-blur md:p-10">
          <div className="mb-6 flex gap-2">
            <span className="h-1.5 w-16 rounded-full bg-blue-600" />
            <span className="h-1.5 w-16 rounded-full bg-green-600" />
          </div>
          <h1 className="text-5xl font-extrabold text-blue-950 md:text-6xl">
            Selamat <span className="text-blue-700">Datang!</span>
          </h1>
          <p className="mt-6 text-xl text-slate-700">
            Ini adalah situs web pembelajaran <b className="text-blue-700">Mata Kuliah Web Teknologi</b>, Dosen
            Pengampu <b className="text-slate-900">Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-blue-700 px-7 py-3 text-lg font-semibold text-white hover:bg-blue-800"
          >
            Log in <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
      <footer className="rounded-3xl bg-blue-950 px-6 py-5 text-sm text-white">
        <p>Web ini dikerjakan oleh <b>Adit Ramadhan</b> | S3420230033</p>
        <p className="mt-1 text-blue-200">&copy; 2026 All Rights Reserved. Teknik Informatika - TFUIA</p>
      </footer>
    </main>
  );
}
