'use client'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Shield, Headphones, Star } from 'lucide-react'
import Link from 'next/link'
import ServiceCard from './components/ServiceCard'
import ReviewCarousel from './components/ReviewCarousel'
import CTASection from './components/CTASection'
import servicesData from '../public/data/services.json'
import reviewsData from '../public/data/reviews.json'
import siteData from '../public/data/site.json'

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with Core Web Vitals scores above 95. Your visitors won't wait."
    },
    {
      icon: CheckCircle,
      title: "High Converting",
      description: "Designed to turn visitors into customers with proven UX patterns and clear calls-to-action."
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "24/7 technical support and maintenance to keep your website running smoothly."
    }
  ]

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Websites That <span className="text-gradient">Work for You</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Professional web development services in Bangladesh. We create modern, responsive websites that drive real business results.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/contact"
                className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link 
                href="/services"
                className="btn-outline px-8 py-4 text-lg"
              >
                View Our Services
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-secondary-400" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-yellow-400" />
                <span>5.0 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-primary-400" />
                <span>Local Bangladesh Team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Why Choose <span className="text-gradient">NexLint Digital</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just build websites – we create digital experiences that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group hover:border-primary-500/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored for Bangladesh businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/services"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-3"
            >
              <span>View All Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it – hear from businesses we've helped grow online.
            </p>
          </motion.div>

          <ReviewCarousel reviews={reviewsData.reviews} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Online Presence?"
        description="Join 100+ satisfied clients who've grown their business with our professional web development services."
        showStats={true}
      />
    </div>
  )
}