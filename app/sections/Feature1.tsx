"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { MdLock, MdStorage, MdSearch, MdSmartToy, MdBrush, MdWeb } from 'react-icons/md'

const cardData = [
  {
    title: 'Authentication',
    content: [
      'Social login integration (Google, Facebook, Twitter)',
      'Secure OAuth 2.0 and JWT implementation',
      'Two-factor authentication (2FA) support',
      'Password reset and account recovery flows',
      'Role-based access control (RBAC)',
      'Time saved: 10+ hours'
    ],
    icon: MdLock,
    color: '#4285F4'
  },
  {
    title: 'Database',
    content: [
      'Scalable NoSQL/SQL database integration',
      'Automated backups and data recovery',
      'Database migration scripts and versioning',
      'Optimized queries and indexing strategies',
      'Real-time database support for live updates',
      'Time saved: 15+ hours'
    ],
    icon: MdStorage,
    color: '#34A853'
  },
  {
    title: 'SEO',
    content: [
      'On-page SEO optimization techniques',
      'Automated sitemap and robots.txt generation',
      'Schema markup for rich snippets',
      'Integration with popular SEO tools and analytics',
      'Mobile-friendly and performance optimizations',
      'Time saved: 8+ hours'
    ],
    icon: MdSearch,
    color: '#FBBC05'
  },
  {
    title: 'AI Templates',
    content: [
      'Ready-to-use AI chatbot implementations',
      'Machine learning model integration templates',
      'Natural Language Processing (NLP) pipelines',
      'AI-powered recommendation systems',
      'Computer vision and image recognition setups',
      'Time saved: 20+ hours'
    ],
    icon: MdSmartToy,
    color: '#EA4335'
  },
  {
    title: 'UI Templates',
    content: [
      'Responsive and accessible component library',
      'Dark mode support and theme customization',
      'Animation and transition presets',
      'Form validation and error handling patterns',
      'Data visualization and chart components',
      'Time saved: 12+ hours'
    ],
    icon: MdBrush,
    color: '#4285F4'
  },
  {
    title: 'SaaS Starter',
    content: [
      'Multi-tenancy architecture setup',
      'Subscription and billing management system',
      'User onboarding and tutorial workflows',
      'Analytics dashboard and reporting tools',
      'Customizable landing page templates',
      'Time saved: 25+ hours'
    ],
    icon: MdWeb,
    color: '#34A853'
  }
]

export default function Component() {
  const [currentCard, setCurrentCard] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="min-h-screen flex flex-col bg-white text-black pt-4 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16"
    >
      <div className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-tight tracking-tight" style={{ lineHeight: '1.2', letterSpacing: '-0.02em' }}>
          <span className="bg-black text-white px-2 py-1 inline-block mb-2">Boost</span> your app, Launch faster, and Start{' '}
          <span className="bg-black text-white px-2 py-1 inline-block mt-2">Earning</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-gray-600 leading-relaxed">
          Jumpstart your SaaS with pre-built authentication, database setups, SEO optimization, AI integrations, and stunning UI templates. Focus on your unique features while we handle the essentials. Ship your AI-powered SaaS faster than ever before.
        </p>
      </div>

      <div className="flex justify-center mb-4 sm:mb-6 px-4 sm:px-6 md:px-8">
        <div className="bg-gray-100 rounded-full p-1 shadow-lg flex space-x-1 overflow-x-auto scrollbar-hide">
          {cardData.map((card, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors duration-200 flex items-center ${
                currentCard === index
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setCurrentCard(index)}
            >
              {React.createElement(card.icon, { className: "mr-2", style: { color: card.color } })}
              {card.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-start justify-center mt-4 sm:mt-6 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-5xl">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                {React.createElement(cardData[currentCard].icon, { 
                  className: "mr-2 text-3xl sm:text-4xl", 
                  style: { color: cardData[currentCard].color } 
                })}
                {cardData[currentCard].title}
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {cardData[currentCard].content.map((text, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6">
              <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                Learn More
                <FiArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}