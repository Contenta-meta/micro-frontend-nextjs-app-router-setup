import Header from "@/components/Header";
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
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
