'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, Zap, Layout, Users } from 'lucide-react'

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
    ghost: 'hover:bg-accent hover:text-accent-foreground',
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

  const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = '/'
    }, 2000)
  }

  return (
    <header className="sticky top-0 z-20 bg-[#fff] backdrop-blur-sm font-inter">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center ml-32">
            <Image
              src="https://media.discordapp.net/attachments/1193183717548638301/1302228940248715274/Blue_Illustration_University_Circle_Brand_Logo_1.png?ex=67275ab5&is=67260935&hm=5fd0539205effa4c8e4b6ec62047afc70cb5440e102d286d07de736298f66647&=&format=webp&quality=lossless"
              alt="Company Logo"
              width={172}
              height={172}
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-800 hover:bg-gray-100">
              <Layout className="w-4 h-4 mr-2" />
              Demo Apps
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-800 hover:bg-gray-100">
              <Users className="w-4 h-4 mr-2" />
              Affiliates (50%)
            </Button>
            <Button
              onClick={handleButtonClick}
              disabled={loading}
              className={`
                relative overflow-hidden font-bold py-2 px-4 rounded-lg shadow-lg
                transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed
                bg-gradient-to-br from-gray-900 to-black text-white
                before:absolute before:inset-0 before:bg-black before:bg-opacity-20
                before:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]
                before:bg-[length:4px_4px] before:opacity-30 before:content-['']
              `}
            >
              {loading ? 'Loading...' : (
                <>
                  Get Started <Zap className="ml-2 h-4 w-4 inline" />
                </>
              )}
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <Separator className="bg-gray-200" />
    </header>
  )
}