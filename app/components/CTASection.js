'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import siteData from '../../public/data/site.json'

export default function CTASection({ 
  title = "Ready to Get Started?", 
  description = "Let's build something amazing together. Contact us today for a free consultation.",
  showStats = false 
}) {
  return (
    <section className="py-20 bg-gradient-to-r from-dark-800 to-dark-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            {title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{siteData.socialProof.projectsCompleted}</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-2">{siteData.socialProof.clientsSatisfied}</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">{siteData.socialProof.yearsExperience}</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{siteData.socialProof.teamMembers}</div>
                <div className="text-gray-400">Team Members</div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </Link>
            
            <a 
              href={`tel:${siteData.brand.phone}`}
              className="btn-outline flex items-center space-x-2 px-8 py-4 text-lg"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>

            <a 
              href={`https://wa.me/${siteData.brand.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2 px-8 py-4 text-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>🕒 Response within 2 hours • 📧 Free consultation • 🇧🇩 Local Bangladesh team</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}