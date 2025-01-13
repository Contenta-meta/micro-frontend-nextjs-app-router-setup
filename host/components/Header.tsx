import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Micro Frontend Host</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
