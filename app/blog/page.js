'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      slug: 'web-development-service-bangladesh',
      title: 'Web Development Services in Bangladesh: Complete Guide 2024',
      excerpt: 'Everything you need to know about professional web development services in Bangladesh, including pricing, what to expect, and how to choose the right developer.',
      category: 'Web Development',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: 'responsive-web-design-bangladesh',
      title: 'Responsive Web Design in Bangladesh: Why Mobile-First Matters',
      excerpt: 'Learn why responsive web design is crucial for Bangladesh businesses and how mobile-first approach can boost your online success.',
      category: 'Design',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      featured: true
    },
    {
      slug: 'website-design-price-bangladesh',
      title: 'Website Design Price in Bangladesh: Complete Cost Breakdown 2024',
      excerpt: 'Transparent breakdown of website design costs in Bangladesh, factors affecting pricing, and tips to get the best value for your investment.',
      category: 'Pricing',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      featured: true
    }
  ]

  const categories = ['all', 'Web Development', 'Design', 'Pricing', 'SEO', 'E-commerce']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, tips, and guides on web development, design, and digital marketing for Bangladesh businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-400 mb-4">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`card group hover:border-primary-500/50 ${post.featured ? 'ring-1 ring-primary-500/20' : ''}`}
                >
                  {post.featured && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="bg-primary-900/50 text-primary-400 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-GB')}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
              Stay Updated with <span className="text-gradient">Web Development Insights</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest tips, trends, and insights on web development specifically for Bangladesh businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

