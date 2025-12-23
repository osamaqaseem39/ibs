import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata as genMeta, generateBreadcrumbSchema } from "@/lib/metadata";
import Script from "next/script";

export const metadata: Metadata = genMeta({
  title: "Blog - Agricultural Export Insights & Guides | IBS Pakistan",
  description: "Expert insights, guides, and articles on agricultural exports from Pakistan to Central Asia. Learn about export procedures, quality control, logistics, market opportunities, and best practices for fresh produce exports.",
  keywords: [
    "agricultural export blog",
    "export guides Pakistan",
    "Central Asia trade insights",
    "export best practices",
    "agricultural export articles",
    "export industry news",
    "trade guides",
    "export education",
  ],
  path: "/blog",
  image: "/images/herobg.png",
});

const blogPosts = [
  {
    slug: "guide-exporting-agricultural-products-central-asia",
    title: "Complete Guide to Exporting Agricultural Products from Pakistan to Central Asia",
    excerpt: "Comprehensive guide covering trade routes, documentation, quality standards, and logistics for exporting agricultural products from Pakistan to Central Asian markets.",
    date: "January 15, 2024",
    readTime: "10 min read",
    category: "Export Guide",
    image: "/images/herobg.png",
  },
  {
    slug: "land-route-exports-advantages-fresh-produce",
    title: "Why Land-Route Exports Are Ideal for Fresh Produce",
    excerpt: "Discover why land-route exports are the optimal choice for fresh agricultural products. Compare advantages over sea and air freight including cost, speed, and quality preservation.",
    date: "January 20, 2024",
    readTime: "8 min read",
    category: "Logistics",
    image: "/images/herobg.png",
  },
  {
    slug: "quality-control-certification-agricultural-exports",
    title: "Quality Control and Certification Requirements for Agricultural Exports",
    excerpt: "Complete guide to quality control standards, certifications, and compliance requirements for exporting agricultural products from Pakistan to international markets.",
    date: "January 25, 2024",
    readTime: "12 min read",
    category: "Quality & Compliance",
    image: "/images/herobg.png",
  },
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Agricultural Export Insights & Guides
              </h1>
              <p className="text-xl text-gray-100">
                Expert knowledge and best practices for exporting from Pakistan to Central Asia
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary/30 hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-heading font-bold text-text mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                        Read More
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-red-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need Expert Export Assistance?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact IBS for professional guidance on exporting to Central Asian markets
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

