'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import siteData from '../../public/data/site.json'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: siteData.brand.phone,
      link: `tel:${siteData.brand.phone}`,
      description: 'Available 9 AM - 9 PM, 7 days a week'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: siteData.brand.whatsapp,
      link: `https://wa.me/${siteData.brand.whatsapp.replace('+', '')}`,
      description: 'Quick response via WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: siteData.brand.email,
      link: `mailto:${siteData.brand.email}`,
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Office',
      content: siteData.brand.address,
      link: '#',
      description: 'Schedule an in-person meeting'
    }
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '2:00 PM - 8:00 PM' }
  ]

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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to start your project? We'd love to hear from you. Contact us today for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 text-secondary-400">
                <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                <span>Free consultation & quote</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-400">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span>Local Bangladesh team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-poppins">
                  {info.title}
                </h3>
                <p className="text-primary-400 font-medium mb-2">
                  {info.content}
                </p>
                <p className="text-gray-400 text-sm">
                  {info.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
                  Send Us a Message
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
                </p>
              </motion.div>
              
              <ContactForm />
            </div>

            {/* Map and Working Hours */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                  Our Location
                </h3>
                <div 
                  className="rounded-lg overflow-hidden border border-dark-600"
                  dangerouslySetInnerHTML={{ __html: siteData.contact.mapEmbed }}
                />
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="text-primary-400" size={24} />
                  <h3 className="text-xl font-semibold text-white font-poppins">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-primary-400 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-secondary-900/50 to-primary-900/50 rounded-lg border border-secondary-500/20">
                  <p className="text-secondary-400 text-sm">
                    🚀 <strong>Emergency Support:</strong> For urgent issues with existing websites, we're available 24/7 via WhatsApp.
                  </p>
                </div>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="card bg-gradient-to-br from-primary-900/20 to-secondary-900/20 border-primary-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4 font-poppins">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-300 mb-6">
                  For urgent inquiries or quick questions, reach out to us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={`tel:${siteData.brand.phone}`}
                    className="btn-primary flex items-center justify-center space-x-2 flex-1"
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href={`https://wa.me/${siteData.brand.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center space-x-2 flex-1"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
              Before You Contact Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              You might find the answer to your question in our frequently asked questions or pricing page.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-lg font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                View Our Pricing
              </h3>
              <p className="text-gray-400 mb-4">
                Check out our transparent pricing packages and find the perfect fit for your budget.
              </p>
              <a 
                href="/pricing"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                View Pricing →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-lg font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                Our Services
              </h3>
              <p className="text-gray-400 mb-4">
                Learn more about our web development services and what's included in each package.
              </p>
              <a 
                href="/services"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                View Services →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-lg font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-400 mb-4">
                Find answers to common questions about our process, pricing, and timelines.
              </p>
              <a 
                href="/pricing#faq"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                View FAQ →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

