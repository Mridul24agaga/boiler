'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleRedirect = (url: string) => {
    window.location.href = url
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Grid background with lower opacity and merged with black */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
        <motion.div
          variants={fadeInUpVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Choose Your <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              AI Startup Kit
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            variants={itemVariants}
          >
            Save hours of repetitive code, ship fast, get profitable!
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row justify-center gap-8"
          variants={containerVariants}
        >
          {/* Starter Plan */}
          <motion.div
            className="bg-gray-900 rounded-lg p-8 w-full lg:w-[400px] flex flex-col shadow-lg border border-gray-700/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="mb-4" variants={itemVariants}>
              <span className="text-4xl font-bold text-white">$49</span>
              <span className="text-lg line-through text-gray-500 ml-2">$299</span>
              <span className="text-sm ml-1 text-gray-400">USD</span>
            </motion.div>
            <motion.h3 className="text-2xl font-semibold mb-6 text-white" variants={itemVariants}>Starter</motion.h3>
            <motion.ul className="mb-6 space-y-2 flex-grow" variants={containerVariants}>
              {[
                "NextJS boilerplate",
                "Supabase authentication",
                "Basic NoSQL database integration",
                "Simple CRUD operations",
                "Basic on-page SEO optimization",
                "3 AI templates",
                "Pre-built UI components",
                "Responsive landing page template",
                "Basic dashboard layout",
                "Single-tenant architecture"
              ].map((feature, index) => (
                <motion.li key={index} className="flex items-center" variants={itemVariants}>
                  <span className="text-green-400 mr-2">✓</span> {feature}
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              onClick={() => handleRedirect('https://www.paypal.com/ncp/payment/MLVAX8MGDWJN4')} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.p className="text-sm text-gray-400 mt-2 text-center" variants={itemVariants}>Pay once. Build unlimited projects!</motion.p>
          </motion.div>

          {/* Advanced Plan */}
          <motion.div
            className="bg-gray-900 rounded-lg p-8 w-full lg:w-[400px] flex flex-col shadow-lg border border-gray-700/50 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-purple-400 text-black text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              BEST VALUE
            </motion.span>
            <motion.div className="mb-4" variants={itemVariants}>
              <span className="text-4xl font-bold text-white">$69</span>
              <span className="text-lg line-through text-gray-500 ml-2">$499</span>
              <span className="text-sm ml-1 text-gray-400">USD</span>
            </motion.div>
            <motion.h3 className="text-2xl font-semibold mb-6 text-white" variants={itemVariants}>Advanced</motion.h3>
            <motion.ul className="mb-6 space-y-2 flex-grow" variants={containerVariants}>
              {[
                "All Starter features",
                "Advanced database optimization",
                "Real-time database capabilities",
                "Advanced SEO tools & A/B testing",
                "6 AI templates",
                "Advanced UI component library",
                "Multi-tenancy architecture",
                "Advanced security features",
                "Future updates and templates"
              ].map((feature, index) => (
                <motion.li key={index} className="flex items-center" variants={itemVariants}>
                  <span className="text-green-400 mr-2">✓</span> {feature}
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
              onClick={() => handleRedirect('https://www.paypal.com/ncp/payment/MV5KZYRADT9X8')} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Advanced
            </motion.button>
            <motion.p className="text-sm text-gray-400 mt-2 text-center" variants={itemVariants}>Lifetime access to all features!</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}