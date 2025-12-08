"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", company: "", productInterest: "", message: "" });
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">Contact Us</h1>
          <p className="text-center text-xl mt-4 text-gray-100">
            Get in touch with us for inquiries, quotes, or partnerships
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-text mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3">Head Office</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Room No. 41, Ahmed Complex<br />
                      M.A. Jinnah Road<br />
                      Quetta, Pakistan
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3">Phone</h3>
                    <a
                      href="tel:+923337809555"
                      className="text-primary hover:text-red-700 transition-colors text-lg"
                    >
                      +92-333-7809555
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3">Email</h3>
                    <a
                      href="mailto:kashif.naseem@ibsglobal.pk"
                      className="text-primary hover:text-red-700 transition-colors text-lg"
                    >
                      kashif.naseem@ibsglobal.pk
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-3">Website</h3>
                    <a
                      href="https://www.ibsglobal.pk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-red-700 transition-colors text-lg"
                    >
                      www.ibsglobal.pk
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-text mb-8">Send Us an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-text font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="productInterest" className="block text-text font-semibold mb-2">
                      Product Interest *
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      required
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a product</option>
                      <option value="kinnow">Kinnow (Mandarins)</option>
                      <option value="potato">Fresh Potatoes</option>
                      <option value="rice">Rice (Basmati & IRRI)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-text font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-text text-center mb-8">Our Location</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Room No. 41, Ahmed Complex, M.A. Jinnah Road, Quetta, Pakistan
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Google Maps integration can be added here with an API key)
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

