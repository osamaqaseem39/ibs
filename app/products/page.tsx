import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | International Business System",
  description: "Premium quality Kinnow, Potatoes, and Rice exported from Pakistan to Central Asia. Fresh, export-grade produce with international certifications.",
};

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">Our Products</h1>
          <p className="text-center text-xl mt-4 text-gray-100">
            Premium quality fresh produce sourced from Pakistan's finest agricultural regions
          </p>
        </div>
      </section>

      {/* Kinnow Section */}
      <section id="kinnow" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-48 h-48 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">Fresh Mandarin (Kinnow)</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-text mb-2">Origin:</h3>
                    <p>Sargodha, Punjab — globally known for premium-quality citrus.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Features:</h3>
                    <p>Bright orange skin, high juice content, and balanced sweetness.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Processing:</h3>
                    <p>Harvested at peak maturity, washed, waxed, graded, and packed in ventilated cartons.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Transportation:</h3>
                    <p>Shipped through Quetta–Chaman–Kandahar route for Central Asian distribution.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Destinations:</h3>
                    <p className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded">Afghanistan</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Uzbekistan</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Turkmenistan</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Kazakhstan</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Tajikistan</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Kyrgyzstan</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potatoes Section */}
      <section id="potato" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">Fresh Potatoes</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-text mb-2">Origin:</h3>
                    <p>Okara, Punjab — Pakistan's leading potato-growing region.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Varieties:</h3>
                    <p className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded">Lady Rosetta</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Mozika</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Sante</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Quality Control:</h3>
                    <p>Sorted by size, skin smoothness, and internal quality.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Packaging:</h3>
                    <p>Exported in 20 kg to 50 kg jute or mesh bags, labeled as per buyer needs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Storage & Handling:</h3>
                    <p>Stored in controlled facilities before transit to maintain freshness.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Markets:</h3>
                    <p>Afghanistan and Central Asian Republics.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="h-96 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <svg className="w-48 h-48 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Section */}
      <section id="rice" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-96 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <svg className="w-48 h-48 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">Rice (Basmati & IRRI Varieties)</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-text mb-2">Origin:</h3>
                    <p>Punjab's fertile rice-growing regions.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Varieties:</h3>
                    <p className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded">Super Basmati</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">1121 Basmati</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">IRRI-6</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Processing:</h3>
                    <p>Hygienically milled, cleaned, and packed in 5–50 kg export-standard bags.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Certifications:</h3>
                    <p>Fumigation and phytosanitary documentation provided per shipment.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Trade Route:</h3>
                    <p>Transported by road via Afghanistan to Central Asian markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

