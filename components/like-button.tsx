'use client'

import { useEffect, useState } from 'react'

interface LikeButtonProps {
  url?: string
}

export function LikeButton({ url }: LikeButtonProps) {
  const isIPLimitEnabled = true
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)
  const [isLiking, setIsLiking] = useState(false)
  const [cooldown, setCooldown] = useState(false)
  const [userIP, setUserIP] = useState<string | null>(null)
  const [hasLiked, setHasLiked] = useState(false)

  const storageKey = url ? `like-${url}` : 'like-default'
  const ipLikedKey = url ? `like-ip-${url}` : 'like-ip-default'

  useEffect(() => {
    setMounted(true)

    if (!isIPLimitEnabled) return
    
    // Fetch user IP
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        setUserIP(data.ip)
        
        // Check if this IP already liked
        const likedIPs = localStorage.getItem(ipLikedKey)
        if (likedIPs) {
          const ipList = JSON.parse(likedIPs)
          if (ipList.includes(data.ip)) {
            setHasLiked(true)
          }
        }
      })
      .catch(err => console.error('Failed to fetch IP:', err))
    
    // Load count from localStorage
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      setCount(parseInt(stored, 10))
    }
  }, [storageKey, ipLikedKey])

  const handleLike = () => {
    if (isLiking || cooldown || (isIPLimitEnabled && (hasLiked || !userIP))) return

    setIsLiking(true)
    setCooldown(true)
    setHasLiked(true)
    
    const newCount = count + 1
    setCount(newCount)
    localStorage.setItem(storageKey, newCount.toString())

    if (isIPLimitEnabled && userIP) {
      // Store IP that liked
      const likedIPs = localStorage.getItem(ipLikedKey)
      const ipList = likedIPs ? JSON.parse(likedIPs) : []
      ipList.push(userIP)
      localStorage.setItem(ipLikedKey, JSON.stringify(ipList))
    }

    // Reset animation state
    setTimeout(() => {
      setIsLiking(false)
    }, 400)

    // Cooldown to prevent spam (1 second)
    setTimeout(() => {
      setCooldown(false)
    }, 1000)
  }

  if (!mounted) return null

  const renderIcon = () => {
    return (
      <img
        src="/like-thumb.webp"
        alt=""
        className="h-full w-full scale-[1.65] object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
      />
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-0 my-2 px-4">
      <div className="relative flex items-start justify-center">
        <button
          onClick={handleLike}
          className="relative group disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={cooldown || (isIPLimitEnabled && hasLiked)}
          aria-label="Like button"
          title={isIPLimitEnabled && hasLiked ? 'You have already liked this!' : 'Click to like!'}
        >
          <div className="relative h-14 w-14 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 sm:h-16 sm:w-16">
            <div
              className={`w-full h-full transition-all duration-300 ${
                isLiking ? 'scale-90' : 'scale-100'
              }`}
            >
              {renderIcon()}
            </div>
          </div>

          {isLiking && (
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-zinc-900/30 animate-ping dark:border-zinc-100/30"
              style={{ animationDuration: '0.6s' }}
            />
          )}
        </button>
      </div>

      <div className="inline-flex min-w-[32px] items-center justify-center bg-transparent px-1 py-0.5 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
        {count}
      </div>

      {hasLiked && (
        <div className="-mt-1 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          liked
        </div>
      )}
    </div>
  )
}
