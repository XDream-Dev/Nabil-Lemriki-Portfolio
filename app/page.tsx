"use client";
export const dynamic = "force-static";

import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ServicesSection } from "@/components/services-section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface DragState {
  isDragging: boolean;
  dragStart: { x: number; y: number };
  canvasOffset: { x: number; y: number };
}

import { useRouter } from "next/navigation";

export default function HomePage() {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    canvasOffset: { x: 0, y: 0 },
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastMoveTime = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Throttle function for better performance
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }, []);

  // Detect scroll events to disable drag during scroll
  const handleScroll = useCallback(
    throttle(() => {
      isScrolling.current = true;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Reset scrolling flag after scroll ends
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    }, 16), // ~60fps
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Don't start dragging if we're scrolling or if target is not the canvas
      if (isScrolling.current || e.target !== canvasRef.current) {
        return;
      }

      e.preventDefault();
      setDragState({
        isDragging: true,
        dragStart: { x: e.clientX, y: e.clientY },
        canvasOffset: dragState.canvasOffset,
      });
    },
    [dragState.canvasOffset]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragState.isDragging || isScrolling.current) return;

      // Throttle mouse move events for better performance
      const now = Date.now();
      if (now - lastMoveTime.current < 16) return; // ~60fps
      lastMoveTime.current = now;

      // Cancel any existing animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const deltaX = e.clientX - dragState.dragStart.x;
        const deltaY = e.clientY - dragState.dragStart.y;

        setDragState((prev) => ({
          ...prev,
          canvasOffset: {
            x: prev.canvasOffset.x + deltaX * 0.15, // Reduced multiplier for smoother movement
            y: prev.canvasOffset.y + deltaY * 0.15,
          },
        }));
      });
    },
    [dragState.isDragging, dragState.dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setDragState((prev) => ({ ...prev, isDragging: false }));
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  // Handle wheel events to prioritize scrolling over dragging
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      // If dragging, stop it to allow smooth scrolling
      if (dragState.isDragging) {
        setDragState((prev) => ({ ...prev, isDragging: false }));
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      }
    },
    [dragState.isDragging]
  );

  // Set up global event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (dragState.isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove, {
        passive: false,
      });
      document.addEventListener("mouseup", handleGlobalMouseUp, {
        passive: true,
      });

      // Disable text selection during drag
      document.body.style.userSelect = "none";
      document.body.style.pointerEvents = "none";
      if (canvasRef.current) {
        canvasRef.current.style.pointerEvents = "auto";
      }
    } else {
      // Re-enable text selection and pointer events
      document.body.style.userSelect = "";
      document.body.style.pointerEvents = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      // Cleanup styles
      document.body.style.userSelect = "";
      document.body.style.pointerEvents = "";
    };
  }, [dragState.isDragging, handleMouseMove, handleMouseUp]);

  // Set up scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  // Scroll to #services if hash is present on mount
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#services") {
      const el = document.getElementById("services");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  // Animation hooks for each main section
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation({
    threshold: 0.1,
    delay: 100,
    triggerOnce: false,
  });
  const { elementRef: expRef, isVisible: expVisible } = useScrollAnimation({
    threshold: 0.1,
    delay: 200,
    triggerOnce: false,
  });
  const { elementRef: projRef, isVisible: projVisible } = useScrollAnimation({
    threshold: 0.1,
    delay: 300,
    triggerOnce: false,
  });
  const { elementRef: contactRef, isVisible: contactVisible } =
    useScrollAnimation({ threshold: 0.1, delay: 400, triggerOnce: false });
  const { elementRef: footerRef, isVisible: footerVisible } =
    useScrollAnimation({ threshold: 0.1, delay: 500, triggerOnce: false });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden relative transition-colors duration-300 bg-dotted">
      <Navigation />
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
        onWheel={handleWheel}
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
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
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          <div
            className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10 pointer-events-auto"
            style={{ pointerEvents: dragState.isDragging ? "none" : "auto" }}
          >
            {/* Hero Section */}
            <section
              ref={heroRef}
              className={`flex-1 flex flex-col justify-center transition-all duration-1000 ease-out ${
                heroVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: 0 }}
            >
              <HeroSection />
            </section>
            {/* Services Section */}
            <section id="services">
              <ServicesSection />
            </section>
            {/* About Preview Section */}
            <section
              ref={aboutRef}
              className={`min-h-screen flex flex-col justify-center transition-all duration-1000 ease-out ${
                aboutVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <AboutSection />
            </section>
            {/* Experience Section */}
            <section
              ref={expRef}
              className={`min-h-screen flex flex-col justify-center transition-all duration-1000 ease-out ${
                expVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <ExperienceSection />
            </section>
            {/* Projects Section */}
            <section
              ref={projRef}
              className={`flex-1 flex flex-col justify-center min-h-[400px] transition-all duration-1000 ease-out ${
                projVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "min(100vh, 600px)" }}
            >
              <ProjectsSection />
            </section>
            {/* Contact Section */}
            <section
              ref={contactRef}
              className={`flex-1 flex flex-col justify-center min-h-[400px] transition-all duration-1000 ease-out ${
                contactVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "min(100vh, 600px)" }}
            >
              <ContactSection />
            </section>
            {/* Footer */}
            <div className="text-center py-16 mt-16 border-t-2 border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left Side */}
                <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                  © 2025 Nabil Lemriki | XDream.Dev — All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex gap-5 items-center">
                  {/* GitHub */}
                  <a
                    href="https://github.com/XDream-Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.14-.02-2.07-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.41-5.25 5.69.42.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.23 0 .31.2.67.8.56A10.999 10.999 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/nabil-lemriki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.47-2.17 2.98v5.69h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v5.61z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:nabil.lemriki@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>

                  {/* Phone with Tooltip */}
                  <div className="relative group">
                    <div
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition cursor-pointer"
                      aria-label="Phone"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.27 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.26 1l-2.29 2.21z" />
                      </svg>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      +212 6 37 10 17 85
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
