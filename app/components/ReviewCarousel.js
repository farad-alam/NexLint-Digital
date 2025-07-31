'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ReviewCarousel({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
  }

  const prevReview = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
  }

  if (!reviews || reviews.length === 0) return null

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="card text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-lg text-gray-300 mb-6 italic">
            "{reviews[currentIndex].text}"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {reviews[currentIndex].avatar}
              </span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">{reviews[currentIndex].name}</p>
              <p className="text-sm text-gray-400">{reviews[currentIndex].business}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevReview}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-dark-700 hover:bg-dark-600 rounded-full text-gray-400 hover:text-white transition-colors"
        aria-label="Previous review"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextReview}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-dark-700 hover:bg-dark-600 rounded-full text-gray-400 hover:text-white transition-colors"
        aria-label="Next review"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-500' : 'bg-dark-600'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}