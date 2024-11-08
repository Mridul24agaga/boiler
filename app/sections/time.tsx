'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  },
}

export default function Component() {
  return (
    <motion.section 
      className="py-16 px-4 bg-black text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Purple effect in the center with low opacity */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-64 bg-purple-500 opacity-10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl font-bold tracking-tight mb-6"
          variants={itemVariants}
        >
          Stop wasting time on{' '}
          <motion.span 
            className="inline-block bg-white text-black px-3 py-1 transform -skew-x-12"
            whileHover={{ skewX: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            infrastructure
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mb-8"
          variants={itemVariants}
        >
          Focus on building a great product, not on setting up infrastructure. Ship Boiler Plate gives you the foundation to launch your AI product in days, not months.
        </motion.p>
        <motion.ul 
          className="space-y-4 mb-8 text-left max-w-xl mx-auto"
          variants={containerVariants}
        >
          {[
            "10+ ready-to-use AI demo apps",
            "Pre-configured APIs and AI models",
            "All essential SaaS features (auth, database, payments, etc.)"
          ].map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
              </motion.div>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button 
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Ship Boiler Plate
        </motion.button>
      </div>
    </motion.section>
  )
}