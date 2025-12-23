"use client";

import { useState } from "react";
import { generateBreadcrumbSchema, generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/metadata";
import Script from "next/script";

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

  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ]);

  return (
    <>
      <Script
        id="organization-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                      href="mailto:info@ibsglobal.pk"
                      className="text-primary hover:text-red-700 transition-colors text-lg"
                    >
                      info@ibsglobal.pk
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.4219038266197!2d67.00922607617876!3d30.19650361134912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de3ab95110e3%3A0xde5db36c1b5b27f3!2sInternational%20Business%20System!5e0!3m2!1sen!2s!4v1766476560408!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

