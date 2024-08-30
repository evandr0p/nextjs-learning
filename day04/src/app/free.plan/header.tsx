// src/app/subscribe/header.tsx

"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-lg">
      <nav className="flex justify-center p-8 w-full">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link
              id="link"
              href="/free.plan?option=analize"
              className="text-blue-500 hover:underline"
            >
              Analize Strings
            </Link>
          </li>
          <li>
            <Link
              id="link"
              href="/free.plan?option=compare"
              className="text-blue-500 hover:underline"
            >
              Compare Strings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
