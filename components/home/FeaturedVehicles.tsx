'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import VehicleCard from '@/components/vehicles/VehicleCard'
import Button from '@/components/ui/Button'
import type { Vehicle } from '@/lib/types/vehicle'

interface FeaturedVehiclesProps {
  vehicles: Vehicle[]
}

export default function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  return (
    <section className="py-16 md:py-24 bg-neutral-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-2"
            >
              Featured <span className="text-primary-red">Vehicles</span>
            </motion.h2>
            <p className="text-neutral-medium-gray">
              Handpicked premium vehicles for you
            </p>
          </div>
          <Link href="/vehicles" className="hidden md:block">
            <Button variant="outline">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Vehicle Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {vehicles.slice(0, 6).map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <VehicleCard vehicle={vehicle} featured />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="flex justify-center md:hidden">
          <Link href="/vehicles" className="w-full sm:w-auto">
            <Button variant="primary" fullWidth>
              View All Vehicles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
