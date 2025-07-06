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
            <footer
              ref={footerRef}
              className={`py-16 text-center border-t-2 border-gray-200 dark:border-gray-700 mt-20 transition-all duration-1000 ease-out ${
                footerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
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
                <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                  ©2025 Nabil Lemriki
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
