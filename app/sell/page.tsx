'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Upload, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

type FormData = {
  make: string
  model: string
  year: string
  variant: string
  fuelType: string
  transmission: string
  mileage: string
  ownership: string
  registrationNumber: string
  askingPrice: string
  name: string
  phone: string
  email: string
}

export default function SellYourCarPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const totalSteps = 5

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-bg-light py-16">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center p-12">
            <div className="w-20 h-20 bg-accent-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent-success" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-neutral-black mb-4">
              Thank You!
            </h1>
            <p className="text-neutral-medium-gray text-lg mb-8">
              Your listing has been submitted successfully. Our team will review it and get back to you within 2 hours.
            </p>
            <Link href="/">
              <Button variant="primary">
                Back to Homepage
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-bg-light py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Sell Your <span className="text-primary-red">Car</span>
          </h1>
          <p className="text-neutral-medium-gray max-w-2xl mx-auto">
            List your car with us and reach thousands of potential buyers. Get the best price for your vehicle.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step <= currentStep
                      ? 'bg-primary-red text-neutral-white'
                      : 'bg-neutral-light-gray text-neutral-medium-gray'
                  }`}
                >
                  {step}
                </div>
                {step < 5 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-colors ${
                      step < currentStep ? 'bg-primary-red' : 'bg-neutral-light-gray'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-neutral-medium-gray">
            <span>Vehicle Details</span>
            <span>Condition</span>
            <span>Photos</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <Card padding="large">
            {/* Step 1: Vehicle Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6">
                  Vehicle Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Make *"
                    placeholder="e.g., Honda"
                    {...register('make', { required: true })}
                    error={errors.make && 'Make is required'}
                    fullWidth
                  />
                  <Input
                    label="Model *"
                    placeholder="e.g., City"
                    {...register('model', { required: true })}
                    error={errors.model && 'Model is required'}
                    fullWidth
                  />
                  <Input
                    label="Year *"
                    type="number"
                    placeholder="e.g., 2021"
                    {...register('year', { required: true })}
                    error={errors.year && 'Year is required'}
                    fullWidth
                  />
                  <Input
                    label="Variant"
                    placeholder="e.g., VX CVT"
                    {...register('variant')}
                    fullWidth
                  />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-dark-gray">
                      Fuel Type *
                    </label>
                    <select
                      {...register('fuelType', { required: true })}
                      className="input-field w-full"
                    >
                      <option value="">Select Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-dark-gray">
                      Transmission *
                    </label>
                    <select
                      {...register('transmission', { required: true })}
                      className="input-field w-full"
                    >
                      <option value="">Select Transmission</option>
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Condition */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6">
                  Vehicle Condition
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Mileage (km) *"
                    type="number"
                    placeholder="e.g., 35000"
                    {...register('mileage', { required: true })}
                    error={errors.mileage && 'Mileage is required'}
                    fullWidth
                  />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-dark-gray">
                      Ownership *
                    </label>
                    <select
                      {...register('ownership', { required: true })}
                      className="input-field w-full"
                    >
                      <option value="">Select Ownership</option>
                      <option value="First">First Owner</option>
                      <option value="Second">Second Owner</option>
                      <option value="Third">Third Owner</option>
                      <option value="Fourth+">Fourth or More</option>
                    </select>
                  </div>
                  <Input
                    label="Registration Number *"
                    placeholder="e.g., MH12AB1234"
                    {...register('registrationNumber', { required: true })}
                    error={errors.registrationNumber && 'Registration number is required'}
                    fullWidth
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Photos */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6">
                  Upload Photos
                </h2>
                <div className="border-2 border-dashed border-neutral-light-gray rounded-lg p-12 text-center hover:border-primary-red transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-neutral-medium-gray mx-auto mb-4" />
                  <p className="text-neutral-dark-gray mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-neutral-medium-gray">
                    Minimum 5 photos required (JPG, PNG up to 5MB each)
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Front', 'Rear', 'Interior', 'Engine'].map((label) => (
                    <div key={label} className="aspect-square bg-neutral-bg-light rounded-lg flex items-center justify-center border-2 border-neutral-light-gray">
                      <span className="text-sm text-neutral-medium-gray">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Pricing */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6">
                  Set Your Price
                </h2>
                <div className="max-w-md mx-auto">
                  <Input
                    label="Asking Price (₹) *"
                    type="number"
                    placeholder="e.g., 1050000"
                    {...register('askingPrice', { required: true })}
                    error={errors.askingPrice && 'Asking price is required'}
                    fullWidth
                  />
                  <div className="mt-6 p-4 bg-neutral-bg-light rounded-lg">
                    <p className="text-sm text-neutral-dark-gray mb-2">
                      <strong>Get Free Valuation</strong>
                    </p>
                    <p className="text-sm text-neutral-medium-gray">
                      Our experts will provide a market-based valuation for your vehicle to help you set the right price.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Contact Info */}
            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6">
                  Contact Information
                </h2>
                <div className="max-w-md mx-auto space-y-6">
                  <Input
                    label="Full Name *"
                    placeholder="John Doe"
                    {...register('name', { required: true })}
                    error={errors.name && 'Name is required'}
                    fullWidth
                  />
                  <Input
                    label="Phone Number *"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register('phone', { required: true })}
                    error={errors.phone && 'Phone number is required'}
                    fullWidth
                  />
                  <Input
                    label="Email Address *"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email', { required: true })}
                    error={errors.email && 'Email is required'}
                    fullWidth
                  />
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-neutral-light-gray">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              {currentStep < totalSteps ? (
                <Button type="button" variant="primary" onClick={nextStep}>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" variant="primary">
                  Submit Listing
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        </form>
      </div>
    </div>
  )
}
