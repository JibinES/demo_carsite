'use client'

import { useState } from 'react'
import { Calculator, CheckCircle, FileText, Clock, Shield } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function FinancingPage() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(10)
  const [tenure, setTenure] = useState(5)
  const [downPayment, setDownPayment] = useState(200000)

  const calculateEMI = () => {
    const principal = loanAmount - downPayment
    const monthlyRate = interestRate / 12 / 100
    const months = tenure * 12

    if (monthlyRate === 0) return principal / months

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)

    return Math.round(emi)
  }

  const emi = calculateEMI()
  const principal = loanAmount - downPayment
  const totalInterest = emi * tenure * 12 - principal
  const totalAmount = emi * tenure * 12

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const banks = [
    { name: 'HDFC Bank', rate: '9.5% onwards', logo: '🏦' },
    { name: 'ICICI Bank', rate: '9.8% onwards', logo: '🏦' },
    { name: 'SBI', rate: '9.2% onwards', logo: '🏦' },
    { name: 'Axis Bank', rate: '10.0% onwards', logo: '🏦' },
    { name: 'Kotak Mahindra', rate: '9.7% onwards', logo: '🏦' },
    { name: 'Yes Bank', rate: '10.2% onwards', logo: '🏦' },
  ]

  return (
    <div className="min-h-screen bg-neutral-bg-light py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Car <span className="text-primary-red">Financing</span>
          </h1>
          <p className="text-neutral-medium-gray max-w-2xl mx-auto">
            Get instant loan approval with our trusted banking partners. Calculate your EMI and apply online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* EMI Calculator */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-red" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-neutral-black">
                    EMI Calculator
                  </h2>
                  <p className="text-sm text-neutral-medium-gray">
                    Calculate your monthly installment
                  </p>
                </div>
              </div>

              {/* Calculator Inputs */}
              <div className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-neutral-dark-gray">
                      Loan Amount
                    </label>
                    <span className="text-lg font-bold text-neutral-black">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="5000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-xs text-neutral-medium-gray mt-1">
                    <span>₹2L</span>
                    <span>₹50L</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-neutral-dark-gray">
                      Down Payment
                    </label>
                    <span className="text-lg font-bold text-neutral-black">
                      {formatCurrency(downPayment)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={loanAmount * 0.5}
                    step="25000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-xs text-neutral-medium-gray mt-1">
                    <span>₹0</span>
                    <span>50% of loan</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-neutral-dark-gray">
                      Interest Rate (per annum)
                    </label>
                    <span className="text-lg font-bold text-neutral-black">
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="7"
                    max="15"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-xs text-neutral-medium-gray mt-1">
                    <span>7%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-neutral-dark-gray">
                      Loan Tenure
                    </label>
                    <span className="text-lg font-bold text-neutral-black">
                      {tenure} {tenure === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-xs text-neutral-medium-gray mt-1">
                    <span>1 yr</span>
                    <span>7 yrs</span>
                  </div>
                </div>
              </div>

              {/* EMI Result */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-red to-primary-dark-red rounded-xl text-neutral-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Monthly EMI</p>
                    <p className="text-4xl font-bold">{formatCurrency(emi)}</p>
                  </div>
                  <Button variant="secondary">Apply Now</Button>
                </div>
              </div>

              {/* Breakdown */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-bg-light rounded-lg">
                  <p className="text-xs text-neutral-medium-gray mb-1">Principal</p>
                  <p className="text-lg font-bold text-neutral-black">
                    {formatCurrency(principal)}
                  </p>
                </div>
                <div className="p-4 bg-neutral-bg-light rounded-lg">
                  <p className="text-xs text-neutral-medium-gray mb-1">Interest</p>
                  <p className="text-lg font-bold text-neutral-black">
                    {formatCurrency(totalInterest)}
                  </p>
                </div>
                <div className="p-4 bg-neutral-bg-light rounded-lg">
                  <p className="text-xs text-neutral-medium-gray mb-1">Total Amount</p>
                  <p className="text-lg font-bold text-neutral-black">
                    {formatCurrency(totalAmount)}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-heading text-lg font-bold text-neutral-black mb-4">
                Why Finance with Us?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: 'Instant Approval' },
                  { icon: FileText, text: 'Minimal Documentation' },
                  { icon: Clock, text: 'Quick Disbursement' },
                  { icon: Shield, text: 'Secure Process' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-success" />
                    </div>
                    <p className="text-sm text-neutral-dark-gray">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-neutral-black text-neutral-white">
              <h3 className="font-heading text-lg font-bold mb-4">
                Need Help?
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Our financing experts are here to help you choose the best loan option.
              </p>
              <Button variant="primary" fullWidth>
                Talk to Expert
              </Button>
            </Card>
          </div>
        </div>

        {/* Bank Partners */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6 text-center">
            Our <span className="text-primary-red">Banking Partners</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {banks.map((bank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="text-center">
                  <div className="text-4xl mb-3">{bank.logo}</div>
                  <h3 className="font-semibold text-neutral-black mb-1 text-sm">
                    {bank.name}
                  </h3>
                  <p className="text-xs text-primary-red font-medium">{bank.rate}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-neutral-black mb-6 text-center">
            How to <span className="text-primary-red">Apply</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Calculate EMI',
                description: 'Use our calculator to estimate your monthly payment',
              },
              {
                step: '2',
                title: 'Submit Documents',
                description: 'Upload required documents online - PAN, Aadhar, Income Proof',
              },
              {
                step: '3',
                title: 'Get Approval',
                description: 'Receive instant approval and drive home your dream car',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="text-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-8xl font-bold text-neutral-light-gray opacity-20">
                    {item.step}
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-red text-neutral-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-neutral-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-medium-gray">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
