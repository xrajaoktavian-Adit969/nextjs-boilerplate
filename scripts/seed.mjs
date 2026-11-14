// Membuat tabel users + 1 akun awal. Jalankan: npm run seed
import pg from 'pg';
import bcrypt from 'bcryptjs';

const url = process.env.POSTGRES_URL ?? process.env.DATABASE_URL;
if (!url) {
  console.error('POSTGRES_URL di file .env masih kosong. Isi dulu, simpan, lalu ulangi.');
  process.exit(1);
}
const name = process.env.SEED_NAME ?? 'Admin UIA';
const email = process.env.SEED_EMAIL ?? 'admin@uia.ac.id';
const password = process.env.SEED_PASSWORD ?? 'Rahasia123';

const pool = new pg.Pool({ connectionString: url, connectionTimeoutMillis: 15000 });
try {
  await pool.query(`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL)`);
  await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
     ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, password = EXCLUDED.password`,
    [name, email, await bcrypt.hash(password, 10)],
  );
  console.log(`Seed selesai. Login: ${email} / ${password}`);
} catch (e) {
  console.error('Seed gagal:', e.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}
