'use client'

import { Heart } from 'lucide-react'
import VehicleCard from '@/components/vehicles/VehicleCard'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { vehicles } from '@/data/vehicles'
import Link from 'next/link'

export default function WishlistPage() {
  // Demo: Show first 3 vehicles as wishlist items
  const wishlistVehicles = vehicles.slice(0, 3)

  return (
    <div className="min-h-screen bg-neutral-bg-light py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-2">
            My <span className="text-primary-red">Wishlist</span>
          </h1>
          <p className="text-neutral-medium-gray">
            {wishlistVehicles.length} {wishlistVehicles.length === 1 ? 'vehicle' : 'vehicles'} saved
          </p>
        </div>

        {wishlistVehicles.length === 0 ? (
          <Card className="text-center p-12">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary-red" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-black mb-4">
                Your Wishlist is Empty
              </h2>
              <p className="text-neutral-medium-gray mb-8">
                Start adding vehicles you love to your wishlist and compare them later
              </p>
              <Link href="/vehicles">
                <Button variant="primary">Browse Vehicles</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
