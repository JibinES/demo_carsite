'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Heart,
  Share2,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  MapPin,
  Phone,
  MessageCircle,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { getVehicleBySlug, vehicles } from '@/data/vehicles'
import type { Vehicle } from '@/lib/types/vehicle'
import VehicleCard from '@/components/vehicles/VehicleCard'

export default function VehicleDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const vehicle = getVehicleBySlug(slug)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-neutral-bg-light py-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-neutral-black mb-4">Vehicle Not Found</h1>
          <p className="text-neutral-medium-gray mb-8">The vehicle you're looking for doesn't exist.</p>
          <Link href="/vehicles">
            <Button variant="primary">Browse All Vehicles</Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)
  }

  // Get similar vehicles
  const similarVehicles = vehicles
    .filter(v =>
      v.id !== vehicle.id &&
      (v.bodyType === vehicle.bodyType || v.make === vehicle.make)
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-neutral-bg-light">
      {/* Back Button */}
      <div className="bg-neutral-white border-b border-neutral-light-gray">
        <div className="container-custom py-4">
          <Link href="/vehicles" className="inline-flex items-center gap-2 text-neutral-dark-gray hover:text-primary-red transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Listings</span>
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card padding="none" className="overflow-hidden">
              {/* Main Image */}
              <div className="relative aspect-video bg-neutral-black">
                <Image
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-contain"
                  priority
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-white/90 rounded-full flex items-center justify-center hover:bg-neutral-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-white/90 rounded-full flex items-center justify-center hover:bg-neutral-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="absolute bottom-4 right-4 px-3 py-2 bg-neutral-black/70 text-neutral-white rounded-lg flex items-center gap-2 hover:bg-neutral-black transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-sm">View Gallery</span>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-neutral-black/70 text-neutral-white rounded-lg text-sm">
                  {currentImageIndex + 1} / {vehicle.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4 bg-neutral-white">
                <div className="flex gap-2 overflow-x-auto">
                  {vehicle.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? 'border-primary-red'
                          : 'border-neutral-light-gray hover:border-neutral-medium-gray'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${vehicle.make} ${vehicle.model} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Vehicle Info */}
            <Card>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {vehicle.isCertified && <Badge variant="red">CERTIFIED</Badge>}
                    {vehicle.isNewArrival && <Badge variant="black">NEW ARRIVAL</Badge>}
                  </div>
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h1>
                  <p className="text-lg text-neutral-medium-gray">{vehicle.variant}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="w-10 h-10 rounded-full border-2 border-neutral-light-gray flex items-center justify-center hover:border-primary-red transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-primary-red text-primary-red' : 'text-neutral-dark-gray'}`} />
                  </button>
                  <button className="w-10 h-10 rounded-full border-2 border-neutral-light-gray flex items-center justify-center hover:border-primary-red transition-colors">
                    <Share2 className="w-5 h-5 text-neutral-dark-gray" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-medium-gray mb-6">
                <MapPin className="w-4 h-4" />
                <span>{vehicle.location.city}, {vehicle.location.state}</span>
                <span>•</span>
                <span>{vehicle.views.toLocaleString()} views</span>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-neutral-bg-light rounded-lg">
                  <Calendar className="w-5 h-5 text-primary-red" />
                  <div>
                    <p className="text-xs text-neutral-medium-gray">Year</p>
                    <p className="font-semibold text-neutral-black">{vehicle.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-bg-light rounded-lg">
                  <Gauge className="w-5 h-5 text-primary-red" />
                  <div>
                    <p className="text-xs text-neutral-medium-gray">Mileage</p>
                    <p className="font-semibold text-neutral-black">{(vehicle.mileage / 1000).toFixed(0)}k km</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-bg-light rounded-lg">
                  <Fuel className="w-5 h-5 text-primary-red" />
                  <div>
                    <p className="text-xs text-neutral-medium-gray">Fuel</p>
                    <p className="font-semibold text-neutral-black">{vehicle.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-bg-light rounded-lg">
                  <Settings className="w-5 h-5 text-primary-red" />
                  <div>
                    <p className="text-xs text-neutral-medium-gray">Transmission</p>
                    <p className="font-semibold text-neutral-black">{vehicle.transmission}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-black mb-3">Description</h3>
                <p className="text-neutral-dark-gray leading-relaxed">{vehicle.description}</p>
              </div>
            </Card>

            {/* Vehicle Highlights */}
            <Card>
              <h3 className="font-heading text-xl font-bold text-neutral-black mb-4">Vehicle Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.condition.accidentFree && (
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent-success" />
                    <span className="text-neutral-dark-gray">Accident-Free</span>
                  </div>
                )}
                {vehicle.condition.serviceHistory && (
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent-success" />
                    <span className="text-neutral-dark-gray">Complete Service History</span>
                  </div>
                )}
                {vehicle.condition.warrantyAvailable && (
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent-success" />
                    <span className="text-neutral-dark-gray">Warranty Available</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent-success" />
                  <span className="text-neutral-dark-gray">{vehicle.ownership} Owner</span>
                </div>
              </div>
            </Card>

            {/* Features */}
            <Card>
              <h3 className="font-heading text-xl font-bold text-neutral-black mb-4">Features & Equipment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full" />
                    <span className="text-neutral-dark-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Specifications */}
            <Card>
              <h3 className="font-heading text-xl font-bold text-neutral-black mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-neutral-light-gray">
                  <span className="text-neutral-medium-gray">Engine</span>
                  <span className="font-medium text-neutral-black">{vehicle.engineCC} cc</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-light-gray">
                  <span className="text-neutral-medium-gray">Power</span>
                  <span className="font-medium text-neutral-black">{vehicle.power}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-light-gray">
                  <span className="text-neutral-medium-gray">Torque</span>
                  <span className="font-medium text-neutral-black">{vehicle.torque}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-light-gray">
                  <span className="text-neutral-medium-gray">Fuel Efficiency</span>
                  <span className="font-medium text-neutral-black">{vehicle.fuelEfficiency}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-light-gray">
                  <span className="text-neutral-medium-gray">Seating Capacity</span>
                  <span className="font-medium text-neutral-black">{vehicle.seatingCapacity} Seats</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-light-gray">
                  <span className="text-neutral-medium-gray">Color</span>
                  <span className="font-medium text-neutral-black">{vehicle.color}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-neutral-medium-gray">Registration</span>
                  <span className="font-medium text-neutral-black">{vehicle.registrationState} - {vehicle.registrationYear}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Price & CTA - Sticky */}
            <div className="sticky top-24">
              <Card className="mb-6">
                <div className="text-4xl font-bold text-primary-red mb-2">
                  {formatPrice(vehicle.price)}
                </div>
                <p className="text-sm text-neutral-medium-gray mb-6">
                  EMI from ₹{vehicle.emi.toLocaleString('en-IN')}/month
                </p>

                <div className="space-y-3">
                  <Button variant="primary" fullWidth size="large">
                    <Phone className="w-5 h-5" />
                    Contact Seller
                  </Button>
                  <Button variant="outline" fullWidth>
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                  <Link href="/financing">
                    <Button variant="secondary" fullWidth>
                      Calculate EMI
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Seller Info */}
              <Card>
                <h3 className="font-heading text-lg font-bold text-neutral-black mb-4">Seller Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-neutral-medium-gray">Seller Name</p>
                    <p className="font-semibold text-neutral-black">{vehicle.seller.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-medium-gray">Seller Type</p>
                    <p className="font-semibold text-neutral-black">{vehicle.seller.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-medium-gray">Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(vehicle.seller.rating) ? 'text-accent-warning' : 'text-neutral-light-gray'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-neutral-medium-gray">
                        ({vehicle.seller.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Condition Score */}
              <Card>
                <h3 className="font-heading text-lg font-bold text-neutral-black mb-4">Condition Score</h3>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-red/10 mb-3">
                    <span className="text-3xl font-bold text-primary-red">
                      {vehicle.condition.overallScore}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-medium-gray">Overall Rating</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Similar Vehicles */}
        {similarVehicles.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6">
              Similar <span className="text-primary-red">Vehicles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
