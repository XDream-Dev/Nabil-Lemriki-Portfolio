"use client"

import { useEffect, useState, useCallback, useRef } from "react"

interface Section {
  id: string
  element: HTMLElement
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("")
  const observerRef = useRef<IntersectionObserver>()
  const sectionsRef = useRef<Section[]>([])

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    // Find the section with the highest intersection ratio that's actually visible
    const visibleSections = entries
      .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.1)
      .sort((a, b) => {
        // Prioritize sections that are more in view
        const aRect = a.boundingClientRect
        const bRect = b.boundingClientRect
        const aCenter = Math.abs(aRect.top + aRect.height / 2 - window.innerHeight / 2)
        const bCenter = Math.abs(bRect.top + bRect.height / 2 - window.innerHeight / 2)
        return aCenter - bCenter
      })

    if (visibleSections.length > 0) {
      const mostVisible = visibleSections[0]
      const sectionId = mostVisible.target.id
      setActiveSection(sectionId)
    }
  }, [])

  useEffect(() => {
    // Clear previous sections
    sectionsRef.current = []

    const sections: Section[] = sectionIds
      .map((id) => {
        const element = document.getElementById(id)
        return element ? { id, element } : null
      })
      .filter((section): section is Section => section !== null)

    if (sections.length === 0) return

    sectionsRef.current = sections

    // Create observer with optimized settings for better performance
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: [0.1, 0.3, 0.5],
      rootMargin: "-10% 0px -10% 0px",
      root: null, // Use viewport as root
    })

    sections.forEach(({ element }) => observerRef.current?.observe(element))

    return () => {
      if (observerRef.current) {
        sectionsRef.current.forEach(({ element }) => observerRef.current?.unobserve(element))
        observerRef.current.disconnect()
      }
    }
  }, [sectionIds, handleIntersection])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return activeSection
}
