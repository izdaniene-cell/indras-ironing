'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function Map() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-jost">
            Indra's Ironing Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us in Bracknell, serving the local community with professional ironing services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 md:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB7QWkvlxV39ZsyKvhZRjPGVqlJFvxxNkw&q=35+Highfield,+Bracknell,+RG12+8XD,+UK"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indra's Ironing Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-jost">
                      Our Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      35 Highfield<br />
                      Bracknell<br />
                      RG12 8XD<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jost">
                  Service Area
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide ironing services to the following areas:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Bracknell
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Ascot
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Windsor
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Maidenhead
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Wokingham
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jost">
                  Collection & Delivery
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Free collection and delivery
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Flexible scheduling
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    Same-day collection available
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    24-hour turnaround
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
