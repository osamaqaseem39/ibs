import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta({
  title: "Contact Us - Get Export Quote | IBS Pakistan",
  description: "Contact International Business System (IBS) for export inquiries, quotes, and partnerships. Located in Quetta, Pakistan. Phone: +92-333-7809555. Email: info@ibsglobal.pk. Address: Room No. 41, Ahmed Complex, M.A. Jinnah Road, Quetta, Pakistan.",
  keywords: [
    "contact IBS Pakistan",
    "export inquiry Pakistan",
    "get export quote",
    "agricultural export contact",
    "Quetta exporters contact",
    "export business inquiry",
    "fresh produce export quote",
    "IBS contact information",
    "export company contact",
    "Central Asia export inquiry",
  ],
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

