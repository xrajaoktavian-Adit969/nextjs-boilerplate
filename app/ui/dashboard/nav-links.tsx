'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, DocumentDuplicateIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
            pathname === href ? 'bg-sky-100 text-blue-600' : 'bg-gray-50'
          }`}
        >
          <Icon className="w-6" />
          <p className="hidden md:block">{name}</p>
        </Link>
      ))}
    </>
  );
}
