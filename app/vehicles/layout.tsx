'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import IconPlus from '@/icons/plus-small.svg';
import IconMinus from '@/icons/minus-small.svg';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  const returnClassNameActiveRoute = (route: string) => {
    return `${pathname?.includes(route) ? 'btn-active' : ''} btn btn-secondary btn-sm`;
  };

  return (
    <div>
      <nav className="flex flex-wrap gap-4 flex-row justify-between navbar navbar-expand-md navbar-light bg-light">
        <ul className="flex flex-row gap-4">
          <li>
            <Link className={returnClassNameActiveRoute('rockets')} href="/vehicles/rockets">
              Rockets
            </Link>
          </li>
          <li>
            <Link className={returnClassNameActiveRoute('ships')} href="/vehicles/ships">
              Ships
            </Link>
          </li>
        </ul>

        <div className="flex flex-row gap-4">
          <button
            title="decrement counter"
            className="btn btn-square btn-sm"
            onClick={() => setCount((count) => count - 1)}
          >
            <IconMinus height={24} width={24} />
          </button>
          <p>{count}</p>
          <button
            title="increment counter"
            className="btn btn-square btn-sm"
            onClick={() => setCount((count) => count + 1)}
          >
            <IconPlus height={24} width={24} />
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}
