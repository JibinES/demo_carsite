'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Car, Truck, Zap, Award, TrendingUp } from 'lucide-react'

const categories = [
  {
    name: 'Sedans',
    icon: Car,
    count: 15,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400',
    href: '/vehicles?bodyType=sedan',
  },
  {
    name: 'SUVs',
    icon: Truck,
    count: 18,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400',
    href: '/vehicles?bodyType=suv',
  },
  {
    name: 'Hatchbacks',
    icon: Car,
    count: 12,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
    href: '/vehicles?bodyType=hatchback',
  },
  {
    name: 'Luxury',
    icon: Award,
    count: 8,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
    href: '/vehicles?bodyType=luxury',
  },
  {
    name: 'Sports',
    icon: TrendingUp,
    count: 5,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=400',
    href: '/vehicles?bodyType=sports',
  },
  {
    name: 'Electric',
    icon: Zap,
    count: 3,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400',
    href: '/vehicles?fuelType=electric',
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-3">
            Browse by <span className="text-primary-red">Category</span>
          </h2>
          <p className="text-neutral-medium-gray max-w-2xl mx-auto">
            Find the perfect vehicle type that matches your lifestyle and needs
          </p>
        </motion.div>

        {/* Category Grid */}
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <Link href={category.href}>
                  <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-black via-neutral-black/60 to-transparent group-hover:from-primary-red/90 group-hover:via-primary-red/70 transition-all duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-neutral-white mb-2 group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading font-bold text-lg md:text-xl text-neutral-white mb-1">
                        {category.name}
                      </h3>
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-red text-neutral-white text-xs font-semibold">
                        {category.count} Cars
                      </div>
                    </div>

                    {/* Red Border on Hover */}
                    <div className="absolute inset-0 border-2 border-primary-red opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
