"use client"

import { motion } from 'framer-motion'
import { FileText, MessageSquare, Brain, BarChart, FileSearch, Code, Zap, Lock, Shield, TrendingUp, Users, Target, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

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
}

const analyticsData = [
  { title: 'User Satisfaction', value: 80, icon: Users, color: 'purple', increase: 24 },
  { title: 'Productivity', value: 92, icon: TrendingUp, color: 'green', increase: 42 },
  { title: 'AI Accuracy', value: 88, icon: Target, color: 'blue', increase: 56 },
]

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout: NodeJS.Timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 50) // Adjust the speed of typing here

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span>{displayText}</span>
}

const usePulse = (interval = 2000) => {
  const [scale, setScale] = useState(1)
  
  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.05 : 1))
    }, interval)
    return () => clearInterval(timer)
  }, [interval])
  
  return scale
}

const useIncrementingNumber = (start: number, end: number, duration = 3000) => {
  const [number, setNumber] = useState(start)
  const stepRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const totalSteps = 60
    const stepValue = (end - start) / totalSteps
    let currentStep = 0

    const timer: NodeJS.Timeout = setInterval(() => {
      currentStep++
      if (currentStep <= totalSteps) {
        setNumber(prevNumber => Math.min(prevNumber + stepValue, end))
      } else {
        clearInterval(timer)
      }
    }, duration / totalSteps)

    stepRef.current = timer
    return () => {
      if (stepRef.current) {
        clearInterval(stepRef.current)
      }
    }
  }, [start, end, duration])

  return Math.floor(number)
}

export default function AIStartupKit() {
  return (
    <div className="min-h-screen bg-black font-sans" style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }}>
      {/* Header Section */}
      <div className="w-full bg-black pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-zinc-400 tracking-wide">AI-powered boilerplate</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">The ultimate AI Startup Boilerplate.</span>{' '}
              <span className="text-zinc-500">
                Jumpstart your AI venture with our comprehensive toolkit and pre-built components.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-500">
              <TypewriterText text="Transform your ideas into intelligent solutions with our comprehensive AI toolkit." />
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="p-4 sm:p-6 bg-black"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* AI Code Generation */}
          <motion.div 
            variants={itemVariants} 
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm"
            style={{ scale: usePulse() }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-2 h-8 rounded-full bg-purple-500" />
                  <div className="flex-1 h-8 rounded-full bg-zinc-800 flex items-center px-3">
                    <code className="text-xs sm:text-sm text-purple-400">const ai = new AI();</code>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-8 rounded-full bg-purple-500" />
                  <div className="flex-1 h-8 rounded-full bg-zinc-800 flex items-center px-3">
                    <code className="text-xs sm:text-sm text-purple-400">ai.generateCode('React');</code>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-8 rounded-full bg-purple-500" />
                  <div className="flex-1 h-8 rounded-full bg-zinc-800 flex items-center px-3">
                    <code className="text-xs sm:text-sm text-purple-400">ai.optimize();</code>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-zinc-400" />
                <h3 className="text-base sm:text-lg font-semibold text-white">AI Code Generation</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Generate optimized code snippets with AI-powered assistance.
              </p>
            </div>
          </motion.div>

          {/* Natural Language Processing */}
          <motion.div variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-4 rounded-full bg-zinc-800 w-3/4" />
                <div className="h-4 rounded-full bg-zinc-800 w-full" />
                <div className="h-4 rounded-full bg-zinc-800 w-5/6" />
                <div className="h-4 rounded-full bg-zinc-800 w-2/3" />
                <div className="h-4 rounded-full bg-zinc-800 w-4/5" />
              </div>
              <div className="flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-zinc-400" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Natural Language Processing</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Advanced NLP for understanding and generating human-like text.
              </p>
            </div>
          </motion.div>

          {/* AI Model Training */}
          <motion.div variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </motion.div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-zinc-400" />
                <h3 className="text-base sm:text-lg font-semibold text-white">AI Model Training</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Train and fine-tune AI models on your specific data.
              </p>
            </div>
          </motion.div>

          {/* AI-Powered Analytics */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm overflow-hidden">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">AI-Powered Analytics</h3>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                  Real-time insights
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {analyticsData.map((item, index) => {
                  const currentValue = useIncrementingNumber(item.value - 10, item.value)
                  return (
                    <motion.div 
                      key={index} 
                      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-bl-full" />
                      <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 mb-4 text-${item.color}-400`} />
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl sm:text-3xl font-bold text-white">{currentValue}%</span>
                        <span className={`text-xs font-medium text-${item.color}-400 bg-${item.color}-500/20 px-2 py-1 rounded-full`}>
                          +{item.increase}%
                        </span>
                      </div>
                      <div className="mt-4 h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-${item.color}-500`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              <p className="text-sm text-zinc-400">
                Gain deep insights with AI-driven data analysis and visualization. Our advanced analytics platform helps you make data-informed decisions and optimize your AI models in real-time.
              </p>
            </div>
          </motion.div>

          {/* AI Security & Privacy */}
          <motion.div variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  <div className="p-3 rounded-xl bg-zinc-800/50 text-sm text-zinc-300">
                    Our AI models are designed with privacy-first principles, ensuring your data remains secure and confidential.
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 h-10 rounded-full bg-zinc-800 px-4 flex items-center">
                    <span className="text-sm text-zinc-500">End-to-end encryption</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-zinc-400" />
                <h3 className="text-base sm:text-lg font-semibold text-white">AI Security & Privacy</h3>
              </div>
              <p className="text-sm text-zinc-400">
                State-of-the-art security measures to protect your AI models and data.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

