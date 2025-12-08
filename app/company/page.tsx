import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company - Market Presence & Competitive Advantages | IBS Pakistan",
  description: "Discover IBS's market presence across Central Asia, competitive advantages, sustainability initiatives, and future outlook. Serving 6 countries with 30+ years of export expertise from Quetta, Pakistan.",
  keywords: [
    "IBS market presence",
    "Central Asia exporters",
    "competitive advantages Pakistan exporters",
    "sustainability agricultural exports",
    "export market Central Asia",
    "Pakistan exporters advantages",
    "agricultural export sustainability",
  ],
  openGraph: {
    title: "Company - Market Presence & Competitive Advantages | IBS Pakistan",
    description: "Discover IBS's market presence across Central Asia, competitive advantages, sustainability initiatives, and future outlook.",
    url: "https://www.ibsglobal.pk/company",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ibsglobal.pk/company",
  },
};

export default function Company() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">Our Company</h1>
          <p className="text-center text-xl mt-4 text-gray-100">
            Market presence, advantages, and future vision
          </p>
        </div>
      </section>

      {/* Market Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Market Presence</h2>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-8 shadow-md border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                IBS has built a solid reputation across Central Asia, establishing long-term relationships with importers, wholesalers, and distributors.
              </p>
              <div>
                <h3 className="text-2xl font-bold text-text mb-6 text-center">Primary Export Destinations</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["Afghanistan", "Uzbekistan", "Turkmenistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan"].map((country, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <div className="text-3xl mb-2">🌍</div>
                      <p className="font-semibold text-text">{country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                The company's logistical experience and deep regional understanding have allowed it to navigate changing border conditions, ensuring smooth delivery year-round.
              </p>
            </div>
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-text mb-4">Our Clientele</h3>
              <p className="text-gray-700 mb-4">IBS serves:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Importers and wholesale traders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Food distributors and bulk suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span>Agricultural procurement firms</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Clients choose IBS for consistent supply, fair pricing, and transparent trade practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Competitive Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "30+ Years Experience",
                  description: "Over three decades of experience in cross-border agricultural exports.",
                  icon: "⏳",
                },
                {
                  title: "Strategic Location",
                  description: "Strategic presence in Quetta ensuring fast overland access to Central Asia.",
                  icon: "📍",
                },
                {
                  title: "Strong Farmer Network",
                  description: "Strong and reliable farmer network in Punjab.",
                  icon: "🤝",
                },
                {
                  title: "Proven Track Record",
                  description: "Proven track record of on-time delivery and compliance.",
                  icon: "✅",
                },
                {
                  title: "Personalized Service",
                  description: "Personalized coordination with each importer.",
                  icon: "💼",
                },
                {
                  title: "Deep Regional Knowledge",
                  description: "Deep knowledge of land-based export regulations and logistics.",
                  icon: "📚",
                },
              ].map((advantage, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-text mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Social Responsibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Sustainability & Social Responsibility</h2>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IBS believes sustainable trade starts with ethical business practices and community development. The company:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Fair Trade Practices",
                    description: "Ensures fair payment to farmers and suppliers.",
                    icon: "⚖️",
                  },
                  {
                    title: "Eco-Friendly Operations",
                    description: "Encourages eco-friendly farming and packaging.",
                    icon: "🌱",
                  },
                  {
                    title: "Local Employment",
                    description: "Provides local employment in sorting, packaging, and logistics.",
                    icon: "👥",
                  },
                  {
                    title: "Regional Development",
                    description: "Supports regional development by strengthening Pakistan–Central Asia trade links.",
                    icon: "🌏",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Future Outlook</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IBS's growth strategy focuses on expanding trade volume and enhancing logistics capacity for Central Asian exports.
              </p>
              <h3 className="text-2xl font-bold text-text mb-6">Upcoming Initiatives</h3>
              <div className="space-y-4">
                {[
                  "Establishing a dedicated export support unit in Quetta.",
                  "Expanding cold handling and storage facilities.",
                  "Introducing modern grading and packing equipment in Punjab.",
                  "Training programs for farmers on export-oriented crop quality and handling.",
                ].map((initiative, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{initiative}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-gray-700 font-semibold">
                  The company's long-term vision is to remain Pakistan's leading land-route exporter of fresh produce to Central Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation back to About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-gray-100 text-text px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

