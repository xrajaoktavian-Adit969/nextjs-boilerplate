import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { pool } from '@/app/lib/db';
import { authConfig } from './auth.config';

type User = { id: string; name: string; email: string; password: string };

async function getUser(email: string): Promise<User | undefined> {
  const { rows } = await pool.query<User>('SELECT * FROM users WHERE email = $1', [email]);
  return rows[0];
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);
        if (!parsed.success) return null;
        const user = await getUser(parsed.data.email);
        if (!user) return null;
        return (await bcrypt.compare(parsed.data.password, user.password)) ? user : null;
      },
    }),
  ],
});
