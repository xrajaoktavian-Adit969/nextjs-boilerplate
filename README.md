# nextjs-dashboard - UTS Web Teknologi (Login + Logout)
Next.js (Node.js) + Tailwind + NextAuth + PostgreSQL. Struktur mengikuti materi P01-P07.

## Menjalankan
```
npm install
npm run setup     # membuat .env + AUTH_SECRET otomatis
```
Isi `POSTGRES_URL` di `.env`, simpan, lalu:
```
npm run seed      # membuat tabel users + akun admin
npm run dev       # http://localhost:3000
```
Login: `admin@uia.ac.id` / `Rahasia123`

## Database
Vercel > Storage > Create Database > Postgres (Neon) paket Free > Connect Project.
Salin `POSTGRES_URL` (yang ada -pooler) ke `.env`. `npm run seed` lokal akan mengisi database cloud itu.

## GitHub & Vercel
`git init`, `git add .`, `git commit -m "UTS"`, `git branch -M main`, `git remote add origin <url>`, `git push -u origin main`.
Import repo di Vercel, hubungkan Storage, tambah env `AUTH_SECRET`, deploy.
Repo public atau invite `adhit8`.
