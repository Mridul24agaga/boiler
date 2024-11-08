"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black relative overflow-hidden">
      {/* Enhanced Grid background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating light elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500 opacity-10 rounded-full blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Radial gradient for a subtle glow effect */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-4xl mx-auto py-10">
        <motion.div
          className="mb-5"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-gray-800 text-gray-200 text-sm font-medium px-3 py-1 rounded-full inline-flex items-center">
            <span>NextBoilerPlate V1 is now available!</span>
            <span className="ml-1">🚀</span>
          </span>
        </motion.div>

        <motion.p
          className="text-gray-400 mb-5"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The next-generation BoilerPlate for Startup&#39;s
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-5 text-white"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          AI Startup Kit for <span className="inline-block bg-white text-black px-4 py-2">
            Bootstrappers
          </span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl mb-8 text-gray-300">
            Everything you need to build an AI startup, without the hefty price tag. Ready-made templates, backend setup, and custom components for just $59.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="#"
            className="bg-white text-black font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-gray-200 transition-colors text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Get Started Fast
          </Link>

          <Link
            href="#"
            className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-gray-700 border border-gray-600 transition-colors text-sm md:text-base"
          >
            See What's Inside
          </Link>
        </motion.div>
      </div>
    </div>
  )
}