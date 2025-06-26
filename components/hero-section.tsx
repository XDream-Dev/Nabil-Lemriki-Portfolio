"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center py-24 text-center animate-fade-in min-h-screen" aria-labelledby="hero-title">
      <div className="animate-slide-up w-full flex flex-col items-center justify-center">
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight"
        >
          Hi, I'm Nabil Lemriki
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-medium">
          A passionate Full-stack Developer & SEO consultant
        </p>
      </div>

      <div className="inline-block relative animate-scale-in mt-2" style={{ animationDelay: "0.5s" }}>
        <div
          className="bg-black dark:bg-white rounded-xl p-5 transform rotate-12 shadow-lg transition-all duration-500 flex items-center justify-center"
          style={{
            filter: "drop-shadow(3px 6px 12px rgba(0,0,0,0.2))",
          }}
        >
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            alt="Waving hand"
            className="w-12 h-12"
            style={{ filter: "none" }}
          />
        </div>
      </div>
    </section>
  )
}
