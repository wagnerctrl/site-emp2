import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from "./components/navbar-demo";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeCode Solutions - Soluções Tecnológicas Inovadoras",
  description: "Empresa especializada em desenvolvimento de software, consultoria e suporte técnico. Transformamos ideias em soluções digitais eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}