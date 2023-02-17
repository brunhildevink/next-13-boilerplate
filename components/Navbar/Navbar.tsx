'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconRocket from '@/icons/rocket.svg';

export const Navbar = () => {
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
            href="/"
            className={`btn-ghost btn normal-case text-xl ${pathname === '/' ? 'btn-active' : ''}`}
            title="home"
          >
            <IconRocket width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href="/vehicles/rockets" className={returnClassNameActiveRoute('vehicles')}>
            Vehicles
          </Link>
        </li>
      </ul>
    </nav>
  );
};
