import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-green-600 text-white p-4">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}