import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations & Infrastructure | International Business System",
  description: "Learn about IBS's supply chain workflow, infrastructure, and compliance certifications for agricultural exports.",
};

export default function Operations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Operations & Infrastructure</h1>
          <p className="text-center text-xl mt-4 text-gray-100">
            End-to-end control over export operations from farm to destination
          </p>
        </div>
      </section>

      {/* Supply Chain Workflow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
              Supply Chain Workflow
            </h2>
            <div className="space-y-8">
              {[
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
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-2xl font-bold text-text">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-gray-700 text-lg">
                <strong>IBS's tight control</strong> over every step ensures minimal damage, reduced wastage, and on-time delivery of export consignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
              Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-text mb-3">Head Office</h3>
                <p className="text-gray-700">
                  <strong>Quetta</strong> — managing export coordination, documentation, and customs clearance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-text mb-3">Procurement Hubs</h3>
                <p className="text-gray-700">
                  <strong>Sargodha</strong> for citrus, <strong>Okara</strong> for potatoes, and <strong>Punjab</strong> for rice.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="text-xl font-bold text-text mb-3">Storage</h3>
                <p className="text-gray-700">
                  Short-term storage and cold handling in <strong>Quetta</strong> for temperature management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🚛</div>
                <h3 className="text-xl font-bold text-text mb-3">Transport Fleet</h3>
                <p className="text-gray-700">
                  Established partnerships with logistics companies experienced in Afghanistan and Central Asia routes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-text mb-3">Packaging</h3>
                <p className="text-gray-700">
                  High-strength, ventilated cartons and export-grade jute bags.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-text mb-3">Quality Control</h3>
                <p className="text-gray-700">
                  End-to-end control over export operations and smooth cargo flow through border crossings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
              Compliance & Certifications
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                IBS ensures full compliance with Pakistan's export and quality standards:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-text">Phytosanitary Certification</strong>
                    <p className="text-gray-600">for all fresh produce shipments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-text">Inspection Reports</strong>
                    <p className="text-gray-600">issued by approved agencies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-text">PHDEC Membership</strong>
                    <p className="text-gray-600">Pakistan Horticulture Development & Export Company</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-text">Customs Compliance</strong>
                    <p className="text-gray-600">Exports conducted under Pakistan Customs Act and Export Policy guidelines</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

