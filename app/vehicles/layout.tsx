"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  const returnClassNameActiveRoute = (route: string) => {
    return `${
      pathname?.includes(route) ? "btn-active" : ""
    } btn btn-secondary btn-sm`;
  };

  return (
    <div>
      <nav className="flex flex-wrap gap-4 flex-row justify-between navbar navbar-expand-md navbar-light bg-light">
        <ul className="flex flex-row gap-4">
          <li>
            <Link
              className={returnClassNameActiveRoute("rockets")}
              href="/vehicles/rockets"
            >
              Rockets
            </Link>
          </li>
          <li>
            <Link
              className={returnClassNameActiveRoute("ships")}
              href="/vehicles/ships"
            >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <p>{count}</p>
          <button
            title="increment counter"
            className="btn btn-square btn-sm"
            onClick={() => setCount((count) => count + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}
