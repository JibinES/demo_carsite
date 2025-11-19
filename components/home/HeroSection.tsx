'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [maxBudget, setMaxBudget] = useState('')

  const popularMakes = ['Honda', 'Hyundai', 'Maruti Suzuki', 'Tata', 'Toyota', 'Kia']

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedMake) params.set('make', selectedMake)
    if (selectedModel) params.set('model', selectedModel)
    if (maxBudget) params.set('maxPrice', maxBudget)
    window.location.href = `/vehicles?${params.toString()}`
  }

  return (
    <section className="relative bg-neutral-black text-neutral-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-black via-neutral-black/90 to-neutral-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Stats Banner */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-primary-red" />
              <span className="text-neutral-medium-gray">500+ Vehicles</span>
            </div>
            <div className="w-px h-5 bg-neutral-dark-gray" />
            <div className="text-sm text-neutral-medium-gray">Quality Assured</div>
            <div className="w-px h-5 bg-neutral-dark-gray" />
            <div className="text-sm text-neutral-medium-gray">Best Prices</div>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Find Your{' '}
            <span className="relative">
              Perfect Drive
              <span className="absolute bottom-2 left-0 w-full h-1 bg-primary-red" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-medium-gray mb-8 md:mb-12">
            Discover premium pre-owned vehicles with transparent pricing, complete history,
            and certified quality.
          </p>

          {/* Search Widget */}
          <div className="bg-neutral-white rounded-xl p-4 md:p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Make Selector */}
              <div>
                <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
                  Make
                </label>
                <select
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="w-full h-11 px-4 border border-neutral-light-gray rounded-lg text-neutral-black focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none"
                >
                  <option value="">Any Make</option>
                  {popularMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model Input */}
              <div>
                <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
                  Model
                </label>
                <input
                  type="text"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  placeholder="e.g., City, Creta"
                  className="w-full h-11 px-4 border border-neutral-light-gray rounded-lg text-neutral-black focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none"
                />
              </div>

              {/* Budget Selector */}
              <div>
                <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
                  Max Budget
                </label>
                <select
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  className="w-full h-11 px-4 border border-neutral-light-gray rounded-lg text-neutral-black focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none"
                >
                  <option value="">Any Budget</option>
                  <option value="500000">Under ₹5 Lakhs</option>
                  <option value="1000000">Under ₹10 Lakhs</option>
                  <option value="1500000">Under ₹15 Lakhs</option>
                  <option value="2000000">Under ₹20 Lakhs</option>
                  <option value="3000000">Under ₹30 Lakhs</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="large"
                fullWidth
                onClick={handleSearch}
                className="flex-1"
              >
                <Search className="w-5 h-5" />
                Search Vehicles
              </Button>
              <Link href="/vehicles" className="sm:w-auto">
                <Button variant="outline" size="large" fullWidth className="whitespace-nowrap">
                  Advanced Search
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
