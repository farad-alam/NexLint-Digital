'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Smartphone, Tablet, Monitor } from 'lucide-react'
import CTASection from '../../components/CTASection'

export default function ResponsiveWebDesignBangladesh() {
  const tableOfContents = [
    { id: 'mobile-statistics', title: 'Mobile Internet Usage in Bangladesh' },
    { id: 'what-is-responsive', title: 'What is Responsive Web Design?' },
    { id: 'ux-importance', title: 'User Experience and Business Impact' },
    { id: 'design-process', title: 'Our Responsive Design Process' },
    { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
    { id: 'cost-benefits', title: 'Cost vs Benefits Analysis' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ]

  return (
    <div className="pt-32">
      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <Link 
                href="/blog"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-4"
              >
                <ArrowLeft size={16} />
                <span>Back to Blog</span>
              </Link>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="bg-secondary-900/50 text-secondary-400 px-3 py-1 rounded-full">
                  Design
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>January 12, 2024</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>6 min read</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User size={14} />
                  <span>NexLint Digital</span>
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
              Responsive Web Design in Bangladesh: Why Mobile-First Matters
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 70% of internet users in Bangladesh accessing the web through mobile devices, 
              responsive web design isn't just a nice-to-have feature—it's absolutely essential for business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:w-1/4"
              >
                <div className="toc sticky top-32">
                  <h3>Table of Contents</h3>
                  <ul>
                    {tableOfContents.map((item, index) => (
                      <li key={index}>
                        <a href={`#${item.id}`}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:w-3/4 prose"
              >
                <div id="mobile-statistics">
                  <h2>Mobile Internet Usage in Bangladesh</h2>
                  <p>
                    Bangladesh has experienced a mobile internet revolution over the past decade. Here are the key statistics 
                    that every business owner should know:
                  </p>

                  <div className="bg-dark-800 p-6 rounded-lg my-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary-400 mb-2">108M+</div>
                        <div className="text-sm text-gray-400">Total Internet Users</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary-400 mb-2">72%</div>
                        <div className="text-sm text-gray-400">Mobile Internet Users</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400 mb-2">85%</div>
                        <div className="text-sm text-gray-400">First-Time Visits from Mobile</div>
                      </div>
                    </div>
                  </div>

                  <p>
                    These numbers tell a clear story: if your website doesn't work well on mobile devices, 
                    you're essentially turning away 7 out of 10 potential customers before they even see what you offer.
                  </p>

                  <h3>Mobile Shopping Trends</h3>
                  <p>
                    The rise of mobile commerce in Bangladesh has been particularly dramatic:
                  </p>
                  <ul>
                    <li>60% of online purchases are made through mobile devices</li>
                    <li>Mobile payment methods (bKash, Rocket, Nagad) dominate e-commerce</li>
                    <li>Social commerce through Facebook and Instagram is growing rapidly</li>
                    <li>Voice search usage is increasing, especially in Bengali</li>
                  </ul>
                </div>

                <div id="what-is-responsive">
                  <h2>What is Responsive Web Design?</h2>
                  <p>
                    Responsive web design is an approach that ensures your website looks and functions perfectly 
                    across all devices and screen sizes. Instead of creating separate mobile and desktop versions, 
                    responsive design uses flexible layouts that adapt automatically.
                  </p>

                  <h3>Key Components of Responsive Design</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="bg-dark-800 p-6 rounded-lg text-center">
                      <Monitor className="text-primary-400 mx-auto mb-3" size={32} />
                      <h4 className="text-white font-semibold mb-2">Desktop</h4>
                      <p className="text-gray-400 text-sm">Full layout with all features visible</p>
                    </div>
                    <div className="bg-dark-800 p-6 rounded-lg text-center">
                      <Tablet className="text-secondary-400 mx-auto mb-3" size={32} />
                      <h4 className="text-white font-semibold mb-2">Tablet</h4>
                      <p className="text-gray-400 text-sm">Adjusted layout for touch interaction</p>
                    </div>
                    <div className="bg-dark-800 p-6 rounded-lg text-center">
                      <Smartphone className="text-accent-400 mx-auto mb-3" size={32} />
                      <h4 className="text-white font-semibold mb-2">Mobile</h4>
                      <p className="text-gray-400 text-sm">Simplified, thumb-friendly design</p>
                    </div>
                  </div>

                  <h3>Technical Foundation</h3>
                  <p>
                    Responsive design relies on three key technical concepts:
                  </p>
                  <ul>
                    <li><strong>Fluid Grid Systems:</strong> Layouts that scale proportionally</li>
                    <li><strong>Flexible Images:</strong> Images that resize based on screen size</li>
                    <li><strong>CSS Media Queries:</strong> Different styles for different devices</li>
                  </ul>
                </div>

                <div id="ux-importance">
                  <h2>User Experience and Business Impact</h2>
                  <p>
                    Poor mobile experience doesn't just frustrate users—it directly impacts your bottom line. 
                    Here's how responsive design affects your business:
                  </p>

                  <h3>User Behavior Insights</h3>
                  <blockquote>
                    "53% of mobile users abandon websites that take longer than 3 seconds to load, 
                    and non-responsive sites typically load 5x slower on mobile devices."
                  </blockquote>

                  <h3>SEO Benefits</h3>
                  <p>
                    Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site 
                    for ranking and indexing. Responsive websites have significant SEO advantages:
                  </p>
                  <ul>
                    <li>Higher search rankings for mobile searches</li>
                    <li>Reduced bounce rates</li>
                    <li>Faster page loading speeds</li>
                    <li>Better user engagement metrics</li>
                  </ul>

                  <h3>Conversion Rate Impact</h3>
                  <p>
                    Our analysis of Bangladesh e-commerce sites shows that responsive design can improve conversion rates by:
                  </p>
                  <ul>
                    <li>200-300% increase in mobile conversions</li>
                    <li>40% reduction in cart abandonment</li>
                    <li>60% increase in average session duration</li>
                    <li>25% improvement in customer satisfaction scores</li>
                  </ul>
                </div>

                <div id="design-process">
                  <h2>Our Responsive Design Process</h2>
                  <p>
                    Creating effective responsive websites requires a structured approach. Here's how we ensure 
                    your website works perfectly across all devices:
                  </p>

                  <h3>Step 1: Mobile-First Planning</h3>
                  <p>
                    We start with the smallest screen size and work our way up. This ensures that the core functionality 
                    and content are optimized for mobile users first.
                  </p>

                  <h3>Step 2: Content Prioritization</h3>
                  <p>
                    Not all content is equally important on different devices. We help you prioritize:
                  </p>
                  <ul>
                    <li>Essential information for mobile users</li>
                    <li>Secondary content for tablet users</li>
                    <li>Detailed information for desktop users</li>
                  </ul>

                  <h3>Step 3: Touch-Friendly Interface Design</h3>
                  <p>
                    Mobile interfaces require different design considerations:
                  </p>
                  <ul>
                    <li>Minimum 44px touch targets for buttons</li>
                    <li>Adequate spacing between clickable elements</li>
                    <li>Easy-to-use navigation menus</li>
                    <li>Readable font sizes (minimum 16px)</li>
                  </ul>

                  <h3>Step 4: Performance Optimization</h3>
                  <p>
                    Mobile users in Bangladesh often have slower internet connections, so we optimize for speed:
                  </p>
                  <ul>
                    <li>Image compression and lazy loading</li>
                    <li>Minified CSS and JavaScript</li>
                    <li>Efficient caching strategies</li>
                    <li>Content Delivery Network (CDN) integration</li>
                  </ul>

                  <h3>Step 5: Cross-Device Testing</h3>
                  <p>
                    We test your website on actual devices popular in Bangladesh, including:
                  </p>
                  <ul>
                    <li>Budget Android smartphones</li>
                    <li>Popular iPhone models</li>
                    <li>Various tablet sizes</li>
                    <li>Different browsers and operating systems</li>
                  </ul>
                </div>

                <div id="common-mistakes">
                  <h2>Common Mistakes to Avoid</h2>
                  <p>
                    Many businesses make critical errors when implementing responsive design. Here are the most common 
                    mistakes we see and how to avoid them:
                  </p>

                  <h3>Mistake 1: Ignoring Load Times</h3>
                  <p>
                    Many responsive sites load the same heavy images and resources for all devices. This results in:
                  </p>
                  <ul>
                    <li>Slow loading on mobile networks</li>
                    <li>High data usage for users</li>
                    <li>Poor search engine rankings</li>
                  </ul>
                  <p><strong>Solution:</strong> Use responsive images and optimize assets for each device type.</p>

                  <h3>Mistake 2: Poor Touch Interface Design</h3>
                  <p>
                    Desktop-focused designs often have:
                  </p>
                  <ul>
                    <li>Buttons too small for finger taps</li>
                    <li>Links too close together</li>
                    <li>Hover effects that don't work on touch</li>
                  </ul>
                  <p><strong>Solution:</strong> Design for touch-first interaction with appropriate sizing and spacing.</p>

                  <h3>Mistake 3: Hiding Important Content on Mobile</h3>
                  <p>
                    Some sites hide crucial information on mobile to save space, which can:
                  </p>
                  <ul>
                    <li>Hurt SEO rankings</li>
                    <li>Reduce conversion rates</li>
                    <li>Frustrate users looking for information</li>
                  </ul>
                  <p><strong>Solution:</strong> Prioritize and reorganize content instead of hiding it.</p>
                </div>

                <div id="cost-benefits">
                  <h2>Cost vs Benefits Analysis</h2>
                  <p>
                    Many business owners wonder if the investment in responsive design is worth it. Let's break down 
                    the costs and benefits:
                  </p>

                  <h3>Investment Breakdown</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Approach</th>
                        <th>Initial Cost</th>
                        <th>Maintenance</th>
                        <th>Long-term Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Separate Mobile Site</td>
                        <td>Higher</td>
                        <td>Double</td>
                        <td>Low</td>
                      </tr>
                      <tr>
                        <td>Responsive Design</td>
                        <td>Moderate</td>
                        <td>Single</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>Mobile App</td>
                        <td>Highest</td>
                        <td>Highest</td>
                        <td>Variable</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Return on Investment</h3>
                  <p>
                    Based on our client data, responsive design typically delivers:
                  </p>
                  <ul>
                    <li>ROI within 3-6 months</li>
                    <li>20-40% increase in mobile traffic</li>
                    <li>15-25% improvement in conversion rates</li>
                    <li>Reduced bounce rates by 30-50%</li>
                  </ul>

                  <h3>Long-term Benefits</h3>
                  <ul>
                    <li>Future-proof design that adapts to new devices</li>
                    <li>Single codebase reduces maintenance costs</li>
                    <li>Better SEO performance</li>
                    <li>Improved brand perception</li>
                  </ul>
                </div>

                <div id="faq">
                  <h2>Frequently Asked Questions</h2>
                  
                  <h3>How long does it take to make a website responsive?</h3>
                  <p>
                    For new websites, responsive design is built-in from the start. For existing sites, 
                    conversion typically takes 2-4 weeks depending on complexity.
                  </p>

                  <h3>Will responsive design slow down my website?</h3>
                  <p>
                    When implemented correctly, responsive design can actually improve performance by serving 
                    optimized content for each device type.
                  </p>

                  <h3>Do I need a separate mobile app?</h3>
                  <p>
                    For most businesses, a well-designed responsive website provides better value than a mobile app. 
                    Apps are recommended only for businesses with specific functionality requirements.
                  </p>

                  <h3>How do I test if my website is mobile-friendly?</h3>
                  <p>
                    Use Google's Mobile-Friendly Test tool, or simply test your site on various devices. 
                    We also provide comprehensive testing as part of our service.
                  </p>

                  <h3>What about older browsers?</h3>
                  <p>
                    Modern responsive design techniques work well with older browsers. We ensure compatibility 
                    while focusing on the best experience for current users.
                  </p>

                  <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 p-6 rounded-lg border border-primary-500/20 my-8">
                    <h4 className="text-xl font-semibold text-white mb-3">Need a Mobile-Friendly Website?</h4>
                    <p className="text-gray-300 mb-4">
                      Contact NexLint Digital for a free mobile-friendliness audit of your current website and 
                      get recommendations for improvement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="btn-primary text-center">
                        Get Free Audit
                      </Link>
                      <Link href="/services#responsive-design" className="btn-outline text-center">
                        View Our Process
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-poppins text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card group hover:border-primary-500/50">
                <h3 className="text-xl font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                  Web Development Services in Bangladesh
                </h3>
                <p className="text-gray-400 mb-4">
                  Complete guide to professional web development services, pricing, and what to expect from local developers.
                </p>
                <Link 
                  href="/blog/web-development-service-bangladesh"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="card group hover:border-primary-500/50">
                <h3 className="text-xl font-semibold text-white mb-3 font-poppins group-hover:text-primary-400 transition-colors">
                  Website Design Pricing Guide
                </h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive breakdown of website design costs in Bangladesh and tips to get the best value.
                </p>
                <Link 
                  href="/blog/website-design-price-bangladesh"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection 
        title="Ready for a Mobile-Friendly Website?"
        description="Ensure your website works perfectly on all devices. Get a responsive design that converts visitors into customers."
      />
    </div>
  )
}

