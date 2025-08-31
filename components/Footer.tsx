'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 font-jost">
              Indra's Ironing
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional ironing services with free collection and delivery. 
              Serving Bracknell and surrounding areas with quality and convenience.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:07515908577"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>07515908577</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-jost">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Ironing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-jost">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a
                  href="mailto:bironing2018@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  bironing2018@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">
                  35 Highfield, Bracknell, RG12 8XD
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Indra's Ironing. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Professional ironing services in Bracknell and surrounding areas
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
