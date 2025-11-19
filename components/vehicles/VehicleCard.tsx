'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Fuel, Gauge, Calendar, Settings } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import type { Vehicle } from '@/lib/types/vehicle'

interface VehicleCardProps {
  vehicle: Vehicle
  featured?: boolean
}

export default function VehicleCard({ vehicle, featured = false }: VehicleCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Link href={`/vehicles/${vehicle.slug}`}>
      <Card hover padding="none" className="overflow-hidden group">
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-bg-light">
          <Image
            src={vehicle.images[imageIndex] || vehicle.thumbnailImage}
            alt={`${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {vehicle.isCertified && <Badge variant="red">CERTIFIED</Badge>}
            {vehicle.isNewArrival && <Badge variant="black">NEW ARRIVAL</Badge>}
            {featured && (
              <Badge variant="warning" className="bg-accent-warning text-neutral-black">
                FEATURED
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 w-9 h-9 bg-neutral-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted
                  ? 'fill-primary-red text-primary-red'
                  : 'text-neutral-dark-gray'
              } transition-colors`}
            />
          </button>

          {/* Image Navigation Dots */}
          {vehicle.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {vehicle.images.slice(0, 4).map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setImageIndex(index)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === imageIndex
                      ? 'bg-primary-red w-6'
                      : 'bg-neutral-white/60 hover:bg-neutral-white'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-5">
          {/* Title */}
          <h3 className="font-heading font-bold text-lg text-neutral-black mb-1 line-clamp-1 group-hover:text-primary-red transition-colors">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-neutral-medium-gray mb-3 line-clamp-1">
            {vehicle.variant}
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2 text-neutral-dark-gray">
              <Calendar className="w-4 h-4 text-neutral-medium-gray" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-dark-gray">
              <Gauge className="w-4 h-4 text-neutral-medium-gray" />
              <span>{(vehicle.mileage / 1000).toFixed(0)}k km</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-dark-gray">
              <Fuel className="w-4 h-4 text-neutral-medium-gray" />
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-dark-gray">
              <Settings className="w-4 h-4 text-neutral-medium-gray" />
              <span>{vehicle.transmission}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-light-gray">
            <div>
              <div className="text-2xl font-bold text-primary-red">
                {formatPrice(vehicle.price)}
              </div>
              <div className="text-xs text-neutral-medium-gray">
                EMI from ₹{vehicle.emi.toLocaleString('en-IN')}/mo
              </div>
            </div>
            <Button
              variant="outline"
              size="small"
              className="whitespace-nowrap"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                window.location.href = `/vehicles/${vehicle.slug}`
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  )
}
