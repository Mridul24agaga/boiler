'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, ChevronDown } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost'
  size?: 'default' | 'sm' | 'icon'
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'text-white hover:bg-gray-800',
  }
  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    icon: 'h-10 w-10',
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Separator = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`shrink-0 bg-border h-[1px] w-full ${className}`} {...props} />
)

export default function Header() {
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = 'https://example.com/'
    }, 2000)
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const demoApps = [
    { category: 'AI Templates', items: [
      { name: 'AI Content Generator', emoji: '🤖', link: 'https://boilerplate2-eight.vercel.app/' },
    ]},
    { category: 'Landing Page Templates', items: [
      { name: 'SAAS Template 1', emoji: '🚀', link: 'https://boilerplate-template1-3751.vercel.app/' },
      { name: 'SAAS Template 2', emoji: '🏢', link: 'https://boilerplate3.vercel.app/' },
    ]},
  ]

  return (
    <header className={`sticky top-0 z-20 bg-black text-white backdrop-blur-sm font-inter transition-all duration-300 ${isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container max-w-5xl mx-auto px-4 relative">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center fixed left-4 md:left-8 z-30">
            <Image
              src="https://media.discordapp.net/attachments/1193183717548638301/1304142754326118430/Blue_Illustration_University_Circle_Brand_Logo_2_1.png?ex=672e5116&is=672cff96&hm=470fae646f5e88c4d611ab57b0820be7586c99ee91993a8358d4ce27fbd66d6b&=&format=webp&quality=lossless"
              alt="Company Logo"
              width={160}
              height={160}
              className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-300"
              priority
            />
          </div>
          <nav className="flex items-center ml-auto space-x-4 md:space-x-6">
            <div className="relative" ref={dropdownRef}>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-gray-800/50"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={showDropdown}
              >
                Demos
                <ChevronDown className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-gray-900/95 rounded-md shadow-lg py-1 z-10">
                  {demoApps.map((category, index) => (
                    <div key={index} className="py-2">
                      <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {category.category}
                      </h3>
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.link}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50"
                        >
                          <span className="mr-2" aria-hidden="true">{item.emoji}</span>
                          {item.name}
                        </Link>
                      ))}
                      {index < demoApps.length - 1 && (
                        <Separator className="my-2 bg-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Button
              onClick={handleButtonClick}
              disabled={loading}
              className={`
                hidden md:inline-flex relative overflow-hidden font-bold py-2 px-4 rounded-lg shadow-lg
                transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed
                bg-gradient-to-br from-gray-900 to-black text-white
                before:absolute before:inset-0 before:bg-black before:bg-opacity-20
                before:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]
                before:bg-[length:4px_4px] before:opacity-30 before:content-['']
                border border-white
              `}
            >
              {loading ? 'Loading...' : (
                <>
                  Get Started <Zap className="ml-2 h-4 w-4 inline" aria-hidden="true" />
                </>
              )}
            </Button>
          </nav>
        </div>
      </div>
      <Separator className="bg-gray-700" />
    </header>
  )
}