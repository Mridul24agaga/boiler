'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FAQItem = {
  question: string
  answer: string
}

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-700">
    <button
      className="flex justify-between items-center w-full py-5 text-left"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium text-white">{item.question}</span>
      <motion.svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </motion.svg>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pb-5">
            <p className="text-gray-300">{item.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export default function Component() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "What do I get with Ship Boiler Plate?",
      answer: "You get a complete Next.js boilerplate with authentication, database integration, AI templates, and pre-built UI components. This includes ready-to-use demo apps, API configurations, and all essential SaaS features to help you launch your AI product quickly."
    },
    {
      question: "How does the licensing work?",
      answer: "Once you purchase Ship Boiler Plate, you get a lifetime license to use it for unlimited projects. The Starter plan includes core features, while the Advanced plan includes additional templates and future updates."
    },
    {
      question: "What AI capabilities are included?",
      answer: "The Starter plan includes 3 AI templates (text, image, and video-based), while the Advanced plan includes 6 templates including voice recognition, predictive analytics, and NLP chatbots. All templates are pre-configured and ready to integrate with popular AI providers."
    },
    {
      question: "How often do you update the templates?",
      answer: "We regularly update our templates to keep up with the latest technologies and best practices. Advanced plan subscribers get lifetime access to all future updates and new templates as they're released."
    },
    {
      question: "Is it easy to customize and deploy?",
      answer: "Yes! The boilerplate is built with Next.js and follows best practices for code organization and documentation. Everything is modular and well-documented, making it easy to customize to your needs. Deployment instructions are included for various platforms."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide detailed documentation, setup guides, and code comments. Advanced plan subscribers also get access to priority support and future updates. While we don't offer direct development support, our documentation covers all common use cases and customizations."
    },
    {
      question: "Can I upgrade from Starter to Advanced later?",
      answer: "Yes, you can upgrade from the Starter to Advanced plan at any time. Contact our support team with your original purchase details, and we'll provide you with an upgrade pricing option."
    },
    {
      question: "Do you offer refunds?",
      answer: "No, we don't offer refunds. We encourage you to carefully review the features and documentation before making a purchase."
    }
  ]

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-gray-400">
            Need help with something? Here are some of the most common questions we get.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItem === index}
              onClick={() => setOpenItem(openItem === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}