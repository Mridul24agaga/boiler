'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Rocket, Shield } from 'lucide-react'

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

const features = [
  { icon: Zap, text: "10+ ready-to-use AI demo apps" },
  { icon: Rocket, text: "Pre-configured APIs and AI models" },
  { icon: Shield, text: "All essential SaaS features (auth, database, payments, etc.)" },
]

export default function EnhancedShipBoilerPlate() {
  return (
    <motion.section 
      className="py-24 px-4 bg-black text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400"
            variants={itemVariants}
          >
            <span className="block mb-4">Stop wasting time on</span>
            <motion.span 
              className="inline-block bg-white text-black px-3 py-1 transform -skew-x-12"
              whileHover={{ skewX: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              infrastructure
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Focus on building a great product, not on setting up infrastructure. Ship Boiler Plate gives you the foundation to launch your AI product in days, not months.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-purple-500/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto" />
              </motion.div>
              <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4 mb-12"
          variants={containerVariants}
        >
          {[
            "Reduce development time by up to 80%",
            "Scale your AI product with confidence",
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Check className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
              </motion.div>
              <span className="text-lg font-medium text-gray-200">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-900 transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Ship Boiler Plate
          </motion.button>
          <p className="mt-4 text-sm text-gray-400 font-medium">Start building your AI product today</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

