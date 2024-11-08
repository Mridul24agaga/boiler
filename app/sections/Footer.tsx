'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logoo from '@/app/assets/logoo.png'

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export default function AnimatedFooter() {
  return (
    <motion.footer 
      className="bg-black text-white py-8"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="flex justify-center items-center" variants={itemVariants}>
          <Image
            src={logoo}
            alt="Ship Boiler Plate Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </motion.div>
        <motion.div 
          className="mt-8 text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Next BoilerPlate. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}