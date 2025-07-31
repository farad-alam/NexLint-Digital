'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react'
import CTASection from '../../components/CTASection'

export default function WebDevelopmentServiceBangladesh() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction to Web Development in Bangladesh' },
    { id: 'why-local-matters', title: 'Why Choosing Local Developers Matters' },
    { id: 'services-overview', title: 'Types of Web Development Services' },
    { id: 'pricing-breakdown', title: 'Pricing Structure and Packages' },
    { id: 'case-study', title: 'Success Story: Local Business Transformation' },
    { id: 'choosing-developer', title: 'How to Choose the Right Developer' },
    { id: 'conclusion', title: 'Conclusion and Next Steps' }
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
                <span className="bg-primary-900/50 text-primary-400 px-3 py-1 rounded-full">
                  Web Development
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>January 15, 2024</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>8 min read</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User size={14} />
                  <span>NexLint Digital</span>
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
              Web Development Services in Bangladesh: Complete Guide 2024
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Are you looking for professional web development services in Bangladesh? With the digital landscape rapidly evolving, 
              having a strong online presence is no longer optional—it's essential for business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-12">
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
                <div id="introduction">
                  <h2>Introduction to Web Development in Bangladesh</h2>
                  <p>
                    Bangladesh's digital economy is booming, with over 100 million internet users and growing e-commerce adoption. 
                    In this environment, businesses that don't have a professional online presence risk being left behind. 
                    But what exactly does professional web development entail, and how do you choose the right service provider?
                  </p>
                  
                  <p>
                    Web development services in Bangladesh have evolved significantly over the past decade. What once was a luxury 
                    for large corporations has become accessible to businesses of all sizes. From small local shops to large enterprises, 
                    companies are recognizing that a well-designed website is their most powerful marketing tool.
                  </p>

                  <blockquote>
                    "A professional website is like having a 24/7 salesperson who never takes a break and can serve customers from anywhere in the world."
                  </blockquote>
                </div>

                <div id="why-local-matters">
                  <h2>Why Choosing Local Developers Matters</h2>
                  <p>
                    When searching for web development services, you might wonder: should I hire locally or go international? 
                    Here's why choosing a Bangladesh-based web development team offers unique advantages:
                  </p>

                  <h3>Cultural Understanding</h3>
                  <p>
                    Local developers understand Bangladesh's business culture, customer behavior, and market preferences. 
                    They know that trust-building elements, local payment methods (bKash, Rocket, Nagad), and Bengali language 
                    support might be crucial for your success.
                  </p>

                  <h3>Time Zone Alignment</h3>
                  <p>
                    Working with developers in the same time zone means faster communication, quicker problem resolution, 
                    and the ability to have real-time discussions about your project.
                  </p>

                  <h3>Legal and Compliance Knowledge</h3>
                  <p>
                    Local developers are familiar with Bangladesh's legal requirements, tax structures, and compliance issues 
                    that might affect your website, especially for e-commerce projects.
                  </p>

                  <h3>Cost-Effective Solutions</h3>
                  <p>
                    Bangladesh offers some of the most competitive web development rates globally while maintaining high quality standards. 
                    You get international-quality work at local prices.
                  </p>
                </div>

                <div id="services-overview">
                  <h2>Types of Web Development Services</h2>
                  <p>
                    Modern web development encompasses various services tailored to different business needs. Here's a breakdown 
                    of the most popular services in Bangladesh:
                  </p>

                  <h3>1. Custom Website Development</h3>
                  <p>
                    Custom websites built from scratch using modern technologies like React, Laravel, or WordPress. 
                    These solutions are tailored specifically to your business requirements and brand identity.
                  </p>
                  <ul>
                    <li>Unique design and functionality</li>
                    <li>Scalable architecture</li>
                    <li>Integration with third-party services</li>
                    <li>Custom content management systems</li>
                  </ul>

                  <h3>2. E-commerce Development</h3>
                  <p>
                    Online stores with complete shopping cart functionality, payment gateway integration, and inventory management. 
                    Popular platforms include WooCommerce, Shopify, and custom solutions.
                  </p>

                  <h3>3. Responsive Web Design</h3>
                  <p>
                    With over 70% of internet traffic in Bangladesh coming from mobile devices, responsive design isn't optional—it's essential. 
                    This service ensures your website works perfectly on all screen sizes.
                  </p>

                  <h3>4. SEO and Digital Marketing</h3>
                  <p>
                    Building a website is just the first step. SEO services help your site rank higher in Google searches, 
                    driving organic traffic and potential customers to your business.
                  </p>

                  <h3>5. Website Maintenance and Support</h3>
                  <p>
                    Ongoing maintenance services keep your website secure, updated, and performing optimally. 
                    This includes security updates, content updates, and technical support.
                  </p>
                </div>

                <div id="pricing-breakdown">
                  <h2>Pricing Structure and Packages</h2>
                  <p>
                    Understanding web development pricing in Bangladesh helps you budget effectively and choose the right package. 
                    Here's a comprehensive breakdown:
                  </p>

                  <table>
                    <thead>
                      <tr>
                        <th>Package Type</th>
                        <th>Price Range (BDT)</th>
                        <th>Price Range (USD)</th>
                        <th>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Basic Website</td>
                        <td>৳15,000 - ৳40,000</td>
                        <td>$150 - $400</td>
                        <td>Small businesses, portfolios</td>
                      </tr>
                      <tr>
                        <td>Business Website</td>
                        <td>৳35,000 - ৳80,000</td>
                        <td>$350 - $800</td>
                        <td>Growing businesses, services</td>
                      </tr>
                      <tr>
                        <td>E-commerce Store</td>
                        <td>৳75,000 - ৳200,000</td>
                        <td>$750 - $2,000</td>
                        <td>Online retail, product sales</td>
                      </tr>
                      <tr>
                        <td>Custom Development</td>
                        <td>৳100,000+</td>
                        <td>$1,000+</td>
                        <td>Complex requirements, enterprises</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Factors Affecting Pricing</h3>
                  <ul>
                    <li><strong>Design Complexity:</strong> Custom designs cost more than template-based solutions</li>
                    <li><strong>Functionality Requirements:</strong> Advanced features increase development time</li>
                    <li><strong>Content Volume:</strong> More pages require more development and design work</li>
                    <li><strong>Integration Needs:</strong> Third-party integrations add to the complexity</li>
                    <li><strong>Timeline:</strong> Rush projects may incur additional charges</li>
                  </ul>
                </div>

                <div id="case-study">
                  <h2>Success Story: Local Business Transformation</h2>
                  <p>
                    Let's look at how proper web development transformed a local Rajshahi business:
                  </p>

                  <h3>The Challenge</h3>
                  <p>
                    Hassan Trading Ltd., a traditional textile business operating for 20 years, was struggling to reach new customers. 
                    Their only presence was a small physical store, and younger customers weren't finding them.
                  </p>

                  <h3>The Solution</h3>
                  <p>
                    We developed a comprehensive e-commerce website featuring:
                  </p>
                  <ul>
                    <li>Mobile-responsive design optimized for smartphone shopping</li>
                    <li>Integration with local payment gateways (bKash, Rocket, Nagad)</li>
                    <li>Bengali and English language support</li>
                    <li>SEO optimization targeting local keywords</li>
                    <li>Social media integration</li>
                  </ul>

                  <h3>The Results</h3>
                  <div className="bg-dark-800 p-6 rounded-lg my-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary-400">300%</div>
                        <div className="text-sm text-gray-400">Increase in inquiries</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary-400">150%</div>
                        <div className="text-sm text-gray-400">Revenue growth</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">50+</div>
                        <div className="text-sm text-gray-400">New customers monthly</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary-400">2 months</div>
                        <div className="text-sm text-gray-400">ROI timeline</div>
                      </div>
                    </div>
                  </div>

                  <blockquote>
                    "Our website has completely changed how we do business. We're now getting orders from all over Bangladesh, 
                    and our revenue has grown by 150% in just 6 months." - Ahmed Hassan, Owner
                  </blockquote>
                </div>

                <div id="choosing-developer">
                  <h2>How to Choose the Right Developer</h2>
                  <p>
                    Selecting the right web development partner is crucial for your project's success. Here's what to look for:
                  </p>

                  <h3>Portfolio and Experience</h3>
                  <p>
                    Review their previous work, especially projects similar to yours. Look for:
                  </p>
                  <ul>
                    <li>Design quality and user experience</li>
                    <li>Website loading speed and performance</li>
                    <li>Mobile responsiveness</li>
                    <li>Functional completeness</li>
                  </ul>

                  <h3>Technical Expertise</h3>
                  <p>
                    Ensure they're proficient in modern technologies:
                  </p>
                  <ul>
                    <li>Frontend: HTML5, CSS3, JavaScript, React</li>
                    <li>Backend: PHP/Laravel, Node.js, Python</li>
                    <li>Databases: MySQL, PostgreSQL</li>
                    <li>CMS: WordPress, custom solutions</li>
                  </ul>

                  <h3>Communication and Support</h3>
                  <p>
                    Good communication is essential for project success:
                  </p>
                  <ul>
                    <li>Regular project updates</li>
                    <li>Responsive to queries</li>
                    <li>Clear documentation</li>
                    <li>Post-launch support availability</li>
                  </ul>

                  <h3>Pricing Transparency</h3>
                  <p>
                    Look for developers who provide:
                  </p>
                  <ul>
                    <li>Detailed project quotes</li>
                    <li>Clear payment terms</li>
                    <li>No hidden fees</li>
                    <li>Flexible payment options</li>
                  </ul>
                </div>

                <div id="conclusion">
                  <h2>Conclusion and Next Steps</h2>
                  <p>
                    Professional web development services in Bangladesh offer tremendous value for businesses looking to establish 
                    or enhance their online presence. With competitive pricing, local market knowledge, and growing technical expertise, 
                    Bangladesh has become a hub for quality web development.
                  </p>

                  <p>
                    The key to success lies in choosing the right development partner who understands your business goals, 
                    target audience, and budget constraints. Whether you need a simple business website or a complex e-commerce platform, 
                    the right developer can help transform your digital vision into reality.
                  </p>

                  <h3>Ready to Get Started?</h3>
                  <p>
                    If you're considering web development services for your business, here are your next steps:
                  </p>
                  <ol>
                    <li>Define your project requirements and goals</li>
                    <li>Set a realistic budget based on the pricing guidelines above</li>
                    <li>Research and shortlist potential developers</li>
                    <li>Request detailed quotes and project timelines</li>
                    <li>Choose a partner who aligns with your vision and budget</li>
                  </ol>

                  <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 p-6 rounded-lg border border-primary-500/20 my-8">
                    <h4 className="text-xl font-semibold text-white mb-3">Need a Site That Works?</h4>
                    <p className="text-gray-300 mb-4">
                      Contact NexLint Digital for a free consultation and detailed quote for your project. 
                      We specialize in creating websites that drive real business results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="btn-primary text-center">
                        Get Free Quote
                      </Link>
                      <Link href="/services" className="btn-outline text-center">
                        View Our Services
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
                  Responsive Web Design in Bangladesh
                </h3>
                <p className="text-gray-400 mb-4">
                  Learn why mobile-first design is crucial for Bangladesh businesses and how it can boost your online success.
                </p>
                <Link 
                  href="/blog/responsive-web-design-bangladesh"
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
        title="Ready to Start Your Web Development Project?"
        description="Get a professional website that drives real business results. Contact us for a free consultation and detailed quote."
      />
    </div>
  )
}

