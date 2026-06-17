'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart, Leaf as LeafIcon } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Leaf,
      title: 'Natural',
      description: '100% natural Ayurvedic ingredients sourced from trusted suppliers.',
    },
    {
      icon: Heart,
      title: 'Gentle',
      description: 'Balanced for all skin types with proven benefits from ancient Ayurvedic wisdom.',
    },
    {
      icon: LeafIcon,
      title: 'Thoughtful',
      description: 'Crafted with care in small batches using traditional methods.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
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
            Handcrafted Soaps Inspired by Nature
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            At Prakriti Roots, we believe in the power of nature. Every soap is created with intention, combining ancient Ayurvedic wisdom with modern skincare science.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-primary mb-8">Why Choose Prakriti Roots?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Made Fresh in Small Batches - Guaranteed Freshness',
              'Ayurvedic Benefits - Proven Traditional Ingredients',
              'No Harsh Chemicals - Pure Natural Formulations',
              'Cruelty Free - Never Tested on Animals',
              'Eco Friendly - Sustainable, Biodegradable Packaging',
              'Deep Cleansing & Nourishing - For All Skin Types',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="text-secondary text-2xl mt-1">✓</div>
                <p className="text-foreground/80 pt-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
