import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GlobalDataProvider } from "@/context/GlobalData";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCV Multiverse System LLC",
  description: "Enterprise Heavy Engineering and Advanced Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cabin.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#112318]">
      <GlobalDataProvider>
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        </GlobalDataProvider>
      </body>
    </html>
  );
}