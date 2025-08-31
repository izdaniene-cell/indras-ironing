'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-jost">
              Indra's Ironing
            </h1>
            <span className="text-sm text-gray-600 ml-2 hidden md:block">.co.uk</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <a
              href="tel:07515908577"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>07515908577</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                >
                  Contact
                </button>
                <div className="px-4">
                  <a
                    href="tel:07515908577"
                    className="btn-primary flex items-center justify-center space-x-2 w-full"
                  >
                    <Phone className="w-4 h-4" />
                    <span>07515908577</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
