"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "list" | "detailed";
  onCardClick?: () => void;
}

export default function ProductCard({ 
  product, 
  variant = "grid",
  onCardClick 
}: ProductCardProps) {
  if (variant === "list") {
    return (
      <Link 
        href={`/products#${product.id}`}
        onClick={onCardClick}
        className="group block"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-64 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 256px"
              />
              {product.badge && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                  <span className="text-white text-sm font-semibold">{product.badge}</span>
                </div>
              )}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                {product.description}
              </p>
              <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                View details
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "detailed") {
    return (
      <section id={product.id} className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={product.id === "potato" ? "order-2 md:order-1" : ""}>
                <div className="h-96 relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={product.id === "potato" ? "order-1 md:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
                  {product.name}
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-text mb-2">Origin:</h3>
                    <p>{product.origin}</p>
                  </div>
                  {product.varieties && product.varieties.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Varieties:</h3>
                      <p className="flex flex-wrap gap-2">
                        {product.varieties.map((variety, index) => (
                          <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                            {variety}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                  {product.features && product.features.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Features:</h3>
                      <p>{product.features.join(", ")}.</p>
                    </div>
                  )}
                  {product.processing && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Processing:</h3>
                      <p>{product.processing}</p>
                    </div>
                  )}
                  {product.packaging && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Packaging:</h3>
                      <p>{product.packaging}</p>
                    </div>
                  )}
                  {product.storage && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Storage & Handling:</h3>
                      <p>{product.storage}</p>
                    </div>
                  )}
                  {product.transportation && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Transportation:</h3>
                      <p>{product.transportation}</p>
                    </div>
                  )}
                  {product.tradeRoute && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Trade Route:</h3>
                      <p>{product.tradeRoute}</p>
                    </div>
                  )}
                  {product.certifications && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">Certifications:</h3>
                      <p>{product.certifications}</p>
                    </div>
                  )}
                  {product.destinations && product.destinations.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-text mb-2">
                        {product.destinations.length > 1 ? "Destinations:" : "Markets:"}
                      </h3>
                      <p className="flex flex-wrap gap-2">
                        {product.destinations.map((destination, index) => (
                          <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                            {destination}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default grid variant
  return (
    <Link 
      href={`/products#${product.id}`}
      onClick={onCardClick}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
        <div className="h-72 relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
          {product.badge && (
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
              <span className="text-white text-sm font-semibold">{product.badge}</span>
            </div>
          )}
        </div>
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
            {product.shortName}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
            {product.description}
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
  );
}

