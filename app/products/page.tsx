import type { Metadata } from "next";
import Image from "next/image";

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
                <div className="h-96 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/kinnow.jpg"
                    alt="Fresh Kinnow (Mandarins)"
                    fill
                    className="object-cover"
                  />
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
                <div className="h-96 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/potato.jpg"
                    alt="Fresh Potatoes"
                    fill
                    className="object-cover"
                  />
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
                <div className="h-96 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/rice.jpg"
                    alt="Premium Rice"
                    fill
                    className="object-cover"
                  />
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

