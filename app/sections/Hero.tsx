"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { FileText } from 'lucide-react'

const poppins = Poppins({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white-50 -mt-[30px] ${poppins.className}`}>
      <div className="max-w-4xl mx-auto py-10">
        <motion.div
          className="mb-5"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full inline-flex items-center">
            <span className="relative z-10">NextBoilerPlate V1 is now available!</span>
            <span className="ml-1 relative z-10">🚀</span>
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          AI Startup Kit for <span className="inline-block bg-gray-900 text-white px-4 py-2">
            Bootstrappers
          </span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl mb-8 text-gray-700">
          Everything you need to build an AI startup, without the hefty price tag. Ready-made templates, backend setup, and custom components for just $59.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="#"
            className="relative overflow-hidden font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-base md:text-lg bg-gradient-to-br from-gray-900 to-black text-white before:absolute before:inset-0 before:bg-black before:bg-opacity-20 before:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] before:bg-[length:4px_4px] before:opacity-30 before:content-['']"
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started Fast
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            <FileText className="inline-block w-4 h-4 mr-1 mb-1" />
            50 licenses left before price increases
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Home