'use client'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function PricingTable({ plans }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`card relative ${plan.recommended ? 'ring-2 ring-primary-500 scale-105' : ''}`}
        >
          {plan.recommended && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Star size={14} />
                <span>Most Popular</span>
              </div>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-poppins">{plan.name}</h3>
            <div className="mb-2">
              <span className="text-3xl font-bold text-primary-400">{plan.price}</span>
              <div className="text-sm text-gray-400 mt-1">{plan.priceUSD}</div>
            </div>
            <p className="text-gray-400 text-sm">{plan.description}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <Check size={18} className="text-secondary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="text-center text-sm text-gray-400 mb-6">
            Delivery: {plan.deliveryTime}
          </div>

          <Link
            href="/contact"
            className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
              plan.recommended 
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105' 
                : 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white'
            }`}
          >
            Get Started
          </Link>
        </motion.div>
      ))}
    </div>
  )
}