"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductVariation } from "@/data/products";

interface ProductImageGalleryProps {
  mainImage: string;
  productName: string;
  variations?: ProductVariation[];
  autoSlide?: boolean;
  slideInterval?: number;
}

export default function ProductImageGallery({
  mainImage,
  productName,
  variations = [],
  autoSlide = true,
  slideInterval = 5000,
}: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(autoSlide);

  // Combine main image with variations
  const allImages = [
    { name: "Main", image: mainImage },
    ...variations,
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding || allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % allImages.length;
        setCurrentImage(allImages[next].image);
        return next;
      });
    }, slideInterval);

    return () => clearInterval(interval);
  }, [isAutoSliding, allImages.length, slideInterval]);

  const handleThumbnailClick = (image: string, index: number) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setIsAutoSliding(false); // Stop auto-slide when user clicks
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prev);
    setCurrentImage(allImages[prev].image);
    setIsAutoSliding(false);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % allImages.length;
    setCurrentIndex(next);
    setCurrentImage(allImages[next].image);
    setIsAutoSliding(false);
  };

  if (allImages.length <= 1) {
    // No variations, just show main image
    return (
      <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
        <Image
          src={mainImage}
          alt={productName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
        <Image
          src={currentImage}
          alt={productName}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(allImages[index].image, index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-slide indicator */}
        {isAutoSliding && allImages.length > 1 && (
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs z-10">
            Auto-sliding
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {variations.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-600">Variations:</p>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {allImages.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(item.image, index)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 group ${
                  index === currentIndex
                    ? "border-primary shadow-lg scale-105 ring-2 ring-primary/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                aria-label={`View ${item.name}`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-110"
                  sizes="96px"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 text-center truncate">
                  {item.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

