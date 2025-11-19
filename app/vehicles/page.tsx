'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, Grid3x3, List, X } from 'lucide-react'
import VehicleCard from '@/components/vehicles/VehicleCard'
import Button from '@/components/ui/Button'
import { vehicles } from '@/data/vehicles'
import type { Vehicle } from '@/lib/types/vehicle'

export default function VehiclesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter states
  const [selectedMake, setSelectedMake] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000])
  const [selectedBodyType, setSelectedBodyType] = useState<string[]>([])
  const [selectedFuelType, setSelectedFuelType] = useState<string[]>([])
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>([])
  const [certifiedOnly, setCertifiedOnly] = useState(false)

  // Get unique values for filters
  const makes = useMemo(() => [...new Set(vehicles.map(v => v.make))].sort(), [])
  const bodyTypes = useMemo(() => [...new Set(vehicles.map(v => v.bodyType))].sort(), [])
  const fuelTypes = useMemo(() => [...new Set(vehicles.map(v => v.fuelType))].sort(), [])

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      if (selectedMake.length > 0 && !selectedMake.includes(vehicle.make)) return false
      if (vehicle.price < priceRange[0] || vehicle.price > priceRange[1]) return false
      if (selectedBodyType.length > 0 && !selectedBodyType.includes(vehicle.bodyType)) return false
      if (selectedFuelType.length > 0 && !selectedFuelType.includes(vehicle.fuelType)) return false
      if (selectedTransmission.length > 0 && !selectedTransmission.includes(vehicle.transmission)) return false
      if (certifiedOnly && !vehicle.isCertified) return false
      return true
    })

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'year':
          return b.year - a.year
        case 'mileage':
          return a.mileage - b.mileage
        default:
          return b.rating - a.rating
      }
    })

    return filtered
  }, [selectedMake, priceRange, selectedBodyType, selectedFuelType, selectedTransmission, certifiedOnly, sortBy])

  const clearFilters = () => {
    setSelectedMake([])
    setPriceRange([0, 5000000])
    setSelectedBodyType([])
    setSelectedFuelType([])
    setSelectedTransmission([])
    setCertifiedOnly(false)
  }

  const activeFilterCount =
    selectedMake.length +
    selectedBodyType.length +
    selectedFuelType.length +
    selectedTransmission.length +
    (certifiedOnly ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 5000000 ? 1 : 0)

  return (
    <div className="min-h-screen bg-neutral-bg-light">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-2">
            Browse <span className="text-primary-red">Vehicles</span>
          </h1>
          <p className="text-neutral-medium-gray">
            {filteredVehicles.length} vehicles available
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 bg-neutral-white p-4 rounded-lg">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-neutral-light-gray rounded-lg hover:border-primary-red transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium">Filters</span>
            {activeFilterCount > 0 && (
              <span className="px-2 py-0.5 bg-primary-red text-neutral-white text-xs rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm text-neutral-dark-gray whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-initial px-3 py-2 border border-neutral-light-gray rounded-lg focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year">Newest First</option>
              <option value="mileage">Lowest Mileage</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary-red text-neutral-white'
                  : 'bg-neutral-bg-light text-neutral-dark-gray hover:bg-neutral-light-gray'
              }`}
              aria-label="Grid view"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-red text-neutral-white'
                  : 'bg-neutral-bg-light text-neutral-dark-gray hover:bg-neutral-light-gray'
              }`}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Filters Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-neutral-white rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-lg">Filters</h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary-red hover:text-primary-dark-red font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Filter sections */}
              <FilterSection title="Make">
                {makes.slice(0, 6).map(make => (
                  <label key={make} className="flex items-center gap-2 py-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedMake.includes(make)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMake([...selectedMake, make])
                        } else {
                          setSelectedMake(selectedMake.filter(m => m !== make))
                        }
                      }}
                      className="w-4 h-4 text-primary-red border-neutral-light-gray rounded focus:ring-primary-red"
                    />
                    <span className="text-sm text-neutral-dark-gray">{make}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Body Type">
                {bodyTypes.map(type => (
                  <label key={type} className="flex items-center gap-2 py-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBodyType.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBodyType([...selectedBodyType, type])
                        } else {
                          setSelectedBodyType(selectedBodyType.filter(t => t !== type))
                        }
                      }}
                      className="w-4 h-4 text-primary-red border-neutral-light-gray rounded focus:ring-primary-red"
                    />
                    <span className="text-sm text-neutral-dark-gray">{type}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Fuel Type">
                {fuelTypes.map(fuel => (
                  <label key={fuel} className="flex items-center gap-2 py-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFuelType.includes(fuel)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedFuelType([...selectedFuelType, fuel])
                        } else {
                          setSelectedFuelType(selectedFuelType.filter(f => f !== fuel))
                        }
                      }}
                      className="w-4 h-4 text-primary-red border-neutral-light-gray rounded focus:ring-primary-red"
                    />
                    <span className="text-sm text-neutral-dark-gray">{fuel}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Transmission">
                {['Automatic', 'Manual'].map(trans => (
                  <label key={trans} className="flex items-center gap-2 py-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTransmission.includes(trans)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTransmission([...selectedTransmission, trans])
                        } else {
                          setSelectedTransmission(selectedTransmission.filter(t => t !== trans))
                        }
                      }}
                      className="w-4 h-4 text-primary-red border-neutral-light-gray rounded focus:ring-primary-red"
                    />
                    <span className="text-sm text-neutral-dark-gray">{trans}</span>
                  </label>
                ))}
              </FilterSection>

              <div className="pt-4 border-t border-neutral-light-gray">
                <label className="flex items-center gap-2 py-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={certifiedOnly}
                    onChange={(e) => setCertifiedOnly(e.target.checked)}
                    className="w-4 h-4 text-primary-red border-neutral-light-gray rounded focus:ring-primary-red"
                  />
                  <span className="text-sm font-medium text-neutral-dark-gray">Certified Pre-Owned Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Vehicle Grid */}
          <div className="flex-1">
            {filteredVehicles.length === 0 ? (
              <div className="bg-neutral-white rounded-lg p-12 text-center">
                <p className="text-neutral-medium-gray text-lg mb-4">
                  No vehicles found matching your filters
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredVehicles.map(vehicle => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-neutral-black/50 z-40 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full sm:w-80 bg-neutral-white z-50 overflow-y-auto lg:hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-lg">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Same filter content as desktop */}
              <div className="space-y-6">
                {/* Add mobile filter sections here - same as desktop */}
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="outline" fullWidth onClick={clearFilters}>
                  Clear
                </Button>
                <Button variant="primary" fullWidth onClick={() => setIsFilterOpen(false)}>
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pb-4 mb-4 border-b border-neutral-light-gray">
      <h3 className="font-medium text-neutral-black mb-3">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  )
}
