export interface Vehicle {
  id: string
  make: string
  model: string
  variant: string
  year: number
  slug: string
  price: number
  emi: number
  images: string[]
  thumbnailImage: string
  mileage: number
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'
  transmission: 'Automatic' | 'Manual'
  ownership: 'First' | 'Second' | 'Third' | 'Fourth+'
  registrationYear: number
  registrationState: string
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Luxury' | 'Sports' | 'Electric'
  color: string
  seatingCapacity: number
  engineCC: number
  power: string
  torque: string
  fuelEfficiency: string
  location: {
    city: string
    state: string
  }
  seller: {
    id: string
    name: string
    type: 'Dealer' | 'Individual'
    rating: number
    reviewCount: number
  }
  features: string[]
  isCertified: boolean
  isNewArrival: boolean
  condition: {
    accidentFree: boolean
    serviceHistory: boolean
    warrantyAvailable: boolean
    overallScore: number
  }
  description: string
  rating: number
  views: number
  postedDate: string
  tags: string[]
  specifications?: {
    dimensions?: {
      length?: string
      width?: string
      height?: string
      wheelbase?: string
      groundClearance?: string
    }
    capacity?: {
      fuelTank?: string
      bootSpace?: string
    }
    comfort?: string[]
    safety?: string[]
    technology?: string[]
  }
}

export interface FilterOptions {
  make?: string[]
  model?: string[]
  priceRange?: [number, number]
  yearRange?: [number, number]
  bodyType?: string[]
  fuelType?: string[]
  transmission?: string[]
  mileageRange?: [number, number]
  ownership?: string[]
  color?: string[]
  features?: string[]
  certified?: boolean
}

export interface SortOption {
  label: string
  value: string
}
