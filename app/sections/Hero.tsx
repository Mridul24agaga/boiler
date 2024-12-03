'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Sparkle component with random animation
function Sparkle({ delay = 0 }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-400 rounded-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  )
}

export default function Page() {
  const [sparkles] = useState(() => Array.from({ length: 50 }, (_, i) => i))

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <Image
          src="/background.jpeg"
          alt="Abstract purple and blue light beams"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-100"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black"></div>

      {/* Sparkles */}
      {sparkles.map((_, i) => (
        <Sparkle key={i} delay={i * 0.1} />
      ))}

      {/* Content */}
      <div className="relative min-h-screen flex flex-col z-10">
        <main className="flex-1 flex items-center justify-center px-4 mt-16">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <motion.div 
              className="flex items-center justify-center space-x-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="bg-[#0A0A0A] rounded-full px-4 py-2 flex items-center space-x-3 border border-gray-800/40 shadow-lg hover:bg-[#141414] transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="bg-[#9FFF00] text-black text-xs font-semibold px-2 py-0.5 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  NEW
                </motion.span>
                <span className="text-gray-400 text-sm">
                  AI tools for founders now available
                </span>
                <motion.span
                  className="text-gray-400"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Launch Your AI Startup
              <br />
              For Just $99.
            </motion.h1>
            
            <motion.p 
              className="text-gray-400 text-xl max-w-2xl mx-auto font-medium"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Complete startup kit with everything you need to bootstrap your AI business. 
              No code required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Your AI Startup Kit</span>
                <motion.svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

