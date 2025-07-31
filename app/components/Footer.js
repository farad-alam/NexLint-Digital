import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import siteData from "../../public/data/site.json";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div> */}
              <div className="w-10 h-10 rounded-lg relative overflow-hidden">
                <Image
                  src="/nexlint-favicon.jpg"
                  alt="NexLint Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="">
                <h3 className="text-xl font-bold font-poppins text-white">
                  {siteData.brand.name}
                </h3>
                <p className="text-xs text-gray-400 -mt-1">
                  {siteData.brand.tagline}
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Professional web development services in Bangladesh. We create
              modern, responsive websites that drive results for your business.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NexLint/"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/nexline-solution/"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/nex_line"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#web-development"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#responsive-design"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Responsive Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ecommerce"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#seo-optimization"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maintenance"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#wordpress"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  WordPress Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="text-primary-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <a
                    href={`tel:${siteData.brand.phone}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {siteData.brand.phone}
                  </a>
                  <p className="text-xs text-gray-500">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail
                  size={18}
                  className="text-primary-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <a
                    href={`mailto:${siteData.brand.email}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {siteData.brand.email}
                  </a>
                  <p className="text-xs text-gray-500">Email us 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-primary-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-400">{siteData.brand.address}</p>
                  <p className="text-xs text-gray-500">Visit our office</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-dark-700 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {siteData.trustBadges.map((badge, index) => (
              <div key={index} className="p-4 bg-dark-700 rounded-lg">
                <p className="text-sm text-gray-400">{badge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteData.brand.name}. All rights reserved. |
            <Link
              href="/privacy-policy"
              className="hover:text-primary-400 transition-colors ml-1"
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              href="/terms-of-service"
              className="hover:text-primary-400 transition-colors ml-1"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
