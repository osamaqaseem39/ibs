import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Export Quote | IBS Pakistan",
  description: "Contact International Business System (IBS) for export inquiries, quotes, and partnerships. Located in Quetta, Pakistan. Phone: +92-333-7809555. Email: info@ibsglobal.pk",
  keywords: [
    "contact IBS Pakistan",
    "export inquiry Pakistan",
    "get export quote",
    "agricultural export contact",
    "Quetta exporters contact",
    "export business inquiry",
    "fresh produce export quote",
  ],
  openGraph: {
    title: "Contact Us - Get Export Quote | IBS Pakistan",
    description: "Contact International Business System (IBS) for export inquiries, quotes, and partnerships. Located in Quetta, Pakistan.",
    url: "https://www.ibsglobal.pk/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ibsglobal.pk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

