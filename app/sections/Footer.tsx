'use client'

import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Get Started", href: "#get-started" },
  ]

  return (
    <footer className="bg-black text-white py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Next Boilerplate</h2>
            <p className="text-gray-300 font-bold mb-6">
              The complete Next.js full-stack starter kit to help you launch fast.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>

          {/* Product Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white font-bold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Built with Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all duration-300 ease-in-out border border-purple-500 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="mr-2">⚡</span>
            Built with Next Boilerplate
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}

