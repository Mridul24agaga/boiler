"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const features = [
  "User Authentication Methods",
  "Accepting Payments",
  "Deployment Platforms",
  "File(s) and Document(s) Storage",
  "Sending Emails",
  "Social Media Bots",
  "Measuring Analytics",
  "In-Built HTML-First Components",
  "Integrations on-demand",
  "And many, many more"
]

const plans = [
  {
    name: "Starter Kit",
    price: 69,
    features: [
      "All goodness as above",
      "Basic AI features",
      "Community support"
    ],
    buttonText: "Get Starter Kit",
    color: "purple"
  },
  {
    name: "Pro Kit",
    price: 99,
    features: [
      "All goodness as above",
      "Advanced AI features",
      "Priority support"
    ],
    buttonText: "Get Pro Kit",
    color: "white"
  }
]

export default function PricingSection() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-center space-y-4 relative pb-12">
          <motion.div 
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm md:text-base text-zinc-400 tracking-wide">AI-powered boilerplate</span>
          </motion.div>
          
          {/* Heading container with red line */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pay once, <span className="text-purple-500">receive updates forever</span>
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl leading-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            AI Startup Kit is a one-time purchase. You get *all* the good things in a single purchase. Choose the plan that best fits your needs!
          </motion.p>
        </div>
        <div className="space-y-12 py-12">
          <motion.div 
            className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="text-white text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {plans.map((plan, index) => (
              <div 
                key={index}
                className="relative flex flex-col p-6 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 border-2 border-zinc-700 rounded-xl opacity-10 pointer-events-none"></div>
                <div className="space-y-4 relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-5xl font-bold ${plan.color === 'purple' ? 'text-purple-500' : 'text-white'}`}>
                      ${plan.price}
                    </span>
                  </div>
                  <button className={`inline-flex items-center justify-center rounded-md px-8 py-3 text-base sm:text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none w-full
                    ${plan.color === 'purple' 
                      ? 'bg-purple-500 text-white hover:bg-purple-600' 
                      : 'bg-white text-black hover:bg-zinc-100'}`}>
                    {plan.buttonText}
                  </button>
                  <p className="text-sm sm:text-base text-red-500">
                    Grab the kit now! Price will rise to ${plan.price + 30} after the next (combined) 10 sales.
                  </p>
                  <a href="#demo" className="inline-block text-sm sm:text-base text-zinc-400 hover:text-white transition-colors">
                    View Demo →
                  </a>
                </div>
                <div className="pt-8 space-y-4 relative">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4">
                      <Check className={`h-5 w-5 ${plan.color === 'purple' ? 'text-purple-500' : 'text-white'}`} />
                      <span className="text-white text-base sm:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

