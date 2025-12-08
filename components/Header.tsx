"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="IBS Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-text hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-text hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/operations" className="text-text hover:text-primary transition-colors">
              Operations
            </Link>
            <Link href="/contact" className="text-text hover:text-primary transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="block text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/operations"
              className="block text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Operations
            </Link>
            <Link
              href="/contact"
              className="block text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-primary text-white px-6 py-2 rounded-md text-center hover:bg-red-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

