"use client"

import { motion } from 'framer-motion'
import { Cpu, Zap, Puzzle, Shield, Rocket, Brain, Code, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import SAAS from "@/app/assets/sas.png"

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

export default function Component() {
  return (
    <motion.div 
      className="p-6 bg-black min-h-screen relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Lightie Grid effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_0%,transparent_100%)]" />
        <div className="absolute inset-0">
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
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-black to-black" />

      {/* New heading section */}
      <motion.div
        className="text-center mb-12 relative z-10"
        variants={itemVariants}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          AI Startup Kit Dashboard
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Empower your startup with cutting-edge AI tools and components
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto relative z-10">
        {/* SaaS Template Showcase */}
        <motion.div 
          className="col-span-full md:col-span-2 bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Top Components</h2>
          <div className="space-y-3 mb-6">
            {['Authentication Flow', 'Dashboard UI', 'Settings Panel'].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500 text-sm font-medium">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-white text-sm font-semibold">{item}</span>
                </div>
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${100 - i * 20}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-zinc-400 text-sm mb-4">
            Launch your AI-powered SaaS faster with our pre-built UI components and pages.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              className="bg-zinc-800/50 rounded-lg p-4 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="text-zinc-400 text-sm mb-1">UI Components</div>
              <motion.div 
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                50+
              </motion.div>
              <div className="text-purple-400 text-xs font-medium">Ready to Use</div>
            </motion.div>
            <motion.div 
              className="bg-zinc-800/50 rounded-lg p-4 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="text-zinc-400 text-sm mb-1">Pages</div>
              <motion.div 
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                15+
              </motion.div>
              <div className="text-purple-400 text-xs font-medium">Fully Responsive</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pre-built AI Tools */}
        <motion.div 
          className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-4">AI Integration</h2>
          <div className="space-y-4 mb-6">
            {[
              { name: 'OpenAI', value: 90 },
              { name: 'Custom Models', value: 75 },
              { name: 'Workflows', value: 85 },
            ].map((tool, i) => (
              <motion.div key={i} className="space-y-1" variants={itemVariants}>
                <div className="flex justify-between text-sm">
                  <span className="text-white font-semibold">{tool.name}</span>
                  <span className="text-zinc-400">{tool.value}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="bg-zinc-800/50 rounded-lg p-4 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="text-zinc-400 text-sm mb-1">Time-to-Market</div>
            <motion.div 
              className="text-3xl font-bold text-white mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Reduced by 70%
            </motion.div>
            <div className="text-purple-400 text-xs font-medium">With Our AI Tools</div>
          </motion.div>
        </motion.div>

        {/* Tool Showcase */}
        <motion.div 
          className="md:col-span-2 bg-zinc-900/50 rounded-xl p-6 overflow-hidden backdrop-blur-sm border border-zinc-800"
          variants={itemVariants}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group">
            <Image
              src={SAAS}
              alt="AI Workflow Builder Tool"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-sm font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </motion.div>
          </div>
          <p className="text-zinc-400 text-sm font-medium">
            Create complex AI-powered workflows with our intuitive drag-and-drop interface. 
            Combine multiple AI models and data sources to build powerful automation pipelines.
          </p>
        </motion.div>

        {/* Product Showcase */}
        <motion.div 
          className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Product Highlights</h2>
          <div className="space-y-4">
            {[
              { icon: Brain, name: 'AI-Powered', description: 'Cutting-edge models at your fingertips' },
              { icon: Rocket, name: 'Rapid Launch', description: 'Go from idea to production in days, not months' },
              { icon: Puzzle, name: 'Modular Design', description: 'Mix and match components for ultimate flexibility' },
              { icon: Shield, name: 'Enterprise-Grade', description: 'Bank-level security and scalability built-in' },
              { icon: Code, name: 'Developer-Friendly', description: 'Clean, well-documented code and APIs' },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex items-start gap-3 group"
                variants={itemVariants}
              >
                <motion.div 
                  className="mt-1 p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">{feature.name}</h3>
                  <p className="text-zinc-400 text-sm font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}