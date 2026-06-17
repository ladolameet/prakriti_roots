'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center pt-8 relative overflow-hidden bg-white">
      {/* Decorative leaf background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Welcome to
              <br />
              <span className="text-primary">Prakriti Roots</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-md">
              Rooted in Nature. Made with Care. Experience the luxury of 100% natural, handcrafted Ayurvedic soaps inspired by ancient wellness traditions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919265509299"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Order on WhatsApp
            </a>
            <a
              href="#collection"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center"
            >
              Explore Collection
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex gap-8 text-sm"
          >
            <div>
              <p className="font-semibold text-primary">100% Natural</p>
              <p className="text-foreground/60">Ayurvedic Skincare</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Handcrafted</p>
              <p className="text-foreground/60">In Small Batches</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Eco-Friendly</p>
              <p className="text-foreground/60">Sustainable Packaging</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 md:h-[500px]"
        >
          <Image
            src="/images/welcome.png"
            alt="Prakriti Roots - Welcome"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
