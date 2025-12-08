import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Delivering Freshness from Pakistan to Global Markets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Established in 1995. The trusted land-route gateway to Central Asia for Fresh Fruits, Vegetables, & Rice.
            </p>
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
      </section>

      {/* Intro Component */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              Connecting Pakistan to Central Asia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Headquartered in Quetta, IBS is strategically positioned to serve Afghanistan, Uzbekistan, and Tajikistan via reliable land routes. 
              Over nearly three decades, IBS has played a leading role in connecting Pakistan's farms with international buyers across the Central Asian Republics (CARs) through reliable, land-based trade routes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats / Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary mb-4">30+</div>
              <h3 className="text-xl font-semibold text-text mb-2">Years Experience</h3>
              <p className="text-gray-600">Three decades of trusted export excellence</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-xl font-semibold text-text mb-2">Land-Route Specialists</h3>
              <p className="text-gray-600">Exclusive overland delivery expertise</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">Freshness Guaranteed</h3>
              <p className="text-gray-600">Quality assured from farm to destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kinnow Card */}
            <Link href="/products#kinnow" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    Mandarins (Kinnow)
                  </h3>
                  <p className="text-gray-600">
                    Premium quality citrus from Sargodha, Punjab. Bright orange skin with high juice content.
                  </p>
                </div>
              </div>
            </Link>

            {/* Potato Card */}
            <Link href="/products#potato" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    Fresh Potatoes
                  </h3>
                  <p className="text-gray-600">
                    Export-grade potatoes from Okara, Punjab. Available in multiple varieties.
                  </p>
                </div>
              </div>
            </Link>

            {/* Rice Card */}
            <Link href="/products#rice" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    Premium Rice
                  </h3>
                  <p className="text-gray-600">
                    Basmati and IRRI varieties. Hygienically processed and export-certified.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
