"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface StickyNoteProps {
  id: string
  content: string
  color: string
  x: number
  y: number
  rotation: number
  size?: "small" | "medium" | "large"
  onClick?: () => void
  className?: string
}

export function StickyNote({ content, color, x, y, rotation, size = "small", onClick, className }: StickyNoteProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    small: "w-20 h-20 text-xs",
    medium: "w-24 h-24 text-sm",
    large: "w-28 h-28 text-sm",
  }

  return (
    <div
      className={cn(
        "absolute p-3 rounded-lg cursor-pointer transition-all duration-300 select-none",
        "hover:scale-110 hover:shadow-xl hover:z-20 shadow-lg",
        "before:absolute before:inset-0 before:bg-black/5 before:rounded-lg before:transform before:translate-x-1 before:translate-y-1 before:-z-10",
        color,
        sizeClasses[size],
        className,
      )}
      style={{
        left: `${x}px`,
        top: `${y + 60}px`, // Add 60px offset to position below "Yours Truly"
        transform: isHovered ? "rotate(0deg) translateY(-4px)" : `rotate(${rotation}deg)`,
        filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.15))",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.()
        }
      }}
      aria-label={`Sticky note: ${content}`}
    >
      <div className="flex items-center justify-center h-full text-center font-semibold text-gray-800 dark:text-gray-900 whitespace-pre-line leading-tight">
        {content}
      </div>
    </div>
  )
}
