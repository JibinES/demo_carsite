'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, X, Check, Minus } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { vehicles } from '@/data/vehicles'
import type { Vehicle } from '@/lib/types/vehicle'

export default function ComparePage() {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([
    vehicles[0], // Pre-select first vehicle
  ])
  const [isAddingVehicle, setIsAddingVehicle] = useState(false)

  const maxVehicles = 3

  const addVehicle = (vehicle: Vehicle) => {
    if (selectedVehicles.length < maxVehicles && !selectedVehicles.find(v => v.id === vehicle.id)) {
      setSelectedVehicles([...selectedVehicles, vehicle])
      setIsAddingVehicle(false)
    }
  }

  const removeVehicle = (vehicleId: string) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const ComparisonRow = ({ label, values }: { label: string; values: (string | number | boolean)[] }) => (
    <>
      {/* Desktop: Horizontal Row */}
      <div className="hidden md:grid md:grid-cols-4 border-b border-neutral-light-gray">
        <div className="p-4 bg-neutral-bg-light font-medium text-neutral-black">
          {label}
        </div>
        {values.map((value, index) => (
          <div key={index} className="p-4 text-center text-neutral-dark-gray">
            {typeof value === 'boolean' ? (
              value ? (
                <Check className="w-5 h-5 text-accent-success mx-auto" />
              ) : (
                <Minus className="w-5 h-5 text-neutral-medium-gray mx-auto" />
              )
            ) : (
              value || '-'
            )}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical Stack */}
      <div className="md:hidden border-b border-neutral-light-gray">
        <div className="p-3 bg-neutral-bg-light font-medium text-neutral-black text-sm">
          {label}
        </div>
        {values.map((value, index) => (
          <div key={index} className="flex items-center justify-between p-3 border-t border-neutral-light-gray">
            <span className="text-sm text-neutral-medium-gray">
              {selectedVehicles[index]?.make} {selectedVehicles[index]?.model}
            </span>
            <span className="text-sm font-medium text-neutral-black">
              {typeof value === 'boolean' ? (
                value ? (
                  <Check className="w-5 h-5 text-accent-success" />
                ) : (
                  <Minus className="w-5 h-5 text-neutral-medium-gray" />
                )
              ) : (
                value || '-'
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-neutral-bg-light py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Compare <span className="text-primary-red">Vehicles</span>
          </h1>
          <p className="text-neutral-medium-gray max-w-2xl mx-auto">
            Compare specifications, features, and prices side-by-side to make the best decision
          </p>
        </div>

        {selectedVehicles.length === 0 ? (
          /* Empty State */
          <Card className="text-center p-12">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="w-10 h-10 text-primary-red" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-black mb-4">
                Start Comparing
              </h2>
              <p className="text-neutral-medium-gray mb-8">
                Select up to 3 vehicles to compare their specifications, features, and prices
              </p>
              <Button variant="primary" onClick={() => setIsAddingVehicle(true)}>
                Add Vehicle
              </Button>
            </div>
          </Card>
        ) : (
          /* Comparison Table */
          <div>
            {/* Vehicle Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                <div className="hidden md:block" />
                {selectedVehicles.map((vehicle) => (
                  <Card key={vehicle.id} padding="none" className="relative">
                    <button
                      onClick={() => removeVehicle(vehicle.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-neutral-white rounded-full shadow-md flex items-center justify-center hover:bg-primary-red hover:text-neutral-white transition-colors z-10"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {/* Mobile: Horizontal Layout */}
                    <div className="flex md:flex-col">
                      <div className="relative w-28 h-24 md:w-full md:aspect-[4/3] flex-shrink-0 rounded-lg overflow-hidden md:rounded-b-none">
                        <Image
                          src={vehicle.thumbnailImage}
                          alt={`${vehicle.make} ${vehicle.model}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 p-3 md:p-4">
                        <h3 className="font-heading font-bold text-base md:text-lg text-neutral-black mb-1 line-clamp-1">
                          {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-medium-gray mb-2 line-clamp-1">{vehicle.variant}</p>
                        <div className="text-lg md:text-xl font-bold text-primary-red mb-2 md:mb-3">
                          {formatPrice(vehicle.price)}
                        </div>
                        <Link href={`/vehicles/${vehicle.slug}`} className="block md:hidden">
                          <Button variant="outline" size="small" fullWidth>
                            View
                          </Button>
                        </Link>
                        <Link href={`/vehicles/${vehicle.slug}`} className="hidden md:block">
                          <Button variant="outline" size="small" fullWidth>
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
                {selectedVehicles.length < maxVehicles && (
                  <Card
                    padding="small"
                    className="flex items-center justify-center cursor-pointer hover:border-primary-red"
                    onClick={() => setIsAddingVehicle(true)}
                  >
                    <div className="text-center py-8">
                      <Plus className="w-12 h-12 text-neutral-medium-gray mx-auto mb-3" />
                      <p className="text-sm font-medium text-neutral-dark-gray">Add Vehicle</p>
                    </div>
                  </Card>
                )}
              </div>

              {/* Comparison Rows */}
              <Card padding="none" className="overflow-hidden">
                <div className="bg-neutral-black text-neutral-white p-3 md:p-4">
                  <h2 className="font-heading font-bold text-base md:text-lg">Price & Value</h2>
                </div>
                <ComparisonRow
                  label="Price"
                  values={selectedVehicles.map(v => formatPrice(v.price))}
                />
                <ComparisonRow
                  label="EMI (per month)"
                  values={selectedVehicles.map(v => `₹${v.emi.toLocaleString('en-IN')}`)}
                />

                <div className="bg-neutral-black text-neutral-white p-3 md:p-4 mt-6">
                  <h2 className="font-heading font-bold text-base md:text-lg">Basic Information</h2>
                </div>
                <ComparisonRow label="Year" values={selectedVehicles.map(v => v.year)} />
                <ComparisonRow label="Mileage" values={selectedVehicles.map(v => `${(v.mileage / 1000).toFixed(0)}k km`)} />
                <ComparisonRow label="Ownership" values={selectedVehicles.map(v => v.ownership)} />
                <ComparisonRow label="Body Type" values={selectedVehicles.map(v => v.bodyType)} />
                <ComparisonRow label="Color" values={selectedVehicles.map(v => v.color)} />
                <ComparisonRow label="Location" values={selectedVehicles.map(v => v.location.city)} />

                <div className="bg-neutral-black text-neutral-white p-3 md:p-4 mt-6">
                  <h2 className="font-heading font-bold text-base md:text-lg">Performance</h2>
                </div>
                <ComparisonRow label="Engine CC" values={selectedVehicles.map(v => `${v.engineCC} cc`)} />
                <ComparisonRow label="Power" values={selectedVehicles.map(v => v.power)} />
                <ComparisonRow label="Torque" values={selectedVehicles.map(v => v.torque)} />
                <ComparisonRow label="Fuel Type" values={selectedVehicles.map(v => v.fuelType)} />
                <ComparisonRow label="Transmission" values={selectedVehicles.map(v => v.transmission)} />
                <ComparisonRow label="Fuel Efficiency" values={selectedVehicles.map(v => v.fuelEfficiency)} />

                <div className="bg-neutral-black text-neutral-white p-3 md:p-4 mt-6">
                  <h2 className="font-heading font-bold text-base md:text-lg">Condition</h2>
                </div>
                <ComparisonRow label="Certified Pre-Owned" values={selectedVehicles.map(v => v.isCertified)} />
                <ComparisonRow label="Accident Free" values={selectedVehicles.map(v => v.condition.accidentFree)} />
                <ComparisonRow label="Service History" values={selectedVehicles.map(v => v.condition.serviceHistory)} />
                <ComparisonRow label="Warranty Available" values={selectedVehicles.map(v => v.condition.warrantyAvailable)} />
                <ComparisonRow label="Overall Score" values={selectedVehicles.map(v => `${v.condition.overallScore}/10`)} />

                <div className="bg-neutral-black text-neutral-white p-3 md:p-4 mt-6">
                  <h2 className="font-heading font-bold text-base md:text-lg">Seller</h2>
                </div>
                <ComparisonRow label="Seller Name" values={selectedVehicles.map(v => v.seller.name)} />
                <ComparisonRow label="Seller Rating" values={selectedVehicles.map(v => `${v.seller.rating}/5`)} />
              </Card>
          </div>
        )}
      </div>

      {/* Add Vehicle Modal */}
      {isAddingVehicle && (
        <>
          <div
            className="fixed inset-0 bg-neutral-black/50 z-40"
            onClick={() => setIsAddingVehicle(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold">Select a Vehicle</h2>
                <button onClick={() => setIsAddingVehicle(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicles.slice(0, 12).map((vehicle) => {
                  const isSelected = selectedVehicles.find(v => v.id === vehicle.id)
                  return (
                    <button
                      key={vehicle.id}
                      onClick={() => addVehicle(vehicle)}
                      disabled={!!isSelected}
                      className={`text-left p-3 rounded-lg border-2 transition-colors ${
                        isSelected
                          ? 'border-neutral-light-gray opacity-50 cursor-not-allowed'
                          : 'border-neutral-light-gray hover:border-primary-red'
                      }`}
                    >
                      <div className="relative aspect-video mb-2 rounded overflow-hidden">
                        <Image
                          src={vehicle.thumbnailImage}
                          alt={`${vehicle.make} ${vehicle.model}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-neutral-black mb-1">
                        {vehicle.make} {vehicle.model}
                      </h3>
                      <p className="text-sm text-primary-red font-bold">
                        {formatPrice(vehicle.price)}
                      </p>
                    </button>
                  )
                })}
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
