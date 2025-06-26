"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -5% 0px", triggerOnce = true, delay = 0 } = options
  const elementRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const observerRef = useRef<IntersectionObserver>()

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries

      if (entry.isIntersecting && !hasAnimated) {
        if (delay > 0) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            if (triggerOnce) setHasAnimated(true)
          }, delay)
        } else {
          setIsVisible(true)
          if (triggerOnce) setHasAnimated(true)
        }
      } else if (!triggerOnce && !hasAnimated) {
        setIsVisible(entry.isIntersecting)
      }
    },
    [delay, triggerOnce, hasAnimated],
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    // Create observer with optimized settings
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
      // Add root for better performance
      root: null,
    })

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(element)
        observerRef.current.disconnect()
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [threshold, rootMargin, handleIntersection])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { elementRef, isVisible }
}
