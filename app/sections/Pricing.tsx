'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleRedirect = (url: string) => {
    window.location.href = url
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 relative overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">AI Startup Kit</span>
          </h1>
          <p className="text-xl text-gray-600">Save hours of repetitive code, ship fast, get profitable!</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Starter Plan */}
          <motion.div
            className="bg-white rounded-lg p-8 w-full lg:w-[400px] flex flex-col shadow-lg border border-gray-200"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$49</span>
              <span className="text-lg line-through text-gray-500 ml-2">$299</span>
              <span className="text-sm ml-1 text-gray-600">USD</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Starter</h3>
            <ul className="mb-6 space-y-2 flex-grow">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> NextJS boilerplate</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Supabase authentication</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic NoSQL database integration</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Simple CRUD operations</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic on-page SEO optimization</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 3 AI templates</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Pre-built UI components</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Responsive landing page template</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic dashboard layout</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Single-tenant architecture</li>
            </ul>
            <button
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              onClick={() => handleRedirect('https://www.paypal.com/ncp/payment/MLVAX8MGDWJN4')} 
            >
              Get Started
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">Pay once. Build unlimited projects!</p>
          </motion.div>

          {/* Advanced Plan */}
          <motion.div
            className="bg-white rounded-lg p-8 w-full lg:w-[400px] flex flex-col shadow-lg border border-gray-200 relative"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg">
              BEST VALUE
            </span>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$69</span>
              <span className="text-lg line-through text-gray-500 ml-2">$499</span>
              <span className="text-sm ml-1 text-gray-600">USD</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Advanced</h3>
            <ul className="mb-6 space-y-2 flex-grow">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All Starter features</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced database optimization</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Real-time database capabilities</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced SEO tools & A/B testing</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 6 AI templates</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced UI component library</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-tenancy architecture</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced security features</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Future updates and templates</li>
            </ul>
            <button
              className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
              onClick={() => handleRedirect('https://www.paypal.com/ncp/payment/MV5KZYRADT9X8')} 
            >
              Get Advanced
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">Lifetime access to all features!</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}