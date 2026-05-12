import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlobalDataProvider } from "@/context/GlobalDataContext";

export const metadata: Metadata = {
  title: "Bayroof Constructions | Turnkey Roofing Solutions[cite: 1]",
  description: "Expert engineering and premium materials for residential and commercial projects.[cite: 1]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white font-sans relative">
        <GlobalDataProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </GlobalDataProvider>
      </body>
    </html>
  );
}