'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Heart } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
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
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? Want to place a bulk order? Reach out to us on WhatsApp or Instagram. We&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/919265509299"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">WhatsApp</h3>
                <p className="text-foreground/70 mb-4">Quick responses and instant ordering</p>
                <p className="text-lg font-semibold text-primary">+91 92655 09299</p>
              </div>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href="https://instagram.com/prakritiroots.co"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Heart className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Instagram</h3>
                <p className="text-foreground/70 mb-4">Follow for daily updates and tips</p>
                <p className="text-lg font-semibold text-primary">@prakritiroots.co</p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-muted to-muted/50 rounded-2xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary mb-3">Safe for All Skin Types</h4>
              <p className="text-foreground/70">Our formulations are gentle and suitable for every skin type.</p>
            </div>
            <div className="text-center border-l border-r border-border">
              <h4 className="text-xl font-bold text-primary mb-3">Chemical Free Living</h4>
              <p className="text-foreground/70">100% natural ingredients with zero harmful chemicals.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary mb-3">Good for You & Earth</h4>
              <p className="text-foreground/70">Sustainable packaging that&apos;s kind to our planet.</p>
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/70 mb-6">
            Ready to experience pure, natural skincare?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919265509299"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
            >
              Order Now on WhatsApp
            </a>
            <a
              href="https://instagram.com/prakritiroots.co"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-colors inline-flex items-center justify-center"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
