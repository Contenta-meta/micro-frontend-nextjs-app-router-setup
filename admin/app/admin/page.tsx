import Link from "next/link";
import React from "react";

export default async function AdminApp({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const name = (await searchParams).name;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-4">
        Welcome {name} to the admin dashboard. Here you can manage users and settings.
      </p>
      <Link
      href="/"
      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
    >
      Back to Home
    </Link>
    </div>
  );
}
