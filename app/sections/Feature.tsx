"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export const features = [
  {
    title: "NextJS Boilerplate",
    description:
      "A robust starting point with Next.js, React, and TypeScript, optimized for performance and SEO.",
    link: "#nextjs-boilerplate",
  },
  {
    title: "AI Integration",
    description:
      "Pre-configured APIs and models for easy integration of AI capabilities into your product.",
    link: "#ai-integration",
  },
  {
    title: "Authentication",
    description:
      "Secure, customizable authentication system with support for multiple providers and roles.",
    link: "#authentication",
  },
  {
    title: "Database Setup",
    description:
      "Scalable database configuration with ORM integration for efficient data management.",
    link: "#database-setup",
  },
  {
    title: "UI Component Library",
    description:
      "A comprehensive set of customizable UI components to rapidly build your application interface.",
    link: "#ui-components",
  },
  {
    title: "Deployment Pipeline",
    description:
      "Streamlined deployment process with CI/CD integration for seamless updates and rollbacks.",
    link: "#deployment",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function AIStartupKitDemo() {
  return (
    <motion.div 
      className="bg-black min-h-screen w-full overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 pt-20 pb-16">
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-zinc-400 tracking-wide">AI-powered boilerplate</span>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-left mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The ultimate AI Startup Boilerplate.
            </motion.h2>
            <motion.p 
              className="text-3xl sm:text-4xl text-zinc-500 max-w-4xl leading-tight text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Jumpstart your AI venture with our comprehensive toolkit and pre-built components.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Link href={feature.link} className="block group h-full">
                  <div className="relative overflow-hidden rounded-lg bg-zinc-900 p-8 h-full transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl flex flex-col justify-between">
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Learn more →</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

