"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", company: "", email: "", productInterest: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
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

      {/* Intro Component */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                Connecting Pakistan to Central Asia
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Headquartered in Quetta, IBS is strategically positioned to serve Afghanistan, Uzbekistan, and Tajikistan via reliable land routes. 
                Over nearly three decades, IBS has played a leading role in connecting Pakistan's farms with international buyers across the Central Asian Republics (CARs) through reliable, land-based trade routes.
              </p>
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
            {/* Kinnow Card */}
            <Link href="/products#kinnow" className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="h-72 relative overflow-hidden">
                  <Image
                    src="/images/kinnow.jpg"
                    alt="Fresh Kinnow (Mandarins)"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                    <span className="text-white text-sm font-semibold">Premium</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    Mandarins (Kinnow)
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    Premium quality citrus from Sargodha, Punjab. Bright orange skin with high juice content.
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Potato Card */}
            <Link href="/products#potato" className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="h-72 relative overflow-hidden">
                  <Image
                    src="/images/potato.jpg"
                    alt="Fresh Potatoes"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                    <span className="text-white text-sm font-semibold">Export Grade</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    Fresh Potatoes
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    Export-grade potatoes from Okara, Punjab. Available in multiple varieties.
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Rice Card */}
            <Link href="/products#rice" className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="h-72 relative overflow-hidden">
                  <Image
                    src="/images/rice.jpg"
                    alt="Premium Rice"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                    <span className="text-white text-sm font-semibold">Certified</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    Premium Rice
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    Basmati and IRRI varieties. Hygienically processed and export-certified.
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for inquiries, quotes, or partnerships. We're here to help you with your export needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-text mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Head Office</h4>
                      <p className="text-gray-600">
                        Room No. 41, Ahmed Complex<br />
                        M.A. Jinnah Road<br />
                        Quetta, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Phone</h4>
                      <a
                        href="tel:+923337809555"
                        className="text-primary hover:text-red-700 transition-colors"
                      >
                        +92-333-7809555
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Email</h4>
                      <a
                        href="mailto:kashif.naseem@ibsglobal.pk"
                        className="text-primary hover:text-red-700 transition-colors"
                      >
                        kashif.naseem@ibsglobal.pk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Website</h4>
                      <a
                        href="https://www.ibsglobal.pk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-red-700 transition-colors"
                      >
                        www.ibsglobal.pk
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-text mb-6">Send Us an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="home-name" className="block text-text font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="home-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-company" className="block text-text font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="home-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-email" className="block text-text font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="home-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-productInterest" className="block text-text font-semibold mb-2">
                      Product Interest *
                    </label>
                    <select
                      id="home-productInterest"
                      name="productInterest"
                      required
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a product</option>
                      <option value="kinnow">Kinnow (Mandarins)</option>
                      <option value="potato">Fresh Potatoes</option>
                      <option value="rice">Rice (Basmati & IRRI)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="home-message" className="block text-text font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="home-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
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
  );
}
