import React from "react";
import Link from "next/link";
import { cn } from "../../utils/cn";
import "../../styles/globals.css";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header 
      className={cn(
        "bg-gray-800 text-white p-4 shadow-md",
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Guesty</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
