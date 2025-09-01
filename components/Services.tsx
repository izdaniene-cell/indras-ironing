'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Truck, Clock } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'Order',
    description: 'To arrange an ironing collection just call, text or order online',
    image: '/images/order-online-696x696.png',
    delay: 0.1
  },
  {
    icon: Truck,
    title: 'Free collection and delivery',
    description: 'I collect and deliver at times that suits you',
    image: '/images/free-collection-and-delivery-696x696.png',
    delay: 0.2
  },
  {
    icon: Clock,
    title: '24 hours turnaround',
    description: 'Your ironed clothes returned in as little as 24 hours',
    image: '/images/24-hour-turnaround-696x696.png',
    delay: 0.3
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-jost">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ironing services tailored to your needs with convenience and quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-success/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-jost">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-8 py-4"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
