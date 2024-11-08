"use client"

import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { motion } from 'framer-motion';

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

      {/* Less visible grid effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* Subtle floating light elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500 opacity-[0.08] rounded-full blur-xl"
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

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-8 pt-20 pb-16">
          <motion.div 
            className="text-center space-y-2 mb-12"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI Startup Kit Features
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover the powerful features that will accelerate your AI startup's journey from idea to production
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <HoverEffect items={features} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}