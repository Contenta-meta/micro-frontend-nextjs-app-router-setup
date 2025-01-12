import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Micro Frontend Host App</h1>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Link
          href={"/admin"}
          className={`${"bg-blue-500"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          Admin
        </Link>
        <Link
          href={"/user"}
          className={`${"bg-green-500"} hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
        >
          User
        </Link>
        <Link
          href={"/guest"}
          className={`${"bg-yellow-500"} hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded`}
        >
          Guest
        </Link>
      </div>
    </main>
  );
}
