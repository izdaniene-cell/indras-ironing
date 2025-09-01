'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingOptions = [
  {
    title: 'Shirts only',
    price: '£2.15',
    unit: 'per piece',
    minimum: '14 shirts (£30)',
    description: 'Perfect for business professionals who need their shirts perfectly pressed',
    image: '/images/shirts-on-hangers-1076x615.png',
    features: [
      'Professional pressing',
      'Starch options available',
      'Hanger service included',
      '24-hour turnaround'
    ],
    delay: 0.1
  },
  {
    title: 'Mixed bag',
    price: '£7.50',
    unit: 'per kilogram',
    minimum: '4 kilograms (£30)',
    description: 'Ideal for families and households with various clothing types',
    image: '/images/mixed-ironing-1076x615.png',
    features: [
      'All clothing types',
      'Bedding and linens',
      'Curtains and drapes',
      'Free collection & delivery'
    ],
    delay: 0.2
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-jost">
            Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden costs. Choose the service that fits your needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: option.delay }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-success/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jost">
                  {option.title}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-primary">{option.price}</span>
                    <span className="text-gray-600 ml-2">{option.unit}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Minimum order: {option.minimum}
                  </p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full btn-primary"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jost">
              Why Choose Our Service?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">Professional results every time</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Convenient Service</h4>
                <p className="text-gray-600 text-sm">Free collection and delivery</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-info" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h4>
                <p className="text-gray-600 text-sm">24-hour service available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
