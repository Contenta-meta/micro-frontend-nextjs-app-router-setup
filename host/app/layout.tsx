import { Header, Footer } from "@guesty/shared";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Micro Frontend Host",
  description: "Host application for our micro-frontends setup",
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
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
