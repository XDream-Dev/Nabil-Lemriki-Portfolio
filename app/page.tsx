"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

interface DragState {
  isDragging: boolean
  dragStart: { x: number; y: number }
  canvasOffset: { x: number; y: number }
}

export default function HomePage() {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    canvasOffset: { x: 0, y: 0 },
  })

  const canvasRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const lastMoveTime = useRef<number>(0)
  const isScrolling = useRef<boolean>(false)
  const scrollTimeout = useRef<NodeJS.Timeout>()

  // Throttle function for better performance
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }, [])

  // Detect scroll events to disable drag during scroll
  const handleScroll = useCallback(
    throttle(() => {
      isScrolling.current = true

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      // Reset scrolling flag after scroll ends
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 150)
    }, 16), // ~60fps
    [],
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Don't start dragging if we're scrolling or if target is not the canvas
      if (isScrolling.current || e.target !== canvasRef.current) {
        return
      }

      e.preventDefault()
      setDragState({
        isDragging: true,
        dragStart: { x: e.clientX, y: e.clientY },
        canvasOffset: dragState.canvasOffset,
      })
    },
    [dragState.canvasOffset],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragState.isDragging || isScrolling.current) return

      // Throttle mouse move events for better performance
      const now = Date.now()
      if (now - lastMoveTime.current < 16) return // ~60fps
      lastMoveTime.current = now

      // Cancel any existing animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        const deltaX = e.clientX - dragState.dragStart.x
        const deltaY = e.clientY - dragState.dragStart.y

        setDragState((prev) => ({
          ...prev,
          canvasOffset: {
            x: prev.canvasOffset.x + deltaX * 0.15, // Reduced multiplier for smoother movement
            y: prev.canvasOffset.y + deltaY * 0.15,
          },
        }))
      })
    },
    [dragState.isDragging, dragState.dragStart],
  )

  const handleMouseUp = useCallback(() => {
    setDragState((prev) => ({ ...prev, isDragging: false }))
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Handle wheel events to prioritize scrolling over dragging
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      // If dragging, stop it to allow smooth scrolling
      if (dragState.isDragging) {
        setDragState((prev) => ({ ...prev, isDragging: false }))
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
        }
      }
    },
    [dragState.isDragging],
  )

  // Set up global event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e)
    const handleGlobalMouseUp = () => handleMouseUp()

    if (dragState.isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove, { passive: false })
      document.addEventListener("mouseup", handleGlobalMouseUp, { passive: true })

      // Disable text selection during drag
      document.body.style.userSelect = "none"
      document.body.style.pointerEvents = "none"
      if (canvasRef.current) {
        canvasRef.current.style.pointerEvents = "auto"
      }
    } else {
      // Re-enable text selection and pointer events
      document.body.style.userSelect = ""
      document.body.style.pointerEvents = ""
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      // Cleanup styles
      document.body.style.userSelect = ""
      document.body.style.pointerEvents = ""
    }
  }, [dragState.isDragging, handleMouseMove, handleMouseUp])

  // Set up scroll listener
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      container.removeEventListener("scroll", handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [handleScroll])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden relative transition-colors duration-300 bg-dotted">
      <Navigation />

      <div
        ref={containerRef}
        className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
        onWheel={handleWheel}
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch", // Better iOS scrolling
        }}
      >
        <div
          ref={canvasRef}
          className={`relative min-h-screen transition-transform duration-75 ease-out ${
            dragState.isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          style={{
            transform: `translate3d(${dragState.canvasOffset.x}px, ${dragState.canvasOffset.y}px, 0)`,
            willChange: dragState.isDragging ? "transform" : "auto",
            backfaceVisibility: "hidden", // Prevent flickering
            perspective: "1000px", // Enable hardware acceleration
          }}
        >
          {/* Main Content Container */}
          <div
            className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10 pointer-events-auto"
            style={{
              // Ensure content doesn't interfere with drag detection
              pointerEvents: dragState.isDragging ? "none" : "auto",
            }}
          >
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />

            {/* Footer */}
            <footer className="py-16 text-center border-t-2 border-gray-200 dark:border-gray-700 mt-20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Built with 💜 by Nabil using{" "}
                  <a
                    href="https://framer.com"
                    className="underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Framer
                  </a>{" "}
                  & Canvas
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">©2025 Nabil Lemriki</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
