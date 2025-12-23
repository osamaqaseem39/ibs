import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-text text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section - Left */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="IBS Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="mb-2 text-gray-300">International Business System</p>
            <p className="mb-2 text-gray-300">Exporters of Fresh Fruits, Vegetables & Rice</p>
            <p className="text-sm text-gray-400">Established 1995 – Quetta, Pakistan</p>
          </div>

          {/* Quick Links - Center */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-primary transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/operations" className="hover:text-primary transition-colors">
                  Operations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Right */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2 text-gray-300">Room No. 41, Ahmed Complex</p>
            <p className="mb-2 text-gray-300">M.A. Jinnah Road, Quetta, Pakistan</p>
            <div className="mb-2 space-y-1">
              <p>
                <a href="tel:+92812824023" className="hover:text-primary transition-colors">
                  +92-81-2824023
                </a>
              </p>
              <p>
                <a href="tel:+92812824149" className="hover:text-primary transition-colors">
                  +92-81-2824149
                </a>
              </p>
            </div>
            <p>
              <a
                href="mailto:info@ibsglobal.pk"
                className="hover:text-primary transition-colors"
              >
                info@ibsglobal.pk
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 International Business System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

