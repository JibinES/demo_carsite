import HeroSection from '@/components/home/HeroSection'
import FeaturedVehicles from '@/components/home/FeaturedVehicles'
import CategoryShowcase from '@/components/home/CategoryShowcase'
import TrustSignals from '@/components/home/TrustSignals'
import { getFeaturedVehicles } from '@/data/vehicles'

export default function Home() {
  const featuredVehicles = getFeaturedVehicles(6)

  return (
    <>
      <HeroSection />
      <FeaturedVehicles vehicles={featuredVehicles} />
      <CategoryShowcase />
      <TrustSignals />
    </>
  )
}
