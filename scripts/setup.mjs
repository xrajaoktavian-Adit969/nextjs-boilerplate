// Membuat .env otomatis + AUTH_SECRET acak. Jalankan: npm run setup
import fs from 'node:fs';
import crypto from 'node:crypto';

if (fs.existsSync('.env')) {
  console.log('.env sudah ada, tidak diubah.');
} else {
  const secret = crypto.randomBytes(32).toString('base64');
  fs.writeFileSync('.env', fs.readFileSync('.env.example', 'utf8').replace('AUTH_SECRET=', `AUTH_SECRET=${secret}`));
  console.log('.env dibuat. Sekarang isi POSTGRES_URL di dalamnya.');
}
