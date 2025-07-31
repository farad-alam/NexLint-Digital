'use client'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import CTASection from '../components/CTASection'
import servicesData from '../../public/data/services.json'

export default function Services() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive web development solutions designed to help your business succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {servicesData.services.map((service, index) => {
              const IconComponent = Icons[service.icon] || Icons.Globe
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white font-poppins">
                          {service.title}
                        </h2>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-primary-400 font-semibold">
                            {service.priceRange}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">
                            {service.deliveryTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href="/contact"
                        className="btn-primary px-6 py-3 text-center"
                      >
                        Get Quote for {service.title}
                      </Link>
                      <Link 
                        href="/pricing"
                        className="btn-outline px-6 py-3 text-center"
                      >
                        View Pricing
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="card bg-gradient-to-br from-dark-800 to-dark-700 p-8">
                      <h3 className="text-xl font-semibold text-white mb-4 font-poppins">
                        Package Highlights
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-dark-800 rounded-lg">
                          <span className="text-gray-300">Starting Price</span>
                          <span className="text-primary-400 font-semibold">{service.startingPrice}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-dark-800 rounded-lg">
                          <span className="text-gray-300">Delivery Time</span>
                          <span className="text-secondary-400 font-semibold">{service.deliveryTime}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-dark-800 rounded-lg">
                          <span className="text-gray-300">Features Included</span>
                          <span className="text-accent-400 font-semibold">{service.features.length}+</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-dark-600">
                        <p className="text-sm text-gray-400 mb-4">
                          Need something custom? We offer tailored solutions for unique requirements.
                        </p>
                        <Link 
                          href="/contact"
                          className="block w-full text-center btn-secondary py-2"
                        >
                          Discuss Custom Solution
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Learn More About Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our blog for insights on web development, pricing, and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-xl font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                Web Development Services in Bangladesh
              </h3>
              <p className="text-gray-400 mb-4">
                Complete guide to professional web development services, pricing, and what to expect from local developers.
              </p>
              <Link 
                href="/blog/web-development-service-bangladesh"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Read Article →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-xl font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                Responsive Web Design Guide
              </h3>
              <p className="text-gray-400 mb-4">
                Why mobile-first design is crucial for Bangladesh businesses and how we implement it.
              </p>
              <Link 
                href="/blog/responsive-web-design-bangladesh"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Read Article →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-xl font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                Website Design Pricing in Bangladesh
              </h3>
              <p className="text-gray-400 mb-4">
                Transparent pricing breakdown and factors that affect web development costs in Bangladesh.
              </p>
              <Link 
                href="/blog/website-design-price-bangladesh"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Read Article →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and create a custom solution that fits your needs and budget."
      />
    </div>
  )
}

