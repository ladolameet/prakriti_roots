'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Prakriti Roots</h3>
            <p className="opacity-80">Rooted in Nature. Made with Care.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#collection" className="hover:opacity-100 transition-opacity">Collection</a></li>
              <li><a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="https://wa.me/919265509299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  WhatsApp: +91 92655 09299
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prakritiroots.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  Instagram: @prakritiroots.co
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80"
        >
          <p>
            Thank you for supporting natural and sustainable skincare.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Prakriti Roots. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
