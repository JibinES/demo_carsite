'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, RotateCcw, Truck } from 'lucide-react'

const signals = [
  {
    icon: Shield,
    title: 'Certified Pre-Owned',
    description: 'Every vehicle undergoes rigorous 200-point inspection',
  },
  {
    icon: FileText,
    title: 'Vehicle History Reports',
    description: 'Complete ownership and service history transparency',
  },
  {
    icon: RotateCcw,
    title: '7-Day Return Policy',
    description: 'Not satisfied? Return within 7 days, no questions asked',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Get your car delivered to your doorstep anywhere in India',
  },
]

export default function TrustSignals() {
  return (
    <section className="py-16 md:py-24 bg-neutral-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-3">
            Why Choose <span className="text-primary-red">AutoElite</span>
          </h2>
          <p className="text-neutral-medium-gray max-w-2xl mx-auto">
            We're committed to providing a transparent, hassle-free car buying experience
          </p>
        </motion.div>

        {/* Trust Signals Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {signals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group"
              >
                <div className="text-center">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-red/10 group-hover:bg-primary-red transition-colors duration-300 mb-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-red group-hover:text-neutral-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg md:text-xl text-neutral-black mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-neutral-medium-gray leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
