'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Search,
  Heart,
  User,
  Phone,
  MapPin,
  ChevronDown,
  Bell,
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-bg-light border-b border-neutral-light-gray py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-neutral-dark-gray">
                <MapPin className="w-4 h-4" />
                <select className="bg-transparent border-none outline-none cursor-pointer hover:text-primary-red transition-colors">
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                </select>
              </div>
              <Link
                href="/sell"
                className="text-neutral-dark-gray hover:text-primary-red font-medium transition-colors"
              >
                Sell Your Car
              </Link>
            </div>
            <div className="flex items-center gap-2 text-neutral-dark-gray">
              <Phone className="w-4 h-4" />
              <a href="tel:1800-123-4567" className="hover:text-primary-red transition-colors">
                1800-123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-neutral-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'border-b border-neutral-light-gray'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center group-hover:bg-primary-dark-red transition-colors">
                <span className="text-neutral-white font-bold text-xl">AE</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-bold text-neutral-black">
                  Auto<span className="text-primary-red">Elite</span>
                </h1>
                <p className="text-[10px] text-neutral-medium-gray -mt-1">
                  Premium Marketplace
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/vehicles"
                className="text-neutral-dark-gray hover:text-primary-red font-medium transition-colors relative group"
              >
                Buy Cars
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/sell"
                className="text-neutral-dark-gray hover:text-primary-red font-medium transition-colors relative group"
              >
                Sell Your Car
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/compare"
                className="text-neutral-dark-gray hover:text-primary-red font-medium transition-colors relative group"
              >
                Compare
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/financing"
                className="text-neutral-dark-gray hover:text-primary-red font-medium transition-colors relative group"
              >
                Financing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-neutral-bg-light rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-neutral-dark-gray hover:text-primary-red transition-colors" />
              </button>

              {/* Notifications (Desktop) */}
              <button
                className="hidden md:block p-2 hover:bg-neutral-bg-light rounded-lg transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-neutral-dark-gray hover:text-primary-red transition-colors" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary-red rounded-full" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="p-2 hover:bg-neutral-bg-light rounded-lg transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 text-neutral-dark-gray hover:text-primary-red transition-colors" />
                <span className="absolute -top-1 -right-1 bg-primary-red text-neutral-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
              </Link>

              {/* User Account (Desktop) */}
              <Link
                href="/account"
                className="hidden md:block p-2 hover:bg-neutral-bg-light rounded-lg transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5 text-neutral-dark-gray hover:text-primary-red transition-colors" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-neutral-bg-light rounded-lg transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-neutral-dark-gray" />
                ) : (
                  <Menu className="w-6 h-6 text-neutral-dark-gray" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search Bar Expandable */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-neutral-light-gray overflow-hidden"
            >
              <div className="container-custom py-4">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-medium-gray" />
                  <input
                    type="text"
                    placeholder="Search by make, model, or keyword..."
                    className="w-full pl-12 pr-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-black/50 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-neutral-white z-50 shadow-xl lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-light-gray">
                <h2 className="font-heading text-lg font-bold">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-neutral-bg-light rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="p-4 space-y-1">
                <Link
                  href="/vehicles"
                  className="block px-4 py-3 rounded-lg hover:bg-neutral-bg-light text-neutral-dark-gray hover:text-primary-red font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Buy Cars
                </Link>
                <Link
                  href="/sell"
                  className="block px-4 py-3 rounded-lg hover:bg-neutral-bg-light text-neutral-dark-gray hover:text-primary-red font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sell Your Car
                </Link>
                <Link
                  href="/compare"
                  className="block px-4 py-3 rounded-lg hover:bg-neutral-bg-light text-neutral-dark-gray hover:text-primary-red font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Compare
                </Link>
                <Link
                  href="/financing"
                  className="block px-4 py-3 rounded-lg hover:bg-neutral-bg-light text-neutral-dark-gray hover:text-primary-red font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Financing
                </Link>
                <Link
                  href="/account"
                  className="block px-4 py-3 rounded-lg hover:bg-neutral-bg-light text-neutral-dark-gray hover:text-primary-red font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Account
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t border-neutral-light-gray space-y-3">
                <Button variant="primary" fullWidth>
                  Sell Your Car
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-neutral-medium-gray">
                  <Phone className="w-4 h-4" />
                  <a href="tel:1800-123-4567" className="hover:text-primary-red">
                    1800-123-4567
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
