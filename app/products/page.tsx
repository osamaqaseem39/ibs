import type { Metadata } from "next";
import ProductQuickNav from "@/components/ProductQuickNav";
import ProductsList from "@/components/ProductsList";

export const metadata: Metadata = {
  title: "Our Products | International Business System",
  description: "Premium quality Kinnow, Potatoes, and Rice exported from Pakistan to Central Asia. Fresh, export-grade produce with international certifications.",
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

      {/* Quick Navigation */}
      <ProductQuickNav />

      {/* Products List Component */}
      <ProductsList />
    </div>
  );
}
