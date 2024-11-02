"use client"

import * as React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../sections/lib/utils"
import { BarChart2, Share, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from 'canvas-confetti'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-4 pb-2", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-2", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

const HalloweenHeart = ({ isLiked }: { isLiked: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={isLiked ? "#FF6B6B" : "none"}
    stroke={isLiked ? "#FF6B6B" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <circle cx="9" cy="8" r="1" fill={isLiked ? "#000" : "none"} />
    <circle cx="15" cy="8" r="1" fill={isLiked ? "#000" : "none"} />
    <path d="M8 12s1.5 2 4 2 4-2 4-2" fill="none" />
  </svg>
)

const GhostEmoji = () => (
  <motion.span
    className="absolute text-2xl"
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: [0, 1, 0], y: -50 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    👻
  </motion.span>
)

const CelebrationEmoji = () => (
  <motion.span
    className="absolute text-2xl"
    initial={{ opacity: 0, y: 0, x: 20 }}
    animate={{ opacity: [0, 1, 0], y: -50, x: [20, -20] }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    🎉
  </motion.span>
)

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

interface AnalyticsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  impressions: number;
}

const AnalyticsDialog: React.FC<AnalyticsDialogProps> = ({ isOpen, onClose, impressions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full text-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Analytics</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Impressions</h3>
            <p className="text-3xl font-bold">{impressions}</p>
            <p className="text-sm text-gray-500">
              Number of times your post has been seen by visitors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TwitterCard() {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(1500)
  const [viewCount, setViewCount] = useState(50000)
  const [showAnimations, setShowAnimations] = useState(false)
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false)

  useEffect(() => {
    const storedLikeCount = localStorage.getItem('twitterCardLikeCount')
    const storedIsLiked = localStorage.getItem('twitterCardIsLiked')
    const storedViewCount = localStorage.getItem('twitterCardViewCount')

    if (storedLikeCount) setLikeCount(parseInt(storedLikeCount, 10))
    if (storedIsLiked) setIsLiked(storedIsLiked === 'true')
    if (storedViewCount) {
      setViewCount(parseInt(storedViewCount, 10))
    } else {
      // If there's no stored view count, this is a new view
      const newViewCount = viewCount + 1
      setViewCount(newViewCount)
      localStorage.setItem('twitterCardViewCount', newViewCount.toString())
    }
  }, [])

  const handleLike = useCallback(() => {
    const newIsLiked = !isLiked
    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1

    setIsLiked(newIsLiked)
    setLikeCount(newLikeCount)
    localStorage.setItem('twitterCardIsLiked', newIsLiked.toString())
    localStorage.setItem('twitterCardLikeCount', newLikeCount.toString())

    if (newIsLiked) {
      setShowAnimations(true)
      triggerConfetti()
      setTimeout(() => setShowAnimations(false), 1500)
    }
  }, [isLiked, likeCount])

  const handleViewAnalytics = () => {
    setIsAnalyticsOpen(true)
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#fff] pt-16">
      <Card className="w-full max-w-xl bg-white text-black shadow-md">
        <CardHeader className="flex flex-row space-x-4 items-start pb-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://pbs.twimg.com/profile_images/1835252709987074048/tnXD2wpG_400x400.jpg" alt="Mridul Thareja" />
            <AvatarFallback>MT</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-1">
              <h3 className="font-bold text-[15px]">Mridul Thareja</h3>
              <svg className="h-[18px] w-[18px] fill-current text-[#1D9BF0]" viewBox="0 0 24 24">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
            <div className="flex items-center text-gray-500">
              <span className="text-[15px]">@Innvisionagency</span>
              <span className="mx-1">·</span>
              <span className="text-[15px]">2h</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-[15px] leading-normal">
          <p>Hey everyone! 👋</p>
          <p>I'm 17 years old and I've got some exciting news! 🚀</p>
          <p>I've built a startup for bootstrappers who want to create their own AI tools. 💡</p>
          <p>Don't have a lot of money to get started? No problem! 💪</p>
          <p>Our platform makes it affordable and accessible for everyone. 🌟</p>
          <p>Ready to turn your AI ideas into reality? Let's go! 🔥</p>
          <p className="text-[#1D9BF0]">#AIStartup #YoungEntrepreneur #Bootstrapping</p>
        </CardContent>
        <div className="px-4 text-[13px] text-gray-500">
          <span>4:20 PM · Apr 27, 2024</span>
          <span className="mx-1">·</span>
          <span>Twitter for iPhone</span>
        </div>
        
        <div className="mx-4 my-2 border-t border-gray-200"></div>
        <CardFooter className="flex justify-center space-x-8 text-gray-500">
          <button 
            className="flex items-center space-x-1 hover:text-[#FF6B6B] group relative"
            onClick={handleLike}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <div className="p-2 rounded-full group-hover:bg-[#FF6B6B]/10">
              <HalloweenHeart isLiked={isLiked} />
            </div>
            <span className="text-sm">{likeCount}</span>
            <AnimatePresence>
              {showAnimations && (
                <>
                  <GhostEmoji />
                  <CelebrationEmoji />
                </>
              )}
            </AnimatePresence>
          </button>
          <button 
            className="flex items-center space-x-1 hover:text-[#1D9BF0] group"
            onClick={handleViewAnalytics}
          >
            <div className="p-2 rounded-full group-hover:bg-[#1D9BF0]/10">
              <BarChart2 className="h-5 w-5" />
            </div>
            <span className="text-sm">{viewCount}</span>
          </button>
          <button className="hover:text-[#1D9BF0] group">
            <div className="p-2 rounded-full group-hover:bg-[#1D9BF0]/10">
              <Share className="h-5 w-5" />
            </div>
          </button>
        </CardFooter>
      </Card>
      <AnalyticsDialog 
        isOpen={isAnalyticsOpen} 
        onClose={() => setIsAnalyticsOpen(false)} 
        impressions={viewCount}
      />
    </div>
  )
}