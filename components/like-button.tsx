'use client'

import { useEffect, useState } from 'react'

interface LikeButtonProps {
  url?: string
}

export function LikeButton({ url }: LikeButtonProps) {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)
  const [isLiking, setIsLiking] = useState(false)
  const [hasLiked, setHasLiked] = useState(false)

  const apiUrl = 'https://applause.chabouis.fr'

  useEffect(() => {
    setMounted(true)

    const applauseUrl = url
      ? new URL(url, window.location.origin).toString()
      : window.location.href

    fetch(`${apiUrl}/get-claps?url=${encodeURIComponent(applauseUrl)}`)
      .then((response) => response.text())
      .then((value) => setCount(Number(value) || 0))
      .catch((error) => console.error('Failed to load applause count:', error))
  }, [url])

  const handleLike = () => {
    if (isLiking || hasLiked) return

    const applauseUrl = url
      ? new URL(url, window.location.origin).toString()
      : window.location.href

    setIsLiking(true)
    const previousCount = count
    setCount(previousCount + 1)

    fetch(`${apiUrl}/update-claps?url=${encodeURIComponent(applauseUrl)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(`1,3.4.0`),
    })
      .then((response) => response.text())
      .then((value) => {
        const serverCount = Number(value)
        if (Number.isFinite(serverCount)) {
          setCount(serverCount)
          setHasLiked(true)
        }
      })
      .catch((error) => {
        setCount(previousCount)
        setHasLiked(false)
        console.error('Failed to save applause:', error)
      })
      .finally(() => setIsLiking(false))
  }

  const renderIcon = () => (
    <img
      src="/like-thumb.webp"
      alt=""
      className="h-full w-full scale-[1.65] object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
    />
  )

  if (!mounted) return null

  const applauseUrl = url
    ? new URL(url, window.location.origin).toString()
    : window.location.href

  return (
    <div className="my-2 flex flex-col items-center justify-center gap-0 px-4">
      <button
        onClick={handleLike}
        className="relative group disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLiking || hasLiked}
        aria-label="Like button"
        title={hasLiked ? 'You have already liked this!' : 'Click to like!'}
      >
        <div className="relative h-14 w-14 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 sm:h-16 sm:w-16">
          <div
            className={`h-full w-full transition-all duration-300 ${isLiking ? 'scale-90' : 'scale-100'}`}
          >
            {renderIcon()}
          </div>
        </div>
        {isLiking && (
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border-2 border-zinc-900/30 dark:border-zinc-100/30" />
        )}
      </button>
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
