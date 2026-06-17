'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'Manjishtha',
    subtitle: 'For Natural Glow & Radiance',
    weight: '100 GM',
    price: '₹100',
    image: '/images/manjishtha-product.png',
    benefits: ['Gently exfoliates', 'Restores radiance', 'Calms inflammation'],
    bgColor: '#A85C4A',
    lightBg: '#F5E6E0',
  },
  {
    name: 'Datan',
    subtitle: 'Remove Sun Induced Tanning',
    weight: '100 GM',
    price: '₹100',
    image: '/images/datan-product.png',
    benefits: ['Removes tanning', 'Exfoliates skin', 'Brightens complexion'],
    bgColor: '#8B7355',
    lightBg: '#F4EBE3',
  },
  {
    name: 'Orange',
    subtitle: 'Brightens Skin & Refreshes',
    weight: '120 GM',
    price: '₹80',
    image: '/images/orange-product.png',
    benefits: ['Brightens skin', 'Refreshing aroma', 'Nourishing formula'],
    bgColor: '#E89A3C',
    lightBg: '#FFF3E0',
  },
  {
    name: 'Palash (Kesuda)',
    subtitle: 'Soothes Skin & Fights Infections',
    weight: '120 GM',
    price: '₹80',
    image: '/images/palash-product.png',
    benefits: ['Soothes skin', 'Fights infections', 'Calms irritation'],
    bgColor: '#8B3A3A',
    lightBg: '#F8E3E3',
  },
  {
    name: 'Neem Alovera',
    subtitle: 'Purifies Skin & Reduces Acne',
    weight: '120 GM',
    price: '₹80',
    image: '/images/neem-tulsi-product.png',
    benefits: ['Purifies skin', 'Reduces acne', 'Eco-friendly'],
    bgColor: '#2D5A3D',
    lightBg: '#E8F2EA',
  },
]

export function Collection() {
  return (
    <section id="collection" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Each soap is carefully crafted with premium Ayurvedic ingredients to deliver visible results naturally.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-border/20">
                {/* Product Image Container with Theme Color */}
                <div 
                  className="relative h-48 sm:h-64 md:h-72 overflow-hidden"
                  style={{ backgroundColor: product.lightBg }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div 
                    className="absolute top-4 right-4 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: product.bgColor }}
                  >
                    {product.weight}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-lg sm:text-2xl font-bold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4">
                    {product.subtitle}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs sm:text-sm text-foreground/80 flex items-start gap-2">
                        <span 
                          className="mt-1 flex-shrink-0 w-1 h-1 rounded-full"
                          style={{ backgroundColor: product.bgColor }}
                        ></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border gap-2">
                    <span 
                      className="text-xl sm:text-3xl font-bold"
                      style={{ color: product.bgColor }}
                    >
                      {product.price}
                    </span>
                    <a
                      href="https://wa.me/919265509299"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm hover:shadow-lg transition-all whitespace-nowrap"
                      style={{ backgroundColor: product.bgColor }}
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for Bulk Orders or Combo Packs?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Perfect for gifting or wholesale. Connect with us on WhatsApp for special rates.
          </p>
          <a
            href="https://wa.me/919265509299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-muted transition-colors"
          >
            Get Special Offer
          </a>
        </motion.div>
      </div>
    </section>
  )
}
