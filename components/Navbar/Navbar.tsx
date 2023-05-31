'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconRocket from '@/icons/rocket.svg';
import IconPlus from '@/icons/plus-small.svg';
import IconMinus from '@/icons/minus-small.svg';
import { Route } from '@/types/routing';

export const Navbar = () => {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  const returnClassNameActiveRoute = (route: string) => {
    return `${
      pathname?.includes(route) ? 'btn-active' : 'btn-ghost'
    } btn-ghost btn normal-case text-xl`;
  };

  return (
    <nav className="navbar px-0 navbar-expand-lg navbar-light bg-light">
      <ul className="flex flex-row gap-4">
        <li>
          <Link
            href={Route.Home}
            className={`btn-ghost btn normal-case text-xl ${
              pathname === Route.Home ? 'btn-active' : ''
            }`}
            title="home"
          >
            <IconRocket width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href={Route.Vehicles} className={returnClassNameActiveRoute(Route.Vehicles)}>
            Vehicles
          </Link>
        </li>
      </ul>
      <div className="flex flex-row gap-4">
        <button
          type="button"
          title="decrement counter"
          className="btn btn-square btn-sm"
          onClick={() => setCount((count) => count - 1)}
        >
          <IconMinus height={24} width={24} />
        </button>
        <p>{count}</p>
        <button
          type="button"
          title="increment counter"
          className="btn btn-square btn-sm"
          onClick={() => setCount((count) => count + 1)}
        >
          <IconPlus height={24} width={24} />
        </button>
      </div>
    </nav>
  );
};
