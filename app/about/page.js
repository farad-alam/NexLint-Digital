'use client'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import { Award, Code, Zap, Heart, Target } from 'lucide-react'
import CTASection from '../components/CTASection'
import siteData from '../../public/data/site.json'
import teamData from '../../public/data/team.json'

export default function About() {
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '85+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '12+', label: 'Team Members' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our success. We work closely with each client to understand their unique needs and deliver solutions that exceed expectations.'
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'We use the latest technologies and best practices to build websites that are fast, secure, and scalable for future growth.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every website we build is designed with clear goals in mind - whether it\'s generating leads, increasing sales, or building brand awareness.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We understand that time is money. Our efficient processes and experienced team ensure your project is delivered on time, every time.'
    }
  ]

  const techStack = [
    'React & Next.js',
    'WordPress & PHP',
    'Laravel Framework',
    'Node.js & Express',
    'MySQL & PostgreSQL',
    'Tailwind CSS',
    'Google Analytics',
    'AWS & DigitalOcean'
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
              About <span className="text-gradient">NexLint Digital</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a passionate team of web developers, designers, and digital strategists based in Rajshahi, Bangladesh, dedicated to helping businesses succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in {siteData.brand.established} in Rajshahi, Bangladesh, NexLint Digital emerged from a simple belief: 
                  every business deserves a professional online presence that drives real results.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service digital agency, 
                  but we've never lost sight of our core mission - helping local businesses thrive in the digital world.
                </p>
                <p>
                  We understand the unique challenges faced by businesses in Bangladesh, from budget constraints to 
                  specific market needs. That's why we've developed packages and services specifically tailored 
                  for the local market while maintaining international quality standards.
                </p>
                <p>
                  Today, we're proud to have helped over 100 businesses establish and grow their online presence, 
                  from small local shops to large enterprises across Bangladesh.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 font-poppins">Our Mission</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To empower Bangladesh businesses with modern, effective websites that drive growth and success. 
                  We believe that quality web development should be accessible to businesses of all sizes.
                </p>
                
                <h3 className="text-2xl font-semibold text-white mb-6 font-poppins">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading web development agency in Bangladesh, known for our commitment to quality, 
                  innovation, and client success. We envision a digital future where every Bangladesh business 
                  has a strong online presence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-poppins">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group hover:border-primary-500/50"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-dark-700 text-xs text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Trust */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
                Technologies We <span className="text-gradient">Master</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We use cutting-edge technologies and proven frameworks to build robust, scalable websites.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 border border-dark-600 rounded-lg p-3 text-center text-gray-300 hover:border-primary-500/50 transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
                Why <span className="text-gradient">Trust Us</span>?
              </h2>
              <div className="space-y-4">
                {siteData.trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-dark-800 rounded-lg border border-dark-600"
                  >
                    <Award className="text-primary-400" size={24} />
                    <span className="text-gray-300 font-medium">{badge}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-lg border border-primary-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 font-poppins">
                  Local Bangladesh Team
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a local team based in Rajshahi, we understand the Bangladesh market, business culture, and customer expectations. 
                  We speak your language (literally!) and are always available for face-to-face meetings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Work with Us?"
        description="Join our growing family of satisfied clients. Let's build something amazing together."
        showStats={true}
      />
    </div>
  )
}

