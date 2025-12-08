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
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Company Overview</h2>
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
                <h2 className="text-3xl font-bold text-text mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Pakistan's most trusted and dependable exporter of fresh agricultural produce to Central Asia, recognized for reliability, fairness, and superior quality.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-text mb-6">Our Mission</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">Core Values</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">Leadership</h2>
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
    </div>
  );
}

