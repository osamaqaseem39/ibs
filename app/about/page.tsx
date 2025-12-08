import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | International Business System",
  description: "Learn about IBS - Pakistan's trusted exporter of fresh agricultural produce to Central Asia since 1995.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">About Us</h1>
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
      <section className="py-16 bg-white">
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

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-bold text-text mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Pakistan's most trusted and dependable exporter of fresh agricultural produce to Central Asia, recognized for reliability, fairness, and superior quality.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-bold text-text mb-6">Our Mission</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>To promote Pakistan's agricultural exports through responsible and efficient trade.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>To deliver farm-fresh products that comply with international food safety standards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>To strengthen Pakistan–Central Asia trade through trusted land-route networks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>To support local farmers by ensuring fair prices and sustainable procurement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>To uphold integrity and transparency in all business operations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
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
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Leadership</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
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

      {/* Market Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">Market Presence</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                IBS has built a solid reputation across Central Asia, establishing long-term relationships with importers, wholesalers, and distributors.
              </p>
              <div>
                <h3 className="text-2xl font-bold text-text mb-6 text-center">Primary Export Destinations</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["Afghanistan", "Uzbekistan", "Turkmenistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan"].map((country, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg text-center shadow-md">
                      <div className="text-3xl mb-2">🌍</div>
                      <p className="font-semibold text-text">{country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-primary p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                The company's logistical experience and deep regional understanding have allowed it to navigate changing border conditions, ensuring smooth delivery year-round.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-text mb-4">Our Clientele</h3>
              <p className="text-gray-700 mb-4">IBS serves:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Importers and wholesale traders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Food distributors and bulk suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8">
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
                  <div key={index} className="bg-white p-6 rounded-lg">
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
            <div className="bg-white rounded-lg p-8 shadow-md">
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
    </div>
  );
}

