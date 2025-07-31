'use client'
import { motion } from 'framer-motion'
import PricingTable from '../components/PricingTable'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import pricingData from '../../public/data/pricing.json'
import faqsData from '../../public/data/faqs.json'

export default function Pricing() {
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
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect package for your business. No hidden fees, no surprises - just honest pricing for quality work.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 text-secondary-400">
                <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                <span>Free consultation & quote</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span>50% payment upfront, 50% on completion</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-400">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span>All packages include mobile optimization</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <PricingTable plans={pricingData.plans} />
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-800 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-poppins">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Logo Design</h3>
                <p className="text-gray-400 text-sm mb-3">Professional logo design for your brand</p>
                <div className="text-primary-400 font-semibold">৳8,000 - ৳15,000</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Content Writing</h3>
                <p className="text-gray-400 text-sm mb-3">SEO-optimized content for your website</p>
                <div className="text-primary-400 font-semibold">৳2,000 per page</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Photography</h3>
                <p className="text-gray-400 text-sm mb-3">Professional product or business photography</p>
                <div className="text-primary-400 font-semibold">৳15,000 per session</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Social Media Setup</h3>
                <p className="text-gray-400 text-sm mb-3">Professional social media profiles and integration</p>
                <div className="text-primary-400 font-semibold">৳5,000</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Google Ads Setup</h3>
                <p className="text-gray-400 text-sm mb-3">Professional Google Ads campaign setup and optimization</p>
                <div className="text-primary-400 font-semibold">৳20,000</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Domain & Hosting</h3>
                <p className="text-gray-400 text-sm mb-3">Domain registration and reliable hosting setup</p>
                <div className="text-primary-400 font-semibold">৳8,000/year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Got questions about our pricing or services? We've got answers.
            </p>
          </motion.div>

          <FAQAccordion faqs={faqsData.faqs} />
        </div>
      </section>

      <CTASection 
        title="Need a Custom Quote?"
        description="Every project is unique. Contact us for a personalized quote based on your specific requirements."
      />
    </div>
  )
}

