'use client'

import Link from "next/link"
import { Inter } from 'next/font/google'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const inter = Inter({ subsets: ['latin'] })

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function Divider({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("h-[1px] w-full bg-gray-200", className)}
      {...props}
    />
  )
}

function SiteHeader() {
  return (
    <div className="w-full">
      {/* Black Friday Banner */}
      <div className="w-full bg-black text-white text-center py-2 text-sm">
        <p>
          Black Friday: Enjoy a{" "}
          <span className="font-semibold">25% DISCOUNT</span> on the starter kits.
          Use code{" "}
          <span className="font-semibold">BLACKFRIDAY2024</span> at checkout.
        </p>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <span className="text-xl text-black font-semibold">NextBoilerPlate</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/pricing" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link 
              href="/changelog" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Changelog
            </Link>
            <Link 
              href="/docs" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Docs
            </Link>
          </div>
        </nav>
      </div>

      {/* Divider */}
      <Divider />
    </div>
  )
}

export default function Home() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main>
          <div className="container mx-auto px-4 py-16">
            {/* Content removed */}
          </div>
        </main>
      </body>
    </html>
  )
}

// Add this to your global CSS file or in a style tag in the head
const globalStyles = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-rgb: 255, 255, 255;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-rgb));
}
`

