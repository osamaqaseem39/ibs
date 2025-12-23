import { Metadata } from "next";

const baseUrl = "https://www.ibsglobal.pk";
const siteName = "International Business System";
const defaultImage = "/images/logo.png";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path,
  image = defaultImage,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadata): Metadata {
  const url = `${baseUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: "International Business System" }],
    creator: "International Business System",
    publisher: "International Business System",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "International Business System",
    alternateName: "IBS",
    url: baseUrl,
    logo: `${baseUrl}${defaultImage}`,
    description:
      "Leading exporter of fresh fruits, vegetables, and rice from Pakistan to Central Asia since 1995.",
    foundingDate: "1995",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room No. 41, Ahmed Complex, M.A. Jinnah Road",
      addressLocality: "Quetta",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-333-7809555",
      contactType: "Customer Service",
      email: "info@ibsglobal.pk",
      areaServed: ["PK", "AF", "UZ", "TM", "KZ", "KG", "TJ"],
      availableLanguage: ["en", "ur"],
    },
    sameAs: [],
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Country",
        name: "Afghanistan",
      },
      {
        "@type": "Country",
        name: "Uzbekistan",
      },
      {
        "@type": "Country",
        name: "Turkmenistan",
      },
      {
        "@type": "Country",
        name: "Kazakhstan",
      },
      {
        "@type": "Country",
        name: "Kyrgyzstan",
      },
      {
        "@type": "Country",
        name: "Tajikistan",
      },
    ],
  };
}

export function generateBreadcrumbSchema(paths: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: paths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: path.name,
      item: `${baseUrl}${path.url}`,
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  category: string;
  origin: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "International Business System",
    },
    manufacturer: {
      "@type": "Organization",
      name: "International Business System",
    },
    areaServed: [
      "Afghanistan",
      "Uzbekistan",
      "Turkmenistan",
      "Kazakhstan",
      "Kyrgyzstan",
      "Tajikistan",
    ],
    origin: product.origin,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "International Business System",
    alternateName: "IBS",
    url: baseUrl,
    description:
      "Leading exporter of fresh fruits, vegetables, and rice from Pakistan to Central Asia since 1995.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "International Business System",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "International Business System",
    alternateName: "IBS",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/images/logo.png`,
    description:
      "Leading exporter of fresh fruits, vegetables, and rice from Pakistan to Central Asia since 1995.",
    foundingDate: "1995",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room No. 41, Ahmed Complex, M.A. Jinnah Road",
      addressLocality: "Quetta",
      addressRegion: "Balochistan",
      postalCode: "",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1965,
      longitude: 67.0092,
    },
    telephone: "+92-333-7809555",
    email: "info@ibsglobal.pk",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Country",
        name: "Afghanistan",
      },
      {
        "@type": "Country",
        name: "Uzbekistan",
      },
      {
        "@type": "Country",
        name: "Turkmenistan",
      },
      {
        "@type": "Country",
        name: "Kazakhstan",
      },
      {
        "@type": "Country",
        name: "Kyrgyzstan",
      },
      {
        "@type": "Country",
        name: "Tajikistan",
      },
    ],
  };
}

