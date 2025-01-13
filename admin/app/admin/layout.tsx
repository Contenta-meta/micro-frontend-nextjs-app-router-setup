import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer } from "@guesty/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="bg-red-600 text-white p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <main className="container mx-auto p-4 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
