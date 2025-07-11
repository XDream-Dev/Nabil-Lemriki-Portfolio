"use client";

import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [headerText, setHeaderText] = useState("");
  const [subText, setSubText] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);
  const headerComplete = useRef(false);
  const subComplete = useRef(false);
  const fullHeader = "Hi, I'm Nabil Lemriki";
  const fullSub = "A passionate Full-stack Developer & SEO consultant";

  useEffect(() => {
    setMounted(true);

    // Faster header typing animation (70ms per character)
    let i = 0;
    const headerInterval = setInterval(() => {
      if (i < fullHeader.length) {
        setHeaderText(fullHeader.substring(0, i + 1));
        i++;
      } else {
        clearInterval(headerInterval);
        headerComplete.current = true;
        startSubAnimation();
      }
    }, 70); // Faster than before (100ms → 70ms)

    return () => {
      clearInterval(headerInterval);
    };
  }, []);

  const startSubAnimation = () => {
    // Faster subtitle typing animation (30ms per character)
    let j = 0;
    const subInterval = setInterval(() => {
      if (j < fullSub.length) {
        setSubText(fullSub.substring(0, j + 1));
        j++;
      } else {
        clearInterval(subInterval);
        subComplete.current = true;
        // Show logo after shorter delay (200ms)
        setTimeout(() => {
          setShowLogo(true);
        }, 200);
      }
    }, 30); // Faster than before (50ms → 30ms)
  };

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center py-24 text-center min-h-screen"
      aria-labelledby="hero-title"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight"
        >
          {headerText}
          {!headerComplete.current && (
            <span className="animate-pulse border-r-2 border-gray-800 dark:border-gray-100 ml-1 inline-block h-10 w-1 align-middle"></span>
          )}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-medium h-8 flex items-center justify-center gap-2">
          {subText}
          {!subComplete.current && headerComplete.current && (
            <span className="animate-pulse border-r-2 border-gray-600 dark:border-gray-300 ml-1 inline-block h-6 w-1 align-middle"></span>
          )}
          {/* Hi icon GIF with border, only shows when subtitle is fully typed */}
          {subComplete.current && (
            <span className="hidden sm:inline-flex items-center justify-center ml-2 border-2 border-gray-300 dark:border-gray-600 rounded-full p-1 bg-gray-900 dark:bg-white shadow-md transition-all duration-300 animate-hero-pop-up-no-blur">
              <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVxNGl4Z2lmbmYzMG1wenJyYWExYnN4ZG9pcHFjY2ZvcWRiMWJpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/w1OBpBd7kJqHrJnJ13/giphy.gif"
                alt="Hi icon"
                className="w-12 h-12"
                style={{ display: "block" }}
              />
            </span>
          )}
        </p>
      </div>

      {/* Waving hand with pop-up effect (no blur) and hover-to-arrow-down */}
      <div
        className={`relative mt-2 group ${
          showLogo ? "" : "opacity-0 scale-75"
        }`}
        style={{ animationDelay: "0.5s" }}
      >
        <button
          type="button"
          aria-label="Scroll to About"
          onClick={() => {
            const about = document.getElementById("projects");
            if (about) about.scrollIntoView({ behavior: "smooth" });
          }}
          onMouseEnter={() => setHoverKey((k) => k + 1)}
        >
          {/* Waving hand (default), Pointing Down Hand (on hover) */}
          <span className="block group-hover:hidden items-center justify-center">
            <>
              <img
                key={hoverKey}
                src="/1.gif"
                alt="Custom pointing down light"
                className="block dark:hidden w-48 h-48 rotate-0 group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                style={{ filter: "none" }}
              />
              <img
                key={hoverKey + 1000}
                src="/2.gif"
                alt="Custom pointing down dark"
                className="hidden dark:block w-48 h-48 rotate-0 group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                style={{ filter: "none" }}
              />
            </>
          </span>
          <span className="hidden group-hover:flex items-center justify-center">
            {/* Animated Pointing Down Hand GIF with smooth 180deg rotation on hover, restarts on hover */}
            <img
              key={hoverKey}
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2U3cnZmcWJiZG9oZnY5M3J3bTF0cXNjdTk2Nmc1M3M5bWJ4NWg4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lMClXMEGuSJLZBqBh9/giphy.gif"
              alt="Hand pointing down"
              className="w-48 h-48 rotate-0 group-hover:rotate-180 transition-transform duration-500 ease-in-out"
              style={{ filter: "none" }}
            />
          </span>
        </button>
      </div>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes heroPopUpNoBlur {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(40px);
          }
          60% {
            opacity: 1;
            transform: scale(1.08) translateY(-8px);
          }
          80% {
            opacity: 1;
            transform: scale(0.96) translateY(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-hero-pop-up-no-blur {
          animation: heroPopUpNoBlur 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
}
