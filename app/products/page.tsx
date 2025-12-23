import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductImageGallery from "@/components/ProductImageGallery";

export const metadata: Metadata = {
  title: "Products - Premium Kinnow, Potatoes & Rice Exporters | IBS Pakistan",
  description: "Premium quality fresh Kinnow (Mandarins), Potatoes, and Rice exported from Pakistan to Central Asia. Export-grade produce with international certifications. Sourced from Sargodha, Okara, and Punjab's finest farms.",
  keywords: [
    "Kinnow exporters Pakistan",
    "fresh mandarin exporters",
    "potato exporters Pakistan",
    "rice exporters Pakistan",
    "Basmati rice exporters",
    "IRRI rice exporters",
    "export grade fruits",
    "export grade vegetables",
    "fresh produce exporters",
    "Sargodha Kinnow",
    "Okara potatoes",
    "Punjab rice exporters",
  ],
  openGraph: {
    title: "Products - Premium Kinnow, Potatoes & Rice Exporters | IBS Pakistan",
    description: "Premium quality fresh Kinnow, Potatoes, and Rice exported from Pakistan to Central Asia. Export-grade produce with international certifications.",
    url: "https://www.ibsglobal.pk/products",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ibsglobal.pk/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Our Products
          </h1>
          <p className="text-center text-xl mt-4 text-gray-100">
            Premium quality fresh produce sourced from Pakistan's finest agricultural regions
          </p>
        </div>
      </section>

      {/* Products Sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-20 scroll-mt-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                product.id === "potato" ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Image Section */}
                <div className={`relative ${product.id === "potato" ? "lg:col-start-2" : ""}`}>
                  <div className="relative">
                    <ProductImageGallery
                      mainImage={product.image}
                      productName={product.name}
                      variations={product.variationImages}
                      autoSlide={true}
                      slideInterval={5000}
                    />
                    {product.badge && (
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30 pointer-events-none">
                        <span className="text-primary font-bold text-sm uppercase tracking-wide">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${product.id === "potato" ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        {product.category}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
                        {product.name}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-text">Origin</h3>
                        </div>
                        <p className="text-gray-700">{product.origin}</p>
                      </div>

                      {product.varieties && product.varieties.length > 0 && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Varieties</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.varieties.map((variety, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                {variety}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.processing && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Processing</h3>
                          </div>
                          <p className="text-gray-700">{product.processing}</p>
                        </div>
                      )}

                      {product.packaging && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Packaging</h3>
                          </div>
                          <p className="text-gray-700">{product.packaging}</p>
                        </div>
                      )}

                      {product.storage && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Storage</h3>
                          </div>
                          <p className="text-gray-700">{product.storage}</p>
                        </div>
                      )}

                      {product.transportation && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Transportation</h3>
                          </div>
                          <p className="text-gray-700">{product.transportation}</p>
                        </div>
                      )}

                      {product.tradeRoute && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Trade Route</h3>
                          </div>
                          <p className="text-gray-700">{product.tradeRoute}</p>
                        </div>
                      )}

                      {product.certifications && (
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-text">Certifications</h3>
                          </div>
                          <p className="text-gray-700">{product.certifications}</p>
                        </div>
                      )}
                    </div>

                    {product.destinations && product.destinations.length > 0 && (
                      <div className="pt-4">
                        <h3 className="font-bold text-text text-lg mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {product.destinations.length > 1 ? "Destinations" : "Markets"}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {product.destinations.map((destination, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-lg font-semibold border border-primary/20"
                            >
                              {destination}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
