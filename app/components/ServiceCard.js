'use client'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Link from 'next/link'

export default function ServiceCard({ service, index }) {
  const IconComponent = Icons[service.icon] || Icons.Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card card-hover group"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <IconComponent size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 font-poppins group-hover:text-primary-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            {service.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-primary-400 font-semibold">
              Starting {service.startingPrice}
            </span>
            <span className="text-xs text-gray-500">
              {service.deliveryTime}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-400 space-y-1">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-primary-400 text-xs">
              +{service.features.length - 3} more features
            </li>
          )}
        </ul>
      </div>

      <div className="flex space-x-3 mt-auto">
        <Link 
          href={`/services#${service.id}`}
          className="flex-1 text-center py-2 px-4 border border-primary-400 text-primary-400 rounded-lg hover:bg-primary-400 hover:text-white transition-all duration-200 text-sm font-medium"
        >
          Learn More
        </Link>
        <Link 
          href="/contact"
          className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 text-sm font-medium"
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  )
}