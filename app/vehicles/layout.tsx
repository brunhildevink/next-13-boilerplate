'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Route } from '@/types/routing';

export default function Layout({ children, modal }: { children: React.ReactNode; modal: any }) {
  const pathname = usePathname();

  const returnClassNameActiveRoute = (route: Route) => {
    return `${pathname?.includes(route) ? 'btn-active' : ''} btn btn-secondary btn-sm`;
  };

  return (
    <div>
      <nav className="flex flex-wrap gap-4 flex-row justify-between navbar navbar-expand-md navbar-light bg-light">
        <ul className="flex flex-row gap-4">
          <li>
            <Link className={returnClassNameActiveRoute(Route.Rockets)} href={Route.Rockets}>
              Rockets
            </Link>
          </li>
          <li>
            <Link className={returnClassNameActiveRoute(Route.Ships)} href={Route.Ships}>
              Ships
            </Link>
          </li>
        </ul>
      </nav>
      {children}
      {modal}
    </div>
  );
}
