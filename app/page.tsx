import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { generateMetadata as genMeta, generateOrganizationSchema, generateBreadcrumbSchema, generateWebSiteSchema } from "@/lib/metadata";
import Script from "next/script";

export const metadata: Metadata = genMeta({
  title: "IBS - Fresh Fruit & Vegetable Exporters Pakistan | Quetta Since 1995",
  description: "International Business System (IBS) - Leading exporters of fresh Kinnow, Potatoes, and Rice from Pakistan to Central Asia. Established 1995 in Quetta. Premium quality agricultural produce via reliable land routes. Serving Uzbekistan, Turkmenistan, Kazakhstan, Kyrgyzstan, and Tajikistan.",
  keywords: [
    "fresh fruit exporters Pakistan",
    "vegetable exporters Pakistan",
    "rice exporters Pakistan",
    "Kinnow exporters",
    "potato exporters Pakistan",
    "Basmati rice exporters",
    "Central Asia trade",
    "land route exports",
    "agricultural exports Pakistan",
    "Quetta exporters",
    "fresh produce exporters",
    "export grade fruits",
    "export grade vegetables",
    "Pakistan to Afghanistan exports",
    "Uzbekistan trade",
    "Tajikistan exports",
    "Turkmenistan exporters",
    "Kazakhstan trade",
    "Kyrgyzstan exports",
  ],
  path: "/",
  image: "/images/herobg.png",
});

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-40 min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/herobg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-primary/40"></div>
        
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Pattern (optional, for texture) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-sm font-semibold text-white">Established 1995</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight animate-fade-in">
              Delivering Freshness from Pakistan to Global Markets
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The trusted land-route gateway to Central Asia for Fresh Fruits, Vegetables, & Rice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-primary/50"
              >
                Explore Our Products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                About International Business System
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Three decades of excellence in agricultural exports
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-text mb-4">
                    Connecting Pakistan to Central Asia
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Established in 1995, International Business System (IBS) has become one of Pakistan's respected and time-tested export enterprises specializing in fresh fruits, vegetables, and rice. Over nearly three decades, IBS has played a leading role in connecting Pakistan's farms with international buyers across the Central Asian Republics (CARs) through reliable, land-based trade routes.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Headquartered in Quetta, Balochistan, IBS is strategically positioned near the Afghanistan border, serving as a direct trade gateway to Central Asia. All exports are carried out exclusively via land routes, ensuring quick and efficient overland delivery of perishable goods.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="text-3xl mb-3">🌍</div>
                    <h4 className="font-bold text-text mb-2">5 Countries</h4>
                    <p className="text-sm text-gray-600">Serving across Central Asia</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="text-3xl mb-3">📦</div>
                    <h4 className="font-bold text-text mb-2">3 Products</h4>
                    <p className="text-sm text-gray-600">Premium quality exports</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Key Features */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-2">Quality Assurance</h4>
                      <p className="text-gray-700">Maintaining consistent standards from farm to delivery with rigorous quality control processes.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl border border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-2">Land-Route Expertise</h4>
                      <p className="text-gray-700">Exclusive overland delivery ensuring quick and efficient transport of perishable goods.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-2">Trusted Partnerships</h4>
                      <p className="text-gray-700">Building long-term relationships with farmers, logistic partners, and importers across the region.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl border border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-2">Ethical Practices</h4>
                      <p className="text-gray-700">Conducting business with honesty, commitment, and transparency in all operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA to About Page */}
            <div className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats / Highlights */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-primary mb-4 font-heading">30+</div>
              <h3 className="text-2xl font-semibold text-text mb-3">Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">Three decades of trusted export excellence</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-accent mb-4 font-heading">100%</div>
              <h3 className="text-2xl font-semibold text-text mb-3">Land-Route Specialists</h3>
              <p className="text-gray-600 leading-relaxed">Exclusive overland delivery expertise</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-accent mb-4 font-heading">100%</div>
              <h3 className="text-2xl font-semibold text-text mb-3">Freshness Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">Quality assured from farm to destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality produce sourced directly from Pakistan's finest farms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-red-600 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Export Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">
              Get in touch with us today for competitive pricing and reliable delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
