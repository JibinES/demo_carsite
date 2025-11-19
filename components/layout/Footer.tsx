import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-black text-neutral-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: About & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center">
                <span className="text-neutral-white font-bold text-xl">AE</span>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold">
                  Auto<span className="text-primary-red">Elite</span>
                </h2>
                <p className="text-xs text-neutral-medium-gray -mt-1">
                  Premium Marketplace
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-medium-gray leading-relaxed">
              Your trusted destination for premium pre-owned vehicles. Quality assured,
              transparent pricing, and exceptional service.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-dark-gray hover:bg-primary-red transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-dark-gray hover:bg-primary-red transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-dark-gray hover:bg-primary-red transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-dark-gray hover:bg-primary-red transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/sell"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Buy Cars */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Buy Cars</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/vehicles?make=popular"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Popular Makes
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles?bodyType=suv"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  SUVs
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles?bodyType=sedan"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Sedans
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles?certified=true"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Certified Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles?price=0-500000"
                  className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors inline-block"
                >
                  Under ₹5 Lakhs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Customer Support</p>
                  <a
                    href="tel:1800-123-4567"
                    className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors"
                  >
                    1800-123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:support@autoelite.com"
                    className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors"
                  >
                    support@autoelite.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Visit Us</p>
                  <p className="text-sm text-neutral-medium-gray">
                    123 Auto Street, Mumbai, MH 400001
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-dark-gray">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-medium-gray text-center md:text-left">
              © {currentYear} AutoElite Marketplace. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-neutral-medium-gray hover:text-primary-red transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
