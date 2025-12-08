import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Fruit Exporters Pakistan | IBS Quetta",
  description: "International Business System - Exporters of Fresh Fruits, Vegetables & Rice. Established 1995. Delivering freshness from Pakistan to Global Markets via land routes to Central Asia.",
  keywords: "Kinnow Export, Potato Export Pakistan, Rice Exporter, Land Route Trade Central Asia, Fresh Fruit Exporters Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
