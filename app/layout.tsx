import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = { title: 'Web Teknologi - UIA' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
