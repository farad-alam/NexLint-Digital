'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const services = [
    'Web Development',
    'Responsive Design',
    'E-commerce Solution',
    'SEO Optimization',
    'Website Maintenance',
    'WordPress Development',
    'Other'
  ]

  const budgets = [
    'Under ৳20,000',
    '৳20,000 - ৳50,000',
    '৳50,000 - ৳100,000',
    '৳100,000 - ৳200,000',
    'Over ৳200,000'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
    
    setLoading(false)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="card max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-white mb-6 font-poppins text-center">
        Get Your Free Quote
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="+880 1XX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
            Project Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select budget range</option>
            {budgets.map(budget => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="form-textarea"
          placeholder="Tell us about your project requirements, goals, and any specific features you need..."
        ></textarea>
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-secondary-900/50 border border-secondary-500 rounded-lg flex items-center space-x-3"
        >
          <CheckCircle className="text-secondary-400" size={20} />
          <span className="text-secondary-400">
            Thanks for your message! We'll get back to you within 24 hours.
          </span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center space-x-3"
        >
          <AlertCircle className="text-red-400" size={20} />
          <span className="text-red-400">
            Sorry, there was an error sending your message. Please try again or call us directly.
          </span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary flex items-center justify-center space-x-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
        ) : (
          <Send size={18} />
        )}
        <span>{loading ? 'Sending...' : 'Send Message'}</span>
      </button>

      <p className="text-center text-sm text-gray-400 mt-4">
        Or call us directly at <a href="tel:+8801575061066" className="text-primary-400 hover:underline">+8801575061066</a>
      </p>
    </motion.form>
  )
}