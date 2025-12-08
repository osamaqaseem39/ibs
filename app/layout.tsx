import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jost, gazpacho } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibsglobal.pk"),
  title: {
    default: "IBS - Fresh Fruit & Vegetable Exporters Pakistan | Quetta Since 1995",
    template: "%s | International Business System",
  },
  description: "International Business System (IBS) - Leading exporters of fresh Kinnow, Potatoes, and Rice from Pakistan to Central Asia. Established 1995 in Quetta. Premium quality agricultural produce via reliable land routes.",
  keywords: [
    "fresh fruit exporters Pakistan",
    "vegetable exporters Pakistan",
    "rice exporters Pakistan",
    "Kinnow exporters",
    "potato exporters Pakistan",
    "Basmati rice exporters",
    "Central Asia trade",
    "land route exports",
    "agricultural exports Pakistan",
    "Quetta exporters",
    "fresh produce exporters",
    "export grade fruits",
    "export grade vegetables",
    "Pakistan to Afghanistan exports",
    "Uzbekistan trade",
    "Tajikistan exports",
  ],
  authors: [{ name: "International Business System" }],
  creator: "International Business System",
  publisher: "International Business System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ibsglobal.pk",
    siteName: "International Business System",
    title: "IBS - Fresh Fruit & Vegetable Exporters Pakistan | Quetta Since 1995",
    description: "Leading exporters of fresh Kinnow, Potatoes, and Rice from Pakistan to Central Asia. Established 1995. Premium quality agricultural produce via reliable land routes.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "International Business System Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IBS - Fresh Fruit & Vegetable Exporters Pakistan",
    description: "Leading exporters of fresh Kinnow, Potatoes, and Rice from Pakistan to Central Asia since 1995.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${gazpacho.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
