"use client";

import Link from "next/link";
import { products } from "@/data/products";

export default function ProductQuickNav() {
  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
          <span className="text-sm font-semibold text-gray-600">Quick Jump:</span>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`#${product.id}`}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
            >
              {product.shortName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

