"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import siteData from "../../public/data/site.json";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a
                href={`tel:${siteData.brand.phone}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone size={14} />
                <span>{siteData.brand.phone}</span>
              </a>
              <a
                href={`mailto:${siteData.brand.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail size={14} />
                <span>{siteData.brand.email}</span>
              </a>
            </div>
            <div className="hidden md:block text-gray-400">
              🇧🇩 Proudly serving Bangladesh since {siteData.brand.established}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div> */}
            {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image 
              src={"/logo.jpg"}
              width={30}
              height={30}
              alt='NexLint Logo'
              />
            </div> */}
            <div className="w-10 h-10 rounded-lg relative overflow-hidden">
              <Image
                src="/nexlint-favicon.jpg"
                alt="NexLint Logo"
                fill
                className="object-cover"
              />
            </div>
            {/* Mobile site name */}
            <div className="md:hidden">
              <h1 className="text-xl font-bold font-poppins text-white">
                {siteData.brand.name}
              </h1>
              <p className="text-xs text-gray-400 -mt-1">
                {siteData.brand.tagline}
              </p>
            </div>

            {/* Desktop Site Name */}
            <div className="hidden md:block">
              <h1 className="text-xl font-bold font-poppins text-white">
                {siteData.brand.name}
              </h1>
              <p className="sm:text-[8px] text-xs text-gray-400 -mt-1">
                {siteData.brand.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteData.brand.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-dark-800 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="bg-dark-800 rounded-lg p-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-primary-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${siteData.brand.whatsapp.replace(
                    "+",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn-primary mt-4"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
