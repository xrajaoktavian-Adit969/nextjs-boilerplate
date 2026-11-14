import { Pool } from 'pg';

// Satu pool koneksi. Memakai POSTGRES_URL (otomatis dari Vercel Storage) atau DATABASE_URL.
const g = globalThis as unknown as { pool?: Pool };
export const pool =
  g.pool ?? (g.pool = new Pool({ connectionString: process.env.POSTGRES_URL ?? process.env.DATABASE_URL }));
