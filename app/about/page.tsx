import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta, generateOrganizationSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/metadata";
import Script from "next/script";

export const metadata: Metadata = genMeta({
  title: "About Us - Pakistan's Trusted Agricultural Exporters Since 1995",
  description: "Learn about International Business System (IBS) - Pakistan's trusted exporter of fresh fruits, vegetables, and rice to Central Asia since 1995. Headquartered in Quetta with 30+ years of export excellence. Founded by Mr. Kashif Naseem, specializing in land-route exports to Uzbekistan, Turkmenistan, Kazakhstan, Kyrgyzstan, and Tajikistan.",
  keywords: [
    "about IBS Pakistan",
    "agricultural exporters Pakistan",
    "Quetta exporters",
    "fresh produce exporters history",
    "Pakistan Central Asia trade",
    "export company Pakistan",
    "agricultural export business",
    "IBS company history",
    "Kashif Naseem",
    "export company Quetta",
    "land route exporters",
  ],
  path: "/about",
});

export default function About() {
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);
  const faqSchema = generateFAQSchema([
    {
      question: "When was International Business System (IBS) established?",
      answer: "International Business System (IBS) was established in 1995 in Quetta, Pakistan, and has been exporting fresh fruits, vegetables, and rice to Central Asia for over 30 years.",
    },
    {
      question: "Where is IBS headquartered?",
      answer: "IBS is headquartered in Quetta, Balochistan, Pakistan, strategically positioned near the Afghanistan border, serving as a direct trade gateway to Central Asia.",
    },
    {
      question: "What products does IBS export?",
      answer: "IBS exports fresh Kinnow (Mandarins), Potatoes, and Rice (Basmati and IRRI varieties) from Pakistan to Central Asian countries including Uzbekistan, Turkmenistan, Kazakhstan, Kyrgyzstan, and Tajikistan.",
    },
    {
      question: "What are IBS's core values?",
      answer: "IBS's core values include Integrity, Commitment, Quality, Reliability, Sustainability, and Tradition. The company conducts business with honesty, commitment, and transparency in all operations.",
    },
    {
      question: "Who leads International Business System?",
      answer: "IBS is led by Mr. Kashif Naseem, the Proprietor, who has over 25 years of experience in agricultural trade and logistics, specializing in border trade dynamics and quality control.",
    },
  ]);

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">About Us</h1>
          <p className="text-center text-xl mt-4 text-gray-100">
            Three decades of excellence in agricultural exports
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">Executive Summary</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Established in 1995, International Business System (IBS) has become one of Pakistan's respected and time-tested export enterprises specializing in fresh fruits, vegetables, and rice. Over nearly three decades, IBS has played a leading role in connecting Pakistan's farms with international buyers across the Central Asian Republics (CARs) through reliable, land-based trade routes.
              </p>
              <p>
                Headquartered in Quetta, Balochistan, IBS is strategically positioned near the Afghanistan border, serving as a direct trade gateway to Central Asia. All exports are carried out exclusively via land routes, ensuring quick and efficient overland delivery of perishable goods. This traditional trading model allows IBS to maintain full control over handling, logistics, and documentation while providing clients with dependable and cost-effective supply solutions.
              </p>
              <p>
                IBS's operations are guided by the principles of honesty, commitment, and quality assurance. The company's enduring relationships with growers, logistic partners, and importers across the region have enabled it to maintain an impeccable reputation for consistent performance and ethical practices.
              </p>
              <p>
                Today, IBS stands as a reliable export house representing Pakistan's agricultural excellence through its exports of Mandarins (Kinnow), Potatoes, and Rice — each handled with care, precision, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Founded in the heart of Quetta's trading community, International Business System began as a small export office and has grown into a respected name in cross-border agricultural trade. Through decades of experience, IBS has mastered the art of managing land-route exports — from sourcing and quality control to documentation and final delivery.
              </p>
              <p>
                The company works closely with farmers, packaging units, and transport operators, ensuring that every shipment meets buyer expectations in terms of freshness, grading, and packaging standards. Its export operations emphasize transparency, accuracy, and punctuality.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-text mb-4">Core Business Activities</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Export of Fresh Fruits (Mandarins/Kinnow)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Export of Fresh Vegetables (Potatoes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Export of Rice (Basmati and IRRI varieties)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Land-based export logistics and documentation management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl shadow-lg border border-primary/20">
                <h2 className="text-3xl font-heading font-bold text-text mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Pakistan's most trusted and dependable exporter of fresh agricultural produce to Central Asia, recognized for reliability, fairness, and superior quality.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-xl shadow-lg border border-accent/20">
                <h2 className="text-3xl font-heading font-bold text-text mb-6">Our Mission</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">✓</span>
                    <span>To promote Pakistan's agricultural exports through responsible and efficient trade.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">✓</span>
                    <span>To deliver farm-fresh products that comply with international food safety standards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">✓</span>
                    <span>To strengthen Pakistan–Central Asia trade through trusted land-route networks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">✓</span>
                    <span>To support local farmers by ensuring fair prices and sustainable procurement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">✓</span>
                    <span>To uphold integrity and transparency in all business operations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Integrity",
                  description: "Conducting business with fairness and transparency.",
                  icon: "🛡️",
                },
                {
                  title: "Commitment",
                  description: "Honoring every promise, shipment, and timeline.",
                  icon: "🤝",
                },
                {
                  title: "Quality",
                  description: "Maintaining consistent standards from farm to delivery.",
                  icon: "⭐",
                },
                {
                  title: "Reliability",
                  description: "Ensuring consistent performance in every consignment.",
                  icon: "⚡",
                },
                {
                  title: "Sustainability",
                  description: "Promoting responsible sourcing and minimal wastage.",
                  icon: "🌱",
                },
                {
                  title: "Tradition",
                  description: "Preserving Pakistan's long-standing trading heritage.",
                  icon: "📜",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-text mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Leadership</h2>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center text-white text-6xl font-bold flex-shrink-0 shadow-lg">
                  KN
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text mb-4">Mr. Kashif Naseem</h3>
                  <p className="text-lg text-primary font-semibold mb-4">Proprietor – International Business System</p>
                  <p className="text-gray-700 leading-relaxed">
                    With more than 25 years of experience in agricultural trade and logistics, Mr. Naseem leads IBS with integrity and vision. His practical knowledge of border trade dynamics, documentation, and quality control enables IBS to maintain its reputation as a trusted name among Central Asian importers.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    His leadership reflects the values of honesty, hard work, and long-term partnership that define IBS's identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Company Page */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              Learn More About Our Company
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our market presence, competitive advantages, sustainability initiatives, and future outlook.
            </p>
            <Link
              href="/company"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Company Details
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
