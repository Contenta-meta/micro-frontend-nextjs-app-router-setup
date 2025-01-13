import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">About Our Micro Frontend</h1>

      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          This is a modern micro frontend application built with Next.js App
          Router and Multi-Zones. It demonstrates how to effectively split a
          large application into smaller, more manageable pieces while
          maintaining a seamless user experience.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>
              Multi-Zones are an approach to micro-frontends that separate a
              large application on a domain into smaller Next.js applications
              that each serve a set of paths.
            </li>
            <li>Next.js App Router architecture</li>
            <li>
              Multi-Zones are an approach to micro-frontends that separate a
              large application on a domain into smaller Next.js applications
              that each serve a set of paths.
            </li>
            <li>Seamless integration between components</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
