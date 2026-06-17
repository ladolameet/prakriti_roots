'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  {
    title: 'Product Collection',
    image: '/images/product-collection.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Handcrafted Quality',
    image: '/images/handcrafted-intro.png',
    span: 'md:col-span-1',
  },
  {
    title: 'Orange Soap',
    image: '/images/orange-soap.png',
    span: 'md:col-span-1',
  },
  {
    title: 'Neem Tulsi',
    image: '/images/neem-tulsi.png',
    span: 'md:col-span-2',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the beauty and craftsmanship behind every Prakriti Roots soap.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.span} relative rounded-3xl overflow-hidden group cursor-pointer border border-border/10 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <h3 className="text-white font-bold text-xl drop-shadow-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-foreground/70 mb-4">
            Follow us for daily updates and special offers
          </p>
          <a
            href="https://instagram.com/prakritiroots.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
