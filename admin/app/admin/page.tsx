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
    </div>
  );
}
