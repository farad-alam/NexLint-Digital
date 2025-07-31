'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import CTASection from '../../components/CTASection'

export default function WebsiteDesignPriceBangladesh() {
  const tableOfContents = [
    { id: 'price-ranges', title: 'Website Design Price Ranges in Bangladesh' },
    { id: 'cost-factors', title: 'Factors That Affect Website Pricing' },
    { id: 'package-comparison', title: 'Package Comparison Table' },
    { id: 'hidden-costs', title: 'Hidden Costs to Watch Out For' },
    { id: 'value-assessment', title: 'How to Assess Value for Money' },
    { id: 'negotiation-tips', title: 'Tips for Negotiating Better Deals' },
    { id: 'conclusion', title: 'Making the Right Investment Decision' }
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
                <span className="bg-accent-900/50 text-accent-400 px-3 py-1 rounded-full">
                  Pricing
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>January 10, 2024</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>10 min read</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User size={14} />
                  <span>NexLint Digital</span>
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
              Website Design Price in Bangladesh: Complete Cost Breakdown 2024
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Planning to build a website in Bangladesh? Understanding the pricing landscape is crucial for making informed decisions. 
              This comprehensive guide breaks down all costs, hidden fees, and tips to get the best value for your investment.
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
                <div id="price-ranges">
                  <h2>Website Design Price Ranges in Bangladesh</h2>
                  <p>
                    Website design prices in Bangladesh vary significantly based on complexity, features, and the developer's expertise level. 
                    Here's a comprehensive breakdown of what you can expect to pay in 2024:
                  </p>

                  <h3>Basic Websites (1-5 Pages)</h3>
                  <div className="bg-dark-800 p-6 rounded-lg my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-400 mb-2">৳10,000 - ৳25,000</div>
                        <div className="text-sm text-gray-400">Bangladesh Taka</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-400 mb-2">$100 - $250</div>
                        <div className="text-sm text-gray-400">US Dollars</div>
                      </div>
                    </div>
                  </div>
                  <p>Perfect for small businesses, personal portfolios, or landing pages. Includes basic design, contact forms, and mobile responsiveness.</p>

                  <h3>Business Websites (5-15 Pages)</h3>
                  <div className="bg-dark-800 p-6 rounded-lg my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-400 mb-2">৳25,000 - ৳75,000</div>
                        <div className="text-sm text-gray-400">Bangladesh Taka</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-400 mb-2">$250 - $750</div>
                        <div className="text-sm text-gray-400">US Dollars</div>
                      </div>
                    </div>
                  </div>
                  <p>Suitable for established businesses needing comprehensive online presence with custom design, CMS integration, and advanced features.</p>

                  <h3>E-commerce Websites</h3>
                  <div className="bg-dark-800 p-6 rounded-lg my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-400 mb-2">৳50,000 - ৳200,000</div>
                        <div className="text-sm text-gray-400">Bangladesh Taka</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-400 mb-2">$500 - $2,000</div>
                        <div className="text-sm text-gray-400">US Dollars</div>
                      </div>
                    </div>
                  </div>
                  <p>Complete online stores with payment gateway integration, inventory management, and customer account systems.</p>

                  <h3>Custom Web Applications</h3>
                  <div className="bg-dark-800 p-6 rounded-lg my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-400 mb-2">৳100,000+</div>
                        <div className="text-sm text-gray-400">Bangladesh Taka</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-400 mb-2">$1,000+</div>
                        <div className="text-sm text-gray-400">US Dollars</div>
                      </div>
                    </div>
                  </div>
                  <p>Complex applications with custom functionality, database integration, user authentication, and advanced features.</p>
                </div>

                <div id="cost-factors">
                  <h2>Factors That Affect Website Pricing</h2>
                  <p>
                    Understanding what influences website pricing helps you make informed decisions and budget appropriately. 
                    Here are the key factors that affect costs:
                  </p>

                  <h3>1. Design Complexity</h3>
                  <ul>
                    <li><strong>Template-based:</strong> Lower cost, faster delivery</li>
                    <li><strong>Custom design:</strong> Higher cost, unique appearance</li>
                    <li><strong>Advanced animations:</strong> Increased development time</li>
                  </ul>

                  <h3>2. Functionality Requirements</h3>
                  <ul>
                    <li><strong>Static pages:</strong> Minimal functionality</li>
                    <li><strong>Dynamic content:</strong> Content management systems</li>
                    <li><strong>E-commerce features:</strong> Shopping carts, payment processing</li>
                    <li><strong>Third-party integrations:</strong> APIs, external services</li>
                  </ul>

                  <h3>3. Content Volume</h3>
                  <p>
                    The amount of content significantly impacts pricing:
                  </p>
                  <ul>
                    <li>Number of pages</li>
                    <li>Content creation requirements</li>
                    <li>Image and media processing</li>
                    <li>Multilingual support (Bengali + English)</li>
                  </ul>

                  <h3>4. Developer Experience Level</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Experience Level</th>
                        <th>Hourly Rate (BDT)</th>
                        <th>Hourly Rate (USD)</th>
                        <th>Quality Expectation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Beginner (0-1 years)</td>
                        <td>৳500 - ৳1,000</td>
                        <td>$5 - $10</td>
                        <td>Basic</td>
                      </tr>
                      <tr>
                        <td>Intermediate (2-4 years)</td>
                        <td>৳1,500 - ৳3,000</td>
                        <td>$15 - $30</td>
                        <td>Good</td>
                      </tr>
                      <tr>
                        <td>Experienced (5+ years)</td>
                        <td>৳3,500 - ৳6,000</td>
                        <td>$35 - $60</td>
                        <td>Excellent</td>
                      </tr>
                      <tr>
                        <td>Expert/Agency</td>
                        <td>৳6,000+</td>
                        <td>$60+</td>
                        <td>Premium</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>5. Timeline Requirements</h3>
                  <p>
                    Urgent projects typically cost 25-50% more than standard timelines:
                  </p>
                  <ul>
                    <li><strong>Rush delivery (1-2 weeks):</strong> +50% premium</li>
                    <li><strong>Standard timeline (3-4 weeks):</strong> Normal pricing</li>
                    <li><strong>Flexible timeline (6+ weeks):</strong> Potential discount</li>
                  </ul>
                </div>

                <div id="package-comparison">
                  <h2>Package Comparison Table</h2>
                  <p>
                    Here's a detailed comparison of typical website packages offered by Bangladesh web development agencies:
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>Feature</th>
                          <th>Starter</th>
                          <th>Business</th>
                          <th>E-commerce</th>
                          <th>Custom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Price Range</strong></td>
                          <td>৳15,000 - ৳30,000</td>
                          <td>৳30,000 - ৳80,000</td>
                          <td>৳75,000 - ৳200,000</td>
                          <td>৳100,000+</td>
                        </tr>
                        <tr>
                          <td>Number of Pages</td>
                          <td>3-5 pages</td>
                          <td>10-15 pages</td>
                          <td>20+ pages</td>
                          <td>Unlimited</td>
                        </tr>
                        <tr>
                          <td>Design Type</td>
                          <td>Template-based</td>
                          <td>Semi-custom</td>
                          <td>Custom design</td>
                          <td>Fully custom</td>
                        </tr>
                        <tr>
                          <td>Mobile Responsive</td>
                          <td>✓</td>
                          <td>✓</td>
                          <td>✓</td>
                          <td>✓</td>
                        </tr>
                        <tr>
                          <td>Content Management</td>
                          <td>Basic</td>
                          <td>WordPress/CMS</td>
                          <td>Advanced CMS</td>
                          <td>Custom CMS</td>
                        </tr>
                        <tr>
                          <td>SEO Optimization</td>
                          <td>Basic</td>
                          <td>Standard</td>
                          <td>Advanced</td>
                          <td>Comprehensive</td>
                        </tr>
                        <tr>
                          <td>Payment Integration</td>
                          <td>✗</td>
                          <td>✗</td>
                          <td>✓</td>
                          <td>✓</td>
                        </tr>
                        <tr>
                          <td>Social Media Integration</td>
                          <td>Basic</td>
                          <td>✓</td>
                          <td>✓</td>
                          <td>Advanced</td>
                        </tr>
                        <tr>
                          <td>Analytics Setup</td>
                          <td>✗</td>
                          <td>✓</td>
                          <td>✓</td>
                          <td>Advanced</td>
                        </tr>
                        <tr>
                          <td>Support Period</td>
                          <td>1 month</td>
                          <td>3 months</td>
                          <td>6 months</td>
                          <td>12 months</td>
                        </tr>
                        <tr>
                          <td>Delivery Time</td>
                          <td>1-2 weeks</td>
                          <td>3-4 weeks</td>
                          <td>6-8 weeks</td>
                          <td>8-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="hidden-costs">
                  <h2>Hidden Costs to Watch Out For</h2>
                  <p>
                    Many businesses are surprised by additional costs that weren't clearly communicated upfront. 
                    Here are common hidden fees and how to avoid them:
                  </p>

                  <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg my-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="text-red-400 mt-1" size={20} />
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">Common Hidden Costs</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>Domain registration and renewal fees</li>
                          <li>Web hosting charges</li>
                          <li>SSL certificate costs</li>
                          <li>Premium plugin/theme licenses</li>
                          <li>Content creation and copywriting</li>
                          <li>Stock photos and graphics</li>
                          <li>Additional revisions beyond included limit</li>
                          <li>Training and handover sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3>Annual Recurring Costs</h3>
                  <p>
                    Beyond the initial development cost, websites have ongoing expenses:
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Annual Cost (BDT)</th>
                        <th>Annual Cost (USD)</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Domain Name</td>
                        <td>৳1,200 - ৳2,000</td>
                        <td>$12 - $20</td>
                        <td>.com domains</td>
                      </tr>
                      <tr>
                        <td>Web Hosting</td>
                        <td>৳3,000 - ৳15,000</td>
                        <td>$30 - $150</td>
                        <td>Depends on traffic</td>
                      </tr>
                      <tr>
                        <td>SSL Certificate</td>
                        <td>৳0 - ৳8,000</td>
                        <td>$0 - $80</td>
                        <td>Free options available</td>
                      </tr>
                      <tr>
                        <td>Maintenance</td>
                        <td>৳12,000 - ৳60,000</td>
                        <td>$120 - $600</td>
                        <td>Security updates, backups</td>
                      </tr>
                      <tr>
                        <td>SEO Services</td>
                        <td>৳24,000 - ৳120,000</td>
                        <td>$240 - $1,200</td>
                        <td>Optional but recommended</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>How to Get Transparent Pricing</h3>
                  <ul>
                    <li>Request detailed written quotes</li>
                    <li>Ask about all recurring costs upfront</li>
                    <li>Clarify what's included in the base price</li>
                    <li>Understand the revision policy</li>
                    <li>Get quotes from multiple developers</li>
                  </ul>
                </div>

                <div id="value-assessment">
                  <h2>How to Assess Value for Money</h2>
                  <p>
                    Price alone doesn't determine value. Here's how to evaluate whether you're getting good value for your investment:
                  </p>

                  <h3>Quality Indicators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-dark-800 p-6 rounded-lg">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <CheckCircle className="text-secondary-400 mr-2" size={20} />
                        Good Value Signs
                      </h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>Detailed project timeline</li>
                        <li>Clear communication process</li>
                        <li>Portfolio of similar work</li>
                        <li>Client testimonials</li>
                        <li>Ongoing support included</li>
                        <li>Modern coding standards</li>
                        <li>SEO best practices</li>
                      </ul>
                    </div>
                    <div className="bg-dark-800 p-6 rounded-lg">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <AlertCircle className="text-red-400 mr-2" size={20} />
                        Red Flags
                      </h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>Extremely low prices</li>
                        <li>Vague project descriptions</li>
                        <li>No contract or terms</li>
                        <li>100% payment upfront</li>
                        <li>No portfolio to show</li>
                        <li>Poor communication</li>
                        <li>Unrealistic timelines</li>
                      </ul>
                    </div>
                  </div>

                  <h3>Questions to Ask Before Hiring</h3>
                  <ol>
                    <li>Can I see examples of similar projects you've completed?</li>
                    <li>What technologies will you use and why?</li>
                    <li>How do you handle project changes and revisions?</li>
                    <li>What happens if the project runs over budget or timeline?</li>
                    <li>What kind of support do you provide after launch?</li>
                    <li>How do you ensure the website will be secure?</li>
                    <li>Will the website be optimized for search engines?</li>
                    <li>Can you provide references from recent clients?</li>
                  </ol>

                  <h3>ROI Calculation</h3>
                  <p>
                    Consider the potential return on investment when evaluating costs:
                  </p>
                  <blockquote>
                    "A well-designed website that increases your customer inquiries by just 10% can pay for itself within 3-6 months for most businesses."
                  </blockquote>
                </div>

                <div id="negotiation-tips">
                  <h2>Tips for Negotiating Better Deals</h2>
                  <p>
                    Smart negotiation can help you get better value without compromising quality. Here are proven strategies:
                  </p>

                  <h3>Timing Strategies</h3>
                  <ul>
                    <li><strong>Off-peak seasons:</strong> December-January often have lower rates</li>
                    <li><strong>Bulk projects:</strong> Package multiple services for discounts</li>
                    <li><strong>Flexible timelines:</strong> Longer deadlines can reduce costs</li>
                    <li><strong>Long-term commitments:</strong> Annual maintenance contracts for lower rates</li>
                  </ul>

                  <h3>Package Modifications</h3>
                  <ul>
                    <li>Start with essential features, add more later</li>
                    <li>Use stock photos initially, upgrade to custom later</li>
                    <li>Begin with template design, customize over time</li>
                    <li>Phase development over several months</li>
                  </ul>

                  <h3>Value-Added Negotiations</h3>
                  <p>
                    Instead of just asking for lower prices, negotiate for additional value:
                  </p>
                  <ul>
                    <li>Extended support period</li>
                    <li>Additional training sessions</li>
                    <li>Free minor updates for 6 months</li>
                    <li>Social media profile setup</li>
                    <li>Basic SEO optimization</li>
                    <li>Google Analytics configuration</li>
                  </ul>

                  <h3>Payment Term Negotiations</h3>
                  <ul>
                    <li>Spread payments over project milestones</li>
                    <li>Negotiate 30-50% upfront instead of full payment</li>
                    <li>Request performance-based final payment</li>
                    <li>Ask for payment discounts for early payment</li>
                  </ul>
                </div>

                <div id="conclusion">
                  <h2>Making the Right Investment Decision</h2>
                  <p>
                    Choosing the right website development package is a crucial business decision that affects your online success for years to come. 
                    Here's how to make the best choice:
                  </p>

                  <h3>Budget Planning Framework</h3>
                  <ol>
                    <li><strong>Assess your needs:</strong> List must-have vs. nice-to-have features</li>
                    <li><strong>Set a realistic budget:</strong> Include development + first-year operational costs</li>
                    <li><strong>Get multiple quotes:</strong> Compare at least 3 different proposals</li>
                    <li><strong>Evaluate total value:</strong> Consider quality, support, and long-term costs</li>
                    <li><strong>Plan for growth:</strong> Choose solutions that can scale with your business</li>
                  </ol>

                  <h3>Final Recommendations</h3>
                  <ul>
                    <li>Don't choose based on price alone</li>
                    <li>Invest in responsive design - it's not optional</li>
                    <li>Prioritize ongoing support and maintenance</li>
                    <li>Consider SEO optimization from the start</li>
                    <li>Plan for content creation and updates</li>
                  </ul>

                  <h3>When to Invest More</h3>
                  <p>
                    Consider higher-priced options when:
                  </p>
                  <ul>
                    <li>Your website is crucial for business revenue</li>
                    <li>You need complex functionality or integrations</li>
                    <li>Brand image is important to your success</li>
                    <li>You expect high traffic volumes</li>
                    <li>You need ongoing marketing support</li>
                  </ul>

                  <h3>When to Start Simple</h3>
                  <p>
                    Basic packages work well when:
                  </p>
                  <ul>
                    <li>You're testing a new business idea</li>
                    <li>Budget is very limited initially</li>
                    <li>Your needs are straightforward</li>
                    <li>You plan to upgrade later</li>
                  </ul>

                  <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 p-6 rounded-lg border border-primary-500/20 my-8">
                    <h4 className="text-xl font-semibold text-white mb-3">Ready to Get Your Quote?</h4>
                    <p className="text-gray-300 mb-4">
                      Contact NexLint Digital for a personalized quote based on your specific requirements. 
                      We provide transparent pricing with no hidden fees and flexible payment options.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="btn-primary text-center">
                        Get Custom Quote
                      </Link>
                      <Link href="/pricing" className="btn-outline text-center">
                        View Package Pricing
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
                  Complete guide to professional web development services, what to expect, and how to choose the right developer.
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
                  Responsive Web Design Guide
                </h3>
                <p className="text-gray-400 mb-4">
                  Learn why mobile-first design is crucial for Bangladesh businesses and how it impacts your success.
                </p>
                <Link 
                  href="/blog/responsive-web-design-bangladesh"
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
        title="Need a Custom Quote for Your Project?"
        description="Every project is unique. Get a personalized quote based on your specific requirements with transparent pricing and no hidden fees."
      />
    </div>
  )
}

