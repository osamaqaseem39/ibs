import type { Metadata } from "next";
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/metadata";
import Script from "next/script";

export const metadata: Metadata = genMeta({
  title: "Operations & Infrastructure - Supply Chain & Certifications | IBS",
  description: "Learn about IBS's supply chain workflow, infrastructure, quality control processes, and compliance certifications for agricultural exports from Pakistan to Central Asia. Land-route logistics expertise. 7-step process from farm selection to delivery. PHDEC membership, phytosanitary certification, customs compliance.",
  keywords: [
    "export operations Pakistan",
    "supply chain agricultural exports",
    "export infrastructure Pakistan",
    "export certifications",
    "quality control exports",
    "land route logistics",
    "export compliance Pakistan",
    "agricultural export process",
    "export documentation",
    "PHDEC membership",
    "phytosanitary certification",
    "export workflow",
    "Quetta export infrastructure",
  ],
  path: "/operations",
});

export default function Operations() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Operations", url: "/operations" },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What is IBS's supply chain workflow?",
      answer: "IBS follows a 7-step supply chain process: 1) Farm Selection, 2) Field Inspection, 3) Grading & Sorting, 4) Packing, 5) Storage, 6) Transportation, and 7) Documentation. This ensures quality and reliability at every stage.",
    },
    {
      question: "Where is IBS's infrastructure located?",
      answer: "IBS has its head office in Quetta managing export coordination, documentation, and customs clearance. Procurement hubs are in Sargodha for citrus, Okara for potatoes, and Punjab for rice. Storage and cold handling facilities are in Quetta.",
    },
    {
      question: "What certifications does IBS have?",
      answer: "IBS maintains Phytosanitary Certification for all fresh produce shipments, Inspection Reports from approved agencies, PHDEC (Pakistan Horticulture Development & Export Company) Membership, and full Customs Compliance under Pakistan Customs Act and Export Policy guidelines.",
    },
    {
      question: "How does IBS transport products to Central Asia?",
      answer: "IBS transports products exclusively via land routes through Quetta, Chaman, and Afghan routes into Central Asia. The company has established partnerships with logistics companies experienced in Afghanistan and Central Asia routes.",
    },
    {
      question: "What quality control measures does IBS implement?",
      answer: "IBS maintains end-to-end control over export operations with continuous monitoring of harvesting and storage conditions, uniform sizing and quality classification, rigorous quality control processes, and smooth cargo flow through border crossings.",
    },
  ]);

  const workflowSteps = [
    {
      step: "1",
      title: "Farm Selection",
      description: "Direct contracts with farmers based on crop quality and reliability.",
      icon: "🌾",
    },
    {
      step: "2",
      title: "Field Inspection",
      description: "Continuous monitoring of harvesting and storage conditions.",
      icon: "🔍",
    },
    {
      step: "3",
      title: "Grading & Sorting",
      description: "Uniform sizing and quality classification.",
      icon: "📦",
    },
    {
      step: "4",
      title: "Packing",
      description: "Sturdy, export-grade packaging for long overland journeys.",
      icon: "📋",
    },
    {
      step: "5",
      title: "Storage",
      description: "Short-term cold handling facilities in Quetta for temperature-sensitive produce.",
      icon: "❄️",
    },
    {
      step: "6",
      title: "Transportation",
      description: "Overland movement via Quetta, Chaman, and Afghan routes into Central Asia.",
      icon: "🚚",
    },
    {
      step: "7",
      title: "Documentation",
      description: "Compliance with Pakistan Customs, PHDEC, and phytosanitary standards.",
      icon: "📄",
    },
  ];

  const infrastructureItems = [
    {
      icon: "🏢",
      title: "Head Office",
      description: "Quetta — managing export coordination, documentation, and customs clearance.",
      highlight: "Quetta",
    },
    {
      icon: "📍",
      title: "Procurement Hubs",
      description: "Sargodha for citrus, Okara for potatoes, and Punjab for rice.",
      highlight: "Multiple Locations",
    },
    {
      icon: "❄️",
      title: "Storage",
      description: "Short-term storage and cold handling in Quetta for temperature management.",
      highlight: "Quetta",
    },
    {
      icon: "🚛",
      title: "Transport Fleet",
      description: "Established partnerships with logistics companies experienced in Afghanistan and Central Asia routes.",
      highlight: "Reliable Partners",
    },
    {
      icon: "📦",
      title: "Packaging",
      description: "High-strength, ventilated cartons and export-grade jute bags.",
      highlight: "Export-Grade",
    },
    {
      icon: "✅",
      title: "Quality Control",
      description: "End-to-end control over export operations and smooth cargo flow through border crossings.",
      highlight: "End-to-End",
    },
  ];

  const certifications = [
    {
      title: "Phytosanitary Certification",
      description: "for all fresh produce shipments",
    },
    {
      title: "Inspection Reports",
      description: "issued by approved agencies",
    },
    {
      title: "PHDEC Membership",
      description: "Pakistan Horticulture Development & Export Company",
    },
    {
      title: "Customs Compliance",
      description: "Exports conducted under Pakistan Customs Act and Export Policy guidelines",
    },
  ];

  return (
    <>
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
      <section className="bg-gradient-to-r from-primary via-red-700 to-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Operations & Infrastructure
            </h1>
            <p className="text-center text-xl md:text-2xl mt-4 text-gray-100 leading-relaxed">
              End-to-end control over export operations from farm to destination
            </p>
          </div>
        </div>
      </section>

      {/* Supply Chain Workflow */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
                Supply Chain Workflow
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive process ensures quality and reliability at every stage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {workflowSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-xl border-l-4 border-accent shadow-md">
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                <strong className="text-accent text-xl">IBS's tight control</strong> over every step ensures minimal damage, reduced wastage, and on-time delivery of export consignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
                Infrastructure
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strategic locations and facilities supporting seamless export operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {infrastructureItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2 group"
                >
                  <div className="text-5xl lg:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Full compliance with Pakistan's export and quality standards
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-accent/30"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-text mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

